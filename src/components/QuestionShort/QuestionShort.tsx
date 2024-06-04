import { useAnswers } from '../../hooks/useAnswers';
import { IQuestionProps } from '../../interfaces/questions';

const QuestionShort = ({ title, onAnswer }: IQuestionProps) => {
	const [currentAnswer, handleChange] = useAnswers(onAnswer);
	return (
		<>
			<h3 className='text-lg font-semibold mb-7'>{title}</h3>
			<input
				className='w-full p-2 border border-gray-300 rounded mt-2 bg-white'
				type='text'
				onChange={handleChange}
				value={currentAnswer}
				placeholder='Введите ответ'
			/>
		</>
	);
};

export default QuestionShort;
