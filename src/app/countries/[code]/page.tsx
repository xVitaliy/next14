import { Stack } from '@mui/material';
import { client } from '@/graphql/client';
import { CountryQuery, CountryQueryVariables } from '@/graphql/generated';
import { COUNTRY } from '@/graphql/query/country.gql';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';

//! from public
// import img from '/image/tree.jpg';
// import img from '../../../../public/image/tree.jpg';
// import mountains from '../../../../public/mountains.jpg';

export async function generateMetadata(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { params: { code }, searchParams }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { country } = await getData(code);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL('https://next14-gold.vercel.app'),
    title: country?.name || '',
    description: 'Country description',
    alternates: {
      canonical: `/countries/${code}`,
    },
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}

async function getData(code: string) {
  const res = await client.query<CountryQuery, CountryQueryVariables>({
    query: COUNTRY,
    variables: {
      code: code,
    },
  });
  return res.data;
}

type Props = {
  params: { code: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export const metadata: Metadata = {
//   metadataBase: new URL('https://next14-gold.vercel.app'),
//   title: 'Country 1111111111',
//   description: 'CountriY description 1111111111',
//   alternates: {
//     canonical: '/countriY',
//     languages: {
//       'uk-UA': '/uk-UA',
//       'en-US': '/en-US',
//       'de-DE': '/de-DE',
//     },
//   },
// };

export default async function Countries({ params: { code } }: Props) {
  const { country } = await getData(code);

  return (
    <Stack>
      <Stack>{country?.name}</Stack>
      <Stack>
        <Image
          src={`https://countryflagsapi.netlify.app/flag/${code}.svg`}
          alt={country?.name || ''}
          width={300}
          height={200}
          quality={75}
          blurDataURL={'/image/mountains.jpg'}
          placeholder={'blur'}
        />
      </Stack>
      <Stack>country code: {code}</Stack>
    </Stack>
  );
}
