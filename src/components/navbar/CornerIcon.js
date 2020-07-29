import React from 'react'
import { Icon } from 'semantic-ui-react';

const CornerIcon = ({mainIcon, cornerIcon, cornerIconColor}) => (
  
    <React.Fragment>
      <Icon.Group size='big'>
        <Icon name={mainIcon} style={{color:"#ffffff"}} />
        <Icon corner='top right' name={cornerIcon} color={cornerIconColor}/>
      </Icon.Group>
    </React.Fragment>
  )
  
  export default CornerIcon
  