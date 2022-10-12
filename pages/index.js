import Link from 'next/link';


export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <a>This is our team</a>
      <ul>
      <li>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </li>
      </ul>
    </>
  );
}
