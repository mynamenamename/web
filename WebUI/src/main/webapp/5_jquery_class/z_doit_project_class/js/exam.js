$(function(){
//1번 오늘 날짜 출력
   var now = new Date();

   $('.year').text(now.getFullYear());
   $('.month').text(now.getMonth()+1);
   $('.date').text(now.getDate());
  
// (2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점)
   $('#keyword').focus(function(){
   $('#keyword').css("background-position","0 -500px");
      
   })
   $('#keyword').blur(function(){
      $('#keyword').css("background-position","0 0")
   })

 // (3) 탭팬 구현 (10점)

 $('.tab_btn1 > a img').click(function(){
       $(this).attr('src', $(this).attr('src').replace('out','over')); // 이미지 속성을 out에서 over로 변경함
         $('.tab_btn2 > a img').attr('src','images/tab_btn_2_out.gif');   // 남은 버튼은 out으로 출력
         $('.tab_btn3 > a img').attr('src','images/tab_btn_3_out.gif');
         
       //   $(this).next('ul').toggleClass(".tab_btn2",".tab_btn3");
        
      
   })
   
   $('.tab_btn2 > a img').click(function(){
       $(this).attr('src', $(this).attr('src').replace('out','over')); 
         $('.tab_btn1 > a img').attr('src','images/tab_btn_1_out.gif');
         $('.tab_btn3 > a img').attr('src','images/tab_btn_3_out.gif');
         
     //    $(this).next('ul').toggleClass(".tab_btn1",".tab_btn3");
       
   })
   
   $('.tab_btn3 > a img').click(function(){   
       $(this).attr('src', $(this).attr('src').replace('out','over'));
         $('.tab_btn1 > a img').attr('src','images/tab_btn_1_out.gif');   
         $('.tab_btn2 > a img').attr('src','images/tab_btn_2_out.gif');
      
   //    $(this).next('ul').toggleClass(".tab_btn1",".tab_btn2");
   })



  




 // (4) 이미지슬라이드 구현 (10점)
 

 $('#best_bg > ul').bxSlider({
	
      auto: true,
	  autoControls: true,
	  stopAutoOnClick: true,
	  pager: true,
	  slideWidth: 600,
	  minSlides: 5,
      maxSlides: 5,
      slideMargin: 10
      
   });
 
 
 
   // (5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임  (20점)
      
   $('img[alt="로그인"]').click(function(){ // 로그인 누르면 로그인 창 보임
      $('#login_f').css("top","0")
   
    $('img[alt="닫기버튼"]').click(function(){ // 로그인 닫기 누르면 로그인 창 안보임
    //alert('닫기누름')
      $('#login_f').css("top","-500px")
      })
  })
 
 
 // (6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점)
 
    $('img[alt="전체메뉴"]').click(function(){ // 전체메뉴 누르면 전체메뉴 창 보임
      //alert('dd')
      $('#total_menu').show();
   
    $('img[alt="전체메뉴 닫기"]').click(function(){ // 전체메뉴 닫기 누르면 전체메뉴 창 안보임
    //alert('닫기누름')
      $('#total_menu').hide();
      })
   })
 
 
 // (7) 그 외 추가적으로 구현하면 해당 화면 캡쳐하고 코드를 작성합니다. (20점)
	
	
})