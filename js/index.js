/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    
 $(document).ready(function(){
  

  
   $("a").smoothScroll({speed:500});
    
     $("#container").children("div").addClass("d-none");
     $("#faqmsg").children("div").addClass("d-none");
     $("#service").change(function(){
         service=$(this).val();
          if(service==="Airtime"){
               $("#container").children("div").addClass("d-none");              
               $("#airtime_section").removeClass("d-none").addClass("animated fadeIn"); 
               $("#faqmsg").children("div").addClass("d-none");
               $(".msg2").removeClass("d-none").addClass("animated slideInLeft"); 
                         
         }else if(service==="Electricity"){
               $("#container").children("div").addClass("d-none");
               $("#electricity_section").removeClass("d-none").addClass("animated fadeIn");    
               $("#faqmsg").children("div").addClass("d-none");
               $(".msg3").removeClass("d-none").addClass("animated slideInLeft"); 
              
         }else if(service==="Pay TV"){
             $("#container").children("div").addClass("d-none");
             $("#tv_section").removeClass("d-none").addClass("animated fadeIn"); 
             $("#faqmsg").children("div").addClass("d-none");
             $(".msg4").removeClass("d-none").addClass("animated slideInLeft"); 
             
         }
     });
     
     $(document).on("click",".button",function(data){
         value=$(this).attr("value");
         $(this).addClass("d-none");
         
         if(value==="airtime_continue"){
             $("#airtime_sumary").removeClass("d-none").addClass("animated fadeIn");   
             
         }else if(value==="electricity_continue"){
             $("#electricity_sumary").removeClass("d-none").addClass("animated fadeIn");
             
         }else if(value==="tv_continue"){
             $("#tv_sumary").removeClass("d-none").addClass("animated fadeIn");
         }else{
            
         }
         
         
     });
     
     
     $("#airtime_cont_but").click(function(){
         $("#airtime_section").remove();
         $("#airtime_sumary").addClass("animated fadeIn");
     });
     
     $("#tv_cont_but").click(function(){
         $("#tv_section").remove();
         $("#tv_sumary").addClass("animated fadeIn");
     });
     
     $("#electricity_cont_but").click(function(){
         $("#electricity_section").remove();
         $("#electricity_sumary").addClass("animated fadeIn");
     });
     
     
    /* $("#airtime_send_but").click(function(){
         $("#airtime_sumary").remove();
         $("#transaction_message").removeClass("d-none").addClass("animated fadeIn");
     });*/
     
   
 });  