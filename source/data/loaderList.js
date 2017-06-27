import ViewController from '~/view/viewController';
import history from '~/stores/history';

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
            }
        ]
    }
];

export default LoaderList;