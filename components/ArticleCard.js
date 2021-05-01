import Image from 'next/image'
import Link from 'next/link'
import {IoIosShareAlt} from 'react-icons/io'
import {authorCapitalise} from '../data/Feauters'
import {useRouter} from 'next/router'
import { useGlobalContext } from './State'

function ArticleCard({article}) {

  const router = useRouter();
  const {openProfileOverview} = useGlobalContext()

  const {title, slug, featuredImage, method, authorName, mainIdea} = article.fields
  
  const capitaliseName = authorCapitalise(authorName)

  const date = () => {
    const isoStringDate = new Date(article.sys.createdAt);
    return `${isoStringDate.getDate()}/${isoStringDate.getMonth()}/${isoStringDate.getFullYear()}`
  }

  const shollowRouteProfile = () => {
    router.push('/', `/author/@${authorName}`, {shallow: true})
    openProfileOverview()
  }

//featuredImage.fields.file.details.image.height
  return (
        <article className="bg-white rounded-xl shadow-lg mx-auto mb-7 lg:grid lg:grid-cols-2 lg:max-w-screen-lg">
          <div className="bg-gray-900 thumbnail-img w-full">
          <img 
            className="w-full md:h-full"
            src={`https:${featuredImage.fields.file.url}`}
            // width={660}
            // height={528}
            // layout="responsive"
            alt={featuredImage.fields.title}
            /> 
          </div> 
          <div className="py-12 px-10">
            <h2 className="text-2xl font-bold text-gray-800">
              <Link href={`/${slug}`}>
                <a>
                {title}
                </a>
              </Link>
            </h2>
            <p className="my-5">{mainIdea}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center"> 
                <Image
                  onClick={shollowRouteProfile}
                  className="rounded-full cursor-pointer"
                  src={`/${authorName.toLowerCase()}.jpg`}
                  width={80}
                  height={80}
                />
                  <div className="ml-3 text-lg">
                    <h3 className="font-bold cursor-pointer" onClick={shollowRouteProfile}>
                        {capitaliseName}
                    </h3>
                    <p>{date()}</p>
                  </div>
              </div>
              <div className="bg-gray-200 rounded-full py-2 px-2 cursor-pointer">
                <IoIosShareAlt className="text-3xl text-gray-500 " />
              </div>
            </div>
          </div>
      </article>
    )
}

export default ArticleCard
