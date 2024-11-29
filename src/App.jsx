// src/App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
// src/App.js
import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

const App = () => {
  const [html, setHtml] = useState('<h1>Hello, World!</h1>');
  const [css, setCss] = useState('h1 { color: blue; }');
  const [js, setJs] = useState('console.log("Hello from JavaScript!");');
  const [activeEditor, setActiveEditor] = useState(null); // Initially, no editor is active

  const handleToggle = (editor) => {
    // Toggle the active state of the editor
    setActiveEditor(activeEditor === editor ? null : editor);
  };

  const handleEditorClick = (editor) => {
    // Set the clicked editor as active
    setActiveEditor(editor);
  };

  return (
    <div className="app">
      <div className="editors">
        <Editor
          code={html}
          setCode={setHtml}
          language="HTML"
          isActive={activeEditor === 'html'}
          onToggle={() => handleToggle('html')}
          onClick={() => handleEditorClick('html')}
        />
        <Editor
          code={css}
          setCode={setCss}
          language="CSS"
          isActive={activeEditor === 'css'}
          onToggle={() => handleToggle('css')}
          onClick={() => handleEditorClick('css')}
        />
        <Editor
          code={js}
          setCode={setJs}
          language="JavaScript"
          isActive={activeEditor === 'js'}
          onToggle={() => handleToggle('js')}
          onClick={() => handleEditorClick('js')}
        />
      </div>
      <Preview html={html} css={css} js={js} />
    </div>
  );
};

export default App;