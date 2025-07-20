import Image, { StaticImageData } from 'next/image';

type Props = {
  titulo: string;
  descricao?: string
  btn: string;
  btn2: string;
  image: StaticImageData
};

export const CardProjetos: React.FC<Props> = ({ titulo, descricao, btn, btn2, image})=>{
    return(
        <article className='flex flex-col justify-center items-center border-2 h-[25em] rounded-xl shadow-md px-25 py-3 hover:bg-green-500 transition duration-300 hover:scale-105 bg-white'>
            <h2>{titulo}</h2>
<Image
        src={image}
        alt=""
        width={800}
        height={800}
        className="rounded mb-2"
      />
            <p>{descricao}</p>
            <div className='flex gap-60 mt-30'>
            <button className='border-2 bg-blue-500 rounded-[8px] px-2 py-1 cursor-pointer'>{btn}</button>
            <button className='border-2 bg-blue-500 rounded-[8px] px-2 py-1 cursor-pointer'>{btn2}</button>
            </div>
        </article>
    )
}