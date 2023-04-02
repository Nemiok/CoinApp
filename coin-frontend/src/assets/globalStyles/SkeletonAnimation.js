import { createGlobalStyle } from "styled-components";

const SkeletonAnimation = createGlobalStyle`
@keyframes pulse {
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`

export default SkeletonAnimation