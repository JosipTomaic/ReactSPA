import * as React from 'react';
import { ErrorPagesTexts } from '../enums';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const PageAlreadyRedeemed  = () => {
    return (
        <div>
            <h2>{ErrorPagesTexts.PageAlreadyRedeemed}</h2>
            <Link to="/"><Button>Go back to main page</Button></Link>
        </div>
    );    
};