export function formatTimestamp(
	input: string | number | Date | null | undefined,
): string {
	if (input === null || input === undefined || input === "") return "";
	if (typeof input === "number" && Number.isNaN(input)) return "";

	const date = input instanceof Date ? input : new Date(input);
	if (Number.isNaN(date.getTime())) return "";

	return date.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
}
