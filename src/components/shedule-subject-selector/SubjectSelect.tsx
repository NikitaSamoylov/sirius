import Select from 'react-select';
import { useAppDispatch } from '../../hooks';
import { setFilter } from '../../store/filter-subject-slice/filter-subject-slice';
import styles from './SubjectSelect.module.scss';

type TSubjects = {
  value: string;
  label: string;
};

const options: TSubjects[] = [
  { value: 'Ментальная арифметика', label: 'Ментальная арифметика' },
  { value: 'Программирование', label: 'Программирование' },
  { value: 'Скорочтение', label: 'Скорочтение' },
  { value: '', label: 'Все предметы' },
];

const SubjectSelect: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleFilter = (filter: string) => {
    dispatch(setFilter(filter))
  };

  return (
    <div>
      <Select options={ options }
        closeMenuOnSelect={ true }
        placeholder={ 'Выбрать предмет' }
        styles={ {
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: '#79747F',
            fontSize: '1.4rem'
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            color: 'black',
            fontSize: '1.4rem'
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: 'black',
            fontSize: '1.4rem',
          }),
        } }
        theme={ (theme) => ({
          ...theme,
          borderRadius: 10,
          outline: 'none',
          colors: {
            ...theme.colors,
            primary25: '#EEEEFF',
            primary: '#EEEEFF',
          },
        }) }
        onChange={
          (options) =>
            handleFilter(options!.value)
        }
      />
    </div>
  )
};

export default SubjectSelect;