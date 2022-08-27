import Register from "./register";

export default function Home() {
  return (
    <div>
      <h1>Zleed</h1>

      <a href="/register">Register</a> | <a href="/login">Login</a>

      <h3>Test:</h3>
      <Register />
    </div>
  )
}
