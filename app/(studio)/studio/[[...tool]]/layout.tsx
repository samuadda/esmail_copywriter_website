export const metadata = {
	title: "إدارة المحتوى — إسماعيل إبراهيم",
};

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div style={{ margin: 0 }}>{children}</div>;
}
