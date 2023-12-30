import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClassCom from './1.Component/class/ClassCom.jsx';
import ClassCom2 from './1.Component/ClassCom2.jsx';
import FunctionalCom from './2.functional/FunctionalCom.jsx';
import Home from './3.Style/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home2 from './4.TaskDesign/Home2.jsx';
import Funstate from './5.State/Functional/Funstate.jsx';
import State from './5.State/State.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ==================   Header,Body ,Footer TASK ================= */}
    {/* <ClassCom />
    <FunctionalCom />
    <ClassCom2 /> */}

    {/* <App /> */}

    {/* =====================  3.Style  ==================== */}

    {/* <Home /> */}

    {/* =====================  4.TaskDesign  ==================== */}

    {/* <Home2 /> */}

    {/* =====================  5.State  ==================== */}

    <State />












  </React.StrictMode>,
)
