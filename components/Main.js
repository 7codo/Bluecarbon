import authors from "../data/authors"
import UUCard from './UserUpdateCard'
import Head from 'next/head'
import ArticleCard from './ArticleCard'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RecentlyArticlesCard from "./RecentlyArticlesCard"


function Main({asideTitle, isHomePage, articles,article}) {
    const {title, authorName, method, featuredImage} = article.fields;
    
    const date = () => {
        const isoStringDate = new Date(article.sys.createdAt);
        return `${isoStringDate.getDate()}/${isoStringDate.getMonth()}/${isoStringDate.getFullYear()}`
    }

    return (
        <div className="container mx-auto px-4 lg:flex my-5 justify-center">
      
      <div className="xl:mr-10 lg:mr-5">
        {
            isHomePage? articles.map((article, index) => {
                return <ArticleCard key={index} article={article} />
             }):<article className="container mx-auto px-8 my-4 lg:max-w-6xl xl:max-w-4xl">
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
                         {authorName.replace('_', ' ').toUpperCase()}
                       </h3>
                       <p>{date()}</p>
                     </div>
                 </div>
             </div>
           </article>
           
        }
      </div>

      <aside className="comunity-section lg:flex lg:flex-col hidden">
        <h4 className="text-xl font-bold pl-2 pb-5">{asideTitle}</h4>
        {
            isHomePage? authors.map(author => {
                return <UUCard key={author.id} {...author} />
            }):<RecentlyArticlesCard />
        }
      </aside>
    </div>
    )
}

export default Main
