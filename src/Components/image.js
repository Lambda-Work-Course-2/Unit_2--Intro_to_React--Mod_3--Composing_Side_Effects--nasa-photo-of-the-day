import React from 'react';

function Image(props) {
     if (!props.url) return <h3>Loading...</h3>;
     else
          return (
               <div>
                    <img src={props.url} alt={props.title} />
                    <h1>{props.title}</h1>
               </div>
          );
}
export default Image;
