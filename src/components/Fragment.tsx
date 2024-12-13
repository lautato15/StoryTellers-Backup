import React from 'react'
interface FragmentsProps {
    img: string;
    text: string;
    positionText: string;
}
export default function Fragment({ img, text, positionText }: FragmentsProps): JSX.Element {
    return (
        <section className='w-full h-screen relative my-4'>
            <img src={img} alt="" className='w-full h-full object-cover' />
            <p className={`absolute bg-gray-500  px-2 ${positionText === 'top' ? 'top-4' : 'bottom-4'
                }`}  >{text}</p>
        </section >
    )
}
