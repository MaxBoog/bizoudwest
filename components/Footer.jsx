import styled from '@emotion/styled'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSquareFull, faPhoneAlt, faEnvelope, faCircle, faNewspaper  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <StyledFooter>
            <div className="container footer mx-auto rounded-3xl mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                    <div className="column justify-center">
                        <h3 className="text-center md:text-left">Biz Oudwest <span>.</span></h3>
                        <hr/>
                        <div className="flex items-center mt-5">
                            <span className="fa-stack fa-lg mx-3">
                                <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faEnvelope}/> 
                            </span>
                            <div>
                                info@bizoudwest.nl
                            </div> 
                        </div>  
                        <div className="flex items-center mt-6">
                            <span className="fa-stack fa-lg mx-3">
                                <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faPhoneAlt}/> 
                            </span>
                            <div>
                                +31 2 0 82749592
                            </div> 
                        </div>  
                        <div className="flex items-center mt-5">
                            <span className="fa-stack fa-lg mx-3">
                                <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faMapMarkerAlt}/> 
                            </span>
                            <div className="max-w-xxs md:max-w-xs">
                                1e constantijn huygensstraat 200, Amsterdam
                            </div>
                        </div>  
                        
                    </div>
                    <div className="column justify-center max-w-xs md:ml-20">
                        <p className="text-base my-10 text-center md:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur sed suscipit exercitationem expedita nesciunt veritatis debitis ipsam impedit nulla ipsa eaque culpa, ab, reprehenderit voluptate!</p>
                        <div className="flex items-center justify-center md:justify-start mt-4">
                            <a href="#" className="fa-stack mx-1 hover:opacity-75">
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
                    <div className="column justify-center">
                        <h3 className="text-center md:text-left mt-10 md:mt-0">Links <span>.</span></h3>
                        <hr/>
                        <div className="flex mt-10 justify-center md:justify-start">
                            <Link href="/">
                                <a className="hover:text-gray-600 text-center md:text-left">Home</a>
                            </Link>
                        </div>  
                        <div className="flex items-center mt-8 justify-center md:justify-start">
                            <Link href="/boutiques">
                                <a className="hover:text-gray-600">Winkels</a>
                            </Link>
                        </div>  
                        <div className="flex items-center mt-8 justify-center md:justify-start">
                            <Link href="/news">
                                <a className="hover:text-gray-600">Laatse Nieuws</a>
                            </Link>
                        </div>  
                        <div className="flex items-center mt-8 justify-center md:justify-start">
                            <Link href="/contact">
                                <a className="hover:text-gray-600">Contact</a>
                            </Link>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex items-center justify-center py-32 text-lg md:text-2xl ">
                    <div>&copy; {(new Date().getFullYear())} www.bizoudwest.nl <span>.</span></div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    .footer {
        font-size: 1.4rem;
        width: 100%;
        padding: 8rem 5rem;
        background-color: black;
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
    span {
        color: ${props => props.theme.colors.secondary};
    }

    .max-w-xxs {
        max-width: 15rem;
    }
    span {
        color: ${props => props.theme.colors.secondary};
    }
`