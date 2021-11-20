import { Controller } from '@nestjs/common';
import { PeriodService } from './period.service';

@Controller('period')
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}
}
