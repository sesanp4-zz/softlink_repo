/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    
    
    $(".img-round").roundImage();
    $(".im").roundImage();
    $("#img1").addClass("d-none");
    $("#img2").addClass("d-none");
    $("#img3").addClass("d-none");
    
    $(".business").addClass("d-none");
    $(".login").addClass("d-none");
    $(".job").addClass("d-none");
    
    function animate(num){       
          setInterval(function(){
              console.log("starting now..removing number..."+num);
               $("#img"+num).addClass("d-none");
             num++;
             if(num<=3){
                 id=num;  
                 console.log("starting now..showing  number..."+num);
                 $("#img"+id).removeClass("d-none").addClass("animated fadeIn");
             }else{
                 num=0;
             }

    },5000); 
        
    }
    
   
    
   // animate(0);
   
   
   $("#client").click(function(e){
       e.preventDefault();
       $(".main").children().addClass("d-none");
       $(".business").removeClass("d-none").addClass("animated slideInRight");
       
   });
   
   $("#free").click(function(e){
       e.preventDefault();
        $(".main").children().addClass("d-none");
       $(".freelancer").removeClass("d-none").addClass("animated slideInRight");
             
   });
   
     $(".in").click(function(e){
       e.preventDefault();
        $(".main").children().addClass("d-none");
       $(".login").removeClass("d-none").addClass("animated slideInRight");
             
   });
   
   $("#post").click(function(e){
       e.preventDefault();
        $(".main").children().addClass("d-none");
       $(".job").removeClass("d-none").addClass("animated slideInRight");
             
   });
   
});