import Container from 'components/Container'
import Dot from 'components/Dot'
import Image from 'next/image'
import styled from '@emotion/styled'
import Separator from 'components/Separator'
import ScrollToTopButton from 'components/ScrollToTopButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import CategoryCard from 'components/CategoryCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faStore, faDumbbell, faBookMedical, faSocks, faHandSparkles, faHome, faBookOpen, faSuitcaseRolling, faCar, faBicycle} from '@fortawesome/free-solid-svg-icons'

import { getWinkelsWithCategory } from '../../lib/api'

export default function Boutiques({ winkels: { edges }}) {

    const categories = [
        {tag: "#Food & Drinks", href:"#food&drinks"},
        {tag: "#Boutiques", href:"#boutiques"},
        {tag: "#Sport", href:"#sport"},
        {tag: "#Health", href:"#health"},
        {tag: "#Clothing", href:"#clothing"},
        {tag: "#Beauty", href:"#beauty"},
        {tag: "#Home & Lifestyle", href:"#home&lifestyle"},
        {tag: "#Books & Culture", href:"#books&culture"},
        {tag: "#Hotels & Travel", href:"#hotels&travel"},
        {tag: "#Bikes & Cars", href:"#bikes&cars"}

    ]

    const color = "#e7335d"
   
    
    return (
        <BoutiquesStyled>
            <Container>
                    <div className="text-center pt-40 md:pt-64">
                        <Image priority="true" src="/images/city-3.svg" layout="fixed" width={100} height={100} quality={70}/>
                        <h1 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-center">In de buurt <Dot/></h1>
                        <h4 className="text-gray-500 pt-20 px-3 uppercase max-w-6xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat tempora nam fugit quasi accusamus ullam doloremque repudiandae quod. Corporis.</h4>
                        {/* <ArrowDown/> */}
                    </div>
                    
                    {/* <Separator/> */}
                    
                {/* <BuurtMap/> */}
                <Separator/>
                <h2 className="ml-3">Categorieën</h2>
                <div className="flex flex-wrap mt-5">
                    {categories.map(({tag, href}) =>(
                       <AnchorLink href={href} offset="50"> <span key={tag} className="bg-gray-200 hover:bg-gray-300 text-lg rounded-full p-2 m-5 font-bold leading-loose cursor-pointer tranisition-200">{tag}</span></AnchorLink>
                    ) )}
                </div>

                
                <h1 id="food&drinks" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faUtensils} color={color}/> - Food &amp; Drinks<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Food & Drinks"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-green-300"}/>
                                
                            )
                        }
                    })}
                                           
                    
                </div>

                <h1 id="boutiques" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faStore} color={color}/> - Boutiques<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Boutiques"){
                            return (
                                    
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-red-500"}/>
                            )
                        }
                    })}
                                           
                    
                </div>
                <h1 id="sport" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faDumbbell} color={color}/> - Sport<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Sport"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-blue-600"}/>
                            )
                        }
                    })}
                    
                    
                </div>
                <h1 id="health" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faBookMedical} color={color}/> - Health<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Health"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-orange-300"}/>
                            )
                        }
                    })}
                                           
                    
                </div>
                <h1 id="clothing" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faSocks} color={color}/> - Clothing<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Clothing"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-purple-800"}/>                                    
                            )
                        }
                    })}
                                           
                    
                </div>
                <h1 id="beauty" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faHandSparkles} color={color}/> - Beauty<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Beauty"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-green-800"}/>   
                            )
                        }
                    })}
                                           
                    
                </div>
                <h1 id="home&lifestyle" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faHome} color={color}/> - Home &amp; Lifestyle<Dot/> </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Home & Lifestyle"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-pink-300"}/>
                            )
                        }
                    })}
                                           
                    
                </div>
                <h1 id="books&culture" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faBookOpen} color={color}/> - Books &amp; Culture<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Books & Culture"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-orange-500"}/>
                            )
                        }
                    })}
                                           
                    
                </div>
                <h1 id="hotels&travel" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faSuitcaseRolling} color={color}/> - Hotels &amp; Travel<Dot/>  </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Hotels & Travel"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-yellow-500"}/>
                            )
                        }
                    })}
                                           
                    
                </div>
                <h1 id="bikes&cars" className=" pt-32 text-center lg:text-left lg:ml-5 mb-5"><FontAwesomeIcon icon={faBicycle} color={color}/> &amp; <FontAwesomeIcon icon={faCar} color={color}/> - Bikes &amp; Cars<Dot/>   </h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {edges.map(function({node}) {
                        if(node.winkel_categorie.winkelCategorie === "Bikes & Cars"){
                            return (
                                <CategoryCard slug={node.slug} key={node.databaseId} winkelnaam={node.winkelnaam.winkelnaam} winkel_categorie={node.winkel_categorie.winkelCategorie} winkel_beschrijving={node.winkel_beschrijving.winkelBeschrijvingNl} color={"border-gray-500"}/>
                            )
                        }
                    })}
                                           
                    
                </div>
                
                <Separator/>
                <ScrollToTopButton/>
            </Container>
        </BoutiquesStyled>
    )
}

export async function getStaticProps() {
    const winkels = await getWinkelsWithCategory();
    return {
        props: {
            winkels
        },
        revalidate: 1
    };
}

const BoutiquesStyled = styled.div`
        .boutique-description {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .boutique-name {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    `

