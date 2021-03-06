// flow-typed signature: 038bd5f7f9421dc3dbbfbf25953d2da4
// flow-typed version: 75b56c3a87/expo-file-system_v6.x.x/flow_>=v0.69.0

declare module 'expo-file-system' {
  // Types
  declare export type DownloadOptions = {|
    md5?: boolean,
    cache?: boolean,
    headers?: {
      [name: string]: string,
    },
  |};

  declare export type DownloadResult = {|
    uri: string,
    status: number,
    headers: {
      [name: string]: string,
    },
    md5?: string,
  |};

  declare export type DownloadProgressCallback = (
    data: DownloadProgressData
  ) => void;

  declare export type DownloadProgressData = {|
    totalBytesWritten: number,
    totalBytesExpectedToWrite: number,
  |};

  declare export type DownloadPauseState = {|
    url: string,
    fileUri: string,
    options: DownloadOptions,
    resumeData?: string,
  |};

  declare export type FileInfo =
    | {|
        exists: true,
        uri: string,
        size: number,
        isDirectory: boolean,
        modificationTime: number,
        md5?: string,
      |}
    | {|
        exists: false,
        uri: string,
        size: void,
        isDirectory: false,
        modificationTime: void,
        md5: void,
      |};

  declare export type EncodingType = 'utf8' | 'base64';

  declare export type GetInfoOptions = {|
    md5?: boolean,
    size?: boolean,
  |};

  declare export type ReadingOptions = {|
    encoding?: EncodingType,
    position?: number,
    length?: number,
  |};

  declare export type WritingOptions = {|
    encoding?: EncodingType,
  |};

  declare export type FromToDescriptor = {|
    from: string,
    to: string,
  |};

  // Variables
  declare export var documentDirectory: string;

  declare export var cacheDirectory: string;

  declare export var bundledAssets: string | void;

  declare export var bundleDirectory: string;

  declare export function getInfoAsync(
    fileUri: string,
    options?: GetInfoOptions
  ): Promise<FileInfo>;

  declare export function readAsStringAsync(
    fileUri: string,
    options?: ReadingOptions
  ): Promise<string>;

  declare export function getContentUriAsync(fileUri: string): Promise<string>;

  declare export function writeAsStringAsync(
    fileUri: string,
    contents: string,
    options?: WritingOptions
  ): Promise<void>;

  declare export function deleteAsync(
    fileUri: string,
    options?: {|
      idempotent?: boolean,
    |}
  ): Promise<void>;

  declare export function moveAsync(options: FromToDescriptor): Promise<void>;

  declare export function copyAsync(options: FromToDescriptor): Promise<void>;

  declare export function makeDirectoryAsync(
    fileUri: string,
    options?: {|
      intermediates?: boolean,
    |}
  ): Promise<void>;

  declare export function readDirectoryAsync(
    fileUri: string
  ): Promise<Array<string>>;

  declare export function getFreeDiskStorageAsync(): Promise<number>;

  declare export function getTotalDiskCapacityAsync(): Promise<number>;

  declare export function downloadAsync(
    uri: string,
    fileUri: string,
    options?: DownloadOptions
  ): Promise<DownloadResult>;

  declare export function createDownloadResumable(
    uri: string,
    fileUri: string,
    options?: DownloadOptions,
    callback?: DownloadProgressCallback,
    resumeData?: string
  ): DownloadResumable;

  declare export class DownloadResumable {
    constructor(
      url: string,
      fileUri: string,
      options?: DownloadOptions,
      callback?: DownloadProgressCallback,
      resumeData?: string
    ): DownloadResumable;
    downloadAsync(): Promise<DownloadResult | void>;
    pauseAsync(): Promise<DownloadPauseState>;
    resumeAsync(): Promise<DownloadResult | void>;
    savable(): DownloadPauseState;
  }
}
