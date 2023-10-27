import Image from "next/image";

const HelpPage = () => {
  return (
    <main className="flex-1 bg-base-300">
      <div className="w-full h-1 bg-gray-300"></div>

      <div className="p-4 bg-orange-200 h-[200px]">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div>
            <p className="text-lg">Help Center</p>
            <h3 className="text-xl font-semibold">Hi, how can we help you?</h3>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-4 -translate-y-16">
            <div className="bg-white flex rounded-md overflow-hidden min-h-[116px]">
              <p className="p-4">How to place an order</p>
              <Image
                src="/help-center-1.png"
                alt=""
                width={500}
                height={500}
                className="w-20 h-20 self-end"
              />
            </div>

            <div className="bg-white flex rounded-md overflow-hidden min-h-[116px]">
              <p className="p-4">How to place an order</p>
              <Image
                src="/help-center-1.png"
                alt=""
                width={500}
                height={500}
                className="w-20 h-20 self-end"
              />
            </div>

            <div className="bg-white flex rounded-md overflow-hidden min-h-[116px]">
              <p className="p-4">How to place an order</p>
              <Image
                src="/help-center-1.png"
                alt=""
                width={500}
                height={500}
                className="w-20 h-20 self-end"
              />
            </div>

            <div className="bg-white flex rounded-md overflow-hidden min-h-[116px]">
              <p className="p-4">How to place an order</p>
              <Image
                src="/help-center-2.png"
                alt=""
                width={500}
                height={500}
                className="w-20 h-20 self-end"
              />
            </div>

            <div className="bg-white flex rounded-md overflow-hidden min-h-[116px]">
              <p className="p-4">How to place an order</p>
              <Image
                src="/help-center-3.png"
                alt=""
                width={500}
                height={500}
                className="w-20 h-20 self-end"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpPage;
