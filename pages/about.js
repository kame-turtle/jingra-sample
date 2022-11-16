import Container from 'components/container';
import Hero from 'components/hero';
import PostBody from 'components/post-body';
import Contact from 'components/contact';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from 'components/two-column';

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About agriculture" />
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              テスト・テスト・テスト・テスト・テスト・テスト・テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・
            </p>
            <h2>ダミータイトル２</h2>
            <p>
              テスト・テスト・テスト・テスト・テスト・テスト・テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
            </p>
            <h3>ダミータイトル３</h3>
            <p>
              テスト・テスト・テスト・テスト・テスト・テスト・テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・ テスト・テスト・テスト・
              テスト・テスト・テスト・
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
