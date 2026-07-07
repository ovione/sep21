export class FileUploadAllowed {
    constructor(public fileName: string, public fileExtension: string, public fileSize: number, public file: File) {}
}
