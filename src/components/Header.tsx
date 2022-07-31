import HeaderLeft from "./HeaderLeft";
import HeadrtSearch from "./HeaderSearch";

export default function Header({ setSearch }) {
  return (
    <header className="header">
      <HeaderLeft />
      <HeadrtSearch setSearch={setSearch} />
    </header>
  );
}
