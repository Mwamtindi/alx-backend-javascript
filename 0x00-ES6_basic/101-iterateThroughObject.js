export default function iterateThroughObject(reportWithIterator) {
  // Convert iterator to an array and join the values with " | "
  return [...reportWithIterator].join(' | ');
}
