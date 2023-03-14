/**
 * Handles what to do with the Exceptions. Store in a database, Sent an email, console to the log
 */
export function handleException(error: unknown) {
  if (
    typeof error == "object" &&
    error !== null &&
    "name" in error &&
    typeof error.name === "string" &&
    "message" in error &&
    typeof error.message === "string" &&
    "stack" in error &&
    typeof error.stack === "string"
  ) {
    console.error({
      Exception: {
        Name: error.name,
        Message: error.message,
        StackTrace: error.stack,
      },
    });
  } else {
    console.error({ Error: error });
  }
}
