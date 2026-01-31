// This service is deprecated as the application now uses a static questionnaire.
// Keeping the file to prevent import errors if it's referenced elsewhere, 
// but it exports dummy values.

export const initializeChat = () => {
  return null;
};

export const getChatInstance = () => {
  return null;
};

export const sendMessageStream = async () => {
  return {
    [Symbol.asyncIterator]: async function* () {
      yield { text: "" };
    }
  };
};