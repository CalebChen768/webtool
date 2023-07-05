import React, { useState } from 'react';
import './Random.css'
const RandomNumber = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [result, setResult] = useState(null);

    // xhr.open('GET', 'https://api.random.org/json-rpc/4/invoke?method=generateIntegers&params={"apiKey":"YOUR-API-KEY","n":10,"min":1,"max":100,"replacement":true}&id=1');

    const handleGenerateClick = () => {
        // create a JSON-RPC request object
        let request = {
            jsonrpc: "2.0",
            method: "generateIntegers",
            params: {
                apiKey: "4ccd06ec-1a25-4b18-8120-63ea4523f609",
                n: 1,
                min: min,
                max: max,
                replacement: true
            },
            id: 1
        };

        // send the request using XMLHttpRequest
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.random.org/json-rpc/4/invoke");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status == 200) {
                // parse the response and get the result
                let response = JSON.parse(xhr.responseText);
                let result = response.result.random.data[0];
                setResult(result);
            } else {
                // handle error
                console.error(xhr.statusText);
            }
        };
        xhr.onerror = () => {
            // handle error
            console.error(xhr.statusText);
        };
        xhr.send(JSON.stringify(request));
    };


    const handleMinChange = (event) => {
        setMin(parseInt(event.target.value));
    };

    const handleMaxChange = (event) => {
        setMax(parseInt(event.target.value));
    };

    // const handleGenerateClick = () => {
    //   setResult(Math.floor(Math.random() * (max - min + 1)) + min);
    // };

    return (
        <div>
            <div className="random-number">
                <div className="random-number-generator">
                    <h1>Random Number Generator</h1>
                    <div className="input-group">
                        <label htmlFor="min-input">Min   </label>
                        <input type="number" id="min-input" value={min} onChange={handleMinChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="max-input">Max   </label>
                        <input type="number" id="max-input" value={max} onChange={handleMaxChange} />
                    </div>
                    <button onClick={handleGenerateClick}>Generate</button>
                    {result !== null && <div className="result">{result}</div>}
                </div>
            </div>
        </div>
    );
};

export default RandomNumber;