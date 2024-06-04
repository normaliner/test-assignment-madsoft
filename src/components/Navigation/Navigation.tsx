import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestionIndex } from '../../features/questionsSlice';
import { RootState } from '../../features/store/store';
import { INavigation } from '../../interfaces/questions';
import styles from './Navigation.module.scss';

const Navigation = ({ currentStep, totalSteps }: INavigation) => {
	const dispatch = useDispatch();
	const { answers } = useSelector((s: RootState) => s.questions);
	const handleClick = (index: number) => {
		dispatch(setQuestionIndex(index));
	};

	return (
		<div className='mb-6'>
			{Array.from({ length: totalSteps }).map((_, index) => (
				<button
					key={index}
					className={cn(styles.button, {
						[styles.buttonActive]: index == currentStep,
						[styles.buttonAnswered]: answers
							.map(({ id }) => id)
							.includes(index),
					})}
					onClick={() => handleClick(index)}
				></button>
			))}
		</div>
	);
};

export default Navigation;
