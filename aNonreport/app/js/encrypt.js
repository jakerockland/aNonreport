var encryptedPacked;

$(document).on('change', '.btn-file :file', function(e) {
  var input = e.target;

  var files = input.files;
  // console.log('Number of Files:\n' + files.length);

  for (var i = 0; i < files.length; i++) {
    file = files[i];
    var label = file.name;
    // console.log('File Name:\n' + label);
    // console.log('File Data:\n' + file);

    //  session key generation block
    var mt = Random.engines.mt19937();
    mt.autoSeed();
    var sessionKey = Random.hex(true)(mt, 32);
    // console.log('Session Key:\n' + sessionKey);

    // rsa encryption block
    // var rsaKey = cryptico.generateRSAKey('UnitedNations', 1024);
    // var publicKey = cryptico.publicKeyString(rsaKey);
    var publicKey = 'tnWx5IiQsPzB3GvcqJDKKMz1pEOP9ERHmC9xU0ZQvMTK/csKZA+IV/WWMObKALaH7k0+Os0ZZH262PHInFZ2f0kqKTA/++yanoqUv+Y+NCstP3TRsQiv41PrRsVMXE8hoIq1WZFiIiV4W5eodrqbMIwzSr0ufezKmKYP8wCHYB8=';
    // console.log('Public RSA Key:\n' + publicKey);

    // read in and encrypt file
    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      //   console.log('URL Data:\n' + dataURL);

      // AES encrypt file with session key
      var encrypted = CryptoJS.AES.encrypt(dataURL, sessionKey);
      //   console.log('Encrypted Data:\n' + encrypted.toString());

      // encrypt session key with RSA
      var encryptedSessionKey = cryptico.encrypt(sessionKey, publicKey).cipher;
      //   console.log('Encrypted Session Key:\n' + encryptedSessionKey);

      // create data packet
      encryptedPacked = encrypted + ',' + encryptedSessionKey;

      // decrypted session key
      //   var decryptedSessionKey = cryptico.decrypt(encryptedSessionKey, cryptico.generateRSAKey('UnitedNations', 1024)).plaintext;
      // console.log('Decrypted Session Key:\n' + decryptedSessionKey);

      // decrypt file with decrypted session key
      //   var decrypted = CryptoJS.AES.decrypt(encrypted, decryptedSessionKey);
      //   console.log('Decrypted Data:\n' + decrypted.toString(CryptoJS.enc.Latin1));
    };

    reader.readAsDataURL(file);
  };
});
