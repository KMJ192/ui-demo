declare type EventReceiver = {
  event: keyof HTMLElementEventMap;
  eventHandler: (event: Event) => void;
  option: boolean | AddEventListenerOptions;
};
