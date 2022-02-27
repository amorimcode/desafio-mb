import { LoadingWrapper } from "./styles";

export function Loading() {
  return (
    <LoadingWrapper>
      <div className="spinner-border" role="status"></div>
    </LoadingWrapper>
  );
}