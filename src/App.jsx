import { Button } from "@/components/ui/button"
import { Code2, Box, Layers } from "lucide-react"

const App = () => {
  const handleCRAClick = () => window.open('https://create-react-app.dev/docs/getting-started', '_blank')
  const handleShadcnClick = () => window.open('https://ui.shadcn.com/docs', '_blank')
  const handleJSClick = () => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', '_blank')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            React CRA + shadcn/ui + JavaScript
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Modern React development with Create React App and shadcn/ui components using JavaScript
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
            <Button variant="outline" className="h-24 space-x-4" onClick={handleCRAClick}>
              <Code2 className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">CRA Setup</div>
                <div className="text-sm text-gray-500">Quick start guide</div>
              </div>
            </Button>

            <Button variant="outline" className="h-24 space-x-4" onClick={handleShadcnClick}>
              <Box className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Components</div>
                <div className="text-sm text-gray-500">Pre-built UI components</div>
              </div>
            </Button>

            <Button variant="outline" className="h-24 space-x-4" onClick={handleJSClick}>
              <Layers className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">JavaScript</div>
                <div className="text-sm text-gray-500">MDN JS Guide</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App