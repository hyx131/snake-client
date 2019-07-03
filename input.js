/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;
let dir;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    clearInterval(dir);
    dir = setInterval(() => connection.write("Move: up"), 50); 
  } else if (key === "a") {
    clearInterval(dir);
    dir = setInterval(() => connection.write("Move: left"), 50); 
  } else if (key === "s") {
    clearInterval(dir);
    dir = setInterval(() => connection.write("Move: down"), 50); 
  } else if (key === "d") {
    clearInterval(dir);
    dir = setInterval(() => connection.write("Move: right"), 50); 
  }
};


module.exports = { setupInput };