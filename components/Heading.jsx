import Dot from 'components/Dot'

export default function Heading({ children }) {
    return (
        <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-center lg:text-left">{children} <Dot/></h2>
    )
}