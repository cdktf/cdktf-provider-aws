/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lightsail_bucket_resource_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailBucketResourceAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lightsail_bucket_resource_access#bucket_name LightsailBucketResourceAccess#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lightsail_bucket_resource_access#id LightsailBucketResourceAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lightsail_bucket_resource_access#resource_name LightsailBucketResourceAccess#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lightsail_bucket_resource_access aws_lightsail_bucket_resource_access}
*/
export class LightsailBucketResourceAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_bucket_resource_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LightsailBucketResourceAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightsailBucketResourceAccess to import
  * @param importFromId The id of the existing LightsailBucketResourceAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lightsail_bucket_resource_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightsailBucketResourceAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lightsail_bucket_resource_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lightsail_bucket_resource_access aws_lightsail_bucket_resource_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailBucketResourceAccessConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailBucketResourceAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_bucket_resource_access',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._bucketName = config.bucketName;
    this._id = config.id;
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      id: cdktf.stringToTerraform(this._id),
      resource_name: cdktf.stringToTerraform(this._resourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
