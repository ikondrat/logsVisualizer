import { produce } from "immer";
import { Reducer } from "redux";
import * as pageActions from "./page.actions";
import Page from "pages/Home/components/Page";
import { PageAction } from "./page.types";

export type PageState = {
  isPending: boolean;
};

const initialState: PageState = {
  isPending: false
};

export const reducerPage: Reducer<PageState> = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PageAction.SET_PENDING:
        draft.isPending = true;
        break;
      case PageAction.UNSET_PENDING:
        draft.isPending = false;
        break;
    }
  });
