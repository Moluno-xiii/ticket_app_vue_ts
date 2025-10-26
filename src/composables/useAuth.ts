import { onMounted, ref, type Ref } from "vue";
import { toast } from "vue-sonner";
import router from "../router";

const isLoggedIn = ref(false);
let userSession = localStorage.getItem("ticketapp_session");
const storedUserDetails = localStorage.getItem("userDetails");
const parsedUserDetails =
  storedUserDetails !== null
    ? (JSON.parse(storedUserDetails) as { name: string })
    : null;
const userDetails = ref<{ name: string } | null>(parsedUserDetails);
const existingUser = localStorage.getItem("existingUser");
let parsedExistingUser =
  existingUser !== null ? (JSON.parse(existingUser) as UserCredentials) : null;

type UserCredentials = {
  email: string;
  password: string;
};

type UseAuthReturnTypes = {
  signup: (credentials: UserCredentials) => void;
  login: (credentials: UserCredentials) => void;
  logout: () => void;
  isLoggedIn: Ref<boolean>;
  userDetails: Ref<{ name: string } | null>;
  updateUserDetails: (name: string) => void;
};

const useAuth = (): UseAuthReturnTypes => {
  onMounted(() => {
    if (userSession) {
      isLoggedIn.value = true;
    }
  });

  const signup: UseAuthReturnTypes["signup"] = (credentials) => {
    if (
      parsedExistingUser?.email.toLowerCase() ===
      credentials.email.toLowerCase()
    ) {
      toast.error("User already exists, try again with another email.");
      return;
    }

    toast.success("Signup successful");
    localStorage.setItem("existingUser", JSON.stringify(credentials));
    parsedExistingUser = credentials;
    router.push("/auth/login");
  };

  const login: UseAuthReturnTypes["login"] = (credentials) => {
    if (
      parsedExistingUser?.email.toLowerCase() !==
      credentials.email.toLowerCase()
    ) {
      toast.error("Incorrect credentials, try again.");
      return;
    }
    if (parsedExistingUser?.password !== credentials.password) {
      toast.error("Incorrect credentials, try again.");
      return;
    }
    toast.success("Login successful");
    router.push("/dashboard/");
    isLoggedIn.value = true;
    localStorage.setItem("ticketapp_session", crypto.randomUUID() + Date.now());
  };

  const logout: UseAuthReturnTypes["logout"] = () => {
    isLoggedIn.value = false;
    localStorage.removeItem("ticketapp_session");
    toast.success("Logout successful");
    router.push("/auth/login");
    userSession = null;
  };

  const updateUserDetails = (name: string) => {
    localStorage.setItem("userDetails", name);
    userDetails.value = { name };
  };

  return { signup, login, logout, isLoggedIn, userDetails, updateUserDetails };
};

export default useAuth;
