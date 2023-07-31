#import pymysql
import json
import mysql.connector
import datetime


# endpoint='database-1.c6ren1oasj3t.us-east-1.rds.amazonaws.com'
# username='Admin'
# password='ibE3xYBnrBwSL5uonA33'
# database_name='demo_ubiqc'

    

# connection = pymysql.connect(endpoint, user=username,pw=password, db=database_name)

def lambda_handler(event, context):
    conn=mysql.connector.connect(
        host= 'database-1.c6ren1oasj3t.us-east-1.rds.amazonaws.com',
        user= 'Admin',
        password= 'ibE3xYBnrBwSL5uonA33',
        database= 'demo_ubiqc'
    )
    query='select * from demo_ubiqc.coachingStd'

    cursor = conn.cursor()

    try:
            
        cursor.execute(query)

        rows=cursor.fetchall()

        data=[]

        for row in rows:
            id = row[0]
            name = row[1]
            phone = row[2]
            gender = row[3]        
            birth_date = row[4]
            # batchno = row[5]
            # doj = row[6]
            # lastpaid = row[7]
            # nextpay = row[8]
        
        user_data={
            'id': id,
            'name': name,
            'phone': phone,
            'gender': gender,
            'birth_date': birth_date,
            # 'batchno': batchno,
            # 'doj': doj,
            # 'lastpaid': lastpaid,
            # 'nextpay': nextpay
        }

        data.append(user_data)

        return {
            'statusCode': 200,
            'body': json.dumps(data)
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': str(e)
        }
    
    finally:
        # Close cursor and connection
        cursor.close()
        conn.close()

# handler()
