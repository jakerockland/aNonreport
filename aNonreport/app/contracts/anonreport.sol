contract AnonReport {
  Upload[] public uploads;
  event UploadAdded(uint16 uploadID, bytes32 Hash, string Location, uint16 Date, bytes32 FileLocation)
  struct Upload {
    bytes32 Hash;
    string Location;
    uint16 Date;
    bytes32 FileLocation;
  }
  function AnonReport() {

  }
  function newUpload(bytes32 _Hash, string _Location, uint16 _Date, bytes32 _FileLocation) returns(uint16 uploadID){
    uploadID = uploads.length++;
    Upload u = uploads[uploadID];
    u.Hash=_Hash;
    u.Location=_Location;
    u.Date=_Date;
    u.FileLocation=_FileLocation;
    UploadAdded(uploadID,_Hash,_Location,_Date,_FileLocation);
  }

  function get() constant returns (uint retVal) {
    return storedData;
  }
}
