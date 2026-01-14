import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services/translation.service';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let translationService: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslatePipe, TranslationService],
    });
    pipe = TestBed.inject(TranslatePipe);
    translationService = TestBed.inject(TranslationService);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
