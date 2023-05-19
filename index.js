const contactsService = require("./contacts");
const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contactsService.listContacts();
      return console.log(list);
      break;

    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);

      break;

    case "add":
      const add = await contactsService.addContact(name, email, phone);
      return console.log(add);

      break;

    case "remove":
      const remove = await contactsService.removeContact(id);
      return console.log(remove);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
// invokeAction({
//   action: "add",
//   name: "Vadym",
//   email: "vad@gmail.com",
//   phone: "0997777779",
// });

// invokeAction({ action: "remove", id: "6F3OyQbwOicn-NPsPosRL" });

program
  .option("--action <type>")
  .option("--name <type>")
  .option("--id <type>")
  .option("--email <type>")
  .option("--phone <type>");
program.parse();
const options = program.opts();
invokeAction(options);
