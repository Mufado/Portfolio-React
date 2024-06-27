import ExperienceItem from '../ExperienceItem/ExperienceItem.tsx';
import softarchIcon from '../../assets/softarch.png';
import csharpIcon from '../../assets/csharp.png';
import reactIcon from '../../assets/react.png';
import './WebDevPage.css';

const WebDevPage: React.FC = () => {
    const experiences = [
        {
            role: "Software Architect",
            company: "FitBank (09/2023 - 02/2024)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros turpis, hendrerit volutpat ultrices vel, tincidunt eget quam. Pellentesque a auctor tortor. Vivamus varius leo elit, et aliquam risus fermentum in. Cras a dolor enim. Maecenas a eros justo. Suspendisse aliquet rhoncus lorem, quis auctor neque sodales eu. Quisque lorem lacus, pellentesque nec nunc congue, faucibus dignissim magna.",
            iconSource: softarchIcon
        },
        {
            role: ".NET Developer",
            company: "FitBank (01/2022 - 09/2023)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros turpis, hendrerit volutpat ultrices vel, tincidunt eget quam. Pellentesque a auctor tortor. Vivamus varius leo elit, et aliquam risus fermentum in. Cras a dolor enim. Maecenas a eros justo. Suspendisse aliquet rhoncus lorem, quis auctor neque sodales eu. Quisque lorem lacus, pellentesque nec nunc congue, faucibus dignissim magna.",
            iconSource: csharpIcon
        },
        {
            role: "React Developer",
            company: "FASTEF Project (10/2021 - 12/2021)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros turpis, hendrerit volutpat ultrices vel, tincidunt eget quam. Pellentesque a auctor tortor. Vivamus varius leo elit, et aliquam risus fermentum in. Cras a dolor enim. Maecenas a eros justo. Suspendisse aliquet rhoncus lorem, quis auctor neque sodales eu. Quisque lorem lacus, pellentesque nec nunc congue, faucibus dignissim magna.",
            iconSource: reactIcon
        }
    ];

    return (
        <div className="webdev-page">
            {experiences.map((exp, index) => (
                <ExperienceItem
                    key={index}
                    role={exp.role}
                    company={exp.company}
                    description={exp.description}
                    iconSource={exp.iconSource}
                />
            ))}
        </div>
    );
}

export default WebDevPage;
