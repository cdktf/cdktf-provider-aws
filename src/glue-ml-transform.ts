// https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueMlTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#description GlueMlTransform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#glue_version GlueMlTransform#glue_version}
  */
  readonly glueVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#max_capacity GlueMlTransform#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#max_retries GlueMlTransform#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#name GlueMlTransform#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#number_of_workers GlueMlTransform#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#role_arn GlueMlTransform#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#tags GlueMlTransform#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#tags_all GlueMlTransform#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#timeout GlueMlTransform#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#worker_type GlueMlTransform#worker_type}
  */
  readonly workerType?: string;
  /**
  * input_record_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#input_record_tables GlueMlTransform#input_record_tables}
  */
  readonly inputRecordTables: GlueMlTransformInputRecordTables[];
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#parameters GlueMlTransform#parameters}
  */
  readonly parameters: GlueMlTransformParameters[];
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#catalog_id GlueMlTransform#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#connection_name GlueMlTransform#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#database_name GlueMlTransform#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#table_name GlueMlTransform#table_name}
  */
  readonly tableName: string;
}

function glueMlTransformInputRecordTablesToTerraform(struct?: GlueMlTransformInputRecordTables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface GlueMlTransformParametersFindMatchesParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}
  */
  readonly accuracyCostTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#enforce_provided_labels GlueMlTransform#enforce_provided_labels}
  */
  readonly enforceProvidedLabels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}
  */
  readonly precisionRecallTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#primary_key_column_name GlueMlTransform#primary_key_column_name}
  */
  readonly primaryKeyColumnName?: string;
}

function glueMlTransformParametersFindMatchesParametersToTerraform(struct?: GlueMlTransformParametersFindMatchesParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accuracy_cost_trade_off: cdktf.numberToTerraform(struct!.accuracyCostTradeOff),
    enforce_provided_labels: cdktf.booleanToTerraform(struct!.enforceProvidedLabels),
    precision_recall_trade_off: cdktf.numberToTerraform(struct!.precisionRecallTradeOff),
    primary_key_column_name: cdktf.stringToTerraform(struct!.primaryKeyColumnName),
  }
}

export interface GlueMlTransformParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#transform_type GlueMlTransform#transform_type}
  */
  readonly transformType: string;
  /**
  * find_matches_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#find_matches_parameters GlueMlTransform#find_matches_parameters}
  */
  readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParameters[];
}

function glueMlTransformParametersToTerraform(struct?: GlueMlTransformParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    transform_type: cdktf.stringToTerraform(struct!.transformType),
    find_matches_parameters: cdktf.listMapper(glueMlTransformParametersFindMatchesParametersToTerraform)(struct!.findMatchesParameters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform} Resource
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
    this._parameters = config.parameters;
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
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
    return this._glueVersion
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
    return this._maxCapacity
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number ) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number;
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number ) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // schema - computed: true, optional: false, required: false
  public schema(index: string) {
    return new GlueMlTransformSchema(this, 'schema', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string;
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string ) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType
  }

  // input_record_tables - computed: false, optional: false, required: true
  private _inputRecordTables: GlueMlTransformInputRecordTables[];
  public get inputRecordTables() {
    return this.interpolationForAttribute('input_record_tables') as any;
  }
  public set inputRecordTables(value: GlueMlTransformInputRecordTables[]) {
    this._inputRecordTables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRecordTablesInput() {
    return this._inputRecordTables
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters: GlueMlTransformParameters[];
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: GlueMlTransformParameters[]) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeout: cdktf.numberToTerraform(this._timeout),
      worker_type: cdktf.stringToTerraform(this._workerType),
      input_record_tables: cdktf.listMapper(glueMlTransformInputRecordTablesToTerraform)(this._inputRecordTables),
      parameters: cdktf.listMapper(glueMlTransformParametersToTerraform)(this._parameters),
    };
  }
}
