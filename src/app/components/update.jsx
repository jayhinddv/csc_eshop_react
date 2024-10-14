// Import the image
import aaImage from '../../assets/image/aa.jpg';


function Update() {
  return (
    <>
      <div className="container pt-1">
        <div className="row d-flex justify-content-center align-items-center my-4">
          <div className="d-flex justify-content-center align-items-center mx-auto">
            <h1 className="text-center heading">Latest Updates</h1>
          </div>
        </div>

        <div className="row py-2">
          <div className="col-md-6">
            <div className="scroll-container" onMouseOver={(e) => e.target.classList.add('paused')} onMouseOut={(e) => e.target.classList.remove('paused')}>
              <div className="scroll-content">
                <h1>Welcome to the Marquee</h1>
                <p>This is some scrolling content.</p>
                <p>Hover over to stop the scroll.</p>
                <p>Move your mouse away to start it again.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={aaImage} width="100%" alt="Update Illustration" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
