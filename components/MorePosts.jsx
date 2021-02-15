import Link from 'next/link'
import Image from 'next/image'
import FormattedDate from 'components/FormattedDate'
import Separator from 'components/Separator'
// import Dot from 'components/Dot'
import Heading from 'components/Heading'

export default function MorePosts({ posts }) {
    return (
        <section>
            <Separator/>
            <Heading>Laatste Nieuws</Heading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            {/* <div className="row-span-1">
                    <Image layout="responsive" width={3} height={2} objectFit="cover" src="/images/city.svg"/>

                </div>
                <div className="row-span-1">
                    <Image layout="responsive" width={3} height={2} objectFit="cover" src="/images/bedrijfsgebied.png"/>
                </div> */}
                {posts.map(({ node }) => (
                

                    
                    <Link href={`/news/${node.slug}`} key={node.id}>
                        
                            <div className="shadow-lg hover:shadow-2xl transition ease-in-out duration-200 overflow-hidden">
                                <div className="my-5">
                                    <Image layout="responsive" objectFit="cover" width={16} height={9} loading="lazy" className="h-auto w-full" src={node.preview_image.previewImage.mediaItemUrl} alt={node.titel.titelNl}/>
                                </div>
                                <div className="px-10 py-5">
                                    <h3 className="text-lg md:text-3xl mb-3 leading-snug hover:underline" dangerouslySetInnerHTML={{ __html: node.titel.titelNl }}/>
                                    
                                    <div
                                        className="text-xl md:text-2xl text-gray-700"
                                        dangerouslySetInnerHTML={{ __html: node.preview_tekst.previewTekstNl }}
                                    />
                                    <p className=" text-blue-700 mt-3">
                                        <Link href={`/news/${node.slug}`}>
                                            <a>
                                                Lees meer...
                                            </a>
                                        </Link>
                                    </p>
                                    <div className="text-lg mt-4 text-gray-600">
                                        <FormattedDate dateString={node.date} />
                                    </div>
                                </div>
                            </div>
                            
                        </Link>
                        
                        
                ))}
                
                
            </div>
            <Separator/>
        </section>
    )
}