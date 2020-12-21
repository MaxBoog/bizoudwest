import Container from 'components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faMugHot, faStore, faDumbbell, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Separator from 'components/Separator'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'


export default function FeatureSection() {
    return (
        <FeatureSectionStyled>
            <Container>
            <div className="row-span-1">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <div className="text-center">
                            <h2 className="my-10 lg:mt-24 text-2xl color-primary font-semibold tracking-wide uppercase">Bedrijven Investeringszone <span className="color-secondary">OUD WEST</span></h2>
                            <p className="mt-2 text-3xl lg:text-5xl leading-8 font-extrabold tracking-tight text-gray-900 ">
                                Van horeca en pitoreske winkeltjes tot de basic-fit en de bever
                            </p>
                            <p className="mt-10 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                            </p>
                        </div>

                        <div className="lg:mt-24">
                        <dl className="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 lg:gap-x-8 md:gap-y-10">
                            <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                                <FontAwesomeIcon icon={faUtensils}/>
                                </div>
                            </div>
                            <div className="ml-4 mt-4">
                                <dt className="text-2xl leading-6 font-medium text-gray-900">
                                Restaurantjes
                                </dt>
                                <dd className="mt-2 text-lg text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </dd>
                            </div>
                            </div>

                            <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                                    <FontAwesomeIcon icon={faMugHot}/>
                                </div>
                            </div>
                            <div className="ml-4 mt-4">
                                <dt className="text-2xl leading-6 font-medium text-gray-900">
                                Cafetjes
                                </dt>
                                <dd className="mt-2 text-lg text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </dd>
                            </div>
                            </div>

                            <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                                    <FontAwesomeIcon icon={faStore}/>
                                </div>
                            </div>
                            <div className="ml-4 mt-4">
                                <dt className="text-2xl leading-6 font-medium text-gray-900">
                                Boetiekjes
                                </dt>
                                <dd className="mt-2 text-lg text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </dd>
                            </div>
                            </div>

                            <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-20 w-20 rounded-md bg-color-primary text-white mt-4">
                                    <FontAwesomeIcon icon={faDumbbell}/>
                                </div>
                            </div>
                            <div className="ml-4 mt-4">
                                <dt className=" text-2xl leading-6 font-medium text-gray-900">
                                    Sport
                                </dt>
                                <dd className="mt-2 text-lg text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </dd>
                            </div>
                            </div>
                        </dl>
                        </div>
                    </div>
                </div>
                <div>
                    <Separator/>
                    <p className="my-5 text-3xl lg:text-5xl leading-8 font-extrabold tracking-tight text-gray-900">
                        Waar precies? <Link href="/contact">
                            <a className="text-lg text-indigo-800 tracking-normal">
                                Bekijk op maps <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </a>
                        </Link>
                    </p>
                    <Link href="/contact">
                        <div className="shadow-lg hover:shadow-2xl transition ease-in-out duration-200">
                            <a>
                                <Image priority="true" layout="responsive" width={3} height={2} objectFit="cover" src="/images/bedrijfsgebied.png"/>
                                
                            </a>
                        </div>
                    </Link>
                </div>
            </Container>
        </FeatureSectionStyled>
        
    )
}

const FeatureSectionStyled = styled.div`
  
`