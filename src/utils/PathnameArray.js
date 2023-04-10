import { useLocation } from 'react-router-dom';

const PathnameArray = () => {
    const location = useLocation();
    let pathnameArray = location.pathname.split('/');
    pathnameArray.shift();
    return pathnameArray;
}

export default PathnameArray;