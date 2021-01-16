// https://www.terraform.io/docs/providers/aws/r/glue_schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueSchemaConfig extends cdktf.TerraformMetaArguments {
  readonly compatibility: string;
  readonly dataFormat: string;
  readonly description?: string;
  readonly registryArn?: string;
  readonly schemaDefinition: string;
  readonly schemaName: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class GlueSchema extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatibility - computed: false, optional: false, required: true
  private _compatibility: string;
  public get compatibility() {
    return this.getStringAttribute('compatibility');
  }
  public set compatibility(value: string) {
    this._compatibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityInput() {
    return this._compatibility
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat: string;
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_schema_version - computed: true, optional: false, required: false
  public get latestSchemaVersion() {
    return this.getNumberAttribute('latest_schema_version');
  }

  // next_schema_version - computed: true, optional: false, required: false
  public get nextSchemaVersion() {
    return this.getNumberAttribute('next_schema_version');
  }

  // registry_arn - computed: true, optional: true, required: false
  private _registryArn?: string;
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }
  public set registryArn(value: string) {
    this._registryArn = value;
  }
  public resetRegistryArn() {
    this._registryArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryArnInput() {
    return this._registryArn
  }

  // registry_name - computed: true, optional: false, required: false
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // schema_checkpoint - computed: true, optional: false, required: false
  public get schemaCheckpoint() {
    return this.getNumberAttribute('schema_checkpoint');
  }

  // schema_definition - computed: false, optional: false, required: true
  private _schemaDefinition: string;
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName: string;
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatibility: cdktf.stringToTerraform(this._compatibility),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      description: cdktf.stringToTerraform(this._description),
      registry_arn: cdktf.stringToTerraform(this._registryArn),
      schema_definition: cdktf.stringToTerraform(this._schemaDefinition),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
