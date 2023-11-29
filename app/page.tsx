import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="flex flex-col w-full gap-3">
            <div className="grid px-6 h-20 card bg-base-300 rounded-box place-items-center text-6xl font-bold text-primary">
              Where
            </div>

            <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-6xl font-bold text-primary">
              I
            </div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-6xl font-bold text-primary">
              Go
            </div>
          </div>
          <div className="divider"></div>
          <Link href={"/chat"}>
            <div className="btn btn-primary">Get started</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
