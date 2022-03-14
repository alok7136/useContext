import React,{useContext} from 'react';
import {Globaldata} from './parent';
function Child() {
    const {color,name}= useContext(Globaldata);
  return(<>
  <div style={{backgroundColor:"yellow"}}>
      <b style={{color:color}}>Child Component</b>
      <br/>
      <div>{name}</div>
      </div>
      </>
  );
}

export default Child;