import { SyncLoader } from "react-spinners";

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
      <SyncLoader color="red" size={10} />
      <div style={{ marginTop: 20 }}>Loading</div>
    </div>
  );
}
