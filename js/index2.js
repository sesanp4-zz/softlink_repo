/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    
 $(document).ready(function(){
  

  
   $("a").smoothScroll({speed:500});
   
   $("#message").addClass("col-12").t();
  $("#right").removeClass("d-none").addClass("animated fadeIn");
             
  
    $("#main").children("div").addClass("d-none");
    $("#selection").addClass("d-none");
    $("#airtime_sumary").addClass("d-none");
    $("#tv_sumary").addClass("d-none");
    $("#electricity_sumary").addClass("d-none");

     
     $(document).on("click",".a",function(e){
         e.preventDefault();        
         value=$(this).text();
         switch(value){
             
             case "Airtime":
                $("#main").children("div").addClass("d-none"); 
                $("#airtime_section").removeClass("d-none").addClass("animated slideInLeft");
               break;
              
            case "TV":
                $("#main").children("div").addClass("d-none"); 
                $("#tv_section").removeClass("d-none").addClass("animated slideInLeft");
               break;
           
           case "Electricity":
                $("#main").children("div").addClass("d-none"); 
                $("#electricity_section").removeClass("d-none").addClass("animated slideInLeft");
               break;
               
           case "More":
                $("#row2").children("div").addClass("d-none"); 
                $("#m").removeClass("d-none").addClass("animated slideInLeft");
               break;    
             
         }
         
     });
     
     
     $(document).on("click",".button",function(e){
         e.preventDefault();        
         value=$(this).val();
         switch(value){
             
             
             case "airtime_continue":
                $("#airtime_section").remove(); 
                $("#airtime_sumary").removeClass("d-none").addClass("animated zoomIn");
               break;
              
            case "tv_continue":
                $("#tv_section").remove();
                $("#tv_sumary").removeClass("d-none").addClass("animated zoomIn");
               break;
           
           case "electricity_continue":
                $("#electricity_section").remove();
                $("#electricity_sumary").removeClass("d-none").addClass("animated zoomIn");
               break;
               
           case "More":
                $("#row2").children("div").addClass("d-none"); 
                $("#m").removeClass("d-none").addClass("animated slideInLeft");
               break;    
             
         }
         
     });
     
   
 });  