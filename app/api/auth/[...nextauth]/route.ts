import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID ?? "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
});

const discordProvider = DiscordProvider({
  clientId: process.env.DISCORD_CLIENT_ID ?? "",
  clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
});

const handler = NextAuth({
  providers: [googleProvider, discordProvider],
  pages: {
    signIn: "/signIn",
  },
});

export { handler as GET, handler as POST };
