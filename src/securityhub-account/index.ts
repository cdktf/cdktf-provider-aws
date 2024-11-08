/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account#auto_enable_controls SecurityhubAccount#auto_enable_controls}
  */
  readonly autoEnableControls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account#control_finding_generator SecurityhubAccount#control_finding_generator}
  */
  readonly controlFindingGenerator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account#enable_default_standards SecurityhubAccount#enable_default_standards}
  */
  readonly enableDefaultStandards?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account#id SecurityhubAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account aws_securityhub_account}
*/
export class SecurityhubAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityhubAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubAccount to import
  * @param importFromId The id of the existing SecurityhubAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/securityhub_account aws_securityhub_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityhubAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_account',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.0',
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
    this._autoEnableControls = config.autoEnableControls;
    this._controlFindingGenerator = config.controlFindingGenerator;
    this._enableDefaultStandards = config.enableDefaultStandards;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_enable_controls - computed: false, optional: true, required: false
  private _autoEnableControls?: boolean | cdktf.IResolvable; 
  public get autoEnableControls() {
    return this.getBooleanAttribute('auto_enable_controls');
  }
  public set autoEnableControls(value: boolean | cdktf.IResolvable) {
    this._autoEnableControls = value;
  }
  public resetAutoEnableControls() {
    this._autoEnableControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableControlsInput() {
    return this._autoEnableControls;
  }

  // control_finding_generator - computed: true, optional: true, required: false
  private _controlFindingGenerator?: string; 
  public get controlFindingGenerator() {
    return this.getStringAttribute('control_finding_generator');
  }
  public set controlFindingGenerator(value: string) {
    this._controlFindingGenerator = value;
  }
  public resetControlFindingGenerator() {
    this._controlFindingGenerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlFindingGeneratorInput() {
    return this._controlFindingGenerator;
  }

  // enable_default_standards - computed: false, optional: true, required: false
  private _enableDefaultStandards?: boolean | cdktf.IResolvable; 
  public get enableDefaultStandards() {
    return this.getBooleanAttribute('enable_default_standards');
  }
  public set enableDefaultStandards(value: boolean | cdktf.IResolvable) {
    this._enableDefaultStandards = value;
  }
  public resetEnableDefaultStandards() {
    this._enableDefaultStandards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultStandardsInput() {
    return this._enableDefaultStandards;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable_controls: cdktf.booleanToTerraform(this._autoEnableControls),
      control_finding_generator: cdktf.stringToTerraform(this._controlFindingGenerator),
      enable_default_standards: cdktf.booleanToTerraform(this._enableDefaultStandards),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable_controls: {
        value: cdktf.booleanToHclTerraform(this._autoEnableControls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      control_finding_generator: {
        value: cdktf.stringToHclTerraform(this._controlFindingGenerator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_standards: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultStandards),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
