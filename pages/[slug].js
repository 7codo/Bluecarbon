import {createClient} from 'contentful'
import Head from 'next/head'
import Main from '../components/Main';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {

  const res = await client.getEntries({content_type: 'bluecarbonArticleModel'})

  const paths = res.items.map(item => ({params: {slug: item.fields.slug}}))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({params}) => {

  const res = await client.getEntries({content_type: 'bluecarbonArticleModel'})
  const item = await res.items.filter(item => item.fields.slug === params.slug)
  
  return {
    props: {
      article: item[0],
      articles: res.items
    },
    revalidate: 1,
  }
}


function Article({article, articles}) {
  
  const initialArticles = {sys: {createdAt: ''}, fields: {title: '', authorName: '', method: '', featuredImage: {fields: {file: {url: ''}}}}}

  console.log('articles', articles);

  // const arr = new Array();
  // const latest = articles.map(article => {
  //   const updateDate = new Date(article.sys.updatedAt);
  //   console.log(typeof updateDate);
  //   arr.push(updateDate)
  //   return arr;
  // })

  // const descendingArr = latest[0].sort((a, b) => a > b);
  // console.log()




  return (
        <>
        <Head>
          <title>{article.fields.title}</title>
        </Head>
        
        <Main isHomePage={false} recentlyArticles={articles} articles={initialArticles} article={article} asideTitle={'Recently Articles'} />
        
        </>
    )
}

export default Article

/**
 * 
 * 
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {

  const res = await client.getEntries({content_type: 'recipe'})
  const paths = res.items.map(item => {
    return {params: {slug: item.fields.slug}}
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const {items} = await client.getEntries({content_type: 'recipe', 'fields.slug': params.slug});
  //Wait for a while
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
 * 
 * 
 */