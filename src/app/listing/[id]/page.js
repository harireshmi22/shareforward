import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingDetail from "@/components/ListingCard";

export const instant = false;

export const metadata = {
  title: "Listing Details — ShareForward",
  description: "View and claim surplus items on ShareForward.",
};

export default async function ListingPage({ params }) {
  const { id } = await params;
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ListingDetail id={id} />
        </div>
      </main>
      <Footer />
    </>
  );
}
