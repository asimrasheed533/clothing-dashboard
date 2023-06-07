import { BarLoader } from "react-spinners";

export default function Loading({ dashboard }) {
  return (
    <div
      className="container__main__content__listing"
      style={
        dashboard
          ? { justifyContent: "center", alignItems: "center" }
          : { justifyContent: "center", alignItems: "center", height: "100vh" }
      }
    >
      <BarLoader color="#36d7b7" />
      <div style={{ marginTop: 20 }}>Loading</div>
    </div>
  );
}
