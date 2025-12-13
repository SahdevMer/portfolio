import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" pb-[400px] pt-5 md:py-5 px-6 border-t  border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Sahdev Mer</h3>
            <p className="text-muted-foreground">
              Frontend Developer passionate about creating beautiful and
              functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm"> contact@sahdevMer.dev</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Me</h4>
            <div className="flex gap-2">
              <button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Github className="w-4 h-4" />
              </button>

              <button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8  text-center">
          <p className="text-muted-foreground">
            © 2025 Sahdev Mer. All rights reserved. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
