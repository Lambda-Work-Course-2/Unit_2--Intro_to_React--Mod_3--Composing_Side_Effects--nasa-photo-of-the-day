import React from 'react';
import {InfoWrap} from './styles'


function Info(props) {
     return (
               <InfoWrap>
                    <p>{props.explanation}</p>
                    <h2>Copyright: {props.copyright}</h2>
                    <h2>Picture of the day on: {props.date}</h2>
               </InfoWrap>
          );
}
export default Info;


