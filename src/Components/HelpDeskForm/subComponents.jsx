import React from 'react'

export function ErrorDisplay({errorMessage}) {
  return errorMessage ? <div>{errorMessage}</div> : null
}
