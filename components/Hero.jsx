
import styled from '@emotion/styled'
import Button from 'components/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import HeroTitle from 'components/HeroTitle'
import HeroSubTitle from 'components/HeroSubTitle'
import Dot from 'components/Dot'

export default function Hero() {
    return (
        <StyledHero>
            <div className="hero">
                <div className="container mx-auto px-6 flex flex-col content-center">
                    <HeroTitle>Biz Oudwest <Dot/></HeroTitle>
                    <HeroSubTitle>Het mooiste winkelgebied en horeca van Amsterdam!</HeroSubTitle>
                    <div className="flex">
                        <Link href="/boutiques">
                            <Button className="btn btn-primary mr-6 flex-auto text-lg md:text-3xl px-10">Onze Winkels <FontAwesomeIcon icon={faStore} className="ml-1"/></Button>
                        </Link>
                        <Link href="/news/">
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
        height: 70vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
`