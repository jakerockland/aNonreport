AWS.config.update({
  accessKeyId: 'AKIAJEPRFK36DC5KIFIQ',
  secretAccessKey: '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',
});
AWS.config.region = 'eu-central-1';

var s3 = new AWS.S3();

var uploadData = function() {

  var encryptedPacket = $('#report').data('encryptedPacket');
  var hashData = $('#report').data('hashData');
  if (encryptedPacket) {

    var categories = [];
    $('#checkboxes input:checked').each(function() {
      categories.push($(this).attr('name'));
    });

    var key = String(Math.floor((Date.now() / 1000)));

    var metaData = JSON.stringify({
      hash: hashData,
      latitude: $('#location').data('latitude'),
      longitude: $('#location').data('longitude'),
      categories: categories,
    });

    var fileParams = {
      Bucket: 'a-non-report',
      Key: 'data/' + key,
      Body: encryptedPacket,
    };

    var ledgerParams = {
      Bucket: 'a-non-report',
      Key: 'ledger/' + key,
      Body: metaData,
    };

    s3.putObject(fileParams, function(err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        alert('Error uploading encrypted packet.');
      } else {
        s3.putObject(ledgerParams, function(err, data) {
          if (err) {
            console.log(err, err.stack); // an error occurred
            alert('Error uploading ledger information.');
          } else {
            console.log(data); // successful response
            alert('Thank you, your report has been submitted.');
          }
        });

        console.log(data); // successful response
      }
    });

    console.log('Encrypted Packet:\n' + encryptedPacket);

  } else {
    alert('No file uploaded for reporting!');
  }
};

var getData = function(key) {
  var passphrase = prompt('Please enter your decrypting passphrase to decrypt aNonnote #' + key);
  if (passphrase === null) {
    return null;
  } else {
    var params = {
      Bucket: 'a-non-report',
      Key: 'data/' + key,
    };
    s3.getObject(params, function(err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        console.log(data); // successful response
        var encryptedPacket = String(data.Body);
        var decryptedData = decrypt(encryptedPacket, passphrase);

        var keep = decryptedData.split(':', 1)[1]
        var importantInfo = keep.split(';', 1)
        var url = new Blob(inportantInfo[1], {
          type: importantInfo[0]
        });

        window.open(url, 'Download');
        console.log(decryptedData);
      }
    });
  }
};

// var getLedger = function(key) {
//   // console.log(key);
//   var params = {
//     Bucket: 'a-non-report',
//     Key: 'ledger/' + key,
//   };
//   s3.getObject(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
//   });
// };

var app = angular.module('Ledger', []);
app.controller('LedgerCtrl', function($scope, $interval) {

  var updateLedger = function() {
    var params = {
      Bucket: 'a-non-report',
      MaxKeys: 11,
      Prefix: 'ledger/',
    };

    s3.listObjects(params, function(err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        // console.log(data); // successful response
        $scope.snippets = data.Contents;
        $scope.snippets.shift();
      }
    });
  };
  updateLedger();
  $interval(updateLedger, 10000);

});
