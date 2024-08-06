#!/usr/bin/env node
const { stdin, stdout, stderr, argv, exit } = require("process");
const fs = require("fs");

const filePath = argv[2];

// Function to read from file
function readFromFile(path) {
  const fileStream = fs.createReadStream(path);
  fileStream.on("error", (error) => {
    stderr.write(`Error: ${error.message}\n`);
    exit(1);
  });

  fileStream.on("data", (data) => {
    const coloredText = changeColor(34, data.toString());
    if (!stdout.write(coloredText)) {
      fileStream.pause();
    }
  });

  stdout.on("drain", () => {
    fileStream.resume();
  });

  fileStream.on("end", () => {
    stdout.write("\n");
    exit(0);
  });
}

// Function to change color of output
function changeColor(color, text) {
  return `\x1b[${color}m${text}\x1b[0m`; // ANSI escape code for color
}

// Read from file if filePath is provided as command line argument
if (filePath) {
  readFromFile(filePath);
}

// Listen for data on stdin
stdin.on("data", (data) => {
  const input = data.toString("utf-8").trim();
  if (input.startsWith("path:")) {
    const path = input.slice(5);
    readFromFile(path);
  } else {
    const upperCaseText = data.toString().toUpperCase();
    const coloredText = changeColor(34, upperCaseText); // Change color to blue (34) for red 31....
    stdout.write(coloredText);
    stdout.write("\n");
  }
});
