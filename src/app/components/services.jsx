
function Services() {
    return (
      <>
        <div className="container py-5 pb-4">
          <div className="row d-flex justify-content-center align-items-center my-4">
            <div className="d-flex justify-content-center align-items-center mx-auto">
              <h1 className="text-center heading">We Provide Services</h1>
            </div>
          </div>
  
          <div className="row py-4 g-xl-0 g-4">
            <div className="col-lg-6 col-xl-3">
              <div className="card_wrapper h-100 p-2 d-flex justify-content-center align-items-center flex-column">
                <div className="aibrain">
                  <img src="./assets/image/ai-brain.png" alt="AI Brain" />
                </div>
                <div className="card_text mt-2">
                  <h6 className="text-center">Advanced AI Trading</h6>
                  <ul className="pt-2">
                    <li>Aimee implements advanced trading strategies based on technical analysis indicators.</li>
                    <li>Utilizes indicators like moving averages, RSI, MACD, and identifies support/resistance levels.</li>
                    <li>Incorporates learning models for pattern recognition.</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6 col-xl-3">
              <div className="card_wrapper h-100 p-2 d-flex justify-content-center align-items-center flex-column">
                <div className="aibrain">
                  <img src="./assets/image/risk-management.png" alt="Risk Management" />
                </div>
                <div className="card_text mt-2">
                  <h6 className="text-center">Risk Management</h6>
                  <ul className="pt-2">
                    <li>Aimee prioritizes risk management to safeguard your investments.</li>
                    <li>Implements stop-loss orders and percentage-based position sizing for loss limitation.</li>
                    <li>Integrates a maximum drawdown limit for additional protection.</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6 col-xl-3">
              <div className="card_wrapper h-100 p-2 d-flex justify-content-center align-items-center flex-column">
                <div className="aibrain">
                  <img src="./assets/image/analytics.png" alt="Analytics" />
                </div>
                <div className="card_text mt-2">
                  <h6 className="text-center">Market Analytics</h6>
                  <ul className="pt-2">
                    <li>Aimee provides real-time analysis of market trends and sentiments.</li>
                    <li>Tracks Twitter feeds, financial databases, and analyzes trading volume patterns.</li>
                    <li>Monitors market sentiment through social media and news sentiment analysis.</li>
                    <li>Evaluates historical price action and volatility for informed decision-making.</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6 col-xl-3">
              <div className="card_wrapper h-100 p-2 d-flex justify-content-center align-items-center flex-column">
                <div className="aibrain">
                  <img src="./assets/image/evolution.png" alt="Evolution" />
                </div>
                <div className="card_text mt-2">
                  <h6 className="text-center">The Evolution</h6>
                  <ul className="pt-2">
                    <li>Aimee is continually evolving and learning to adapt to changing market conditions.</li>
                    <li>Regularly updates algorithms based on market feedback and conditions.</li>
                    <li>Integrates adaptive machine learning models for continuous improvement.</li>
                    <li>Utilizes Bayesian methods to update risk tolerance estimates with fresh data.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Services;
  