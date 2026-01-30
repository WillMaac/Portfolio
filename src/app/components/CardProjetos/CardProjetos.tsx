import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  titulo: string;
  descricao?: string;
  btn: string;
  btn2: string;
  image: StaticImageData | string;
  className?: string;
  isLarge?: boolean;
  link1?: string;
  link2?: string;
};

// Verifica se o link é externo
const isExternal = (href: string | undefined) => {
  return href?.startsWith("http") || href?.startsWith("https");
};

export const CardProjetos: React.FC<Props> = ({
  titulo,
  descricao,
  btn,
  btn2,
  image,
  className = "",
  isLarge = false,
  link1,
  link2,
}) => {
  return (
    <article
      className={`rounded-xl bg-white items-center justify-center flex flex-col cursor-pointer
      ${isLarge ? "h-[520px] max-w-[1500px]" : "h-[290px] transition duration-300 hover:scale-105  shadow-[5px_5px_5px_#050967c2]"}
      overflow-hidden ${className}`}
    >
      <Image
        src={image}
        alt={titulo}
        width={600}
        height={isLarge ? 300 : 150}
        className={`w-full ${isLarge ? "h-[300px]" : "h-[150px]"} rounded-xl`}
      />

      <div className="flex flex-col justify-center items-center p-4 flex-1">
        <h3 className="text-xl font-semibold mb-2 text-center">{titulo}</h3>
        {descricao && (
          <p className="text-sm text-gray-600 text-center">{descricao}</p>
        )}

        <div className="flex gap-4 mt-4">

          
          {link1 && (
            isExternal(link1) ? (
              <a
                href={link1}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400"
              >
                {btn}
              </a>
            ) : (
              <Link
                href={link1}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400"
              >
                {btn}
              </Link>
            )
          )}

          
          {link2 && (
            isExternal(link2) ? (
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400"
              >
                {btn2}
              </a>
            ) : (
              <Link
                href={link2}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400"
              >
                {btn2}
              </Link>
            )
          )}

        </div>
      </div>
    </article>
  );
};
