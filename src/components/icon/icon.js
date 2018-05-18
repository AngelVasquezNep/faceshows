import React from 'react'
import IconContainer from './iconContainer.jsx'

export function Play (props) {
  return (
    <IconContainer {...props} >
        <path d="M6 4l20 12-20 12z"></path>
    </IconContainer>
  )
}

export function Pause (props) {
  return (
    <IconContainer {...props} >
        <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>        
    </IconContainer>
  )
}

export function Stop (props) {
  return (
    <IconContainer {...props} >
        <path d="M4 4h24v24h-24z"></path>
    </IconContainer>
  )
}

export function VolumenIcon (props) {
  return (
    <IconContainer {...props} >
        <path d="M22.565 4.014c-0.188 0-0.371 0.021-0.555 0.035v1.74c4.291 0 7.77 4.571 7.77 10.211s-3.479 10.211-7.77 10.211v1.74c0.184 0.014 0.367 0.035 0.555 0.035 5.212 0 9.435-5.366 9.435-11.986s-4.223-11.986-9.435-11.986zM27.005 16c0-3.486-2.118-6.395-4.994-7.305v2.4c1.472 0.877 2.497 2.734 2.497 4.904s-1.025 4.027-2.497 4.904v2.4c2.876-0.908 4.994-3.817 4.994-7.303zM17.008 0c-0.553 0-1 0.447-1 1l-10.006 11h-5.002c-0.553 0-1 0.447-1 1v8c0 0.553 0.448 1 1 1h5.002l10.005 9c0 0.553 0.447 1 1 1s1.001-0.447 1.001-1v-30c0.001-0.553-0.446-1-1-1z"></path>
    </IconContainer>
  )
}


export function MuteIcon (props) {
  return (
    <IconContainer {...props} >
        <path d="M30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348 3.348 3.348z"></path>
        <path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
    </IconContainer>
  )
}


export function FullScreen (props) {
  return (
    <IconContainer {...props} >
      <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
      <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
      <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
      <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
    </IconContainer>
  )
}


export function FullScreenExit (props) {
  return (
    <IconContainer {...props} >
      <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
    </IconContainer>
  )
}
