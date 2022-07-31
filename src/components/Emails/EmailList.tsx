import { EmailItem } from "./EmailItem";
import "../../styles/email-list.css";
export default function EmailList({
  getFilteredEmails,
  toggleRead,
  toggleStar,
}) {
  return (
    <ul>
      {getFilteredEmails().map((email) => (
        <EmailItem
          key={email.id}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  );
}
