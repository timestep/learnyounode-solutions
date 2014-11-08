(function () {
  var CLI_ARGUMENTS = process.argv.slice(2);

  var sumOfArguments = 0;
  for (var i = CLI_ARGUMENTS.length - 1; i >= 0; i--) {
    sumOfArguments += Number(CLI_ARGUMENTS[i]);
  };

  console.log(sumOfArguments);

})();