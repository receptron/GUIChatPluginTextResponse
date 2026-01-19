# @gui-chat-plugin/text-response

Text Response plugin for GUI Chat applications. Provides markdown rendering with role-based styling for displaying text content from assistants, users, and systems.

## Features

- Markdown rendering with GitHub Flavored Markdown support
- Role-based styling (assistant, user, system)
- JSON auto-detection and syntax highlighting
- `<think>` block processing for AI reasoning display
- Inline text editing capability
- Transport kind indicator

## Installation

```bash
npm install @gui-chat-plugin/text-response
```

## Usage

### Vue Integration

```typescript
import { plugin } from "@gui-chat-plugin/text-response/vue";
import "@gui-chat-plugin/text-response/style.css";

// Register the plugin with your GUI Chat application
registerPlugin(plugin);
```

### Core-only Usage

```typescript
import { executeTextResponse, TOOL_DEFINITION } from "@gui-chat-plugin/text-response";

// Execute the tool
const result = await executeTextResponse(context, {
  text: "Hello, **world**!",
  role: "assistant",
});
```

## API

### TextResponseData

```typescript
interface TextResponseData {
  text: string;
  role?: "assistant" | "system" | "user";
  transportKind?: string;
}
```

### Tool Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `text` | string | Yes | Plain text or markdown content to display |
| `role` | "assistant" \| "system" \| "user" | No | Speaker role for styling |
| `transportKind` | string | No | Identifier for the transport provider |

## Development

```bash
# Install dependencies
npm install

# Run demo
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## License

MIT
