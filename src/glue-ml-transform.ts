// https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface GlueMlTransformConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly glueVersion?: string;
  readonly maxCapacity?: number;
  readonly maxRetries?: number;
  readonly name: string;
  readonly numberOfWorkers?: number;
  readonly roleArn: string;
  readonly tags?: { [key: string]: string };
  readonly timeout?: number;
  readonly workerType?: string;
  /** input_record_tables block */
  readonly inputRecordTables: GlueMlTransformInputRecordTables[];
  /** parameters block */
  readonly parameters: GlueMlTransformParameters[];
}
export class GlueMlTransformSchema extends ComplexComputedList {

  // data_type - computed: true, optional: false, required: true
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface GlueMlTransformInputRecordTables {
  readonly catalogId?: string;
  readonly connectionName?: string;
  readonly databaseName: string;
  readonly tableName: string;
}
export interface GlueMlTransformParametersFindMatchesParameters {
  readonly accuracyCostTradeOff?: number;
  readonly enforceProvidedLabels?: boolean;
  readonly precisionRecallTradeOff?: number;
  readonly primaryKeyColumnName?: string;
}
export interface GlueMlTransformParameters {
  readonly transformType: string;
  /** find_matches_parameters block */
  readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParameters[];
}

// Resource

export class GlueMlTransform extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._inputRecordTables = config.inputRecordTables;
    this._parameters = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // glue_version - computed: true, optional: true, required: false
  private _glueVersion?: string;
  public get glueVersion() {
    return this._glueVersion ?? this.getStringAttribute('glue_version');
  }
  public set glueVersion(value: string | undefined) {
    this._glueVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // label_count - computed: true, optional: false, required: true
  public get labelCount() {
    return this.getNumberAttribute('label_count');
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number;
  public get maxCapacity() {
    return this._maxCapacity ?? this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number | undefined) {
    this._maxCapacity = value;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number;
  public get numberOfWorkers() {
    return this._numberOfWorkers;
  }
  public set numberOfWorkers(value: number | undefined) {
    this._numberOfWorkers = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // schema - computed: true, optional: false, required: true
  public schema(index: string) {
    return new GlueMlTransformSchema(this, 'schema', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string;
  public get workerType() {
    return this._workerType;
  }
  public set workerType(value: string | undefined) {
    this._workerType = value;
  }

  // input_record_tables - computed: false, optional: false, required: true
  private _inputRecordTables: GlueMlTransformInputRecordTables[];
  public get inputRecordTables() {
    return this._inputRecordTables;
  }
  public set inputRecordTables(value: GlueMlTransformInputRecordTables[]) {
    this._inputRecordTables = value;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters: GlueMlTransformParameters[];
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: GlueMlTransformParameters[]) {
    this._parameters = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      glue_version: this._glueVersion,
      max_capacity: this._maxCapacity,
      max_retries: this._maxRetries,
      name: this._name,
      number_of_workers: this._numberOfWorkers,
      role_arn: this._roleArn,
      tags: this._tags,
      timeout: this._timeout,
      worker_type: this._workerType,
      input_record_tables: this._inputRecordTables,
      parameters: this._parameters,
    };
  }
}
