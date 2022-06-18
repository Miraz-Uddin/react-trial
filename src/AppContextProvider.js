import { combineComponents } from "./components/combineComponents";
import { PostsProvider } from "./components/context/Posts.context";
import { UsersProvider } from "./components/context/Users.context";
const providers = [UsersProvider, PostsProvider];
export const AppContextProvider = combineComponents(...providers);
