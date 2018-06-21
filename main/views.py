from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
from .models import items


def index(requests):
    return render(requests, 'main/index.html')

def index(requests, rtns='0-10', ds=5):
    # 取得ajax傳遞參數
    day_condic = ds
    returns_condic = rtns

    # 將回報率條件字串進行處理
    below_rtn = returns_condic.split('-')[0]
    above_rtn = returns_condic.split('-')[1]

    # 過濾股票資料
    result = None
    result = items.objects.filter(items_time = int(day_condic), items_rtn__range=(int(below_rtn), int(above_rtn)))
    return render(requests, 'main/index.html', locals())

def works_details(requests):
    return render(requests, 'main/works_details.html')

# def works_details(requests, stock_id=1):
#     result = 100
#     # if result is None:
#     #     result = 'Fails!'
#     return render(requests, 'main/works_details.html', locals())

def about(requests):
    return render(requests, 'main/about.html')

def blog(requests):
    return render(requests, 'main/blog.html')

def blog_details(requests):
    return render(requests, 'main/blog_details.html')

def contact(requests):
    return render(requests, 'main/contact.html')


def filter_condiction(request):
    if request.method == 'GET':
    	# 取得ajax傳遞參數
        day_condic = request.GET.get('day', None)
        returns_condic =  request.GET.get('return_rate', None)

        # 將回報率條件字串進行處理
        below_rtn = returns_condic.split('-')[0]
        above_rtn = returns_condic.split('-')[1]

        # 過濾股票資料
        result = None
        result = items.objects.filter(items_time = int(day_condic), items_rtn__range=(int(below_rtn), int(above_rtn)))
        serialized_qs = serializers.serialize('json', result)

        # 待回傳的資料
        data = {
            'filt_result': serialized_qs,
        }
        return JsonResponse(data)
    else:
       return HttpResponse("Request method is not a GET")
