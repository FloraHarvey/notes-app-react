import React from 'react';
import ReactDOM from 'react-dom';
import Note from '../src/Note';
import { mount } from "enzyme";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Note />, div);
});

describe("Note", () => {
  let props;
  let mountedNote;
  const note = () => {
    if (!mountedNote) {
      mountedNote = mount(
        <Note {...props} />
      );
    }
    return mountedNote;
  }

  beforeEach(() => {
    props = {
      noteText: undefined,
    };
    mountedNote = undefined;
  });

  it("always renders a div", () => {
    const divs = note().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains text that gets rendered", () => {
      const divs = note().find("div");
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(note().children());
    });
  });
});
