

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          StudySphere: Empowering aspiring coders to master
          the art of programming. Join our vibrant community
          and unlock your potential in the world of coding.
          Start your journey today!
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Phagwara, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@StudySphere.com</p>
          <p>Phone: (180) 123-7890</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 StudySphere. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer