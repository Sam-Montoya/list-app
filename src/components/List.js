import React from 'react';

function List(props) {
    var listJobs = props.list.map((item, i) => {
        return (
            <div key={i} className="list_item">
                <li>{item}</li>
                <button onClick={() => props.removeItem(i)}>Remove</button>
            </div>
        )
    })

   return (
        <div>
            <ul>
                {listJobs}
                
           </ul>
            
       </div>
    )
}

export default List