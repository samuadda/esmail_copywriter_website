export const metadata = {
	title: "إدارة المحتوى — إسماعيل إبراهيم",
};

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ar">
			<body style={{ margin: 0 }}>{children}</body>
		</html>
	);
}
