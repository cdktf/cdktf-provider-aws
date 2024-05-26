/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/ssm_patch_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmPatchGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/ssm_patch_group#baseline_id SsmPatchGroup#baseline_id}
  */
  readonly baselineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/ssm_patch_group#id SsmPatchGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/ssm_patch_group#patch_group SsmPatchGroup#patch_group}
  */
  readonly patchGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/ssm_patch_group aws_ssm_patch_group}
*/
export class SsmPatchGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_patch_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmPatchGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmPatchGroup to import
  * @param importFromId The id of the existing SsmPatchGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/ssm_patch_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmPatchGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_patch_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.1/docs/resources/ssm_patch_group aws_ssm_patch_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmPatchGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SsmPatchGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.51.1',
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
    this._baselineId = config.baselineId;
    this._id = config.id;
    this._patchGroup = config.patchGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_id - computed: false, optional: false, required: true
  private _baselineId?: string; 
  public get baselineId() {
    return this.getStringAttribute('baseline_id');
  }
  public set baselineId(value: string) {
    this._baselineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineIdInput() {
    return this._baselineId;
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

  // patch_group - computed: false, optional: false, required: true
  private _patchGroup?: string; 
  public get patchGroup() {
    return this.getStringAttribute('patch_group');
  }
  public set patchGroup(value: string) {
    this._patchGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchGroupInput() {
    return this._patchGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_id: cdktf.stringToTerraform(this._baselineId),
      id: cdktf.stringToTerraform(this._id),
      patch_group: cdktf.stringToTerraform(this._patchGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_id: {
        value: cdktf.stringToHclTerraform(this._baselineId),
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
      patch_group: {
        value: cdktf.stringToHclTerraform(this._patchGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
