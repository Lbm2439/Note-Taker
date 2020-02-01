const util = require("util");
const fs = require("fs");

let rawData = util.promisify(fs.readFile);



const notes = {
  read() {
    return rawData("db/db.json", "utf8");
  },
  getNotes() {
    return this.read().then(gottenNotes => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(gottenNotes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }
};

module.exports = notes;
