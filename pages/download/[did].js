import Head from "next/head";

const Dog = ({ dog, breed }) => (
  <>
    <Head>
      <title>{breed}</title>
      <meta property="og:image" content={dog} />
    </Head>
    <p>Breed: {breed}</p>
    <img src={dog} />
  </>
);

Dog.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://dog.ceo/api/breed/${query.did}/images/random`
  );
  const json = await res.json();
  return { dog: json.message, breed: query.did };
};

export default Dog;
