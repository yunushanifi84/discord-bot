async function loadCommands(client) {
  const { loadFiles } = require("../functions/fileLoader");
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Commands", "Status");

  await client.commands.clear();
  await client.subCommands.clear();

  let CommandsArray = [];

  const Files = await loadFiles("Commands");
  Files.forEach((file) => {
    const command = require(file);

    if (command.subCommand)
      return client.subCommands.set(command.subCommand, command);

    client.commands.set(command.data.name, command);

    CommandsArray.push(command.data.toJSON());

    table.addRow(command.data.name, "✅   +");
  });
  client.application.commands.set(CommandsArray);

  return console.log(table.toString(), "\n Komutlar Yüklendi.");
}

module.exports = { loadCommands };
