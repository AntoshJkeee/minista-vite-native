export const metadata = {
	title: 'List Pages',
	draft: true,
	listPages: true,
}

const pageNames = [
	{url: '', name: 'Главная'},
	{url: 'movie', name: 'Фильм'},
	{url: 'movies', name: 'Фильмы'},
	{url: 'show', name: 'Сериалы'},
	{url: 'subscriptions', name: 'Подписки'},
	{url: 'support', name: 'Поддержка'},
	{url: 'settings/user', name: 'Настройки пользователя'},
]

export default () => {
	return (
		<>
			<ul>
				{pageNames.map(({url, name}, idx) => (
					<li key={idx}><a href={`/${url}`}>{name}</a></li>
				))}
			</ul>
		</>
	)
}
