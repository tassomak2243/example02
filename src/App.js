import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [watermarkText, setWatermarkText] = useState('');
  const [textSize, setTextSize] = useState(20);
  const [textColor, setTextColor] = useState('#ffffff');
  const [textPosition, setTextPosition] = useState('top-left');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Optionally handle submission logic
  };

  return (
    <div className="App">
      <h1>Image Watermark Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Watermark Text:
            <input
              type="text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Text Size:
            <input
              type="number"
              value={textSize}
              onChange={(e) => setTextSize(e.target.value)}
              min="10"
              max="100"
            />
          </label>
        </div>
        <div>
          <label>
            Text Color:
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Text Position:
            <select
              value={textPosition}
              onChange={(e) => setTextPosition(e.target.value)}
            >
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="center">Center</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {imageUrl && (
        <div className="image-container">
          <img
            src={imageUrl}
            alt="User Provided"
            className="watermarked-image"
          />
          <div
            className={`watermark-text ${textPosition}`}
            style={{
              color: textColor,
              fontSize: `${textSize}px`,
            }}
          >
            {watermarkText}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
