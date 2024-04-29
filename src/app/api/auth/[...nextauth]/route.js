import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  trustHost: true,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log("credentials", credentials);
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  jwt: {
    signingKey:
      '{"kty":"oct","kid":"0bAoJBwgtlIqeUwkK0HA8ehQJHJ5wntde7lPhrxQtZ4","alg":"HS512","k":"ABuZ2VYMLsxkJvEo3H7-PloK5dmUwJWsKcdxFDljDTU"}',
  },
  session: {
    maxAge: 59 * 60 * 24 * 7,
  },

  /* callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  }, */

  /* pages: {
    signIn: "/auth/login",
  }, */
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
