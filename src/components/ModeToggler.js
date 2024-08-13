import React, { useState } from 'react';

function App() {
    const [word, setWord] = useState("hello");

    const updateWord = () => {
        setWord("Nice to meet you"); // This will set the state to the current value of word, which is "hello"
    };

    return (
        <div className='App'>
            <p>Current word: {word}</p>
            <button onClick={updateWord}>Update Word</button>
        </div>
    );
}

export default App;
