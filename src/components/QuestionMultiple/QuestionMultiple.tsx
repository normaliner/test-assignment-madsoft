import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store/store';
import { IQuestionProps } from '../../interfaces/questions';

const QuestionMultiple = ({ title, options, onAnswer }: IQuestionProps) => {
	const { currentQuestionIndex, answers } = useSelector(
		(s: RootState) => s.questions
	);

	const [currentAnswer, setCurrentAnswer] = useState(
		answers.find(el => el.id === currentQuestionIndex)?.result || []
	);

	useEffect(() => {
		if (currentAnswer) {
			onAnswer(currentAnswer);
		}
	}, [currentAnswer, onAnswer]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setCurrentAnswer(prev => {
			const arr = prev as string[];
			if (arr.includes(value)) {
				return arr.filter(option => option !== value);
			} else {
				return [...arr, value];
			}
		});
	};
	return (
		<>
			<h3 className='text-xl font-semibold mb-7'>{title}</h3>
			{options.map(option => (
				<div className='flex items-center mb-2' key={option}>
					<label className='flex items-center cursor-pointer'>
						<input
							className='mr-2  accent-red-600 w-4 h-4'
							type='checkbox'
							name='option'
							value={option}
							checked={currentAnswer.includes(option)}
							onChange={handleChange}
						/>
						<span className='text-xl'>{option}</span>
					</label>
				</div>
			))}
		</>
	);
};

export default QuestionMultiple;
