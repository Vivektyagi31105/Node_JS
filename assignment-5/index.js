// Question-5
// const fs = require("fs");

// fs.unlink("./nodejs_architecture.txt", () =>
//   console.log("File Deleted SuccessFully")
// );

// Question-6
// const os = require("os");

// console.log("Operating system name: " + os.type());

// console.log("OS release : " + os.release());

// Question-7
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
    );
  }
  res.end();
});

server.listen(5000);
console.log(`The HTTP Server is running on port 5000`);
