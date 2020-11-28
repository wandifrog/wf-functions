

const asd = 123

console.log(asd)

/**
 * @example <caption>Example usage of this function.</caption>
 * capitalizeEveryWord('batu ampar condet')
 * // return 'Batu Ampar Condet'
 * @param {string} sentence
 * @returns {string}
 */
export const capitalizeEveryWord = (sentence) => {
  const sanitizeSentence = sentence.replace(/^\s+|-|\s+$/g, '')
  const sanitizeSentence2 = sanitizeSentence.replace(/[ \t]{2,}/g, ' ')
  const words = sanitizeSentence2.split(' ')
  const capitalizeWords = []

  // words.forEach(word => { // Performance issue
  //   const capitalLetters = word.charAt(0).toUpperCase() + word.slice(1)
  //   capitalizeWords.push(capitalLetters)
  // })

  for (let index = 0; index < words.length; index++) {
      const capitalLetters = words[index].charAt(0).toUpperCase() + words[index].slice(1)
      capitalizeWords.push(capitalLetters)
  }

  const result = capitalizeWords.join(' ')
  return result
}

/**
* @example <caption>Example usage of this function.</caption>
* sanitizePhoneNumber('123 12321 - 1231 + 12312')
* // return '12312321123112312'
* @param {string} phoneNumber
* @returns {string}
*/
export const sanitizePhoneNumber = (phoneNumber) => {
  if (typeof (phoneNumber) !== 'number' && typeof (phoneNumber) !== 'string') return false
  const phoneNumberString = phoneNumber.toString()
  const result = phoneNumberString.replace(/[^0-9]/g, '')
  // const result = phoneNumberString.replace(/-|\s|\+/g, '')
  return result
}

/**
* @example <caption>Example usage of this function.</caption>
* onlyWordNumberAndSpaces('aasd dsa :123ds!@#')
* // return 'aasd dsa 123ds'
* @param {string} string
* @returns {string}
*/
export const onlyWordNumberAndSpaces = (string) => {
  const result = string.replace(/[^\d\w\s]/g, '')
  return result
}

/**
* @example <caption>Example usage of this function.</caption>
* shallowEqualObject({asd: 1}, {asd: 1})
* // return true
* shallowEqualObject({asd: 1}, {asd: 2})
* // return false
* @param {object} object
* @param {object} comparisonObject
* @returns {boolean}
*/
export const shallowEqualObject = (object, comparisonObject) => {
  const result = JSON.stringify(object) === JSON.stringify(comparisonObject)
  return result
}
