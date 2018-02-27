$(document).ready(function(){

$("submit").click(function(){
    nam = $("name").val();
    quantit = $("quantity").val();;
    unit = $("units").val();;
    manufacture = $("manufacture").val();
    
    $.post("http://localhost:1825/details",{name:nam,quantity:quantit,units:unit,manufacturer:manufacture},function(data){
            alert("login sucess");
    });
});
})