async function loadApplications(client) {
  const { loadFiles } = require("../functions/fileLoader");
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Applications", "Status");

  await client.applications.clear();
  let CommandsArray = [];

  const Files = await loadFiles("Applications");
  Files.forEach((file) => {
    const application = require(file);
    client.applications.set(application.data.name, application);

    CommandsArray.push(application.data.toJSON());

    table.addRow(application.displayName, "✅   +");
  });

  console.log(table.toString(), "\n Aplikasyonlar Yüklendi.");
  return CommandsArray;
}

module.exports = { loadApplications };
