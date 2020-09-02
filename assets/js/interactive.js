$(document).ready( () => {
    $(".interactive").click(function(){
        let default_value = $(this).text();
        let text = prompt('Enter your text: ', default_value);
        $(this).text(text);
      });      
});