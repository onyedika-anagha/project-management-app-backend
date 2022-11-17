import { useDispatch, useSelector } from "react-redux";
import { setCurrentProject } from "../../store/project/project.actions";
import { selectProject } from "../../store/project/project.selector";

const DeleteProject = () => {
  const project = useSelector(selectProject);
  const dispatch = useDispatch();
  const cancelDelete = () => {
    dispatch(setCurrentProject(null));
  };
  return (
    <div
      className="modal fade"
      id="deleteproject"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
        {project == null ? (
          <center>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </center>
        ) : (
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="deleteprojectLabel">
                {" "}
                Delete item Permanently?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body justify-content-center flex-column d-flex">
              <i className="icofont-ui-delete text-danger display-2 text-center mt-2" />
              <p className="mt-4 fs-5 text-center">
                You can only delete this item Permanently
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger color-fff">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteProject;
