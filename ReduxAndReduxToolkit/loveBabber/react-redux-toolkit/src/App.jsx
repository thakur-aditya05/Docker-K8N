
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
      dispatch(increment());
  }

  function handleDecrementClick() {
      dispatch(decrement());
  }

  function handleResetClick() {
      dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
    
  }
  function formBehaviour(event) {
    event.preventDefault();
    setAmount("");
    
  }

  return (
    <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br/>
        <br/>
        <button onClick={handleResetClick}> Reset </button>
        <br/>
        <br/>
      <form onSubmit={formBehaviour}>
        <input 
          type='Number'
          value={amount}
          placeholder='Enter Amount'
          onChange={(e) => setAmount(e.target.value)}
         />
         <button onClick={handleIncAmountClick}> Inc by Amount </button>
      </form>
         <br/>
        <br/>
        
    </div>
  )
}

export default App
