import React, { useReducer, useCallback } from "react";
import styled from "styled-components/native";

/**
 * The questions are what will be asked if user is signing up for the first time
 * - Have you smelled something new?
 * - Have you tasted something new?
 * - Have you felt something new?
 * - Have you heard something new?
 * - Have you seen something new?
 *
 * The verbs can be stored into an array.
 * {
 *   verb: 'smelled'
 *   response: true // The user clicked 'Yes' & it will be false if user clicked 'No'
 * }
 */

/** The verb for the question. ie: smelled */
type Verb = string;

type VerbData = {
  /** Response can either be 'Yes' (true) or 'No' (false) */
  response: boolean | null;
  /** The icon that will be rendered above the question */
  icon?: null;
  /** The next verb to be set */
  next: string;
};

const verbs: Record<Verb, VerbData> = {
  smelled: { response: null, next: "tasted" },
  tasted: { response: null, next: "felt" },
  felt: { response: null, next: "heard" },
  heard: { response: null, next: "seen" },
  seen: { response: null, next: "smelled" },
};

interface State {
  verb: {
    name: Verb;
    data: VerbData;
  };
  verbs: Record<Verb, VerbData>;
}

interface Action {
  type: "Set verbe response" | "Get next verb";
  /** Payload can either be true (Yes) or false (No) */
  payload?: boolean;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Set verbe response":
      const verb = state.verb.name;

      return {
        ...state,
        verbs: {
          ...(state.verbs as Record<Verb, VerbData>),
          [verb]: {
            ...state.verbs[verb],
            response: action.payload,
          } as VerbData,
        },
      };
    case "Get next verb":
      return {
        ...state,
        verb: {
          name: state.verb.data.next,
          data: verbs[state.verb.data.next],
        },
      };
    default:
      return state;
  }
};

const initialState: State = {
  verb: {
    name: "smelled",
    data: verbs["smelled"],
  },
  verbs,
};

/** @TODO rename once question interface is moved to it's own component */
function QuestionComponent() {
  /** @TODO move useReducer to it's own context */
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Component should have the question and we will to interpolate the verb,
   * Add verb icon above questions
   * Buttons for Yes or No
   * Pagination indicators. (Small rectangles, rounded borders, blob tranisition to next rectangle, pagination number)
   */

  const getNextVerb = useCallback(
    () => dispatch({ type: "Get next verb" }),
    []
  );
  const setVerbResponse = useCallback(
    (payload: boolean) => dispatch({ type: "Set verbe response", payload }),
    []
  );

  const handleYes = useCallback(() => {
    setVerbResponse(true);
    getNextVerb();
  }, []);

  const handleNo = useCallback(() => {
    setVerbResponse(false);
    getNextVerb();
  }, []);

  return (
    <Container>
      <Text>Have you {state.verb.name} something new?</Text>
      <ButtonContainer>
        <Yes onPress={handleYes}>
          <ButtonText>Yes</ButtonText>
        </Yes>
        <No onPress={handleNo}>
          <ButtonText>No</ButtonText>
        </No>
      </ButtonContainer>
      {Object.keys(state.verbs).map((verb) => {
        return (
          <DebugView key={`debug-${verb}`}>
            <DebugText>
              Name: {verb} - Response:{" "}
              {state.verbs[verb].response ? "Yes" : "No"}
            </DebugText>
          </DebugView>
        );
      })}
    </Container>
  );
}

const DebugView = styled.View``;
const DebugText = styled.Text``;

const Button = styled.TouchableOpacity`
  border-radius: 50px;
  height: 70px;
  width: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-width: 2px;
  border-style: solid;
`;

const ButtonText = styled.Text`
  /* display: flex;
  justify-content: center;

  align-items: center; */
`;

const ButtonContainer = styled.View`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  padding-right: 20px;
`;

const Yes = styled(Button)`
  border-color: #fadc9f;
`;

const No = styled(Button)`
  border-color: #f19795;
  margin-top: 20px;
`;

function Pagination() {}

const StyledPagination = styled.View``;

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 40px;
  font-weight: bold;
  width: 210px;

  margin-left: 20px;
  text-transform: capitalize;
`;

export default QuestionComponent;
