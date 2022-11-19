import { Link, Route, Routes } from "react-router-dom";
import DashboardHome from "../../components/dashboard/dashboard-home.component";
import Header from "../../components/header/header.component";
import AddUser from "../../components/modals/add-user.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Clients from "../clients/clients.component";
import Profile from "../profile/profile.component";
import Projects from "../projects/projects.component";

const PageNotFound = () => {
  return (
    <>
      <div className="div-block-440"></div>
      <div className="header _404_div wf-section">
        <div className="div-block-442 header_home_strategy">
          <div className="div-block-441 text_404">
            <h1 className="heading_h2">OOPS!</h1>
            <h1 className="paragraph-3 _404_paragraph">
              You’ve found our inspiration secret weapon… a pink flamingo.
              <strong>
                <br />
              </strong>
            </h1>
            <Link to="/dashboard" className="button-8 w-button">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <div id="mytask-layout" className="theme-indigo">
      <Sidebar />
      {/* main body area */}
      <div className="main px-lg-4 px-md-4">
        <Header />
        {/* Body: Body */}
        <Routes>
          <Route path="/">
            <Route index element={<DashboardHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
        {/* Modal Members*/}
        <AddUser />
      </div>
    </div>
  );
};

export default Dashboard;
