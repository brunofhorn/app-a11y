import axe from '@axe-core/react'
import React from 'react'
import ReactDOM from 'react-dom'

export async function axeAccessibilityReport(){
    if(process.env.NODE_ENV === "development"){
        axe(React, ReactDOM, 1000)
    }
}