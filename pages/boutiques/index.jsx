import Container from 'components/Container'
import { getWinkels } from '../../lib/api'
import LeafletMap from 'components/LeafletMap'
import Dot from 'components/Dot'
import Image from 'next/image'
import styled from '@emotion/styled'
import Separator from 'components/Separator'


export default function Boutiques({ winkels: { edges } }) {
    return (
        <BoutiquesStyled>
            <Container>
                <div className="grid grid-cols-1 max-w-screen-lg mx-auto">

                    {edges.map(({ node }) => (
                        <div className="pt-40 lg:pt-64 text-center">
                            <h1>(CONCEPT PAGINA)</h1>
                            <div key={node.databaseId}>
                                <Image layout="fixed" width={250} height={250} priority="true" src="/images/cafe.svg"/>
                                <hr className=" max-w-xs mx-auto my-12"/>
                                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-center" key={node.winkelnaam.winkelnaam}>{node.winkelnaam.winkelnaam} <Dot/></h2>
                                <p className="text-gray-700 pt-5">{node.winkel_adres.winkel_adres}</p>
                                <p className="text-gray-700 py-10 lg:py-32">{node.winkel_beschrijving.winkelBeschrijvingNl}</p>
                                <Image layout="responsive" width={3} height={2} objectFit="cover" src={node.winkel_afbeelding.winkelAfbeelding.mediaItemUrl}/>
                            </div>
                        </div>
                        
                        ))}
                        <Separator/>                    
                        
                </div>
                <Separator/>
            </Container>
        </BoutiquesStyled>
    )
}

export async function getStaticProps() {
    const winkels = await getWinkels();
    return {
        props: {
            winkels
        },
        revalidate: 1,
    };
}

const BoutiquesStyled = styled.div`
        /* .map {
            margin-top: 23rem;
        } */
    `

