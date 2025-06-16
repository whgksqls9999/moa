import { Reflector } from '@nestjs/core';

export const Rolse = Reflector.createDecorator<string[]>();

/** @Roles(['admin']) */
