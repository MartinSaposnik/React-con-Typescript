import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from '../components/RandomFox';
import {useState} from 'react';

const random = (): number => Math.floor(Math.random()*122) +1;

const Home: NextPage = () => {

  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <div>
      <Head>
        <title>React con Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Cute Fox</h1>
        {images.map((image, index) =>(
          <div key={index} className="p-4">
            <RandomFox image = {image} />
            </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
