jQuery(document).ready(function($) {
    
    var text = "";
    
    var user = { 
        normal: 'nn',
        strong: 'bb',
        italics: 'ii',
        blue:'b1',
        title_font_size:'tt',
        highlight_yellow: "yb"
    };

    var html = {
        normal:"<spam style= 'color:black; font-size:25px; font-style:normal !important; font-weight:normal !important;'>",
        strong: "<spam> <strong>",
        italics: "<spam><i>",
        blue: "<spam><p style= 'color:blue'>",
        title_font_size:"<spam><h1>",
        highlight_yellow:"<spam><p style= 'background-color:yellow'>"
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


