import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDom.render(
        <App/>,
        el
    )
}

if (process.env.NODE_ENV === 'development') {
    const container = document.querySelector('#marketing_root');

    if (container) {
        mount(container);
    }
}

export { mount };