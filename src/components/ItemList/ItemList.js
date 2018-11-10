import React from 'react';
import  './ItemList.css'

function ItemList({ list }){
    if(!list) return <p></p>
    // console.log(list, "list")
    return(
        <div className="list">
            <ul> 
                {console.log(list)}
                {list.map((item, i) => <li key={i}>{item.searchterm} {item.nrResults}</li>)} 
            </ul>
        </div>
    )
}
  
export default ItemList;


