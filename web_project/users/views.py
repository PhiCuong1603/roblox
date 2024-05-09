from django.shortcuts import render

# from django.shortcuts import render, redirect, HttpResponse
# from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# from django.contrib.auth import login, logout, authenticate
# from django.contrib import messages
# from django.contrib.auth.models import User

# # Create your views here.
# def signup(request):
#     if request.method == 'POST':
#         username = request.POST.get('username').lower()
#         password1 = request.POST.get('password1')
#         password2 = request.POST.get('password2')

#         if User.objects.filter(username=username).exists():
#             messages.error(request, 'Tên đăng nhập đã tồn tại!')

#         elif password1 != password2:
#             # Xử lý lỗi nếu mật khẩu không khớp
#             messages.warning(request, 'Mật khẩu không khớp!')
#             return render(request, 'users/signup.html')
#         else:
#             # Tạo người dùng mới
#             user = User.objects.create_user(username,'' ,password1)
#             user.save()
#             messages.success(request, 'Đăng kí tài khoản thành công!')
#             return redirect('users:signin') 
#     else:
#         return render(request, 'users/signup.html')


# def signin(request):
#     if request.method == 'POST':
#         username = request.POST.get('username').lower()
#         password = request.POST.get('password')
#         user = authenticate(request, username=username, password=password)

#         if user is not None:
#             login(request, user)
#             messages.success(request, 'Đăng nhập thành công!')
#             return redirect('/')
#         else:
#             messages.error(request, 'Tên đăng nhập hoặc mật khẩu không đúng!')

#     context = {}
#     return render(request, 'users/signin.html', context)

# def signout(request):
#     if request.method == "POST":
#         logout(request)
#         return redirect("users/signin")