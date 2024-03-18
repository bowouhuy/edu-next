'use client'
import BannerLogin from '@/components/organisms/Auth/Banner';
import BasicSection from '@/components/atoms/BasicSection';
import Container from '@/components/atoms/Container';
import ClientMiddleware from '@/components/molecules/ClientMiddleware';


const LoginContent = {
  title: "Welcome to your teacher incentive Program",
  short_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. ",
  image: ''
}

export default function Page() {
  return (
    <ClientMiddleware>
      <BasicSection className="first-child login-section">
        <Container>
          <BannerLogin data={LoginContent} />
        </Container>
      </BasicSection>
    </ClientMiddleware>
  );
};
