import React, { useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { bindActionCreators } from 'redux';

import TextField from '@material-ui/core/TextField';

import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Creators as SelectActions } from '../../../store/ducks/select_infos';

import Menu from '../../../components/Menu';

const renderInput = ({ input, label }) => (
  <div>
    <TextField
      {...input}
      required
      label={label}
      fullWidth
      margin="normal"
      size="small"
    />
  </div>
);

const renderInputNoReq = ({ input, label }) => (
  <div>
    <TextField
      {...input}
      label={label}
      fullWidth
      margin="normal"
      size="small"
    />
  </div>
);

const renderSelect = ({ input, label, options }) => (
  <div>
    <FormControl required fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <NativeSelect required {...input}>
        <option value="" key={Math.random()} />
        {options.map(option => (
          <option key={option.label}>{option.label}</option>
        ))}
      </NativeSelect>
    </FormControl>
  </div>
);

const renderSelectNoReq = ({ input, label, options }) => (
  <div>
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <NativeSelect {...input}>
        <option value="" key={Math.random()} />
        {options.map(option => (
          <option key={option.label}>{option.label}</option>
        ))}
      </NativeSelect>
    </FormControl>
  </div>
);

const renderSwitch = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Switch
          {...input}
          checked={!!input.value}
          onChange={input.onChange}
          value="checked"
          color="primary"
        />
      }
      labelPlacement="start"
      label={label}
    />
  </div>
);

const kits = [
  { label: 'Sem nenhum Kit' },
  { label: 'Kit Lubrifica????o' },
  {
    label:
      'Uma via unidirecional (Ex: Rompedor, Compactador, Vibro Ripper, Serra Rocha, Concha Britadora e etc)',
  },
  {
    label:
      'Uma via bidirecional (Ex: Engate R??pido, Arrasador de Estacas e etc)',
  },
  { label: 'Duas vias bidirecional (Ex: Tesoura, Pulverizador e etc)' },
];

const machines = [
  { label: 'Mini Escavadeira' },
  { label: 'Retro' },
  { label: 'Escavadeira' },
  { label: 'Outro' },
];

const relevant_infos = [
  { label: 'Sem nenhuma informa????o relevante' },
  { label: 'Sem o bra??o (TAB1 - Fig 1)' },
  { label: 'Bra??o Telesc??pico (TAB1- Fig 2)' },
  { label: 'Kit Original de F??brica' },
  { label: 'Com filtro na linha de retorno' },
  { label: 'Sem predisposi????o no comando (TAB1- Fig 3)' },
  { label: 'Na Carregadeira (TAB1 - Fig 4)' },
];

const conditions = [
  { label: 'Sem condi????o' },
  {
    label:
      'Condi????o Padr??o: Uma Caixa Ferramenta Completa com Kit Nitrog??nio, Um Cilindro de G??s, Um Par de Mangueiras, Um Manual de Pe??as, Um Manual de Opera????o e Uma Ponteira.',
  },
];

const tool_types = [
  { label: 'Cego' },
  { label: 'Universal' },
  { label: 'Cunha H' },
  { label: 'Cunha V' },
  { label: 'Lapis' },
  { label: 'Pata de Elefante' },
  { label: 'Ponteiro Universal Longo' },
];

let Kit = ({ values, history, handleSubmit, submitting }) => {
  const ExtraToolOptions = useCallback(() => {
    if (values.pont_extra) {
      return (
        <>
          <Field
            name="qtd_extra"
            label="Quantidade:"
            type="number"
            component={renderInput}
          />
          <Field
            name="tipo_extra"
            label="Tipo de ponteira:"
            options={tool_types}
            type="text"
            component={renderSelect}
          />
        </>
      );
    }
    return null;
  }, [values.pont_extra]);

  async function showResults() {
    history.push('/paymentdetails');
  }

  return (
    <div>
      <Menu title="Detalhes do Pedido" />

      <Container maxWidth="md" component="main" align="center">
        <form onSubmit={handleSubmit(showResults)}>
          <Container maxWidth="sm" align="left">
            <Field
              name="kit"
              label="Selecione um kit"
              options={kits}
              type="text"
              component={renderSelect}
            />
            <Field
              name="maquina"
              label="Selecione uma m??quina"
              options={machines}
              type="text"
              component={renderSelect}
            />
            <Field
              name="modelo"
              label="Modelo"
              type="text"
              component={renderInput}
            />
            <Field name="ano" label="Ano" type="text" component={renderInput} />
            <Field
              name="engate"
              label="Possui engate r??pido?"
              type="text"
              component={renderSwitch}
            />
            <Field
              name="informacoes_relevantes"
              label="Informa????es relevantes:"
              options={relevant_infos}
              type="text"
              component={renderSelect}
            />
            <Field
              name="condicao"
              label="Condi????o:"
              options={conditions}
              type="text"
              component={renderSelect}
            />
            <Field
              name="tipo_ponteira"
              label="Tipo de ponteira:"
              options={tool_types}
              type="text"
              component={renderSelectNoReq}
            />
            <Field
              name="pont_extra"
              label="Ponteira extra?"
              type="text"
              component={renderSwitch}
            />
            <ExtraToolOptions />
            <Field
              name="info_ad_hidraulico"
              label="Informa????es adicionais:"
              type="text"
              component={renderInputNoReq}
            />
          </Container>
          <Link to="/orderoptions">
            <Button variant="contained" style={{ margin: 15 }}>
              Voltar
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: 15 }}
            disabled={submitting}
          >
            Continuar
          </Button>
        </form>
      </Container>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(SelectActions, dispatch);

const mapStateToProps = state => ({
  values: getFormValues('infoReduxForm')(state),
});

Kit = connect(mapStateToProps, mapDispatchToProps)(Kit);

export default withRouter(
  reduxForm({
    form: 'infoReduxForm',
    destroyOnUnmount: false,
  })(Kit),
);
