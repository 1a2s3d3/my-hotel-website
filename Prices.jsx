import PageWrapper from "../components/PageWrapper";

function Prices() {
return (
<PageWrapper title="Prices" titleClass="text-center">

<div className="flex justify-center px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-6 w-full max-w-5xl">

<div className="bg-black p-4 rounded shadow text-center">
<h2 className="font-bold text-lg">Hospitality</h2>
<p className="mt-2 text-green-600 font-semibold">₦400,000</p>
</div>

<div className="bg-black p-4 rounded shadow text-center">
<h2 className="font-bold text-lg">Swimming Pool</h2>
<p className="mt-2 text-green-600 font-semibold">₦150,000</p>
</div>

<div className="bg-black p-4 rounded shadow text-center">
<h2 className="font-bold text-lg">Restaurant</h2>
<p className="mt-2 text-green-600 font-semibold">₦300,000</p>
</div>

<div className="bg-black p-4 rounded shadow text-center">
<h2 className="font-bold text-lg">Playstation</h2>
<p className="mt-2 text-green-600 font-semibold">₦50,000</p>
</div>

</div>
</div>

</PageWrapper>
);
}

export default Prices;