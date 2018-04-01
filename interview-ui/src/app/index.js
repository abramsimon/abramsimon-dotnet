import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App'

injectTapEventPlugin();

const root = document.createElement('div')
document.body.appendChild(root)

render(<App />, root)