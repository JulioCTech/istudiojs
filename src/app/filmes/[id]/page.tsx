import Wrap from "@/components/template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import CardFilmeDetalhado from "@/components/filmes/CardFilmeDetalhado";
import Elenco from "@/components/filmes/Elenco";
import SugestoesFilmes from "@/components/filmes/SugestoesFilmes";

export default async function Filme(props: any) {
	const id = props.params.id;
	const { getFilmeDetalhado } = useMovieAPI();
	const detalhesFilme: FilmeDetalhado = await getFilmeDetalhado(String(id));

	return (
		<Wrap>
			<CardFilmeDetalhado filme={detalhesFilme} />
			<Elenco elenco={detalhesFilme.atores} />
			<SugestoesFilmes idFilme={String(id)} />
		</Wrap>
	);
}
