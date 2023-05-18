async function deleteCommands(client) {
  const { loadFiles } = require("../functions/fileLoader");
  const ascii = require("ascii-table");
  const commandstable = new ascii().setHeading("Commands", "Status");
  await client.commands.clear();
  await client.subCommands.clear();
  await client.applications.clear();
  //bu handler komutları silmek için tasarlandı!
  let CommandsArray = [];

  const Files = await loadFiles("Commands/Developer/Reload");
  Files.forEach((file) => {
    const command = require(file);

    if (command.subCommand)
      return client.subCommands.set(command.subCommand, command);

    client.commands.set(command.data.name, command);

    CommandsArray.push(command.data.toJSON());
    commandstable.addRow(command.data.name, "✅   +");
  });
  client.application.commands.set(CommandsArray);
  console.log(
    "Komut silinmesi başarılı kalan komutlar yükleniyor...\n\n",
    commandstable.toString()
  );
}

module.exports = { deleteCommands };
