
import styled from '@emotion/styled'
import Button from 'components/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faNewspaper } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return (
        <StyledHero>
            <div className="hero">
                <div className="container mx-auto px-6 flex flex-col content-center">
                    <h1 className="hero-title text-6xl py-6 mt-10 lg:mt-40">Biz Oudwest</h1>
                    <h3 className="hero-subtitle text-3xl lg:text-4xl pb-10">Het mooiste winkelgebied van Amsterdam!</h3>
                    <div className="flex">
                        <Link href="/boutiques">
                            <Button className="btn btn-primary mr-6 flex-auto text-lg md:text-3xl">Bekijk Winkels <FontAwesomeIcon icon={faStore} className="ml-1"/></Button>
                        </Link>
                        <Link href="/news">
                            <Button className="btn btn-secondary flex-auto text-lg md:text-3xl">Laatste Nieuws <FontAwesomeIcon icon={faNewspaper} className="ml-1"/></Button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </StyledHero>
    )
}

const StyledHero = styled.div`
    .hero {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('images/hero2-min.JPG');
        height: 50vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        .hero-title {
            color: ${props => props.theme.colors.white};
            font-weight: bold;
        }
        
        .hero-subtitle {
            color: ${props => props.theme.colors.white};
        }
    }
`