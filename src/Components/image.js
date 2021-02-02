import React from 'react';
import {StyledH1, StyledImg} from './styles';

function Image(props) {
     if (!props.url) return <h3>Loading...</h3>;
     else
          return (
               <div>
                    <StyledH1>{props.title}</StyledH1>
                    <StyledImg src={props.url} alt={props.title} />
                  
               </div>
          );
}
export default Image;
