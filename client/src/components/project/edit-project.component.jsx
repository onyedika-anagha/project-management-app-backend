import { useSelector } from "react-redux";
import { selectProject } from "../../store/project/project.selector";
const EditProject = () => {
  const project = useSelector(selectProject);

  return project == null ? (
    <center>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  ) : (
    <div
      className="modal fade"
      id="editproject"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="editprojectLabel">
              {" "}
              Edit Project
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <input type="hidden" defaultValue={project.id} name="id" />
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput78" className="form-label">
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput78"
                defaultValue={project.name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Project Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">UI/UX Design</option>
                <option value={1}>Website Design</option>
                <option value={2}>App Development</option>
                <option value={3}>Quality Assurance</option>
                <option value={4}>Development</option>
                <option value={5}>Backend Development</option>
                <option value={6}>Software Testing</option>
                <option value={7}>Website Design</option>
                <option value={8}>Marketing</option>
                <option value={9}>SEO</option>
                <option value={10}>Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="formFileMultiple456" className="form-label">
                Project Images &amp; Document
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultiple456"
              />
            </div>
            <div className="deadline-form">
              <form>
                <div className="row g-3 mb-3">
                  <div className="col">
                    <label htmlFor="datepickerded123" className="form-label">
                      Project Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="datepickerded123"
                      defaultValue="2021-01-10"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="datepickerded456" className="form-label">
                      Project End Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="datepickerded456"
                      defaultValue="2021-04-10"
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-sm-12">
                    <label className="form-label">Notifation Sent</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">All</option>
                      <option value={1}>Team Leader Only</option>
                      <option value={2}>Team Member Only</option>
                    </select>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="formFileMultipleone" className="form-label">
                      Task Assign Person
                    </label>
                    <select
                      className="form-select"
                      multiple=""
                      aria-label="Default select Priority"
                    >
                      <option selected="">Lucinda Massey</option>
                      <option selected="" value={1}>
                        Ryan Nolan
                      </option>
                      <option selected="" value={2}>
                        Oliver Black
                      </option>
                      <option selected="" value={3}>
                        Adam Walker
                      </option>
                      <option selected="" value={4}>
                        Brian Skinner
                      </option>
                      <option value={5}>Dan Short</option>
                      <option value={5}>Jack Glover</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-sm">
                <label htmlFor="formFileMultipleone" className="form-label">
                  Priority
                </label>
                <select
                  className="form-select"
                  aria-label="Default select Priority"
                >
                  <option selected="">Medium</option>
                  <option value={1}>Highest</option>
                  <option value={2}>Low</option>
                  <option value={3}>Lowest</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea786"
                className="form-label"
              >
                Description (optional)
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea786"
                rows={3}
                defaultValue={project.description}
                name="description"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Done
            </button>
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
