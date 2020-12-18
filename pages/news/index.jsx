import styled from '@emotion/styled'
import Card from 'components/Card'
import Button from 'components/Button'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'components/Container'
import { getAllPosts } from '../../lib/api'
import FormattedDate from 'components/FormattedDate'

const News = ({ allPosts: { edges } }) => {

    return (
        <NewsStyled>
            {/* Container */}
            <Container>
                <div className="px-4">
                    <h1 className="pt-40 md:pt-64 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Nieuwsoverzicht</h1>
                    <hr/>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {edges.map(({ node }) => (
                            // Column
                            <div className="lg:flex xs:w-full  my-5 lg:my-10 px-4 lg:px-10 lg:w-1/2">
                                {/* Article */}
                                <article className="flex-grow-0 lg:flex-grow overflow-hidden shadow-lg hover:shadow-2xl transition ease-in-out duration-200" key={node.databaseId}>
                                    {/* Image */}
                                    <Link as={`/news/${node.slug}`} href={`/news/${node.slug}`}>
                                        <a>
                                            <Image layout="responsive" objectFit="cover" width={3} height={2} loading="lazy" className="h-auto w-full" src={node.previewImage.previewImage.mediaItemUrl} alt={node.titles.titleNl}/>
                                        </a>
                                    </Link>

                                    {/* Title */}
                                    <header className="leading-tight p-5 md:p-7">
                                        <h1 className="text-3xl title">
                                            <Link as={`/news/${node.slug}`} href={`/news/${node.slug}`}>
                                                <a className="no-underline hover:underline text-black">
                                                    {node.titles.titleNl}
                                                </a>
                                            </Link>
                                        </h1>
                                    </header>
                                    {/* Preview Text */}
                                    <div className="p-5 md:p-7">
                                        <p className="text-xl md:text-2xl text-gray-700">
                                            {node.previewTexts.previewTextNl}
                                            <p className=" text-blue-700 mt-3">
                                                <Link as={`/news/${node.slug}`} href={`/news/${node.slug}`}>
                                                    <a>
                                                        Lees meer...
                                                    </a>
                                                </Link>
                                            </p>
                                        </p>
                                    </div>
                                    <div className="px-5 md:px-7 mb-5">
                                        {/* Date */}
                                        <p className="text-gray-500 text-sm md:text-lg">
                                            <FormattedDate dateString={node.date}/>
                                        </p>
                                    </div>
                                    <p className="white">
                                        -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- 
                                    
                                    </p>
                                    
                                        {/* <Link href={`/news/${node.slug}`}>
                                            <Button className="mt-auto btn btn-primary hover:bg-pink-500 text-base text-white py-5 px-6 m-5 md:m-7">Lees meer...</Button>
                                        </Link>
                                    */}
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className="inline-flex">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Prev
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Next
                    </button>
                </div> */}
            </Container>
        </NewsStyled>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
        props: {
            allPosts
        },
        revalidate: 1,
    };
}

export default News

const NewsStyled = styled.div`
    .white {
        color: white;
    }

`