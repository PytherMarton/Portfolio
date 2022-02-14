import tesla from "../../assets/projects_images/tesla.jpeg";
import reactCalc from "../../assets/projects_images/reactCalc.jpeg";
import dicegame from "../../assets/projects_images/dicegame.jpeg";
import builder from "../../assets/projects_images/builder.jpeg";
import portfolio from "../../assets/projects_images/portfolio.jpeg";
import bestFriend from "../../assets/projects_images/bestFriend.jpeg";

const data_projects = [
    {
        name: "Portfolio website",
        image: portfolio,
        deployed_url: "https://pythermarton.github.io/Tesla-Clone/",
        github_url: "https://github.com/PytherMarton/Portfolio",
        category: ['React']
    },
    {
        name: "Cloning Tesla's landing page",
        image: tesla,
        deployed_url: "https://pythermarton.github.io/Tesla-Clone/",
        github_url: "https://github.com/PytherMarton/Tesla-Clone",
        category: ['HTML', 'CSS']
    },
    {
        name: "Calculator with React",
        image: reactCalc,
        deployed_url: "https://pythermarton.github.io/Calculator-react/",
        github_url: "https://github.com/PytherMarton/Calculator-react",
        category: ['React']
    },
    {
        name: "Dicegame",
        image: dicegame,
        deployed_url: "https://pythermarton.github.io/Dicegame/",
        github_url: "https://github.com/PytherMarton/Dicegame",
        category: ['JavaScript', 'HTML', 'CSS']
    },
    {
        name: "A builder website in Hungarian",
        image: builder,
        deployed_url: "https://pythermarton.github.io/Levi/",
        github_url: "https://github.com/PytherMarton/Levi",
        category: ['HTML', 'CSS']
    },
    {
        name: "Best Friend finder",
        image: bestFriend,
        deployed_url: "https://best-friend-finder.netlify.app/",
        github_url: "https://github.com/PytherMarton/Full-stack-FE",
        category: ['React']
    }
]

export default data_projects;