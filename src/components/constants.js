import htmlLogo from '../assets/logo/html.png';
import cssLogo from '../assets/logo/css.png';
import jsLogo from '../assets/logo/js.png';
import reactLogo from '../assets/logo/react (2).png';
import phpLogo from '../assets/logo/php.png';
import mysqlLogo from '../assets/logo/mysql.png';
import jqueryLogo from '../assets/logo/jquery.png';
import mongoLogo from '../assets/logo/mongo.png';
import gitLogo from '../assets/logo/git (2).png';
import dockerLogo from '../assets/logo/docker.png';
import azureLogo from '../assets/logo/azure.png';


const SkillInfo = [
    {
        title : 'Frontend',
        skills : [
            {name : 'HTML', logo: htmlLogo},
            {name : 'CSS', logo: cssLogo},
            {name : 'JS', logo: jsLogo},
            {name : 'React.js', logo: reactLogo}
        ]
    },
    {
        title : 'Backend',
        skills : [
            {name : 'PHP', logo: phpLogo },
            {name : 'MySQL', logo: mysqlLogo},
            {name : 'Jquery', logo: jqueryLogo},
            {name : 'MongoDB', logo: mongoLogo}
        ]
    },
    {
        title : 'Deployment',
        skills : [
            {name : 'Git', logo: gitLogo},
            {name : 'Docker', logo: dockerLogo},
            {name : 'Azure', logo: azureLogo}
        ]
    }
]

export default SkillInfo;