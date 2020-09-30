import { baseURL, patch, post, RequestArgs } from "../api";

type CustomerRequestProps = { options: RequestArgs };
type CustomerWithIdRequestProps = { options: RequestArgs; id: string };

export const createCustomer = async (props: CustomerRequestProps) => {
  const res = await post<{ customers: Customer }>({
    url: `${baseURL}/create-customer`,
    ...props,
  });
  return res?.customers;
};

export const patchCustomer = async (props: CustomerWithIdRequestProps) => {
  const res = await patch<{ customers: Customer }>({
    url: `${baseURL}/patch-customer/${props.id}`,
    ...props,
  });
  return res?.customers;
};
