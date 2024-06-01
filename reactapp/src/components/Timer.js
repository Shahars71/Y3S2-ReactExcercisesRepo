
import React , {useEffect, useState} from 'react';

function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [stoptime, resetTimer] = useState(0);
    const [winMessage, putMessage] = useState(null);
  
    useEffect(() => {
      
      const interSec = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 330);
  
  
      return () => {
        clearInterval(interSec);
      }
    }, [])
    
    if (seconds >= 100)
      {
        setSeconds(0);
      }
  
  
    const handleButton = () => {
      resetTimer(seconds);
      setInterval(0);
    }
  
    const messageHandler = () =>{
  
      if ((seconds % 7) === 0)
        {
          putMessage(
            <p>You Win!</p>
          );
        }
        else 
        {
          putMessage(
            <p>You Lose!</p>
          );
        }
    }
  
  
    return (
  
      <div>
        <p>Timer: {seconds} seconds</p>
        <button onClick={messageHandler}>click to reset timer</button>
        <p>{winMessage}</p>
      </div>
  
    )
  
  }
  
  export default Timer;