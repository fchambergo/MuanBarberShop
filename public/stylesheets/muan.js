//Whenever the submit button is clicked
$("button").click(function(){
    //Find out user entered values from forms
    var first_name = $("#inputFName").val();
    var last_name = $("#inputLName").val();
    var comment = $("#commentArea").val();
    var date = getDate();
    
    //Add user input to HTML as new review entry
    $(".reviews").prepend('<h4 class="name">'+ first_name + " " + last_name.substr(0,1) + '</h4>' +
    '<p class="date">' + date + '</p>' + 
    '<p class="comments">'+ comment +'</p>');
    
    //Clear and reset forms
    $("form")[0].reset();
    $("textarea").val("");
    
});

//Figure out today's date
function getDate(){
    var d = new Date();
    var date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
        
    return date;
}