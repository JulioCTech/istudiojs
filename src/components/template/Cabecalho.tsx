"use client";
import Link from "next/link";
import Wrap from "./Wrap";
import Flex from "./Flex";
import { Popcorn } from "@phosphor-icons/react";

export default function Cabecalho() {
	return (
		<Wrap className="bg-neutral-950">
			<header className="p-4 px-auto">
				<Flex className="justify-around">
					<Link
						href="/"
						className={`font-bold px-4 py-2 bg-green-js
                    flex gap-1 items-center justify-center rounded-lg
                    `}
					>
						<Popcorn size={20} />
						iStudioJS
					</Link>
					<Link
						target="_blank"
						className="font-bold px-4 hover:brightness-75"
						href="https://www.themoviedb.org/"
					>
						The Movie DB
					</Link>
				</Flex>
			</header>
		</Wrap>
	);
}
