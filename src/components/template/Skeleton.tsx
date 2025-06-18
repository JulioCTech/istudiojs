import mergeClasses from "@/utils/mergeClasses";

interface SkeletonProps {
	className: string;
}

export default function Skeleton({ className }: SkeletonProps) {
	return (
		<div
			className={mergeClasses("bg-green-js/60 animate-pulse", className)}
		></div>
	);
}
