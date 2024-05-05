#! /usr/bin/env node
import inquirer from "inquirer";
const input1 = await inquirer.prompt({
  name: "num1",
  type: "number",
  message: "Enter the number",
});
const number = 5;
if (input1.num1 === number) {
  console.log(`You have guess the right number ${number}`);
} else {
  console.log("Please try agin");
}
