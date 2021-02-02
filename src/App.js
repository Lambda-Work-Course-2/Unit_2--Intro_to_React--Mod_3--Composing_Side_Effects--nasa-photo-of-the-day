import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Image from './Components/image.js';
import Info from './Components/info.js';
import {AppWrap} from './Components/styles';


function App() {
     const [data, setData] = useState('');

     useEffect(() => {
          axios.get(
               'https://api.nasa.gov/planetary/apod?api_key=JcscI1lYExVXYgatImbIRf0G728iv6lXTqNeEqge&date=2020-12-18'
          )
               .then((returnedData) => {
                    setData(returnedData.data);
                    console.log(returnedData);
               })
               .catch((error) => {
                    console.log('file: App.js ~ error', error);
               })
               .finally(() => {
                    console.log('file: App.js ~ Promise Complete');
               });
     }, []);

     return (
          <AppWrap>
               <Image url={data.url} title={data.title} />
               <Info explanation={data.explanation} copyright={data.copyright} date={data.date}/>
          </AppWrap>
     );
}

export default App;
