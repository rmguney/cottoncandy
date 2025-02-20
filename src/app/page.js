import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className="grid gap-12">
        <Hero />
      </main>
      <Footer />
    </Layout>
  );
}
