#!/usr/bin/node
/**
 * This program interacts with the user through the command line.
 */

process.stdout.write("Welcome to ALX, what is your name?\n");

// Listen for user input from stdin
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Trim any extra spaces or newline characters
  process.stdout.write(`Your name is: ${name}\n`);

  // End the program
  process.stdout.write("This important software is now closing\n");
  process.exit();
});

