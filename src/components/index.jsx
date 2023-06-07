import { lazy } from "react";

const Header = lazy(() => import("./Header"));
const Sidebar = lazy(() => import("./Sidebar"));
const ThemeSwitch = lazy(() => import("./ThemeSwitch"));
const LoginInput = lazy(() => import("./LoginInput"));
const DetailsEntry = lazy(() => import("./DetailsEntry"));
const Avatar = lazy(() => import("./Avatar"));
const Input = lazy(() => import("./Input"));
const Textarea = lazy(() => import("./Textarea"));
const Select = lazy(() => import("./Select"));
const RichTextarea = lazy(() => import("./RichTextarea"));
const TableEntryStatus = lazy(() => import("./TableEntryStatus"));
const TableEntryDeleteButton = lazy(() => import("./TableEntryDeleteButton"));
const TableEntryDescription = lazy(() => import("./TableEntryDescription"));
const TableEntryEditButton = lazy(() => import("./TableEntryEditButton"));
const TableEntryImage = lazy(() => import("./TableEntryImage"));
const TableEntryText = lazy(() => import("./TableEntryText"));
const TableEntryViewButton = lazy(() => import("./TableEntryViewButton"));
const Chart = lazy(() => import("./Chart"));
const DashboardOrderEntry = lazy(() => import("./DashboardOrderEntry"));
const DashboardStartEntry = lazy(() => import("./DashboardStartEntry"));
const OrderDetailsCard = lazy(() => import("./OrderDetailsCard"));
const OrderProductsCard = lazy(() => import("./OrderProductsCard"));

export {
  Header,
  Sidebar,
  ThemeSwitch,
  LoginInput,
  DetailsEntry,
  Avatar,
  Input,
  Textarea,
  Select,
  RichTextarea,
  TableEntryStatus,
  TableEntryDeleteButton,
  TableEntryDescription,
  TableEntryEditButton,
  TableEntryImage,
  TableEntryText,
  TableEntryViewButton,
  Chart,
  DashboardOrderEntry,
  DashboardStartEntry,
  OrderProductsCard,
  OrderDetailsCard,
};
