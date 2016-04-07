$Dojo - Custom Javascript Library
by Mollie Knute

A simple custom library in Javascript, created for educational purposes at CodingDojo

This library is based off basic Javascript (no jQuery needed!)

Sample syntax:
$Dojo(IDselector).action(parameters)

Built-in actions:

.yodel(quote)
  Console-logs the parameter, with four exclaimation marks after it.
  Example:
    $Dojo().yodel("Hello")
  Outputs to the console as:
    Hello!!!!


.yell(quote)
  Pops up an alert with the quote.
  Example:
    $Dojo().yell("Hello")
  Alerts as:
    Hello


.clicking(function)
  Performs the function upon clicking the HTML object with the ID specified in IDselector
  Example:
    $Dojo('blueButton').clicking(function() { console.log("You clicked the blue button!") })
  On click, outputs to the console as:
    You clicked the blue button!


.hovering(function1, function2)
  Performs a function upon hovering over the HTML obejct with the ID specified in IDselector
  Example:
    $Dojo('blueButton).hovering(function() { console.log("You are hovering over the blue button!") }, function() { console.log("You are away from the blue button!") });
  On hover, outputs to the console as:
    You are hovering over the blue button!
  When leaving the hover, outputs to the console as:
    You are away from the blue button!


