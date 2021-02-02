import React from 'react';


function Info(props) {
     return (
               <div>
                    <p>{props.explanation}</p>
                    <h2>Copyright: {props.copyright}</h2>
                    <h2>Picture of the day on: {props.date}</h2>

               </div>
          );
}
export default Info;


