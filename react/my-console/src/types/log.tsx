import { type } from "os"

export enum methobEnum {
    log, info, warn, debug, error
}

export type EnumKeys = keyof typeof methobEnum

export type methodEnumInterface = {
    [key in EnumKeys]:(...args:[]) => void
}

export interface LogInfos {
    logType: EnumKeys,
    info: any
}