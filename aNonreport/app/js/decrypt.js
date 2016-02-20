var decrypt = function(encryptedPacket, passphrase) {

  console.log(encryptedPacket);
  console.log(passphrase);

  var splitPacket = encryptedPacket.toString().split(',');
  var encryptedData = splitPacket[0];
  var encryptedSessionKey = splitPacket[1];

  // decrypted session key
  var decryptedSessionKey = cryptico.decrypt(encryptedSessionKey, cryptico.generateRSAKey(passphrase, 1024)).plaintext;
  console.log('Decrypted Session Key:\n' + decryptedSessionKey);

  // decrypt file with decrypted session key
  var decryptedData = CryptoJS.AES.decrypt(encryptedData, decryptedSessionKey);
  console.log('Decrypted Data:\n' + decryptedData.toString(CryptoJS.enc.Latin1));

  return decryptedData;
};

var uploadData = function() {

  var encryptedPacket = $('#encryptedPacket').data();

  if (encryptedPacket) {
    var decryptedData = decrypt(encryptedPacket, 'UnitedNations');
    console.log(decryptedData);
    console.log(Date.now());
    console.log($('#location-lat').data());
    console.log($('#location-lon').data());
  } else {
    alert('No file uploaded for reporting!');
  }
};
