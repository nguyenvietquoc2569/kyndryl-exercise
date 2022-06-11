import Head from 'next/head';
import Box from '@mui/material/Box';
import { Container, CssBaseline } from '@mui/material';
import { EmployeeListView } from '@kyndryl-exercise/employee-management-lib';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-jsx file.
   */
  return (
    <>
      <Head>
        <title>Employee Portal - Demo</title>
      </Head>
      
          <EmployeeListView></EmployeeListView>
      
    </>
  );
}

export default Index;
