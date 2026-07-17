import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import SEO from "../components/seo/SEO";
import BlogPinWall from "../components/blog-admin/BlogPinWall";
import NewBlogForm from "../components/blog-admin/NewBlogForm";

import { SITE_NAME, SITE_URL } from "../config/site";

function NewBlogPage() {
  const [isCheckingAuth, setIsCheckingAuth] =
    useState(true);

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  useEffect(() => {
    let isActive = true;

    async function checkAuthentication() {
      try {
        const response = await fetch(
          "/api/blog-auth"
        );

        const result = await response.json();

        if (isActive) {
          setIsAuthenticated(
            Boolean(result.authenticated)
          );
        }
      } catch (error) {
        console.error(
          "Unable to check blog authentication:",
          error
        );

        if (isActive) {
          setIsAuthenticated(false);
        }
      } finally {
        if (isActive) {
          setIsCheckingAuth(false);
        }
      }
    }

    checkAuthentication();

    return () => {
      isActive = false;
    };
  }, []);

  async function handleLogout() {
    try {
      await fetch("/api/blog-auth", {
        method: "DELETE",
      });
    } finally {
      setIsAuthenticated(false);
    }
  }

  if (isCheckingAuth) {
    return (
      <main className="min-h-[70vh] bg-[#f5f5f7] px-6 py-24">
        <p
          className="text-center font-medium text-[var(--brand-navy)]"
          role="status"
        >
          Checking access...
        </p>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`Add New Blog | ${SITE_NAME}`}
        description="Private blog administration page."
        canonical={`${SITE_URL}/newblog`}
      />

      <Helmet>
        <meta
          name="robots"
          content="noindex, nofollow, noarchive"
        />
      </Helmet>

      <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
        {isAuthenticated ? (
          <NewBlogForm
            onSessionExpired={() =>
              setIsAuthenticated(false)
            }
            onLogout={handleLogout}
          />
        ) : (
          <BlogPinWall
            onAuthenticated={() =>
              setIsAuthenticated(true)
            }
          />
        )}
      </main>
    </>
  );
}

export default NewBlogPage;