# @gui-chat-plugin/text-response

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Ftext-response.svg)](https://www.npmjs.com/package/@gui-chat-plugin/text-response)

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
yarn add @gui-chat-plugin/text-response
```

## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import TextResponsePlugin from "@gui-chat-plugin/text-response/vue";

const pluginList = [
  // ... other plugins
  TextResponsePlugin,
];

// In src/main.ts
import "@gui-chat-plugin/text-response/style.css";
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
yarn install

# Run demo
yarn dev

# Build
yarn build

# Lint
yarn lint
```

## Test Prompts

Try these prompts to test the plugin:

1. "Explain the difference between let and const in JavaScript"
2. "Write a short poem about programming"
3. "List the top 5 programming languages for web development"

## License

MIT

## Related

- Protocol spec: [gui-chat-protocol](https://github.com/receptron/gui-chat-protocol)
- Reference implementations using this protocol: [mulmoclaude](https://github.com/receptron/mulmoclaude) · [MulmoChat](https://github.com/receptron/MulmoChat)
