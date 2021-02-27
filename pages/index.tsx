import React, { useState } from 'react';
import CustomButton from '../src/components/commons/CustomButton';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/layout/Grid';
import Box from '../src/components/layout/Box';
import Modal from '../src/components/commons/Modal';

const Home: React.FC = () => {
  const [isModalOpen, setModal] = useState<boolean>(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModal(false)}
      >
        {(props: object) => (
          <Box
            backgroundColor="#fff"
            {...props}
          >
            <div>
              Conteúdo do Modal
            </div>
          </Box>
        )}
      </Modal>
      <Menu />
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '61px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            onClick={() => {
              setModal(!isModalOpen);
            }}
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              margin={{
                xs: '0',
                md: '0',
              }}
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>
            <CustomButton
              variant="primary.main"
              margin={{
                xs: '0 auto 30px auto',
                md: 'initial',
              }}
              display="block"
            >
              Cadastrar
            </CustomButton>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              style={{ display: 'block', margin: 'auto' }}
              aria-hidden
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Image of cell."
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
};

export default Home;
