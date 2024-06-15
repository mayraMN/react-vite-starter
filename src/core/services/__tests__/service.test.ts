import { describe, it, vi, expect } from 'vitest'
import { apiClient } from '../apiClient.service'
import { pokemonService } from '../pokemon.service'
import {
  pokemonGenerationOneMock,
  bulbasaurMockApi,
  bulbasaur,
} from './fixtures'

import '@testing-library/jest-dom'

describe('ApiClient services', () => {
  it.only('ApiClient service get', async () => {
    vi.spyOn(apiClient, 'get')
      .mockResolvedValueOnce(pokemonGenerationOneMock)
      .mockResolvedValueOnce(bulbasaurMockApi)
    expect(await pokemonService.getAll()).toEqual(bulbasaur)
  })
})
