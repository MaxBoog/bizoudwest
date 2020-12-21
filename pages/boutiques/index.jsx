import Container from 'components/Container'
import { getWinkels } from '../../lib/api'

export default function Boutiques({ winkels: { edges }}) {
    return (
        <Container>
            {edges.map(({ node }) => (
                <div className="pt-64" key={node.databaseId}>
                    <h1 key={node.winkelNaam.name}>{node.winkelNaam.name}</h1>
                </div>
            ))}
        </Container>
    )
}

export async function getStaticProps() {
    const winkels = await getWinkels();
    return {
        props: {
            winkels
        },
        revalidate: 1,
    };
}

