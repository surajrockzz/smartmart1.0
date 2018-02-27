$(document).ready(function(){
$("#submit").click(function(){
    nam = $("#user").val();
    quantit = $("#quantity").val();;
    unit = $("#units").val();;
    manufacture = $("#mf").val();
    $.post("http://localhost:1825/details",{
        name:nam,
        quantity:quantit,
        units:unit,
        mf:manufacture
    },function(data){
            alert("login sucess");
    });
});
    



})