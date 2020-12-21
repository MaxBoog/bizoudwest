import styled from '@emotion/styled'
import Card from 'components/Card'
import Button from 'components/Button'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'components/Container'
import { getAllPosts } from '../../lib/api'
import FormattedDate from 'components/FormattedDate'
import Dot from 'components/Dot'
import Separator from 'components/Separator'

const News = ({ allPosts: { edges } }) => {

    return (
        <NewsStyled>
            {/* Container */}
            <Container>
                <div className="px-6 md:px-4">
                    <div className="text-center pt-40 md:pt-64">
                        <Image priority="true" src="/images/news.svg" layout="fixed" width={200} height={200}/>
                    </div>
                    <h1 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-center">Nieuwsoverzicht</h1>
                    <Separator/>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {edges.map(({ node }) => (
                            // Column
                            <div className="lg:flex xs:w-full  my-5 lg:my-10 px-4 lg:px-10 lg:w-1/2"  key={node.databaseId}>
                                {/* Article */}
                                <article className="flex-grow-0 lg:flex-grow overflow-hidden shadow-lg hover:shadow-2xl transition ease-in-out duration-200">
                                    {/* Image */}
                                    <Link as={`/news/${node.slug}`} href={`/news/${node.slug}`}>
                                        <a>
                                            <Image layout="responsive" objectFit="cover" width={3} height={2} loading="lazy" className="h-auto w-full" src={node.previewImage.previewImage.mediaItemUrl} alt={node.titles.titleNl}/>
                                        </a>
                                    </Link>

                                    {/* Title */}
                                    <header className="leading-tight px-10 py-5">
                                        <h1 className="text-3xl title">
                                            <Link as={`/news/${node.slug}`} href={`/news/${node.slug}`}>
                                                <a className="no-underline hover:underline text-black">
                                                    {node.titles.titleNl} <Dot/>
                                                </a>
                                            </Link>
                                        </h1>
                                    </header>
                                    {/* Preview Text */}
                                    <div className="px-10 py-5">
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
                                    <div className="px-10 pt-5">
                                        {/* Date */}
                                        <p className="text-gray-500 text-sm md:text-lg">
                                            <FormattedDate dateString={node.date}/>
                                        </p>
                                    </div>
                                    <p className="white">
                                        -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- -------------- 
                                    
                                    </p>
                                    
                                </article>
                            </div>
                        ))}
                    </div>
                        <Separator/>
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