// https://www.terraform.io/docs/providers/aws/r/glue_schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueSchemaConfig extends TerraformMetaArguments {
  readonly compatibility: string;
  readonly dataFormat: string;
  readonly description?: string;
  readonly registryArn?: string;
  readonly schemaDefinition: string;
  readonly schemaName: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class GlueSchema extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_schema',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compatibility = config.compatibility;
    this._dataFormat = config.dataFormat;
    this._description = config.description;
    this._registryArn = config.registryArn;
    this._schemaDefinition = config.schemaDefinition;
    this._schemaName = config.schemaName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatibility - computed: false, optional: false, required: true
  private _compatibility: string;
  public get compatibility() {
    return this._compatibility;
  }
  public set compatibility(value: string) {
    this._compatibility = value;
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat: string;
  public get dataFormat() {
    return this._dataFormat;
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // latest_schema_version - computed: true, optional: false, required: true
  public get latestSchemaVersion() {
    return this.getNumberAttribute('latest_schema_version');
  }

  // next_schema_version - computed: true, optional: false, required: true
  public get nextSchemaVersion() {
    return this.getNumberAttribute('next_schema_version');
  }

  // registry_arn - computed: true, optional: true, required: false
  private _registryArn?: string;
  public get registryArn() {
    return this._registryArn ?? this.getStringAttribute('registry_arn');
  }
  public set registryArn(value: string | undefined) {
    this._registryArn = value;
  }

  // registry_name - computed: true, optional: false, required: true
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // schema_checkpoint - computed: true, optional: false, required: true
  public get schemaCheckpoint() {
    return this.getNumberAttribute('schema_checkpoint');
  }

  // schema_definition - computed: false, optional: false, required: true
  private _schemaDefinition: string;
  public get schemaDefinition() {
    return this._schemaDefinition;
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName: string;
  public get schemaName() {
    return this._schemaName;
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatibility: this._compatibility,
      data_format: this._dataFormat,
      description: this._description,
      registry_arn: this._registryArn,
      schema_definition: this._schemaDefinition,
      schema_name: this._schemaName,
      tags: this._tags,
    };
  }
}
