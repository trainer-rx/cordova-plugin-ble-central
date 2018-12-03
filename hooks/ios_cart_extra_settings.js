var fs = require("fs");

var cartExtraSettings = `
github "NordicSemiconductor/IOS-Pods-DFU-Library" ~> 4.2.2
github "marmelroy/Zip"
`;

fs.appendFile("platforms/ios/Cartfile", cartExtraSettings, function(err, data) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
