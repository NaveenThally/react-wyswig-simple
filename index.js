import React from 'react';
import { render } from 'react-dom';
import './style.css';

/**
 * Simple WYSWIG editor
 * @supports BOLD, ITALIC, UNDERLINE
 */
function Wyswig() {

  /**
   * This is the place to edit when you need to add more options to your WYSWIG
   */
  function applyStyle(styleParam) {
    document.execCommand(styleParam.target.value, false, '');
  }

  return (
    <div className='editor'>
      <div className='editorOptions'>
        <button
          value="bold"
          onClick={applyStyle}>
          B
        </button>
        <button
          value="italic"
          onClick={applyStyle}>
         I
        </button>
        <button
          value="underline"
          onClick={applyStyle}>
          U
        </button>
        <button
          value="cut"
          onClick={applyStyle}>
          CT
        </button>
        <button
          value="copy"
          onClick={applyStyle}>
          CP
        </button>
        <button
          value="justifyLeft"
          onClick={applyStyle}>
          LA
        </button>
        <button
          value="justifyCenter"
          onClick={applyStyle}>
          CA
        </button>
        <button
          value="justifyRight"
          onClick={applyStyle}>
          RA
        </button>
         <button
          value="undo"
          onClick={applyStyle}>
          UD
        </button>
        <button
          value="redo"
          onClick={applyStyle}>
          RD
        </button>
      </div>
      <div className='editorContent'>
      <p contentEditable></p>
      </div>
    </div>
  );
}


render(<Wyswig />, document.getElementById('root'));