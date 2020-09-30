enum CreditCardNameMap {
  "studentLife" = "Student Life",
  "anywhereCard" = "Anywhere Card",
  "liquidCard" = "Liquid Card",
}

interface CreditCard {
  id: string;
  name: keyof typeof CreditCardNameMap;
  apr: number;
  balanceTransferOfferDuration: number;
  purchaseOfferDuration: number;
  creditAvailable: number;
  isSelected?: boolean;
}

interface Customer {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  employmentStatus?: string;
  address?: { houseNumber?: string; postCode?: string };
  annualIncome?: number;
}
