'use strict'

/**
 * debugMode()
 */
const debugMode = () => {
  if (window.location.origin.indexOf('localhost') == -1) {
    console.log = function () {}
    console.info = function () {}
  } else {
    console.info('Dev Mode')
  }
}
