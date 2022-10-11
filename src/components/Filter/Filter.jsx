import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
import { newFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';

const FilterPlateStyled = styled.section`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 16px;
`;

const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 16px;
`;

const Filter = function () {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = query => dispatch(newFilter(query));
  
  return (
    <FilterPlateStyled style={{ border: '0' }}>
      <Formik initialValues={{ filter: filter }}>
        <Form>
          <label>
            Find contact
            <br />
            <Input
              type="text"
              name="filter"
              value={filter}
              onChange={error => {
                handleFilter(error.target.value);
              }}
            ></Input>
          </label>
        </Form>
      </Formik>
    </FilterPlateStyled>
  );
};

export default Filter;