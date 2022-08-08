export function Email({ email, emails, setEmails }) {
  return (
    <>
      <h3>{email.title}</h3>
      <p
        className={email.read ? "read-Emails" : ""}
        onClick={() => {
          const emailsCopy = structuredClone(emails);

          const match = emailsCopy.find((target) => target.id === email.id);

          match.read = !match.read;

          setEmails(emailsCopy);
        }}
      >
        {email.content}
      </p>
    </>
  );
}
