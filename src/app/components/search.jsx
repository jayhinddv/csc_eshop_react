function Search() {
  // const mobileInputRef = useRef(null); // Reference for the mobile number input field
  // const [error, setError] = useState(null);
  // const navigate = useNavigate();

  // const handleSubmit = async () => {
  //   const mobileNumber = mobileInputRef.current.value; // Get the value directly from the input field

  //   try {
  //     // Make an API call with the mobile number
  //     const response = await axios.get(`https://api.cscsohnag.in/api/v1/get-note`, {
  //       params: { mobileNumber },
  //     });

  //     // Check if the response is successful
  //     if (response.status === 200 && response.data) {
  //       // Navigate to the results page and pass the data
  //       navigate('/results', { state: { data: response.data } });
  //     } else {
  //       setError('Unable to fetch data. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setError('An error occurred. Please try again.');
  //   }
  // };
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
                placeholder="मोबाईल नं. डालें"
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
  