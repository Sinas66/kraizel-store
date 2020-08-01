import Link from "next/link";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Link href="/">
        <a>GO HOME FROM {id}</a>
      </Link>
    </div>
  );
};
