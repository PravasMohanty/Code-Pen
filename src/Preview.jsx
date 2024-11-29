// src/Preview.js
import React from 'react';

const Preview = ({ html, css, js }) => {
    return (
        <div className="preview">
            <h2>Preview</h2>
            <iframe
                title="preview"
                style={{ width: '100%', height: '300px', border: '1px solid #ccc' }}
                sandbox="allow-scripts"
                srcDoc={`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>${css}</style>
                </head>
                <body style="background: #fff;">
                    ${html}
                    <script>${js}</script>
                </body>
                </html>`}
            />
        </div>
    );
};

export default Preview;
