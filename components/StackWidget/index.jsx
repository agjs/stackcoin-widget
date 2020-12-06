import React from "react";

import { UpArrow, DownArrow } from "@styled-icons/boxicons-regular";

import "./style.scss";

const StackWidgetButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="sc-stack-widget__button">
      {label}
    </button>
  );
};

const StackWidgetAddRemoveControls = () => {
  return (
    <div className="sc-stack-widget__add-remove-controls">
      <StackWidgetButton label={"Add"} />
      <StackWidgetButton label={"Remove"} />
    </div>
  );
};

const StackWidgetAddAmountControls = () => {
  return (
    <div className="sc-stack-widget__add-amount-controls">
      <h5>Add Amount</h5>
      <h2>2.1</h2>
    </div>
  );
};

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
          <h2 className="sc-stack-widget__header__item__value">07</h2>
        </div>
        <div className="sc-stack-widget__header__item">
          <h5 className="sc-stack-widget__header__item__title">Ether Profit</h5>
          <h2 className="sc-stack-widget__header__item__value">0.6</h2>
        </div>
        <div className="sc-stack-widget__header__item">
          <h5 className="sc-stack-widget__header__item__title">
            Stackcoin Profit
          </h5>
          <h2 className="sc-stack-widget__header__item__value">210</h2>
        </div>
      </header>
      <div className="sc-stack-widget__middle-section">
        <div className="sc-stack-widget__instance-bar">
          <button>up</button>
          <span>Instance 7</span>
          <button>down</button>
        </div>
        <h1>Stack LOGO</h1>
        <div className="sc-stack-widget__purchased-portions">circles</div>
      </div>
      <div className="sc-stack-widget__ether-stack-cost">
        <h5 className="sc-stack-widget__ether-stack-cost__title">
          Ether Stack Cost
        </h5>
        <h2 className="sc-stack-widget__ether-stack-cost__value">1.5</h2>
      </div>
      <div className="sc-stack-widget__footer">
        <div className="sc-stack-widget__footer__row">
          <button>Buy Half</button>
          <button>Buy All</button>
        </div>
        <div className="sc-stack-widget__footer__row">
          <button>Add</button>
          <StackWidgetAddRemoveControls />
          <StackWidgetAddAmountControls />
        </div>
      </div>
    </div>
  );
};

export default StackWidget;
