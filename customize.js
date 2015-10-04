jQuery(document).ready(function($) {
    
    var text = "";
    
    var user = { 
        normal: 'nn',
        strong: 'bb',
        italics: 'ii',
        blue:'b1',
        title_font_size:'tt',
        highlight_yellow: "hly"
    };

    var html = {
        normal:"<p style= 'color:black; font-size:25px; font-weight:normal'>",
        strong: "<strong>",
        italics: "<i>",
        blue: "<p style= 'color:blue'>",
        title_font_size:"<h1>",
        highlight_yellow:"<p style= 'background-color:yellow'>"
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


