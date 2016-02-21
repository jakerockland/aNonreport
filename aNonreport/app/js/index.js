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
