import {
  act,
  getByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { App, Pokemon } from '../src/App'
import React from 'react'
import '@testing-library/jest-dom'
import { pokemonService } from '../src/core/services/pokemon.service'

describe('Render main page', () => {
  // beforeEach(() => {})
  it('Render header', () => {
    render(<App />)
    expect(screen.getByText('Pokédex')).toBeInTheDocument()
  })
  it('Render search bar', () => {
    render(<App />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it.only('Render search bar', async () => {
    const mockPokemons: Pokemon[] = [
      {
        name: 'bulbasaur',
        id: 1,
        types: ['grass', 'poison'],
        height: 7,
        weight: 69,
        stats: [
          {
            name: 'HP',
            value: 45,
          },
          {
            name: 'ATK',
            value: 49,
          },
          {
            name: 'DEF',
            value: 49,
          },
          {
            name: 'SAT',
            value: 65,
          },
          {
            name: 'SDF',
            value: 65,
          },
          {
            name: 'SPD',
            value: 45,
          },
        ],
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        isVisible: true,
      },
    ]
    vi.spyOn(pokemonService, 'getAll').mockResolvedValue(mockPokemons)
    render(<App />)

    const pokemonTitle = await screen.findByText('Bulbasaur')
    expect(pokemonTitle).toBeInTheDocument()
  })
})
