const routeBase = `http://localhost:3000/person`;

export const ROUTE_REGISTER_PERSON = () => {
	return routeBase.concat(`/`);
};
export const ROUTE_UPDATE_PERSON = (id: string) => {
	return routeBase.concat(`/${id}`);
};
export const ROUTE_PERSON_LIST = () => {
	return routeBase.concat(`/`);
};
export const ROUTE_PERSON_BY_ID = (id: string) => {
	return routeBase.concat(`/${id}`);
};
export const ROUTE_DELETE_PERSON = (id: string) => {
	return routeBase.concat(`/${id}`);
};
