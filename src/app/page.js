import Layout from "../components/layout";
import Hero from "../components/hero";
import Footer from "../components/footer";
import ButtonShowcase from "../components/ComponentShowcase/ButtonShowcase";
import InputShowcase from "../components/ComponentShowcase/InputShowcase";
import TextAreaShowcase from "../components/ComponentShowcase/TextAreaShowcase";

export default function Home() {
  return (
    <Layout>
      <main className="grid gap-12 p-8 relative">
        <Hero />
        <div className="grid gap-8">
          <ButtonShowcase />
          <InputShowcase />
          <TextAreaShowcase />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
