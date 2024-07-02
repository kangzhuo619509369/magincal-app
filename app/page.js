import { Button } from "antd";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <div className="mb-20 text-blue-300 text-3xl">欢迎回来！</div>
      <div>
        <Link href="/dashboard">
          <Button type="primary" className="mr-8">
            login-link
          </Button>
        </Link>
        <Button type="primary" className="mr-8">
          login
        </Button>
        <Button>sign up</Button>
      </div>
    </main>
  );
}
