import React, { useState } from 'react';
import { Platform } from 'react-native';
import { 
  Background, 
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 return (
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Logo source={require('../../assets/Logo.png')}/>

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChageText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChageText={ (text) => setPassword(text) }
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText>Criar uma Conta!</LinkText>
        </Link>

      </Container>
    </Background>
   
  );
}