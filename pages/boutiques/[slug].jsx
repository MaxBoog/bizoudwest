import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import styled from '@emotion/styled'
import Container from 'components/Container'
import Button from 'components/Button'
// import Separator from 'components/Separator'
import Link from 'next/link'
import LeafletMap from 'components/LeafletMap'
import Image from 'next/image'
import Dot from 'components/Dot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faExternalLinkAlt, faPhoneAlt, faClock, faChevronCircleLeft, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


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
                        <div className="grid grid-cols-1 max-w-screen-md mx-auto">
                        <div className="pt-40 lg:pt-64 text-center">
                            
                            <div>
                                <div className="text-center md:text-left">
                                    <Link href="/boutiques">
                                        <Button className="text-indigo-800 mt-4 font-bold"><FontAwesomeIcon icon={faChevronCircleLeft}/> Alle winkels</Button>
                                    </Link>
                                </div>
                                <hr className=" max-w-xs mx-auto my-12"/>
                                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-center">{winkelData.winkelnaam.winkelnaam}<Dot/></h2>
                                <p className="text-gray-700 pt-5 px-10">{winkelData.winkel_adres.winkelAdres}</p>
                                <p><span className="bg-gray-200 text-base rounded-full p-3 leading-loosem mt-5"># {winkelData.winkel_categorie.winkelCategorie}</span></p>
                                {/* <h4 className="text-gray-500 pt-20 uppercase">over {winkelData.winkelnaam.winkelnaam}</h4> */}
                                <h4 className="text-gray-500 pt-20 px-3 uppercase max-w-6xl mx-auto">{winkelData.winkel_beschrijving.winkelBeschrijvingNl}</h4>
                                <hr className=" max-w-xs mx-auto my-12"/>
                                <Image layout="responsive" loading="eager" quality={20} width={3} height={2} objectFit="cover" src={winkelData.winkel_afbeelding.winkelAfbeelding.mediaItemUrl}/>
                                <hr className=" max-w-xs mx-auto my-12"/>
                                <h3 className="pb-3">Contact<Dot/></h3>
                                <div className="text-left inline-block">
                                    <p><FontAwesomeIcon icon={faExternalLinkAlt}/> <a href={winkelData.winkel_website_url.winkelWebsiteUrl} className=" hover:text-blue-800">{winkelData.winkel_website_url.winkelWebsiteUrl}</a></p>
                                    <p><FontAwesomeIcon icon={faEnvelopeOpen}/> <a href={`mailto:${winkelData.winkel_mail.winkelMail}`}>{winkelData.winkel_mail.winkelMail}</a></p>
                                    <p><FontAwesomeIcon icon={faPhoneAlt}/> <a href={`tel:${winkelData.winkel_telefoonnummer.winkelTelefoonnummer}`}>{winkelData.winkel_telefoonnummer.winkelTelefoonnummer}</a></p>
                                    <p><FontAwesomeIcon icon={faClock}/> Openingstijden:</p>
                                    <p dangerouslySetInnerHTML={{ __html: winkelData.winkel_openingstijden.winkelOpeningstijden}}/>
                                </div>
                                <p className="pt-10"><FontAwesomeIcon icon={faMapMarkerAlt} size="6x" color="#e7335d"/></p>
                                <hr className=" max-w-xs mx-auto my-12"/>
                            </div>
                        </div>
                            {/* <Separator/> */}
                            <LeafletMap winkeladres={winkelData.winkel_adres.winkelAdres} winkelnaam={winkelData.winkelnaam.winkelnaam} latitude={winkelData.winkel_locatie.winkelLocatie.latitude} longitude={winkelData.winkel_locatie.winkelLocatie.longitude}/>                     
                                

                        </div>
                                <hr className=" max-w-xs mx-auto my-12"/>
                                <div className="text-center md:text-left">
                                    <Link href="/boutiques">
                                        <Button className="text-indigo-800 mt-4 font-bold"><FontAwesomeIcon icon={faChevronCircleLeft}/> Alle winkels</Button>
                                    </Link>
                                </div>
                        
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
        },
        revalidate: 1
    }
}

const WinkelStyled = styled.div`

`