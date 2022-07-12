import { CSSProperties, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const style:CSSProperties = {
	backgroundColor: '#0070f3',
	color: '#FFF'
}

interface Props {
	text: string,
	href: string
}


export const ActiveLink:FC<Props> = ({ text, href}) => {

	const {asPath} = useRouter();

	return (
		<Link href={href}>
			<a style={href == asPath ? style : undefined}>{text}</a>
		</Link>
	)
}
