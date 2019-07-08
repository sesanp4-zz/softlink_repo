/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
   // showSideBar();
    
    $(".edit").click(function(e){
        e.preventDefault();
        parentclass=$(this).attr("parentclass");
        $("."+parentclass).removeAttr("disabled").focus().addClass('active_input');
    });
    
    
     $(".save").click(function(e){
        e.preventDefault();
        parentclass=$(this).attr("parentclass");
        $("."+parentclass).removeClass('active_input').attr('disabled',true);
        alert($("."+parentclass).val());
    });
    
    
 function showProfilePage(){
    
    
    
}

   
});




