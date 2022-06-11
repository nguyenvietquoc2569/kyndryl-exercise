import { Html, Head, Main, NextScript } from 'next/document';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <div className="container">
              <div className='main'><Main /></div>              
            </div>
          </div>
        </ThemeProvider>
        <NextScript />
      </body>
    </Html>
  );
}
