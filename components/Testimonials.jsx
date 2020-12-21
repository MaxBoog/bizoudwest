import styled from "@emotion/styled"
import Container from "components/Container"
import Dot from "components/Dot"
import Separator from "components/Separator"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default function Testimonials() {
    return(
        <TestimonialsStyled>
            <Container>
                <Separator/>
                
                    <h2 className="mb-20 text-5xl font-bold tracking-tighter leading-tight text-center">Wat zegt de pers over Biz Oudwest? <Dot/></h2>
                
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                        <div className="item">
                            <h3>www.timetomomo.com</h3>
                            <p>
                            Oud-west is de afgelopen jaren uitgegroeid tot een populaire wijk onder twintigers en dertigers. Dat heeft zeker te maken met de vele hippe koffiebarretjes en betaalbare eettentjes die zich hier hebben gevestigd. Als foodliefhebber mag je deze plek niet overslaan.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>www.elle.nl</h3>
                            <p>
                            De favoriete restaurants zijn te vinden in oud-west.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>My travelboekje.com</h3>
                            <p>
                            Veel leuke nieuwe hotspots, café’s en restaurants zijn erbij gekomen, ik vraag me soms af of we überhaupt nog wat te zoeken hebben buiten Oud-west.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>www.findglocal.com</h3>
                            <p>
                            De leukste buurt van A"dam! Kom langs als je op zoek bent naar de meest verassende winkels en gezelligste koffie- en eet tentjes. Het Oud-west winkelgebied betreft de Eerste Constantijn Huygensstraatt, Overtoom Oost en de Stadhouderskade.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>www.wildjunket.com</h3>
                            <p>
                            Oud-west Amsterdam is mijn absolute favoriet onder alle Amsterdamse buurten. Het is een driehoekig gebied ten westen van Centrum en omgeven door groen, met het Vondelpark in het zuiden en het Rembrandtpark in het westen. Het heeft naar onze mening een perfecte ligging: dicht genoeg bij het stadscentrum en toch op comfortabele afstand van de toeristenmassa.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>Lonely Planet</h3>
                            <p>
                            A area like really make you feel comfortable in Amsterdam.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>Esquire</h3>
                            <p>
                            Oud-west is gewoon het allercoolste deel van de stad.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>Iamsterdam</h3>
                            <p>
                            Net buiten de grachtengordel van Amsterdam is veel te doen; de wijk Oud-West behoudt zijn historische charme maar voegt een vleugje moderne cultuur toe met winkels, markten, culturele centra en meer.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h3>Vanity Fairs</h3>
                            <p>
                            Here it is still charming and delightful.
                            </p>
                        </div>
                    </div>
                </Carousel>
                <Separator/>
            </Container>
        </TestimonialsStyled>
    )
}

const TestimonialsStyled = styled.div`
    .carousel-root {
        width: 75% !important;
        margin: auto !important;
        margin-top: 3% !important;
    }

    .carousel .slide {
        background: #fff!important;
        color: black;
        height: 100%;
    }

    .item {
        background: #FFFFEF;
        /* margin-top: -6%; */
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 6%;
        padding-bottom: 12%;
        padding-left: 5%;
        padding-right: 5%;
        border: 1px solid #ddd;
        height: 286px;
    }

    .carousel .control-dots {
        padding-left: 5px !important;
        outline: 0;
        bottom: 2% !important;
    }

    .item h3 {
        color: #222;
        font-weight: 100;
        letter-spacing: 0.2px;
        margin-bottom: 4px;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 17px;
    }

    .item p {
        font-weight: 100 !important;
        line-height: 29px !important;
        color: #222;
        font-size: 15px;
        font-family: sans-serif;
        max-height: 67px;
    }

    .item p:before {
        content: "“";
        color: #aaa;
        font-size: 26px;
        font-family: monospace;
        font-weight: 100;
    }

    .item p:after {
        content: "”";
        color: #aaa;
        font-size: 26px;
        font-family: monospace;
        font-weight: 100;
        line-height: 0;
    }

    .carousel .control-dots .dot {
        box-shadow: none !important;
        background: #454545 !important;
        outline: 0;
    }

    .carousel.carousel-slider .control-arrow {
        background: #000 !important;
        height: 50px !important;
        position: absolute;
        top: 35% !important;
    }

    @media only screen and (max-width: 1024px) {
    .carousel-root {
        outline: 0;
        width: 93% !important;
        margin: auto !important;
    }

    .item p {
       
        font-size: 11px !important;
        
    }

    .carousel .control-dots {
        display: none;
    }

    .carousel.carousel-slider .control-arrow {
        display: none !important;
    }
    .item {
        /* margin-top: -9%; */
        width: 88%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 8%;
        padding-bottom: 12.5%;
        padding-left: 5%;
        padding-right: 5%;
        border: 1px solid #ddd;
        height: 269px;
    }
}

`