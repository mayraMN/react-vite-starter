import {
  getByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { App } from '../src/App'
import React from 'react'
import '@testing-library/jest-dom'

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
    render(<App />)
    // await waitFor(
    //   () => {
    //     expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    //   },
    //   { timeout: 6000 },
    // )
    // waitForElementToBeRemoved(() => {
    //   screen.queryByText('loading')
    // })
    // screen.debug()
    const pokemonTitle = await screen.findByText('Bulbasaur')
    console.log({ pokemonTitle })
    expect(pokemonTitle).toBeInTheDocument()
  })
})
