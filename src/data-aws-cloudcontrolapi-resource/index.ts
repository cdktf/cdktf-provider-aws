/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCloudcontrolapiResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}
  */
  readonly typeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}
  */
  readonly typeVersionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource aws_cloudcontrolapi_resource}
*/
export class DataAwsCloudcontrolapiResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudcontrolapi_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsCloudcontrolapiResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsCloudcontrolapiResource to import
  * @param importFromId The id of the existing DataAwsCloudcontrolapiResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsCloudcontrolapiResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudcontrolapi_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/cloudcontrolapi_resource aws_cloudcontrolapi_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudcontrolapiResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudcontrolapiResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudcontrolapi_resource',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.80.0',
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
    this._id = config.id;
    this._identifier = config.identifier;
    this._roleArn = config.roleArn;
    this._typeName = config.typeName;
    this._typeVersionId = config.typeVersionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // type_name - computed: false, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // type_version_id - computed: false, optional: true, required: false
  private _typeVersionId?: string; 
  public get typeVersionId() {
    return this.getStringAttribute('type_version_id');
  }
  public set typeVersionId(value: string) {
    this._typeVersionId = value;
  }
  public resetTypeVersionId() {
    this._typeVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVersionIdInput() {
    return this._typeVersionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      type_name: cdktf.stringToTerraform(this._typeName),
      type_version_id: cdktf.stringToTerraform(this._typeVersionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      type_name: {
        value: cdktf.stringToHclTerraform(this._typeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_version_id: {
        value: cdktf.stringToHclTerraform(this._typeVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
