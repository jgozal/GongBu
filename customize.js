jQuery(document).ready(function($) {
    
    var text = "";
    
    var user = { 
        strong: 'bb',
        italics: 'ii',
        green:'gg'
    };

    var html = {
        strong: "<strong>",
        italics: "<i>",
        green: "<p style= 'color:green'>"
    }

    var regex = null;

    $('#editor').keyup(function(){getContent()});

        function getContent () {
        text =  $('#editor').val();
        
        for (key in user) {
            regex = new RegExp(user[key], 'g');
            text = text.replace(regex, html[key]);
            $('#translator').html(text);
    };


    };

    
});


/*  for (key in user) {
    regex = /bb([^)]+)bb/gmi;
    text = text.replace(regex, html[key]+ text.match(regex) + html[key]);
    $('#translator').html(text);
    };

    */


