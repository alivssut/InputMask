import React from 'react';
import Input from "./Input";
import json from "./cities.json"
function App() {
    return <div>
        <Input hint={""} handleChange={handleChange}></Input>
    </div>
}

function handleChange(e) {
    var data = json
    var inputText = e.target.value
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i].substr(0 , inputText.length) == inputText){
            document.querySelector('label').innerHTML = data[i]
            break
        }else {
            document.querySelector('label').innerHTML = ""
        }
    }
    if (inputText == ""){
        document.querySelector('label').innerHTML = ""
    }

};

export default App;
