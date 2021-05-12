import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Nome, Saldo, Title } from './styles';
import Header from '../../components/Header';

console.disableYellowBox = true; 

export default function Home() {

  const { user } = useContext(AuthContext)

 return (
    <Background>
      <Header/>
      <Container>
        <Nome>Alberto</Nome>
        <Saldo>R$ 555,00</Saldo>
      </Container>

      <Title>Ultimas movimentações</Title>
    </Background>
   
  );
}