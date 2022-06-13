from app.models.department import Department
from app.models.department import Task
from app.models.department import Login
from app.models.object_encoder import CustomObjectEncoder
from app.repository.utilities import *
import json


class DatabaseProcessor:

    def __init__(self) -> None:
        self.util = Utilities()


    def get_all_departments(self):
        row_data = self.util.fetch_all_departments()
        # turn data into python objects
        dept_object = [Department(*data) for data in row_data]
        return json.dumps(dept_object, indent=4, cls=CustomObjectEncoder)

    def post_all_task(self, user):
        row_data = self.util.fetch_all_task(user)
        #turn data into python objects
        task_object = [Task(*data) for data in row_data]
        return json.dumps(task_object, indent=4, cls=CustomObjectEncoder)

    def get_login_lst(self):
        row_data = self.util.fetch_all_login()
        print(row_data)
        #turn data into python objects
        login_object = [Login(*data) for data in row_data]
        return json.dumps(login_object, indent=4, cls=CustomObjectEncoder)

    def post_add_task(self, add_task_obj):
        #turn data into python objects
        print("des1132 =", add_task_obj.description)
        self.util.post_add_task(add_task_obj)

    def post_del_task(self, del_task_obj):
        #turn data into python objects
        print("des1132 =", del_task_obj.taskId)
        self.util.post_del_task(del_task_obj)        
