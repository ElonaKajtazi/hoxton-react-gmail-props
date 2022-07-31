import { useState } from "react";

import initialEmails, { Email } from "./data/emails";

import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Emails from "./components/EmailList";
// Instructions

// - Break down App.tsx into components ✅
//     - You should have an Emails component that renders a list ✅
//     - You should have an Email component that is a list item ✅
// - Break down app.css into stylesheets ❌
// - Pass through the relevant data as props to each component ✅
// - Pass through the relevant functions as props to each component ✅
// - Get the search input to work in the header section so that users can search for emails by title ❌

const getReadEmails = (emails: Email[]) =>
  emails.filter((email) => !email.read);

const getStarredEmails = (emails: Email[]) =>
  emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [search, setSearch] = useState("");

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  function getFilteredEmails(): Array<Email> {
    let filteredEmails = emails;

    if (hideRead) {
      filteredEmails = getReadEmails(filteredEmails);
    }

    if (currentTab === "starred") {
      filteredEmails = getStarredEmails(filteredEmails);
    }

    return filteredEmails;
  }

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <main className="emails">
        <Emails
          getFilteredEmails={getFilteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      </main>
    </div>
  );
}

export default App;
