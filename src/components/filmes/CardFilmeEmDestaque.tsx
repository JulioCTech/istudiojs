import Link from "next/link";
import Container from "../template/Container";
import Descricao from "../template/Descricao";
import Flex from "../template/Flex";
import Titulo from "../template/Titulo";
import PosterDoFilme from "./PosterDoFilme";

interface CardFilmeEmDestaqueProps {
	filme: Filme;
	className?: string;
}

export default function CardFilmeEmDestaque({
	filme,
	className,
}: CardFilmeEmDestaqueProps) {
	return (
		<Container className={className}>
			<Flex className="gap-8 flex-col-reverse lg:flex-row">
				<Flex col className="flex-1 items-start">
					<Titulo alinhar="left" texto={filme.titulo} />
					<Descricao texto={filme.descricao} className="text-xl text-justify" />
					<Link
						href={`/filmes/${filme.id}`}
						className={`px-3 py-3 bg-green-js font-semibold
                    rounded-lg hover:brightness-75
                    `}
					>
						Mais Detalhes
					</Link>
				</Flex>
				<PosterDoFilme url={filme.linkImagemPoster} titulo={filme.titulo} />
			</Flex>
		</Container>
	);
}
