/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/opensearchserverless_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOpensearchserverlessLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/opensearchserverless_lifecycle_policy#name DataAwsOpensearchserverlessLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/opensearchserverless_lifecycle_policy#region DataAwsOpensearchserverlessLifecyclePolicy#region}
  */
  readonly region?: string;
  /**
  * Type of lifecycle policy. Must be `retention`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/opensearchserverless_lifecycle_policy#type DataAwsOpensearchserverlessLifecyclePolicy#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/opensearchserverless_lifecycle_policy aws_opensearchserverless_lifecycle_policy}
*/
export class DataAwsOpensearchserverlessLifecyclePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearchserverless_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsOpensearchserverlessLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessLifecyclePolicy to import
  * @param importFromId The id of the existing DataAwsOpensearchserverlessLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/opensearchserverless_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearchserverless_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/opensearchserverless_lifecycle_policy aws_opensearchserverless_lifecycle_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOpensearchserverlessLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearchserverless_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._name = config.name;
    this._region = config.region;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // policy_version - computed: true, optional: false, required: false
  public get policyVersion() {
    return this.getStringAttribute('policy_version');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
