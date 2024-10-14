function Search() {
    return (
      <>
      <section style={{ background: '#42987a' }}>
        <div className="container py-5 w-100">
          {/* Basic Input */}
          <div className="d-flex align-items-center justify-content-center w-100">
            <label htmlFor="basiInput" className="form-label">
              आवेदन की स्थिति:
            </label>
            <div className="d-flex align-items-center ms-2">
              <input
                type="text"
                placeholder="ग्राहक संख्या या मोबाईल नं. डालें"
                className="form-control inner_shado"
                id="basiInput"
                style={{ width: '500px' }}
              />
              <div className="login_btn w-100 ms-2">
                <button className="user_logon login">User login</button>
                <div className="btn_pointer"></div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </>
    );
  }
  
  export default Search;
  