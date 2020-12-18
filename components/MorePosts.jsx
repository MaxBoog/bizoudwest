import Link from 'next/link'
import Image from 'next/image'
import FormattedDate from 'components/FormattedDate'
import Separator from 'components/Separator'

export default function MorePosts({ posts }) {
    return (
        <section>
            <Separator/>
            <h2 className="my-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Laatste Nieuws</h2>
            <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-1 md:grid-cols-2 grid-flow-col md:gap-6">
                {posts.map(({ node }) => (
                            <div className="row-span-1 shadow-lg hover:shadow-2xl transition ease-in-out duration-200 overflow-hidden">
                                <div className="my-5">
                                    <Link as={`/news/${node.slug}`} href={`/news/${node.slug}`}>
                                        <a>
                                            <Image layout="responsive" objectFit="cover" width={16} height={9} loading="lazy" className="h-auto w-full" src={node.previewImage.previewImage.mediaItemUrl} alt={node.titles.titleNl}/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg md:text-3xl mb-3 leading-snug">
                                        <Link as={`/news/${node.slug}`} href="/news/[slug]">
                                            <a
                                                className="hover:underline"
                                                dangerouslySetInnerHTML={{ __html: node.titles.titleNl }}
                                            ></a>
                                        </Link>
                                    </h3>
                                    <div className="text-lg mb-4 text-gray-600">
                                        <FormattedDate dateString={node.date} />
                                    </div>
                                    <div
                                        className="text-lg leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: node.previewTexts.previewTextNl }}
                                    />
                                </div>
                            </div>
                        
                ))}

                <div>
                    <Image layout="responsive" width={3} height={2} objectFit="cover" src="/images/city.svg"/>

                </div>
            </div>
            <Separator/>
        </section>
    )
}