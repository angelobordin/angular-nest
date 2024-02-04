export interface GenericBackendResult<T> {
	status: number;
	message: string;
	data: T;
	error?: any;
}
