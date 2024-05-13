from django.db import models

# Create your models here.
class defError(models.Model):
    errnum = models.CharField(max_length=10)
    errdesc = models.TextField()
    en_errdesc = models.TextField()

    class Meta:
        # Chỉ định tên bảng trong cơ sở dữ liệu
        db_table = 'deferror'
        verbose_name = 'DefError'
        
    def __str__(self):
        return f'{self.errnum} - {self.errdesc}'

