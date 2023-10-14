// src/WordCounter.js
import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="centered-box">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type your paragraph here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
