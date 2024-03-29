import { Box, Button } from '@mui/material';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { params, searchParams }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  // const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL('https://next14-gold.vercel.app'),
    title: 'Дефицит',
    description: 'Приложение для наблюдения за метатегами',
    alternates: {
      canonical: '/',
      languages: {
        'uk-UA': '/uk-UA',
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
    openGraph: {
      images: [
        {
          url: 'https://upload.wikimedia.org/wikipedia/en/4/41/IMG_Worlds_of_Adventure.png',
        },
      ],
      type: 'website',
      url: 'https://myURL.com',
      title: 'это OG Title',
      description: 'это OG description',
      siteName: 'OG siteName - my TEst project',
      locale: 'uk-UA',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}

export default function Home() {
  return (
    <Box>
      <Button>test button</Button>
    </Box>
  );
}
