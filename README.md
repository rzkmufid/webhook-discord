# Discord Webhook Manager

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![PandaCSS](https://img.shields.io/badge/PandaCSS-F3E046?style=for-the-badge&logo=pandacss&logoColor=black)
![TanStack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

A modern, secure, and user-friendly interface for sending messages to Discord via Webhooks. Built with Vue 3 and Panda CSS, featuring a robust "Dual Mode" sender for both simple messages and advanced JSON payloads.

---

## ✨ Features

- **Dual Mode Interface**:
  - **Simple Mode**: Quick text messages with a clean input.
  - **Advanced Mode**: Full control with a raw JSON editor for sending Embeds, Attachments, and complex components.
- **Smart Templates**: One-click Templates for common use cases (Rich Embeds, Success Alerts, Error Logs, etc.).
- **Live Validation**: Real-time JSON syntax checking prevents errors before you send.
- **Modern UI**: Fully styled with **Panda CSS** using a clean, flat design system.
- **Type-Safe**: Built entirely with **TypeScript**.
- **Secure**: Webhook URLs are managed via environment variables, never hardcoded.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Panda CSS](https://panda-css.com/)
- **State/Data**: [TanStack Query (Vue Query)](https://tanstack.com/query/latest)
- **Runtime**: [Bun](https://bun.sh/)

## 🚀 Getting Started

### Prerequisites

- **Bun** (Recommended) or Node.js installed.
- A valid Discord Webhook URL.

### Installation

Clone the repository and install dependencies:

```bash
bun install
```

### Configuration

1.  Rename `.env.example` to `.env` (or create a new `.env` file):
    ```bash
    cp .env.example .env
    ```
2.  Add your Discord Webhook URL:
    ```env
    VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-id/your-token
    ```

### Running the App

Start the development server:

```bash
bun dev
```

Visit `http://localhost:5173` (or the URL shown in your terminal) to start sending messages!

## 📖 Usage

1.  **Select Mode**: Toggle between "Simple Message" and "Advanced JSON" using the tabs.
2.  **Simple Mode**: Just type your text and hit Enter or click Send.
3.  **Advanced Mode**:
    - Use the **Template Buttons** (Rich Embed, Success, Error) to auto-fill the editor.
    - Edit the JSON as needed. The "Send" button will remain disabled if the JSON is invalid.
4.  **Feedback**: The app will notify you upon successful delivery or if an error occurs.
