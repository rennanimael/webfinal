import Main from '../pages/home'


export default function Home() {
  return (
    <div>
      <Main />
      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '1rem', background: '#f8f8f8'}}>
         <p>{new Date().getFullYear()} Imael & Glauber. Prog Web.</p>
     </footer>
    </div>
  );
}
