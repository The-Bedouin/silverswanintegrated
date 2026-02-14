# Beginner's Guide to Port Forwarding in GitHub Codespaces

Start here if you have a new project and want to make sure your development server (like `npm run dev`) works perfectly in Codespaces.

## Step 1: Tell Your App to Listen Everywhere

When you run a server on your computer, it usually listens on `localhost` (which means "this computer only"). In a Codespace, "localhost" is inside a cloud container, so you can't see it from your browser unless you tell it to listen on `0.0.0.0` (which means "listen on all network interfaces").

1.  Open your project's `package.json` file.
2.  Find the `"scripts"` section.
3.  Look for the `dev` script (or whatever command you run to start your server).
4.  Add `-H 0.0.0.0` to the end of the command.

**Example for Next.js:**
```json
"scripts": {
  "dev": "next dev -H 0.0.0.0",  <-- CHANGE THIS LINE
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

**Example for Vite/React:**
```json
"scripts": {
  "dev": "vite --host 0.0.0.0",  <-- CHANGE THIS LINE
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## Step 2: Configure the Codespace to Forward the Port

You need to tell Codespaces which port you want to "forward" (make accessible to you).

1.  Look for a folder named `.devcontainer` in your file explorer.
    *   *If you don't have one:* Press `F1` (or `Cmd+Shift+P`), type **"Codespaces: Add Dev Container Configuration Files"**, and follow the prompts to create one.
2.  Open the file inside it called `devcontainer.json`.
3.  Add or find the `"forwardPorts"` setting.
4.  Add your port number to the list (usually `3000` for Next.js, `5173` for Vite, etc.).

**Example `devcontainer.json`:**
```json
{
  "name": "My Project",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  
  // Add this line!
  "forwardPorts": [3000],

  "customizations": {
    "vscode": {
      "extensions": ["esbenp.prettier-vscode"]
    }
  }
}
```

---

## Step 3: Run Your Server

1.  Open your terminal in Codespaces (`Terminal` -> `New Terminal`).
2.  Run your command:
    ```bash
    npm run dev
    ```
3.  Codespaces should pop up a notification saying "Your application is running on port 3000". Click **"Open in Browser"**.

### Troubleshooting

*   **"Port 3000 is already in use"**: 
    If you see this error, another process might be stuck. Run this command to kill it:
    ```bash
    lsof -ti:3000 | xargs kill -9
    ```
    (Replace `3000` with your port number).
