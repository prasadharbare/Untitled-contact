import { useRef} from "react";

function App() {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputMessage = useRef(null);
  
  const handleSubmit = (e) => {
    console.log(inputName .current.value);
    console.log(inputEmail .current.value);
    console.log(inputMessage.current.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" ref={inputName} placeholder="Enter Your Name"/>
      <input type="text" ref={inputEmail} placeholder="use @company,com"/>
      <input type="text" ref={inputMessage} placeholder="mesaage"/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}
export default App;