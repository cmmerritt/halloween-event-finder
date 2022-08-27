import { useState } from "react";
import { useUser } from "../../services/UserContext";
import supabase from "../../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const { session } = useUser();
  console.log("session", session);
  if (session) navigate("/events");

  const [email, setEmail] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();

    console.log("doing sign in");
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

  return (
    <main>
      <form onSubmit={(e) => handleSignUp(e)}>
        <h3>Sign up to submit events and save your wishlist!</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send Me A Magic Link!</button>
      </form>
    </main>
  );
}