import {
    Body,
    Controller,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
    Query,
    Redirect,
    Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    // @Post()
    // // @Header('Cache-control', 'no-store')
    // async create(@Body() createCatsDto: CreateCatsDto) {
    //     return 'This action adds a new cat';
    // }

    // @Get()
    // // @HttpCode(200)
    // // findAll(@Req() request: Request) {
    // findAll(@Query('age') age: number, @Query('breed') breed: string) {
    //     return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
    // }

    // @Get('docs')
    // @Redirect('https://docs.nestjs.com', 302)
    // getDocs(@Query('version') version) {
    //     return version;
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return `This action returns a ${id}`;
    // }
}
