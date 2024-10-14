function ContactUs() {
    return (
      <>
        <div className="container pt-2">
          <div className="row d-flex justify-content-center align-items-center my-4">
            <div className="d-flex justify-content-center align-items-center mx-auto">
              <h1 className="text-center heading">Contact Us</h1>
            </div>
          </div>
  
          <div className="row py-3 contact_wrapper">
            {/* Contact Form */}
            <div className="col-md-6">
              <p className="m-0 pb-2" style={{ fontSize: '23px' }}>Request a free call back</p>
              <h5 className="mb-5" style={{ fontSize: '35px', fontWeight: '700' }}>
                Have a business to protect?
              </h5>
  
              <form>
                {/* Name Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control inner_shado"
                    id="nameInput"
                  />
                </div>
  
                {/* Email Input */}
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control inner_shado"
                    placeholder="Email"
                    id="EmailInput"
                  />
                </div>
  
                {/* Phone Number Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone No.."
                    className="form-control inner_shado"
                    id="PhoneInput"
                  />
                </div>
  
                {/* Address Textarea */}
                <div className="mb-4">
                  <textarea
                    className="form-control inner_shado"
                    placeholder="Enter Your Address.."
                    id="exampleFormControlTextarea5"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
  
            {/* Google Maps Embed */}
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1488.4942464632024!2d83.903004!3d26.262417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399235285a768415%3A0xebc124835224b7bc!2sYadav%20Janseva%20Kendra%20Sohnag!5e1!3m2!1sen!2sus!4v1717495417221!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ContactUs;
  