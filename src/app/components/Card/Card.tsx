type Props = {
  titulo: string;
  descricao: string;
  btn: string;
  downloadLink?: string;
};

export const Card: React.FC<Props> = ({ titulo, descricao, btn, downloadLink }) => {
  return (
    <article className="border-2 h-[20em] w-[25em] rounded-xl shadow-xl shadow-[#00000065] px-6 py-3 transition text-center duration-300 hover:scale-105 max-w-[20em] border-none">
      <h3 className="text-xl font-inter">{titulo}</h3>
      <p className="text-[20px] font-poppins text-2xl">{descricao}</p>

      {downloadLink ? (
        <a 
          href={downloadLink} 
          download 
          className="border-2 py-2 px-2 bg-black border-none text-white rounded-[8px] mt-5 cursor-pointer inline-block transition duration-300 ease-in-out hover:scale-105 hover:bg-[#48b948]"
        >
          {btn}
        </a>
      ) : (
        <button className="border-2 py-2 px-2 bg-black border-none text-white rounded-[8px] mt-5 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:bg-[#48b948]">
          {btn}
        </button>
      )}
    </article>
  );
};