export default function TimelineCard() {
  return (
    <div className="order__details__main__customer__card">
      <div className="order__details__main__customer__card__header">
        Timeline
      </div>
      <div className="order__details__main__customer__card__content__timeline__upper__wraper">
        <div className="order__details__main__customer__card__content__timeline__heading__container">
          <div className="order__details__main__customer__card__content__timeline__upper__heading">
            1 SEPTEMBER
          </div>
          <div className="order__details__main__customer__card__content__timeline__upper__sub__heading">
            You archived this order.
          </div>
        </div>
        <div className="order__details__main__customer__card__content__timeline__time">
          5:06pm
        </div>
      </div>
      <div className="order__details__main__customer__card__content__timeline__upper__wraper">
        <div className="order__details__main__customer__card__content__timeline__heading__container">
          <div className="order__details__main__customer__card__content__timeline__upper__heading">
            18 AUGUST
          </div>
          <div className="order__details__main__customer__card__content__timeline__upper__sub__heading">
            Customer selected return date 18/12/2022.
          </div>
          <div className="order__details__main__customer__card__content__timeline__upper__sub__heading">
            Customers taking 3 articles.
          </div>
          <div className="order__details__main__customer__card__content__timeline__upper__sub__heading">
            Return initiated by the Customer.
          </div>
          <div className="order__details__main__customer__card__content__timeline__upper__sub__heading">
            Booking confirmation message was sent to Rashid Muayyed
            (+923219652222)
          </div>
          <div className="btn__time__line">Resend sms</div>
          <div className="order__details__main__customer__card__content__timeline__upper__sub__heading">
            Booking confirmation email was sent to Rashid Muayyed
            (info@lookrunner.com)
          </div>
          <div className="btn__time__line">Resend Email</div>
        </div>
        <div className="order__details__main__customer__card__content__timeline__time">
          5:06pm
        </div>
      </div>
      <TimelineDetail heading="$6 paid for delivery charges" time="5:40pm" />
      <TimelineDetail
        heading="Confirmation #Zt08KYTU7 was generated for this order.
"
        time="5:40pm"
      />
      <TimelineDetail
        heading="Rashid Muayyed booked this order.
"
        time="5:40pm"
      />
    </div>
  );
}

function TimelineDetail({ heading, time }) {
  return (
    <div className="order__details__main__customer__card__content__timeline">
      <div className="order__details__main__customer__card__content__timeline__heading">
        {heading}
      </div>

      <div className="order__details__main__customer__card__content__timeline__time">
        {time}
      </div>
    </div>
  );
}
