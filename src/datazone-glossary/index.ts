/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatazoneGlossaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary#description DatazoneGlossary#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary#domain_identifier DatazoneGlossary#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary#name DatazoneGlossary#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary#owning_project_identifier DatazoneGlossary#owning_project_identifier}
  */
  readonly owningProjectIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary#status DatazoneGlossary#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary aws_datazone_glossary}
*/
export class DatazoneGlossary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_glossary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatazoneGlossary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneGlossary to import
  * @param importFromId The id of the existing DatazoneGlossary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneGlossary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_glossary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.89.0/docs/resources/datazone_glossary aws_datazone_glossary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneGlossaryConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneGlossaryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_glossary',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.89.0',
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
    this._description = config.description;
    this._domainIdentifier = config.domainIdentifier;
    this._name = config.name;
    this._owningProjectIdentifier = config.owningProjectIdentifier;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain_identifier - computed: false, optional: false, required: true
  private _domainIdentifier?: string; 
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // owning_project_identifier - computed: false, optional: false, required: true
  private _owningProjectIdentifier?: string; 
  public get owningProjectIdentifier() {
    return this.getStringAttribute('owning_project_identifier');
  }
  public set owningProjectIdentifier(value: string) {
    this._owningProjectIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get owningProjectIdentifierInput() {
    return this._owningProjectIdentifier;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_identifier: cdktf.stringToTerraform(this._domainIdentifier),
      name: cdktf.stringToTerraform(this._name),
      owning_project_identifier: cdktf.stringToTerraform(this._owningProjectIdentifier),
      status: cdktf.stringToTerraform(this._status),
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
      domain_identifier: {
        value: cdktf.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owning_project_identifier: {
        value: cdktf.stringToHclTerraform(this._owningProjectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
