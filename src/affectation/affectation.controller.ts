import { Controller } from '@nestjs/common';
import { AffectationService } from './affectation.service';

@Controller('affectation')
export class AffectationController {
  constructor(private readonly affectationService: AffectationService) {}
}
