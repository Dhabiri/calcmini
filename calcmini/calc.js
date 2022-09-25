function mycalc(numa, numb, action) {
    let result = 0;
    let actionStatement;
    let hasError = false;
  
    if (isNaN(numa) || isNaN(numb)) {
      return "Please input numbers only";
    }
  
    switch (action) {
      case "A":
        result = numa + numb;
        actionStatement = "The sum of ";
        break;
      case "S":
        result = numa - numb;
        actionStatement = "The difference between ";
        break;
      case "M":
        result = numa * numb;
        actionStatement = "The product of ";
        break;
      case "D":
        result = numa / numb;
        actionStatement = "The quotient of ";
        break;
      case "Mo":
        result = numa % numb;
        actionStatement = "The modulus of ";
        break;
      default:
        result = "Actions should be one of A, S, M, D, Mo";
        hasError = true;
    }
    return hasError
      ? result
      : actionStatement +
          " " +
          numa +
          " " +
          "and" +
          " " +
          numb +
          " " +
          "is" +
          " " +
          result;
  }
  
  let firstVal = parseInt(window.prompt("Input first number"));
  let secondVal = parseInt(window.prompt("Input second number"));
  let actionToPerform = window.prompt(
    "Please specify action on numbers where 'A' is Addition, 'S' is Subtraction, 'M' is Multiplication, 'D' is Division and 'Mo' is Modulus "
  );
  document.write(mycalc(firstVal, secondVal, actionToPerform));
  