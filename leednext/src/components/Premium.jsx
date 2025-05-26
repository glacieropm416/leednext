import React from 'react';
import './Premium.css';

const Premium = () => {
  return (
    <div className="premium-page">
      <h1 className="title">Premium</h1>
      <p className="subtitle">
        Get <strong>started</strong> with a LeetNext Subscription that works for you.
      </p>

      <div className="pricing-container">
        <div className="plan monthly">
          <h2><strong>Monthly</strong> billed monthly</h2>
          <p><strong>Down from $39/month.</strong></p>
          <p>Our monthly plan grants access to <strong>all premium features</strong>, the best plan for short-term subscribers.</p>
          <div className="price">$35 <small>/mo</small></div>
          <small className="usd-note">Prices are marked in USD</small>
          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="plan yearly">
          <div className="popular-badge">🎉 Most popular</div>
          <h2><strong>Yearly</strong> billed yearly ($159)</h2>
          <p>
            Our <strong>most popular</strong> plan previously sold for $299 and is now only <br />
            <strong>$13.25/month.</strong>
          </p>
          <p>This plan <strong>saves you over 60%</strong> in comparison to the monthly plan.</p>
          <div className="price">$13.25 <small>/mo</small></div>
          <small className="usd-note">Prices are marked in USD</small>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
