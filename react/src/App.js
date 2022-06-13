import { BrowserRouter, Route, Routes, Redirect, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import Header from './components/Header'
import UseToken from './components/UseToken'
import './App.css'
import Task from './components/Task'

import React, { useState, useEffect, useCallback } from 'react';

import TasksList from './components/TasksList';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import AddTask from './components/AddTask';
import MainHeader from "./components/MainHeader";
import Login1 from "./pages/Login1";
import TaskList from "./pages/TaskList";


function App() {
  const { token, removeToken, setToken } = UseToken();
 
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);

//   const fetchTasksHandler = useCallback(async () => {
//     setIsLoading(true);
//     setErrorState(null);
//     try { 
//       // const response = await fetch('https://reqres.in/api/users');
//       const response = await fetch('http://127.0.0.1:5000/api/getAllTask');
//       if (!response.ok) {
//         throw new Error('Something crashed:' + response.statusText);
//       }
//       const data = await response.json();
//     //   console.log("data is")
//     //   console.log(data.taskId);
//     //   console.log("End data is");
//       const transformedTasks = data.map((taskData) => {
//         return {
//           taskId: taskData.taskId,
//           taskName: taskData.taskName,
//           description: taskData.description,
//           dueDate: taskData.dueDate,
//           taskStatus: taskData.taskStatus
//         };
        
//       });

//       setTasks(transformedTasks);
//     } catch (error) {
//       setErrorState(error.message);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchTasksHandler();
//   }, [fetchTasksHandler]);




//   const addTaskHandler = async (addTask) => {
//     console.log(addTask);
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(addTask)
//     };

//     const response = await fetch('http://localhost:5000/api/addTask', requestOptions);
//     const data = await response.json();
//     console.log(data);
//     }  

  return (



      <div className="App">
        <Header token={removeToken}/>
        {/* <header>
            <MainHeader />
        </header>         */}
        
        {!token && token!=="" &&token!== undefined?  
        <Login setToken={setToken} />
        :(
          <main>
            <Routes>
                <Route path="/" element={<Profile token={token} setToken={setToken}/>}></Route>
                <Route path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
            </Routes>
                {/* <Route path="/" exact>
                    <Redirect to="/Login" />
                </Route>
                <Route path="/Login1" element={<Login1 token={token} setToken={setToken}/>}></Route>
                <Route path="/TaskList" element={<TaskList token={token} setToken={setToken}/>}></Route> */}
          </main>
        )}
      </div>

    
  );
//   <React.Fragment>
//   <section>
//   <AddTask onAddTask={addTaskHandler} /> 
//   </section>
//   <section>
//   <button onClick={fetchTasksHandler}>Fetch Users</button>
//   </section>
//   <section>
//   {!isLoading && tasks.length > 0 && <TasksList tasks={tasks} />}
//   {!isLoading && tasks.length === 0 &&  !errorState && <p>Please fetch some data.</p>}
//   {errorState && <p>{errorState}</p>}
//   {isLoading && <p>Loading data...</p>}
//   </section>
//   </React.Fragment>
}

export default App;