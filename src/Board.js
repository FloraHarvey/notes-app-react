import React from 'react'
import Note from './Note'


class Board extends React.Component{

  constructor(props) {
      super(props);
      this.state = {notes: []
      };
      this.nextId = this.nextId.bind(this)
      this.add = this.add.bind(this)
      this.update = this.update.bind(this);
      this.remove = this.remove.bind(this);
      this.eachNote = this.eachNote.bind(this);
    }

    nextId() {
      this.uniqueId = this.uniqueId || 0         // set uniqueId as prop of board, if doesn't exist yet return 0
      return this.uniqueId++                     // increment uniqueId for next note
    }

    add(text) {
      var notes =
        this.state.notes.concat(              // return new array, concatenating existing array + new note
        {
          id: this.nextId(),
          text: text
        })

      this.setState({notes})                  // set state as new array
    }

    update(newText, id) {
      var notes = this.state.notes.map(     // iterate through existing array
        note => (note.id !== id ) ?         // if the note id doesn't match edited note
          note :                            // return existing note
           {
             ...note,
             text: newText                  // otherwise set newText to note text
           }
      )
      this.setState({notes})
    }

    remove(id) {
      var notes = this.state.notes.filter(note => note.id !== id)   //take existing array of notes, create a new array with filter function, that filters out removed note
      this.setState({notes})                                        //then save new array to state.
    }

    eachNote(note) {                                          // helper for render function - renders note component with props for editing/removing, and displays note text
      return (<Note key={note.id}
                    id={note.id}
                    onChange={this.update}                    // when onChange is fired, call update function
                    onRemove={this.remove}>
                    {note.text}
              </Note>)
    }

    render() {
      return (<div className='board'>
                  {this.state.notes.map(this.eachNote)}
                  <button onClick={() => this.add()}>+</button>
              </div>)
    }
  }

export default Board;
