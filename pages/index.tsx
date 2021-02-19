import React from 'react';
import CustomButton from '../src/components/commons/CustomButton';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';
import { Grid } from '../src/components/layout/Grid';
import { Box } from '../src/components/layout/Box';

const Home: React.FC = () => (
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
          <image
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            alt="Alternative Image"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Footer />
  </Box>
);

export default Home;
