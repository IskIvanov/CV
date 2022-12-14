import React from 'react'
import Link from 'next/link'

export const TranslationComponent = () =>{
    return (
        <div className="meta-line">
            <span className=" ml-2 text-lg"><Link href="/en" locale="en"><span className="text-3xl cursor-pointer">🇬🇧</span></Link></span>
            <span className=" ml-2"><Link href="/nl" locale="nl"><span className="text-3xl cursor-pointer">🇳🇱</span></Link></span>
            <span className=" ml-2"><Link href="/bg" locale="bg"><span className="text-3xl cursor-pointer">🇧🇬</span></Link></span>
        </div>
    )
}