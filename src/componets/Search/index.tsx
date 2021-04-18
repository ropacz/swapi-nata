import React, { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Form, NotifyError } from './styles';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

interface SearchProps {
  handleDistanceMglt: (mglt: string) => void;
}

type SearchFormValues = {
  mglt: string;
};

const Search: React.FC<SearchProps> = ({ handleDistanceMglt }) => {
  const { register, handleSubmit } = useForm<SearchFormValues>();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit: SubmitHandler<SearchFormValues> = useCallback(
    ({ mglt }: SearchFormValues) => {
      if (mglt === '') {
        setErrorMessage('Preencha a busca');
        return;
      }

      if (Number.isNaN(+mglt)) {
        setErrorMessage('Insira valores númericos');
        return;
      }

      if (+mglt > 100000000) {
        setErrorMessage('Distância muito grande');
        return;
      }

      setErrorMessage('');
      handleDistanceMglt(mglt);
    },
    [handleDistanceMglt],
  );
  

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('mglt')}
          type="text"
          placeholder="Digite uma medida MGTL (anos luz), ex: 1000000"
        />
        <button type="submit">Buscar Naves</button>
      </Form>
      {errorMessage && <NotifyError>{errorMessage}</NotifyError>}
    </>
  );
};

export default Search;
