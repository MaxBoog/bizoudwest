import  { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CustomCarousel() {
    return (
        <div className="carousel-wrapper">
                <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} showIndicators={false}>

                    <div>
                        <Image layout="responsive" width={16} height={5} objectFit="cover" src="/images/carousel/bakker-bertram.JPG"/>
                    </div>
                    <div>
                        <Image layout="responsive" width={16} height={5} objectFit="cover" src="/images/carousel/ebeling-1.JPG"/>
                    </div>
                    <div>
                        <Image layout="responsive" width={16} height={5} objectFit="cover" src="/images/carousel/ebeling-2.JPG"/>
                    </div>
                </Carousel>
        </div>
    )
}