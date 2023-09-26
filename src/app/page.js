import Data from './data'
import Link from 'next/link';
import FollowSquare from './followSquare'

export default function Home() {

  return (
    <div className="">
      <h1>
        <Link href="/">HOME</Link>
      </h1>
      <Data />
      {/* <FollowSquare /> */}
    </div>
  )
}
