from datetime import date
import enum


class Department:
    def __init__(self, dept_no: str, dept_name: str) -> None:
        self.dept_no = dept_no
        self.dept_name = dept_name

class Task:
    def __init__(self, taskId: int, taskName: str, description: str, dueDate: date, taskStatus: enum) -> None:
        self.taskId = taskId
        self.taskName = taskName
        self.description = description
        self.dueDate = dueDate
        self.taskStatus = taskStatus

class Login:
    def __init__(self, email: str, password: str) -> None:
        self.email = email
        self.password = password      


class TryLogin:
    def __init__(self, user: str, password: str) -> None:
        self.__user = None
        self.__password = None      
        print("login class", self.__user)
    @property
    def user(self):
        print("return", self.__user)
        return self.__user     
     # a setter function
    @user.setter
    def user(self, email):
        print("setter method called")
        self.__user = email               
    @property
    def password(self):
        print("return", self.__user)
        return self.__password     
     # a setter function
    @user.setter
    def password(self, password):
        print("setter method called")
        self.__password = password   

# Add task does not have task ID
class AddTask:
    def __init__(self, my_dict) -> None:
        for key in my_dict:
            setattr(self, key, my_dict[key]) 

# Del task based on taskId
class DelTask:
    def __init__(self, my_dict) -> None:
        for key in my_dict:
            setattr(self, key, my_dict[key]) 


# Add tget userID
class postAllTask:
    def __init__(self, my_dict) -> None:
        for key in my_dict:
            setattr(self, key, my_dict[key]) 

