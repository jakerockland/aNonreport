$(document).on('change', '.btn-file :file', function() {
  var input = $(this);
  var files = input.get(0).files;
  console.log(files.length);
  for (var i = 0; i < files.length; i++) {
    var label = files[i].name;
    console.log(label);
  }
});
