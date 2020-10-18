import {
  Text
} from '@chakra-ui/core'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'


const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
    </Main>

    <Footer>
      <Text> ❤️ </Text>
    </Footer>
  </Container>
)

export default Index
