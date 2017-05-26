import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld';

const root = document.getElementById('root');

class Main extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

	public render() {
		return (
            <div>
              <HelloWorld defaultName='World' />
            </div>
        );
	}
}

ReactDOM.render(<Main />, root);