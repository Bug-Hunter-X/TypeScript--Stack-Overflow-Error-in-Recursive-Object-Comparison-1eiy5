function compareObjects(obj1: any, obj2: any): boolean {
  // Check if the objects are null or undefined
  if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
    return obj1 === obj2;
  }

  // Check if the objects have different types
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Check if the objects are arrays
  if (Array.isArray(obj1)) {
    if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!compareObjects(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }

  // Check if the objects are objects
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (!compareObjects(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }

  // Check if the objects are primitives
  return obj1 === obj2; 
}