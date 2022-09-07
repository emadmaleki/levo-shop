import React from 'react';

const Helmet = ({title,children}) => {
    document.title = 'levo - ' + title;
    return ( 
        <>
            {children}
        </>
     );
}
 
export default Helmet;