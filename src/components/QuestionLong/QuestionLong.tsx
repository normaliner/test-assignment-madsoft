import { useAnswers } from '../../hooks/useAnswers';
import { IQuestionProps } from '../../interfaces/questions';

const QuestionLong = ({ title, onAnswer }: IQuestionProps) => {
	const [currentAnswer, handleChange] = useAnswers(onAnswer);
	return (
		<>
			<h3 className='text-lg font-semibold mb-7'>{title}</h3>
			<textarea
				className='w-full p-2 border border-gray-300 rounded mt-2 bg-white resize-none h-48'
				name='textarea'
				placeholder='Введите развернутый ответ'
				onChange={handleChange}
				value={currentAnswer}
			></textarea>
		</>
	);
};

export default QuestionLong;
