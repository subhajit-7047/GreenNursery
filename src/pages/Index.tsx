import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedPlants from '@/components/FeaturedPlants';
import Interactive3DShowcase from '@/components/Interactive3DShowcase';
import PlantCareGuide from '@/components/PlantCareGuide';
import CustomerReviews from '@/components/CustomerReviews';
import TreeArticles from '@/components/TreeArticles';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedPlants />
        <Interactive3DShowcase />
        <PlantCareGuide />
        <CustomerReviews />
        <TreeArticles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;