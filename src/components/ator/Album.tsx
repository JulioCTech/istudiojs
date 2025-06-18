import Titulo from "../template/Titulo";
import Wrap from "../template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import Carrossel from "../template/Carrossel";
import Image from "next/image";
import Flex from "../template/Flex";
import Container from "../template/Container";

interface AlbumProps {
	idAtor: string;
}

export default async function Album({ idAtor }: AlbumProps) {
	const { getImagensAtor } = useMovieAPI();
	const imagensResposta = await getImagensAtor(idAtor);

	const imagensPorSlide = 3;
	let imagensRestantes = imagensResposta;
	const imagens = [];
	while (imagensRestantes.length >= imagensPorSlide) {
		imagens.push(imagensRestantes.splice(0, imagensPorSlide));
	}

	if (imagens.length <= 0) {
		return;
	}

	return (
		<Wrap>
			<Titulo
				pequeno
				texto="Fotos do(a) artista"
				className="w-full"
				alinhar="center"
			/>
			<Carrossel>
				{imagens.map((grupo: string[]) => {
					return (
						<Container>
							<Flex className="justify-between w-full">
								{grupo.map((linkImagem) => {
									return (
										<Wrap
											key={linkImagem}
											className={`h-36 sm:h-52 md:h-96 lg:min-h-[600px]
                            relative overflow-hidden rounded-lg`}
										>
											<Image
												src={linkImagem}
												alt="Imagem do ator"
												fill
												sizes="(max-width: 768px) 80vw, 40vw"
												className="object-cover"
											/>
										</Wrap>
									);
								})}
							</Flex>
						</Container>
					);
				})}
			</Carrossel>
		</Wrap>
	);
}
