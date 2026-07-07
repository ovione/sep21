import { ServiceSpecUtil } from '../util/service.spec.util';
import { executeAndVerify } from '../util/functions.spec.util';
import { GenericHttpService } from './generic-http.service';
import { FileUploadedDeletedResponse } from '../file-helpers/model/file-uploaded-deleted-response.model';
import { FileUploadAllowed } from '../file-helpers/model/file-upload-allowed.model';
import { FileHttpHelperService } from '../file-helpers/file-http-helper.service';

describe('GenericHtppService', () => {
    let serviceTest: ServiceSpecUtil<GenericHttpService>;

    const URL = 'private/url';
    const GET = 'GET';
    const POST = 'POST';
    const PUT = 'PUT';
    const DELETE = 'DELETE';

    const param1Name = 'param1';
    const param1Value = 'param1Value';
    const param2Name = 'param2';
    const param2Value = 'param2Value';

    const header1Name = 'header1';
    const header1Value = 'header1Value';
    const header2Name = 'header2';
    const header2Value = 'header2Value';

    const httpParams = {};
    httpParams[param1Name] = param1Value;
    httpParams[param2Name] = param2Value;

    const httpHeaders = {};
    httpHeaders[header1Name] = header1Value;
    httpHeaders[header2Name] = header2Value;

    const serviceMethodParams = [URL, httpParams, httpHeaders];

    const expectedUrl = `${URL}`;
    const expectedUrlWithParams = `${URL}?${param1Name}=${param1Value}&${param2Name}=${param2Value}`;
    const expectedHeadersSent = httpHeaders;

    beforeEach(() => {
        serviceTest = new ServiceSpecUtil(GenericHttpService, [ { provide: FileHttpHelperService, useClass: FileHttpHelperService } ]);
    });

    afterEach(() => {
        serviceTest.verifyNoOutstandingRequests();
    });

    it('should create', () => {
        serviceTest.verifyServiceWasCreated();
    });

    it('get', () => {
        const expectedObjectReturnedFlushed = {a: 1};

        executeAndVerify(
            serviceTest,
            serviceTest.getService().get.bind(serviceTest.getService()),
            [URL, httpParams, httpHeaders],
            expectedUrlWithParams,
            GET,
            expectedObjectReturnedFlushed,
            expectedHeadersSent,
            null);
    });

    it('post', () => {
        const expectedObjectReturnedFlushed = {a: 1};

        executeAndVerify(
            serviceTest,
            serviceTest.getService().post.bind(serviceTest.getService()),
            [URL, expectedObjectReturnedFlushed, httpParams, httpHeaders],
            expectedUrlWithParams,
            POST,
            expectedObjectReturnedFlushed,
            expectedHeadersSent,
            expectedObjectReturnedFlushed);
    });

    it('put', () => {
        const expectedObjectReturnedFlushed = {a: 1};

        executeAndVerify(
            serviceTest,
            serviceTest.getService().put.bind(serviceTest.getService()),
            [URL, expectedObjectReturnedFlushed, httpParams, httpHeaders],
            expectedUrlWithParams,
            PUT,
            expectedObjectReturnedFlushed,
            expectedHeadersSent,
            expectedObjectReturnedFlushed);
    });

    it('delete', () => {
        const expectedObjectReturnedFlushed = new FileUploadedDeletedResponse();

        executeAndVerify(
            serviceTest,
            serviceTest.getService().delete.bind(serviceTest.getService()),
            [URL],
            `${expectedUrl}`,
            DELETE,
            expectedObjectReturnedFlushed);
    });

    it('deleteById', () => {
        const expectedObjectReturnedFlushed = new FileUploadedDeletedResponse();
        const id = '123';

        executeAndVerify(
            serviceTest,
            serviceTest.getService().deleteById.bind(serviceTest.getService()),
            [URL, id],
            `${expectedUrl}\\${id}`,
            DELETE,
            expectedObjectReturnedFlushed);
    });

    it('downloadFile', () => {
        const objDownloaded = {hello: 'world'};
        const expectedObjectReturnedFlushedAsBlob = new Blob([JSON.stringify(objDownloaded, null, 2)], {type : 'application/json'});

        executeAndVerify(
            serviceTest,
            serviceTest.getService().downloadFile.bind(serviceTest.getService()),
            serviceMethodParams,
            expectedUrlWithParams,
            GET,
            expectedObjectReturnedFlushedAsBlob,
            expectedHeadersSent);
    });

    [
        {
            msg: 'without id',
            id: void 0,
            filesUploadAllowed: createFilesToUpload(),
            type: POST
        }
    ].forEach(params => {
        it('uploadFile ' + params.msg, () => {
            const serviceMethodParams = [URL, params.id, params.filesUploadAllowed, httpParams, httpHeaders];
            const expectedObjectReturnedFlushed = {a: 1};
            const expectedObjectSent = createFormData();

            executeAndVerify(
                serviceTest,
                serviceTest.getService().uploadFile.bind(serviceTest.getService()),
                serviceMethodParams,
                expectedUrlWithParams,
                params.type,
                expectedObjectReturnedFlushed,
                expectedHeadersSent,
                expectedObjectSent);
        })});

    function createFilesToUpload(): FileUploadAllowed[] {
        const filesUploadAllowed: FileUploadAllowed[] = [];

        return filesUploadAllowed;

    }

    function createFormData(): FormData {
        return new FormData();
    }
});
