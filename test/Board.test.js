import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../src/Board';
import Note from '../src/Note';
import { mount } from "enzyme";
import renderer from 'react-test-renderer';

// To Test

// *** if user clicks add button, calls add fn to add new note to notes array with unique id and sets state of notes array and renders new empty note
// *** unique ID is determined by nextId fn
// *** onChange calls update method which sets text of note to newText - changes state and renders new note
// *** onRemove calls remove fn which removes note from array and render - sets state and renders new array
// *** A div is always rendered, which contains all notes

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
});

describe("Board", () => {
  let props;
  let mountedBoard;
  const board = () => {
    if (!mountedBoard) {
      mountedBoard = mount(
        <Board {...props} />
      );
    }
    return mountedBoard;
  }

  beforeEach(() => {
    mountedBoard = undefined;
  });

  it("always renders a div", () => {
    const divs = board().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains notes that gets rendered", () => {
      const divs = board().find("div");
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(board().children());
    });
  });
});
