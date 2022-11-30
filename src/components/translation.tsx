
import React from 'react'
import Link from 'next/link'

export const TranslationComponent = () => {
	return (
		<div className="meta-line mb-0">
			<span className=" ml-2 text-lg no-underline"><Link href="/en" style={{ textDecoration: 'none' }} locale="en"><span className="text-3xl cursor-pointer no-underline">🇬🇧</span></Link></span>
			<span className=" ml-2"><Link href="/nl" style={{ textDecoration: 'none' }} locale="nl"><span className="text-3xl cursor-pointer">🇳🇱</span></Link></span>
			<span className=" ml-2"><Link href="/bg" style={{ textDecoration: 'none' }} locale="bg"><span className="text-3xl cursor-pointer">🇧🇬</span></Link></span>
		</div>
	)
}