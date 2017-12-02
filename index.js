// Write your solution in this file!

// defines a `driver` driver
const driver = {};

// returns a driver with the orignal key value pairs and the new key value pair
// it does not modify the original driver, but returns a clone with the new data
// Note: Uses the ES2015 spread operator; ...<obj name>
function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}
// updates `driver` with the given `key` and `value` (it is destructive)
// and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

// deletes `key` from a clone of driver and returns the new driver
// does not modify the original driver (it is non-destructive)
function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver};
  delete newDriver[key];
  return newDriver;
}

// returns driver without the delete key/value pair
// modifies the original driver
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
