import { Injectable }           from '@angular/core';

import { ConfigService }        from '../../app-config.service';
import { Observable }           from 'rxjs/Rx';

@Injectable()
export class UtilService {

  constructor(

    private configService: ConfigService
  ) {}

}