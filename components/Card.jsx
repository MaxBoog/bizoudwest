import styled from '@emotion/styled'
import Image from 'next/image'
import Button from 'components/Button'
import Link from 'next/link'

export default function Card({ node }) {

    return(
        <CardStyled>
                <div className="rounded overflow-hidden shadow-lg m-5 md:flex">
                    <div className=" md:max-w-lg rounded-t md:rounded-t-none md:rounded-l text-center">
                        <img className="md:h-auto md:w-full" src={node.featuredImage.node.sourceUrl} />
                    </div>
                    <div className="flex flex-col px-6 py-4 bg-white rounded-b md:rounded-b-none md:rounded-r ">
                        <div className="font-bold text-2xl md:text-4xl mb-6">
                            {node.title}
                        </div>
                        <p className="text-gray-700 text-base h-20">
                            {node.excerpt}
                        </p>
                        <div className="mt-5 text-gray-700 text-base">
                            {node.date}
                        </div>
                        <div className="mt-5">
                            <Link href={`/news/${node.slug}`}>
                                <Button className="inline-block btn hover:bg-pink-500 text-base text-white py-5 px-6 mt-4">Lees meer...</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            
        </CardStyled>
    )
}

const CardStyled = styled.div`
    .btn {
        background-color: ${props => props.theme.colors.primary};
        &:hover {
            background-color: ${props => props.theme.colors.primary_opaque}
        }
    }
`