import Image from 'next/image'
import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head'

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

  const {items} = await client.getEntries({content_type: 'bluecarbonArticleModel', 'fields.slug': params.slug});

  return {
    props: {
      article: items[0]
    },
    revalidate: 1,
  }
}


function Article({article}) {
  
  
  const {title, authorName, method, featuredImage} = article.fields;


  const date = () => {
    const isoStringDate = new Date(article.sys.createdAt);
    return `${isoStringDate.getDate()}/${isoStringDate.getMonth()}/${isoStringDate.getFullYear()}`
  }

  return (
        <>
        <Head>
          <title>{title}</title>
        </Head>
        <article className="container mx-auto px-8 my-4 lg:max-w-6xl">
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