import Hero from 'components/Hero'
import FeatureSection from 'components/FeatureSection'
import MorePosts from 'components/MorePosts'
import Container from 'components/Container'
import CustomCarousel from 'components/CustomCarousel'
import { getMorePosts } from '../lib/api'

export default function Home({ morePosts: { edges }}) {

    return (
        <div>
            <Hero/>
            
            <Container>
                {edges.length > 0 && <MorePosts posts={edges} />}
            </Container>
            <FeatureSection/>
            <CustomCarousel/>
        </div>
    )
}

export async function getStaticProps() {
    const morePosts = await getMorePosts();
    return {
        props: {
            morePosts
        }
    };
}