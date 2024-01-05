import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ClassCom from './1.Component/class/ClassCom.jsx';
import FunctionalCom from './2.functional/FunctionalCom.jsx';
import ClassCom2 from './1.Component/ClassCom2.jsx';
import Home from './3.Style/Home.jsx';
import Home2 from './4.TaskDesign/Home2.jsx';
import State from './5.State/State.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Props from './6.Props/Functional/props.jsx';



export default function App() {
  return (
    <div>
      {/* ==================   Header,Body ,Footer TASK ================= */}

      {/* <ClassCom />
    <FunctionalCom />
    <ClassCom2 /> */}


      {/* =====================  3.Style  ==================== */}

      {/* <Home /> */}

      {/* =====================  4.TaskDesign  ==================== */}

      {/* <Home2 /> */}

      {/* =====================  5.State  ==================== */}

      <State />

      {/* =====================  6.Props  ==================== */}

      {/* <Props /> */}

    </div>
  )
}



