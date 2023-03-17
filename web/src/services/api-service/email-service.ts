import { IEmailListDTO } from "../../dtos";
import ConfigValues from "../../configs/ConfigValues";
import { handleException } from "../error-handling-service/error-handling-service";
import { getData } from "./axios-generic";

//TODO: implement pagination and search capabilities
/**
 * List the emails present in the Inbox from an specific email account
 * @returns
 */
export function listInboxEmails(
  emailAccount: string
): Promise<IEmailListDTO[]> {
  try {
    return getData<IEmailListDTO[]>(ConfigValues.ListInboxEmailsServiceApiURL, {
      email: emailAccount,
    });
  } catch (error) {
    handleException(error);
    throw error;
  }
}
