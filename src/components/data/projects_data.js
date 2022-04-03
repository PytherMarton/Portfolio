import tesla from "../../assets/projects_images/tesla.png";
import reactCalc from "../../assets/projects_images/reactCalc.jpeg";
import dicegame from "../../assets/projects_images/dicegame.jpeg";
import builder from "../../assets/projects_images/builder.jpeg";
import portfolio from "../../assets/projects_images/portfolio.jpeg";
// import bestFriend from "../../assets/projects_images/bestFriend.jpeg";
import hackerTyper from "../../assets/projects_images/hackerTyper.png";
import chat from "../../assets/projects_images/chat.png"
import shoppingList from "../../assets/projects_images/shoppingList.png";
import color from "../../assets/projects_images/color.png";
import man from "../../assets/projects_images/man.png";

const data_projects = [
    {
        name: "Portfolio website",
        image: portfolio,
        deployed_url: "http://www.petermcodes.com",
        github_url: "https://github.com/PytherMarton/Portfolio",
        category: ['React']
    },
    {
        name: "Man & Van",
        image: man,
        deployed_url: "https://www.yourjunkexpress.com/",
        github_url: "https://github.com/PytherMarton/Tomi",
        category: ['HTML, CSS, JavaScript']
    },
    {
        name: "Chat App: - Username: 'Visitor' - Password: '123'",
        image: chat,
        deployed_url: "https://chatlif3.netlify.app",
        github_url: "https://github.com/PytherMarton/ChatApp",
        category: ['React']
    },
    {
        name: "Tesla landing page Clone",
        image: tesla,
        deployed_url: "https://pythermarton.github.io/Tesla-Clone/",
        github_url: "https://github.com/PytherMarton/Tesla-Clone",
        category: ['HTML', 'CSS']
    },
    {
        name: "Shopping List Handler",
        image: shoppingList,
        deployed_url: "https://shopping-list-handler.netlify.app/",
        github_url: "https://github.com/PytherMarton/Shopping-List",
        category: ['React']
    },
    {
        name: "Hacker Typer",
        image: hackerTyper,
        deployed_url: "https://pythermarton.github.io/HackerTyper/",
        github_url: "https://github.com/PytherMarton/HackerTyper",
        category: ['JavaScript']
    },
    {
        name: "Calculator with React",
        image: reactCalc,
        deployed_url: "https://pythermarton.github.io/Calculator-react/",
        github_url: "https://github.com/PytherMarton/Calculator-react",
        category: ['React']
    },
    {
        name: "Color generator",
        image: color,
        deployed_url: "https://color-generator-net.netlify.app/",
        github_url: "https://github.com/PytherMarton/Color-Generator",
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
        name: "Construction website (Hungarian)",
        image: builder,
        deployed_url: "https://pythermarton.github.io/Levi/",
        github_url: "https://github.com/PytherMarton/Levi",
        category: ['HTML', 'CSS']
    }
]

export default data_projects;