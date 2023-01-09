
//? This compoment is to create a separator with an id to be able to link to it.
//? This is useful to create a link to a specific section of a page. as Next.js does not support anchor tags
interface SeparatorIdentifierProps {
    id: string;
    margin?: margin;
    className?: string;
}

//margin only 1 to 5
type margin = 'my-1' | 'my-2' | 'my-3' | 'my-4' | 'my-5';

export const SeparatorIdentifier = ({id, margin = 'my-5', className = ''}: SeparatorIdentifierProps) => {
    return (
        <div id={id} className={`${margin} ${className}`}/>
    )
}
