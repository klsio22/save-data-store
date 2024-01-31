import Search from './components/Search';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '70vh',
        maxWidth: "100%",
        backgroundColor: 'rgb(245, 245, 245)',
        padding: '2rem',
      }}
    >
      <Search />
    </main>
  );
}
