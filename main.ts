import inquirer from "inquirer";
const friend = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Enter your friend name",
  },
]);
if (
  friend.name === "Anabia" ||
  friend.name === "Anosha"
) {
  console.log(`${friend.name} is your friend.`);
} else {
  console.log(`${friend.name} is not your friend.`);
}
