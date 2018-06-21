from django.contrib import admin

from .models import items


class ItemAdmin(admin.ModelAdmin):
    list_display = ('items_code', 'items_name', 'items_category',
    				'items_Cprice', 'items_time', 'items_Pprice',
    				'items_rtn')

admin.site.register(items, ItemAdmin)
# Register your models here.
