from django.db import models

class GameAccountCategory(models.Model):    # Danh mục acc game
    gac_id = models.AutoField(primary_key=True)  # Khóa chính tự động tăng
    title = models.CharField(max_length=100)  # Tiêu đề của danh mục tài khoản game
    image = models.ImageField(default='fallback.png', blank=True)  # Hình ảnh đại diện cho danh mục tài khoản game

    class Meta:
        db_table = 'gameacccategory'
        verbose_name_plural  = "1. Danh mục các game"  # Tên hiển thị trong Django Admin

    def save(self, *args, **kwargs):
        if self.title:
            self.title = self.title.upper()  # Chuyển đổi thành chữ in hoa trước khi lưu
        super(GameAccountCategory, self).save(*args, **kwargs)

class AccountCategory(models.Model):        #Danh mục theo acc game
    ac_id = models.AutoField(primary_key=True)  # Khóa chính tự động tăng
    title = models.CharField(max_length=100)  # Tiêu đề của danh mục tài khoản
    image = models.ImageField(default='fallback.png', blank=True)  # Hình ảnh đại diện cho danh mục tài khoản
    quantity = models.IntegerField()  # Số lượng tài khoản trong danh mục
    gacctcategory_id = models.IntegerField()  # ID của GameAccountCategory liên quan

    class Meta:
        db_table = 'accountcategory'
        verbose_name_plural  = "2. Danh mục các tài khoản của game"  # Tên hiển thị trong Django Admin

    def save(self, *args, **kwargs):
        if self.title:
            self.title = self.title.upper()  # Chuyển đổi thành chữ in hoa trước khi lưu
        super(AccountCategory, self).save(*args, **kwargs)


class AccountType(models.Model):             # Thông tin acc game
    at_id = models.AutoField(primary_key=True)  # Khóa chính tự động tăng
    desc = models.TextField()  # Mô tả của loại tài khoản
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Giá của loại tài khoản
    acctcategory_id = models.IntegerField()  # ID của AccountCategory liên quan

    class Meta:
        db_table = 'accounttype'
        verbose_name_plural  = "3. Mô tả về loại tài khoản"  # Tên hiển thị trong Django Admin


class AccountDetail(models.Model):           # Chi tiết acc game
    ad_id = models.AutoField(primary_key=True)  # Khóa chính tự động tăng
    title = models.CharField(max_length=100)  # Tiêu đề của chi tiết tài khoản
    image = models.ImageField(default='fallback.png', blank=True)  # Hình ảnh đại diện cho chi tiết tài khoản
    accttype_id = models.IntegerField()  # ID của AccountType liên quan

    class Meta:
        db_table = 'accountdtl'
        verbose_name_plural  = "4. Chi tiết tài khoản"  # Tên hiển thị trong Django Admin


