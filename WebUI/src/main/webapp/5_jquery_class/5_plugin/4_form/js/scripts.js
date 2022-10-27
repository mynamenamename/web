$(function(){
	
  	$('#signup > form').validate({
     rules: {
	    name : {required : true },   //필수 입력 
	    email :{required : true,
                email : true	     //이메일 양식에 맞지 않는 것 걸러줌
	    },
	    website: {url: true},             // url 주소 양식 맞지 않는것 걸러줌
	    password: {minlength:6, maxlength:12  //비밀번호 최소6 최대 12
	    },
	    passconf:{equalTo : '#password'}  //같은 비밀번호 쳣는지 확인
    },
     success : function(label){
	     label.addClass('valid');
	     label.text('안녕'); //글씨가 없으면 녹색체크버튼이 안뜸
	     
    }
		
	});
	
	
	//-----------------------------------------
	//attr() -> prop() 
	
    $('.check-all').click(function(){ //위 조항 모두가 눌렸을 때
      var checked = $('.check-all').is(':checked'); //위 조항 모두가 체크되면
      
   /*   if(checked)
         $('.agree').prop('checked',true);
      else if(!checked)
         $('.agree').prop('checked',false);   */
         

         
      $('.agree').prop('checked', $('.check-all').is(':checked'));   
      //가~다 조항에 위 조항 모두 속성 주기   
     
        
   $('.agree').click(function(){ //위 조항 모두 누른 후 가~다 조항 클릭했을 때
   
         $('.check-all').prop('checked',false);
         //위 조항 모두가 해제되기
      })
     
         
   })
   
  
   
   
   
});