import React from 'react';
import  './ItemList.css'

function ItemList({ list }){
    if(!list) return <p></p>
    return(
        <div className="list">
            <ul> 
                {console.log(list)}
                {list.map((item, i) => <li key={i}>{item.searchterm} </li>)} 
            </ul>
        </div>
    )
}
  
export default ItemList;


