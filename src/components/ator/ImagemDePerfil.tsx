"use client";
import { User } from "@phosphor-icons/react";
import ImagemComFallback from "../template/ImagemComFallback";
import Wrap from "../template/Wrap";
import Flex from "../template/Flex";

interface ImagemPerfilProps {
	url: string;
	imgAlt: string;
}

export default function ImagemPerfil({ url, imgAlt }: ImagemPerfilProps) {
	return (
		<div
			className={`absolute rounded-full p-3 bg-zinc-900
            w-60 h-60 md:w-75 md:h-72 lg:w-80 lg:h-80
            left-1/2 transform -translate-x-1/2 -translate-y-3/4
    `}
		>
			<Wrap className="relative h-full w-full rounded-full">
				<ImagemComFallback url={url} imgAlt={imgAlt}>
					<Flex className="w-full h-full">
						<User className="w-3/4 h-4/5 text-zinc-500" />
					</Flex>
				</ImagemComFallback>
			</Wrap>
		</div>
	);
}
