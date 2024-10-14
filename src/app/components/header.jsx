
import logo from '../../assets/image/logocsc1.png';

function Header() {
  return (
    <>
      <div className="header p-2">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="logo_wrapper">
              <img src={logo} alt="" />
            </div>
            <nav className="mx-auto">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li className="subMenu_wrapper">
                  <a href="#" className="text-center">Services<i className="fa-solid fa-angle-down m-0 p-0 ms-2"></i></a>
                  <div className="subMenu d-flex px-4" style={{ paddingBottom: '25px', paddingTop: '10px' }}>
                    <ul className="d-flex flex-column">
                      <li id="ajn">
                        <a href="#" className="active">आय जाति निवास</a>
                      </li>
                      <li id="ajn"><a href="#">पैन कार्ड</a></li>
                      <li id="ajn"><a href="#">राशन कार्ड</a></li>
                      <li id="ajn"><a href="#">पेंशन आनलाईन</a></li>
                      <li id="ajn"><a href="#">फोटो कापी</a></li>
                    </ul>
                    <ul className="d-flex flex-column ms-5">
                      <li id="ajn"><a href="#">पासपोर्ट</a></li>
                      <li id="ajn"><a href="#">रेलवे टिकट</a></li>
                      <li id="ajn"><a href="#">CCC फार्म</a></li>
                      <li id="ajn"><a href="#">ई-मेल</a></li>
                      <li id="ajn"><a href="#">टाईपिंग</a></li>
                    </ul>
                    <ul className="d-flex flex-column ms-5">
                      <li id="ajn"><a href="#">लेमिनेशन</a></li>
                      <li id="ajn"><a href="#">आधार प्रिन्टिंग</a></li>
                      <li id="ajn"><a href="#">खतौनी</a></li>
                      <li id="ajn"><a href="#">आधार ATM</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="login_btn">
              <button className="user_logon">User login</button>
              <div className="btn_pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
