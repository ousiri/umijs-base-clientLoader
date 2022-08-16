import { useClientLoaderData } from "@umijs/max";
import yayJpg from '../assets/yay.jpg';

export async function clientLoader() {
  console.log('running clientLoader');
  return { a: 111 };
}

export default function HomePage() {
  const data = useClientLoaderData();
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
