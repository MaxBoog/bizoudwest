import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import styled from '@emotion/styled'
import Container from 'components/Container'
import Separator from 'components/Separator'
import LeafletMap from 'components/LeafletMap'

import { getAllWinkelsWithSlug, getWinkel } from '../../lib/api'

export default function Post({ winkelData }) {

    const router = useRouter()

    if (!router.isFallBack && !winkelData?.slug) {
        // needs better implementation
        return (
            <>
                <ErrorPage statusCode={404}/>
                
            </>
        )
    }

    return (
            <WinkelStyled>
                {router.isFallback ? (
                    <Container>
                        <PostTitle>Loading...</PostTitle>
                    </Container>
                ) : (
                    <Container>
                        <div className="grid grid-cols-1 max-w-screen-lg mx-auto">
                            <h1 className=" mt-64">{winkelData.winkelnaam.winkelnaam}</h1>
                            <LeafletMap latitude={winkelData.winkel_locatie.winkelLocatie.latitude} longitude={winkelData.winkel_locatie.winkelLocatie.longitude}/>                     
                                

                        </div>
                        <Separator/>
                    </Container>
                        
                )}
            </WinkelStyled>

    )
}


export async function getStaticPaths() {
    const allWinkels = await getAllWinkelsWithSlug();

    return {
        paths: allWinkels.edges.map(({ node }) => `/boutiques/${node.slug}`) || [], fallback: true
    }
}

export async function getStaticProps({ params }) {
    const data = await getWinkel(params.slug)

    return {
        props: {
            winkelData: data.winkel
        }
    }
}

const WinkelStyled = styled.div`

`