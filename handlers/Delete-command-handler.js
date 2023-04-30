async function deleteCommands(client) {
  const { loadFiles } = require("../functions/fileLoader");

  await client.commands.clear();
  await client.subCommands.clear();
  await client.applications.clear();
  let CommandsArray = [];

  const Files = await loadFiles("Commands/Developer");
  Files.forEach((file) => {
    const command = require(file);

    if (command.subCommand)
      return client.subCommands.set(command.subCommand, command);

    client.commands.set(command.data.name, command);

    CommandsArray.push(command.data.toJSON());
  });
  client.application.commands.set(CommandsArray);
}

module.exports = { deleteCommands };
