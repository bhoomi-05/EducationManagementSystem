import re
import datetime as dt
from dateutil.relativedelta import *

higher=["predictive_analysis","operating_system","calculus"]

basic=["maths","physics","chemisty"]

def validate_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if re.match(pattern, email):
        return True
    else:
        return False

def validate_np(np,doj):
    doj = dt.datetime.doj()
    np = doj + dt.timedelta(months=1)


def course_options(degree):
    if degree=="PhD":
        
    elif degree=="Masters":
        
        else:
            return regular
    elif degree=="Bachelors":
        return  basic

if validate_email(email):
    print("Valid email address")
else:
    print("Invalid email address")