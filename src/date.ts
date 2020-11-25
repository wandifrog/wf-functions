// const DAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
// const DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const MONTHS_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
// const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December']

// Only pure functions okay

// TODO: JSDocs
// TODAYYY ??? !!!
export const todayQuestionMark = (comparisonDate) => {
  const date = new Date()
  const xDate = new Date(comparisonDate)
  if (date.getFullYear() !== xDate.getFullYear()) return false
  if (date.getMonth() !== xDate.getMonth()) return false
  if (date.getDay() !== xDate.getDay()) return false
  return true
}

// TODO: JSDocs
export const parseNewDate = (_date = new Date(), format = false, lang = 'id') => {
  const DAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  const DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const MONTHS_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December']
  const date = new Date(_date)

  function ulala(str) {
    if (str === 'day') return eval(`DAYS_${lang.toUpperCase()}[date.getDay()]`)
    if (str === 'date') return date.getDate()
    if (str === 'month') return eval(`MONTHS_${lang.toUpperCase()}[date.getMonth()].slice(0, 3)`)
    if (str === 'fullMonth') return eval(`MONTHS_${lang.toUpperCase()}[date.getMonth()]`)
    if (str === 'year') return date.getFullYear()
    if (str === 'c') return ','
    if (str === 's') return ' '
  }
  const asd = format.split(' ').map(x => ulala(x))
  return asd.join('')
}

// const test = '2020-09-03T02:58:30+07:00'
// parseNewDate(test, 'day c s date s fullMonth s year', 'id')