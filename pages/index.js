import Head from 'next/head'
import ArticleCard from '../components/ArticleCard'
import {createClient} from 'contentful'
import authors from "../data/authors"
import UUCard from '../components/UserUpdateCard'


export const getStaticProps = async () => {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
    
  const res = await client.getEntries({content_type: 'bluecarbonArticleModel'})
  return {
    props: {
      articles: res.items,
    },
    revalidate: 1,
  }
}

export default function Home({articles}) {

  return (
    <div className="container mx-auto px-4 ">
      <section className="comunity-section my-4 py-6 px-6 flex overflow-x-auto shadow-inner">
        {
            authors.map(author => {
                return <UUCard key={author.id} {...author} />
            })
        }
      </section>
      <Head>
        <meta charset="UTF-8" />
        <title>Blue Carbon</title>
      </Head>
      <div className="p-8">
        {
          articles.map((article, index) => {
            
            return <ArticleCard key={index} article={article} />
          })
        }
      </div>
    </div>
  )
}
