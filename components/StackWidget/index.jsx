import React from "react";
import "./style.scss";

const StackWidget = ({
  name,
  etherProfit,
  stackCoinProfit,
  etherStackCost
}) => {
  return (
    <div className="sc-stack-widget">
      <h1 className="sc-stack-widget__stack-name">Bitcoin Stack</h1>
      <header className="sc-stack-widget__header">
        <div className="sc-stack-widget__header__item">
          <h5 className="sc-stack-widget__header__item__title">Stack Level</h5>
        </div>
        <div className="sc-stack-widget__header__item">2</div>
        <div className="sc-stack-widget__header__item">3</div>
      </header>
      <div className="sc-stack-widget__instance-bar">
        <button>up</button>
        <span>Instance 7</span>
        <button>up</button>
      </div>
      <div className="sc-stack-widget__ether-stack-cost">
        <h1>1.5</h1>
      </div>
      <h1>name</h1>
    </div>
  );
};

export default StackWidget;
