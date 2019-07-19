import Big from 'big-js'

function operate (numberOne, numberTwo, operation) {
  const selectedOperation = possibleOperations[operation]
  return selectedOperation(numberOne, numberTwo)
}

const possibleOperations = {
  '➗': divide,
  '❌': multiply,
  '➖': substract,
  '➕': add,
  '%': percent,
  '+/-': invert
}

function divide (numberOne, numberTwo) {
  return Big(numberOne).div(numberTwo)
}

function multiply (numberOne, numberTwo) {
  return Big(numberOne).times(numberTwo)
}

function substract (numberOne, numberTwo) {
  return Big(numberOne).minus(numberTwo)
}

function add (numberOne, numberTwo) {
  return Big(numberOne).plus(numberTwo)
}

function percent (numberOne, numberTwo) {
  return Big(numberOne).div(100).times(numberTwo)
}

function invert (numberOne, numberTwo) {
  return Big(numberOne).times(-1)
}

export default operate
