from app.repository.mariadb_ctx import MariaDBCursor
#from app.models.custom_object import Employee, Promotion
import os

# in your terminal where you execute this server, issue the
# command 'set DB_PASSWORD=<your password here>'
# This commands sets an environmental variable called "DB_PASSWORD" for that particular CMD session.
password = os.getenv("DB_PASSWORD")
print("SQL password = ", password)
database_params = {
    "password": password,
    "database": "todolist",
}


class Utilities:

    # for get_all_departments
    def fetch_all_departments(self) -> list:
            statement = "SELECT dept_no,dept_name FROM departments"
            return self.fetch_data_from_db(statement, None)

    # for get_all_task
    def fetch_all_task(self, user_obj) -> list:
            # print(user_obj.user)
            statement = f"""SELECT taskId, taskName, description, dueDate, taskStatus FROM tasks WHERE taskId IN \
                (SELECT taskId FROM ownership WHERE userId = \
                (SELECT userId FROM users WHERE userName = '{user_obj.user}'))"""
            # print("get task state =", statement)      
            return self.fetch_data_from_db(statement, None)

    # for get_all_task
    def fetch_all_login(self) -> list:
            statement = """select userName, password FROM users"""
            return self.fetch_data_from_db(statement, None)


    # for post_add_task
    def post_add_task(self, add_task_obj) -> None:
            print("sql var=", add_task_obj.taskName, add_task_obj.description, add_task_obj.dueDate)
            statement = f"""INSERT INTO tasks (taskName, description, dueDate) VALUES \
            ('{add_task_obj.taskName}', '{add_task_obj.description}', '{add_task_obj.dueDate}')"""        
            # print("state =", statement)    
            self.post_data_to_db(statement)
            statement = f"""INSERT INTO ownership (userId, taskId) VALUES \
                ( (SELECT userId FROM users WHERE userName = '{add_task_obj.ownership}'), (SELECT MAX(taskId) from tasks))"""        
            # print("state2 =", statement)    
            self.post_data_to_db(statement)

    # for post_del_task by Id
    def post_del_task(self, del_task_obj) -> None:
            print("sql var=", del_task_obj.taskId)
            statement = f"""DELETE FROM tasks WHERE taskId =  ('{del_task_obj.taskId}')"""        
            # print("state =", statement)    
            self.post_data_to_db(statement)
       

                

    def fetch_data_from_db(self, statement: str, tuple_params: tuple) -> list:
        with MariaDBCursor(**database_params) as cursor:
            cursor.execute(statement, tuple_params)
            row_data = cursor.fetchall()
            return row_data

    def post_data_to_db(self, statement: str) -> None:
        with MariaDBCursor(**database_params) as cursor:
            cursor.execute(statement)
          