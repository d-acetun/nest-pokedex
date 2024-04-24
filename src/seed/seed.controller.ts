import { Controller, Get } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { SeedService } from './seed.service';
import { PokeResponse } from './interfaces/poke-response.interface';

@Controller('seed')
export class SeedController {
  private readonly axios: AxiosInstance = axios;
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    const { results } = data;
    results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      console.log(`Name: ${name}, No: ${no}`);
    });

    return data.results;
  }
}
