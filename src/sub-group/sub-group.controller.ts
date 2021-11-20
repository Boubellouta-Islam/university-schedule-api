import { Controller } from '@nestjs/common';
import { SubGroupService } from './sub-group.service';

@Controller('sub-group')
export class SubGroupController {
  constructor(private readonly subgroupService: SubGroupService) {}
}
