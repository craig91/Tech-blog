import React from 'react'
import {render} from 'react-dom'

const Greeting = () => (
	<div> Hello world </div>
)

render(
  <Greeting/>,
  document.getElementById('app')
)