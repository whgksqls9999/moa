type Callback<T = any> = (payload: T) => void;

export class EventHub {
	private listeners: Map<string, Set<Callback>> = new Map();

	on<T = any>(event: EN_EVENT, fn: Callback<T>) {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
		this.listeners.get(event)!.add(fn);
	}

	emit<T = any>(event: string, payload: T) {
		this.listeners.get(event)?.forEach((fn) => fn(payload));
	}
}

export const eventHub = new EventHub();

export const enum EN_EVENT {
	ROUTE_PAGE = 'ROUTE_PAGE',
}
