from flask import (
    jsonify, Blueprint, render_template, request
)
from app.service.db_processor import DatabaseProcessor

from app.models.department import AddTask
from app.models.department import DelTask
from app.models.department import Login
from app.models.department import TryLogin
from app.models.department import postAllTask

# For login service
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

import json

from passlib.hash import sha256_crypt

bp = Blueprint('main', __name__)
db = DatabaseProcessor()

# For login service

@bp.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

@bp.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    # print("email =", email)
    password = request.json.get("password", None)    
    TryLogin.user = email
    TryLogin.password = password
    # print("ll =", TryLogin.user)
    json1 = request.get_json()
    # print("json=", json1)
    # print("json type=", type(json1))        
    # Fetch the database users
    login_obj_lst = db.get_login_lst()
    # login_dict = json.loads(login_obj_lst)       
    # print("login list=", login_obj_lst)
    # print("login type=", type(login_obj_lst))
    # print("TryLogin", TryLogin.password)
    # print("shah", sha256_crypt.encrypt(TryLogin.password))
    # print("ver", sha256_crypt.verify(TryLogin.password, sha256_crypt.encrypt(TryLogin.password)))
    # print(sha256_crypt.verify("user1", TryLogin.password))
	    
    res = json.loads(login_obj_lst)
    resEmail = request.json.get("email", None)
    resPassword = request.json.get("password", None)  
    # print("res", type(res))
    # print("res", res)
    for json1 in res:
        # print("login loop", resEmail)
        if (resEmail == TryLogin.user) and (sha256_crypt.verify(resPassword, sha256_crypt.encrypt(TryLogin.password)))==True :
            access_token = create_access_token(identity=email)
            # print("user =", email)   
            response = {"access_token":access_token}  
            return response
        else:
            return {"msg": "Wrong email or password"}, 401
   

    # if email != "test" or password != "test":
    #     return {"msg": "Wrong email or password"}, 401

    # access_token = create_access_token(identity=email)
    # print("user =", email)   
    # response = {"access_token":access_token}  
    # return response



@bp.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@bp.route('/profile', methods=["GET"])
@jwt_required()
def my_profile():
    # print("in /profile")
    # print("get username =", TryLogin.user)
    response_body = {
        "name": TryLogin.user
    }
    # print("res =", response_body)
    return response_body

# For end point services            
@bp.route('/', methods=['GET', 'POST'])
def index():
    """
    Index page.
    :return: The response.
    """

    return render_template('main/index.html')

@bp.route('/api/adduser', methods=['GET', 'POST'])
def add_user():
    """
    Post the user name and password to be created
    :return: The response.
    """

    add_user_obj_lst = db.add_user()
    return render_template('main/index.html')
    
@bp.route('/api/departments', methods=['GET'])
def api_departments():
	dept_obj_lst = db.get_all_departments()
	return dept_obj_lst


@bp.route('/api/getAllTask', methods=['POST'])
def api_getAllTask():
    # Get all task for the user, not ALL task of ALL users
    # print("/get task")
    json = request.get_json()
    # print("getalltask json type", json)
    postAllTask_obj = postAllTask(json)

    dept_obj_lst = db.post_all_task(postAllTask_obj)

    return dept_obj_lst


@bp.route('/api/addTask', methods=['POST'])	
def add_task():
    """
    Add a task.
    :return: Updated task list to refresh react
    """
    json = request.get_json()
    # print("json type", json)
    task_obj = AddTask(json)
    
    db.post_add_task(task_obj)

    # # Refresh the tasklist with the new added task
    # dept_obj_lst = db.post_all_task(postAllTask_obj) 
    return "ok"



@bp.route('/api/delTask', methods=['POST'])	
def del_task():
    """
    Del a task.
    :return: Updated task list to refresh react
    """
    json = request.get_json()
    print("json type", json)
    del_task_obj = DelTask(json)
    
    db.post_del_task(del_task_obj)

    # # Refresh the tasklist with the new added task
    # dept_obj_lst = db.post_all_task(postAllTask_obj) 
    return "ok"