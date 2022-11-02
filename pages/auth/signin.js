import { getProviders, signIn } from 'next-auth/react';

export default function siginin({ providers }) {
  console.log('providers signIn' + JSON.stringify(providers, null, 2));
  return (
    <div className="flex items-center justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
      />

      <div className="flex flex-col items-center justify-center">
        <img
          className="w-36 object-cover"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="twitter logo"
        />
        <p className="text-center text-sm italic my-5">
          This app is created for learning purposes
        </p>

        {Object.values(providers).map((provider) => (
          // eslint-disable-next-line react/jsx-key

          <button
            key={provider.name}
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="bg-red-400 text-white hover:bg-red-500 rounded-lg p-3 my-5 w-60"
          >
            Sign in with {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
