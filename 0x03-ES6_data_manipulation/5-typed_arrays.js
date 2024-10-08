function createInt8TypedArray(length, position, value) {
  // Step 1: Create an ArrayBuffer of the given length
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  // Step 2: Check if the position is valid, otherwise throw an error
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Step 3: Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Step 4: Return the DataView to allow for reading the buffer
  return view;
}

export default createInt8TypedArray;
