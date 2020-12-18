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
                        <article className="pt-40 md:pt-64">
                                <div className="sm:mx-0">
                                    <Image layout="responsive" objectFit="cover" width={3} height={2} src={postData.previewImage.previewImage.mediaItemUrl} alt={postData.titles.titleNl}/>
                                </div>
                                <PostTitle>{postData.titles.titleNl}</PostTitle>
                                <h3 className="text-center text-gray-600 text-base md:text-lg">
                                    <FormattedDate dateString={postData.date}/> 
                                </h3>
                                <div className="text-center md:text-left">
                                    <Link href="/news">
                                        <Button className="btn text-blue-800 mt-4 "><FontAwesomeIcon icon={faChevronCircleLeft}/> Terug</Button>
                                    </Link>
                                </div>
                                <Separator/>
                            <PostBody content={postData.contents.contentNl}></PostBody>
                            <Separator/>
                            <div className="text-center md:text-left">
                                    <Link href="/news">
                                        <Button className="btn text-blue-800 mt-4 "><FontAwesomeIcon icon={faChevronCircleLeft}/> Terug</Button>
                                    </Link>
                                </div>
                        </article>
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