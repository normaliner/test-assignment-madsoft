export interface IQuestionProps {
	title: string;
	options: string[];
	onAnswer: (answer: string | string[]) => void;
}

export interface INavigation {
	currentStep: number;
	totalSteps: number;
}

export interface IRender {
	question: IQuestion;
	onAnswer: (answer: string | string[]) => void;
}

export enum KindsOfTypes {
	single = 'single',
	multiple = 'multiple',
	short = 'short',
	long = 'long',
}

export interface IQuestion {
	type: KindsOfTypes;
	title: string;
	options: string[];
}

export type TAnswer = {
	id: number;
	result: string | string[];
};

export interface IInitialState {
	currentQuestionIndex: number;
	answers: TAnswer[];
	isTestCompleted: boolean;
	remainingTime: number;
}
