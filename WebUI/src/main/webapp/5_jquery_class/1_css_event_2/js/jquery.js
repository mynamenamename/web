$(function(){
	
	var c= $('.rollover img[alt=Home]');
     
     c.hover(function(){ //마우스 이벤트=hover
    	  $(this).attr('src','imgs/menu01_on.png')
    	}, function(){
    	  $(this).attr('src','imgs/menu01_off.png')	
    	}); 
      
     var d= $('.rollover img[alt=Products]'); 
      
       d.hover(function(){ //마우스 이벤트=hover
    	  $(this).attr('src','imgs/menu02_on.png')
    	}, function(){
    	  $(this).attr('src','imgs/menu02_off.png')	
    	}); 
    
     var e= $('.rollover img[alt=Company]'); 
    
       e.hover(function(){ //마우스 이벤트=hover
    	  $(this).attr('src','imgs/menu03_on.png')
    	}, function(){
    	  $(this).attr('src','imgs/menu03_off.png')	
    	}); 
    
    
    /*
     반복문으로!
    
     var k = new Array('Home', 'Products', 'Company');
     for(let i = 0; i<k.length; i++){
   

     var k2= $('.rollover img[alt='+k[i]+']');
     k2.hover(function(){ 
            $(this).attr('src','imgs/menu0'+(i+1) + '_on.png')
          }, function(){
            $(this).attr('src','imgs/menu0'+(i+1) + '_off.png')   
          }); 
        
        }
    });
    */
    
    
    
  /*
   $('img').hover(function(){
                                                   //마우스를 올렸을 때
      var src = $(this).attr('src');                  //이미지 주소값 불러와서
      $(this).attr('src',src.replace('off','on'));      //off를 on으로 바꿔줌
   },function(){
                                                   //마우스를 내렸을 때
      var src = $(this).attr('src');                  //이미지 주소값 불러와서
      $(this).attr('src',src.replace('on','off'));      //on을 off로 바꿔줌
   })
*/
    
    
	})
	
	
	