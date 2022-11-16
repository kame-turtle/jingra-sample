import Container from 'components/container';
import Hero from 'components/hero';
import PostBody from 'components/post-body';
import Contact from 'components/contact';

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About agriculture" />
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
      <Contact/>
    </Container>
  );
}
