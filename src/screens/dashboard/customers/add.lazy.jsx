import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function CustomersAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="First Name"
              placeholder="Enter first name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Last Name"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Phone" placeholder="Enter phone" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Email" placeholder="Enter email" />
          </div>
        </div>

        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Username" placeholder="Enter username" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Department"
              placeholder="Select Department"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
                { value: "7", label: "7" },
                { value: "8", label: "8" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Referred By"
              placeholder="Enter referred by"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Address" placeholder="Enter address" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Role"
              placeholder="Select Role"
              options={[
                { value: "admin", label: "admin" },
                { value: "employ", label: "employ" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Status"
              placeholder="Select Status"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="password"
              secure
              label="Password"
              placeholder="Enter password"
              autoComplete="new-password"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="password"
              secure
              label="Confirm Password"
              placeholder="Enter confirm password"
            />
          </div>
        </div>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Add
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Discard
        </Link>
      </div>
    </div>
  );
}
