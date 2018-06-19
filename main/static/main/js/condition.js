$(document).ready(function() {

var x = true;

$("#item_btn").click(function(){

    if (x == true){

    	
    	for (i = 1; i < 6; i++) {

   			$('#item_num').append("<li class='dropdown_list'>" + i +"</li>");

   		}

   		$(".dropdown_list").each(function(){
	   		$(this).click(function(){
				$("#item_btn").text($(this).text());
				$('.dropdown_list').remove();
				x = true;
			});

		});
		
		x = false;

    }else{

    	$('.dropdown_list').remove();
    	x = true;

    }
});

$("#rtn_btn").click(function(){

    if (x == true){

    	
    	for (i = 0; i < 6; i++) {

    		if (i == 5){

    			$('#rtn_list').append("<li class='dropdown_list'>" + (i*10) + "% 以上 " + "</li>");

    		}else{

    			$('#rtn_list').append("<li class='dropdown_list'>" + (i*10) + "% - " + ((i*10)+10) + "%" +"</li>");

    		}
   			

   		}

   		$(".dropdown_list").each(function(){
	   		$(this).click(function(){
				$("#rtn_btn").text($(this).text());
				$('.dropdown_list').remove();
				x = true;
			});

		});
		
		x = false;

    }else{

    	$('.dropdown_list').remove();
    	x = true;

    }
});

$("#time_btn").click(function(){

    if (x == true){

    	
    	for (i = 0; i < 4; i++) {

    		var timeList = ['單週','雙週','1個月','1季'];
   			$('#time_list').append("<li class='dropdown_list'>" + timeList[i] +"</li>");

   		}

   		$(".dropdown_list").each(function(){
	   		$(this).click(function(){
				$("#time_btn").text($(this).text());
				$('.dropdown_list').remove();
				x = true;
			});

		});
		
		x = false;

    }else{

    	$('.dropdown_list').remove();
    	x = true;

    }
});

});

