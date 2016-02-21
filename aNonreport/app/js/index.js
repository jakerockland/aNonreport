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
