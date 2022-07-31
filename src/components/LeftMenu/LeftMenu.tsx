// type Props = {
//   currentTab: string;
//   setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
//   unreadEmails: Array<Email>;
//   starredEmails: Array<Email>;
//   hideRead: boolean;
//   setHideRead: React.Dispatch<React.SetStateAction<boolean>>;
// };

import { HideReadListItem } from "./HideReadListItem";
import { ListItem } from "./ListItem";


export default function LeftMenu({
  currentTab,
  setCurrentTab,
  unreadEmails,
  starredEmails,
  hideRead,
  setHideRead,
}) {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <ListItem
          tabName="inbox"
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          count={unreadEmails.length}
        />
        <ListItem
          tabName="starred"
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          count={starredEmails.length}
        />

        <HideReadListItem hideRead={hideRead} setHideRead={setHideRead} />
      </ul>
    </nav>
  );
}
