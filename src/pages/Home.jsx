import Header from "../components/Header";
import AddProjectForm from "../components/AddProjectForm";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddProjectForm />
      <SearchBar />
      <ProjectList />
    </div>
  );
};

export default Home;