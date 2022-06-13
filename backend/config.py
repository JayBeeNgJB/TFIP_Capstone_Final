# from datetime import datetime, timedelta, timezone

class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SITE_NAME = 'Flask Application'
    SECRET_KEY = 'c219d4e3-3ea8-4dbb-8641-8bbfc644aa18'
    # For login
    # JWT_SECRET_KEY = "please-remember-to-change-me"
    # JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)


class ProductionConfig(Config):
    DEBUG = False


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True