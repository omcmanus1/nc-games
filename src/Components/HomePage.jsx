import dice from "../assets/dice.png"

export default function HomePage() {
  return (
    <>
      <h1 className="page-header">Welcome To NC Games Reviews</h1>
      <h2 className="home-subtitle">&uarr; Pick An Option From The Navbar &uarr;</h2>
      <img src={dice} alt="dice-logo" className="homepage-logo"/>
      <h3>Browse as a guest, or log in to post and delete comments!</h3>
    </>
  );
}
