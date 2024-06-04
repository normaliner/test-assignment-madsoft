import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementTime } from '../../features/questionsSlice';
import { RootState } from '../../features/store/store';
import { formatedTime } from '../../utils/formatedTime';

const Timer = () => {
	const dispatch = useDispatch();
	const remainingTime = useSelector(
		(s: RootState) => s.questions.remainingTime
	);

	useEffect(() => {
		const timer = setInterval(() => {
			dispatch(decrementTime());
		}, 1000);

		return () => clearInterval(timer);
	}, [dispatch]);

	return (
		<div className='border py-1 px-4 border-black text-lg'>
			{formatedTime(remainingTime)}
		</div>
	);
};

export default Timer;
