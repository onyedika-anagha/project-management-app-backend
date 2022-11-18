import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import AddProject from "../../components/project/add-project.component";
import DeleteProject from "../../components/project/delete-project.component";
import EditProject from "../../components/project/edit-project.component";
import ProjectCard from "../../components/project/project-card.component";
import { PROJECT_STATUS_TYPES } from "../../utils/initial-state/states";
import { selectAllProjects } from "../../store/project/project.selector";
import { GET_PROJECTS, setProjects } from "../../store/project/project.actions";
import Preloader from "../../components/preloader/preloader.component";
import { alertMessage } from "../../utils/initial-state/initial-state";

const Projects = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_PROJECTS);
  useEffect(() => {
    if (data != null) {
      console.log("database: ", data.projects);
      dispatch(setProjects(data.projects));
    }
  }, [dispatch, data]);
  const projects = useSelector(selectAllProjects);

  const newProjects =
    projects != null
      ? projects.filter((i) => i.status === PROJECT_STATUS_TYPES.new)
      : [];
  const progress =
    projects != null
      ? projects.filter((i) => i.status === PROJECT_STATUS_TYPES.progress)
      : [];
  const approval =
    projects != null
      ? projects.filter((i) => i.status === PROJECT_STATUS_TYPES.approval)
      : [];
  const completed =
    projects != null
      ? projects.filter((i) => i.status === PROJECT_STATUS_TYPES.completed)
      : [];
  if (loading) return <Preloader />;
  if (error) {
    console.log("error: ", error);
    alertMessage("error", "Something went wrong");

    return <Preloader />;
  }
  return (
    <>
      {/* Body: Body */}
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold py-3 mb-0">Projects</h3>
                <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
                  <button
                    type="button"
                    className="btn btn-dark w-sm-100"
                    data-bs-toggle="modal"
                    data-bs-target="#createproject"
                  >
                    <i className="icofont-plus-circle me-2 fs-6" />
                    Create Project
                  </button>
                  <ul
                    className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#All-list"
                        role="tab"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Pending-list"
                        role="tab"
                      >
                        Pending
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Started-list"
                        role="tab"
                      >
                        Started
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Approval-list"
                        role="tab"
                      >
                        Approval
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Completed-list"
                        role="tab"
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Row end  */}
          {projects != null && (
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 flex-column">
                <div className="tab-content mt-4">
                  <div className="tab-pane fade show active" id="All-list">
                    <div className="row g-3 gy-5 py-3 row-deck">
                      {projects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                      ))}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Pending-list">
                    <div className="row g-3 gy-5 py-3 row-deck">
                      {newProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Started-list">
                    <div className="row g-3 gy-5 py-3 row-deck">
                      {progress.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                      ))}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Approval-list">
                    <div className="row g-3 gy-5 py-3 row-deck">
                      {approval.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                      ))}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Completed-list">
                    <div className="row g-3 gy-5 py-3 row-deck">
                      {completed.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <AddProject />
      <EditProject />
      <DeleteProject />
    </>
  );
};

export default Projects;
