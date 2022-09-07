import { useState } from "react";
import { useUser } from "../../services/UserContext";
import supabase from "../../services/supabaseClient";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const navigate = useNavigate();

  const { session } = useUser();
  console.log("session", session);
  if (session) navigate("/events");

  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  async function handleSignUp(e) {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
    });

    if (error) {
      console.error(error);
      return alert(error.message);
    }

    console.log("user", user);
    console.log("session", session);
  }

  const onClick = () => {
    setShowMessage(true);
  }

  const Message = () => (
    <p id="message">
      Check your email for your magic link! You may close this window.
    </p>
  )

  return (
    <main className={styles.SignUp}>
      <form onSubmit={(e) => handleSignUp(e)}>
        <h3>Sign up to submit events and save your wishlist!</h3>
        <div>
          <label htmlFor="email">Email address: </label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={onClick}>Send Me A Magic Link!</button>
          <div>
          { showMessage ? <Message /> : null }
          </div>
        </div>
      </form>
    </main>
  );
}