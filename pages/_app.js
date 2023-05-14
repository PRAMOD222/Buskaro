import '../styles/globals.css'
import MobileNav from '../components/MobileNav'
import DesktopNav from '../components/DesktopNav'
import Footer from '../components/Footer'
import { use, useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState({value: null});
  const [key, setkey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token) {
      setuser({value: token})
      setkey(Math.random())
    }
  },[])

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })

    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })

    const mediaQuery = window.matchMedia('(max-width: 770px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);


  return (
    <>
     <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={600}  
        onLoaderFinished={() => setProgress(0)}
      />
     {isMobile ? <MobileNav /> : <DesktopNav />}
      <Component {...pageProps} />
      <Footer/>
    </>
  );

  // return <>
  // <Navbar user={user} key={key}/>
  // <Component {...pageProps} />
  // <Footer/>
  // </>
}
export default MyApp;