import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ErrorPage from 'next/error'
import styled from '@emotion/styled'
import Container from 'components/Container'
import Button from 'components/Button'
import PostTitle from 'components/PostTitle'
import PostBody from 'components/PostBody'
import FormattedDate from 'components/FormattedDate'
import Separator from 'components/Separator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import ScrollToTopButton from 'components/ScrollToTopButton'
import ProgressBar from 'react-progressbar-on-scroll'

// data
import { getAllPostsWithSlug, getPost } from '../../lib/api'

export default function Post({ postData }) {

    const router = useRouter()

    if (!router.isFallBack && !postData?.slug) {
        // needs better implementation
        return (
            <>
                <ErrorPage statusCode={404}/>
                
            </>
        )
    }

    return (
            <PostStyled>
                {router.isFallback ? (
                    <Container>
                        <PostTitle>Loading...</PostTitle>
                    </Container>
                ) : (
                    <Container>
                        <ProgressBar
                            color="#e7335d"
                            
                        />
                        <article className="pt-40 md:pt-64" key={postData.databaseId}>
                                <div className="sm:mx-0">
                                    <Image layout="responsive" objectFit="cover" width={3} height={2} src={postData.preview_image.previewImage.mediaItemUrl} alt={postData.titel.titelNl}/>
                                </div>
                                <PostTitle>{postData.titel.titelNl}</PostTitle>
                                <h3 className="text-center text-gray-600 text-base md:text-lg">
                                    <FormattedDate dateString={postData.date}/> 
                                </h3>
                                <div className="text-center md:text-left">
                                    <Link href="/news">
                                        <Button className="text-indigo-800 mt-4 font-bold"><FontAwesomeIcon icon={faChevronCircleLeft}/> Terug</Button>
                                    </Link>
                                </div>
                                <Separator/>
                            <PostBody content={postData.contents.contentNl}></PostBody>
                            <Separator/>
                            <div className="text-center md:text-left">
                                    <Link href="/news">
                                        <Button className="text-indigo-800 mt-4 font-bold"><FontAwesomeIcon icon={faChevronCircleLeft}/> Terug</Button>
                                    </Link>
                                </div>
                        </article>
                        <ScrollToTopButton/>
                    </Container>
                )}
            </PostStyled>
       
    )
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();

    return {
        paths: allPosts.edges.map(({ node }) => `/news/${node.slug}`) || [], fallback: true
    }
}

export async function getStaticProps({ params }) {
    const data = await getPost(params.slug)

    return {
        props: {
            postData: data.post
        }
    }
}

const PostStyled = styled.div`
    ul {
        list-style: square;
        padding-left: 2rem;
    }
    ol {
        list-style: decimal;
        padding-left: 2.6rem;
    }
`