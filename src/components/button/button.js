import React from 'react';
import './button.css';
/*
    I Used this tutorial for this testing buttom
    https://www.youtube.com/watch?v=3e1GHCA3GP0
*/
function Button({label}){
    return <button type="submit" data-testid="button" className="button-style">{label}</button>
}

export default Button;