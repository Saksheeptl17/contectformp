
import { useState } from "react";
import './App.css';
import FormInput from "./components/FormInput.js";


const App = () => {

  const [values, setValues] = useState({
    playername: "",
  });

  const inputs = [
    {
      id: 1,
      name: "playername",
      type: "text",
      placeholder: "Playername",
      errorMessage:
        "Playername should be 3-16 characters and shouldn't include any special character!",
      label: "Playername",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    }]

    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>CriccBuzz</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    );
  };


export default App;
