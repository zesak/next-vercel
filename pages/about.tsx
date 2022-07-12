import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
	return (
		<>
			<h1 className="title">About</h1>
			<span>Volver a <Link href="/">Home</Link></span>
		</>
	)
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<DarkLayout>
				{page}
			</DarkLayout>
		</MainLayout>
	)
}