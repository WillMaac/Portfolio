import Image, { StaticImageData } from "next/image";
interface Props {
nome: string,
descrition: string,
image: StaticImageData | string;
}
export const Cards = ({nome, descrition, image}:Props) =>{
    return(
        <div className="flex justify-center items-center flex-col border border-2 bg-[#fdfdfdd2] w-115 h-135 text-black rounded-2xl py-2 px-2  border-none   mt-5 transition duration-300 ease-in-out hover:scale-105 shadow-2xl shadow-black">
            <h2 className="mt-5 text-xl font-inter">{nome}</h2>
            <Image src={image} 
            alt="Certificado"
            width={300}
            height={200}
            className="mt-10"
            />
            <p className="mt-15 font-poppins text-[20px] text-center">{descrition}</p>
        </div>
    )
}