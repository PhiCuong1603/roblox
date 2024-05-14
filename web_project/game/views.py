from django.http import JsonResponse  # Sử dụng JsonResponse để trả về JSON
from rest_framework.decorators import api_view  # Sử dụng decorator để tạo API view
from .db_functions import get_all_gameaccctegory, get_gameaccctegory_by_id  # Import các hàm từ db_functions.py

# API view để lấy tất cả game categories
@api_view(['GET'])
def get_all_gameaccctegory_view(request):
    try:
        result = get_all_gameaccctegory()  # Gọi hàm lấy tất cả game categories
        return JsonResponse(result, safe=False)  # Trả về kết quả JSON. safe=False cho phép trả về dữ liệu không phải dict.
    except Exception as e:  # Xử lý lỗi nếu có
        return JsonResponse({'error': str(e)}, status=500)  # Trả về mã lỗi 500 và thông báo lỗi

# API view để lấy game category theo ID
@api_view(['GET'])
def get_gameaccctegory_by_id_view(request, id):
    try:
        result = get_gameaccctegory_by_id(id)  # Gọi hàm lấy game category theo ID
        if result is None:  # Nếu không tìm thấy kết quả, trả về lỗi 404
            return JsonResponse({'error': 'Game Category Not Found'}, status=404)
        return JsonResponse(result, safe=False)  # Trả về kết quả JSON. safe=False cho phép trả về dữ liệu không phải dict.
    except Exception as e:  # Xử lý lỗi nếu có
        return JsonResponse({'error': str(e)}, status=500)  # Trả về mã lỗi 500 và thông báo lỗi
