import { camelToSnakeCase } from '@core/utilities';
import { UnprocessableEntityException } from '@nestjs/common';

interface IError {
  name: string;
  message: string;
  developerMessage?: string;
  field: string;
  value: string;
}
export class ValidationException extends UnprocessableEntityException {
  constructor(private __errors: any) {
    super();
  }

  get errors(): IError[] {
    return this.__errors.reduce((accumulator, error) => {
      const result = [];
      for (const key in error.constraints) {
        result.push({
          name: `${error.property}_${camelToSnakeCase(key)}`?.toUpperCase(),
          message: error.constraints[key],
          developerMessage:
            error?.contexts?.[key]?.developerNote || error.constraints[key],
          field: error.property,
          value: error.value,
        });
      }
      return [...result, ...accumulator];
    }, []);
  }
}

