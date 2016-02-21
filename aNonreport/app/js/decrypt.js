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
  var decryptedData = CryptoJS.AES.decrypt(encryptedData, decryptedSessionKey).toString(CryptoJS.enc.Latin1);
  console.log('Decrypted Data:\n' + decryptedData);
  function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    // loop over them all
    for (var i = 0; i < checkboxes.length; i++) {
      // And stick the checked ones onto an array...
      if (checkboxes[i].checked) {
        checkboxesChecked.push(1);
     }
      else {
        checkboxesChecked.push(0);
      }
  }

    var string = '1';
    for (var i = 0; i < checkboxesChecked.length; i++) {
      string += checkboxesChecked[i].toString();
    }

    var number = parseInt(string, 2);

    // Return the array if it is non-empty, or null
    return number;
  }

  return decryptedData;
};


var uploadData = function () {

  var encryptedPacket = $('#report').data('encryptedPacket');
  var hashData = $('#report').data('hashData');
  if (encryptedPacket) {
    var decryptedData = decrypt(encryptedPacket, 'UnitedNations');
    console.log(decryptedData);
    console.log(hashData);
    console.log(encryptedPacket);
    console.log(Date.now());
    console.log($('#location').data('latitude'));
    console.log($('#location').data('longitude'));
    console.log('tags');
    console.log(getCheckedBoxes);
    alert('Thank you, your report has been submitted.');
  } else {
    alert('No file uploaded for reporting!');
  }
};
