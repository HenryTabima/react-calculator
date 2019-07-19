import operate from './operate'

const OPERATIONS_LIST = ['➗', '❌', '➖', '➕', '%', '+/-']

function calculate ({ total, next, operation }, buttonName) {
  if (OPERATIONS_LIST.includes(buttonName)) {
    total = operate(total, next, buttonName)
  }
  return { total, next, operation }
}

export default calculate
