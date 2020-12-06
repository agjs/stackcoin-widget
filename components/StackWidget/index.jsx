import React from "react";
import { UpArrow, DownArrow } from "@styled-icons/boxicons-regular";
import { Bitcoin } from "@styled-icons/boxicons-logos";
import { Ethereum } from "@styled-icons/fa-brands";

import classNames from "classnames";

import "./style.scss";

const StackWidgetButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="sc-stack-widget__button">
      {children}
    </button>
  );
};

const StackWidgetAddRemoveControls = () => {
  return (
    <div className="sc-stack-widget__add-remove-controls">
      <UpArrow />
      <DownArrow />
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
  stack_level,
  ether_profit,
  stackcoin_profit,
  instance,
  portions,
  ether_stack_cost
}) => {
  const getStackLogo = name => {
    switch (name) {
      case "Bitcoin Stack":
        return <Bitcoin />;
      case "Ether Stack":
        return <Ethereum />;
      default:
        return <h1>NO LOGO</h1>;
    }
  };

  return (
    <div
      className={classNames("sc-stack-widget", {
        "sc-stack-widget--bitcoin": name === "Bitcoin Stack",
        "sc-stack-widget--ether": name === "Ether Stack"
      })}
    >
      <h1 className="sc-stack-widget__stack-name">{name}</h1>
      <header className="sc-stack-widget__header">
        <div className="sc-stack-widget__header__item">
          <h2 className="sc-stack-widget__header__item__value">
            {stack_level}
          </h2>
          <h5 className="sc-stack-widget__header__item__title">Stack Level</h5>
        </div>
        <div className="sc-stack-widget__header__item">
          <h2 className="sc-stack-widget__header__item__value">
            {ether_profit}
          </h2>
          <h5 className="sc-stack-widget__header__item__title">Ether Profit</h5>
        </div>
        <div className="sc-stack-widget__header__item">
          <h2 className="sc-stack-widget__header__item__value">
            {stackcoin_profit}
          </h2>
          <h5 className="sc-stack-widget__header__item__title">
            Stackcoin Profit
          </h5>
        </div>
      </header>
      <div className="sc-stack-widget__middle-section">
        <div className="sc-stack-widget__instance-bar">
          <UpArrow />
          <span>
            Instance<h1>{instance}</h1>
          </span>
          <DownArrow />
        </div>
        {getStackLogo(name)}
        <div className="sc-stack-widget__purchased-portions">
          TODO: {portions}
        </div>
      </div>
      <div className="sc-stack-widget__ether-stack-cost">
        <h2 className="sc-stack-widget__ether-stack-cost__value">
          {ether_stack_cost}
        </h2>
        <h5 className="sc-stack-widget__ether-stack-cost__title">
          Ether Stack Cost
        </h5>
      </div>
      <div className="sc-stack-widget__footer">
        <div className="sc-stack-widget__footer__row">
          <StackWidgetButton>Buy Half</StackWidgetButton>
          <StackWidgetButton>Buy All</StackWidgetButton>
        </div>
        <div className="sc-stack-widget__footer__row">
          <StackWidgetButton>Add</StackWidgetButton>
          <StackWidgetAddRemoveControls />
          <StackWidgetAddAmountControls />
        </div>
      </div>
    </div>
  );
};

export default StackWidget;
