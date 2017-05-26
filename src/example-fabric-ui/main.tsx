import React from 'react';
import ReactDOM from 'react-dom';

// Import all Fabric UI Components
import { ButtonPrimaryExample } from './components/button.component';
import { CommandBarBasicExample } from './components/commandbar.component';

const root = document.getElementById('root');

var items = [{ name: "New", iconProps: "Add" }];

const Main = () => {
    return (
        <div>
            <ButtonPrimaryExample />
            <CommandBarBasicExample items={items} farItems={items}/>
        </div>
    )
}

ReactDOM.render(<Main />, root);