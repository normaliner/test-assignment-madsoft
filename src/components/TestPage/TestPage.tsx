import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	completeTest,
	nextQuestion,
	saveAnswer,
} from '../../features/questionsSlice';
import { RootState } from '../../features/store/store';
import { questions } from '../../utils/questions';
import Final from '../Final/Final';
import Navigation from '../Navigation/Navigation';
import Render from '../Render/Render';
import Timer from '../Timer/Timer';
import styles from './TestPage.module.scss';
const TestPage = () => {
	const dispatch = useDispatch();
	const { currentQuestionIndex, answers, isTestCompleted } = useSelector(
		(s: RootState) => s.questions
	);
	const [currentAnswer, setCurrentAnswer] = useState<string | string[]>('');

	useEffect(() => {
		if (answers.length === questions.length) {
			dispatch(completeTest());
		}
	}, [answers, dispatch]);

	const handleAnswer = (answer: string | string[]) => {
		setCurrentAnswer(answer);
	};

	const saveCurrentAnswer = () => {
		dispatch(
			saveAnswer({ questionIndex: currentQuestionIndex, answer: currentAnswer })
		);
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		saveCurrentAnswer();
		if (currentQuestionIndex < questions.length - 1) {
			dispatch(nextQuestion());
		}
	};

	const isAnswerSelected = () => {
		if (Array.isArray(currentAnswer)) {
			return currentAnswer.length > 0;
		}
		return currentAnswer.trim() !== '';
	};

	return (
		<div className={styles.wrapper}>
			{!isTestCompleted ? (
				<>
					<div className='flex gap-5 items-center mb-4'>
						<h1 className='text-2xl font-bold '>Тестирование</h1>
						<Timer />
					</div>
					<Navigation
						currentStep={currentQuestionIndex}
						totalSteps={questions.length}
					/>
					<Render
						question={questions[currentQuestionIndex]}
						onAnswer={handleAnswer}
					/>
					<button
						onClick={handleClick}
						className={cn(styles.button, {
							[styles.buttonAllowed]: isAnswerSelected(),
							[styles.buttonNotAllowed]: !isAnswerSelected(),
						})}
						disabled={!isAnswerSelected()}
					>
						Ответить
					</button>
				</>
			) : (
				<Final />
			)}
		</div>
	);
};

export default TestPage;
