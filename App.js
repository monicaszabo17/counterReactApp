

import React, {useState} from "react";




function App () {
    const[currentCount, setCurrentCount] = useState(0);
    const increaseFunc = ()=> {
      setCurrentCount(currentCount => currentCount + 1);
    };
    const decreaseFunc = () => {
      setCurrentCount(currentCount => currentCount - 1);
    };
    const resetFunc = () => {
      setCurrentCount(0);
    };

    
        return (
               <>
                   <h3>React counter app</h3>
                   <main >
                      <div id="one">
                          <span id="counter">Counter number:{currentCount}</span>
                      </div>
                      <br/>
                      <div id="two">
                           <span>Increase number:</span>
                           <input type="button" onClick={increaseFunc} id="increase" value="+"></input>
                      </div>
                      <br/>
                      <div id="three">
                            <span>Decrease number:</span>
                            <input type="button" onClick={decreaseFunc} id="decrease" value="-"></input>
                      </div>
                      <br/>
                      <div id="four">
                           <input type="reset" onClick={resetFunc} id="restart" ></input>
                      </div>
                      <br/>
                    </main>
                 </>
       );
     
 
  }     


export default App;
