import styled from '@emotion/styled'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSquareFull, faPhoneAlt, faEnvelope, faCircle, faNewspaper  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <StyledFooter>
            <div className="container footer mx-auto max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                    <div className="column justify-center">
                        <h3 className="text-center md:text-left">Biz Oudwest</h3>
                        <hr/>
                        <div className="flex items-center mt-5">
                            <span className="fa-stack fa-lg mx-3">
                                <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faMapMarkerAlt}/> 
                            </span>
                            <div>
                                Adress, Amsterdam
                            </div> 
                        </div>  
                        <div className="flex items-center mt-4">
                            <span className="fa-stack fa-lg mx-3">
                                <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faPhoneAlt}/> 
                            </span>
                            <div>
                                +31 2 0 82749592
                            </div> 
                        </div>  
                        <div className="flex items-center mt-4">
                            <span className="fa-stack fa-lg mx-3">
                                <FontAwesomeIcon className="fa-stack-2x icon-background" icon={faCircle}/>
                                <FontAwesomeIcon className="fa-stack-1x icon-icon" icon={faEnvelope}/> 
                            </span>
                            <div>
                                info@bizoudwest.nl
                            </div> 
                        </div>  
                        
                    </div>
                    <div className="column justify-center max-w-xs">
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
                </div>
            </div>
            <div className="container mx-auto flex items-center justify-center py-32">
                    <div>&copy; {(new Date().getFullYear())} www.bizoudwest.nl</div>
                
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    .footer {
        font-size: 1.4rem;
        margin-top: 2rem;
        color: ${props => props.theme.colors.darkgrey};
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