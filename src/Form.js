import { useState } from "react";

const initialState = {
  username: "",
};

function Form() {
  const [state, setState] = useState(initialState);
  function handleChange(e) {
    setState(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(state);
      
  }
 

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="name"
      />
      <button type="submit">Submit</button>
    </form>
    <h1>{state}</h1>
    </div>
  );
}

 export default Form;
