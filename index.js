/**
 * Silly little `debug()` extension that does performance measuring,
 * sort of like `console.time()`/`console.timeEnd()` with a `%t` formatter.
 *
 * ```js
 * const time = require('debug-time')
 * const debug = require('debug')('foo')
 *
 * const startTime = time()
 * setTimeout(() => {
 *   debug('took %t milliseconds', startTime)
 * }, 1000)
 * ```
 */
const DEBUG = require('debug')

DEBUG.formatters.t = function t (v) {
  const diff = process.hrtime(v)
  return Math.round((diff[0] * 1e9 + diff[1]) * 1e-6)
}

module.exports = function time () {
  return process.hrtime()
}
