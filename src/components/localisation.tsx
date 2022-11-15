import React from 'react'
import Link from 'next/link'

export const LocalisationComponent = () =>{
    return (
        <div className="meta-line">
            <span className=" ml-2"><Link href="/en" locale="en">en</Link></span>
            <span className=" ml-2"><Link href="/nl" locale="nl">nl</Link></span>
            <span className=" ml-2"><Link href="/bg" locale="bg">bg</Link></span>
        </div>
    )
}