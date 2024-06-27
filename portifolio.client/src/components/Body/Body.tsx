import './Body.css';

interface HeaderProps {
    children: JSX.Element;
}

const Body: React.FC<HeaderProps> = ({ children }) => {
    return (
        <div className="body">
            { children }
        </div>
    );
}

export default Body;
