const request = require("request");
const fs = require("fs");

const website = process.argv.slice(2)[0];
const fileName = process.argv.slice(2)[1];

//
request(website, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  //use the writeFile to store the info of the website into a new file or edit the file if existing
  //fs.writeFile( file, data, options, callback )
  // used to asynchronously write the specified data to a file. By default, the file would be replaced if it exists.
  //The ‘options’ parameter can be used to modify the functionality of the method.
  fs.writeFile(fileName, body, 'utf8', (error) => {
    if (error) {
      console.log("error: ", error);
    } else {
      console.log(`file has been saved ${body.length} bytes to ${fileName}`);
    }
  });
});

