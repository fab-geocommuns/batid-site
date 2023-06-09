'use client'

// Comps
import { Header } from "@codegouvfr/react-dsfr/Header";

// Auth
import { signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';
import { text } from "stream/consumers";

export default function RNBHeader() {

    const { data: session } = useSession()

    const nav = [
        {
          text: 'Accueil',
          linkProps: {
            href: '/',
          }
        },
        {
          text:"Carte",
          linkProps: {
            href: '/carte',
          }
        },
        {
          text:"Définition du bâtiment",
          linkProps: {
            href: '/definition',
          }
        },
        {
          text:"Gestion des ADS",
          linkProps: {
            href: '/ads',
          }
        },
        {
          text:"API et documentation",
          linkProps: {
            href: 'https://batid.notion.site/Documentation-des-API-du-R-f-rentiel-National-du-B-timent-7b881d168030450f9ed8ed63c9b430a8?pvs=4',
          }
        },
      ]

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }


    let logQA = {
        iconId: 'fr-icon-lock-line',
        linkProps: {
            href: '/login'
        },
        text: 'Se connecter'
    }

    if (session) {
        logQA = {
            iconId: 'fr-icon-logout-box-r-line',
            linkProps: {
                href: '#',
                onClick: (e) => {handleSignout(e)}
            },
            text: 'Se déconnecter'
        }
    } 

    return (
        <>
        <Header 
          brandTop={<>République<br/>Française</>}
          serviceTitle="RNB"
          serviceTagline="Le Référentiel National des Bâtiments"
          navigation={nav}
          homeLinkProps={{
            href: '/',
            title: 'Accueil RNB',
          }}
          quickAccessItems={[
            logQA
          ]}
          

           />
        </>
    )


}