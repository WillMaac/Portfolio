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
  linkPrincipal?: string;
};
const isExternal = (href: string | undefined) => {
  if (href) {
    return href.startsWith('http') || href.startsWith('https');
  }
  return false;
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
  linkPrincipal,
}) => {
  const cardContent = (
    <article
      className={`rounded-xl shadow-2xl bg-white hover:scale-105 transition duration-300 flex flex-col cursor-pointer ${
        isLarge ? "h-[620px] max-w-[1500px]" : "h-[190px]"
      } overflow-hidden ${className}`}
    >
      <Image
        src={image}
        alt={titulo}
        width={600}
        height={isLarge ? 300 : 150}
        className={`w-full ${isLarge ? "h-[300px]" : "h-[150px]"} object-cover`}
      />
      <div className="flex flex-col justify-center items-center p-4 flex-1">
        <h3 className="text-xl font-semibold mb-2 text-center">{titulo}</h3>
        {descricao && <p className="text-sm text-gray-600 text-center">{descricao}</p>}
        <div className="flex gap-4 mt-4">
          {/* BOTÃO 1 - Renderiza apenas se 'link1' for fornecido */}
          {link1 && (
            isExternal(link1) ? (
              <a 
                href={link1}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn}
              </a>
            ) : (
              <Link href={link1} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400">
                {btn}
              </Link>
            )
          )}

          {/* BOTÃO 2 - Renderiza apenas se 'link2' for fornecido */}
          {link2 && (
            isExternal(link2) ? (
              <a 
                href={link2}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn2}
              </a>
            ) : (
              <Link href={link2} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400">
                {btn2}
              </Link>
            )
          )}
        </div>
      </div>
    </article>
  );

  return (
    <>
      {/* Se 'linkPrincipal' for fornecido, ele envolve todo o card em um link. */}
      {linkPrincipal ? (
        isExternal(linkPrincipal) ? (
          <a href={linkPrincipal} target="_blank" rel="noopener noreferrer">
            {cardContent}
          </a>
        ) : (
          <Link href={linkPrincipal}>{cardContent}</Link>
        )
      ) : (
    
        <>{cardContent}</>
      )}
    </>
  );
};
