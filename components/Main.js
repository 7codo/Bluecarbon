import authors from "../data/authors"
import UUCard from './UserUpdateCard'
import Head from 'next/head'
import ArticleCard from './ArticleCard'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RecentlyArticlesCard from "./RecentlyArticlesCard"
import { motion } from "framer-motion"
import {authorCapitalise} from '../data/Feauters'
import Link from "next/link"
import { useGlobalContext } from "./State"
import AuthorPO from './AuthorPO'

const articleCardVrnts = {
  from: {
      opacity: 0,
      x: '-100vh'

  },
  to: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'sring',
        ease: 'easeInOut'
      }
  }
}


const asideVrnts = {
  from: {
      opacity: 0,
      y: "100vh",
  },
  to: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.02
      }
  }
}

const articleBodyVrnts = {
  from: {
      opacity: 0,
  },
  to: {
      opacity: 1,
      transition: {
      }
  }
}


function Main({asideTitle, isHomePage, articles,article, recentlyArticles}) {
    const {title, authorName, method, featuredImage} = article.fields;
    const capitaliseName = authorCapitalise(authorName);
    const {isProfileOverview, openProfileOverview} = useGlobalContext()
    
    const date = () => {
        const isoStringDate = new Date(article.sys.createdAt);
        return `${isoStringDate.getDate()}/${isoStringDate.getMonth()}/${isoStringDate.getFullYear()}`
    }

    if (recentlyArticles.length > 4) {
      recentlyArticles = recentlyArticles.slice(0, 5)
    }

    return (
      <>
        {
          isProfileOverview && 
          <AuthorPO />
        }
       <div className="container mx-auto px-4 lg:flex my-5 justify-center">
      
      <div className="xl:mr-10 lg:mr-5">
        {
            isHomePage? articles.map((article, index) => {
                return <motion.div key={index} variants={articleCardVrnts} initial='from' animate='to'>
                  <ArticleCard key={index} article={article} />
                </motion.div>
             }):<motion.article variants={articleBodyVrnts} initial='from' animate='to' className="container mx-auto px-8 my-4 lg:max-w-6xl xl:max-w-4xl">
             <div className="head-info">
               <Image
                 src={`https:${featuredImage.fields.file.url}`}
                 
                 width={600}//will be ignored if layout responsive
                 height={500}
                 alt={featuredImage.fields.title}
               />
               <h2 className="text-4xl font-medium leading-tight my-4">{title}</h2>
             </div>
             <div className="body-info">
               <p className="my-4 ">
                 {documentToReactComponents(method)}
               </p>
             </div>
             <div className="footer-info border-t-2 border-gray-300 rounded-sm">
               <div className="flex items-center py-4"> 
                   <Image
                     className="rounded-full"
                     src={`/${authorName.toLowerCase()}.jpg`}
                     width={70}
                     height={70}
                     />
                     <div className="ml-3 text-lg">
                       <h3 className="font-bold spaci">
                         <Link href={`/author/@${authorName}`}><a>
                           {capitaliseName}
                         </a></Link>
                       </h3>
                       <p>{date()}</p>
                     </div>
                 </div>
             </div>
           </motion.article>
           
        }
      </div>

      <motion.aside variants={asideVrnts} initial="from" animate="to" className="comunity-section lg:flex lg:flex-col hidden">
        <h4 className="text-xl font-bold pl-2 pb-5">{asideTitle}</h4>
        {
            isHomePage? authors.map(author => {
                return <UUCard key={author.id} {...author} />
            }):(
              recentlyArticles.map(item => {
                const {featuredImage, slug, title, authorName} = item.fields;
                  return <RecentlyArticlesCard key={slug} featuredImage={featuredImage.fields.file.url} title={title} authorName={authorName} slug={slug} />
              })
            )
        }
      </motion.aside>
    </div>
    </>
    )
}

export default Main
