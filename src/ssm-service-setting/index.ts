/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ssm_service_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmServiceSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ssm_service_setting#id SsmServiceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ssm_service_setting#setting_id SsmServiceSetting#setting_id}
  */
  readonly settingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ssm_service_setting#setting_value SsmServiceSetting#setting_value}
  */
  readonly settingValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ssm_service_setting aws_ssm_service_setting}
*/
export class SsmServiceSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_service_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmServiceSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmServiceSetting to import
  * @param importFromId The id of the existing SsmServiceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ssm_service_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmServiceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_service_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ssm_service_setting aws_ssm_service_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmServiceSettingConfig
  */
  public constructor(scope: Construct, id: string, config: SsmServiceSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_service_setting',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.61.0',
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
    this._settingId = config.settingId;
    this._settingValue = config.settingValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // setting_id - computed: false, optional: false, required: true
  private _settingId?: string; 
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }
  public set settingId(value: string) {
    this._settingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingIdInput() {
    return this._settingId;
  }

  // setting_value - computed: false, optional: false, required: true
  private _settingValue?: string; 
  public get settingValue() {
    return this.getStringAttribute('setting_value');
  }
  public set settingValue(value: string) {
    this._settingValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingValueInput() {
    return this._settingValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      setting_id: cdktf.stringToTerraform(this._settingId),
      setting_value: cdktf.stringToTerraform(this._settingValue),
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
      setting_id: {
        value: cdktf.stringToHclTerraform(this._settingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_value: {
        value: cdktf.stringToHclTerraform(this._settingValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
