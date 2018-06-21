$(document).ready(function() {

// var x = true;

// $("#item_btn").click(function(){

//     if (x == true){

    	
//     	for (i = 1; i < 6; i++) {

//    			$('#item_num').append("<li class='dropdown_list'>" + i +"</li>");

//    		}

//    		$(".dropdown_list").each(function(){
// 	   		$(this).click(function(){
// 				$("#item_btn").text($(this).text());
// 				$('.dropdown_list').remove();
// 				x = true;
// 			});

// 		});
		
// 		x = false;

//     }else{

//     	$('.dropdown_list').remove();
//     	x = true;

//     }
// });

// $("#rtn_btn").click(function(){

//     if (x == true){

    	
//     	for (i = 0; i < 6; i++) {

//     		if (i == 5){

//     			$('#rtn_list').append("<li class='dropdown_list'>" + (i*10) + "% 以上 " + "</li>");

//     		}else{

//     			$('#rtn_list').append("<li class='dropdown_list'>" + (i*10) + "% - " + ((i*10)+10) + "%" +"</li>");

//     		}
   			

//    		}

//    		$(".dropdown_list").each(function(){
// 	   		$(this).click(function(){
// 				$("#rtn_btn").text($(this).text());
// 				$('.dropdown_list').remove();
// 				x = true;
// 			});

// 		});
		
// 		x = false;

//     }else{

//     	$('.dropdown_list').remove();
//     	x = true;

//     }
// });

// $("#time_btn").click(function(){

//     if (x == true){

    	
//     	for (i = 0; i < 4; i++) {

//     		var timeList = ['單週','雙週','1個月','1季'];
//    			$('#time_list').append("<li class='dropdown_list'>" + timeList[i] +"</li>");

//    		}

//    		$(".dropdown_list").each(function(){
// 	   		$(this).click(function(){
// 				$("#time_btn").text($(this).text());
// 				$('.dropdown_list').remove();
// 				x = true;
// 			});

// 		});
		
// 		x = false;

//     }else{

//     	$('.dropdown_list').remove();
//     	x = true;

//     }
// });

// $("#industry_cate").click(function(){

//     if (x == true){

      
//       for (i = 0; i < 4; i++) {

//         var timeList = ['單週','雙週','1個月','1季'];
//         $('#time_list').append("<li class='dropdown_list'>" + timeList[i] +"</li>");

//       }

//       $(".dropdown_list").each(function(){
//         $(this).click(function(){
//         $("#time_btn").text($(this).text());
//         $('.dropdown_list').remove();
//         x = true;
//       });

//     });
    
//     x = false;

//     }else{

//       $('.dropdown_list').remove();
//       x = true;

//     }
// });

// $("#submit_btn").click(function () {
//       var day = $("#time_btn").val();
//       var return_rates = $("#rtn_btn").val();

//       $.ajax({
//         type:'GET',
//         url: '/ajax/filter/',
//         data: {
//           'day': day,
//           'return_rate': return_rates
//         },
//         success: function (data) {
//           // console.log(data.filt_result)
          
          
//           // ### 更新前端UI
//           results = $.parseJSON(data.filt_result);
//           console.log(results.length)
//           // 判斷搜尋是否有資料
//           if (results != 0) { //收尋到資料
//             // console.log(r[0].fields.items_name)
//             for(var i=0; i<results.length; i++){
//               contents = results[i].fields

//               console.log(contents.items_name)
//               console.log(contents.items_code)
//               console.log(contents.items_category)
//               console.log(contents.items_time)
//               console.log(contents.items_rtn)
//               console.log('******************')
//             }
            
//           }else{ //搜尋失敗，沒找到資料
//             alert("沒有找到符合的搜尋條件.");
//           }
//         }
//       });

//     });


  $('#rtn_btn').change(function(){
    var day = $("#time_btn").val();
    var return_rates = $("#rtn_btn").val();
    links = '/'+return_rates+ '/'+day
    $("#filt_link").attr('href', links);
  });


  $('#time_btn').change(function(){
    var day = $("#time_btn").val();
    var return_rates = $("#rtn_btn").val();
    links = '/'+return_rates+ '/'+day
    $("#filt_link").attr('href', links);
  });

});






