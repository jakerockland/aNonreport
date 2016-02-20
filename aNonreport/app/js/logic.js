$(document).on('change', '.btn-file :file', function(e) {
  var input = e.target;

  var files = input.files;
  console.log(files.length);

  for (var i = 0; i < files.length; i++) {
    file = files[i];
    console.log(file);
    var label = file.name;
    console.log(label);
    var reader = new FileReader();

    reader.onload = function() {
      var dataURL = reader.result;

      console.log(dataURL);

      var mt = Random.engines.mt19937();
      mt.autoSeed();
      var sessionKey = Random.hex(true)(mt, 32);
      console.log(sessionKey);

      var encrypted = CryptoJS.AES.encrypt(dataURL, sessionKey);
      console.log(encrypted.toString());

      var decrypted = CryptoJS.AES.decrypt(encrypted, sessionKey);
      console.log(decrypted.toString(CryptoJS.enc.Latin1));
    };

    reader.readAsDataURL(file);
  };
});
