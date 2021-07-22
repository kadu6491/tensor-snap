from mongoengine import *


class User(Document):
    first_name = StringField(required=True)
