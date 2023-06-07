import ScrollContainer from "react-indiana-drag-scroll";
import Step from "components/Step";
import { useState } from "react";

export function OrderStatus() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="order__details__steps">
      <div className="order__details__steps__heading">Delivery Details</div>
      <ScrollContainer className="order__details__steps__content">
        <Step
          label="Ordered"
          active={activeStep >= 0}
          nextActive={activeStep >= 1}
        />
        <Step
          label="Pcking in Progress"
          active={activeStep >= 1}
          nextActive={activeStep >= 2}
        />
        <Step
          label="Waiting for Pickup"
          active={activeStep >= 2}
          nextActive={activeStep >= 3}
        />
        <Step
          label="Return Initiated"
          active={activeStep >= 3}
          nextActive={activeStep >= 4}
        />
        <Step
          label="Picked up"
          active={activeStep >= 4}
          nextActive={activeStep >= 5}
        />
        <Step
          label="Payment Completed"
          active={activeStep >= 5}
          nextActive={activeStep >= 5}
        />
      </ScrollContainer>
      <button
        className="order__details__steps__button"
        disabled={activeStep === 5}
        onClick={() => setActiveStep(activeStep + 1)}
      >
        {activeStep === 0
          ? "Move to delivered"
          : activeStep === 1
          ? "Move to waiting for pickup"
          : activeStep === 2
          ? "Move to return initiated"
          : activeStep === 3
          ? "Move to picked up"
          : activeStep === 4
          ? "Move to payment Completed"
          : "Finished"}
      </button>
    </div>
  );
}
