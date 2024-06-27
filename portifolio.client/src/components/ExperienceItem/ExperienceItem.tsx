import './ExperienceItem.css';

interface HeaderProps {
    role: string,
    company: string,
    description: string
    iconSource: string | undefined
}

const ExperienceItem: React.FC<HeaderProps> = ({ role, company, description, iconSource }) => {
    return (
        <div className="experience-item">
            <div className="timeline"></div>
            <img className="role-icon" src={iconSource} alt="icon"></img>
            <div className="text-content">
                <div className="job-info">
                    <h1>{role}</h1>
                    <h2>{company}</h2>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ExperienceItem;
