const logger = store => next => action => {
  console.log('action begin', action);
  next(action);
  console.log('action done', action);
};

export default logger;
