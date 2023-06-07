export default function SendMessageCard() {
  return (
    <div className="order__details__main__customer__card">
      <div className="order__details__main__customer__card__header">
        Send Customer SMS
      </div>
      <div className="order__details__main__customer__card__content">
        <textarea
          className="order__details__main__customer__card__content__textarea"
          placeholder="Please type your message here"
        />
        <button className="order__details__main__customer__card__content__button">
          Send
        </button>
      </div>
    </div>
  );
}
