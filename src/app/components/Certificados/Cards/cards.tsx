import Image, { StaticImageData } from "next/image";
interface Props {
nome: string,
descrition: string,
image: StaticImageData | string;
}
export const Cards = ({nome, descrition, image}:Props) =>{
    return(
        <div>
            <h2>{nome}</h2>
            <Image src={image} 
            alt="Certificado"
            width={300}
            height={200}
            />
            <p>{descrition}</p>
        </div>
    )
}