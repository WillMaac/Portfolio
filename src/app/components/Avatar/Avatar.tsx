"use client";
import Image, { type StaticImageData } from "next/image";
import "../Avatar/animations.css";

type AvatarProps = {
  src?: string | StaticImageData; // aceita "/avatar.png" (public) ou import foto from '...'
  alt?: string;
  size?: number;
};

export const Avatar: React.FC<AvatarProps> = ({
  src = "/avatar.png",
  alt = "Foto de perfil",
  size = 260,
}) => {
  return (
    <div className="flex-1 flex justify-center relative z-10">
      <Image
        src={src as StaticImageData | string}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full bg-[#6ef539] animate-float-manual"
      />
    </div>
  );
};
