/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#compatibility GlueSchema#compatibility}
  */
  readonly compatibility: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#data_format GlueSchema#data_format}
  */
  readonly dataFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#description GlueSchema#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#id GlueSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#registry_arn GlueSchema#registry_arn}
  */
  readonly registryArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#schema_definition GlueSchema#schema_definition}
  */
  readonly schemaDefinition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#schema_name GlueSchema#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#tags GlueSchema#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#tags_all GlueSchema#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema aws_glue_schema}
*/
export class GlueSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueSchema to import
  * @param importFromId The id of the existing GlueSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/glue_schema aws_glue_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_schema',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.62.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compatibility = config.compatibility;
    this._dataFormat = config.dataFormat;
    this._description = config.description;
    this._id = config.id;
    this._registryArn = config.registryArn;
    this._schemaDefinition = config.schemaDefinition;
    this._schemaName = config.schemaName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatibility - computed: false, optional: false, required: true
  private _compatibility?: string; 
  public get compatibility() {
    return this.getStringAttribute('compatibility');
  }
  public set compatibility(value: string) {
    this._compatibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityInput() {
    return this._compatibility;
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
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
    return this._registryArn;
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
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatibility: cdktf.stringToTerraform(this._compatibility),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      registry_arn: cdktf.stringToTerraform(this._registryArn),
      schema_definition: cdktf.stringToTerraform(this._schemaDefinition),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compatibility: {
        value: cdktf.stringToHclTerraform(this._compatibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_format: {
        value: cdktf.stringToHclTerraform(this._dataFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      registry_arn: {
        value: cdktf.stringToHclTerraform(this._registryArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_definition: {
        value: cdktf.stringToHclTerraform(this._schemaDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
