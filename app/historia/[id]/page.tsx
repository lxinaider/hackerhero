import { Header } from "@/components/common/header";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex h-svh overflow-hidden p-6">
      <div className="flex flex-col gap-4 text-sm leading-loose w-full">
        <Header />

        <div className="relative size-full flex flex-col justify-between items-center gap-2 text-center">
          <div className="flex flex-col items-center gap-2 m-auto">
            <h1 className="text-3xl font-bold">Book ID: {id}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
