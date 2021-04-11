import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState) => {
    // convert mySet to an Array.
    return { ...inboundState };
  },
  // transform state being rehydrated
  (outboundState) => {
    // convert mySet back to a Set.
    return { ...outboundState };
  },
  // define which reducers this transform gets called for.
  { whitelist: ['auth'] },
);

export default SetTransform;
