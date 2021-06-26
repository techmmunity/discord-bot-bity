import { BumpEvent } from "./bump/bump.event";
import { LogEvent } from "./log/log.event";
import { MentionEvent } from "./mention/mention.event";
import { SyncEvent } from "./sync/sync.event";
import { SystemEvent } from "./system/system.event";

export const EVENTS = [
	BumpEvent,
	LogEvent,
	MentionEvent,
	SyncEvent,
	SystemEvent,
];
