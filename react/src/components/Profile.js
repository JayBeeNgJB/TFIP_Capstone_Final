
import axios from "axios";

import TasksList from './TasksList';
import UsersList from './UsersList';
import AddUser from './AddUser';
import AddTask from './AddTask';
import MainHeader from "./MainHeader";
import React, { useState, useEffect, useCallback } from 'react';


window.loggedin = ""
window.cat = 1

function Profile(props) {
    // console.log("react /profile")
    
  const [profileData, setProfileData] = useState(null)

  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);

  // console.log("state", value, "set", setValue)
  // const { refresh, setRefresh} = useState(window.cat);
  // console.log("cat =", window.cat)

  const fetchTasksHandler = useCallback(async () => {
    getData()

    //  console.log("react /fetch task handle")
    // getData()
    // const getUserTask = {'user' : profileData.profile_name}
    // console.log("user get task =", getUserTask)    
    setIsLoading(true);
    setErrorState(null);
    try { 
        // console.log("react TRY /fetch task handle")
        const getUserTask = {'user' : window.loggedin}
        // console.log("user get task =", getUserTask)  

        const requestOptions = {
            method: 'POST',
            // headers: { Authorization: 'Bearer ' + props.token },
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(getUserTask)
            };        
            // console.log("json", JSON.stringify(getUserTask))
      const response = await fetch('http://127.0.0.1:5000/api/getAllTask', requestOptions);
      
      if (!response.ok) {
        throw new Error('Something crashed:' + response.statusText);
      }
      const data = await response.json();
    //   console.log("data is")
    //   console.log(data);
    //   console.log("End data is");
      const transformedTasks = data.map((taskData) => {
        // console.log("data2",String(taskData.taskId));
        return {
          taskId: String(taskData.taskId),
          taskName: taskData.taskName,
          description: taskData.description,
          dueDate: taskData.dueDate,
          taskStatus: taskData.taskStatus,
        };
      });
      setTasks(transformedTasks);
    } catch (error) {
      setErrorState(error.message);
    }
    setIsLoading(false);
  }, []);



  const addTaskHandler = async (addTask) => {
    // console.log(addTask);
    addTask["ownership"] = window.loggedin
    // console.log("new", addTask);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
      body: JSON.stringify(addTask)
    };
    // console.log("json", JSON.stringify(addTask))
    const response = await fetch('http://localhost:5000/api/addTask', requestOptions);
    const data = await response.json();
    // console.log(data);
    }  



  function getData() {
    axios({
      method: "GET",
      url:"http://localhost:5000/profile",
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
    .then((response) => {
      const res =response.data
      res.access_token && props.setToken(res.access_token)
      setProfileData(({
        profile_name: res.name,
        admin_rights: res.admin_rights}))
        // console.log("in set data", res.name)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

    useEffect(() => {
      fetchTasksHandler();
    }, [fetchTasksHandler],);
    
    // useEffect(() => {
    //   console.log("use effect triggered")
    //   fetchTasksHandler();
    // }, window.cat);
    // console.log("cat = ", window.cat)
    // if(window.cat > 0)
    // {
    //   console.log("cat = ", window.cat)
    //   fetchTasksHandler()
    //   fetchTasksHandler = 0
    //   window.cat = 0;
    // }
    return (
     
        <React.Fragment>
        <div className="Profile">
        {window.loggedin = ""}
        {/* <p>To get your profile details: </p><button onClick={getData}>Click me</button> */}
        {/* {getData()} */}
        <section>
        {/* {profileData && profileData.profile_name == "admin" && <div>
            <p><h1>Welcome: {profileData.profile_name}</h1></p>
            <p>You are Admin, you may add task</p>
            </div>
        } */}
        {profileData && <div>
            
            <h1>Welcome: {window.loggedin=profileData.profile_name}</h1>

            </div>
        }
        </section>

        
        </div>               
        <section>
          <AddTask onAddTask={addTaskHandler} /> 
        </section>
        {/* <section>
          <button onClick={fetchTasksHandler}>Fetch Task</button>
        </section>    */}
        <section>
          <button onClick={fetchTasksHandler}>Refresh Task</button>
          {!isLoading && tasks.length > 0 && <TasksList tasks={tasks} />}
          {!isLoading && tasks.length === 0 &&  !errorState && <p>Please fetch some data.</p>}
          {errorState && <p>{errorState}</p>}
          {isLoading && <p>Loading data...</p>}
        </section>
      </React.Fragment>
        );
}

export default Profile;