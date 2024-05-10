import Footer from '../components/footer';
import Navigation from '../components/nav';
import NavigationBar from '../components/nav-bar';

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
}
