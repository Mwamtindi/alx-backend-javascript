function cleanSet(set, startString) {
  // Handle edge case where startString is empty
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  // Filter and map the set
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  // Return the result
  return result;
}

export default cleanSet;
