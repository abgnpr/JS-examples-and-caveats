var exec = require("child_process").exec;


function open() {
  switch (process.platform) {
    case "darwin":
      return "open";
    case "win32":
      return "start";
    case "win64":
      return "start";
    default:
      return "xdg-open";
  }
}

exec(open() + " " + filePath);
