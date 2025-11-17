// src/app/layout.tsx
import "./globals.css";
import {ConditionalHeaderFooter} from "@/components/ConditionalHeaderFooter";

export const metadata = {
    title: "JM Nyaga Campaign",
    description: "Hon. Nyaga James Mutwiri – Tharaka Constituency MP Campaign",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/images/title-logo.png"/>
            <title>James Mutwiri Nyaga | Official Website</title>
            <meta name="description"
                  content="Official website of James Mutwiri Nyaga. Meet JM Nyaga, view his manifesto, latest news, and learn how to support his political vision for a better future."/>
        </head>
        <body className="bg-white text-black" data-gramm="false" data-gr-ext-installed="">
        <ConditionalHeaderFooter>
            {children}
        </ConditionalHeaderFooter>
        </body>
  {/*      <script async*/}
  {/*              src="https://api.trustedaccounts.org/js-sdk.js"*/}
  {/*              onLoad="new TrustedTraffic({*/}
  {/*  publishableKey: 'pk_live_Cvq6Llp10zd9ggZ5pY0DGoQIEPun0uy06Du0RH2zxfwluWS0QbpH98OnuxdybVRM'*/}
  {/*}).init()">*/}
  {/*      </script>*/}
        </html>
    );
}