import { FC } from 'react';
interface Props {
	children: React.ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
	<section style={{backgroundColor: '#DDD'}}>
		<strong>Usando DarkLayout</strong>
		{children}
	</section>
  )
}
