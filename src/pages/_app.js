import "@/styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </SSRProvider>
  );
}
