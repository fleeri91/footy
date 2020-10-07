export interface IData {
  isFetching: boolean
}

export const CONSTANTS = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCHING_DATA_SUCCESS: "FETCHING_DATA_SUCCESS",
  FETCHING_DATA_FAILURE: "FETCHING_DATA_FAILURE",
}

interface FetchingData {
  type: typeof CONSTANTS.FETCHING_DATA
  payload: any
}

interface FetchingDataSucess {
  type: typeof CONSTANTS.FETCHING_DATA_SUCCESS
  payload: any
}

interface FetchingDataFailure {
  type: typeof CONSTANTS.FETCHING_DATA_FAILURE
  payload: string
}

export type DataActionTypes = 
  | FetchingData
  | FetchingDataSucess
  | FetchingDataFailure;