import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
// @ts-ignore
import {SendVerificationRequestParams} from "next-auth/providers";
import {siteMetadata} from "@/lib/site-metadata";
import {Resend} from "resend";
import MagicLinkEmail from "@/components/magic-link-email";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function isClient() {
    return typeof window !== 'undefined' ? 'client' : 'server';
}

export function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sendVerificationRequest(params: SendVerificationRequestParams) {
    try {

        await new Resend(process.env.RESEND_API_KEY).sendEmail({
            to: params.identifier,
            from: siteMetadata.email,
            subject: `Sign in to ${siteMetadata.name}`,
            react: <MagicLinkEmail email={params.identifier} magicLink={params.url} magicLinkExpires={params.expires}/>
        })


    } catch (error) {
        console.log({error});
    }
}