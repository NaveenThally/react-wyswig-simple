import React, { Component } from 'react';
import { render } from 'react-dom';
import Label from './Label';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      html: "React Content is inn here"
    };
    this.applyStyle = this.applyStyle.bind(this);
  }
  handleChange = (event) => {
    this.setState({ html: event.target.value }, () => { console.log(this.state.html); });
  };

  applyStyle(styleParam) {
    console.log('Styles s', styleParam.target.value)
    var sel = window.getSelection();
    console.log('Slece', document.getSelection());
    document.execCommand(styleParam.target.value, false, '');
  }

  render() {
    return (
      <div className='editor'>
      <div className='editorOptions'>
      <button
          value="bold"
          onClick={ this.applyStyle }>
          B
        </button>
        <button
          value="italic"
          onClick={ this.applyStyle }>
          I
        </button>
        <button
          value="underline"
          onClick={ this.applyStyle }>
          U
        </button>
      </div>
      <div className='editorContent'>
        <Label html={this.state.html} onChange={this.handleChange} />
      </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));