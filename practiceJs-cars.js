const carStore = {
  staff: {
    manager: {
      name: "Yossi Nissan",
      salary: 40000,
      phone: "+972-524-385-937",
    },
    workers: [
      {
        name: "Guy Peretz",
        salary: 4000,
        role: "Clerk",
      },
      {
        name: "Ronen Haim",
        salary: 9000,
        role: "Agent",
      },
      {
        name: "Idan Avinoam",
        salary: 7000,
        role: "Agent",
      },
      {
        name: "Ohad Rot",
        salary: 28500,
        role: "Agent",
      },
    ],
  },
  cars: [
    {
      type: "Lamborghini Diabolo VT 6.0",
      price: "1000000$",
      color: "Red",
    },
    {
      type: "Mercedes",
      price: "100000$",
      color: "Red",
    },
    {
      type: "Honda",
      price: "20000$",
      color: "black",
    },
    {
      type: "Honda",
      price: "21000$",
      color: "blue",
    },
  ],
};

// Create a function named 'getManagerDetails' that gets input of 'carStore'
// and returns the manager details in this format: 'Name Salary Phone'

function getManagerDetails(carStore) {
  const manager = carStore.staff.manager;
  return `${manager.name}, ${manager.salary}, ${manager.phone}`;
}
console.log(getManagerDetails(carStore));

// Create a function Named 'getAmountOfCars' that gets
// input of 'carStore' and returns how many cars it has in the inventory
function getAmountOfCars(carStore) {
  return carStore.cars.length;
}

console.log(getAmountOfCars(carStore));

// Create a function named 'getMostPayed' that gets input of 'carStore'
// and returns the object of the worker that get payed the most

function getMostPayed(carStore) {
  let workers = carStore.staff.workers;
  return workers.reduce((accMaxWorder, currWorker) =>
    currWorker.salary > accMaxWorder.salary ? currWorker : accMaxWorder
  );
}

console.log(getMostPayed(carStore));

// Create a function named 'getMostExpensiveCar' that gets input of 'carStore'
// and returns a string that contains the name of the most expansive car and its price
// e.g: 'Toyota 9000$'
function getMostExpensiveCar(carStore) {
  let cars = carStore.cars;
  let normelizePrice = (str) => +str.slice(0, -1); // remove last char and return as number

  let mostExpensive = cars.reduce((acc, curr) =>
    normelizePrice(curr.price) > normelizePrice(acc.price) ? curr : acc
  );
  return `${mostExpensive.type} ${mostExpensive.price}`;
}

console.log(`most expensive car: ${getMostExpensiveCar(carStore)}`);

// Create a function named 'getAmountOfHondas' that gets input of 'cars' array
// and return the amount of cars named honda.
// ** tip: you can use reduce array method **
function getAmountOfHondas(cars) {
  return cars.filter((car) => car.type === "Honda").length;
}

console.log("amount of Hondas: " + getAmountOfHondas(carStore.cars));

// Create a function named 'getTotalWorth' that gets input of 'cars' array
// and returns the total sum of money all the cars in the store are worth
function getTotalWorth(cars) {
  let normelizePrice = (str) => +str.slice(0, -1); // remove last char and return as number
  let sum = cars.reduce((acc, curr) => acc + normelizePrice(curr.price), 0);
  return sum;
}

console.log(`total cars prices: ${getTotalWorth(carStore.cars)}`);
