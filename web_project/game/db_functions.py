# myapp/db_functions.py
from django.db import connection

# Hàm lấy tất cả game categories từ PostgreSQL
def get_all_gameaccctegory():
    with connection.cursor() as cursor:
        # Thực hiện hàm PostgreSQL get_all_gameaccctegory()
        cursor.execute('SELECT get_all_gameaccctegory()')
        # Lấy kết quả đầu tiên từ truy vấn
        result = cursor.fetchone()[0]  # fetchone() trả về một tuple, [0] lấy phần tử đầu tiên của tuple (kết quả JSON)
    return result  # Trả về kết quả JSON

# Hàm lấy game category theo ID từ PostgreSQL
def get_gameaccctegory_by_id(gac_id):
    with connection.cursor() as cursor:
        # Thực hiện hàm PostgreSQL get_gameaccctegory_by_id với tham số ID
        cursor.execute('SELECT get_gameaccctegory_by_id(%s)', [gac_id])
        # Lấy kết quả đầu tiên từ truy vấn
        result = cursor.fetchone()[0]  # fetchone() trả về một tuple, [0] lấy phần tử đầu tiên của tuple (kết quả JSON)
    return result  # Trả về kết quả JSON
