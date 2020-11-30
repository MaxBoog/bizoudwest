import styled from '@emotion/styled'
import Button from 'components/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function Post({ nieuws }) {
    return (
        <PostStyled>
            <div className="container mx-auto">
                <h1 className="post-heading">
                    {nieuws.title_nl}
                </h1>
            </div>
        </PostStyled>
    )
}

export async function getStaticProps() {
    const { API_URL } = process.env
    const nieuws = await fetch(`${API_URL}/nieuws`)
    const nieuws_data = await nieuws.json()
    


    return {
        props:{
            nieuws: nieuws_data
        },
        revalidate: 1,
    }
}

const PostStyled = styled.div`

`