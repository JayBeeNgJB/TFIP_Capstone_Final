// import React, { useState, useEffect, useCallback } from 'react';

// import TasksList from './components/TasksList';
// import UsersList from './components/UsersList';
// import AddUser from './components/AddUser';
// import AddTask from './components/AddTask';
// import './App.css';


// // Requirements for routing
// import { Route, Routes, Redirect, Navigate } from "react-router-dom";


// // import { Redirect } from 'react-router-dom';


// function App() {
//   const [users, setUsers] = useState([]);
//   const [tasks, setTasks] = useState([])
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorState, setErrorState] = useState(null);

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
//       console.log("data is")
//       console.log(data);
//       console.log("End data is");
//       const transformedTasks = data.map((taskData) => {
//         return {
//           taskId: taskData.taskId,
//           taskName: taskData.taskName,
//           description: taskData.description,
//           dueDate: taskData.dueDate,
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
//   }

  

//   // return (
//     // <React.Fragment>
//     //   <section>
//     //     <AddTask onAddTask={addTaskHandler} /> 
//     //   </section>
//     //   <section>
//     //     <button onClick={fetchTasksHandler}>Fetch Users</button>
//     //   </section>
//     //   <section>
//     //     {!isLoading && tasks.length > 0 && <TasksList tasks={tasks} />}
//     //     {!isLoading && tasks.length === 0 &&  !errorState && <p>Please fetch some data.</p>}
//     //     {errorState && <p>{errorState}</p>}
//     //     {isLoading && <p>Loading data...</p>}
//     //   </section>
//     // </React.Fragment>
//   // );

//   return (
//     <div>
//       <header>
//         <MainHeader />
//       </header>

//       <main>
//         <Routes>
//           <Route path="/" exact>
//             {/* <Navigate to="/welcome" /> */}
//           </Route>
//           <Route path="/welcome">
//             <Welcome />
//           </Route>
//           <Route path="/products" exact>
//             <Products />
//           </Route>
//         </Routes>
//       </main>
//     </div>
//   );

// }

// export default App;
