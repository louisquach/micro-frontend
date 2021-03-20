import React, {useRef, useEffect} from 'react'
import {mount} from 'marketing/MarketingContainer';

const MarketingApp = () => {
    const ref = useRef(null)
    useEffect(() => {mount(ref.current)})

    return <div ref={ref}></div>
}

export default MarketingApp;