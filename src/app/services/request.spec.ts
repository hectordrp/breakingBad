
import { TestBed } from '@angular/core/testing';
import { RequestService } from './request.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Character } from '../models/character';
import { Quote } from '../models/quote';

describe('RequestService', () => {
    // We declare the variables that we'll use for the Test Controller and for our Service
    let httpTestingController: HttpTestingController;
    let service: RequestService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RequestService],
            imports: [HttpClientTestingModule]
        });

        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(RequestService);

    });

    // Angular default test added when you generate a service using the CLI
    it('should be created', () => {
        expect(service).toBeTruthy();
    });


    describe('getCharacters', () => {
        it('should return a character Observable with the right data', () => {
            const mockCharacters = [
                {
                    "char_id": 1,
                    "name": "Walter White",
                    "birthday": "09-07-1958",
                    "occupation": [
                        "High School Chemistry Teacher",
                        "Meth King Pin"
                    ],
                    "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                    "status": "Presumed dead",
                    "nickname": "Heisenberg",
                    "appearance": [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    "portrayed": "Bryan Cranston",
                    "category": "Breaking Bad",
                    "better_call_saul_appearance": []
                },
                {
                    "char_id": 2,
                    "name": "Jesse Pinkman",
                    "birthday": "09-24-1984",
                    "occupation": [
                        "Meth Dealer"
                    ],
                    "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
                    "status": "Alive",
                    "nickname": "Cap n' Cook",
                    "appearance": [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    "portrayed": "Aaron Paul",
                    "category": "Breaking Bad",
                    "better_call_saul_appearance": []
                }
            ];
            service.getCharacters().subscribe((characters: Character[]) => {
                expect(characters).toBeTruthy();
                expect(characters[0].name).toEqual('Walter White');
                expect(characters[0].nickname).toEqual('Heisenberg');
            });

            const req = httpTestingController.expectOne('https://breakingbadapi.com/api/characters/')

            req.flush(mockCharacters);

        });
    });

    describe('getRandomQuote', () => {
        it('should return a quote Observable with the right data', () => {
            const mockQuotes = [
                {
                    "quote_id": 9,
                    "quote": "Funyuns are awesome.",
                    "author": "Jesse Pinkman",
                    "series": "Breaking Bad"
                }
            ];
            service.getCharacters().subscribe((characters: Quote[]) => {
                expect(characters).toBeTruthy();
                expect(characters[0].quote).toEqual('Funyuns are awesome.');
            });

            const req = httpTestingController.expectOne('https://breakingbadapi.com/api/characters/')

            req.flush(mockQuotes);

        });
    });

});