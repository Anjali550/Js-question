// 30. Write a script which generates a random hexadecimal number.
 // storing all letter and digit combinations
    // for html color code
    var letters = "0123456789ABCDEF";
      
    // html color code starts with #
    var color = '#';
      
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++)
    color += letters[(Math.floor(Math.random() * 16))];
      
    console.log(color);