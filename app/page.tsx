import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Zap, Workflow, Terminal, Users, Cpu, GitBranch } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <Workflow className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-black text-xl text-foreground">BrowserSwitch</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
            <a
              href="https://github.com/RajSolai/WebSwitch"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Open Source • macOS
          </Badge>
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Switch Browsers
            <br />
            <span className="text-primary">Instantly</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop juggling browser windows. BrowserSwitch lets you seamlessly switch between your personal, work, and
            freelance browser workflows with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://github.com/RajSolai/WebSwitch/releases/download/v1-dev/WebSwitch.app.zip"
              className="flex items-center rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted font-semibold px-8 py-3 bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Free • Open Source • macOS 12.0+</p>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">See It In Action</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Watch how BrowserSwitch transforms your multi-browser workflow from chaotic to seamless.
          </p>

          <div className="relative bg-card border border-border rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground font-medium">Demo Video Coming Soon</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Upload your demo video to showcase BrowserSwitch in action
                </p>
              </div>
            </div>
            {/* Uncomment and replace with your video when ready */}
            {/* 
            <video 
              className="w-full h-full object-cover" 
              controls 
              poster="/video-thumbnail.jpg"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Built for Multi-Browser Workflows
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re a developer, freelancer, or just someone who values organization, BrowserSwitch adapts to
              your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-xl">Lightning Fast</CardTitle>
                <CardDescription>
                  Switch between browsers in milliseconds. No more hunting through dock icons or command-tabbing through
                  windows.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-xl">Resource Friendly</CardTitle>
                <CardDescription>
                  Designed for developers who demand efficiency. Uses minimal system resources, so you can keep your machine fast and responsive—even with multiple browsers open.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-xl">Open Source</CardTitle>
                <CardDescription>
                  Completely free and open source. Contribute, customize, or audit the code. Your workflow, your rules.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Perfect For Your Workflow
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Developers</h3>
              <p className="text-muted-foreground">
                Chrome for testing, Firefox for debugging, Safari for iOS development. Switch contexts instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Freelancers</h3>
              <p className="text-muted-foreground">
                Keep client work separate from personal browsing. Professional boundaries made simple.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Professionals</h3>
              <p className="text-muted-foreground">
                Work browser for corporate tools, personal browser for everything else. Clean separation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">Ready to Switch?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download BrowserSwitch and take control of your browser workflow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for macOS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted font-semibold px-8 py-3 bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Version 1.0.0 • 2.1 MB • Requires macOS 12.0 or later</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <Workflow className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-foreground">BrowserSwitch</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/RajSolai/WebSwitch/RajSolai/WebSwitch"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="mailto:msraj085@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 BrowserSwitch. Open source software released under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
