$(document).ready(function(){
    feather.replace();
    jQuery('.scrollbar-macosx').scrollbar();

    $('main > .navbar .navbar-brand').click(function(){
        console.log('dsfdf');
        if($(".sidebar").hasClass("sidebar-mini"))
            $(".sidebar").removeClass('sidebar-mini');
        else
            $(".sidebar").addClass('sidebar-mini');
    });
    
});