export interface OptionsListProps {
  active: boolean;
  setActive: (value: ((prevState: boolean) => boolean) | boolean) => void;
}
