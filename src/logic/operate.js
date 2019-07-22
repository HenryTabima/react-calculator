import Big from 'big-js'

function operate (numberOne, numberTwo, operation) {
  const selectedOperation = possibleOperations[operation]
  if (selectedOperation) return selectedOperation(numberOne, numberTwo)
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
  if (numberTwo === '0') return 'Error'
  return Big(numberOne).div(numberTwo).toString()
}

function multiply (numberOne, numberTwo) {
  return Big(numberOne).times(numberTwo).toString()
}

function substract (numberOne, numberTwo) {
  return Big(numberOne).minus(numberTwo).toString()
}

function add (numberOne, numberTwo) {
  return Big(numberOne).plus(numberTwo).toString()
}

function percent (numberOne, numberTwo) {
  return Big(numberOne).div(100).times(numberTwo).toString()
}

function invert (numberOne, numberTwo) {
  return Big(numberOne).times(-1).toString()
}

export default operate
