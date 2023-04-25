import React, { useEffect, useState } from "react";
import { arrayItems } from './AIOptions';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { Configuration, OpenAIApi } from 'openai';

function App() {

  const configuration = new Configuration({
    apiKey: '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'
  });

  const openai = new OpenAIApi(configuration);
  const [result, setResult] = useState("");
const [option,setOption] = useState({});
const [input,setInput] = useState('');

const selectOption = (option) =>{
  setOption(option)
};

const doStuff = async () =>{

  const response = await openai.createCompletion({...option,prompt:input});
  console.log('response',response)
  setResult(response.data.choices[0].text);
};
console.log(option)
  return (
    <div className='App'>
      {Object.values(option).length===0?<OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>:<Translation doStuff={doStuff} setInput={setInput} />}
    </div>
  );
}

export default App;
