import React from 'react'
import {mount} from 'marketing/MarketingContainer'
import MarketingApp from './components/MarketingApp'

export default () => {
    return (
        <div>
            <h1>HELLO CONTAINER</h1>
            <hr/>
            <MarketingApp/>
        </div>
    )
}