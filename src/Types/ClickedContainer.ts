export interface clickedContainer {
  type: string;
  data: any;
  setData: (data: any) => void;
  inputType?: 'text' | 'number';
}
