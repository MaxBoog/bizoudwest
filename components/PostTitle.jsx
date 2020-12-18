export default function PostTitle({ children }) {
    return (
        <h1 
            className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center px-4"
            dangerouslySetInnerHTML={{ __html: children}}
        />
    )
}