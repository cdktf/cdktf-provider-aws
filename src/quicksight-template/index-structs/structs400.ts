import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn,
quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform,
QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference,
QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumn,
quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform,
QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference } from './structs0'
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValue {
  /**
  * default_value_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_value_column QuicksightTemplate#default_value_column}
  */
  readonly defaultValueColumn: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn;
  /**
  * group_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#group_name_column QuicksightTemplate#group_name_column}
  */
  readonly groupNameColumn: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumn;
  /**
  * user_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#user_name_column QuicksightTemplate#user_name_column}
  */
  readonly userNameColumn: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumn;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_column: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct!.defaultValueColumn),
    group_name_column: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct!.groupNameColumn),
    user_name_column: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct!.userNameColumn),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueColumn = this._defaultValueColumn?.internalValue;
    }
    if (this._groupNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameColumn = this._groupNameColumn?.internalValue;
    }
    if (this._userNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameColumn = this._userNameColumn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValueColumn.internalValue = undefined;
      this._groupNameColumn.internalValue = undefined;
      this._userNameColumn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValueColumn.internalValue = value.defaultValueColumn;
      this._groupNameColumn.internalValue = value.groupNameColumn;
      this._userNameColumn.internalValue = value.userNameColumn;
    }
  }

  // default_value_column - computed: false, optional: false, required: true
  private _defaultValueColumn = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference(this, "default_value_column");
  public get defaultValueColumn() {
    return this._defaultValueColumn;
  }
  public putDefaultValueColumn(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn) {
    this._defaultValueColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueColumnInput() {
    return this._defaultValueColumn.internalValue;
  }

  // group_name_column - computed: false, optional: false, required: true
  private _groupNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference(this, "group_name_column");
  public get groupNameColumn() {
    return this._groupNameColumn;
  }
  public putGroupNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumn) {
    this._groupNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameColumnInput() {
    return this._groupNameColumn.internalValue;
  }

  // user_name_column - computed: false, optional: false, required: true
  private _userNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference(this, "user_name_column");
  public get userNameColumn() {
    return this._userNameColumn;
  }
  public putUserNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueUserNameColumn) {
    this._userNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameColumnInput() {
    return this._userNameColumn.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDateToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDateOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetIdentifier = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetIdentifier = value.dataSetIdentifier;
      this._expression = value.expression;
    }
  }

  // data_set_identifier - computed: false, optional: true, required: false
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  public resetDataSetIdentifier() {
    this._dataSetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_values QuicksightTemplate#static_values}
  */
  readonly staticValues?: string[];
  /**
  * dynamic_value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#dynamic_value QuicksightTemplate#dynamic_value}
  */
  readonly dynamicValue?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValue;
  /**
  * rolling_date block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rolling_date QuicksightTemplate#rolling_date}
  */
  readonly rollingDate?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDate;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.staticValues),
    dynamic_value: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueToTerraform(struct!.dynamicValue),
    rolling_date: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDateToTerraform(struct!.rollingDate),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValues = this._staticValues;
    }
    if (this._dynamicValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicValue = this._dynamicValue?.internalValue;
    }
    if (this._rollingDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingDate = this._rollingDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticValues = undefined;
      this._dynamicValue.internalValue = undefined;
      this._rollingDate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticValues = value.staticValues;
      this._dynamicValue.internalValue = value.dynamicValue;
      this._rollingDate.internalValue = value.rollingDate;
    }
  }

  // static_values - computed: false, optional: true, required: false
  private _staticValues?: string[]; 
  public get staticValues() {
    return this.getListAttribute('static_values');
  }
  public set staticValues(value: string[]) {
    this._staticValues = value;
  }
  public resetStaticValues() {
    this._staticValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValuesInput() {
    return this._staticValues;
  }

  // dynamic_value - computed: false, optional: true, required: false
  private _dynamicValue = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueOutputReference(this, "dynamic_value");
  public get dynamicValue() {
    return this._dynamicValue;
  }
  public putDynamicValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValue) {
    this._dynamicValue.internalValue = value;
  }
  public resetDynamicValue() {
    this._dynamicValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicValueInput() {
    return this._dynamicValue.internalValue;
  }

  // rolling_date - computed: false, optional: true, required: false
  private _rollingDate = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDateOutputReference(this, "rolling_date");
  public get rollingDate() {
    return this._rollingDate;
  }
  public putRollingDate(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesRollingDate) {
    this._rollingDate.internalValue = value;
  }
  public resetRollingDate() {
    this._rollingDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingDateInput() {
    return this._rollingDate.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_value QuicksightTemplate#custom_value}
  */
  readonly customValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_when_unset_option QuicksightTemplate#value_when_unset_option}
  */
  readonly valueWhenUnsetOption?: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnsetToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnsetOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_value: cdktf.stringToTerraform(struct!.customValue),
    value_when_unset_option: cdktf.stringToTerraform(struct!.valueWhenUnsetOption),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValue = this._customValue;
    }
    if (this._valueWhenUnsetOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueWhenUnsetOption = this._valueWhenUnsetOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customValue = undefined;
      this._valueWhenUnsetOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customValue = value.customValue;
      this._valueWhenUnsetOption = value.valueWhenUnsetOption;
    }
  }

  // custom_value - computed: false, optional: true, required: false
  private _customValue?: string; 
  public get customValue() {
    return this.getStringAttribute('custom_value');
  }
  public set customValue(value: string) {
    this._customValue = value;
  }
  public resetCustomValue() {
    this._customValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValueInput() {
    return this._customValue;
  }

  // value_when_unset_option - computed: false, optional: true, required: false
  private _valueWhenUnsetOption?: string; 
  public get valueWhenUnsetOption() {
    return this.getStringAttribute('value_when_unset_option');
  }
  public set valueWhenUnsetOption(value: string) {
    this._valueWhenUnsetOption = value;
  }
  public resetValueWhenUnsetOption() {
    this._valueWhenUnsetOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueWhenUnsetOptionInput() {
    return this._valueWhenUnsetOption;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclaration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity?: string;
  /**
  * default_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_values QuicksightTemplate#default_values}
  */
  readonly defaultValues?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValues;
  /**
  * values_when_unset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values_when_unset QuicksightTemplate#values_when_unset}
  */
  readonly valuesWhenUnset?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnset;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclaration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    default_values: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesToTerraform(struct!.defaultValues),
    values_when_unset: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnsetToTerraform(struct!.valuesWhenUnset),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclaration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._defaultValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues?.internalValue;
    }
    if (this._valuesWhenUnset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesWhenUnset = this._valuesWhenUnset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclaration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._timeGranularity = undefined;
      this._defaultValues.internalValue = undefined;
      this._valuesWhenUnset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._timeGranularity = value.timeGranularity;
      this._defaultValues.internalValue = value.defaultValues;
      this._valuesWhenUnset.internalValue = value.valuesWhenUnset;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // time_granularity - computed: false, optional: true, required: false
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  public resetTimeGranularity() {
    this._timeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesOutputReference(this, "default_values");
  public get defaultValues() {
    return this._defaultValues;
  }
  public putDefaultValues(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValues) {
    this._defaultValues.internalValue = value;
  }
  public resetDefaultValues() {
    this._defaultValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues.internalValue;
  }

  // values_when_unset - computed: false, optional: true, required: false
  private _valuesWhenUnset = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnsetOutputReference(this, "values_when_unset");
  public get valuesWhenUnset() {
    return this._valuesWhenUnset;
  }
  public putValuesWhenUnset(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationValuesWhenUnset) {
    this._valuesWhenUnset.internalValue = value;
  }
  public resetValuesWhenUnset() {
    this._valuesWhenUnset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesWhenUnsetInput() {
    return this._valuesWhenUnset.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValue {
  /**
  * default_value_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_value_column QuicksightTemplate#default_value_column}
  */
  readonly defaultValueColumn: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn;
  /**
  * group_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#group_name_column QuicksightTemplate#group_name_column}
  */
  readonly groupNameColumn: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumn;
  /**
  * user_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#user_name_column QuicksightTemplate#user_name_column}
  */
  readonly userNameColumn: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumn;
}

export function quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_column: quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct!.defaultValueColumn),
    group_name_column: quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct!.groupNameColumn),
    user_name_column: quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct!.userNameColumn),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueColumn = this._defaultValueColumn?.internalValue;
    }
    if (this._groupNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameColumn = this._groupNameColumn?.internalValue;
    }
    if (this._userNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameColumn = this._userNameColumn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValueColumn.internalValue = undefined;
      this._groupNameColumn.internalValue = undefined;
      this._userNameColumn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValueColumn.internalValue = value.defaultValueColumn;
      this._groupNameColumn.internalValue = value.groupNameColumn;
      this._userNameColumn.internalValue = value.userNameColumn;
    }
  }

  // default_value_column - computed: false, optional: false, required: true
  private _defaultValueColumn = new QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference(this, "default_value_column");
  public get defaultValueColumn() {
    return this._defaultValueColumn;
  }
  public putDefaultValueColumn(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn) {
    this._defaultValueColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueColumnInput() {
    return this._defaultValueColumn.internalValue;
  }

  // group_name_column - computed: false, optional: false, required: true
  private _groupNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference(this, "group_name_column");
  public get groupNameColumn() {
    return this._groupNameColumn;
  }
  public putGroupNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueGroupNameColumn) {
    this._groupNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameColumnInput() {
    return this._groupNameColumn.internalValue;
  }

  // user_name_column - computed: false, optional: false, required: true
  private _userNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference(this, "user_name_column");
  public get userNameColumn() {
    return this._userNameColumn;
  }
  public putUserNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueUserNameColumn) {
    this._userNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameColumnInput() {
    return this._userNameColumn.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_values QuicksightTemplate#static_values}
  */
  readonly staticValues?: number[];
  /**
  * dynamic_value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#dynamic_value QuicksightTemplate#dynamic_value}
  */
  readonly dynamicValue?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValue;
}

export function quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.staticValues),
    dynamic_value: quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueToTerraform(struct!.dynamicValue),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValues = this._staticValues;
    }
    if (this._dynamicValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicValue = this._dynamicValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticValues = undefined;
      this._dynamicValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticValues = value.staticValues;
      this._dynamicValue.internalValue = value.dynamicValue;
    }
  }

  // static_values - computed: false, optional: true, required: false
  private _staticValues?: number[]; 
  public get staticValues() {
    return this.getNumberListAttribute('static_values');
  }
  public set staticValues(value: number[]) {
    this._staticValues = value;
  }
  public resetStaticValues() {
    this._staticValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValuesInput() {
    return this._staticValues;
  }

  // dynamic_value - computed: false, optional: true, required: false
  private _dynamicValue = new QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValueOutputReference(this, "dynamic_value");
  public get dynamicValue() {
    return this._dynamicValue;
  }
  public putDynamicValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesDynamicValue) {
    this._dynamicValue.internalValue = value;
  }
  public resetDynamicValue() {
    this._dynamicValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicValueInput() {
    return this._dynamicValue.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_value QuicksightTemplate#custom_value}
  */
  readonly customValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_when_unset_option QuicksightTemplate#value_when_unset_option}
  */
  readonly valueWhenUnsetOption?: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnsetToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnsetOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_value: cdktf.numberToTerraform(struct!.customValue),
    value_when_unset_option: cdktf.stringToTerraform(struct!.valueWhenUnsetOption),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValue = this._customValue;
    }
    if (this._valueWhenUnsetOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueWhenUnsetOption = this._valueWhenUnsetOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customValue = undefined;
      this._valueWhenUnsetOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customValue = value.customValue;
      this._valueWhenUnsetOption = value.valueWhenUnsetOption;
    }
  }

  // custom_value - computed: false, optional: true, required: false
  private _customValue?: number; 
  public get customValue() {
    return this.getNumberAttribute('custom_value');
  }
  public set customValue(value: number) {
    this._customValue = value;
  }
  public resetCustomValue() {
    this._customValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValueInput() {
    return this._customValue;
  }

  // value_when_unset_option - computed: false, optional: true, required: false
  private _valueWhenUnsetOption?: string; 
  public get valueWhenUnsetOption() {
    return this.getStringAttribute('value_when_unset_option');
  }
  public set valueWhenUnsetOption(value: string) {
    this._valueWhenUnsetOption = value;
  }
  public resetValueWhenUnsetOption() {
    this._valueWhenUnsetOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueWhenUnsetOptionInput() {
    return this._valueWhenUnsetOption;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclaration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_type QuicksightTemplate#parameter_value_type}
  */
  readonly parameterValueType: string;
  /**
  * default_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_values QuicksightTemplate#default_values}
  */
  readonly defaultValues?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValues;
  /**
  * values_when_unset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values_when_unset QuicksightTemplate#values_when_unset}
  */
  readonly valuesWhenUnset?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnset;
}

export function quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclaration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameter_value_type: cdktf.stringToTerraform(struct!.parameterValueType),
    default_values: quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesToTerraform(struct!.defaultValues),
    values_when_unset: quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnsetToTerraform(struct!.valuesWhenUnset),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclaration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueType = this._parameterValueType;
    }
    if (this._defaultValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues?.internalValue;
    }
    if (this._valuesWhenUnset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesWhenUnset = this._valuesWhenUnset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclaration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._parameterValueType = undefined;
      this._defaultValues.internalValue = undefined;
      this._valuesWhenUnset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._parameterValueType = value.parameterValueType;
      this._defaultValues.internalValue = value.defaultValues;
      this._valuesWhenUnset.internalValue = value.valuesWhenUnset;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parameter_value_type - computed: false, optional: false, required: true
  private _parameterValueType?: string; 
  public get parameterValueType() {
    return this.getStringAttribute('parameter_value_type');
  }
  public set parameterValueType(value: string) {
    this._parameterValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueTypeInput() {
    return this._parameterValueType;
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues = new QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValuesOutputReference(this, "default_values");
  public get defaultValues() {
    return this._defaultValues;
  }
  public putDefaultValues(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationDefaultValues) {
    this._defaultValues.internalValue = value;
  }
  public resetDefaultValues() {
    this._defaultValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues.internalValue;
  }

  // values_when_unset - computed: false, optional: true, required: false
  private _valuesWhenUnset = new QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnsetOutputReference(this, "values_when_unset");
  public get valuesWhenUnset() {
    return this._valuesWhenUnset;
  }
  public putValuesWhenUnset(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationValuesWhenUnset) {
    this._valuesWhenUnset.internalValue = value;
  }
  public resetValuesWhenUnset() {
    this._valuesWhenUnset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesWhenUnsetInput() {
    return this._valuesWhenUnset.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValue {
  /**
  * default_value_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_value_column QuicksightTemplate#default_value_column}
  */
  readonly defaultValueColumn: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn;
  /**
  * group_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#group_name_column QuicksightTemplate#group_name_column}
  */
  readonly groupNameColumn: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumn;
  /**
  * user_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#user_name_column QuicksightTemplate#user_name_column}
  */
  readonly userNameColumn: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumn;
}

export function quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueOutputReference | QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_column: quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct!.defaultValueColumn),
    group_name_column: quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct!.groupNameColumn),
    user_name_column: quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct!.userNameColumn),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueColumn = this._defaultValueColumn?.internalValue;
    }
    if (this._groupNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameColumn = this._groupNameColumn?.internalValue;
    }
    if (this._userNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameColumn = this._userNameColumn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValueColumn.internalValue = undefined;
      this._groupNameColumn.internalValue = undefined;
      this._userNameColumn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValueColumn.internalValue = value.defaultValueColumn;
      this._groupNameColumn.internalValue = value.groupNameColumn;
      this._userNameColumn.internalValue = value.userNameColumn;
    }
  }

  // default_value_column - computed: false, optional: false, required: true
  private _defaultValueColumn = new QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference(this, "default_value_column");
  public get defaultValueColumn() {
    return this._defaultValueColumn;
  }
  public putDefaultValueColumn(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn) {
    this._defaultValueColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueColumnInput() {
    return this._defaultValueColumn.internalValue;
  }

  // group_name_column - computed: false, optional: false, required: true
  private _groupNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference(this, "group_name_column");
  public get groupNameColumn() {
    return this._groupNameColumn;
  }
  public putGroupNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueGroupNameColumn) {
    this._groupNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameColumnInput() {
    return this._groupNameColumn.internalValue;
  }

  // user_name_column - computed: false, optional: false, required: true
  private _userNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference(this, "user_name_column");
  public get userNameColumn() {
    return this._userNameColumn;
  }
  public putUserNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueUserNameColumn) {
    this._userNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameColumnInput() {
    return this._userNameColumn.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_values QuicksightTemplate#static_values}
  */
  readonly staticValues?: number[];
  /**
  * dynamic_value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#dynamic_value QuicksightTemplate#dynamic_value}
  */
  readonly dynamicValue?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValue;
}

export function quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesOutputReference | QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.staticValues),
    dynamic_value: quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueToTerraform(struct!.dynamicValue),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValues = this._staticValues;
    }
    if (this._dynamicValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicValue = this._dynamicValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticValues = undefined;
      this._dynamicValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticValues = value.staticValues;
      this._dynamicValue.internalValue = value.dynamicValue;
    }
  }

  // static_values - computed: false, optional: true, required: false
  private _staticValues?: number[]; 
  public get staticValues() {
    return this.getNumberListAttribute('static_values');
  }
  public set staticValues(value: number[]) {
    this._staticValues = value;
  }
  public resetStaticValues() {
    this._staticValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValuesInput() {
    return this._staticValues;
  }

  // dynamic_value - computed: false, optional: true, required: false
  private _dynamicValue = new QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValueOutputReference(this, "dynamic_value");
  public get dynamicValue() {
    return this._dynamicValue;
  }
  public putDynamicValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesDynamicValue) {
    this._dynamicValue.internalValue = value;
  }
  public resetDynamicValue() {
    this._dynamicValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicValueInput() {
    return this._dynamicValue.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_value QuicksightTemplate#custom_value}
  */
  readonly customValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_when_unset_option QuicksightTemplate#value_when_unset_option}
  */
  readonly valueWhenUnsetOption?: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnsetToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnsetOutputReference | QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_value: cdktf.numberToTerraform(struct!.customValue),
    value_when_unset_option: cdktf.stringToTerraform(struct!.valueWhenUnsetOption),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValue = this._customValue;
    }
    if (this._valueWhenUnsetOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueWhenUnsetOption = this._valueWhenUnsetOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customValue = undefined;
      this._valueWhenUnsetOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customValue = value.customValue;
      this._valueWhenUnsetOption = value.valueWhenUnsetOption;
    }
  }

  // custom_value - computed: false, optional: true, required: false
  private _customValue?: number; 
  public get customValue() {
    return this.getNumberAttribute('custom_value');
  }
  public set customValue(value: number) {
    this._customValue = value;
  }
  public resetCustomValue() {
    this._customValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValueInput() {
    return this._customValue;
  }

  // value_when_unset_option - computed: false, optional: true, required: false
  private _valueWhenUnsetOption?: string; 
  public get valueWhenUnsetOption() {
    return this.getStringAttribute('value_when_unset_option');
  }
  public set valueWhenUnsetOption(value: string) {
    this._valueWhenUnsetOption = value;
  }
  public resetValueWhenUnsetOption() {
    this._valueWhenUnsetOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueWhenUnsetOptionInput() {
    return this._valueWhenUnsetOption;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclaration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_type QuicksightTemplate#parameter_value_type}
  */
  readonly parameterValueType: string;
  /**
  * default_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_values QuicksightTemplate#default_values}
  */
  readonly defaultValues?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValues;
  /**
  * values_when_unset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values_when_unset QuicksightTemplate#values_when_unset}
  */
  readonly valuesWhenUnset?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnset;
}

export function quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationOutputReference | QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclaration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameter_value_type: cdktf.stringToTerraform(struct!.parameterValueType),
    default_values: quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesToTerraform(struct!.defaultValues),
    values_when_unset: quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnsetToTerraform(struct!.valuesWhenUnset),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclaration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueType = this._parameterValueType;
    }
    if (this._defaultValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues?.internalValue;
    }
    if (this._valuesWhenUnset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesWhenUnset = this._valuesWhenUnset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclaration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._parameterValueType = undefined;
      this._defaultValues.internalValue = undefined;
      this._valuesWhenUnset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._parameterValueType = value.parameterValueType;
      this._defaultValues.internalValue = value.defaultValues;
      this._valuesWhenUnset.internalValue = value.valuesWhenUnset;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parameter_value_type - computed: false, optional: false, required: true
  private _parameterValueType?: string; 
  public get parameterValueType() {
    return this.getStringAttribute('parameter_value_type');
  }
  public set parameterValueType(value: string) {
    this._parameterValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueTypeInput() {
    return this._parameterValueType;
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues = new QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValuesOutputReference(this, "default_values");
  public get defaultValues() {
    return this._defaultValues;
  }
  public putDefaultValues(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationDefaultValues) {
    this._defaultValues.internalValue = value;
  }
  public resetDefaultValues() {
    this._defaultValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues.internalValue;
  }

  // values_when_unset - computed: false, optional: true, required: false
  private _valuesWhenUnset = new QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnsetOutputReference(this, "values_when_unset");
  public get valuesWhenUnset() {
    return this._valuesWhenUnset;
  }
  public putValuesWhenUnset(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationValuesWhenUnset) {
    this._valuesWhenUnset.internalValue = value;
  }
  public resetValuesWhenUnset() {
    this._valuesWhenUnset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesWhenUnsetInput() {
    return this._valuesWhenUnset.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValue {
  /**
  * default_value_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_value_column QuicksightTemplate#default_value_column}
  */
  readonly defaultValueColumn: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn;
  /**
  * group_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#group_name_column QuicksightTemplate#group_name_column}
  */
  readonly groupNameColumn: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumn;
  /**
  * user_name_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#user_name_column QuicksightTemplate#user_name_column}
  */
  readonly userNameColumn: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumn;
}

export function quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueOutputReference | QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value_column: quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct!.defaultValueColumn),
    group_name_column: quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct!.groupNameColumn),
    user_name_column: quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumnToTerraform(struct!.userNameColumn),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueColumn = this._defaultValueColumn?.internalValue;
    }
    if (this._groupNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameColumn = this._groupNameColumn?.internalValue;
    }
    if (this._userNameColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameColumn = this._userNameColumn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValueColumn.internalValue = undefined;
      this._groupNameColumn.internalValue = undefined;
      this._userNameColumn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValueColumn.internalValue = value.defaultValueColumn;
      this._groupNameColumn.internalValue = value.groupNameColumn;
      this._userNameColumn.internalValue = value.userNameColumn;
    }
  }

  // default_value_column - computed: false, optional: false, required: true
  private _defaultValueColumn = new QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference(this, "default_value_column");
  public get defaultValueColumn() {
    return this._defaultValueColumn;
  }
  public putDefaultValueColumn(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn) {
    this._defaultValueColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueColumnInput() {
    return this._defaultValueColumn.internalValue;
  }

  // group_name_column - computed: false, optional: false, required: true
  private _groupNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference(this, "group_name_column");
  public get groupNameColumn() {
    return this._groupNameColumn;
  }
  public putGroupNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueGroupNameColumn) {
    this._groupNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameColumnInput() {
    return this._groupNameColumn.internalValue;
  }

  // user_name_column - computed: false, optional: false, required: true
  private _userNameColumn = new QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumnOutputReference(this, "user_name_column");
  public get userNameColumn() {
    return this._userNameColumn;
  }
  public putUserNameColumn(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueUserNameColumn) {
    this._userNameColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameColumnInput() {
    return this._userNameColumn.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_values QuicksightTemplate#static_values}
  */
  readonly staticValues?: string[];
  /**
  * dynamic_value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#dynamic_value QuicksightTemplate#dynamic_value}
  */
  readonly dynamicValue?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValue;
}

export function quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesOutputReference | QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.staticValues),
    dynamic_value: quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueToTerraform(struct!.dynamicValue),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValues = this._staticValues;
    }
    if (this._dynamicValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicValue = this._dynamicValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticValues = undefined;
      this._dynamicValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticValues = value.staticValues;
      this._dynamicValue.internalValue = value.dynamicValue;
    }
  }

  // static_values - computed: false, optional: true, required: false
  private _staticValues?: string[]; 
  public get staticValues() {
    return this.getListAttribute('static_values');
  }
  public set staticValues(value: string[]) {
    this._staticValues = value;
  }
  public resetStaticValues() {
    this._staticValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValuesInput() {
    return this._staticValues;
  }

  // dynamic_value - computed: false, optional: true, required: false
  private _dynamicValue = new QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValueOutputReference(this, "dynamic_value");
  public get dynamicValue() {
    return this._dynamicValue;
  }
  public putDynamicValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesDynamicValue) {
    this._dynamicValue.internalValue = value;
  }
  public resetDynamicValue() {
    this._dynamicValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicValueInput() {
    return this._dynamicValue.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_value QuicksightTemplate#custom_value}
  */
  readonly customValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_when_unset_option QuicksightTemplate#value_when_unset_option}
  */
  readonly valueWhenUnsetOption?: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnsetToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnsetOutputReference | QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_value: cdktf.stringToTerraform(struct!.customValue),
    value_when_unset_option: cdktf.stringToTerraform(struct!.valueWhenUnsetOption),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValue = this._customValue;
    }
    if (this._valueWhenUnsetOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueWhenUnsetOption = this._valueWhenUnsetOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customValue = undefined;
      this._valueWhenUnsetOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customValue = value.customValue;
      this._valueWhenUnsetOption = value.valueWhenUnsetOption;
    }
  }

  // custom_value - computed: false, optional: true, required: false
  private _customValue?: string; 
  public get customValue() {
    return this.getStringAttribute('custom_value');
  }
  public set customValue(value: string) {
    this._customValue = value;
  }
  public resetCustomValue() {
    this._customValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValueInput() {
    return this._customValue;
  }

  // value_when_unset_option - computed: false, optional: true, required: false
  private _valueWhenUnsetOption?: string; 
  public get valueWhenUnsetOption() {
    return this.getStringAttribute('value_when_unset_option');
  }
  public set valueWhenUnsetOption(value: string) {
    this._valueWhenUnsetOption = value;
  }
  public resetValueWhenUnsetOption() {
    this._valueWhenUnsetOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueWhenUnsetOptionInput() {
    return this._valueWhenUnsetOption;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclaration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_type QuicksightTemplate#parameter_value_type}
  */
  readonly parameterValueType: string;
  /**
  * default_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_values QuicksightTemplate#default_values}
  */
  readonly defaultValues?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValues;
  /**
  * values_when_unset block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values_when_unset QuicksightTemplate#values_when_unset}
  */
  readonly valuesWhenUnset?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnset;
}

export function quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationOutputReference | QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclaration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameter_value_type: cdktf.stringToTerraform(struct!.parameterValueType),
    default_values: quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesToTerraform(struct!.defaultValues),
    values_when_unset: quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnsetToTerraform(struct!.valuesWhenUnset),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclaration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueType = this._parameterValueType;
    }
    if (this._defaultValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues?.internalValue;
    }
    if (this._valuesWhenUnset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesWhenUnset = this._valuesWhenUnset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclaration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._parameterValueType = undefined;
      this._defaultValues.internalValue = undefined;
      this._valuesWhenUnset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._parameterValueType = value.parameterValueType;
      this._defaultValues.internalValue = value.defaultValues;
      this._valuesWhenUnset.internalValue = value.valuesWhenUnset;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parameter_value_type - computed: false, optional: false, required: true
  private _parameterValueType?: string; 
  public get parameterValueType() {
    return this.getStringAttribute('parameter_value_type');
  }
  public set parameterValueType(value: string) {
    this._parameterValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueTypeInput() {
    return this._parameterValueType;
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues = new QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValuesOutputReference(this, "default_values");
  public get defaultValues() {
    return this._defaultValues;
  }
  public putDefaultValues(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationDefaultValues) {
    this._defaultValues.internalValue = value;
  }
  public resetDefaultValues() {
    this._defaultValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues.internalValue;
  }

  // values_when_unset - computed: false, optional: true, required: false
  private _valuesWhenUnset = new QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnsetOutputReference(this, "values_when_unset");
  public get valuesWhenUnset() {
    return this._valuesWhenUnset;
  }
  public putValuesWhenUnset(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationValuesWhenUnset) {
    this._valuesWhenUnset.internalValue = value;
  }
  public resetValuesWhenUnset() {
    this._valuesWhenUnset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesWhenUnsetInput() {
    return this._valuesWhenUnset.internalValue;
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarations {
  /**
  * date_time_parameter_declaration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_parameter_declaration QuicksightTemplate#date_time_parameter_declaration}
  */
  readonly dateTimeParameterDeclaration?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclaration;
  /**
  * decimal_parameter_declaration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_parameter_declaration QuicksightTemplate#decimal_parameter_declaration}
  */
  readonly decimalParameterDeclaration?: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclaration;
  /**
  * integer_parameter_declaration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#integer_parameter_declaration QuicksightTemplate#integer_parameter_declaration}
  */
  readonly integerParameterDeclaration?: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclaration;
  /**
  * string_parameter_declaration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#string_parameter_declaration QuicksightTemplate#string_parameter_declaration}
  */
  readonly stringParameterDeclaration?: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclaration;
}

export function quicksightTemplateDefinitionParametersDeclarationsToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_parameter_declaration: quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationToTerraform(struct!.dateTimeParameterDeclaration),
    decimal_parameter_declaration: quicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationToTerraform(struct!.decimalParameterDeclaration),
    integer_parameter_declaration: quicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationToTerraform(struct!.integerParameterDeclaration),
    string_parameter_declaration: quicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationToTerraform(struct!.stringParameterDeclaration),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeParameterDeclaration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeParameterDeclaration = this._dateTimeParameterDeclaration?.internalValue;
    }
    if (this._decimalParameterDeclaration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalParameterDeclaration = this._decimalParameterDeclaration?.internalValue;
    }
    if (this._integerParameterDeclaration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterDeclaration = this._integerParameterDeclaration?.internalValue;
    }
    if (this._stringParameterDeclaration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringParameterDeclaration = this._stringParameterDeclaration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateTimeParameterDeclaration.internalValue = undefined;
      this._decimalParameterDeclaration.internalValue = undefined;
      this._integerParameterDeclaration.internalValue = undefined;
      this._stringParameterDeclaration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateTimeParameterDeclaration.internalValue = value.dateTimeParameterDeclaration;
      this._decimalParameterDeclaration.internalValue = value.decimalParameterDeclaration;
      this._integerParameterDeclaration.internalValue = value.integerParameterDeclaration;
      this._stringParameterDeclaration.internalValue = value.stringParameterDeclaration;
    }
  }

  // date_time_parameter_declaration - computed: false, optional: true, required: false
  private _dateTimeParameterDeclaration = new QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationOutputReference(this, "date_time_parameter_declaration");
  public get dateTimeParameterDeclaration() {
    return this._dateTimeParameterDeclaration;
  }
  public putDateTimeParameterDeclaration(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclaration) {
    this._dateTimeParameterDeclaration.internalValue = value;
  }
  public resetDateTimeParameterDeclaration() {
    this._dateTimeParameterDeclaration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeParameterDeclarationInput() {
    return this._dateTimeParameterDeclaration.internalValue;
  }

  // decimal_parameter_declaration - computed: false, optional: true, required: false
  private _decimalParameterDeclaration = new QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclarationOutputReference(this, "decimal_parameter_declaration");
  public get decimalParameterDeclaration() {
    return this._decimalParameterDeclaration;
  }
  public putDecimalParameterDeclaration(value: QuicksightTemplateDefinitionParametersDeclarationsDecimalParameterDeclaration) {
    this._decimalParameterDeclaration.internalValue = value;
  }
  public resetDecimalParameterDeclaration() {
    this._decimalParameterDeclaration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalParameterDeclarationInput() {
    return this._decimalParameterDeclaration.internalValue;
  }

  // integer_parameter_declaration - computed: false, optional: true, required: false
  private _integerParameterDeclaration = new QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclarationOutputReference(this, "integer_parameter_declaration");
  public get integerParameterDeclaration() {
    return this._integerParameterDeclaration;
  }
  public putIntegerParameterDeclaration(value: QuicksightTemplateDefinitionParametersDeclarationsIntegerParameterDeclaration) {
    this._integerParameterDeclaration.internalValue = value;
  }
  public resetIntegerParameterDeclaration() {
    this._integerParameterDeclaration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterDeclarationInput() {
    return this._integerParameterDeclaration.internalValue;
  }

  // string_parameter_declaration - computed: false, optional: true, required: false
  private _stringParameterDeclaration = new QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclarationOutputReference(this, "string_parameter_declaration");
  public get stringParameterDeclaration() {
    return this._stringParameterDeclaration;
  }
  public putStringParameterDeclaration(value: QuicksightTemplateDefinitionParametersDeclarationsStringParameterDeclaration) {
    this._stringParameterDeclaration.internalValue = value;
  }
  public resetStringParameterDeclaration() {
    this._stringParameterDeclaration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringParameterDeclarationInput() {
    return this._stringParameterDeclaration.internalValue;
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionParametersDeclarations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionParametersDeclarationsOutputReference {
    return new QuicksightTemplateDefinitionParametersDeclarationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_format QuicksightTemplate#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_format: cdktf.stringToTerraform(struct!.dateTimeFormat),
    title_options: quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormat = this._dateTimeFormat;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeFormat = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeFormat = value.dateTimeFormat;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // date_time_format - computed: false, optional: true, required: false
  private _dateTimeFormat?: string; 
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }
  public set dateTimeFormat(value: string) {
    this._dateTimeFormat = value;
  }
  public resetDateTimeFormat() {
    this._dateTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatInput() {
    return this._dateTimeFormat;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDateTimePicker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_control_id QuicksightTemplate#filter_control_id}
  */
  readonly filterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_filter_id QuicksightTemplate#source_filter_id}
  */
  readonly sourceFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#type QuicksightTemplate#type}
  */
  readonly type?: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDateTimePicker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_control_id: cdktf.stringToTerraform(struct!.filterControlId),
    source_filter_id: cdktf.stringToTerraform(struct!.sourceFilterId),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    display_options: quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDateTimePicker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControlId = this._filterControlId;
    }
    if (this._sourceFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilterId = this._sourceFilterId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePicker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterControlId = undefined;
      this._sourceFilterId = undefined;
      this._title = undefined;
      this._type = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterControlId = value.filterControlId;
      this._sourceFilterId = value.sourceFilterId;
      this._title = value.title;
      this._type = value.type;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // filter_control_id - computed: false, optional: false, required: true
  private _filterControlId?: string; 
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }
  public set filterControlId(value: string) {
    this._filterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdInput() {
    return this._filterControlId;
  }

  // source_filter_id - computed: false, optional: false, required: true
  private _sourceFilterId?: string; 
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }
  public set sourceFilterId(value: string) {
    this._sourceFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterIdInput() {
    return this._sourceFilterId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_sheet_control_id QuicksightTemplate#source_sheet_control_id}
  */
  readonly sourceSheetControlId?: string;
  /**
  * column_to_match block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_to_match QuicksightTemplate#column_to_match}
  */
  readonly columnToMatch: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_sheet_control_id: cdktf.stringToTerraform(struct!.sourceSheetControlId),
    column_to_match: quicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct!.columnToMatch),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceSheetControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSheetControlId = this._sourceSheetControlId;
    }
    if (this._columnToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnToMatch = this._columnToMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = undefined;
      this._columnToMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = value.sourceSheetControlId;
      this._columnToMatch.internalValue = value.columnToMatch;
    }
  }

  // source_sheet_control_id - computed: false, optional: true, required: false
  private _sourceSheetControlId?: string; 
  public get sourceSheetControlId() {
    return this.getStringAttribute('source_sheet_control_id');
  }
  public set sourceSheetControlId(value: string) {
    this._sourceSheetControlId = value;
  }
  public resetSourceSheetControlId() {
    this._sourceSheetControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSheetControlIdInput() {
    return this._sourceSheetControlId;
  }

  // column_to_match - computed: false, optional: false, required: true
  private _columnToMatch = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference(this, "column_to_match");
  public get columnToMatch() {
    return this._columnToMatch;
  }
  public putColumnToMatch(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch) {
    this._columnToMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnToMatchInput() {
    return this._columnToMatch.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference {
    return new QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfiguration {
  /**
  * source_controls block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_controls QuicksightTemplate#source_controls}
  */
  readonly sourceControls?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControls[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_controls: cdktf.listMapper(quicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsToTerraform, true)(struct!.sourceControls),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceControls = this._sourceControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceControls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceControls.internalValue = value.sourceControls;
    }
  }

  // source_controls - computed: false, optional: true, required: false
  private _sourceControls = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControlsList(this, "source_controls", false);
  public get sourceControls() {
    return this._sourceControls;
  }
  public putSourceControls(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationSourceControls[] | cdktf.IResolvable) {
    this._sourceControls.internalValue = value;
  }
  public resetSourceControls() {
    this._sourceControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlsInput() {
    return this._sourceControls.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptions {
  /**
  * select_all_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_all_options: quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptionsToTerraform(struct!.selectAllOptions),
    title_options: quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectAllOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectAllOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectAllOptions.internalValue = value.selectAllOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference(this, "select_all_options");
  public get selectAllOptions() {
    return this._selectAllOptions;
  }
  public putSelectAllOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsSelectAllOptions) {
    this._selectAllOptions.internalValue = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: string[];
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValuesOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsDropdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_control_id QuicksightTemplate#filter_control_id}
  */
  readonly filterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_filter_id QuicksightTemplate#source_filter_id}
  */
  readonly sourceFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#type QuicksightTemplate#type}
  */
  readonly type?: string;
  /**
  * cascading_control_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cascading_control_configuration QuicksightTemplate#cascading_control_configuration}
  */
  readonly cascadingControlConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfiguration;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptions;
  /**
  * selectable_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selectable_values QuicksightTemplate#selectable_values}
  */
  readonly selectableValues?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValues;
}

export function quicksightTemplateDefinitionSheetsFilterControlsDropdownToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsDropdownOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsDropdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_control_id: cdktf.stringToTerraform(struct!.filterControlId),
    source_filter_id: cdktf.stringToTerraform(struct!.sourceFilterId),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    cascading_control_configuration: quicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationToTerraform(struct!.cascadingControlConfiguration),
    display_options: quicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsToTerraform(struct!.displayOptions),
    selectable_values: quicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValuesToTerraform(struct!.selectableValues),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsDropdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsDropdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControlId = this._filterControlId;
    }
    if (this._sourceFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilterId = this._sourceFilterId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cascadingControlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascadingControlConfiguration = this._cascadingControlConfiguration?.internalValue;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    if (this._selectableValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectableValues = this._selectableValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterControlId = undefined;
      this._sourceFilterId = undefined;
      this._title = undefined;
      this._type = undefined;
      this._cascadingControlConfiguration.internalValue = undefined;
      this._displayOptions.internalValue = undefined;
      this._selectableValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterControlId = value.filterControlId;
      this._sourceFilterId = value.sourceFilterId;
      this._title = value.title;
      this._type = value.type;
      this._cascadingControlConfiguration.internalValue = value.cascadingControlConfiguration;
      this._displayOptions.internalValue = value.displayOptions;
      this._selectableValues.internalValue = value.selectableValues;
    }
  }

  // filter_control_id - computed: false, optional: false, required: true
  private _filterControlId?: string; 
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }
  public set filterControlId(value: string) {
    this._filterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdInput() {
    return this._filterControlId;
  }

  // source_filter_id - computed: false, optional: false, required: true
  private _sourceFilterId?: string; 
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }
  public set sourceFilterId(value: string) {
    this._sourceFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterIdInput() {
    return this._sourceFilterId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cascading_control_configuration - computed: false, optional: true, required: false
  private _cascadingControlConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfigurationOutputReference(this, "cascading_control_configuration");
  public get cascadingControlConfiguration() {
    return this._cascadingControlConfiguration;
  }
  public putCascadingControlConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownCascadingControlConfiguration) {
    this._cascadingControlConfiguration.internalValue = value;
  }
  public resetCascadingControlConfiguration() {
    this._cascadingControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadingControlConfigurationInput() {
    return this._cascadingControlConfiguration.internalValue;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }

  // selectable_values - computed: false, optional: true, required: false
  private _selectableValues = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValuesOutputReference(this, "selectable_values");
  public get selectableValues() {
    return this._selectableValues;
  }
  public putSelectableValues(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdownSelectableValues) {
    this._selectableValues.internalValue = value;
  }
  public resetSelectableValues() {
    this._selectableValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectableValuesInput() {
    return this._selectableValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._dataSetIdentifier = value.dataSetIdentifier;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // data_set_identifier - computed: false, optional: false, required: true
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_sheet_control_id QuicksightTemplate#source_sheet_control_id}
  */
  readonly sourceSheetControlId?: string;
  /**
  * column_to_match block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_to_match QuicksightTemplate#column_to_match}
  */
  readonly columnToMatch: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatch;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_sheet_control_id: cdktf.stringToTerraform(struct!.sourceSheetControlId),
    column_to_match: quicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct!.columnToMatch),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceSheetControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSheetControlId = this._sourceSheetControlId;
    }
    if (this._columnToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnToMatch = this._columnToMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = undefined;
      this._columnToMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = value.sourceSheetControlId;
      this._columnToMatch.internalValue = value.columnToMatch;
    }
  }

  // source_sheet_control_id - computed: false, optional: true, required: false
  private _sourceSheetControlId?: string; 
  public get sourceSheetControlId() {
    return this.getStringAttribute('source_sheet_control_id');
  }
  public set sourceSheetControlId(value: string) {
    this._sourceSheetControlId = value;
  }
  public resetSourceSheetControlId() {
    this._sourceSheetControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSheetControlIdInput() {
    return this._sourceSheetControlId;
  }

  // column_to_match - computed: false, optional: false, required: true
  private _columnToMatch = new QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference(this, "column_to_match");
  public get columnToMatch() {
    return this._columnToMatch;
  }
  public putColumnToMatch(value: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsColumnToMatch) {
    this._columnToMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnToMatchInput() {
    return this._columnToMatch.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsOutputReference {
    return new QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfiguration {
  /**
  * source_controls block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_controls QuicksightTemplate#source_controls}
  */
  readonly sourceControls?: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControls[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_controls: cdktf.listMapper(quicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsToTerraform, true)(struct!.sourceControls),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceControls = this._sourceControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceControls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceControls.internalValue = value.sourceControls;
    }
  }

  // source_controls - computed: false, optional: true, required: false
  private _sourceControls = new QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControlsList(this, "source_controls", false);
  public get sourceControls() {
    return this._sourceControls;
  }
  public putSourceControls(value: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationSourceControls[] | cdktf.IResolvable) {
    this._sourceControls.internalValue = value;
  }
  public resetSourceControls() {
    this._sourceControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlsInput() {
    return this._sourceControls.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptions {
  /**
  * search_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#search_options QuicksightTemplate#search_options}
  */
  readonly searchOptions?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptions;
  /**
  * select_all_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_options: quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptionsToTerraform(struct!.searchOptions),
    select_all_options: quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptionsToTerraform(struct!.selectAllOptions),
    title_options: quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchOptions = this._searchOptions?.internalValue;
    }
    if (this._selectAllOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchOptions.internalValue = undefined;
      this._selectAllOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchOptions.internalValue = value.searchOptions;
      this._selectAllOptions.internalValue = value.selectAllOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // search_options - computed: false, optional: true, required: false
  private _searchOptions = new QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptionsOutputReference(this, "search_options");
  public get searchOptions() {
    return this._searchOptions;
  }
  public putSearchOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSearchOptions) {
    this._searchOptions.internalValue = value;
  }
  public resetSearchOptions() {
    this._searchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchOptionsInput() {
    return this._searchOptions.internalValue;
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions = new QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptionsOutputReference(this, "select_all_options");
  public get selectAllOptions() {
    return this._selectAllOptions;
  }
  public putSelectAllOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsSelectAllOptions) {
    this._selectAllOptions.internalValue = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: string[];
}

export function quicksightTemplateDefinitionSheetsFilterControlsListSelectableValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValuesOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_control_id QuicksightTemplate#filter_control_id}
  */
  readonly filterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_filter_id QuicksightTemplate#source_filter_id}
  */
  readonly sourceFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#type QuicksightTemplate#type}
  */
  readonly type?: string;
  /**
  * cascading_control_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cascading_control_configuration QuicksightTemplate#cascading_control_configuration}
  */
  readonly cascadingControlConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfiguration;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptions;
  /**
  * selectable_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selectable_values QuicksightTemplate#selectable_values}
  */
  readonly selectableValues?: QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValues;
}

export function quicksightTemplateDefinitionSheetsFilterControlsListStructToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsListStructOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_control_id: cdktf.stringToTerraform(struct!.filterControlId),
    source_filter_id: cdktf.stringToTerraform(struct!.sourceFilterId),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    cascading_control_configuration: quicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationToTerraform(struct!.cascadingControlConfiguration),
    display_options: quicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsToTerraform(struct!.displayOptions),
    selectable_values: quicksightTemplateDefinitionSheetsFilterControlsListSelectableValuesToTerraform(struct!.selectableValues),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControlId = this._filterControlId;
    }
    if (this._sourceFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilterId = this._sourceFilterId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cascadingControlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascadingControlConfiguration = this._cascadingControlConfiguration?.internalValue;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    if (this._selectableValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectableValues = this._selectableValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterControlId = undefined;
      this._sourceFilterId = undefined;
      this._title = undefined;
      this._type = undefined;
      this._cascadingControlConfiguration.internalValue = undefined;
      this._displayOptions.internalValue = undefined;
      this._selectableValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterControlId = value.filterControlId;
      this._sourceFilterId = value.sourceFilterId;
      this._title = value.title;
      this._type = value.type;
      this._cascadingControlConfiguration.internalValue = value.cascadingControlConfiguration;
      this._displayOptions.internalValue = value.displayOptions;
      this._selectableValues.internalValue = value.selectableValues;
    }
  }

  // filter_control_id - computed: false, optional: false, required: true
  private _filterControlId?: string; 
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }
  public set filterControlId(value: string) {
    this._filterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdInput() {
    return this._filterControlId;
  }

  // source_filter_id - computed: false, optional: false, required: true
  private _sourceFilterId?: string; 
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }
  public set sourceFilterId(value: string) {
    this._sourceFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterIdInput() {
    return this._sourceFilterId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cascading_control_configuration - computed: false, optional: true, required: false
  private _cascadingControlConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfigurationOutputReference(this, "cascading_control_configuration");
  public get cascadingControlConfiguration() {
    return this._cascadingControlConfiguration;
  }
  public putCascadingControlConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsListCascadingControlConfiguration) {
    this._cascadingControlConfiguration.internalValue = value;
  }
  public resetCascadingControlConfiguration() {
    this._cascadingControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadingControlConfigurationInput() {
    return this._cascadingControlConfiguration.internalValue;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsListDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }

  // selectable_values - computed: false, optional: true, required: false
  private _selectableValues = new QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValuesOutputReference(this, "selectable_values");
  public get selectableValues() {
    return this._selectableValues;
  }
  public putSelectableValues(value: QuicksightTemplateDefinitionSheetsFilterControlsListSelectableValues) {
    this._selectableValues.internalValue = value;
  }
  public resetSelectableValues() {
    this._selectableValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectableValuesInput() {
    return this._selectableValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_format QuicksightTemplate#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_format: cdktf.stringToTerraform(struct!.dateTimeFormat),
    title_options: quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormat = this._dateTimeFormat;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeFormat = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeFormat = value.dateTimeFormat;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // date_time_format - computed: false, optional: true, required: false
  private _dateTimeFormat?: string; 
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }
  public set dateTimeFormat(value: string) {
    this._dateTimeFormat = value;
  }
  public resetDateTimeFormat() {
    this._dateTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatInput() {
    return this._dateTimeFormat;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_control_id QuicksightTemplate#filter_control_id}
  */
  readonly filterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_filter_id QuicksightTemplate#source_filter_id}
  */
  readonly sourceFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_control_id: cdktf.stringToTerraform(struct!.filterControlId),
    source_filter_id: cdktf.stringToTerraform(struct!.sourceFilterId),
    title: cdktf.stringToTerraform(struct!.title),
    display_options: quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControlId = this._filterControlId;
    }
    if (this._sourceFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilterId = this._sourceFilterId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterControlId = undefined;
      this._sourceFilterId = undefined;
      this._title = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterControlId = value.filterControlId;
      this._sourceFilterId = value.sourceFilterId;
      this._title = value.title;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // filter_control_id - computed: false, optional: false, required: true
  private _filterControlId?: string; 
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }
  public set filterControlId(value: string) {
    this._filterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdInput() {
    return this._filterControlId;
  }

  // source_filter_id - computed: false, optional: false, required: true
  private _sourceFilterId?: string; 
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }
  public set sourceFilterId(value: string) {
    this._sourceFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterIdInput() {
    return this._sourceFilterId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptions {
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title_options: quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsSlider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_control_id QuicksightTemplate#filter_control_id}
  */
  readonly filterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum_value QuicksightTemplate#maximum_value}
  */
  readonly maximumValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum_value QuicksightTemplate#minimum_value}
  */
  readonly minimumValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_filter_id QuicksightTemplate#source_filter_id}
  */
  readonly sourceFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_size QuicksightTemplate#step_size}
  */
  readonly stepSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#type QuicksightTemplate#type}
  */
  readonly type?: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsSliderToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsSliderOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsSlider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_control_id: cdktf.stringToTerraform(struct!.filterControlId),
    maximum_value: cdktf.numberToTerraform(struct!.maximumValue),
    minimum_value: cdktf.numberToTerraform(struct!.minimumValue),
    source_filter_id: cdktf.stringToTerraform(struct!.sourceFilterId),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    display_options: quicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsSliderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsSlider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControlId = this._filterControlId;
    }
    if (this._maximumValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumValue = this._maximumValue;
    }
    if (this._minimumValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumValue = this._minimumValue;
    }
    if (this._sourceFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilterId = this._sourceFilterId;
    }
    if (this._stepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepSize = this._stepSize;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsSlider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterControlId = undefined;
      this._maximumValue = undefined;
      this._minimumValue = undefined;
      this._sourceFilterId = undefined;
      this._stepSize = undefined;
      this._title = undefined;
      this._type = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterControlId = value.filterControlId;
      this._maximumValue = value.maximumValue;
      this._minimumValue = value.minimumValue;
      this._sourceFilterId = value.sourceFilterId;
      this._stepSize = value.stepSize;
      this._title = value.title;
      this._type = value.type;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // filter_control_id - computed: false, optional: false, required: true
  private _filterControlId?: string; 
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }
  public set filterControlId(value: string) {
    this._filterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdInput() {
    return this._filterControlId;
  }

  // maximum_value - computed: false, optional: false, required: true
  private _maximumValue?: number; 
  public get maximumValue() {
    return this.getNumberAttribute('maximum_value');
  }
  public set maximumValue(value: number) {
    this._maximumValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValueInput() {
    return this._maximumValue;
  }

  // minimum_value - computed: false, optional: false, required: true
  private _minimumValue?: number; 
  public get minimumValue() {
    return this.getNumberAttribute('minimum_value');
  }
  public set minimumValue(value: number) {
    this._minimumValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumValueInput() {
    return this._minimumValue;
  }

  // source_filter_id - computed: false, optional: false, required: true
  private _sourceFilterId?: string; 
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }
  public set sourceFilterId(value: string) {
    this._sourceFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterIdInput() {
    return this._sourceFilterId;
  }

  // step_size - computed: false, optional: false, required: true
  private _stepSize?: number; 
  public get stepSize() {
    return this.getNumberAttribute('step_size');
  }
  public set stepSize(value: number) {
    this._stepSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepSizeInput() {
    return this._stepSize;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsSliderDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptions {
  /**
  * placeholder_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placeholder_options QuicksightTemplate#placeholder_options}
  */
  readonly placeholderOptions?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder_options: quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptionsToTerraform(struct!.placeholderOptions),
    title_options: quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholderOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholderOptions = this._placeholderOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placeholderOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placeholderOptions.internalValue = value.placeholderOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // placeholder_options - computed: false, optional: true, required: false
  private _placeholderOptions = new QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptionsOutputReference(this, "placeholder_options");
  public get placeholderOptions() {
    return this._placeholderOptions;
  }
  public putPlaceholderOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsPlaceholderOptions) {
    this._placeholderOptions.internalValue = value;
  }
  public resetPlaceholderOptions() {
    this._placeholderOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderOptionsInput() {
    return this._placeholderOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextArea {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#delimiter QuicksightTemplate#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_control_id QuicksightTemplate#filter_control_id}
  */
  readonly filterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_filter_id QuicksightTemplate#source_filter_id}
  */
  readonly sourceFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextAreaToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    filter_control_id: cdktf.stringToTerraform(struct!.filterControlId),
    source_filter_id: cdktf.stringToTerraform(struct!.sourceFilterId),
    title: cdktf.stringToTerraform(struct!.title),
    display_options: quicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextAreaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextArea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._filterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControlId = this._filterControlId;
    }
    if (this._sourceFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilterId = this._sourceFilterId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextArea | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._filterControlId = undefined;
      this._sourceFilterId = undefined;
      this._title = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._filterControlId = value.filterControlId;
      this._sourceFilterId = value.sourceFilterId;
      this._title = value.title;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // filter_control_id - computed: false, optional: false, required: true
  private _filterControlId?: string; 
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }
  public set filterControlId(value: string) {
    this._filterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdInput() {
    return this._filterControlId;
  }

  // source_filter_id - computed: false, optional: false, required: true
  private _sourceFilterId?: string; 
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }
  public set sourceFilterId(value: string) {
    this._sourceFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterIdInput() {
    return this._sourceFilterId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsTextAreaDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_color QuicksightTemplate#font_color}
  */
  readonly fontColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_decoration QuicksightTemplate#font_decoration}
  */
  readonly fontDecoration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_style QuicksightTemplate#font_style}
  */
  readonly fontStyle?: string;
  /**
  * font_size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_size QuicksightTemplate#font_size}
  */
  readonly fontSize?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontDecoration = this._fontDecoration;
    }
    if (this._fontStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontStyle = this._fontStyle;
    }
    if (this._fontSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize?.internalValue;
    }
    if (this._fontWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontWeight = this._fontWeight?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontColor = undefined;
      this._fontDecoration = undefined;
      this._fontStyle = undefined;
      this._fontSize.internalValue = undefined;
      this._fontWeight.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontColor = value.fontColor;
      this._fontDecoration = value.fontDecoration;
      this._fontStyle = value.fontStyle;
      this._fontSize.internalValue = value.fontSize;
      this._fontWeight.internalValue = value.fontWeight;
    }
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_decoration - computed: false, optional: true, required: false
  private _fontDecoration?: string; 
  public get fontDecoration() {
    return this.getStringAttribute('font_decoration');
  }
  public set fontDecoration(value: string) {
    this._fontDecoration = value;
  }
  public resetFontDecoration() {
    this._fontDecoration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontDecorationInput() {
    return this._fontDecoration;
  }

  // font_style - computed: false, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize = new QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize) {
    this._fontSize.internalValue = value;
  }
  public resetFontSize() {
    this._fontSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize.internalValue;
  }

  // font_weight - computed: false, optional: true, required: false
  private _fontWeight = new QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
    this._fontWeight.internalValue = value;
  }
  public resetFontWeight() {
    this._fontWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._fontConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontConfiguration = this._fontConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._visibility = undefined;
      this._fontConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._visibility = value.visibility;
      this._fontConfiguration.internalValue = value.fontConfiguration;
    }
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // font_configuration - computed: false, optional: true, required: false
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration) {
    this._fontConfiguration.internalValue = value;
  }
  public resetFontConfiguration() {
    this._fontConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontConfigurationInput() {
    return this._fontConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptions {
  /**
  * placeholder_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placeholder_options QuicksightTemplate#placeholder_options}
  */
  readonly placeholderOptions?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder_options: quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsToTerraform(struct!.placeholderOptions),
    title_options: quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholderOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholderOptions = this._placeholderOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placeholderOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placeholderOptions.internalValue = value.placeholderOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // placeholder_options - computed: false, optional: true, required: false
  private _placeholderOptions = new QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference(this, "placeholder_options");
  public get placeholderOptions() {
    return this._placeholderOptions;
  }
  public putPlaceholderOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsPlaceholderOptions) {
    this._placeholderOptions.internalValue = value;
  }
  public resetPlaceholderOptions() {
    this._placeholderOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderOptionsInput() {
    return this._placeholderOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControlsTextField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_control_id QuicksightTemplate#filter_control_id}
  */
  readonly filterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_filter_id QuicksightTemplate#source_filter_id}
  */
  readonly sourceFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsFilterControlsTextFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldOutputReference | QuicksightTemplateDefinitionSheetsFilterControlsTextField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_control_id: cdktf.stringToTerraform(struct!.filterControlId),
    source_filter_id: cdktf.stringToTerraform(struct!.sourceFilterId),
    title: cdktf.stringToTerraform(struct!.title),
    display_options: quicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsTextFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControlsTextField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterControlId = this._filterControlId;
    }
    if (this._sourceFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilterId = this._sourceFilterId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControlsTextField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterControlId = undefined;
      this._sourceFilterId = undefined;
      this._title = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterControlId = value.filterControlId;
      this._sourceFilterId = value.sourceFilterId;
      this._title = value.title;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // filter_control_id - computed: false, optional: false, required: true
  private _filterControlId?: string; 
  public get filterControlId() {
    return this.getStringAttribute('filter_control_id');
  }
  public set filterControlId(value: string) {
    this._filterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterControlIdInput() {
    return this._filterControlId;
  }

  // source_filter_id - computed: false, optional: false, required: true
  private _sourceFilterId?: string; 
  public get sourceFilterId() {
    return this.getStringAttribute('source_filter_id');
  }
  public set sourceFilterId(value: string) {
    this._sourceFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterIdInput() {
    return this._sourceFilterId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsFilterControlsTextFieldDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsFilterControls {
  /**
  * date_time_picker block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_picker QuicksightTemplate#date_time_picker}
  */
  readonly dateTimePicker?: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePicker;
  /**
  * dropdown block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#dropdown QuicksightTemplate#dropdown}
  */
  readonly dropdown?: QuicksightTemplateDefinitionSheetsFilterControlsDropdown;
  /**
  * list block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#list QuicksightTemplate#list}
  */
  readonly list?: QuicksightTemplateDefinitionSheetsFilterControlsListStruct;
  /**
  * relative_date_time block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative_date_time QuicksightTemplate#relative_date_time}
  */
  readonly relativeDateTime?: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTime;
  /**
  * slider block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#slider QuicksightTemplate#slider}
  */
  readonly slider?: QuicksightTemplateDefinitionSheetsFilterControlsSlider;
  /**
  * text_area block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_area QuicksightTemplate#text_area}
  */
  readonly textArea?: QuicksightTemplateDefinitionSheetsFilterControlsTextArea;
  /**
  * text_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_field QuicksightTemplate#text_field}
  */
  readonly textField?: QuicksightTemplateDefinitionSheetsFilterControlsTextField;
}

export function quicksightTemplateDefinitionSheetsFilterControlsToTerraform(struct?: QuicksightTemplateDefinitionSheetsFilterControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_picker: quicksightTemplateDefinitionSheetsFilterControlsDateTimePickerToTerraform(struct!.dateTimePicker),
    dropdown: quicksightTemplateDefinitionSheetsFilterControlsDropdownToTerraform(struct!.dropdown),
    list: quicksightTemplateDefinitionSheetsFilterControlsListStructToTerraform(struct!.list),
    relative_date_time: quicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeToTerraform(struct!.relativeDateTime),
    slider: quicksightTemplateDefinitionSheetsFilterControlsSliderToTerraform(struct!.slider),
    text_area: quicksightTemplateDefinitionSheetsFilterControlsTextAreaToTerraform(struct!.textArea),
    text_field: quicksightTemplateDefinitionSheetsFilterControlsTextFieldToTerraform(struct!.textField),
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsFilterControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimePicker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimePicker = this._dateTimePicker?.internalValue;
    }
    if (this._dropdown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropdown = this._dropdown?.internalValue;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    if (this._relativeDateTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeDateTime = this._relativeDateTime?.internalValue;
    }
    if (this._slider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slider = this._slider?.internalValue;
    }
    if (this._textArea?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textArea = this._textArea?.internalValue;
    }
    if (this._textField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsFilterControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateTimePicker.internalValue = undefined;
      this._dropdown.internalValue = undefined;
      this._list.internalValue = undefined;
      this._relativeDateTime.internalValue = undefined;
      this._slider.internalValue = undefined;
      this._textArea.internalValue = undefined;
      this._textField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateTimePicker.internalValue = value.dateTimePicker;
      this._dropdown.internalValue = value.dropdown;
      this._list.internalValue = value.list;
      this._relativeDateTime.internalValue = value.relativeDateTime;
      this._slider.internalValue = value.slider;
      this._textArea.internalValue = value.textArea;
      this._textField.internalValue = value.textField;
    }
  }

  // date_time_picker - computed: false, optional: true, required: false
  private _dateTimePicker = new QuicksightTemplateDefinitionSheetsFilterControlsDateTimePickerOutputReference(this, "date_time_picker");
  public get dateTimePicker() {
    return this._dateTimePicker;
  }
  public putDateTimePicker(value: QuicksightTemplateDefinitionSheetsFilterControlsDateTimePicker) {
    this._dateTimePicker.internalValue = value;
  }
  public resetDateTimePicker() {
    this._dateTimePicker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimePickerInput() {
    return this._dateTimePicker.internalValue;
  }

  // dropdown - computed: false, optional: true, required: false
  private _dropdown = new QuicksightTemplateDefinitionSheetsFilterControlsDropdownOutputReference(this, "dropdown");
  public get dropdown() {
    return this._dropdown;
  }
  public putDropdown(value: QuicksightTemplateDefinitionSheetsFilterControlsDropdown) {
    this._dropdown.internalValue = value;
  }
  public resetDropdown() {
    this._dropdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropdownInput() {
    return this._dropdown.internalValue;
  }

  // list - computed: false, optional: true, required: false
  private _list = new QuicksightTemplateDefinitionSheetsFilterControlsListStructOutputReference(this, "list");
  public get list() {
    return this._list;
  }
  public putList(value: QuicksightTemplateDefinitionSheetsFilterControlsListStruct) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // relative_date_time - computed: false, optional: true, required: false
  private _relativeDateTime = new QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTimeOutputReference(this, "relative_date_time");
  public get relativeDateTime() {
    return this._relativeDateTime;
  }
  public putRelativeDateTime(value: QuicksightTemplateDefinitionSheetsFilterControlsRelativeDateTime) {
    this._relativeDateTime.internalValue = value;
  }
  public resetRelativeDateTime() {
    this._relativeDateTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeDateTimeInput() {
    return this._relativeDateTime.internalValue;
  }

  // slider - computed: false, optional: true, required: false
  private _slider = new QuicksightTemplateDefinitionSheetsFilterControlsSliderOutputReference(this, "slider");
  public get slider() {
    return this._slider;
  }
  public putSlider(value: QuicksightTemplateDefinitionSheetsFilterControlsSlider) {
    this._slider.internalValue = value;
  }
  public resetSlider() {
    this._slider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliderInput() {
    return this._slider.internalValue;
  }

  // text_area - computed: false, optional: true, required: false
  private _textArea = new QuicksightTemplateDefinitionSheetsFilterControlsTextAreaOutputReference(this, "text_area");
  public get textArea() {
    return this._textArea;
  }
  public putTextArea(value: QuicksightTemplateDefinitionSheetsFilterControlsTextArea) {
    this._textArea.internalValue = value;
  }
  public resetTextArea() {
    this._textArea.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAreaInput() {
    return this._textArea.internalValue;
  }

  // text_field - computed: false, optional: true, required: false
  private _textField = new QuicksightTemplateDefinitionSheetsFilterControlsTextFieldOutputReference(this, "text_field");
  public get textField() {
    return this._textField;
  }
  public putTextField(value: QuicksightTemplateDefinitionSheetsFilterControlsTextField) {
    this._textField.internalValue = value;
  }
  public resetTextField() {
    this._textField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsFilterControlsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsFilterControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsFilterControlsOutputReference {
    return new QuicksightTemplateDefinitionSheetsFilterControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#optimized_view_port_width QuicksightTemplate#optimized_view_port_width}
  */
  readonly optimizedViewPortWidth: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimized_view_port_width: cdktf.stringToTerraform(struct!.optimizedViewPortWidth),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedViewPortWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedViewPortWidth = this._optimizedViewPortWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizedViewPortWidth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizedViewPortWidth = value.optimizedViewPortWidth;
    }
  }

  // optimized_view_port_width - computed: false, optional: false, required: true
  private _optimizedViewPortWidth?: string; 
  public get optimizedViewPortWidth() {
    return this.getStringAttribute('optimized_view_port_width');
  }
  public set optimizedViewPortWidth(value: string) {
    this._optimizedViewPortWidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedViewPortWidthInput() {
    return this._optimizedViewPortWidth;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions {
  /**
  * screen_canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#screen_canvas_size_options QuicksightTemplate#screen_canvas_size_options}
  */
  readonly screenCanvasSizeOptions?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    screen_canvas_size_options: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct!.screenCanvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._screenCanvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenCanvasSizeOptions = this._screenCanvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._screenCanvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._screenCanvasSizeOptions.internalValue = value.screenCanvasSizeOptions;
    }
  }

  // screen_canvas_size_options - computed: false, optional: true, required: false
  private _screenCanvasSizeOptions = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference(this, "screen_canvas_size_options");
  public get screenCanvasSizeOptions() {
    return this._screenCanvasSizeOptions;
  }
  public putScreenCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsScreenCanvasSizeOptions) {
    this._screenCanvasSizeOptions.internalValue = value;
  }
  public resetScreenCanvasSizeOptions() {
    this._screenCanvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenCanvasSizeOptionsInput() {
    return this._screenCanvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * configuration_overrides block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#configuration_overrides QuicksightTemplate#configuration_overrides}
  */
  readonly configurationOverrides: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    configuration_overrides: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct!.configurationOverrides),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._configurationOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationOverrides = this._configurationOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._configurationOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._configurationOverrides.internalValue = value.configurationOverrides;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // configuration_overrides - computed: false, optional: false, required: true
  private _configurationOverrides = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this, "configuration_overrides");
  public get configurationOverrides() {
    return this._configurationOverrides;
  }
  public putConfigurationOverrides(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesConfigurationOverrides) {
    this._configurationOverrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverridesInput() {
    return this._configurationOverrides.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_id QuicksightTemplate#element_id}
  */
  readonly elementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_type QuicksightTemplate#element_type}
  */
  readonly elementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#width QuicksightTemplate#width}
  */
  readonly width: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_location QuicksightTemplate#x_axis_location}
  */
  readonly xAxisLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#y_axis_location QuicksightTemplate#y_axis_location}
  */
  readonly yAxisLocation: string;
  /**
  * background_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_style QuicksightTemplate#background_style}
  */
  readonly backgroundStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle;
  /**
  * border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_style QuicksightTemplate#border_style}
  */
  readonly borderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle;
  /**
  * loading_animation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#loading_animation QuicksightTemplate#loading_animation}
  */
  readonly loadingAnimation?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation;
  /**
  * rendering_rules block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rendering_rules QuicksightTemplate#rendering_rules}
  */
  readonly renderingRules?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable;
  /**
  * selected_border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_border_style QuicksightTemplate#selected_border_style}
  */
  readonly selectedBorderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
    element_type: cdktf.stringToTerraform(struct!.elementType),
    height: cdktf.stringToTerraform(struct!.height),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    width: cdktf.stringToTerraform(struct!.width),
    x_axis_location: cdktf.stringToTerraform(struct!.xAxisLocation),
    y_axis_location: cdktf.stringToTerraform(struct!.yAxisLocation),
    background_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleToTerraform(struct!.backgroundStyle),
    border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleToTerraform(struct!.borderStyle),
    loading_animation: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationToTerraform(struct!.loadingAnimation),
    rendering_rules: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesToTerraform, true)(struct!.renderingRules),
    selected_border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct!.selectedBorderStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._elementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxisLocation = this._xAxisLocation;
    }
    if (this._yAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLocation = this._yAxisLocation;
    }
    if (this._backgroundStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundStyle = this._backgroundStyle?.internalValue;
    }
    if (this._borderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderStyle = this._borderStyle?.internalValue;
    }
    if (this._loadingAnimation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadingAnimation = this._loadingAnimation?.internalValue;
    }
    if (this._renderingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderingRules = this._renderingRules?.internalValue;
    }
    if (this._selectedBorderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedBorderStyle = this._selectedBorderStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
      this._elementType = undefined;
      this._height = undefined;
      this._visibility = undefined;
      this._width = undefined;
      this._xAxisLocation = undefined;
      this._yAxisLocation = undefined;
      this._backgroundStyle.internalValue = undefined;
      this._borderStyle.internalValue = undefined;
      this._loadingAnimation.internalValue = undefined;
      this._renderingRules.internalValue = undefined;
      this._selectedBorderStyle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
      this._elementType = value.elementType;
      this._height = value.height;
      this._visibility = value.visibility;
      this._width = value.width;
      this._xAxisLocation = value.xAxisLocation;
      this._yAxisLocation = value.yAxisLocation;
      this._backgroundStyle.internalValue = value.backgroundStyle;
      this._borderStyle.internalValue = value.borderStyle;
      this._loadingAnimation.internalValue = value.loadingAnimation;
      this._renderingRules.internalValue = value.renderingRules;
      this._selectedBorderStyle.internalValue = value.selectedBorderStyle;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // element_type - computed: false, optional: false, required: true
  private _elementType?: string; 
  public get elementType() {
    return this.getStringAttribute('element_type');
  }
  public set elementType(value: string) {
    this._elementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType;
  }

  // height - computed: false, optional: false, required: true
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // width - computed: false, optional: false, required: true
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_axis_location - computed: false, optional: false, required: true
  private _xAxisLocation?: string; 
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }
  public set xAxisLocation(value: string) {
    this._xAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxisLocationInput() {
    return this._xAxisLocation;
  }

  // y_axis_location - computed: false, optional: false, required: true
  private _yAxisLocation?: string; 
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
  public set yAxisLocation(value: string) {
    this._yAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLocationInput() {
    return this._yAxisLocation;
  }

  // background_style - computed: false, optional: true, required: false
  private _backgroundStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyleOutputReference(this, "background_style");
  public get backgroundStyle() {
    return this._backgroundStyle;
  }
  public putBackgroundStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBackgroundStyle) {
    this._backgroundStyle.internalValue = value;
  }
  public resetBackgroundStyle() {
    this._backgroundStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundStyleInput() {
    return this._backgroundStyle.internalValue;
  }

  // border_style - computed: false, optional: true, required: false
  private _borderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyleOutputReference(this, "border_style");
  public get borderStyle() {
    return this._borderStyle;
  }
  public putBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsBorderStyle) {
    this._borderStyle.internalValue = value;
  }
  public resetBorderStyle() {
    this._borderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderStyleInput() {
    return this._borderStyle.internalValue;
  }

  // loading_animation - computed: false, optional: true, required: false
  private _loadingAnimation = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimationOutputReference(this, "loading_animation");
  public get loadingAnimation() {
    return this._loadingAnimation;
  }
  public putLoadingAnimation(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsLoadingAnimation) {
    this._loadingAnimation.internalValue = value;
  }
  public resetLoadingAnimation() {
    this._loadingAnimation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadingAnimationInput() {
    return this._loadingAnimation.internalValue;
  }

  // rendering_rules - computed: false, optional: true, required: false
  private _renderingRules = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }
  public putRenderingRules(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable) {
    this._renderingRules.internalValue = value;
  }
  public resetRenderingRules() {
    this._renderingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderingRulesInput() {
    return this._renderingRules.internalValue;
  }

  // selected_border_style - computed: false, optional: true, required: false
  private _selectedBorderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyleOutputReference(this, "selected_border_style");
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }
  public putSelectedBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsSelectedBorderStyle) {
    this._selectedBorderStyle.internalValue = value;
  }
  public resetSelectedBorderStyle() {
    this._selectedBorderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedBorderStyleInput() {
    return this._selectedBorderStyle.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayout {
  /**
  * canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#canvas_size_options QuicksightTemplate#canvas_size_options}
  */
  readonly canvasSizeOptions?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions;
  /**
  * elements block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#elements QuicksightTemplate#elements}
  */
  readonly elements: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canvas_size_options: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsToTerraform(struct!.canvasSizeOptions),
    elements: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsToTerraform, true)(struct!.elements),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasSizeOptions = this._canvasSizeOptions?.internalValue;
    }
    if (this._elements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canvasSizeOptions.internalValue = undefined;
      this._elements.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canvasSizeOptions.internalValue = value.canvasSizeOptions;
      this._elements.internalValue = value.elements;
    }
  }

  // canvas_size_options - computed: false, optional: true, required: false
  private _canvasSizeOptions = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptionsOutputReference(this, "canvas_size_options");
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }
  public putCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutCanvasSizeOptions) {
    this._canvasSizeOptions.internalValue = value;
  }
  public resetCanvasSizeOptions() {
    this._canvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasSizeOptionsInput() {
    return this._canvasSizeOptions.internalValue;
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#optimized_view_port_width QuicksightTemplate#optimized_view_port_width}
  */
  readonly optimizedViewPortWidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#resize_option QuicksightTemplate#resize_option}
  */
  readonly resizeOption: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimized_view_port_width: cdktf.stringToTerraform(struct!.optimizedViewPortWidth),
    resize_option: cdktf.stringToTerraform(struct!.resizeOption),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedViewPortWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedViewPortWidth = this._optimizedViewPortWidth;
    }
    if (this._resizeOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeOption = this._resizeOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizedViewPortWidth = undefined;
      this._resizeOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizedViewPortWidth = value.optimizedViewPortWidth;
      this._resizeOption = value.resizeOption;
    }
  }

  // optimized_view_port_width - computed: false, optional: false, required: true
  private _optimizedViewPortWidth?: string; 
  public get optimizedViewPortWidth() {
    return this.getStringAttribute('optimized_view_port_width');
  }
  public set optimizedViewPortWidth(value: string) {
    this._optimizedViewPortWidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedViewPortWidthInput() {
    return this._optimizedViewPortWidth;
  }

  // resize_option - computed: false, optional: false, required: true
  private _resizeOption?: string; 
  public get resizeOption() {
    return this.getStringAttribute('resize_option');
  }
  public set resizeOption(value: string) {
    this._resizeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeOptionInput() {
    return this._resizeOption;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions {
  /**
  * screen_canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#screen_canvas_size_options QuicksightTemplate#screen_canvas_size_options}
  */
  readonly screenCanvasSizeOptions?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    screen_canvas_size_options: quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct!.screenCanvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._screenCanvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenCanvasSizeOptions = this._screenCanvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._screenCanvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._screenCanvasSizeOptions.internalValue = value.screenCanvasSizeOptions;
    }
  }

  // screen_canvas_size_options - computed: false, optional: true, required: false
  private _screenCanvasSizeOptions = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference(this, "screen_canvas_size_options");
  public get screenCanvasSizeOptions() {
    return this._screenCanvasSizeOptions;
  }
  public putScreenCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions) {
    this._screenCanvasSizeOptions.internalValue = value;
  }
  public resetScreenCanvasSizeOptions() {
    this._screenCanvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenCanvasSizeOptionsInput() {
    return this._screenCanvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_index QuicksightTemplate#column_index}
  */
  readonly columnIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_span QuicksightTemplate#column_span}
  */
  readonly columnSpan: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_id QuicksightTemplate#element_id}
  */
  readonly elementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_type QuicksightTemplate#element_type}
  */
  readonly elementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_index QuicksightTemplate#row_index}
  */
  readonly rowIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_span QuicksightTemplate#row_span}
  */
  readonly rowSpan: number;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElementsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_index: cdktf.numberToTerraform(struct!.columnIndex),
    column_span: cdktf.numberToTerraform(struct!.columnSpan),
    element_id: cdktf.stringToTerraform(struct!.elementId),
    element_type: cdktf.stringToTerraform(struct!.elementType),
    row_index: cdktf.numberToTerraform(struct!.rowIndex),
    row_span: cdktf.numberToTerraform(struct!.rowSpan),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnIndex = this._columnIndex;
    }
    if (this._columnSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSpan = this._columnSpan;
    }
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._elementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType;
    }
    if (this._rowIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowIndex = this._rowIndex;
    }
    if (this._rowSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowSpan = this._rowSpan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnIndex = undefined;
      this._columnSpan = undefined;
      this._elementId = undefined;
      this._elementType = undefined;
      this._rowIndex = undefined;
      this._rowSpan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnIndex = value.columnIndex;
      this._columnSpan = value.columnSpan;
      this._elementId = value.elementId;
      this._elementType = value.elementType;
      this._rowIndex = value.rowIndex;
      this._rowSpan = value.rowSpan;
    }
  }

  // column_index - computed: false, optional: true, required: false
  private _columnIndex?: number; 
  public get columnIndex() {
    return this.getNumberAttribute('column_index');
  }
  public set columnIndex(value: number) {
    this._columnIndex = value;
  }
  public resetColumnIndex() {
    this._columnIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIndexInput() {
    return this._columnIndex;
  }

  // column_span - computed: false, optional: false, required: true
  private _columnSpan?: number; 
  public get columnSpan() {
    return this.getNumberAttribute('column_span');
  }
  public set columnSpan(value: number) {
    this._columnSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSpanInput() {
    return this._columnSpan;
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // element_type - computed: false, optional: false, required: true
  private _elementType?: string; 
  public get elementType() {
    return this.getStringAttribute('element_type');
  }
  public set elementType(value: string) {
    this._elementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType;
  }

  // row_index - computed: false, optional: true, required: false
  private _rowIndex?: number; 
  public get rowIndex() {
    return this.getNumberAttribute('row_index');
  }
  public set rowIndex(value: number) {
    this._rowIndex = value;
  }
  public resetRowIndex() {
    this._rowIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIndexInput() {
    return this._rowIndex;
  }

  // row_span - computed: false, optional: false, required: true
  private _rowSpan?: number; 
  public get rowSpan() {
    return this.getNumberAttribute('row_span');
  }
  public set rowSpan(value: number) {
    this._rowSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowSpanInput() {
    return this._rowSpan;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElementsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElements[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElementsOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayout {
  /**
  * canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#canvas_size_options QuicksightTemplate#canvas_size_options}
  */
  readonly canvasSizeOptions?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions;
  /**
  * elements block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#elements QuicksightTemplate#elements}
  */
  readonly elements: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElements[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canvas_size_options: quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsToTerraform(struct!.canvasSizeOptions),
    elements: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElementsToTerraform, true)(struct!.elements),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasSizeOptions = this._canvasSizeOptions?.internalValue;
    }
    if (this._elements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canvasSizeOptions.internalValue = undefined;
      this._elements.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canvasSizeOptions.internalValue = value.canvasSizeOptions;
      this._elements.internalValue = value.elements;
    }
  }

  // canvas_size_options - computed: false, optional: true, required: false
  private _canvasSizeOptions = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference(this, "canvas_size_options");
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }
  public putCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutCanvasSizeOptions) {
    this._canvasSizeOptions.internalValue = value;
  }
  public resetCanvasSizeOptions() {
    this._canvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasSizeOptionsInput() {
    return this._canvasSizeOptions.internalValue;
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * configuration_overrides block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#configuration_overrides QuicksightTemplate#configuration_overrides}
  */
  readonly configurationOverrides: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    configuration_overrides: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct!.configurationOverrides),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._configurationOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationOverrides = this._configurationOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._configurationOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._configurationOverrides.internalValue = value.configurationOverrides;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // configuration_overrides - computed: false, optional: false, required: true
  private _configurationOverrides = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this, "configuration_overrides");
  public get configurationOverrides() {
    return this._configurationOverrides;
  }
  public putConfigurationOverrides(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides) {
    this._configurationOverrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverridesInput() {
    return this._configurationOverrides.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_id QuicksightTemplate#element_id}
  */
  readonly elementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_type QuicksightTemplate#element_type}
  */
  readonly elementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#width QuicksightTemplate#width}
  */
  readonly width: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_location QuicksightTemplate#x_axis_location}
  */
  readonly xAxisLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#y_axis_location QuicksightTemplate#y_axis_location}
  */
  readonly yAxisLocation: string;
  /**
  * background_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_style QuicksightTemplate#background_style}
  */
  readonly backgroundStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle;
  /**
  * border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_style QuicksightTemplate#border_style}
  */
  readonly borderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle;
  /**
  * loading_animation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#loading_animation QuicksightTemplate#loading_animation}
  */
  readonly loadingAnimation?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation;
  /**
  * rendering_rules block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rendering_rules QuicksightTemplate#rendering_rules}
  */
  readonly renderingRules?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable;
  /**
  * selected_border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_border_style QuicksightTemplate#selected_border_style}
  */
  readonly selectedBorderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
    element_type: cdktf.stringToTerraform(struct!.elementType),
    height: cdktf.stringToTerraform(struct!.height),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    width: cdktf.stringToTerraform(struct!.width),
    x_axis_location: cdktf.stringToTerraform(struct!.xAxisLocation),
    y_axis_location: cdktf.stringToTerraform(struct!.yAxisLocation),
    background_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct!.backgroundStyle),
    border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct!.borderStyle),
    loading_animation: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct!.loadingAnimation),
    rendering_rules: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesToTerraform, true)(struct!.renderingRules),
    selected_border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct!.selectedBorderStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._elementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxisLocation = this._xAxisLocation;
    }
    if (this._yAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLocation = this._yAxisLocation;
    }
    if (this._backgroundStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundStyle = this._backgroundStyle?.internalValue;
    }
    if (this._borderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderStyle = this._borderStyle?.internalValue;
    }
    if (this._loadingAnimation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadingAnimation = this._loadingAnimation?.internalValue;
    }
    if (this._renderingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderingRules = this._renderingRules?.internalValue;
    }
    if (this._selectedBorderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedBorderStyle = this._selectedBorderStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
      this._elementType = undefined;
      this._height = undefined;
      this._visibility = undefined;
      this._width = undefined;
      this._xAxisLocation = undefined;
      this._yAxisLocation = undefined;
      this._backgroundStyle.internalValue = undefined;
      this._borderStyle.internalValue = undefined;
      this._loadingAnimation.internalValue = undefined;
      this._renderingRules.internalValue = undefined;
      this._selectedBorderStyle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
      this._elementType = value.elementType;
      this._height = value.height;
      this._visibility = value.visibility;
      this._width = value.width;
      this._xAxisLocation = value.xAxisLocation;
      this._yAxisLocation = value.yAxisLocation;
      this._backgroundStyle.internalValue = value.backgroundStyle;
      this._borderStyle.internalValue = value.borderStyle;
      this._loadingAnimation.internalValue = value.loadingAnimation;
      this._renderingRules.internalValue = value.renderingRules;
      this._selectedBorderStyle.internalValue = value.selectedBorderStyle;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // element_type - computed: false, optional: false, required: true
  private _elementType?: string; 
  public get elementType() {
    return this.getStringAttribute('element_type');
  }
  public set elementType(value: string) {
    this._elementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType;
  }

  // height - computed: false, optional: false, required: true
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // width - computed: false, optional: false, required: true
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_axis_location - computed: false, optional: false, required: true
  private _xAxisLocation?: string; 
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }
  public set xAxisLocation(value: string) {
    this._xAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxisLocationInput() {
    return this._xAxisLocation;
  }

  // y_axis_location - computed: false, optional: false, required: true
  private _yAxisLocation?: string; 
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
  public set yAxisLocation(value: string) {
    this._yAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLocationInput() {
    return this._yAxisLocation;
  }

  // background_style - computed: false, optional: true, required: false
  private _backgroundStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyleOutputReference(this, "background_style");
  public get backgroundStyle() {
    return this._backgroundStyle;
  }
  public putBackgroundStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBackgroundStyle) {
    this._backgroundStyle.internalValue = value;
  }
  public resetBackgroundStyle() {
    this._backgroundStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundStyleInput() {
    return this._backgroundStyle.internalValue;
  }

  // border_style - computed: false, optional: true, required: false
  private _borderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyleOutputReference(this, "border_style");
  public get borderStyle() {
    return this._borderStyle;
  }
  public putBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsBorderStyle) {
    this._borderStyle.internalValue = value;
  }
  public resetBorderStyle() {
    this._borderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderStyleInput() {
    return this._borderStyle.internalValue;
  }

  // loading_animation - computed: false, optional: true, required: false
  private _loadingAnimation = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimationOutputReference(this, "loading_animation");
  public get loadingAnimation() {
    return this._loadingAnimation;
  }
  public putLoadingAnimation(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsLoadingAnimation) {
    this._loadingAnimation.internalValue = value;
  }
  public resetLoadingAnimation() {
    this._loadingAnimation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadingAnimationInput() {
    return this._loadingAnimation.internalValue;
  }

  // rendering_rules - computed: false, optional: true, required: false
  private _renderingRules = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }
  public putRenderingRules(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable) {
    this._renderingRules.internalValue = value;
  }
  public resetRenderingRules() {
    this._renderingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderingRulesInput() {
    return this._renderingRules.internalValue;
  }

  // selected_border_style - computed: false, optional: true, required: false
  private _selectedBorderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference(this, "selected_border_style");
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }
  public putSelectedBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsSelectedBorderStyle) {
    this._selectedBorderStyle.internalValue = value;
  }
  public resetSelectedBorderStyle() {
    this._selectedBorderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedBorderStyleInput() {
    return this._selectedBorderStyle.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout {
  /**
  * elements block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#elements QuicksightTemplate#elements}
  */
  readonly elements: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsToTerraform, true)(struct!.elements),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elements.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elements.internalValue = value.elements;
    }
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout {
  /**
  * free_form_layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#free_form_layout QuicksightTemplate#free_form_layout}
  */
  readonly freeFormLayout: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_form_layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutToTerraform(struct!.freeFormLayout),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeFormLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFormLayout = this._freeFormLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeFormLayout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeFormLayout.internalValue = value.freeFormLayout;
    }
  }

  // free_form_layout - computed: false, optional: false, required: true
  private _freeFormLayout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayoutOutputReference(this, "free_form_layout");
  public get freeFormLayout() {
    return this._freeFormLayout;
  }
  public putFreeFormLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutFreeFormLayout) {
    this._freeFormLayout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFormLayoutInput() {
    return this._freeFormLayout.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent {
  /**
  * layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#layout QuicksightTemplate#layout}
  */
  readonly layout?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutToTerraform(struct!.layout),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._layout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._layout.internalValue = value.layout;
    }
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration {
  /**
  * after block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#after QuicksightTemplate#after}
  */
  readonly after?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterToTerraform(struct!.after),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._after.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._after.internalValue = value.after;
    }
  }

  // after - computed: false, optional: true, required: false
  private _after = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktf.stringToTerraform(struct!.bottom),
    left: cdktf.stringToTerraform(struct!.left),
    right: cdktf.stringToTerraform(struct!.right),
    top: cdktf.stringToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom = undefined;
      this._left = undefined;
      this._right = undefined;
      this._top = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom = value.bottom;
      this._left = value.left;
      this._right = value.right;
      this._top = value.top;
    }
  }

  // bottom - computed: false, optional: true, required: false
  private _bottom?: string; 
  public get bottom() {
    return this.getStringAttribute('bottom');
  }
  public set bottom(value: string) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
  }

  // left - computed: false, optional: true, required: false
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // right - computed: false, optional: true, required: false
  private _right?: string; 
  public get right() {
    return this.getStringAttribute('right');
  }
  public set right(value: string) {
    this._right = value;
  }
  public resetRight() {
    this._right = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height?: string;
  /**
  * padding block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#padding QuicksightTemplate#padding}
  */
  readonly padding?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    padding: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingToTerraform(struct!.padding),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._padding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._padding.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._padding.internalValue = value.padding;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // padding - computed: false, optional: true, required: false
  private _padding = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePaddingOutputReference(this, "padding");
  public get padding() {
    return this._padding;
  }
  public putPadding(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStylePadding) {
    this._padding.internalValue = value;
  }
  public resetPadding() {
    this._padding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#section_id QuicksightTemplate#section_id}
  */
  readonly sectionId: string;
  /**
  * content block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#content QuicksightTemplate#content}
  */
  readonly content: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent;
  /**
  * page_break_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#page_break_configuration QuicksightTemplate#page_break_configuration}
  */
  readonly pageBreakConfiguration?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_id: cdktf.stringToTerraform(struct!.sectionId),
    content: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentToTerraform(struct!.content),
    page_break_configuration: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationToTerraform(struct!.pageBreakConfiguration),
    style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleToTerraform(struct!.style),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionId = this._sectionId;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._pageBreakConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageBreakConfiguration = this._pageBreakConfiguration?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sectionId = undefined;
      this._content.internalValue = undefined;
      this._pageBreakConfiguration.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sectionId = value.sectionId;
      this._content.internalValue = value.content;
      this._pageBreakConfiguration.internalValue = value.pageBreakConfiguration;
      this._style.internalValue = value.style;
    }
  }

  // section_id - computed: false, optional: false, required: true
  private _sectionId?: string; 
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }
  public set sectionId(value: string) {
    this._sectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionIdInput() {
    return this._sectionId;
  }

  // content - computed: false, optional: false, required: true
  private _content = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // page_break_configuration - computed: false, optional: true, required: false
  private _pageBreakConfiguration = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfigurationOutputReference(this, "page_break_configuration");
  public get pageBreakConfiguration() {
    return this._pageBreakConfiguration;
  }
  public putPageBreakConfiguration(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsPageBreakConfiguration) {
    this._pageBreakConfiguration.internalValue = value;
  }
  public resetPageBreakConfiguration() {
    this._pageBreakConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBreakConfigurationInput() {
    return this._pageBreakConfiguration.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktf.stringToTerraform(struct!.bottom),
    left: cdktf.stringToTerraform(struct!.left),
    right: cdktf.stringToTerraform(struct!.right),
    top: cdktf.stringToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom = undefined;
      this._left = undefined;
      this._right = undefined;
      this._top = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom = value.bottom;
      this._left = value.left;
      this._right = value.right;
      this._top = value.top;
    }
  }

  // bottom - computed: false, optional: true, required: false
  private _bottom?: string; 
  public get bottom() {
    return this.getStringAttribute('bottom');
  }
  public set bottom(value: string) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
  }

  // left - computed: false, optional: true, required: false
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // right - computed: false, optional: true, required: false
  private _right?: string; 
  public get right() {
    return this.getStringAttribute('right');
  }
  public set right(value: string) {
    this._right = value;
  }
  public resetRight() {
    this._right = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_orientation QuicksightTemplate#paper_orientation}
  */
  readonly paperOrientation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_size QuicksightTemplate#paper_size}
  */
  readonly paperSize?: string;
  /**
  * paper_margin block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_margin QuicksightTemplate#paper_margin}
  */
  readonly paperMargin?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paper_orientation: cdktf.stringToTerraform(struct!.paperOrientation),
    paper_size: cdktf.stringToTerraform(struct!.paperSize),
    paper_margin: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginToTerraform(struct!.paperMargin),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paperOrientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperOrientation = this._paperOrientation;
    }
    if (this._paperSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperSize = this._paperSize;
    }
    if (this._paperMargin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperMargin = this._paperMargin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paperOrientation = undefined;
      this._paperSize = undefined;
      this._paperMargin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paperOrientation = value.paperOrientation;
      this._paperSize = value.paperSize;
      this._paperMargin.internalValue = value.paperMargin;
    }
  }

  // paper_orientation - computed: false, optional: true, required: false
  private _paperOrientation?: string; 
  public get paperOrientation() {
    return this.getStringAttribute('paper_orientation');
  }
  public set paperOrientation(value: string) {
    this._paperOrientation = value;
  }
  public resetPaperOrientation() {
    this._paperOrientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperOrientationInput() {
    return this._paperOrientation;
  }

  // paper_size - computed: false, optional: true, required: false
  private _paperSize?: string; 
  public get paperSize() {
    return this.getStringAttribute('paper_size');
  }
  public set paperSize(value: string) {
    this._paperSize = value;
  }
  public resetPaperSize() {
    this._paperSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperSizeInput() {
    return this._paperSize;
  }

  // paper_margin - computed: false, optional: true, required: false
  private _paperMargin = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference(this, "paper_margin");
  public get paperMargin() {
    return this._paperMargin;
  }
  public putPaperMargin(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin) {
    this._paperMargin.internalValue = value;
  }
  public resetPaperMargin() {
    this._paperMargin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperMarginInput() {
    return this._paperMargin.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions {
  /**
  * paper_canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_canvas_size_options QuicksightTemplate#paper_canvas_size_options}
  */
  readonly paperCanvasSizeOptions?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paper_canvas_size_options: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsToTerraform(struct!.paperCanvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paperCanvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperCanvasSizeOptions = this._paperCanvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paperCanvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paperCanvasSizeOptions.internalValue = value.paperCanvasSizeOptions;
    }
  }

  // paper_canvas_size_options - computed: false, optional: true, required: false
  private _paperCanvasSizeOptions = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference(this, "paper_canvas_size_options");
  public get paperCanvasSizeOptions() {
    return this._paperCanvasSizeOptions;
  }
  public putPaperCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsPaperCanvasSizeOptions) {
    this._paperCanvasSizeOptions.internalValue = value;
  }
  public resetPaperCanvasSizeOptions() {
    this._paperCanvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperCanvasSizeOptionsInput() {
    return this._paperCanvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibility = value.visibility;
    }
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * configuration_overrides block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#configuration_overrides QuicksightTemplate#configuration_overrides}
  */
  readonly configurationOverrides: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    configuration_overrides: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct!.configurationOverrides),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._configurationOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationOverrides = this._configurationOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._configurationOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._configurationOverrides.internalValue = value.configurationOverrides;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // configuration_overrides - computed: false, optional: false, required: true
  private _configurationOverrides = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this, "configuration_overrides");
  public get configurationOverrides() {
    return this._configurationOverrides;
  }
  public putConfigurationOverrides(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides) {
    this._configurationOverrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverridesInput() {
    return this._configurationOverrides.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_id QuicksightTemplate#element_id}
  */
  readonly elementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_type QuicksightTemplate#element_type}
  */
  readonly elementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#width QuicksightTemplate#width}
  */
  readonly width: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_location QuicksightTemplate#x_axis_location}
  */
  readonly xAxisLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#y_axis_location QuicksightTemplate#y_axis_location}
  */
  readonly yAxisLocation: string;
  /**
  * background_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_style QuicksightTemplate#background_style}
  */
  readonly backgroundStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle;
  /**
  * border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_style QuicksightTemplate#border_style}
  */
  readonly borderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle;
  /**
  * loading_animation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#loading_animation QuicksightTemplate#loading_animation}
  */
  readonly loadingAnimation?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation;
  /**
  * rendering_rules block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rendering_rules QuicksightTemplate#rendering_rules}
  */
  readonly renderingRules?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable;
  /**
  * selected_border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_border_style QuicksightTemplate#selected_border_style}
  */
  readonly selectedBorderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
    element_type: cdktf.stringToTerraform(struct!.elementType),
    height: cdktf.stringToTerraform(struct!.height),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    width: cdktf.stringToTerraform(struct!.width),
    x_axis_location: cdktf.stringToTerraform(struct!.xAxisLocation),
    y_axis_location: cdktf.stringToTerraform(struct!.yAxisLocation),
    background_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct!.backgroundStyle),
    border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct!.borderStyle),
    loading_animation: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct!.loadingAnimation),
    rendering_rules: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesToTerraform, true)(struct!.renderingRules),
    selected_border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct!.selectedBorderStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._elementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxisLocation = this._xAxisLocation;
    }
    if (this._yAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLocation = this._yAxisLocation;
    }
    if (this._backgroundStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundStyle = this._backgroundStyle?.internalValue;
    }
    if (this._borderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderStyle = this._borderStyle?.internalValue;
    }
    if (this._loadingAnimation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadingAnimation = this._loadingAnimation?.internalValue;
    }
    if (this._renderingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderingRules = this._renderingRules?.internalValue;
    }
    if (this._selectedBorderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedBorderStyle = this._selectedBorderStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
      this._elementType = undefined;
      this._height = undefined;
      this._visibility = undefined;
      this._width = undefined;
      this._xAxisLocation = undefined;
      this._yAxisLocation = undefined;
      this._backgroundStyle.internalValue = undefined;
      this._borderStyle.internalValue = undefined;
      this._loadingAnimation.internalValue = undefined;
      this._renderingRules.internalValue = undefined;
      this._selectedBorderStyle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
      this._elementType = value.elementType;
      this._height = value.height;
      this._visibility = value.visibility;
      this._width = value.width;
      this._xAxisLocation = value.xAxisLocation;
      this._yAxisLocation = value.yAxisLocation;
      this._backgroundStyle.internalValue = value.backgroundStyle;
      this._borderStyle.internalValue = value.borderStyle;
      this._loadingAnimation.internalValue = value.loadingAnimation;
      this._renderingRules.internalValue = value.renderingRules;
      this._selectedBorderStyle.internalValue = value.selectedBorderStyle;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // element_type - computed: false, optional: false, required: true
  private _elementType?: string; 
  public get elementType() {
    return this.getStringAttribute('element_type');
  }
  public set elementType(value: string) {
    this._elementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType;
  }

  // height - computed: false, optional: false, required: true
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // width - computed: false, optional: false, required: true
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_axis_location - computed: false, optional: false, required: true
  private _xAxisLocation?: string; 
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }
  public set xAxisLocation(value: string) {
    this._xAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxisLocationInput() {
    return this._xAxisLocation;
  }

  // y_axis_location - computed: false, optional: false, required: true
  private _yAxisLocation?: string; 
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
  public set yAxisLocation(value: string) {
    this._yAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLocationInput() {
    return this._yAxisLocation;
  }

  // background_style - computed: false, optional: true, required: false
  private _backgroundStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference(this, "background_style");
  public get backgroundStyle() {
    return this._backgroundStyle;
  }
  public putBackgroundStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBackgroundStyle) {
    this._backgroundStyle.internalValue = value;
  }
  public resetBackgroundStyle() {
    this._backgroundStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundStyleInput() {
    return this._backgroundStyle.internalValue;
  }

  // border_style - computed: false, optional: true, required: false
  private _borderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference(this, "border_style");
  public get borderStyle() {
    return this._borderStyle;
  }
  public putBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsBorderStyle) {
    this._borderStyle.internalValue = value;
  }
  public resetBorderStyle() {
    this._borderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderStyleInput() {
    return this._borderStyle.internalValue;
  }

  // loading_animation - computed: false, optional: true, required: false
  private _loadingAnimation = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference(this, "loading_animation");
  public get loadingAnimation() {
    return this._loadingAnimation;
  }
  public putLoadingAnimation(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsLoadingAnimation) {
    this._loadingAnimation.internalValue = value;
  }
  public resetLoadingAnimation() {
    this._loadingAnimation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadingAnimationInput() {
    return this._loadingAnimation.internalValue;
  }

  // rendering_rules - computed: false, optional: true, required: false
  private _renderingRules = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }
  public putRenderingRules(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable) {
    this._renderingRules.internalValue = value;
  }
  public resetRenderingRules() {
    this._renderingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderingRulesInput() {
    return this._renderingRules.internalValue;
  }

  // selected_border_style - computed: false, optional: true, required: false
  private _selectedBorderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference(this, "selected_border_style");
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }
  public putSelectedBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle) {
    this._selectedBorderStyle.internalValue = value;
  }
  public resetSelectedBorderStyle() {
    this._selectedBorderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedBorderStyleInput() {
    return this._selectedBorderStyle.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout {
  /**
  * elements block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#elements QuicksightTemplate#elements}
  */
  readonly elements: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsToTerraform, true)(struct!.elements),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elements.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elements.internalValue = value.elements;
    }
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout {
  /**
  * free_form_layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#free_form_layout QuicksightTemplate#free_form_layout}
  */
  readonly freeFormLayout: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_form_layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutToTerraform(struct!.freeFormLayout),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeFormLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFormLayout = this._freeFormLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeFormLayout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeFormLayout.internalValue = value.freeFormLayout;
    }
  }

  // free_form_layout - computed: false, optional: false, required: true
  private _freeFormLayout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayoutOutputReference(this, "free_form_layout");
  public get freeFormLayout() {
    return this._freeFormLayout;
  }
  public putFreeFormLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutFreeFormLayout) {
    this._freeFormLayout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFormLayoutInput() {
    return this._freeFormLayout.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktf.stringToTerraform(struct!.bottom),
    left: cdktf.stringToTerraform(struct!.left),
    right: cdktf.stringToTerraform(struct!.right),
    top: cdktf.stringToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom = undefined;
      this._left = undefined;
      this._right = undefined;
      this._top = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom = value.bottom;
      this._left = value.left;
      this._right = value.right;
      this._top = value.top;
    }
  }

  // bottom - computed: false, optional: true, required: false
  private _bottom?: string; 
  public get bottom() {
    return this.getStringAttribute('bottom');
  }
  public set bottom(value: string) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
  }

  // left - computed: false, optional: true, required: false
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // right - computed: false, optional: true, required: false
  private _right?: string; 
  public get right() {
    return this.getStringAttribute('right');
  }
  public set right(value: string) {
    this._right = value;
  }
  public resetRight() {
    this._right = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height?: string;
  /**
  * padding block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#padding QuicksightTemplate#padding}
  */
  readonly padding?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    padding: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingToTerraform(struct!.padding),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._padding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._padding.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._padding.internalValue = value.padding;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // padding - computed: false, optional: true, required: false
  private _padding = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePaddingOutputReference(this, "padding");
  public get padding() {
    return this._padding;
  }
  public putPadding(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStylePadding) {
    this._padding.internalValue = value;
  }
  public resetPadding() {
    this._padding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#section_id QuicksightTemplate#section_id}
  */
  readonly sectionId: string;
  /**
  * layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#layout QuicksightTemplate#layout}
  */
  readonly layout?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_id: cdktf.stringToTerraform(struct!.sectionId),
    layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutToTerraform(struct!.layout),
    style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleToTerraform(struct!.style),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionId = this._sectionId;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sectionId = undefined;
      this._layout.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sectionId = value.sectionId;
      this._layout.internalValue = value.layout;
      this._style.internalValue = value.style;
    }
  }

  // section_id - computed: false, optional: false, required: true
  private _sectionId?: string; 
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }
  public set sectionId(value: string) {
    this._sectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionIdInput() {
    return this._sectionId;
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
