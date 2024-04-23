import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@/containers/page-container/page-header/assets/ic-search.svg";
import styled from "@emotion/styled";
import {themeColor} from "@/common/configs/theme";
export function SearchForm() {
    return (
        <Search>
            <Paper elevation={0} className="search-box" component="form">
                <InputBase placeholder="Tìm sản phẩm công nghệ, bài viết, review..."/>
                <IconButton type="button" aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Search>
    );
}
const Search = styled.div`
    .search-box {
        padding: 0 16px;
        border-radius: 90px;
        border: 1px solid ${themeColor('border')};
        height: 40px;
        
        &>div {
            @media (max-width: 900px) {
                width: calc(100% - 24px);
            }
        }
        
        input {
            line-height: 38px;
            height: 100%;
            padding: 0;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-weight: 500;
            width: 302px;
            
            @media (max-width: 900px) {
                width: 100%;
            }
            
            @media (max-width: 600px) {
                font-size: 12px;
            }
            
            ::placeholder {
                color: ${themeColor('subtitle')};
            }
        }

        button {
            padding: 8px 0;

            &:hover {
                background-color: transparent;
            }
        }
    }
`