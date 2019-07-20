import operate from './operate'

function calculate ({ total, next, operation, isShowingResult }, buttonName) {
  switch (buttonName) {
    case 'AC':
      total = '0'
      next = '0'
      operation = ''
      isShowingResult = false
      break
    case '=':
      isShowingResult = true
      total = operation ? operate(total, next, operation) : next
      next = total
      operation = ''
      break
    case '+/-':
      isShowingResult = true
      total = invertValue(total)
      next = total
      operation = ''
      break
    case '➗':
    case '❌':
    case '➖':
    case '➕':
    case '%':
      isShowingResult = true
      total = operation ? operate(total, next, operation) : next
      next = total
      if (total === 'Error') {
        total = '0'
        operation = ''
      } else {
        operation = buttonName
      }
      break
    default:
      next = isShowingResult ? buttonName : concatStringNumbers(next, buttonName)
      isShowingResult = false
      break
  }
  return { total, next, operation, isShowingResult }
}

function concatStringNumbers (base, added) {
  const elements = (base + added).split('')
  if (added === '.' && base.split('').includes(added)) {
    return base
  }
  if (elements[0] === '0' && elements.length > 1) {
    elements.shift()
  }
  return elements.join('')
}

function invertValue (value) {
  const digits = value.split('')
  if (digits[0] === '-') {
    digits.shift()
  } else {
    digits.unshift('-')
  }
  return digits.join('')
}

export default calculate
