"use strict";
$(document).ready(function(){
  $(document).on("click", "button", function(){
  let xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${$("input").val()}&api_key=X4IoAdi0Yl2gQ3hChKSxHepCQsFp9Aw3&limit=27`);
  xhr.then(function(data) { 
    console.log("success got data", data); 
    let posts = data.data
    for( let i = 0; i < posts.length; i++) {
      console.log(`${posts[i].slug}`)
      $("section").append(`

        <img src="${posts[i].images.fixed_width.url}" >

        `);
    }
    
  });
});	
});

