$(document).on('change', '.btn-file :file', function(e) {
  var input = e.target;

  var files = input.files;
  console.log(files.length);

  for (var i = 0; i < files.length; i++) {
    file = files[i];
    console.log(file);
    var label = file.name;
    console.log(label);

    //  session key generation block
    var mt = Random.engines.mt19937();
    mt.autoSeed();
    var sessionKey = Random.hex(true)(mt, 32);
    console.log(sessionKey);

    // rsa encryption block
    var rsaKey = cryptico.generateRSAKey('UnitedNations', 1024);
    var publicKey = cryptico.publicKeyString(rsaKey);
    console.log(publicKey);

    // read in and encrypt file
    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;

      console.log(dataURL);

      // AES encrypt file with session key
      var encrypted = CryptoJS.AES.encrypt(dataURL, sessionKey);
      console.log(encrypted.toString());

      // encrypt session key with RSA
      var encryptedSessionKey = cryptico.encrypt(sessionKey, publicKey).cipher;
      console.log(encryptedSessionKey);

      // decrypted session key
      var decryptedSessionKey = cryptico.decrypt(encryptedSessionKey, cryptico.generateRSAKey('UnitedNations', 1024)).plaintext;

      // decrypt file with decrypted session key
      var decrypted = CryptoJS.AES.decrypt(encrypted, decryptedSessionKey);
      console.log(decrypted.toString(CryptoJS.enc.Latin1));
    };

    reader.readAsDataURL(file);
  };
});
