import React from 'react'

import Fragment from './Fragment'
import Footer from './Footer';

import data from "../../data.json";

export default function Story() {
    return (
        <div className='border-2 border-green-500'>
            <h2 className='text-center text-3xl'>{data.muralla.title}</h2>
            {data.muralla.story.map((fragment, index) => (
                <Fragment img={fragment.img} text={fragment.text} positionText={fragment.textPosition} key={index} />
            ))}

            <Footer />
        </div>
    )
}
