# Step-by-Step Guide: Running Next.js in GitHub Codespaces

This guide will help you set up your Next.js project to run in GitHub Codespaces and see live changes as you develop.

## Prerequisites
- A GitHub account
- Your repository pushed to GitHub (or you can create a Codespace from a local repo)
- Basic familiarity with terminal commands

---

## 🚀 Quick Start (TL;DR)

1. **Create a Codespace** from your GitHub repo (Code → Codespaces → Create codespace)
2. **In the Codespace terminal**, run:
   ```bash
   npm install
   npm run dev
   ```
3. **Open the Ports panel** (bottom of VS Code)
4. **Click the globe icon** 🌐 next to port 3000 to open in browser
5. **Start coding!** Changes will appear live in your browser.

---

## 📖 Detailed Steps

## Step 1: Create a GitHub Codespace

### Option A: Create Codespace from GitHub Website

1. **Navigate to your repository** on GitHub (e.g., `https://github.com/The-Bedouin/silverswanintegrated`)

2. **Click the green "Code" button** at the top of your repository

3. **Select the "Codespaces" tab**

4. **Click "Create codespace on main"** (or your default branch)
   - This will create a Codespace with default settings
   - Or click the "..." menu and select "New with options" to customize:
     - Machine type (2-core is usually enough for Next.js)
     - Region (choose closest to you)

5. **Wait for the Codespace to start** (takes 1-2 minutes)
   - You'll see a loading screen, then VS Code will open in your browser
   - If you have a `.devcontainer/devcontainer.json`, it will automatically:
     - Set up the Node.js environment
     - Install VS Code extensions
     - Run `npm install` (if package.json exists)
     - Configure port forwarding

### Option B: Create Codespace from VS Code Desktop

1. **Install the GitHub Codespaces extension** in VS Code (if not already installed)

2. **Open Command Palette** (Ctrl+Shift+P / Cmd+Shift+P)

3. **Type "Codespaces: Create New Codespace"**

4. **Select your repository** and branch

5. **Choose machine type** and region

6. **Wait for Codespace to start**

### Option C: Create Codespace from GitHub CLI

```bash
gh codespace create --repo The-Bedouin/silverswanintegrated
```

---

## Step 2: Initialize Next.js (if not already done)

**Important:** If you're creating a Codespace for the first time and haven't initialized Next.js yet, you'll need to do this first.

In the Codespace terminal, run:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

Or if you prefer a simpler setup:

```bash
npx create-next-app@latest . --yes
```

**Note:** 
- The `--yes` flag automatically accepts all defaults
- If the directory isn't empty, you may need to use `--force` flag
- This will create all necessary Next.js files and folders

---

## Step 3: Install Dependencies

After initialization (or if you already have a Next.js project), install dependencies:

```bash
npm install
```

**Note:** If you're using the `.devcontainer/devcontainer.json` configuration, `npm install` may have already run automatically. You can check if `node_modules` exists, or just run it again - it's safe to run multiple times.

---

## Step 4: Configure Next.js for Codespaces

The Next.js dev server needs to be configured to:
- Listen on `0.0.0.0` (not just `localhost`) so Codespaces can forward the port
- Use port 3000 (or another port you prefer)

### Option A: Using next.config.js (Recommended)

The `next.config.js` file has been configured to work with Codespaces. The dev server will automatically bind to `0.0.0.0` when you use `npm run dev`.

### Option B: Using package.json script

The `package.json` has been updated with a dev script that explicitly sets the hostname.

---

## Step 5: Start the Development Server

Run the development server:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in X.XXs
```

---

## Step 6: Forward Port in GitHub Codespaces

1. **Open the Ports Panel:**
   - Look for the "PORTS" tab in the bottom panel of VS Code
   - Or click on the "Ports" icon in the sidebar (looks like a network/plug icon)
   - Or use the Command Palette (Ctrl+Shift+P / Cmd+Shift+P) and search for "Ports: Focus on Ports View"

2. **Forward Port 3000:**
   - **If using the devcontainer.json:** Port 3000 should appear automatically when you run `npm run dev`
   - **Manual forwarding:** Click "Add Port" button and enter `3000`
   - Right-click on port 3000 and select "Port Visibility":
     - **Public**: Anyone with the URL can access (good for sharing)
     - **Private**: Only you can access (more secure, default)

3. **Access Your Site:**
   - Click on the port 3000 entry in the Ports panel
   - Click the globe icon 🌐 next to the port, or right-click and select "Open in Browser"
   - The URL will look like: `https://xxxxx-3000.preview.app.github.dev`
   - You can also copy the URL and open it in a new tab

---

## Step 7: Enable Auto-Forward (Already Configured!)

The `.devcontainer/devcontainer.json` file is already configured to automatically forward port 3000. This means:

- When you run `npm run dev`, port 3000 will be forwarded automatically
- You'll get a notification when the port is forwarded
- The port will appear in the Ports panel automatically

**To manually enable auto-forward:**
1. Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Search for "Preferences: Open Settings (JSON)"
3. Add: `"remote.autoForwardPorts": true`

---

## Step 8: Make Changes and See Live Updates

1. Edit any file in your project (e.g., `src/app/page.tsx`)
2. Save the file
3. Next.js will automatically reload in your browser
4. You should see changes appear immediately!

---

## Troubleshooting

### Codespace Won't Start
- Check your GitHub account has Codespaces enabled
- Verify you have sufficient quota (free tier includes 60 hours/month)
- Try creating a new Codespace if one is stuck

### Port Not Accessible
- Make sure the dev server is running (`npm run dev`)
- Check that port 3000 is forwarded in the Ports panel
- Look for the port in the Ports tab - it should show as "Forwarded"
- Try restarting the dev server
- Make sure the port visibility is set correctly (Public or Private)

### Changes Not Reflecting
- Check the terminal for any errors
- Hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)
- Ensure the dev server is still running

### Port Already in Use
- If port 3000 is busy, you can change it:
  ```bash
  PORT=3001 npm run dev
  ```
- Then forward port 3001 in the Ports panel
- Or update `package.json` to use a different port by default

### Dev Server Won't Start
- Make sure dependencies are installed: `npm install`
- Check for errors in the terminal
- Verify Node.js version (Next.js requires Node.js 18.17 or later)
- The devcontainer.json is configured with Node.js 18, which should work fine
- If you see "EADDRINUSE" error, another process is using port 3000

### Port Forwarding Not Working
- Make sure you're running `npm run dev` (not just `next dev`)
- The `-H 0.0.0.0` flag in package.json is crucial for Codespaces
- Check the Ports panel - ports should appear automatically
- Try manually adding port 3000 if it doesn't appear
- Refresh the Ports panel if needed

---

## Quick Reference Commands

```bash
# Start dev server
npm run dev

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

---

## Additional Tips

1. **Keep the Terminal Open:** The dev server needs to keep running. Don't close the terminal where `npm run dev` is running.

2. **Multiple Ports:** If you need to run other services (like a backend API), forward those ports too.

3. **Public vs Private Ports:** 
   - Public: Anyone with the URL can access
   - Private: Only you can access (more secure)

4. **Hot Reload:** Next.js Fast Refresh is enabled by default, so most changes appear instantly without a full page reload.

---

## Next Steps

- Start building your Next.js application!
- The dev server will automatically reload when you make changes
- Your site is accessible via the Codespaces forwarded URL

Happy coding! 🚀

