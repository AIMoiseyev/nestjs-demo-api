import { Test, TestingModule } from '@nestjs/testing';
import { ReviewService } from './review.service';
import { ReviewModel } from './review.model';
import { getModelToken } from 'nestjs-typegoose';
import { Types } from 'mongoose';

describe('ReviewService', () => {
  let service: ReviewService;

  const exec = { exec: jest.fn() };
  const reviewRepositoryFactory = () => ({
    find: () => exec,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        ReviewModel,
        {
          useFactory: reviewRepositoryFactory,
          provide: getModelToken('ReviewModel'),
        },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByProductId - success', async () => {
    const id = new Types.ObjectId().toHexString();
    reviewRepositoryFactory()
      .find()
      .exec.mockReturnValueOnce([{ productId: id }]);
    const res = await service.findByProductId(id);
    expect(res[0].productId).toBe(id);
  });
});