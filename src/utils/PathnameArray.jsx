import { useLocation } from 'react-router-dom';

const PathnameArray = () => {
    const location = useLocation();
    let pathnameArray = location.pathname.split('/').filter((item) => item !== '');
    return pathnameArray;
}

export default PathnameArray;