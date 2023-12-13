import { DropDown } from '../../../packages/cms-ui/src/components/DropDown/index';

const list = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
];

const TestPage = () => {
	return (
		<div>
			TestPage
			<DropDown list={list} colorTypes="blue" size="md" mainLabel="DropDown List" isIcon={true} />
		</div>
	);
};

export default TestPage;
