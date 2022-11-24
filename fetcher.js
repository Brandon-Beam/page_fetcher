const request = require('request');
request(process.argv[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const fs = require('fs');

  const content = body;

  fs.writeFile(process.argv[3], content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

  console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`)
});

