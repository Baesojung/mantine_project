// import { Welcome } from '../components/Welcome/Welcome';
import { Register } from '../../../components/Register';
import { Title } from '@mantine/core';

export default function registerPage() {
  return (
    <>
      <Title mt="xl" order={2}>회원가입</Title>
      <div style={{height:'100px'}}></div>
      <Register/>
    </>
  );
}