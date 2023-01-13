import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router';

const Title = styled('h1')`
  color: #0a0708;
  background-color: white;
  font-size: 2rem;
  margin: 0.8rem 0 1.3rem 0;
`;

const TopContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginContainer = styled('div')`
  width: 40vh;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 #b1b1b1;
`;

const Form = styled('form')`
  width: 100%;
  background-color: white;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  > div {
    width: 90%;
  }
`;

const LinkWrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0.8rem 0 1.4rem 0;
`;

const Link = styled('a')`
  color: #b1b1b1;
  &:hover {
    color: #5c2c06;
    cursor: pointer;
  }
`;

const Button = styled('button')`
  background-color: #5c2c06;
  color: white;
  padding: 0.9rem 1.1rem 0.9rem 1.1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('log in');
  };

  const handleUsername = (e) => {
    setEmail(e.target.value);
    buttonEnabled(email, password);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    buttonEnabled(email, password);
    password.length < 8 ? setPasswordInvalid(true) : setPasswordInvalid(false);
  };

  const buttonEnabled = (username, password) => {
    if (username.length > 0 && password.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  return (
    <>
      <TopContainer>
        <LoginContainer>
          <Title>Jobber</Title>
          <Form onSubmit={handleSubmit}>
            <TextField
              id="outlined-adornment-email"
              label="Email"
              type="text"
              value={email}
              onChange={(e) => handleUsername(e)}
              color="primary"
            />
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={seePassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => handlePassword(e)}
                color="primary"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={(e) => setSeePassword(!seePassword)}
                      edge="end"
                    >
                      {seePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Button type="submit" disabled={!email || !password || !enabled}>
              Log in
            </Button>
          </Form>
          <LinkWrapper>
            <Link onClick={() => router.push('recover')}>Forgot password</Link>
            <Link onClick={() => router.push('signup')}>Sign up</Link>
          </LinkWrapper>
        </LoginContainer>
      </TopContainer>
    </>
  );
};
