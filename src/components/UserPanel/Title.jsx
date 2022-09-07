import React from 'react';

const Title = ({children}) => {
    return ( 
        <section className='ump-title'>
            <h2>
                {children}
            </h2>
        </section>
     );
}
 
export default Title;