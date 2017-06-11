import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({
  showMarkdown,
  handleCheck,
  toolbarButtons,
  asHTML,
  isPreview
}) => {
  const buttons = toolbarButtons.map((obj, i) => (
    <button
      type="button"
      title={obj.tooltip}
      onClick={() => obj.callback()}
      className="react-md-toolbar-button"
      key={i} >
      <svg className={`icon icon-${obj.icon}`}>
        <use xlinkHref={`#icon-${obj.icon}`}></use>
      </svg>
    </button>
  ));

  return (
    <nav className="react-md-toolbar">
      <div className="react-md-tab">
        <button
          type="button"
          className={isPreview ? "react-md-tablinks active" : "react-md-tablinks"}
          onClick={() => showMarkdown(false)}>Write</button>
        <button
          type="button"
          className={isPreview ? "react-md-tablinks" : "react-md-tablinks active"}
          onClick={() => showMarkdown(true)}>Preview</button>
      </div>
      <input
        name="Preview as HTML"
        type="checkbox"
        checked={asHTML}
        onChange={handleCheck} />
      <span className="react-md-toolbar-item">Preview as HTML</span>
      {isPreview && buttons}
    </nav>
  );
};

Toolbar.propTypes = {
  showMarkdown: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  toolbarButtons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      callback: PropTypes.func.isRequired,
      tooltip: PropTypes.string
    })
  ),
  asHTML: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool.isRequired
};

export default Toolbar;
