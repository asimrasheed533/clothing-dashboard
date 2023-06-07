import {
  TableEntryDeleteButton,
  TableEntryDescription,
  TableEntryEditButton,
  TableEntryStatus,
  TableEntryText,
  TableEntryViewButton,
} from "components";
import { useLocation } from "react-router-dom";

export default function Customers() {
  const location = useLocation();
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left"></div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>

          <div className="container__main__content__listing__table__header__entry">
            First Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Last Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone No.
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Username
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryViewButton to="/john-doe" />
      </div>

      <TableEntryText>john</TableEntryText>
      <TableEntryText>deved</TableEntryText>
      <TableEntryText>+92343323454</TableEntryText>
      <TableEntryText>Abraaa323@gmail.com</TableEntryText>
      <TableEntryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl
        nisl sit amet nisl.
      </TableEntryDescription>
    </div>
  );
}
