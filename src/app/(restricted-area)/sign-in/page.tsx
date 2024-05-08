import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// import { useTheme } from "next-themes";

export default function SignIn (): JSX.Element {
  // const { theme } = useTheme()

  // console.log('theme', theme)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Definir a altura da página inteira
        backgroundColor: '#f5f5f5' // Cor de fundo para facilitar a visualização
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '400px',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          backgroundColor: 'white'
        }}
      >
        <h2>Login</h2>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: "center",
            justifyContent: 'center',
            width: '100%'
            // color: theme === 'dark' ? 'text-white' : 'text-black',
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="username" style={{}}>Username:</label>
            {/* <input type="text" id="username" name="username" /> */}
            <Input />

            <label htmlFor="password">Password:</label>
            {/* <input type="password" id="password" name="password" /> */}
            <Input />
          </div>
          {/* <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button> */}
          <Button variant="outline">Button</Button>
        </form>
      </div>
    </div>
  )
}
