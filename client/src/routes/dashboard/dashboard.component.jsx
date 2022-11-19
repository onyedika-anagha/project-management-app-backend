import { Link, Route, Routes } from "react-router-dom";
import DashboardHome from "../../components/dashboard/dashboard-home.component";
import PageNotFound from "../../components/errors/404.component";
import Header from "../../components/header/header.component";
import AddUser from "../../components/modals/add-user.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Clients from "../clients/clients.component";
import Profile from "../profile/profile.component";
import Projects from "../projects/projects.component";

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
