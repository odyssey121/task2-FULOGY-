import React, { useState } from "react";
// components included intro app
import Header from './header';
import Main from './main';
import Bottom from './bottom';
import { Drawer } from './drawer';
// styles
import './App.css';


const App = (props) => {
    const [shift, setShift] = useState({ shift: true });
    return (
        <div id='AppWrap'>
            <Header />
            {
                shift
                && <Main setShift={setShift} shift={shift} />
                || <Drawer setShift={setShift} shift={shift} />
            }
            <Bottom />
        </div>
    )
}

export default App;