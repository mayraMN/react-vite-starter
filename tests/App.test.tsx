import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { App } from '../src/App'
import React from 'react'
import '@testing-library/jest-dom'
import { pokemonService } from '../src/core/services/pokemon.service'
import { pokemonsMock } from './__fixtures__/fixtures'

describe('Render main page', () => {
  it('Render header', () => {
    render(<App />)
    expect(screen.getByText('Pokédex')).toBeInTheDocument()
  })
  it('Render search bar', () => {
    render(<App />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('Render bulbasaur card', async () => {
    vi.spyOn(pokemonService, 'getPokemons').mockResolvedValue(pokemonsMock)
    render(<App />)

    const pokemonTitle = await screen.findByText('Bulbasaur')
    expect(pokemonTitle).toBeInTheDocument()
  })
  it('Not render bulbasaur after filter by i', async () => {
    vi.spyOn(pokemonService, 'getPokemons').mockResolvedValue(pokemonsMock)
    render(<App />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'i')
    expect(screen.queryByText('Bulbasaur')).toBeNull()
  })
  it.only('render loading cards', async () => {
    render(<App />)
    expect(screen.queryByTestId('cardListLoading')).not.toBeNull()
  })
})
