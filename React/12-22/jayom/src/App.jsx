import React from 'react'
// import ReactDOM from 'react-dom/client'
import './index.css'

import FunctionalCom from './2.functional/FunctionalCom.jsx';
import ClassCom2 from './1.Component/ClassCom2.jsx';
import Home from './3.Style/Home.jsx';
import Home2 from './4.TaskDesign/Home2.jsx';
import State from './5.State/State.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Props from './6.Props/Functional/props.jsx';
import MapKey from './7.Mapkey/MapKey.jsx';
import HomePage from './8.JsonTask/HomePage.jsx';


import City from './9.CityTask/City.jsx';
import { ToastContainer } from 'react-toastify';
import UnMount from './10.Unmount/UnMount.jsx';
import MainTask from './11.ConditionalRender/MainTask.jsx';
import Header from './8.JsonTask/Header.jsx';
import InputMain from './12.Input/InputMain.jsx';
import SimpleRouter from './13.Router/SimpleRouter/SimpleRouter.jsx';
import Main from './13.Router/Task1/Main.jsx';
import Todo from './0.Task/Todo.jsx';
import ChechboxTask from './0.Task/ChechboxTask.jsx';
import Crud from './0.Task/05-06-2024/Crud.jsx';
import Newcrud from './0.Task/06-06-2024/Newcrud.jsx';
import UseReducer from './14.UseReducer/UseReducer.jsx';
import UseContaxt from './15.UseContaxt/UseContaxt.jsx';
import ReduxMain from './16.Redux/ReduxMain.jsx';
import NewReduxMain from './17.ReduxHome/Ui/newReduxMain.jsx';



export default function App() {
  return (
    <div className='d-flex align-items-center flex-column '>
      {/* ==================   Header,Body ,Footer TASK ================= */}

      {/* <ClassCom />
    <FunctionalCom />
    <ClassCom2 /> */}


      {/* =====================  3.Style  ==================== */}

      {/* <Home /> */}

      {/* =====================  4.TaskDesign  ==================== */}

      {/* <Home2 /> */}

      {/* =====================  5.State  ==================== */}

      {/* <State /> */}

      {/* =====================  6.Props  ==================== */}

      {/* <Props /> */}

      {/* =====================  7. Map-Key  ==================== */}

      {/* <MapKey /> */}

      {/* =====================  8. Json Task  ==================== */}

      {/* <HomePage /> */}

      {/* =====================  9. City Json task ==================== */}

      {/* <City /> */}

      {/* =====================  10. Unmount ==================== */}

      {/* <UnMount /> */}

      {/* =====================  11. Conditional render  ==================== */}

      {/* <MainTask /> */}

      {/* =====================  12. Input  ==================== */}

      {/* <InputMain /> */}

      {/* =====================  13. Router  ==================== */}

      {/* <SimpleRouter /> */}
      {/* <Main /> */}


      {/* ===================== 14. UseReducer   ==================== */}
      {/* <UseReducer /> */}

      {/* ===================== 15. UseContaxt   ==================== */}
      {/* <UseContaxt /> */}

      {/* ===================== 16.Redux  ==================== */}
      {/* <ReduxMain /> */}

      {/* ===================== 17.ReduxHome  ==================== */}

      <NewReduxMain />


      {/* =====================  0. Task  ==================== */}
      {/* <Todo /> */}
      {/* <ChechboxTask /> */}
      {/* <Crud /> */}
      {/* <Newcrud /> */}












      <ToastContainer />
    </div >
  )
}



