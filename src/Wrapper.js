import React from 'react';
import Image from './b.jpg';
import Title from './component';
function Wrapper() {
  return (
    <div> 
<img src={Image}/>
<Title style={{color:"red"}} titre="MyNameHere"/>
<Title titre="MyJobHere"/>
    </div>


    
  );
}

export default Wrapper;
