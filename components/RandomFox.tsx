import {useRef} from 'react';

type Props = {image: string}

export const RandomFox = ({ image }: Props): JSX.Element =>{ // forma explicita

    const node = useRef<HTMLImageElement>(null);

    return <img 
    ref={node}
    src ={image}
    width={320}
    height="auto"
    className="rounded"
    />
}

