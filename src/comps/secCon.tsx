export interface callType {
    text: string;
    url: string;
    icon?: JSX.Element;
}
export interface SectionType {
  icon: JSX.Element;
  title: string;
  text: string;
  double: boolean;
  call: callType[];
}

export const sectionsData: SectionType[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" stroke="#f97316" strokeWidth="1.5"></path>
          <path d="M18 8.49998H14M18 14.5H14M18 17.5H14M10 8.49999H8M8 8.49999L6 8.49999M8 8.49999L8 6.49998M8 8.49999L8 10.5M9.5 14.5L8.00001 16M8.00001 16L6.50001 17.5M8.00001 16L6.5 14.5M8.00001 16L9.49999 17.5" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"></path>
        </g>
      </svg>
    ),
    title: 'Comment nous calculons?',
    text: "Nous mettons tout en œuvre pour garantir les meilleures performances possibles. Cependant, il est possible que nous commettions des erreurs et que nos calculs ne soient pas toujours satisfaisants. C'est pourquoi nous vous expliquons comment nous procédons. Si vous êtes développeur, vous pouvez consulter directement notre code source. Sinon, vous pouvez vous référer à notre documentation officielle",
    double: true,
    call: [{
        text: "lire À propos",
        url: '/about',
        icon : (<></>)
    }, {
        text: "code source",
        url: 'https://github.com/krnl0xsns1nk/7asib', 
        icon:(<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 24 24" >.<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 8-4 3.692L7 16m10-8 4 3.692L17 16M14 4l-4 16" /> </svg> )
    }]
  },
  {
    icon: (
      <svg fill="#f97316" height="197px" width="197px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-1.6 -1.6 19.20 19.20">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M16,7c0,1.7-1.3,3-3,3c-0.3,0-0.5-0.2-0.5-0.5S12.7,9,13,9c1.1,0,2-0.9,2-2s-0.9-2-2-2c-0.1,0-0.3,0-0.4,0.1c0,0,0,0,0,0 C11.7,5.3,11,6,11,7c0,0.3-0.2,0.5-0.5,0.5S10,7.3,10,7c0-1.3,0.8-2.3,1.9-2.8C11.5,2.4,9.9,1,8,1C5.8,1,4,2.8,4,5v0.8 C4,6,3.9,6.1,3.7,6.2c-0.2,0.1-0.3,0.1-0.5,0C3,6.1,2.8,6,2.5,6C1.7,6,1,6.7,1,7.5S1.7,9,2.5,9h1C3.8,9,4,9.2,4,9.5S3.8,10,3.5,10 h-1C1.1,10,0,8.9,0,7.5S1.1,5,2.5,5C2.7,5,2.8,5,3,5.1V5c0-2.8,2.2-5,5-5c2.4,0,4.4,1.7,4.9,4c0,0,0,0,0.1,0c0,0,0,0,0.1,0 c0,0,0,0,0.1,0C14.7,4,16,5.4,16,7z M12,10.5C12,10.5,12,10.5,12,10.5l0,3c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1 c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0l-3,2c0,0,0,0,0,0c0,0,0,0,0,0C8.6,16,8.6,16,8.5,16s-0.1,0-0.2-0.1c0,0,0,0,0,0 c0,0,0,0,0,0l-3-2c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0v-3c0,0,0,0,0,0 c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0,0,0,0l3-2c0,0,0,0,0,0 c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0.1c0,0,0,0,0,0l3,2c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1C12,10.4,12,10.4,12,10.5C12,10.4,12,10.4,12,10.5z M6.4,10.5l2.1,1.4l2.1-1.4L8.5,9.1 L6.4,10.5z M6,13.2l2,1.3v-1.8l-2-1.3V13.2z M9,14.6l2-1.3v-1.8l-2,1.3V14.6z"></path>
        </g>
      </svg>
    ),
    title: 'Installer notre PWA',
    text: "Installez notre site web en tant qu'application pour calculer vos notes. Vous pourrez ainsi accéder à nos services hors ligne, partout et à tout moment.",
    double: false,
    call: [{
        text: "Installer ",
        url: '/webicon.png',
        icon: (<svg                    xmlns="http://www.w3.org/2000/svg"                    width={12}                    height={12}                    fill="#fff"                    stroke="#fff"                    strokeWidth={0}                    viewBox="0 0 36 36">                    <title>Download</title>                    <path                      stroke="none"                      d="M30.92 8h-4.37a1 1 0 0 0 0 2H31v20H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V10a2 2 0 0 0-2.08-2Z"                      className="clr-i-outline clr-i-outline-path-1"                    />                    <path stroke="none" d="m10.3 18.87 7 6.89a1 1 0 0 0 1.4 0l7-6.89a1 1 0 0 0-1.4-1.43L19 22.65V4a1 1 0 0 0-2 0v18.65l-5.3-5.21a1 1 0 0 0-1.4 1.43Z" className="clr-i-outline clr-i-outline-path-2" /> <path fill="none" stroke="none" d="M0 0h36v36H0z" /> </svg> )
    }]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M9 17H13M9 13H13M9 9H10M17 18V21M17 15H17.01M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H13M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11.5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
      </svg>
    ),
    title: 'Signaler des erreurs ou suggérer des améliorations',
    text: "Vous avez trouvé une erreur sur le site ? Vous souhaitez nous suggérer une nouvelle fonctionnalité ou des idées pour améliorer notre site ? N'hésitez pas à nous les signaler via notre centre d'incidents.",
    double: false,
    call: [{ 
        text: "Signaler",
        url: 'https://github.com/krnl0xsns1nk/issues',
        icon:(<svg width="12px" height="12px" viewBox="-1.44 -1.44 26.88 26.88" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>)
    }]
  },
  {
    icon: (
      <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M789.333333 853.333333H234.666667l-128 128V256c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z" fill="#f97316"></path>
          <path d="M469.333333 426.666667h85.333334v234.666666h-85.333334z" fill="#FFFFFF"></path>
          <path d="M512 320m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    ),
    title: 'Informations rapides et soutien',
    text: "Sur notre site 7asib, nous calculons vos notes facilement et rapidement. Il vous suffit d'entrer vos notes pour obtenir vos résultats. Pour en savoir plus, consultez notre page 'À propos'. Nous vous remercions de votre soutien ! En nous donnant une étoile sur le project , vous nous aidez à améliorer nos services. Merci de votre confiance !",
    double: true,
    call: [{
        text: "Étoilez-nous",
        url: 'https://github.com/krnl0xsns1nk/7asib',
        icon:(<svg width="12px" height="12px" viewBox="-1.44 -1.44 26.88 26.88" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>)
    } , {
        text: "À propos", url: '/about'
    }]
  }
];
