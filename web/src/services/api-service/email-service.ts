import { IEmailListDTO } from "../../dtos";
import ConfigValues from "../../utilities/ConfigValues";
import { handleException } from "../error-handling-service/error-handling-service";
import { getData } from "./axios-generic";

//TODO: implement pagination and search capabilities
/**
 * List the emails from an specific email account
 * @returns
 */
export function listEmails(): Promise<IEmailListDTO[]> {
  try {
    return getData<IEmailListDTO[]>(ConfigValues.ListEmailsServiceApiURL);
  } catch (error) {
    handleException(error);
    throw error;
  }
}
