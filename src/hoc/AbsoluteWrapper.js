import React from 'react';

const style = {
    position: 'absolute',
    width: '100%',
    minHeight: '100vh'
}

const AbsoluteWrapper = ({children}) => (
    <div style={style}>{children}</div>
);

export default AbsoluteWrapper;