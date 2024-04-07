import './App.css';

import {useEffect} from 'react';

export default function App() {
  const handlePaste = event => {
    console.log(event.clipboardData.getData('text'));
  };

  useEffect(() => {
    const handlePasteAnywhere = event => {
      console.log(event.clipboardData.getData('text'));
    };

    window.addEventListener('paste', handlePasteAnywhere);

    return () => {
      window.removeEventListener('paste', handlePasteAnywhere);
    };
  }, []);

  return (
    <div>
      <h2>Hello world</h2>

      {/* 👇️ handle paste event on an input field */}
      <input
        onPaste={handlePaste}
        type="text"
        id="message"
        autoComplete="no"
      />
    </div>
  );
}
