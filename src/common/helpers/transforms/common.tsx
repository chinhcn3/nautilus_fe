import {dto_Meta} from '@/common/openapi';
import {Merge} from 'type-fest';

export type TransformedMeta = Merge<
  dto_Meta,
  {
    page: number;
  }
>;

export class CommonTransform {
  static transformMeta(meta?: dto_Meta): TransformedMeta | undefined {
    if (!meta) return undefined;
    return {
      ...meta,
      page: ~~Number(meta.page)
    };
  }
}
