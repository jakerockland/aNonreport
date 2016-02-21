var decrypt = function(encryptedPacket, passphrase) {

  console.log('Encrypted Packet:\n' + encryptedPacket);

  var splitPacket = encryptedPacket.toString().split(',');
  var encryptedData = splitPacket[0];
  var encryptedSessionKey = splitPacket[1];

  // decrypted session key
  var decryptedSessionKey = cryptico.decrypt(encryptedSessionKey, cryptico.generateRSAKey(passphrase, 1024)).plaintext;
  console.log('Decrypted Session Key:\n' + decryptedSessionKey);

  // decrypt file with decrypted session key
  var decryptedData = CryptoJS.AES.decrypt(encryptedData, decryptedSessionKey).toString(CryptoJS.enc.Latin1);
  console.log('Decrypted Data:\n' + decryptedData);

  return decryptedData;
};

// var decryptedData = decrypt(encryptedPacket, 'UnitedNations');

var uploadData = function() {

  var encryptedPacket = $('#report').data('encryptedPacket');
  var hashData = $('#report').data('hashData');
  if (encryptedPacket) {
    console.log('Encrypted Packet:\n' + encryptedPacket);
    console.log('Data Hash:\n' + hashData);
    console.log(Date.now());
    console.log($('#location').data('latitude'));
    console.log($('#location').data('longitude'));
    var categories = [];
    $('#checkboxes input:checked').each(function() {
      categories.push($(this).attr('name'));
    });
    console.log(categories);
    alert('Thank you, your report has been submitted.');
  } else {
    alert('No file uploaded for reporting!');
  }
};
