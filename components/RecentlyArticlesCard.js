import React from 'react'
import Image from 'next/image'
import {authorCapitalise} from '../data/Feauters'
import Link from 'next/link'

function RecentlyArticlesCard({title, featuredImage, authorName, slug}) {


    const capitaliseName = authorCapitalise(authorName)

    return (
        <div className="flex shadow-md">
            <Image 
                src={`https:${featuredImage}`}
                height={170}
                width={170}
                />
            <div className="px-4 py-4 flex flex-col justify-between max-w-xs">

                <h4 className="text-xl whitespace-wrap font-semibold mb-2" >
                    <Link href={`/${slug}`}>
                        <a>{title}</a>
                    </Link>
                </h4>
                <div className="flex items-center">
                    <Image 
                        className="rounded-full"
                        src={`/${authorName.toLowerCase()}.jpg`}
                        height={60}
                        width={60}
                        />
                    <span className="font-medium mx-2 text-base text-gray-500">{capitaliseName}</span>
                </div>
            </div>
        </div>
    )
}

export default RecentlyArticlesCard
