import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function withRouter(WrappedComponent) {
    function Hoc(props) {
        const params = useParams();
        const navigate = useNavigate();
        return (
            <WrappedComponent {...props} params={params} navigate={navigate} />
        )
    }
    return Hoc;
}

export default withRouter;