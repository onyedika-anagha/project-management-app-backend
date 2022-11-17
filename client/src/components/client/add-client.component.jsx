const AddClient = () => {
  return (
    <>
      {/* Create Client*/}
      <div
        className="modal fade"
        id="createproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="createprojectlLabel">
                {" "}
                Add Client
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput877"
                  className="form-label"
                >
                  Client Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput877"
                  placeholder="Explain what the Project Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput977"
                  className="form-label"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput977"
                  placeholder="Explain what the Project Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFileMultipleoneone" className="form-label">
                  Profile Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultipleoneone"
                />
              </div>
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput177"
                        className="form-label"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput177"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput277"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="Password"
                        className="form-control"
                        id="exampleFormControlInput277"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput477"
                        className="form-label"
                      >
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput477"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput777"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput777"
                        placeholder="User Name"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea78"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea78"
                  rows={3}
                  placeholder="Add any extra details about the request"
                  defaultValue={""}
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
                          id="flexCheckDefault1"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault2"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault3"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault4"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault5"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault6"
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
                          id="flexCheckDefault7"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault8"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault9"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault10"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault11"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault12"
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
                          id="flexCheckDefault13"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault14"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault15"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault16"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault17"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault18"
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
                          id="flexCheckDefault19"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault20"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault21"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault22"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault23"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault24"
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
                          id="flexCheckDefault25"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault26"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault27"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault28"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault29"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault30"
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
                          id="flexCheckDefault31"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault32"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault33"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault34"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault35"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault36"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
    </>
  );
};

export default AddClient;
