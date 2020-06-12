import React, { useState } from 'react';
import './temp.css';


function Temp(){

    console.log('Function start');

    let [status, onoff]=useState(true);
    let [gettemp, setTemp]=useState(22);


    function setStatus(){
      
        onoff(true);
          }
          function setOff(){
      
            onoff(false);
              }



function decTemp(){
    console.log('Temperature Button pressed');
    setTemp(--gettemp);
}

function incTemp(){
    console.log('Temperature Button pressed');
    setTemp(++gettemp);
}


console.log(status);
    return (
    <div className={`bulb ${status?'on':'off'}`}>
        
        <h1>Assignment # 4 by Hayat Muhammad Niazi..!</h1>
        <hr/>
    <button  onClick={setStatus}>Bulb On</button>
    <button  onClick={setOff}>Bulb Off</button>
    <br/>
    <button onClick={incTemp}>Temperature +</button>
    <button onClick={decTemp}>Temperature -</button>
    <p>Temperature is : {gettemp} degree</p>
    Temperature is {gettemp>23?"Hot today":"Weather is awesome..!"}
    
    </div>
    );
    }

export default Temp;