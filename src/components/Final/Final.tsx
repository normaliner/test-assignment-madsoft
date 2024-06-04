import { useDispatch } from 'react-redux';
import { resetState } from '../../features/questionsSlice';

const Final = () => {
	const dispatch = useDispatch();
	return (
		<div className='flex flex-col justify-center items-center w-full h-full gap-12'>
			<h1 className='text-red-600 text-5xl font-semibold'>Тест завершен!</h1>
			<button
				onClick={() => dispatch(resetState())}
				className='flex items-center justify-center border-none py-2 px-10 rounded-lg bg-red-600 text-white text-lg hover:bg-red-700'
			>
				Пройти еще раз
			</button>
		</div>
	);
};

export default Final;
