"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
	motion,
	useTransform,
	AnimatePresence,
	useMotionValue,
	useSpring,
} from "framer-motion";
import Container from "../template/Container";
import Titulo from "../template/Titulo";
import Flex from "../template/Flex";
import ImagemComFallback from "../template/ImagemComFallback";
import { User } from "@phosphor-icons/react";
import Link from "next/link";

interface ElencoProps {
	elenco: Ator[];
}

export default function Elenco({ elenco }: ElencoProps) {
	const [indiceSelecionado, setIndiceSelecionado] = useState<number | null>(
		null
	);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move
	// rotate the tooltip
	const rotate = useSpring(
		useTransform(x, [-100, 100], [-45, 45]),
		springConfig
	);
	// translate the tooltip
	const translateX = useSpring(
		useTransform(x, [-100, 100], [-50, 50]),
		springConfig
	);
	const handleMouseMove = (event: any) => {
		const halfWidth = event.target.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};

	return (
		<Container className="pb-0 pt-10">
			<Titulo texto="Elenco" className="mb-4" alinhar="center" />
			<Flex className="flex-wrap mt-14">
				{elenco.map((ator, i) => (
					<Link href={`/ator/${ator.id}`}>
						<div
							className="-mr-4  relative group"
							key={ator.id}
							onMouseEnter={() => setIndiceSelecionado(i)}
							onMouseLeave={() => setIndiceSelecionado(null)}
						>
							<AnimatePresence mode="popLayout">
								{indiceSelecionado === i && (
									<motion.div
										initial={{ opacity: 0, y: 20, scale: 0.6 }}
										animate={{
											opacity: 1,
											y: 0,
											scale: 1,
											transition: {
												type: "spring",
												stiffness: 260,
												damping: 10,
											},
										}}
										exit={{ opacity: 0, y: 20, scale: 0.6 }}
										style={{
											translateX: translateX,
											rotate: rotate,
											whiteSpace: "nowrap",
										}}
										className="absolute -top-16 -left-1/4 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
									>
										<div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
										<div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
										<div className="font-bold text-white relative z-30 text-base">
											{ator.personagem}
										</div>
										<div className="text-white text-xs">{ator.nome}</div>
									</motion.div>
								)}
							</AnimatePresence>
							<div
								className={`h-24 w-24 rounded-full
                        border-2 border-white relative transtision duration-500
                        group-hover:scale-105 group-hover:z-30
                        `}
							>
								<ImagemComFallback
									url={ator.imagemPerfil}
									imgAlt={`Foto de ${ator.nome}`}
									className="rounded-full"
								>
									<Flex className="bg-black">
										<User className="w-10 h-10 text-gray-200" />
									</Flex>
								</ImagemComFallback>
							</div>
						</div>
					</Link>
				))}
			</Flex>
		</Container>
	);
}
