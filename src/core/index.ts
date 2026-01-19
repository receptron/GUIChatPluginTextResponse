/**
 * Text Response Plugin - Core Entry Point
 */

export type { TextResponseData, TextResponseArgs } from "./types";

export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeTextResponse,
  pluginCore,
} from "./plugin";

export { samples } from "./samples";
