import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";

import Logo from "../icons/Logo";

import imgBg from "../assets/img-bg.png";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
        <div className="max-w-[640px] ">
          <Logo></Logo>

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Build a{" "}
            <strong className="text-blue-500"> full application </strong>
            from begin with
            <strong className="text-blue-500"> React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you will master in practice one of the most used
            technologies and with high demand for access as the best on the
            market.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Subscribe for free</strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none border-transparent border focus:border-green-500"
              type="text"
              name=""
              id=""
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none border-transparent border focus:border-green-500"
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your e-mail"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 px-4 flex items-center justify-center gap-2 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <img
                  src="./src/assets/loading.svg"
                  className="animate-spin bg-transparent w-6 h-6"
                  alt=""
                />
              ) : null}
              Get my opportunity
            </button>
          </form>
        </div>
      </div>
      <img src={imgBg} alt="bg-img" className="mt-10" />
    </div>
  );
}

export default Login;
