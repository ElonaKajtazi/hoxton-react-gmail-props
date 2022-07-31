type Props = {
  currentTab: string;
  tabName: string;
  count: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export function ListItem({ currentTab, tabName, count, setCurrentTab }: Props) {
  return (
    <li
      className={`item ${currentTab === tabName ? "active" : ""}`}
      onClick={() => setCurrentTab(tabName)}
    >
      <span className="label">
        {tabName[0].toUpperCase() + tabName.slice(1)}
      </span>
      <span className="count">{count}</span>
    </li>
  );
}
