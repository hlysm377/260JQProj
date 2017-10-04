
$(document).ready(function(){

    $(".btn").mouseup(function(){
        $(this).blur();
    });

    // bind event handlers here

});

function prettyAlert(text){
    if(typeof text != 'string'){
        return;
    }
    $("#prettyAlertContent").html(text);
    $("#prettyAlert").modal('show');
}