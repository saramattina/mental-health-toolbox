const db = require("../db/connection.js");
const Emotion = require("../models/emotion.js");

const insertData = async () => {
  // reset database
  await db.dropCollection('emotions').catch(() => console.log('No collection to drop'));

  // emotions data that we want inserted into database
  const emotions = [
    { name: "happy", },
    { name: "sad",},
    { name: "angry",},
    { name: "anxious", },
    { name: "scared", },
    { name: "overwhelmed", },
    { name: "disgusted", },
    { name: "surprised", },
    { name: "guilty", },
    { name: "bored", },
    { name: "indifferent", },
  ];

  // insert products into database
  await Emotion.insertMany(emotions);
  console.log("Created emotion data!");

  // close database connection. done.
  db.close();
};

insertData();