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

  $('.item_industry').each(function(){
      if ($(this).text() == 01) {
        $(this).text("水泥工業")
      }else if ($(this).text() == 02){
        $(this).text("食品工業")
      }else if ($(this).text() == 03){
        $(this).text("塑膠工業")
      }else if ($(this).text() == 04){
        $(this).text("紡織工業")
      }else if ($(this).text() == 05){
        $(this).text("電機機械")
      }else if ($(this).text() == 06){
        $(this).text("電器電纜")
      }else if ($(this).text() == 21){
        $(this).text("化學工業")
      }else if ($(this).text() == 22){
        $(this).text("生技醫療")
      }else if ($(this).text() == 08){
        $(this).text("玻璃陶瓷")
      }else if ($(this).text() == 09){
        $(this).text("造紙工業")
      }else if ($(this).text() == 10){
        $(this).text("鋼鐵工業")
      }else if ($(this).text() == 11){
        $(this).text("橡膠工業")
      }else if ($(this).text() == 12){
        $(this).text("汽車工業")
      }else if ($(this).text() == 24){
        $(this).text("半導體業")
      }else if ($(this).text() == 25){
        $(this).text("電腦及週邊設備業")
      }else if ($(this).text() == 26){
        $(this).text("光電業")
      }else if ($(this).text() == 27){
        $(this).text("通訊網路業")
      }else if ($(this).text() == 28){
        $(this).text("電子零組件業")
      }else if ($(this).text() == 29){
        $(this).text("電子通路業")
      }else if ($(this).text() == 30){
        $(this).text("資訊服務業")
      }else if ($(this).text() == 31){
        $(this).text("其他電子業")
      }else if ($(this).text() == 14){
        $(this).text("建材營造")
      }else if ($(this).text() == 15){
        $(this).text("航運")
      }else if ($(this).text() == 16){
        $(this).text("觀光")
      }else if ($(this).text() == 17){
        $(this).text("金融")
      }else if ($(this).text() == 18){
        $(this).text("貿易百貨")
      }else if ($(this).text() == 23){
        $(this).text("油電燃氣")
      }else if ($(this).text() == 19){
        $(this).text("綜合")
      }else if ($(this).text() == 20){
        $(this).text("其他")
      }else if ($(this).text() == 80){
        $(this).text("管理股票（由櫃買中心管理）")
      }
  });

  $('.item_date').each(function(){
      if ($(this).text() == 5) {
        $(this).text("預測天數：單週")
      }else if ($(this).text() == 10){
        $(this).text("預測天數：雙週")
      }else if ($(this).text() == 20){
        $(this).text("預測天數：1個月")
      }else if ($(this).text() == 60){
        $(this).text("預測天數：1季")
      }
  });

});






