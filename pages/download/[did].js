import { useRouter } from "next/router";

const Dog = ({ dog }) => {
  const router = useRouter();
  const { did } = router.query;

  return (
    <div>
      <p>Dog: {did}</p>
      <img src={dog} />
    </div>
  );
};

Dog.getInitialProps = async (ctx) => {
  const res = await fetch("https://dog.ceo/api/breed/hound/images/random");
  const json = await res.json();
  return { dog: json.message };
};

export default Dog;
