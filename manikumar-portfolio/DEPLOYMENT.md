# Deployment Guide — GitHub Pages (Free, 24/7)

This guide walks through publishing this portfolio as a live website using
**GitHub Pages**. It's free forever for public repositories, requires no
server management, and the site stays up 24/7 as long as your GitHub account
and repository exist.

---

## Prerequisites

- A [GitHub account](https://github.com/join) (free tier is enough).
- [Git](https://git-scm.com/downloads) installed on your computer
  *(optional — you can also do everything from the GitHub website without
  installing anything, see **Option B** below)*.
- This project folder (`manikumar-portfolio/`) on your computer.

---

## Step 1: Add your photo first

Before publishing, drop your real photo into `assets/images/` (e.g. as
`profile.jpg`) and update the `<img src="...">` in `index.html` to point to
it. See the "Before you deploy" section in `README.md` for exact steps.

---

## Step 2: Create a new GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. **Repository name:** something like `portfolio` or `manikumar-thote-portfolio`.
   - This name becomes part of your live URL, so keep it simple.
3. Set visibility to **Public** (GitHub Pages free tier requires this for
   personal accounts).
4. **Do not** check "Add a README" — you already have one in the folder.
5. Click **Create repository**.

You'll land on a page with setup instructions — keep it open, you'll need the
repository URL shown there (something like
`https://github.com/<your-username>/<repository-name>.git`).

---

## Step 3: Upload the project

### Option A — using Git (command line)

Open a terminal, navigate into the project folder, and run:

```bash
cd path/to/manikumar-portfolio

git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

Replace `<your-username>` and `<repository-name>` with your actual GitHub
username and the repository name you chose in Step 2.

### Option B — using the GitHub website (no Git install needed)

1. On your new (empty) repository page, click **uploading an existing file**.
2. Drag the **entire contents** of the `manikumar-portfolio` folder into the
   upload area (all files and the `css`, `js`, `assets` subfolders).
   - Make sure `index.html` ends up at the **root** of the repository, not
     nested inside an extra folder.
3. Scroll down, add a commit message like `Initial commit`, and click
   **Commit changes**.

---

## Step 4: Turn on GitHub Pages

1. In your repository, go to **Settings** (top menu bar).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a
   branch**.
4. Under **Branch**, choose **main** and folder **/(root)**, then click
   **Save**.
5. Wait 1–2 minutes. Refresh the page — GitHub will show a green banner with
   your live URL:

   ```
   https://<your-username>.github.io/<repository-name>/
   ```

That's it — the site is now live, free, and available 24/7 from any device
or browser.

---

## Step 5: Verify it works everywhere

- Open the URL on your phone and on a desktop browser to confirm the
  responsive layout looks right.
- Check that the navigation links, email link, LinkedIn link, and TryHackMe
  links all open correctly.

---

## Making future updates

Any time you edit files and want the live site to reflect the change:

**With Git:**
```bash
git add .
git commit -m "Update experience section"
git push
```

**With the website:** open the file in your repository, click the pencil
(edit) icon, make your change, and commit directly from the browser.

GitHub Pages automatically rebuilds and republishes within about a minute of
any push to the `main` branch.

---

## Optional: custom domain

If you own a domain name (e.g. `manikumarthote.com`):

1. In **Settings → Pages**, enter it under **Custom domain** and save.
2. At your domain registrar, add a `CNAME` record pointing to
   `<your-username>.github.io`.
3. GitHub will show a green checkmark once DNS propagates (can take up to
   24 hours).

This step is optional — the default `github.io` URL works perfectly well and
costs nothing.

---

## Why this stays free and always on

- GitHub Pages serves static files (HTML/CSS/JS) directly — there's no
  server process to crash, sleep, or rack up usage charges.
- Public repositories on GitHub Pages have no traffic-based billing for
  reasonable personal-site usage.
- No credit card, trial period, or expiring free tier is involved.
