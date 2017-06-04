import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/styles.css';

import MarkdownEditor from './components/markdownEditor';

ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('react-root')
);

if (module.hot) module.hot.accept();
