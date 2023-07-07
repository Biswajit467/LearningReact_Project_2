import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  texttransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            veniam, consectetur doloribus nemo aliquid reprehenderit iste eius,
            officia explicabo, ut ipsam illum aliquam sint nesciunt? Hic
            reiciendis quaerat aliquam facere totam, consequatur atque laborum
            dolor eligendi quisquam eum ut optio, maiores fuga pariatur aperiam
            nesciunt voluptates quod. Aliquam nemo dicta praesentium sed
            perspiciatis molestiae ex commodi voluptatum? Sunt nisi voluptate,
            numquam vel velit perspiciatis quos repellendus architecto quo
            suscipit omnis molestiae aperiam, officia cupiditate ipsam
            recusandae cumque assumenda ipsa? Incidunt error ipsum omnis placeat
            ex optio labore adipisci, expedita molestiae, molestias nam
            cupiditate doloribus veritatis quos deleniti nobis distinctio
            explicabo exercitationem ab quam. Dicta at quis beatae odit cum!
            Dolorum dolor error at veritatis animi quaerat fugit nesciunt quae?
            Enim tempora doloribus obcaecati.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading> 
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
