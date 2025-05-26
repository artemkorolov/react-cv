import './App.css';
import cvData from './data/cvData.json';
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar
        profile={cvData.profile}
        contact={cvData.contact}
        skills={cvData.skills}
        social={cvData.social}
        certificates={cvData.certificates}
      />
      <MainContent
        about={cvData.about}
        experience={cvData.experience}
        projects={cvData.projects}
        education={cvData.education}
      />
    </div>
  )
}

export default App;