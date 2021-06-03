import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const REACT_CHALLENGES: Array<Challenge> = [
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "RT-1-0001",
		title: "Use um state para exibir dados na tela!",
		description:
			"Crie uma UI que tenha um input de texto, e quando o usuário digitar algo, o valor deve ser exibido em UpperCase logo abaixo do input, em tempo real.",
		level: ChallengeLevelEnum.JUNIOR,
		language: "React",
	},
	{
		id: "RT-1-0002",
		title: "Crie uma lista de afazeres!",
		description:
			"Crie uma UI que tenha um input de texto, e quando o usuário digitar algo e apertar ENTER, o texto do input deve aparecer abaixo do input, e conforme o usuário for digitando e apertando ENTER, os textos devem ser exibidos embaixo do texto anterior.",
		level: ChallengeLevelEnum.JUNIOR,
		language: "React",
	},
	{
		id: "RT-1-0003",
		title: "Exiba os dados de uma api!",
		description:
			"Quando a pagina for carregada, busque os dados dessa API: `http://fakeapi.jsonparseronline.com/posts` e os exiba na tela. (Lembre-se de fazer uma interface bem bonita! :wink:)",
		level: ChallengeLevelEnum.JUNIOR,
		language: "React",
	},
	{
		id: "RT-1-0004",
		title: "Crie um jogo da velha!",
		description:
			"Crei uma UI de um jogo da velha, onde 2 pessoas possam jogar, e suas rodadas se alternem.\n\n - Caso de velha, deverá ser exibido um alerta\n- Caso um jogador vença, deverá ser exibido um alerta dizendo qual dos jogadores venceu",
		level: ChallengeLevelEnum.JUNIOR,
		language: "React",
	},
	{
		id: "RT-1-0005",
		title: "Crie uma calculadora! (Lvl 1)",
		description:
			"Crei uma UI de uma calculadora. Ela deve ter as seguintes funções\n\n- Somar\n- Subtrair\n- Multiplicar\n- Dividir",
		level: ChallengeLevelEnum.JUNIOR,
		language: "React",
		image: "https://i.ytimg.com/vi/lXosDpaQ4Zs/maxresdefault.jpg",
	},
	/**
	 *
	 * Middle
	 *
	 */
	{
		id: "RT-2-0001",
		title: "Crie uma calculadora! (Lvl 2)",
		description:
			"Crei uma UI de uma calculadora, ela deve ser renponsiva, usar tags semanticas e ter acessibilidade. Ela deve ter as seguintes funções\n\n- Somar\n- Subtrair\n- Multiplicar\n- Dividir",
		level: ChallengeLevelEnum.MIDDLE,
		language: "React",
		image: "https://i.ytimg.com/vi/lXosDpaQ4Zs/maxresdefault.jpg",
	},
];
