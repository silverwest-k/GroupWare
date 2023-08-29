import {FormControl, InputGroup} from "react-bootstrap";
import styled, {css} from "styled-components";

function SearchBar() {
    return (
        <Wrapper>
            <InputGroup>
                <FormControl type="text" className="form-control-lg" placeholder="제목"/>
                <SearchButton> 검색 </SearchButton>
            </InputGroup>
        </Wrapper>
    )
}

export default SearchBar

const Wrapper = styled.div`
  width: 250px;
  height: 100px;
  position: relative;
  left: calc(100% - 410px);
  bottom: calc(100% - 770px);
`
const SearchButton = styled.button`
  --bs-btn-bg: #4429f2;
  --bs-btn-border-color: #4429f2;
  --bs-btn-hover-bg: rgba(68, 41, 242, 0.7);
  --bs-btn-hover-border-color: none;
  --bs-btn-active-bg: #4429f2;
  --bs-btn-active-border-color: #4429f2;

  ${props => props.admin && css`
    --bs-btn-bg: none;
    --bs-btn-color: #fa3e0c;
    --bs-btn-border-color: #fa3e0c;
    --bs-btn-hover-bg: #fb5a2d;
    --bs-btn-hover-border-color: #fb5a2d;
    --bs-btn-active-bg: #fa3e0c;
    --bs-btn-active-border-color: #fa3e0c;
  `}
`