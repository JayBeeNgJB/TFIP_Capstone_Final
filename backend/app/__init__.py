import os
import config

from flask_cors import CORS

# For login service
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

from flask import (
    Flask, 
    jsonify, 
    request,
    render_template,
    send_from_directory,
    abort
)

def create_app(test_config=None):

	# Application initialization
	app = Flask(__name__, 
				template_folder='views',
				static_folder='public')

	app.config.from_object(config.DevelopmentConfig)
	# For login service
	app.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
	app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
	jwt = JWTManager(app)

	cors = CORS(app)
	
	#cors = CORS(app, resources={r'/*': {'origins': 'localhost:3000'}})
	
	"""CORS(app, allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
    supports_credentials=True, intercept_exceptions=False)"""

	
	"""
	404 Page not found error default handler
	"""
	@app.errorhandler(404)
	def page_not_found(e):
		return render_template('error/404.html', error=e), 404



	"""
	Controllers import and register blueprints and resources 
	"""

	from app.controllers import main    # Controllers

	# Register Blueprints
	app.register_blueprint(main.bp)

	return app
