import { ComponentType } from "react";
import NewIcon from '../components/icons/temp_preferences_custom.svg';
import DefiIcon from '../components/icons/account_balance.svg';
import NftIcon from '../components/icons/stadia_controller.svg';
import CexIcon from '../components/icons/insert_chart.svg';
import DexIcon from '../components/icons/swap_horiz.svg';
import Layer1Icon from '../components/icons/layers.svg';
import Layer2Icon from '../components/icons/layers.svg';
import InfrastructureIcon from '../components/icons/database.svg';
import LendingIcon from '../components/icons/currency_exchange.svg';
import StablecoinIcon from '../components/icons/balance.svg';

export interface Category {
  category: string;
  icon?: ComponentType;
}

export const CRYPTO_CATEGORIES: Category[] = [
  {
    category: 'Terbaru',
    icon: NewIcon,
  },
  {
    category: 'DeFi',
    icon: DefiIcon,
  },
  {
    category: 'NFT/Gaming',
    icon: NftIcon,
  },
  {
    category: 'CEX',
    icon: CexIcon,
  },
  {
    category: 'DEX',
    icon: DexIcon,
  },
  {
    category: 'Layer-1',
    icon: Layer1Icon,
  },
  {
    category: 'Infrastructure',
    icon: InfrastructureIcon,
  },
  {
    category: 'Lending',
    icon: LendingIcon,
  },
  {
    category: 'Layer-2',
    icon: Layer2Icon,
  },
  {
    category: 'Ekosistem Stablecoin',
    icon: StablecoinIcon,
  },
]
