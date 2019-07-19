import operate from './operate'

const OPERATIONS_LIST = ['➗', '❌', '➖', '➕', '%', '+/-']

function calculate (calculator, buttonName) {
  const { total, next, operation } = calculator
  if (OPERATIONS_LIST.includes(buttonName)) {
    calculator.total = operate(total, next, buttonName)
  }
  return calculator
}

export default calculate
