import { useDispatch, useSelector } from "react-redux";
import { createSetCurrentClient } from "../../store/client/client.actions";
import { selectClient } from "../../store/client/client.selector";

const EditClient = () => {
  const client = useSelector(selectClient);
  const dispatch = useDispatch();
  const cancelEdit = () => {
    dispatch(createSetCurrentClient(null));
  };

  return (
    <div
      className="modal fade"
      id="editproject"
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold" id="createprojectlLabelone">
              {" "}
              Edit Client
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {client == null ? (
            <center>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </center>
          ) : (
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput8777"
                  className="form-label"
                >
                  Client Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput8777"
                  defaultValue={client.name}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput9777"
                  className="form-label"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput9777"
                  defaultValue="AgilSoft Tech"
                />
              </div>
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput1777"
                        className="form-label"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1777"
                        defaultValue="User123"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput2777"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="Password"
                        className="form-control"
                        id="exampleFormControlInput2777"
                        defaultValue="********"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput4777"
                        className="form-label"
                      >
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput4777"
                        placeholder="ryanogden@gmail.com"
                        defaultValue={client.email}
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput7777"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput7777"
                        defaultValue={client.phone}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea787"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea787"
                  rows={3}
                  defaultValue={
                    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
                  }
                />
              </div>
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Project Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">Projects</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault117"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault127"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault37"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault47"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault57"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault67"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Tasks</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault77"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault87"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault97"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault107"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault1179"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault1279"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Chat</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault137"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault147"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault157"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault167"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault177"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault187"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Estimates</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault197"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault207"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault217"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault227"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault237"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault247"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Invoices</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault257"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault267"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault277"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault287"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault297"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault307"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Timing Sheets</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault317"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault327"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault337"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault347"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault357"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault367"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={cancelEdit}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClient;
