import me from '@/app/avatar.jpg';

export const name = 'Вадим Белинович';
export const avatar = me;
export const about = () => {
	return (
		<>
			Здравствуйте! Меня зовут Вадим. Я Fullstack разработчик web приложений и сайтов. Делаю верстку сайта, написание логики js, разработку бэкенда и
			деплой приложения.
		</>
	);
};
export const bio = () => {
	return <>Я разрабатываю сайты.</>;
};
