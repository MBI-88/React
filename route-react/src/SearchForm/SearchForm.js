import React from "react"; 
import {InputWithLabel} from '../InputWithLabel/InputWithLabel.js'

const SearchForm = ({
    searchTerm,
    onSearchInput,
    onSearchSubmit,
  }) => (
    <form onSubmit={onSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>
  
      <button type="submit" disabled={!searchTerm}>
        Submit
      </button>
    </form>
  
);

export {SearchForm}