import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store/store';

export const useAnswers = (onAnswer: (answer: string) => void) => {
	const { currentQuestionIndex, answers } = useSelector(
		(s: RootState) => s.questions
	);

	const [currentAnswer, setCurrentAnswer] = useState(
		(answers.find(el => el.id === currentQuestionIndex)?.result || '') as string
	);

	useEffect(() => {
		if (currentAnswer) {
			onAnswer(currentAnswer);
		}
	}, [currentAnswer, onAnswer]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const value = e.target.value;

		setCurrentAnswer(value);
	};

	return [currentAnswer, handleChange] as const;
};
