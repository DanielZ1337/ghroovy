import type {User} from 'next-auth'

interface CustomUserProps {
    accessToken: string | undefined
    role: "admin" | "user"
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string
        role: "admin" | "user"
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & CustomUserProps
    }
}
