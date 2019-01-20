import React from 'react'

import Layout from '../components/layout'
import {
  Section,
  Container,
  Columns,
  Column,
} from '../components/webhart-components'
import css from '@emotion/css'

const IndexPage = () => (
  <Layout>
    <Section>
      <Container>
        <h1>Hi from the home page</h1>
      </Container>
      <Container>
        <Columns>
          <Column
            css={css`
              font-size: 1rem;
            `}
          >
            <h2>
              Non reprehenderit anim excepteur voluptate eu ullamco id Lorem et.
            </h2>
            <p>
              Magna excepteur laborum id tempor amet esse. In et cillum mollit
              voluptate. Minim esse elit veniam labore culpa labore eu nisi
              incididunt eu. Consequat proident adipisicing sit irure magna
              Lorem sit laboris irure. Incididunt ut elit ex voluptate. Magna
              ipsum enim pariatur ad adipisicing dolor nisi sunt sunt
              exercitation ipsum deserunt commodo. Est laboris pariatur ipsum
              excepteur cillum Lorem. Non eiusmod ipsum ullamco proident. Esse
              id incididunt amet quis exercitation mollit eu consequat tempor
              deserunt dolore.
            </p>
          </Column>
          <Column
            css={css`
              font-size: 1.1em;
            `}
          >
            <h2>
              Non reprehenderit anim excepteur voluptate eu ullamco id Lorem et.
            </h2>
            <p>
              Magna excepteur laborum id tempor amet esse. In et cillum mollit
              voluptate. Minim esse elit veniam labore culpa labore eu nisi
              incididunt eu. Consequat proident adipisicing sit irure magna
              Lorem sit laboris irure. Incididunt ut elit ex voluptate. Magna
              ipsum enim pariatur ad adipisicing dolor nisi sunt sunt
              exercitation ipsum deserunt commodo. Est laboris pariatur ipsum
              excepteur cillum Lorem. Non eiusmod ipsum ullamco proident. Esse
              id incididunt amet quis exercitation mollit eu consequat tempor
              deserunt dolore.
            </p>
          </Column>
          <Column
            css={css`
              font-size: 0.9em;
            `}
          >
            <h2>
              Non reprehenderit anim excepteur voluptate eu ullamco id Lorem et.
            </h2>
            <p>
              Magna excepteur laborum id tempor amet esse. In et cillum mollit
              voluptate. Minim esse elit veniam labore culpa labore eu nisi
              incididunt eu. Consequat proident adipisicing sit irure magna
              Lorem sit laboris irure. Incididunt ut elit ex voluptate. Magna
              ipsum enim pariatur ad adipisicing dolor nisi sunt sunt
              exercitation ipsum deserunt commodo. Est laboris pariatur ipsum
              excepteur cillum Lorem. Non eiusmod ipsum ullamco proident. Esse
              id incididunt amet quis exercitation mollit eu consequat tempor
              deserunt dolore.
            </p>
          </Column>
        </Columns>
      </Container>
    </Section>
    <Section>
      <Columns>
        <Column>
          <h2>
            Non reprehenderit anim excepteur voluptate eu ullamco id Lorem et.
          </h2>
          <p>
            Magna excepteur laborum id tempor amet esse. In et cillum mollit
            voluptate. Minim esse elit veniam labore culpa labore eu nisi
            incididunt eu. Consequat proident adipisicing sit irure magna Lorem
            sit laboris irure. Incididunt ut elit ex voluptate. Magna ipsum enim
            pariatur ad adipisicing dolor nisi sunt sunt exercitation ipsum
            deserunt commodo. Est laboris pariatur ipsum excepteur cillum Lorem.
            Non eiusmod ipsum ullamco proident. Esse id incididunt amet quis
            exercitation mollit eu consequat tempor deserunt dolore.
          </p>
        </Column>
        <Column>
          <h2>
            Non reprehenderit anim excepteur voluptate eu ullamco id Lorem et.
          </h2>
          <p>
            Magna excepteur laborum id tempor amet esse. In et cillum mollit
            voluptate. Minim esse elit veniam labore culpa labore eu nisi
            incididunt eu. Consequat proident adipisicing sit irure magna Lorem
            sit laboris irure. Incididunt ut elit ex voluptate. Magna ipsum enim
            pariatur ad adipisicing dolor nisi sunt sunt exercitation ipsum
            deserunt commodo. Est laboris pariatur ipsum excepteur cillum Lorem.
            Non eiusmod ipsum ullamco proident. Esse id incididunt amet quis
            exercitation mollit eu consequat tempor deserunt dolore.
          </p>
        </Column>
        <Column>
          <h1>h1 title</h1>
          <h2>h2 title</h2>
          <h3>h3 title</h3>
          <h4>h4 title</h4>
          <h5>h5 title</h5>
          <h6>h6 title</h6>
        </Column>
      </Columns>
    </Section>
  </Layout>
)

export default IndexPage
