// src/Editor.js
import React from 'react';

const Editor = ({ code, setCode, language, isActive, onToggle, onClick }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            alert('Code copied to clipboard!');
        });
    };

    return (
        <div className={`editor ${isActive ? 'active' : 'inactive'}`} onClick={onClick}>
            <div className="editor-header">
                <h2>{language} Editor</h2>
                <div>
                    <button onClick={copyToClipboard} className="copy-button">
                        <i className="fas fa-copy"></i> {/* Font Awesome copy icon */}
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className="toggle-button">
                        <i className={isActive ? "fas fa-compress" : "fas fa-expand"}></i> {/* Expand/Compress icon */}
                    </button>
                </div>
            </div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows="10"
                className="editor-textarea" // Add a class for styling
                spellCheck="false" // Disable spell checking to prevent squiggles
                readOnly={!isActive} // Make textarea read-only when inactive
            />
        </div>
    );
};

export default Editor;