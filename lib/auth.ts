import {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import {redis} from "@/lib/redis";
import {UpstashRedisAdapter} from "@auth/upstash-redis-adapter";
import {sendVerificationRequest} from "@/lib/utils";
// import {sendVerificationRequest} from "@/lib/utils";

const {
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} = process.env

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) throw new Error("Missing GITHUB env variables")
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) throw new Error("Missing GOOGLE env variables")

export const nextAuthOptions: NextAuthOptions = {
    // @ts-ignore
    adapter: UpstashRedisAdapter(redis),
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60 * 7 // 7 days
    },
    pages: {
        signIn: '/auth/signin',
    },
    // debug: true,
    providers: [
        GithubProvider({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        EmailProvider({
            sendVerificationRequest,
        }),
    ],
    callbacks: {
        async jwt({token, account, user}) {
            if (account?.access_token) {
                token.accessToken = account.access_token
            }

            if (token.email) {
                token.role = await redis.sismember("admins", token.email) ? "admin" : "user"
            }

            return token
        },
        async session({session, token}) {
            session.user.accessToken = token.accessToken
            session.user.role = token.role

            return session
        },
    },
}