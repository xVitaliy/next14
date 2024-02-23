import { Link as MUILink } from '@mui/material';
import { client } from '@/graphql/client';
import { COUNTRIES } from '@/graphql/query/countries.gql';
import { CountriesQuery } from '@/graphql/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Wrap } from '@/app/countries/Wrap.styled';

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
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
}

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
    <Wrap>
      {data.countries.map((country) => {
        return (
          <MUILink key={country.code} component={Link} href={`countries/${country.code}`}>
            {country.name}
          </MUILink>
        );
      })}
    </Wrap>
  );
}
