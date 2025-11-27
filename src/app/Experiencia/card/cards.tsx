import Link from "next/link";

type Props = {
  titulo: string;
  descricao: string;
  btn?: string;
  downloadLink?: string;
  onClick?: () => void;
  link?: string;
};

export default function cards({
  titulo,
  descricao,
  btn,
  downloadLink,
  onClick,
  link,
}: Props) {
  return (
    <article className="border-2 rounded-xl shadow-xl shadow-[#00000065] px-6 py-3 transition text-center duration-300 hover:scale-105 max-w-[25em] border-none h-full">
      <h3 className="text-xl font-inter">{titulo}</h3>

      <p className="text-[20px] font-poppins text-2xl mt-5">{descricao}</p>

      {btn && (
        <>
          {downloadLink ? (
            <a
              href={downloadLink}
              download
              className="border-2 py-2 px-2 bg-black border-none text-white rounded-[8px] mt-5 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:bg-[#48b948] inline-block"
            >
              {btn}
            </a>
          ) : link ? (
            <Link
              href={link}
              className="border-2 py-2 px-2 bg-black border-none text-white rounded-[8px] mt-5 inline-block cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:bg-[#48b948]"
            >
              {btn}
            </Link>
          ) : (
            <button
              onClick={onClick}
              className="border-2 py-2 px-2 bg-black border-none text-white rounded-[8px] mt-5 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:bg-[#48b948]"
            >
              {btn}
            </button>
          )}
        </>
      )}
    </article>
  );
}
