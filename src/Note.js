import React from 'react'

class Note extends React.Component {

  constructor(props) {
      super(props);
      this.state = {editing: false};
      this.edit = this.edit.bind(this);
      this.save = this.save.bind(this);
      this.remove = this.remove.bind(this);
  }

  edit() {
    this.setState({editing: true})
  }

  save() {
    this.props.onChange(this.refs.newText.value, this.props.id)     // whenever onChange is fired, attach newText and id values
    this.setState({editing: false})
  }

  remove() {
    this.props.onRemove(this.props.id)
  }

  renderForm() {
    return (
      <div className="note">
        <textarea ref="newText"
                  defaultValue={this.props.children}>
        </textarea>
        <button onClick={this.save}>SAVE</button>
      </div>
    )
  }

  renderDisplay() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>EDIT</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    )
  }

  render() {
    if(this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderDisplay()
    }
  }
}

export default Note
