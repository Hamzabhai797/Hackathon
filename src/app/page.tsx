import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="h-20 w-[800]px flex justify-between items-center mx-8">
      <div>
        <h2 className="text-4xl font-semibold">Furniro</h2>
        </div>
        <div className="h-16 w-80 text-2xl flex justify-center items-center">
        <ul className="flex flex-row justify-center items-center space-y-1 gap-10">
          <li>Home</li>
          <li>Shop</li>
          <li>blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="h-16 w-28 "></div>
      </nav>
      <div style={{backgroundImage: "url('/image.png.webp')"}} className="h-96 w-auto bg-slate-500 flex flex-col justify-center items-center bg">
        <h4 className="font-bold text-7xl">Cart</h4>
        <h5 className="text-4xl font-medium">Home cart</h5>
      </div>
      <div className="h-[500] w-auto">
        <div className="h-12 w-[750] bg-pink-200 ml-24 absolute mt-20 flex flex-row pl-5 items-center justify-center">
          <h3 className="ml-10 font-semibold">Product</h3>
          <h3 className="ml-[70] font-semibold">Price</h3>
          <div className="h-10 w-60 ml-[250] flex flex-row gap-12 px-5 items-center">
            <h6 className="font-semibold">Quantity</h6>
            <h6 className="font-semibold">Subtotal</h6>
          </div>

          <div className="h-24 w-24 mt-60 absolute -ml-[680] rounded-md">
            <Image src={'/image.jpg.png'} width={100} height={50} alt="pic" /> 
          </div>
          <p className="mt-60 text-2xl absolute -ml-96 text-gray-600 ">Asgaard sofa</p>
          <p className="mt-60 text-2xl absolute text-gray-600">Rs 250,000.00</p>
          <div className="absolute mt-60 bg-slate-50 ml-72 h-10 w-10 rounded-md text-3xl flex items-center justify-center">1</div>
          <p className="mt-60 text-2xl absolute text-black ml-[550]">Rs 250,000.00</p>
        </div>

        <div className="h-[350] w-[350] bg-pink-300 ml-[960] absolute mt-20 flex">
          <h1 className="text-3xl ml-24 mt-5 font-bold">Cart Totals</h1>
          <h6 className="mt-20 -ml-48 text-2xl font-semibold">Subtotal</h6>
          <p className="mt-20 ml-16 text-gray-700 text-1xl">Rs 250,000.00</p>
          <h6 className="mt-36 -ml-64 text-2xl">Total</h6>
          <p className="mt-36 ml-20 text-orange-500 text-2xl">Rs 250,000.00</p>
          <button className="h-12 mt-52 px-7 -ml-56 text-2xl border-[black] border rounded-2xl">Check out</button>
        </div>
      </div>
      <div className="h-60 w-auto bg-pink-400 flex">
        <h2 className="ml-20 mt-16 absolute text-4xl font-semibold">High Quality</h2>
        <p className="ml-20 mt-28 absolute text-2xl">Crafted from top materials</p>
        <h2 className="ml-[420] mt-16 absolute text-3xl font-semibold">Warranty Protection</h2>
        <p className="ml-[420] mt-28 absolute text-2xl">Over 2 years</p>
        <h2 className="ml-[770] mt-16 absolute text-3xl font-semibold">Free Shipping</h2>
        <p className="ml-[770] mt-28 absolute text-2xl">Order Over 150$</p>
        <h2 className="ml-[1060] mt-16 absolute text-3xl font-semibold">24 / 7 Support</h2>
        <p className="ml-[1060] mt-28 absolute text-2xl">Dedicated Support</p>
      </div>

      <div className="h-[570] w-auto flex">
        <h1 className="ml-16 mt-10 absolute text-4xl font-bold">Funiro</h1>
        <p className="ml-14 mt-32 text-1xl">400 universities Drive Suite 200 Coral<br></br>
        Gables,<br></br>
        Fl 33134 USA</p>
        <p className="ml-[420] mt-12 absolute text-2xl">Links</p>
        <h1 className="mt-32 ml-[420] absolute font-semibold">Home</h1>
        <h1 className="mt-48 ml-[420] absolute font-semibold">Shop</h1>
        <h1 className="mt-64 ml-[420] absolute font-semibold">About</h1>
        <h1 className="mt-80 ml-[420] absolute font-semibold">Contact</h1>
        <p className="ml-[670] mt-12 absolute text-2xl">Help</p>
        <h2 className="mt-32 ml-[660] absolute font-semibold">Payment Options</h2>
        <h2 className="mt-48 ml-[660] absolute font-semibold">Returns</h2>
        <h2 className="mt-64 ml-[660] absolute font-semibold">Privacy Policies</h2>
        <p className="ml-[970] mt-12 absolute text-2xl">Newsletter</p>
        <input type="text" placeholder="Enter Your Email" className="h-10 ml-[970] mt-24 border-b-4 absolute" />
        <h1 className="ml-[1175] absolute mt-24 text-2xl font-semibold">SUBSCRIBE</h1>
        <div className="h-1 w-32 bg-black mt-[130] absolute ml-[1175]"></div>
        <div className="h-1 w-[1270] mt-[400] ml-10 absolute bg-slate-300"></div>
        <p className="ml-12 absolute mt-[430] text-3xl">2023 furino. All rights reverved</p>
      </div>
      </div>
  );
}
