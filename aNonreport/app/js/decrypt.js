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
