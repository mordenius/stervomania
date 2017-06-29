import ViewController from '~/view/viewController';
import history from '~/stores/history';
import WheelController from '~/controllers/wheelController';

const LoaderList = [
    {
        step: 0,
        isLoaded: false,
        parts: [
            {
                name: "history",
                type: "data",
                controller: history,
                params: [],
                isLoaded: false
            },
            {
                name: "view",
                type: "class",
                controller: ViewController,
                params: ['history'],
                isLoaded: false
            },
			{
				name: "wheel",
				type: "class",
				controller: WheelController,
				params: ['history', 'view'],
				isLoaded: false
			}
        ]
    }
];

export default LoaderList;