 function readURL(input) {
   if (input.files && input.files[0]) {
     var reader = new FileReader();
     reader.onload = function(e) {
      console.log(input.files[0].type.split('/')[0])
      console.log(input.files[0].type.split('/')[1])
      if (input.files[0].type.split('/')[0] == 'image') {
       $('.file-uploader-content').append('<div class="content-div"><img src="'+e.target.result+'"><name>'+input.files[0].name+'</name><span class="fa fa-trash"></span><a href="'+e.target.result+'" download="'+input.files[0].name+'"><span class="fa fa-download"></span></a></div>');
      }
      else if (input.files[0].type.split('/')[1] == 'pdf') {
        $('.file-uploader-content').append('<div class="content-div"><img src="images/pdf.png"><name>'+input.files[0].name+'</name><span class="fa fa-trash"></span><a href="'+e.target.result+'" download="'+input.files[0].name+'"><span class="fa fa-download"></span></a></div>');
      }
      else if (input.files[0].type.split('/')[1] == 'xml') {
        $('.file-uploader-content').append('<div class="content-div"><img src="images/xml.png"><name>'+input.files[0].name+'</name><span class="fa fa-trash"></span><a href="'+e.target.result+'" download="'+input.files[0].name+'"><span class="fa fa-download"></span></a></div>');
      }
      else if (input.files[0].type.split('/')[1] == 'html') {
        $('.file-uploader-content').append('<div class="content-div"><img src="images/html.png"><name>'+input.files[0].name+'</name><span class="fa fa-trash"></span><a href="'+e.target.result+'" download="'+input.files[0].name+'"><span class="fa fa-download"></span></a></div>');
      }
      else if (input.files[0].type.split('/')[1] == 'zip') {
        $('.file-uploader-content').append('<div class="content-div"><img src="images/zip.png"><name>'+input.files[0].name+'</name><span class="fa fa-trash"></span><a href="'+e.target.result+'" download="'+input.files[0].name+'"><span class="fa fa-download"></span></a></div>');
      }
      else {
        $('.file-uploader-content').append('<div class="content-div"><img src="images/file.png"><name>'+input.files[0].name+'</name><span class="fa fa-trash"></span><a href="'+e.target.result+'" download="'+input.files[0].name+'"><span class="fa fa-download"></span></a></div>');
      }
     };
     reader.readAsDataURL(input.files[0]);
   } else {
     removeUpload();
   }
 }
 $(document).on("click",".fa-trash",function(){
   $(this).parent().remove()
 });