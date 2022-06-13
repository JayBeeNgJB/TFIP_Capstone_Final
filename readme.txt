README: For capstone project
Author: Ng Jin Bao

This package consist of 3 folders, "backend", "react", "db" and this readme.txt file.


Prerequiste: 
MariaDB must be installed, installation guide is beyond the scope of this document.

To load the SQL:
Run the makeSQL.sql file provided in "db" folder.

To run the backend:
For Windows Users: 
To activate the virtual environment, run: .../backend/scripts/activate
To install the required modules, run: pip install -r requirements.txt
To set database password, run: set DB_PASSWORD=<insert you database password here>
Run: flask run to start the backend server
You should see a message "* Running on http://127.0.0.1:5000 (Press CTRL+C to quit)" which means that the backend server is running. 

To run the frontend react:
For Windows Users:
To install npm modules, run: npm install
To start the frontend, run: npm start

To use the web application:
Enter the username and password into the form and click login.
There are 3 precreated users:
Name: admin, password: admin
Name: user1, password: user1
Name: user2, password: user2

To add a task:
Fill in the add task form and click the "Add task" button to add the task for the user.
Empty or Duplicate entries are allowed, except for duedate value.  

To delete task:
Click the "Delete" button in the same box area as the task. 

To refresh task:
Click the "Refresh Task" button to refresh the list of task.

Support for POSTMAN (Not supported):
Some of the API requires authorization. Please copy the authorization token from the browser localstorage.