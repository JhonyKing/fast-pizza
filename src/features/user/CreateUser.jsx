import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" rounded-full border border-stone-200 py-2 px-4 transition-all duration:300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3w-full w-72 mb-8 sm:px-6 sm:py-4"
      />

      {username !== "" && (
        <div>
          <Button type="primary" to="/order/new">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
