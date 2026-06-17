/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },

  cookies: {
    sessionToken: {
      name: "next-auth.session-token-website",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter your email and password");
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const response = await res.json();

          console.log("🔎 API Response:", response);


          if (!res.ok || !response?.success) {
            throw new Error(
              response?.message || "Login failed"
            );
          }


          const user = response?.data;
          const accessToken = response?.data?.accessToken;
          const refreshToken = response?.data?.refreshToken;


          if (!user) {
            throw new Error("User data not found");
          }


          return {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,

            profileImage: user.profileImage?.url,

            accessToken,
            refreshToken,
          };


        } catch (error) {
          console.error("Authentication error:", error);

          throw new Error(
            error instanceof Error
              ? error.message
              : "Authentication failed"
          );
        }
      },
    }),
  ],


  callbacks: {

    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: any;
    }) {

      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;

        token.profileImage = user.profileImage;

        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }


      return token;
    },


    async session({
      session,
      token,
    }: {
      session: any;
      token: JWT;
    }) {


      session.user = {

        id: token.id,

        name: token.name,

        email: token.email,

        role: token.role,

        profileImage: token.profileImage,

        accessToken: token.accessToken,

        refreshToken: token.refreshToken,
      };


      return session;
    },

  },
};