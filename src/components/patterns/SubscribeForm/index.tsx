import React, { FormEvent, useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import CustomButton from '../../commons/CustomButton';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';
import Grid from '../../layout/Grid';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';
import CloseIcon from '../../../assets/logo/CloseIcon';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const FormContent: React.FC = () => {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    name: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')?.toString();
    setUserInfo({
      ...userInfo,
      [fieldName || 'inputKey']: event.target.value,
    });
  }

  function onSubmited(event: FormEvent<Element>) {
    setSubmissionStatus(formStates.LOADING);
    event.preventDefault();
    setIsFormSubmited(true);
    const userDTO = {
      username: userInfo.usuario,
      name: userInfo.name,
    };

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }

        throw new Error('Não foi possível cadastrar o usuário agora :(');
      })
      .then(() => {
        setSubmissionStatus(formStates.DONE);
        setUserInfo({
          usuario: '',
          name: '',
        });
      })
      .catch(() => {
        setSubmissionStatus(formStates.ERROR);
      });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.name.length === 0;

  return (
    <form
      onSubmit={(event: FormEvent<Element>) => onSubmited(event)}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <TextField
        placeholder="Nome"
        name="name"
        value={userInfo.name}
        onChange={handleChange}
      />

      <TextField
        placeholder="Usuário"
        name="usuario"
        value={userInfo.usuario}
        onChange={handleChange}
      />

      <CustomButton
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        margin={{
          xs: '16px 0 15px 0',
        }}
        fullWidth
      >
        Cadastrar
      </CustomButton>

      {isFormSubmited && submissionStatus !== formStates.DEFAULT && (
        <Box.Container
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{
              // eslint-disable-next-line no-nested-ternary
              animationData: submissionStatus === formStates.LOADING
                ? loadingAnimation : submissionStatus === formStates.DONE
                  ? JSON.parse(successAnimation) : errorAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box.Container>
      )}
    </form>
  );
};

interface ISubscribeForm {
  modalProps?: Object;
  onCloseAction: Function;
}

const SubscribeForm: React.FC<ISubscribeForm> = ({ modalProps, onCloseAction }) => (
  <Grid.Row
    marginLeft={0}
    marginRight={0}
    flex={1}
    justifyContent="flex-end"
  >
    <Grid.Col
      display="flex"
      paddingRight={{ md: '0' }}
      flex={1}
      value={{ xs: 12, md: 5, lg: 4 }}
      justifyContent="flex-end"
    >
      <Box.Container
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        position="relative"
        flexDirection="column"
        justifyContent="flex-start"
        flex={1}
        padding={{
          xs: '16px',
          md: '73.5px',
        }}
        backgroundColor="#fff"
        maxWidth="460px"
        {...modalProps}
      >
        <Box.OverFlow style={{ cursor: 'pointer' }} onClick={() => onCloseAction(false)}>
          <CloseIcon />
        </Box.OverFlow>
        <FormContent />
      </Box.Container>
    </Grid.Col>
  </Grid.Row>
);

export default SubscribeForm;
