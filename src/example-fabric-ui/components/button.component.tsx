import React from 'react';

// Fabric UI Components
import { PrimaryButton, IButtonProps } from '../../../node_modules/office-ui-fabric-react/lib/Button';

const root = document.getElementById('root');

export class ButtonPrimaryExample extends React.Component<IButtonProps, {}> {
  public render() {
    let { disabled } = this.props;

    return (
      <div className='ms-BasicButtonsExample'>
        <div>
         <PrimaryButton
          data-automation-id='test'
          disabled={ disabled }
          text='Create account'
          onClick={ () => alert('Clicked') }
        />
        </div>
      </div>
    );
  }
}