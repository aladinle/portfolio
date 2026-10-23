# Trung Le portfolio

Responsive, dependency-free homepage based on the owner's resume.

## Local development

Run `npm test`, then `npm run dev`. Open http://127.0.0.1:4173.
Edit `dist/index.html` for content and `dist/styles.css` for design. No build step is needed.

## Free deployment

GitHub Pages supports free hosting from public repositories, including HTTPS and a github.io address. A separately registered custom domain is optional and may cost money.

1. Create a public repository in `aladinle`, for example `portfolio` (check availability first).
2. Push this repository's main branch to that repository.
3. In repository Settings → Pages, select **GitHub Actions** as the source.
4. Run the Publish portfolio workflow or push to main.
5. Use the URL returned by the deployment. For a repository named portfolio the expected address is https://aladinle.github.io/portfolio/; this is not a claim that it is already deployed.

The workflow tests the source before uploading only dist. Source documents and the private resume PDF are not deployed. Relative paths also support project URLs and custom domains.

Official hosting reference: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

See docs/PLAN.md for scope and docs/REVIEW.md for validation and peer review status.
