import { useState } from "react"

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const enableLoader = () => setIsLoading(true);
  const disableLoader = () => setIsLoading(false);

  return {enableLoader, disableLoader, isLoading, }
}
