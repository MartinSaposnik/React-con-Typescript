const random = (): number => Math.floor(Math.random()*122) +1;

export const RandomFox = (): JSX.Element =>{ // forma explicita
    const image :string = `https://randomfox.ca/images/${random()}.jpg`;
    return <img 
    src ={image}
    width={320}
    height="auto"
    className="rounded"
    />
}

