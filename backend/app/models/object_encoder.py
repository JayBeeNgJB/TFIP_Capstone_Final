from json import JSONEncoder
import datetime

class CustomObjectEncoder(JSONEncoder):
    '''Encode from Python object to JSON'''
    def default(self, o: object):
        if isinstance(o, datetime.date):
            return o.strftime("%Y-%m-%d")
        return o.__dict__