$(function(){
	$('#bio h3').css({'cursor':'pointer'});
	
	
   $('#bio div').hide();  //전체 다 숨기고
   $('#bio h3').show();   // 열기
   
	//이름을 클릭하면 해당 사진만 나오도록
	$('#bio h3').click(function(){
      $(this).next().animate({'height':'toggle'}, 2000, 'easeOutBounce');
                    //.show() 해도됨
   })
})