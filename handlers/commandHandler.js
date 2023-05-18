async function loadCommands(client) {
  const { loadFiles } = require("../functions/fileLoader");
  const ascii = require("ascii-table");
  const commandtable = new ascii().setHeading("Commands", "Status");
  const applicationtable = new ascii().setHeading("Applications", "Status");

  await client.commands.clear();
  await client.subCommands.clear();
  await client.applications.clear();
  let CommandsArray = [];

  //Komut dosyalarını işleme
  const Files = await loadFiles("Commands");
  Files.forEach((file) => {
    const command = require(file);

    if (command.subCommand)
      return client.subCommands.set(command.subCommand, command);

    client.commands.set(command.data.name, command);

    CommandsArray.push(command.data.toJSON());

    commandtable.addRow(command.data.name, "✅   +");
  });
  //Application dosyalarını işleme
  const AppFiles = await loadFiles("Applications");
  AppFiles.forEach((AppFiles) => {
    const application = require(AppFiles);
    client.applications.set(application.data.name, application);

    CommandsArray.push(application.data.toJSON());

    applicationtable.addRow(application.displayName, "✅   +");
  });
  //komut dizilerini application metoduna ekleme

  client.application.commands.set(CommandsArray);

  //Ascii görüntüsü ile kontrol
  console.log(commandtable.toString(), "\n Komutlar Yüklendi.");
  return console.log(applicationtable.toString(), "\n Aplikasyonlar Yüklendi.");
}

module.exports = { loadCommands };
