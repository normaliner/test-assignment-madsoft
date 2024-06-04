import { IRender, KindsOfTypes } from '../../interfaces/questions';
import QuestionLong from '../QuestionLong/QuestionLong';
import QuestionMultiple from '../QuestionMultiple/QuestionMultiple';
import QuestionShort from '../QuestionShort/QuestionShort';
import QuestionSingle from '../QuestionSingle/QuestionSingle';


const Render = ({ question, onAnswer }: IRender) => {
	switch (question.type) {
		case KindsOfTypes.single:
			return <QuestionSingle {...question} onAnswer={onAnswer} />;
		case KindsOfTypes.multiple:
			return <QuestionMultiple {...question} onAnswer={onAnswer} />;
		case KindsOfTypes.short:
			return <QuestionShort {...question} onAnswer={onAnswer} />;
		case KindsOfTypes.long:
			return <QuestionLong {...question} onAnswer={onAnswer} />;
		default:
			return null;
	}
};

export default Render;
