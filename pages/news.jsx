import styled from '@emotion/styled'
import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'

const News = ({ nieuws }) => {

    return (

        <NewsStyled>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    {nieuws.map(post => (
                        <Card key={post.id} post={post}/>
                    ))}
                </div>

                {/* <div className="inline-flex">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Prev
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Next
                    </button>
                </div> */}
            </div>
        </NewsStyled>
    )
}

export async function getStaticProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/nieuws`)
    const data = await res.json()

    return {
        props:{
            nieuws: data
        },
        revalidate: 1,
    }
}

export default News

const NewsStyled = styled.div`


`