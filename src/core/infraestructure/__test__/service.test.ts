import { describe, it, vi, expect } from 'vitest'
import { apiClient } from '../apiClient.service'
import { pokemonService } from '../../services/pokemon.service'
import {
  pokemonGenerationOneMock,
  bulbasaurMockApi,
  bulbasaur,
} from './__fixtures__/fixtures'

import '@testing-library/jest-dom'

describe('ApiClient services', () => {
  it('ApiClient service get', async () => {
    vi.spyOn(apiClient, 'get')
      .mockResolvedValueOnce(pokemonGenerationOneMock)
      .mockResolvedValueOnce(bulbasaurMockApi)
    expect(await pokemonService.getAll()).toEqual(bulbasaur)
  })
})
