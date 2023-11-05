import { users } from "@/helpers/constants";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github"; //we are not using github provider in this project.

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter the email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter the password",
        },
      },

      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        //! this is means the credentials not correct.
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        //? we will search if the user from the credentials exists in our fake database existing in the helper
        // we are also using the function find in javascript to do the search.
        const user = users.find((user) => user.email === credentials.email);
        //? check if the user actually exists and the password is correct and return it.
        if (user && user.password === credentials.password) {
          return user;
        }
        // Return null if user if not found or password is incorrect.
        return null;
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
