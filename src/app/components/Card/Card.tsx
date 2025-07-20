type Props = {
  titulo: string;
  descricao: string
  btn: string;
};

export const Card: React.FC<Props> = ({ titulo, descricao, btn})=>{
    return(
        <article className="border-2 h-[20em] w-[25em] rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105">
            
            <h2 className="text-xl">{titulo}</h2>
            <p className="text-[20px]">{descricao}</p>
            <button className="border-2 py-2 px-2 bg-black border-none text-white rounded-[8px] mt-5">{btn}</button>
            
        </article>
    )
}