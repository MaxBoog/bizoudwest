import Hero from 'components/Hero'
import FeatureSection from 'components/FeatureSection'
import MorePosts from 'components/MorePosts'
import Container from 'components/Container'
import CustomCarousel from 'components/CustomCarousel'
import ScrollToTopButton from 'components/ScrollToTopButton'
import { getMorePosts } from '../lib/api'
import Testimonials from 'components/Testimonials'

export default function Home({ morePosts: { edges }}) {

    return (
        <div>
            <Hero/>
            <FeatureSection/>
            <Container>
                {edges.length > 0 && <MorePosts posts={edges} />}
            </Container>
            <CustomCarousel/>
            <Testimonials/>
            <ScrollToTopButton/>
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