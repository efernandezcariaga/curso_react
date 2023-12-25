import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './styles.css'; //Asi importo estilos CSS en react. En este caso se hizo de forma global, es decir, a todos los componentes.

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp  subTitle={123}/>
    </React.StrictMode>
)