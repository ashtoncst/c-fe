import { ReactNode } from "react";

export type ProductLink = {
	name: string;
	url?: string | null;
};

function findMatch(name: string, products?: ProductLink[]): ProductLink | null {
	if (!products?.length) return null;
	const lowered = name.toLowerCase().trim();
	return (
		products.find((p) => p.name.toLowerCase().trim() === lowered) ?? null
	);
}

export function parseMarkdownBold(
	text: string,
	products?: ProductLink[],
): ReactNode[] {
	if (!text) return [];
	const parts = text.split(/(\*\*.*?\*\*)/g);
	return parts.map((part, index) => {
		if (part.startsWith("**") && part.endsWith("**")) {
			const inner = part.slice(2, -2);
			const strong = (
				<strong key={`strong-${index}`} className="font-semibold">
					{inner}
				</strong>
			);
			const match = findMatch(inner, products);
			if (match?.url) {
				return (
					<a
						key={index}
						href={match.url}
						target="_blank"
						rel="noopener noreferrer"
						className="underline decoration-[#8638E5]/40 underline-offset-2 hover:decoration-[#8638E5] transition-colors"
					>
						{strong}
					</a>
				);
			}
			return (
				<span key={index}>
					{strong}
				</span>
			);
		}
		return <span key={index}>{part}</span>;
	});
}
