import { useRouter } from "next/router";

const Dog = () => {
  const router = useRouter();
  const { did } = router.query;

  return <p>Dog: {did}</p>;
};

export default Dog;
