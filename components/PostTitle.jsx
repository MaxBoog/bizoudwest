import Dot from 'components/Dot'

export default function PostTitle({ children }) {
    return (
        <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 px-6 sm:px-0">{children} <Dot/></h1>
    )
}