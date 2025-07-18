/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorTerminationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}
  */
  readonly callingRegions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}
  */
  readonly cidrAllowList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}
  */
  readonly cpsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}
  */
  readonly defaultPhoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#region ChimeVoiceConnectorTermination#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}
  */
  readonly voiceConnectorId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination aws_chime_voice_connector_termination}
*/
export class ChimeVoiceConnectorTermination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chime_voice_connector_termination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChimeVoiceConnectorTermination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorTermination to import
  * @param importFromId The id of the existing ChimeVoiceConnectorTermination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeVoiceConnectorTermination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chime_voice_connector_termination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chime_voice_connector_termination aws_chime_voice_connector_termination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorTerminationConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_termination',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._callingRegions = config.callingRegions;
    this._cidrAllowList = config.cidrAllowList;
    this._cpsLimit = config.cpsLimit;
    this._defaultPhoneNumber = config.defaultPhoneNumber;
    this._disabled = config.disabled;
    this._id = config.id;
    this._region = config.region;
    this._voiceConnectorId = config.voiceConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calling_regions - computed: false, optional: false, required: true
  private _callingRegions?: string[]; 
  public get callingRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('calling_regions'));
  }
  public set callingRegions(value: string[]) {
    this._callingRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callingRegionsInput() {
    return this._callingRegions;
  }

  // cidr_allow_list - computed: false, optional: false, required: true
  private _cidrAllowList?: string[]; 
  public get cidrAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_allow_list'));
  }
  public set cidrAllowList(value: string[]) {
    this._cidrAllowList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrAllowListInput() {
    return this._cidrAllowList;
  }

  // cps_limit - computed: false, optional: true, required: false
  private _cpsLimit?: number; 
  public get cpsLimit() {
    return this.getNumberAttribute('cps_limit');
  }
  public set cpsLimit(value: number) {
    this._cpsLimit = value;
  }
  public resetCpsLimit() {
    this._cpsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsLimitInput() {
    return this._cpsLimit;
  }

  // default_phone_number - computed: false, optional: true, required: false
  private _defaultPhoneNumber?: string; 
  public get defaultPhoneNumber() {
    return this.getStringAttribute('default_phone_number');
  }
  public set defaultPhoneNumber(value: string) {
    this._defaultPhoneNumber = value;
  }
  public resetDefaultPhoneNumber() {
    this._defaultPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPhoneNumberInput() {
    return this._defaultPhoneNumber;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // voice_connector_id - computed: false, optional: false, required: true
  private _voiceConnectorId?: string; 
  public get voiceConnectorId() {
    return this.getStringAttribute('voice_connector_id');
  }
  public set voiceConnectorId(value: string) {
    this._voiceConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceConnectorIdInput() {
    return this._voiceConnectorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      calling_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callingRegions),
      cidr_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrAllowList),
      cps_limit: cdktf.numberToTerraform(this._cpsLimit),
      default_phone_number: cdktf.stringToTerraform(this._defaultPhoneNumber),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      calling_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callingRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cidr_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrAllowList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cps_limit: {
        value: cdktf.numberToHclTerraform(this._cpsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_phone_number: {
        value: cdktf.stringToHclTerraform(this._defaultPhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_connector_id: {
        value: cdktf.stringToHclTerraform(this._voiceConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
