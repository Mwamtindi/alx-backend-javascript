// 10-update_uniq_items.js
function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map entries
  for (const [item, quantity] of map) {
    // Update quantity to 100 if it's currently 1
    if (quantity === 1) {
      map.set(item, 100);
    }
  }

  // Return the updated map (optional, since the map is updated in place)
  return map;
}

export default updateUniqueItems;
