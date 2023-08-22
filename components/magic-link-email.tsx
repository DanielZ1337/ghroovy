import * as React from 'react';
import {Preview} from "@react-email/preview";
import {Html} from "@react-email/html";
import {Head} from "@react-email/head";
import {Tailwind} from "@react-email/tailwind";
import {Body} from "@react-email/body";
import {Container} from "@react-email/container";
import {Section} from "@react-email/section";
import {Heading} from "@react-email/heading";
import {Link} from "@react-email/link";
import {Row} from "@react-email/row";
import {Column} from "@react-email/column";
import {Button} from "@react-email/button";
import {Hr} from "@react-email/hr";
import {siteMetadata} from "@/lib/site-metadata";

interface VercelInviteUserEmailProps {
    email: string;
    magicLink: string;
    magicLinkExpires: Date;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://ghroovy.danielz.dev';

export default function MagicLinkEmail({
                                           email,
                                           magicLink,
                                           magicLinkExpires,
                                       }: VercelInviteUserEmailProps) {

    return (
        <Html>
            <Head/>
            <Preview>Magic Link for {email} | {siteMetadata.name}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container
                        className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            {/*<Img
                                src={`${baseUrl}/static/vercel-logo.png`}
                                width="40"
                                height="37"
                                alt="Vercel"
                                className="my-0 mx-auto"
                            />*/}
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Magic Link for <strong>{email}</strong> | <strong>{siteMetadata.name}</strong>
                        </Heading>
                        <p className="text-black text-[14px] leading-[24px]">
                            Hello {email},
                        </p>
                        <p className="text-black text-[14px] leading-[24px]">
                            You have received a magic link to sign in to <strong>{siteMetadata.name}</strong>.
                        </p>
                        <Section>
                            <Row>
                                <Column align="right">
                                    {/*<Img className="rounded-full" src={undefined} width="64" height="64"/>*/}
                                </Column>
                                <Column align="center">
                                    {/*<Img
                                        src={`${baseUrl}/static/vercel-arrow.png`}
                                        width="12"
                                        height="9"
                                        alt="invited you to"
                                    />*/}
                                </Column>
                                <Column align="left">
                                    {/*<Img className="rounded-full" src={undefined} width="64" height="64"/>*/}
                                </Column>
                            </Row>
                        </Section>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                pX={20}
                                pY={12}
                                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                                href={magicLink}
                            >
                                Login to {siteMetadata.name}
                            </Button>
                        </Section>
                        <p className="text-black text-[14px] leading-[24px]">
                            or copy and paste this URL into your browser:{' '}
                            <Link
                                href={magicLink}
                                className="text-blue-600 no-underline"
                            >
                                {magicLink}
                            </Link>
                        </p>
                        <p className="text-black text-[14px] leading-[24px]">
                            This link will expire on {magicLinkExpires.toTimeString()}.
                        </p>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full"/>
                        <p className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{' '}
                            <span className="text-black">{email}.{' '}</span>
                            <span>If you did not initiate this
                            request, you can ignore this email. If you are
                            concerned about your account&apos;s safety, please reply to this email to
                                get in touch with us.</span>
                        </p>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};