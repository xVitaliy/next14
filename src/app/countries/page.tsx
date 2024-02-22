// import { Link as MUILink, Stack } from '@mui/material';
import { Stack } from '@mui/material';
import { client } from '@/graphql/client';
import { COUNTRIES } from '@/graphql/query/countries.gql';
// import Link from 'next/link';
import { CountriesQuery } from '@/graphql/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://next14-gold.vercel.app'),
    title: 'Countries',
    description: 'Countries description',
    alternates: {
      canonical: '/countries',
      languages: {
        'uk-UA': '/uk-UA',
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
  };
}

// export const metadata: Metadata = {
//   metadataBase: new URL('https://next14-gold.vercel.app'),
//   title: 'Countries',
//   description: 'Countries description',
//   alternates: {
//     canonical: '/countries',
//     languages: {
//       'uk-UA': '/uk-UA',
//       'en-US': '/en-US',
//       'de-DE': '/de-DE',
//     },
//   },
// };

async function getData() {
  try {
    const res = await client.query<CountriesQuery>({
      query: COUNTRIES,
    });
    return res.data;
  } catch {
    notFound();
  }
}

export default async function Countries() {
  const data = await getData();

  return (
    <Stack>
      {data.countries.map((country) => {
        return (
          // <MUILink key={country.code} component={Link} href={`countries/${country.code}`}>
          //   {country.name}
          // </MUILink>
          <Link key={country.code} href={`countries/${country.code}`}>
            {country.name}
          </Link>
        );
      })}
    </Stack>
  );
}
