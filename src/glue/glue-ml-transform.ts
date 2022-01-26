// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GlueMlTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#description GlueMlTransform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#glue_version GlueMlTransform#glue_version}
  */
  readonly glueVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#max_retries GlueMlTransform#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#name GlueMlTransform#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#role_arn GlueMlTransform#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags GlueMlTransform#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#tags_all GlueMlTransform#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#timeout GlueMlTransform#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#worker_type GlueMlTransform#worker_type}
  */
  readonly workerType?: string;
  /**
  * input_record_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}
  */
  readonly inputRecordTables: GlueMlTransformInputRecordTables[] | cdktf.IResolvable;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#parameters GlueMlTransform#parameters}
  */
  readonly parameters: GlueMlTransformParameters;
}
export class GlueMlTransformSchema extends cdktf.ComplexComputedList {

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface GlueMlTransformInputRecordTables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#connection_name GlueMlTransform#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#database_name GlueMlTransform#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#table_name GlueMlTransform#table_name}
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

export interface GlueMlTransformParametersFindMatchesParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}
  */
  readonly accuracyCostTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}
  */
  readonly enforceProvidedLabels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}
  */
  readonly precisionRecallTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}
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

export class GlueMlTransformParametersFindMatchesParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#transform_type GlueMlTransform#transform_type}
  */
  readonly transformType: string;
  /**
  * find_matches_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}
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

export class GlueMlTransformParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  private _findMatchesParameters = new GlueMlTransformParametersFindMatchesParametersOutputReference(this, "find_matches_parameters", true);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform aws_glue_ml_transform}
*/
export class GlueMlTransform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_ml_transform";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform aws_glue_ml_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueMlTransformConfig
  */
  public constructor(scope: Construct, id: string, config: GlueMlTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_ml_transform',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._glueVersion = config.glueVersion;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._numberOfWorkers = config.numberOfWorkers;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._inputRecordTables = config.inputRecordTables;
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
  public get id() {
    return this.getStringAttribute('id');
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
  public schema(index: string) {
    return new GlueMlTransformSchema(this, 'schema', index, false);
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
  private _inputRecordTables?: GlueMlTransformInputRecordTables[] | cdktf.IResolvable; 
  public get inputRecordTables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('input_record_tables');
  }
  public set inputRecordTables(value: GlueMlTransformInputRecordTables[] | cdktf.IResolvable) {
    this._inputRecordTables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRecordTablesInput() {
    return this._inputRecordTables;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new GlueMlTransformParametersOutputReference(this, "parameters", true);
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
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      name: cdktf.stringToTerraform(this._name),
      number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeout: cdktf.numberToTerraform(this._timeout),
      worker_type: cdktf.stringToTerraform(this._workerType),
      input_record_tables: cdktf.listMapper(glueMlTransformInputRecordTablesToTerraform)(this._inputRecordTables),
      parameters: glueMlTransformParametersToTerraform(this._parameters.internalValue),
    };
  }
}
