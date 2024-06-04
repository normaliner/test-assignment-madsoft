import { IQuestion, KindsOfTypes } from '../interfaces/questions'


export const questions: IQuestion[] = [
	{
		type: KindsOfTypes.multiple,
		title: 'Какие из перечисленных языков являются языками программирования?',
		options: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
	},
	{
		type: KindsOfTypes.single,
		title:
			'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
		options: [
			'HTML, CSS и JavaScript',
			'Kotlin, PHP и JavaScript',
			'PHP, HTML и CSS',
		],
	},
	{
		type: KindsOfTypes.short,
		title: 'Какой ваш любимый язык программирования?',
		options: [],
	},
	{
		type: KindsOfTypes.long,
		title: 'Расскажите о своем опыте работы с языком программирования',
		options: [],
	},
	{
		type: KindsOfTypes.multiple,
		title: 'Какие фреймворки вы использовали в своих проектах?',
		options: ['React', 'Angular', 'Vue', 'Svelte', 'Ember'],
	},
	{
		type: KindsOfTypes.single,
		title: 'Какой метод HTTP используется для получения данных с сервера?',
		options: ['GET', 'POST', 'PUT', 'DELETE'],
	},
	{
		type: KindsOfTypes.short,
		title: 'Какой ваш уровень владения JavaScript?',
		options: [],
	},
	{
		type: KindsOfTypes.long,
		title: 'Опишите ваш последний проект и технологии, которые вы использовали',
		options: [],
	},
	{
		type: KindsOfTypes.multiple,
		title: 'Какие инструменты для сборки проектов вы использовали?',
		options: ['Webpack', 'Gulp', 'Grunt', 'Parcel', 'Rollup'],
	},
	{
		type: KindsOfTypes.single,
		title: 'Что из перечисленного является системой управления версиями?',
		options: ['Git', 'SVN', 'Mercurial', 'Perforce'],
	},
	{
		type: KindsOfTypes.short,
		title: 'Как вы оцениваете свои навыки работы с CSS?',
		options: [],
	},
	{
		type: KindsOfTypes.long,
		title: 'Расскажите о своем опыте работы в команде',
		options: [],
	},
];
