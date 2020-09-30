import { baseURL, get, RequestArgs } from "../api";

type CardRequestProps = { options: RequestArgs };

export const getCreditCards = async (props?: CardRequestProps) => {
  const res = await get<{ creditCards: CreditCard[] }>({
    url: `${baseURL}/creditCards`,
    ...props,
  });
  return res?.creditCards;
};
