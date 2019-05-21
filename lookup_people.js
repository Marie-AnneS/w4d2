const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

client.connect(err => {
  if (err) {
    return console.error("Connection Error", err);
  }
});

// Get the arguments from the command line
const getArguments = () => {
  const [node, path, searchName] = process.argv;
  return searchName;
};

const displayPerson = (personObj, i) => {
    var bornDate = new Date(personObj.birthdate)
  console.log(
    `- ${i++} : ${personObj.first_name} ${personObj.last_name} born ${bornDate.getFullYear()}-${bornDate.getMonth()}-${bornDate.getDate()}`
  );
};

const renderPeople = peopleArr => {
  let i = 0;
  for (const person of peopleArr) {
    i++;
    displayPerson(person, i);
  }
  console.log("-".repeat(20));
};

const searchPerson = searchName => {
  // Create the insert query to add to the database
  const query = {
    text: `SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1 `,

    values: [searchName]
  };

  client
    .query(query)
    .then(res => {
      console.log(`Searching ...`);
      console.log(
        `Found ${res.rowCount} person(s) by the name '${searchName}' :`
      );
      renderPeople(res.rows);
    })
    .catch(err => console.log(err))
    .finally(() => {
      console.log("query completed");
      client.end();
    });
};

searchPerson(getArguments());
