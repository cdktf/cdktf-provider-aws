/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueMlTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}
  */
  readonly glueVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#id GlueMlTransform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#region GlueMlTransform#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#role_arn GlueMlTransform#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#tags_all GlueMlTransform#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}
  */
  readonly workerType?: string;
  /**
  * input_record_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}
  */
  readonly inputRecordTables: GlueMlTransformInputRecordTables[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#parameters GlueMlTransform#parameters}
  */
  readonly parameters: GlueMlTransformParameters;
}
export interface GlueMlTransformSchema {
}

export function glueMlTransformSchemaToTerraform(struct?: GlueMlTransformSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function glueMlTransformSchemaToHclTerraform(struct?: GlueMlTransformSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GlueMlTransformSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlueMlTransformSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueMlTransformSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GlueMlTransformSchemaList extends cdktf.ComplexList {

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
  public get(index: number): GlueMlTransformSchemaOutputReference {
    return new GlueMlTransformSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueMlTransformInputRecordTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#connection_name GlueMlTransform#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#database_name GlueMlTransform#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#table_name GlueMlTransform#table_name}
  */
  readonly tableName: string;
}

export function glueMlTransformInputRecordTablesToTerraform(struct?: GlueMlTransformInputRecordTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function glueMlTransformInputRecordTablesToHclTerraform(struct?: GlueMlTransformInputRecordTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueMlTransformInputRecordTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueMlTransformInputRecordTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueMlTransformInputRecordTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._connectionName = undefined;
      this._databaseName = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._connectionName = value.connectionName;
      this._databaseName = value.databaseName;
      this._tableName = value.tableName;
    }
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class GlueMlTransformInputRecordTablesList extends cdktf.ComplexList {
  public internalValue? : GlueMlTransformInputRecordTables[] | cdktf.IResolvable

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
  public get(index: number): GlueMlTransformInputRecordTablesOutputReference {
    return new GlueMlTransformInputRecordTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueMlTransformParametersFindMatchesParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}
  */
  readonly accuracyCostTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}
  */
  readonly enforceProvidedLabels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}
  */
  readonly precisionRecallTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}
  */
  readonly primaryKeyColumnName?: string;
}

export function glueMlTransformParametersFindMatchesParametersToTerraform(struct?: GlueMlTransformParametersFindMatchesParametersOutputReference | GlueMlTransformParametersFindMatchesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accuracy_cost_trade_off: cdktf.numberToTerraform(struct!.accuracyCostTradeOff),
    enforce_provided_labels: cdktf.booleanToTerraform(struct!.enforceProvidedLabels),
    precision_recall_trade_off: cdktf.numberToTerraform(struct!.precisionRecallTradeOff),
    primary_key_column_name: cdktf.stringToTerraform(struct!.primaryKeyColumnName),
  }
}


export function glueMlTransformParametersFindMatchesParametersToHclTerraform(struct?: GlueMlTransformParametersFindMatchesParametersOutputReference | GlueMlTransformParametersFindMatchesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accuracy_cost_trade_off: {
      value: cdktf.numberToHclTerraform(struct!.accuracyCostTradeOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_provided_labels: {
      value: cdktf.booleanToHclTerraform(struct!.enforceProvidedLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    precision_recall_trade_off: {
      value: cdktf.numberToHclTerraform(struct!.precisionRecallTradeOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key_column_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryKeyColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueMlTransformParametersFindMatchesParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueMlTransformParametersFindMatchesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accuracyCostTradeOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.accuracyCostTradeOff = this._accuracyCostTradeOff;
    }
    if (this._enforceProvidedLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceProvidedLabels = this._enforceProvidedLabels;
    }
    if (this._precisionRecallTradeOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.precisionRecallTradeOff = this._precisionRecallTradeOff;
    }
    if (this._primaryKeyColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyColumnName = this._primaryKeyColumnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueMlTransformParametersFindMatchesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accuracyCostTradeOff = undefined;
      this._enforceProvidedLabels = undefined;
      this._precisionRecallTradeOff = undefined;
      this._primaryKeyColumnName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accuracyCostTradeOff = value.accuracyCostTradeOff;
      this._enforceProvidedLabels = value.enforceProvidedLabels;
      this._precisionRecallTradeOff = value.precisionRecallTradeOff;
      this._primaryKeyColumnName = value.primaryKeyColumnName;
    }
  }

  // accuracy_cost_trade_off - computed: false, optional: true, required: false
  private _accuracyCostTradeOff?: number; 
  public get accuracyCostTradeOff() {
    return this.getNumberAttribute('accuracy_cost_trade_off');
  }
  public set accuracyCostTradeOff(value: number) {
    this._accuracyCostTradeOff = value;
  }
  public resetAccuracyCostTradeOff() {
    this._accuracyCostTradeOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accuracyCostTradeOffInput() {
    return this._accuracyCostTradeOff;
  }

  // enforce_provided_labels - computed: false, optional: true, required: false
  private _enforceProvidedLabels?: boolean | cdktf.IResolvable; 
  public get enforceProvidedLabels() {
    return this.getBooleanAttribute('enforce_provided_labels');
  }
  public set enforceProvidedLabels(value: boolean | cdktf.IResolvable) {
    this._enforceProvidedLabels = value;
  }
  public resetEnforceProvidedLabels() {
    this._enforceProvidedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceProvidedLabelsInput() {
    return this._enforceProvidedLabels;
  }

  // precision_recall_trade_off - computed: false, optional: true, required: false
  private _precisionRecallTradeOff?: number; 
  public get precisionRecallTradeOff() {
    return this.getNumberAttribute('precision_recall_trade_off');
  }
  public set precisionRecallTradeOff(value: number) {
    this._precisionRecallTradeOff = value;
  }
  public resetPrecisionRecallTradeOff() {
    this._precisionRecallTradeOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionRecallTradeOffInput() {
    return this._precisionRecallTradeOff;
  }

  // primary_key_column_name - computed: false, optional: true, required: false
  private _primaryKeyColumnName?: string; 
  public get primaryKeyColumnName() {
    return this.getStringAttribute('primary_key_column_name');
  }
  public set primaryKeyColumnName(value: string) {
    this._primaryKeyColumnName = value;
  }
  public resetPrimaryKeyColumnName() {
    this._primaryKeyColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyColumnNameInput() {
    return this._primaryKeyColumnName;
  }
}
export interface GlueMlTransformParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}
  */
  readonly transformType: string;
  /**
  * find_matches_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}
  */
  readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParameters;
}

export function glueMlTransformParametersToTerraform(struct?: GlueMlTransformParametersOutputReference | GlueMlTransformParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transform_type: cdktf.stringToTerraform(struct!.transformType),
    find_matches_parameters: glueMlTransformParametersFindMatchesParametersToTerraform(struct!.findMatchesParameters),
  }
}


export function glueMlTransformParametersToHclTerraform(struct?: GlueMlTransformParametersOutputReference | GlueMlTransformParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transform_type: {
      value: cdktf.stringToHclTerraform(struct!.transformType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    find_matches_parameters: {
      value: glueMlTransformParametersFindMatchesParametersToHclTerraform(struct!.findMatchesParameters),
      isBlock: true,
      type: "list",
      storageClassType: "GlueMlTransformParametersFindMatchesParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueMlTransformParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueMlTransformParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformType = this._transformType;
    }
    if (this._findMatchesParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findMatchesParameters = this._findMatchesParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueMlTransformParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformType = undefined;
      this._findMatchesParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformType = value.transformType;
      this._findMatchesParameters.internalValue = value.findMatchesParameters;
    }
  }

  // transform_type - computed: false, optional: false, required: true
  private _transformType?: string; 
  public get transformType() {
    return this.getStringAttribute('transform_type');
  }
  public set transformType(value: string) {
    this._transformType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformTypeInput() {
    return this._transformType;
  }

  // find_matches_parameters - computed: false, optional: false, required: true
  private _findMatchesParameters = new GlueMlTransformParametersFindMatchesParametersOutputReference(this, "find_matches_parameters");
  public get findMatchesParameters() {
    return this._findMatchesParameters;
  }
  public putFindMatchesParameters(value: GlueMlTransformParametersFindMatchesParameters) {
    this._findMatchesParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findMatchesParametersInput() {
    return this._findMatchesParameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform aws_glue_ml_transform}
*/
export class GlueMlTransform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_ml_transform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueMlTransform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueMlTransform to import
  * @param importFromId The id of the existing GlueMlTransform that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueMlTransform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_ml_transform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_ml_transform aws_glue_ml_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueMlTransformConfig
  */
  public constructor(scope: Construct, id: string, config: GlueMlTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_ml_transform',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._glueVersion = config.glueVersion;
    this._id = config.id;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._numberOfWorkers = config.numberOfWorkers;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._inputRecordTables.internalValue = config.inputRecordTables;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // glue_version - computed: true, optional: true, required: false
  private _glueVersion?: string; 
  public get glueVersion() {
    return this.getStringAttribute('glue_version');
  }
  public set glueVersion(value: string) {
    this._glueVersion = value;
  }
  public resetGlueVersion() {
    this._glueVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueVersionInput() {
    return this._glueVersion;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label_count - computed: true, optional: false, required: false
  public get labelCount() {
    return this.getNumberAttribute('label_count');
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number; 
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new GlueMlTransformSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string; 
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType;
  }

  // input_record_tables - computed: false, optional: false, required: true
  private _inputRecordTables = new GlueMlTransformInputRecordTablesList(this, "input_record_tables", false);
  public get inputRecordTables() {
    return this._inputRecordTables;
  }
  public putInputRecordTables(value: GlueMlTransformInputRecordTables[] | cdktf.IResolvable) {
    this._inputRecordTables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRecordTablesInput() {
    return this._inputRecordTables.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new GlueMlTransformParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GlueMlTransformParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      glue_version: cdktf.stringToTerraform(this._glueVersion),
      id: cdktf.stringToTerraform(this._id),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      name: cdktf.stringToTerraform(this._name),
      number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeout: cdktf.numberToTerraform(this._timeout),
      worker_type: cdktf.stringToTerraform(this._workerType),
      input_record_tables: cdktf.listMapper(glueMlTransformInputRecordTablesToTerraform, true)(this._inputRecordTables.internalValue),
      parameters: glueMlTransformParametersToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glue_version: {
        value: cdktf.stringToHclTerraform(this._glueVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_workers: {
        value: cdktf.numberToHclTerraform(this._numberOfWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_type: {
        value: cdktf.stringToHclTerraform(this._workerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_record_tables: {
        value: cdktf.listMapperHcl(glueMlTransformInputRecordTablesToHclTerraform, true)(this._inputRecordTables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueMlTransformInputRecordTablesList",
      },
      parameters: {
        value: glueMlTransformParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueMlTransformParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
