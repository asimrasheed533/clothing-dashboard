import { DetailsEntry } from "components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function CustomersDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <DetailsEntry label="First Name">John Doe</DetailsEntry>
        <DetailsEntry label="Last Name">AAsmm</DetailsEntry>
        <DetailsEntry label="Phone No.">+33-03948567</DetailsEntry>
        <DetailsEntry label="Email Address">asmm333@gmail.com</DetailsEntry>
        <DetailsEntry label="Referred By">Irsie</DetailsEntry>
        <DetailsEntry label="UserName">John Doe</DetailsEntry>
        <DetailsEntry label="Role">Admin</DetailsEntry>
        <DetailsEntry label="Status">Active</DetailsEntry>
        <DetailsEntry label="Password" secure={true}>
          23904567
        </DetailsEntry>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation + "/edit"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Edit
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
