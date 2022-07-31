import { EmailItem } from "./EmailItem";
import "../../styles/email-list.css";
import initialEmails, { Email } from "../../data/emails";
type Props = {
  toggleRead: (targetEmail: Email) => void;
  toggleStar: (targetEmail: Email) => void;
  getFilteredEmails: () => Email[];
};
export default function EmailList({
  getFilteredEmails,
  toggleRead,
  toggleStar,
}: Props) {
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
