from django.contrib import admin
from .models import GameAccountCategory, AccountCategory, AccountType, AccountDetail

# Đăng ký mô hình GameAccountCategory để hiển thị trong trang quản trị
@admin.register(GameAccountCategory)
class GameAccountCategoryAdmin(admin.ModelAdmin):
    list_display = ('gac_id', 'title', 'image')  # Các trường sẽ hiển thị trong danh sách
    search_fields = ('gac_id',)  # Cho phép tìm kiếm theo tiêu đề

# Đăng ký mô hình AccountCategory để hiển thị trong trang quản trị
@admin.register(AccountCategory)
class AccountCategoryAdmin(admin.ModelAdmin):
    list_display = ('ac_id', 'title', 'quantity','image','gacctcategory_id')  # Các trường sẽ hiển thị trong danh sách
    search_fields = ('title',)  # Cho phép tìm kiếm theo tiêu đề

# Đăng ký mô hình AccountType để hiển thị trong trang quản trị
@admin.register(AccountType)
class AccountTypeAdmin(admin.ModelAdmin):
    list_display = ('at_id', 'desc', 'price','acctcategory_id')  # Các trường sẽ hiển thị trong danh sách
    search_fields = ('desc',)  # Cho phép tìm kiếm theo mô tả

# Đăng ký mô hình AccountDetail để hiển thị trong trang quản trị
@admin.register(AccountDetail)
class AccountDetailAdmin(admin.ModelAdmin):
    list_display = ('ad_id', 'title','image','accttype_id')  # Các trường sẽ hiển thị trong danh sách
    search_fields = ('title',)  # Cho phép tìm kiếm theo tiêu đề