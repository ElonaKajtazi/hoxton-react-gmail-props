// type Props = {
//   currentTab: string;
//   setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
//   unreadEmails: Array<Email>;
//   starredEmails: Array<Email>;
//   hideRead: boolean;
//   setHideRead: React.Dispatch<React.SetStateAction<boolean>>;
// };

import { HideReadListItem } from "./HideReadListItem";
import { InboxListItem } from "./InboxListtItem";
import { StarredListItem } from "./StarredListItem";

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
        <InboxListItem
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          unreadEmails={unreadEmails}
        />
        <StarredListItem
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          starredEmails={starredEmails}
        />

        <HideReadListItem hideRead={hideRead} setHideRead={setHideRead} />
      </ul>
    </nav>
  );
}
