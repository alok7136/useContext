import React,{useContext} from 'react';
import {Globaldata} from './parent';
function SuperChild() {
    const {color,name,newName,newColor}= useContext(Globaldata);
    const newupdate = ()=>{
        newName("this is a test updated Name....")
    }
    const newColorvalue =()=>{
        newColor('pink')
    }
  return(<>
  <div style={{backgroundColor:"green"}}>
      <b style={{color:color}}>SuperChild Component</b>
      <br/>
      <button onClick={newupdate}>{name}</button><br/>
      <button onClick={newColorvalue}>Component Color Value</button>
      </div>
      </>
  );
}

export default SuperChild;