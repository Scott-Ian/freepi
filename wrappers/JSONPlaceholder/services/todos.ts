import { Todo } from "../models/Todo"
import { find, findAll, getById, getBaseFunctions} from "./base.req"

export const todos =  (baseURL) => {
  return {
    ...getBaseFunctions<Todo>('/todos')(baseURL)
  }
}
