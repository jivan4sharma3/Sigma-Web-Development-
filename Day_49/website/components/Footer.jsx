import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 mt-10">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-white">MyApp</h2>
                        <p className="mt-3 text-sm">
                            Building modern web applications with React and Tailwind CSS.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Home</li>
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Services</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Email: support@myapp.com</li>
                            <li>Phone: +977-XXXXXXXX</li>
                            <li>Location: Nepal</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 py-4 text-center text-sm">
                    © {new Date().getFullYear()} MyApp. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer
