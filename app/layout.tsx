import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getColorSchemeHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getColorSchemeHtmlAttributes";
import StartDsfr from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import { Header } from "@codegouvfr/react-dsfr/Header";
import  "./layout.css";

export const metadata = {
  title: 'Référentiel National des Bâtiments',
  description: '...',
}


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
      href: '/defintion',
    }
  },
  // {
  //   text:"Gestion des ADS",
  //   linkProps: {
  //     href: '/ads',
  //   }
  // },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (    
    
    <html lang="fr" {...getColorSchemeHtmlAttributes({ defaultColorScheme })} >
      <head>
        <StartDsfr />
        <DsfrHead defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <DsfrProvider defaultColorScheme={defaultColorScheme}>
          <Header 
          brandTop="RNB" 
          serviceTitle="rnb.beta.gouv.fr"
          serviceTagline="Référentiel National des Bâtiments"
          navigation={nav}
           />
          
          {children}
          
        </DsfrProvider>
        </body>
    </html>
    
  )
}



