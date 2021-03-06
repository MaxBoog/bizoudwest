import styled from '@emotion/styled'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSquareFull, faPhoneAlt, faEnvelope, faCircle, faNewspaper, faPlay  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Container from 'components/Container'
import Separator from 'components/Separator'
import Dot from 'components/Dot'


export default function Footer() {
    return (
        <StyledFooter>
            {/* Footer */}
            <div className="container max-w-full bg-gray-800">
            
                <div className=" max-w-screen-xl mt-10 py-32 px-20 text-white text-2xl mx-auto">

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">

                        {/* Column */}
                        <div className="">
                            <h3 className="text-center mb-4 lg:text-left">Biz Oudwest <Dot/></h3>
                            <hr/>
                            <div className="flex items-center mt-5 lg:-ml-5">
                                <span className="fa-stack fa-lg mx-3">
                                    <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                    <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faEnvelope}/> 
                                </span>
                                <div>
                                    info@biz-oudwest.nl
                                </div> 
                            </div>  
                            <div className="flex items-center mt-10 lg:-ml-5">
                                <span className="fa-stack fa-lg mx-3">
                                    <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                    <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faPhoneAlt}/> 
                                </span>
                                <div>
                                    +31 2 0 0000000
                                </div> 
                            </div>  
                            <div className="flex items-center mt-5 lg:-ml-5">
                                <span className="fa-stack fa-lg mx-3">
                                    <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                    <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faMapMarkerAlt}/> 
                                </span>
                                <div className="max-w-xxs lg:max-w-xs">
                                    1e constantijn huygensstraat 200, Amsterdam
                                </div>
                            </div>  
                        </div>

                        {/* Column */}
                        <div className="max-w-xs lg:ml-20">
                            <h3 className="text-center lg:text-left mt-10 lg:mt-0 mb-4">Socials <Dot/></h3>
                            <hr/>
                            <p className="text-base my-10 text-center lg:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur sed suscipit exercitationem expedita nesciunt veritatis debitis ipsam impedit nulla ipsa eaque culpa, ab, reprehenderit voluptate!</p>
                            <div className="flex items-center justify-center lg:justify-start mt-4">
                                <a href="#" className="fa-stack mr-1 lg:-ml-2 hover:opacity-75">
                                    <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faSquareFull}/>
                                    <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faFacebookF}/> 
                                </a> 
                                <a href="#" className="fa-stack mx-1 hover:opacity-75">
                                    <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faSquareFull}/>
                                    <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faInstagram}/> 
                                </a>
                                <a href="#" className="fa-stack mx-1 hover:opacity-75">
                                    <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faSquareFull}/>
                                    <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faTwitter}/> 
                                </a> 
                                <Link href="/news">
                                    <a className="fa-stack mx-1 hover:opacity-75">
                                        <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faSquareFull}/>
                                        <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faNewspaper}/> 
                                    </a> 
                                </Link>
                            </div>  
                        </div>
                        
                        {/* Column */}
                        <div className="">
                            <h3 className="text-center lg:text-left mt-10 lg:mt-0 mb-4">Links <Dot/></h3>
                            <hr/>
                            <div className="flex mt-10 justify-start">
                                <Link href="/">
                                    <a className="hover:text-gray-600 text-center lg:text-left"><FontAwesomeIcon icon={faPlay} className='mr-10 icon-background'></FontAwesomeIcon>Home</a>
                                </Link>
                            </div>  
                            <div className="flex mt-8 justify-start">
                                <Link href="/boutiques">
                                    <a className="hover:text-gray-600"><FontAwesomeIcon icon={faPlay} className='mr-10 icon-background'></FontAwesomeIcon>Winkels</a>
                                </Link>
                            </div>  
                            <div className="flex mt-8 justify-start">
                                <Link href="/news/">
                                    <a className="hover:text-gray-600"><FontAwesomeIcon icon={faPlay} className='mr-10 icon-background'></FontAwesomeIcon>Laatse Nieuws</a>
                                </Link>
                            </div>  
                            <div className="flex mt-8 justify-start">
                                <Link href="/contact">
                                    <a className="hover:text-gray-600"><FontAwesomeIcon icon={faPlay} className='mr-10 icon-background'></FontAwesomeIcon>Contact</a>
                                </Link>
                            </div>  
                        </div>
                        <Separator/>
                    </div>
                    <div className="grid text-center lg:ml-16">
                        <div>&copy; {(new Date().getFullYear())} www.bizoudwest.nl <Dot/></div>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    .footer {
        font-size: 1.4rem;
        width: 100%;
        padding: 8rem 5rem;
        /* background-color: black; */
        color: ${props => props.theme.colors.white};
    }

    .icon-background {
        color: ${props => props.theme.colors.primary};
    }

    .icon-background-secondary {
        color: ${props => props.theme.colors.secondary};
    }

    .icon-icon {
        color: ${props => props.theme.colors.white}
    }
`