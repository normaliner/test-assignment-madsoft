import { useAnswers } from '../../hooks/useAnswers';
import { IQuestionProps } from '../../interfaces/questions';

const QuestionSingle = ({ title, options, onAnswer }: IQuestionProps) => {
	const [currentAnswer, handleChange] = useAnswers(onAnswer);

	return (
		<>
			<h3 className='text-lg font-semibold mb-7'>{title}</h3>
			{options.map(option => (
				<div className='mb-3' key={option}>
					<label className='flex items-center cursor-pointer '>
						<input
							className='mr-2 accent-red-600 w-4 h-4'
							type='radio'
							name='option'
							value={option}
							checked={option === currentAnswer}
							onChange={handleChange}
						/>
						<span className='text-xl'> {option}</span>
					</label>
				</div>
			))}
		</>
	);
};

export default QuestionSingle;
