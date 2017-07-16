import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {PagedData} from './model/paged-data';
import {CorporateEmployee} from './model/corporate-employee';
import {Page} from './model/page';
//var companyData = require('../../../assets/data/company.json');

/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerResultsService {

    private companyData = []

    private dataUrl = '../../assets/data/company.json';
    
    constructor(private http: Http) { }

    getData(): Observable<CorporateEmployee[]> {
        return this.http.get(this.dataUrl)
            .map((res: Response) => <CorporateEmployee[]> res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

 


    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
    public getResults(page: Page): Observable<PagedData<CorporateEmployee>> {
        //return Observable.of(this.companyData).map(data => this.getPagedData(page));
        if (this.companyData.length > 0) {
            return Observable.of(this.companyData).map(data => this.getPagedData(page));
        } else {
            return this.http.get(this.dataUrl)
                .map((res: Response) => <CorporateEmployee[]> res.json())
                .map(data => this.companyData = data )
                .do(data => console.log(JSON.stringify(data)))  
                .map(data => this.getPagedData(page))                    
                .catch(this.handleError);

        } 

    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    /**
     * Package companyData into a PagedData object based on the selected Page
     * @param page The page data used to get the selected data from companyData
     * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
     */
    private getPagedData(page: Page): PagedData<CorporateEmployee> {
        let pagedData = new PagedData<CorporateEmployee>();
        page.totalElements = this.companyData.length;
        page.totalPages = page.totalElements / page.size;
        let start = page.pageNumber * page.size;
        let end = Math.min((start + page.size), page.totalElements);
        for (let i = start; i < end; i++){
            let jsonObj = this.companyData[i];
            let employee = new CorporateEmployee(jsonObj.name, jsonObj.gender, jsonObj.company);
            pagedData.data.push(employee);
        }
        pagedData.page = page;
        return pagedData;
    }

}