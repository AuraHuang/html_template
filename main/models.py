from django.db import models


class items(models.Model):
    # 股票代碼
    items_code = models.IntegerField(default=0)
    # 名字
    items_name = models.CharField(max_length=200)
    # # 產業類別
    items_category = models.IntegerField(default=0)
    # # 前一天收盤價
    items_Cprice = models.DecimalField(max_digits=6, decimal_places=2)
    # # 預測期間
    items_time = models.IntegerField(default=0)
    # # 預測收盤價
    items_Pprice = models.DecimalField(max_digits=6, decimal_places=2)
    # # 預測報酬率
    items_rtn = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.items_name
    
# Create your models here.
