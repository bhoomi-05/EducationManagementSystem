import json
import mysql.connector
# import numpy as np 
# import pandas as pd
from flask import jsonify, Flask, request

app = Flask(__name__)
mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password',
    database='coursesystem'
    )

mycursor = mydb.cursor(buffered=True)


@app.route('/request',methods=['GET'])
def sql():
    #form_data = request.get_json()

    # name = form_data['name']
    # age = form_data['age']
    # sex = form_data['sex']
    # registrationno = form_data['registrationno']
    # course = form_data['course']
    # batchno = form_data['batchno']
    # doj = form_data['doj']
    # lastpaid = form_data['lastpaid']
    # nextpay = form_data['nextpay']
    
    

    

    # query = "INSERT INTO users (name, age, sex, course, batchno, doj, lastpaid, nextpay) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    query = "select * from users"
    #val=(form_data['name'], form_data['age'], form_data['sex'], form_data['course'], form_data['batchno'], form_data['doj'], form_data['lastpaid'], form_data['nextpay'])
    # val = (name, age, sex, registrationno, course, batchno, doj, lastpaid, nextpay)

    
    result=print(query)
    mycursor.execute(query)
    data=mycursor.fetchone()


    if data:
        columns = [desc[0] for desc in mycursor.description]
        result = dict(zip(columns, data))
        return jsonify(result)
    else:
        return jsonify({'message': 'No data found for the provided ID.'}), 404
    
    # mydb.commit()

    # mydb.close()
    # mycursor.close()

    # return result

    # # print(mycursor.rowcount, "was inserted.")

if __name__ == '__main__':
    app.run(debug=True)