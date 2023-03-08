

const Person = require("./models/person");

Person.insertMany([
  {
    name: "samuel ma",
    age: 25,
    favoriteFoods: ["favFoodOne", "favFoodTwo", "favFoodThree"],
  },
]).then((insertedElement) => {
  console.log("The Inserted Elemenmt: ", insertedElement);
});

Person.create([
  {
    name: "Person X",
    age: 34,
    favoriteFoods: ["favFoodFour", "favFoodFive"],
  },
  {
    name: "Person Y",
    age: 43,
    favoriteFoods: ["favFoodSix", "favFoodSeven"],
  },
  {
    name: "Person Z",
    age: 19,
    favoriteFoods: ["favFoodEight", "favFoodNine"],
  },
]).then((insertedElement) => {
  console.log("The Inserted Elemenmt: ", insertedElement);
});

Person.find().then((remainingPerson) => {
  console.log(remainingPerson);
});

Person.findOne().then((remainingPerson) => {
  console.log(remainingPerson);
});

Person.findById(id, function (err, docs) {
  console.log(docs);
});

Person.findOneAndUpdate({ name: "samuel ma" }, { $set: { age: "26" } }).then(
  (updatedPerson) => {
    console.log("Updated Person: ", updatedPerson);
  }
);

Person.findByIdAndRemove(id, function (err, docs) {
  console.log("Removed Person :", docs);
});

Person.remove({ name: "samuel ma" }).then((removedPersons) => {
  console.log("Removed Person :", removedPersons);
});
