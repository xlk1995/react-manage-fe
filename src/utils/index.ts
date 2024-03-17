// 格式化金额

export function formatMoney(num: number | string) {
  const a = parseFloat(num.toString())
  return a.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })
}

// 格式化数字

export function formatNum(num: number | string) {
  const a = num.toString()
  if (a.indexOf('.') > -1) {
    return a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
  return a.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

export function toLocalDate(data?: Date, rule?: string) {
  let curDate = new Date()
  if (data) curDate = data
  if (rule === 'yyyy-MM-dd') {
    return curDate.toLocaleDateString()
  }
  if (rule === 'HH:mm:sss') {
    return curDate.toLocaleTimeString()
  }
  return curDate.toLocaleString()
}

export function formatDate(date?: Date, rule?: string) {
  let curDate = new Date()
  if (date) curDate = date
  let fmt = rule || 'yyyy-MM-dd HH:mm:ss'
  fmt = fmt.replace(
    /(y+)/,
    curDate.getFullYear().toString()
  )
  type OType = {
    [key: string]: number
  }
  const O: OType = {
    'M+': curDate.getMonth() + 1,
    'd+': curDate.getDate(),
    'H+': curDate.getHours(),
    'm+': curDate.getMinutes(),
    's+': curDate.getSeconds()
  }
  for (const k in O) {
    const val = O[k].toString()
    // fmt.replace(
    //   new RegExp(`(${k})`),
    //   O[k] > 9 ? O[k].toString() : '0' + O[k]
    // )
    fmt = fmt.replace(
      new RegExp(`(${k})`),
      ('00' + val).substring(2)
    )
  }
  return fmt
}
