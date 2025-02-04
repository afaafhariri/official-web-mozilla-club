import Link from "next/link"
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer column 1 */}
          <div>
            {/* Logo Image */}
            <img
              src="/assets/Mozilla-logo.png"
              alt="Mozilla Logo"
              className="h-8 w-auto mb-2"
            />
            <h3 className="font-bold mb-4">Mozilla Campus Club of SLIIT</h3>
            <p className="text-sm text-gray-600">
              Empowering students through open source technology and innovation.
            </p>
          </div>

          {/* Footer column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-primary">
                About
              </Link>
              <Link href="/events" className="text-sm hover:text-primary">
                Events
              </Link>
              <Link href="/blog" className="text-sm hover:text-primary">
                Blog
              </Link>
              <Link href="/contact" className="text-sm hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Footer column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm space-y-2">
              <p>SLIIT Malabe Campus</p>
              <p>New Kandy Road</p>
              <p>Malabe, Sri Lanka</p>
              <p>Email: mozilla@sliit.lk</p>
            </div>
          </div>

          {/* Footer column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Mozilla Campus Club of SLIIT. Made with ❤️ by SLIIT Mozillians
        </div>
      </div>
    </footer>
  )
}
