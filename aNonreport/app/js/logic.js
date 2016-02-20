$(document).on('change', '.btn-file :file', function() {
  var input = $(this);
  var files = input.get(0).files;
  console.log(files.length);

  var mt = Random.engines.mt19937();
  mt.autoSeed();
  var sessionKey = Random.hex(true)(mt, 32);
  console.log(sessionKey);

  for (var i = 0; i < files.length; i++) {
    file = files[i];
    console.log(file);
    var label = file.name;
    console.log(label);

    var reader = new FileReader(file);
    reader.onload = function(e) {
      var encrypted = CryptoJS.AES.encrypt(e.target.result, sessionKey);
      console.log(encrypted.toString());
    }
  }
});
