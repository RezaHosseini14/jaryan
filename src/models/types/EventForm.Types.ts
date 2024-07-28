export type EventsFormType = {
  title: string;
  color: string;
};
export type onAddEventType = (title: string, color: string, day: moment.Moment) => void;
export type handleDeleteEventType = (eventTitle: string) => void;
export type EventFormPropsType = {
  events: { title: string; color: string }[];
  onAddEvent: onAddEventType;
  handleDeleteEvent: handleDeleteEventType;
};
