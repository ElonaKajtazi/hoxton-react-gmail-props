import HeaderLeft from "./HeaderLeft";
import HeadrtSearch from "./HeaderSearch";
import "../../styles/header.css";
type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export default function Header({ setSearch }: Props) {
  return (
    <header className="header">
      <HeaderLeft />
      <HeadrtSearch setSearch={setSearch} />
    </header>
  );
}
