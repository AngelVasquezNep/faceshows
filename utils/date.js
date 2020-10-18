const format = (date, options = {}) => {
  const _options = {
    locale: 'es-Es',
    ...options
  }

  return new Intl.DateTimeFormat(_options.locale, _options).format(
    new Date(date)
  )
}

export default {
  format
}
