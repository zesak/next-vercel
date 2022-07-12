import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
export default function Home() {
	return (
		<MainLayout>
			<h1 className="title">Contact</h1>
			<span>Volver a <Link href="/">Home</Link></span>
		</MainLayout>		
	)
}
