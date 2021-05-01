import {createClient} from 'contentful'
import { FaCommentsDollar } from 'react-icons/fa'
import Main from '../components/Main'


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


  const initialArticle = {sys: {createdAt: ''}, fields: {title: '', authorName: '', method: '', featuredImage: {fields: {file: {url: ''}}}}}
  const initialRA = [initialArticle]

  return (
    <Main isHomePage={true} articles={articles} article={initialArticle} asideTitle={'Top Authors'} recentlyArticles={initialRA} />
  )
}
