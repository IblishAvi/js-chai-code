
function formatNumber(num) {
    return num.toFixed(2);
  }
  
  console.log(formatNumber(2));
  
  function updateBrand(obj) {
    // Mutating the object is visible outside the function
    obj.brand = "Toyota";
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    obj = null;
  }
  
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(car.brand); // Honda
  
  // Pass object reference to the function
  updateBrand(car);
  
  // updateBrand mutates car
  console.log(car.brand); // Toyota
  
  // Constructor
//   const multiply = new Function("x", "y", "return x * y");
  
  // Declaration
  function multiply(x, y) {
    return x * y;
  } // No need for semicolon here
  
  // Expression; the function is anonymous but assigned to a variable
  const multiply2 = function (x, y) {
    return x * y;
  };
  // Expression; the function has its own name
  const multiply3 = function funcName(x, y) {
    return x * y;
  };
  
  // Arrow function
  const multiply4 = (x, y) => x * y;
  
  // Method
  const obj = {
    multiply(x, y) {
      return x * y;
    },
  };
  
