function cleanSet(set, startString) {
  // Use Array.from to create an array from the set and filter the values
  return Array.from(set)
    .filter((value) => value.startsWith(startString)) // Filter values that start with startString
    .map((value) => value.slice(startString.length)) // Remove the startString from the beginning
    .join('-'); // Join the results with a hyphen
}

export default cleanSet;
