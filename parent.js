import SuperChild from './superchild';
import Child from './child';
import {createContext,useState} from 'react';
export const Globaldata = createContext();
function Parent() {
    const[name,newName]=useState("Parent Name")
    const[color,newColor]=useState("red")
  return(
    <Globaldata.Provider value={{color:color,name:name ,newName,newColor}}>  
      <h1 style={{textAlign:'center'}}>Use Context Hook Working......</h1>
      <b>Parent Component</b><br/>
      <Child/>
      <SuperChild/>
    </Globaldata.Provider>
  );
}

export default Parent;