/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { Lexv2ModelsSlotMultipleValuesSetting, 
lexv2ModelsSlotMultipleValuesSettingToTerraform, 
lexv2ModelsSlotMultipleValuesSettingToHclTerraform, 
Lexv2ModelsSlotMultipleValuesSettingList, 
Lexv2ModelsSlotObfuscationSetting, 
lexv2ModelsSlotObfuscationSettingToTerraform, 
lexv2ModelsSlotObfuscationSettingToHclTerraform, 
Lexv2ModelsSlotObfuscationSettingList, 
Lexv2ModelsSlotSubSlotSetting, 
lexv2ModelsSlotSubSlotSettingToTerraform, 
lexv2ModelsSlotSubSlotSettingToHclTerraform, 
Lexv2ModelsSlotSubSlotSettingList, 
Lexv2ModelsSlotTimeouts, 
lexv2ModelsSlotTimeoutsToTerraform, 
lexv2ModelsSlotTimeoutsToHclTerraform, 
Lexv2ModelsSlotTimeoutsOutputReference, 
Lexv2ModelsSlotValueElicitationSetting, 
lexv2ModelsSlotValueElicitationSettingToTerraform, 
lexv2ModelsSlotValueElicitationSettingToHclTerraform, 
Lexv2ModelsSlotValueElicitationSettingList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsSlotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#bot_id Lexv2ModelsSlot#bot_id}
  */
  readonly botId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#bot_version Lexv2ModelsSlot#bot_version}
  */
  readonly botVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#description Lexv2ModelsSlot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#intent_id Lexv2ModelsSlot#intent_id}
  */
  readonly intentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#locale_id Lexv2ModelsSlot#locale_id}
  */
  readonly localeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#name Lexv2ModelsSlot#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#region Lexv2ModelsSlot#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#slot_type_id Lexv2ModelsSlot#slot_type_id}
  */
  readonly slotTypeId?: string;
  /**
  * multiple_values_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#multiple_values_setting Lexv2ModelsSlot#multiple_values_setting}
  */
  readonly multipleValuesSetting?: Lexv2ModelsSlotMultipleValuesSetting[] | cdktf.IResolvable;
  /**
  * obfuscation_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#obfuscation_setting Lexv2ModelsSlot#obfuscation_setting}
  */
  readonly obfuscationSetting?: Lexv2ModelsSlotObfuscationSetting[] | cdktf.IResolvable;
  /**
  * sub_slot_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#sub_slot_setting Lexv2ModelsSlot#sub_slot_setting}
  */
  readonly subSlotSetting?: Lexv2ModelsSlotSubSlotSetting[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#timeouts Lexv2ModelsSlot#timeouts}
  */
  readonly timeouts?: Lexv2ModelsSlotTimeouts;
  /**
  * value_elicitation_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#value_elicitation_setting Lexv2ModelsSlot#value_elicitation_setting}
  */
  readonly valueElicitationSetting?: Lexv2ModelsSlotValueElicitationSetting[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot aws_lexv2models_slot}
*/
export class Lexv2ModelsSlot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lexv2models_slot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lexv2ModelsSlot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lexv2ModelsSlot to import
  * @param importFromId The id of the existing Lexv2ModelsSlot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lexv2ModelsSlot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lexv2models_slot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/lexv2models_slot aws_lexv2models_slot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Lexv2ModelsSlotConfig
  */
  public constructor(scope: Construct, id: string, config: Lexv2ModelsSlotConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lexv2models_slot',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
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
    this._botId = config.botId;
    this._botVersion = config.botVersion;
    this._description = config.description;
    this._intentId = config.intentId;
    this._localeId = config.localeId;
    this._name = config.name;
    this._region = config.region;
    this._slotTypeId = config.slotTypeId;
    this._multipleValuesSetting.internalValue = config.multipleValuesSetting;
    this._obfuscationSetting.internalValue = config.obfuscationSetting;
    this._subSlotSetting.internalValue = config.subSlotSetting;
    this._timeouts.internalValue = config.timeouts;
    this._valueElicitationSetting.internalValue = config.valueElicitationSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_id - computed: false, optional: false, required: true
  private _botId?: string; 
  public get botId() {
    return this.getStringAttribute('bot_id');
  }
  public set botId(value: string) {
    this._botId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botIdInput() {
    return this._botId;
  }

  // bot_version - computed: false, optional: false, required: true
  private _botVersion?: string; 
  public get botVersion() {
    return this.getStringAttribute('bot_version');
  }
  public set botVersion(value: string) {
    this._botVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botVersionInput() {
    return this._botVersion;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intent_id - computed: false, optional: false, required: true
  private _intentId?: string; 
  public get intentId() {
    return this.getStringAttribute('intent_id');
  }
  public set intentId(value: string) {
    this._intentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentIdInput() {
    return this._intentId;
  }

  // locale_id - computed: false, optional: false, required: true
  private _localeId?: string; 
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
  public set localeId(value: string) {
    this._localeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeIdInput() {
    return this._localeId;
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

  // slot_id - computed: true, optional: false, required: false
  public get slotId() {
    return this.getStringAttribute('slot_id');
  }

  // slot_type_id - computed: true, optional: true, required: false
  private _slotTypeId?: string; 
  public get slotTypeId() {
    return this.getStringAttribute('slot_type_id');
  }
  public set slotTypeId(value: string) {
    this._slotTypeId = value;
  }
  public resetSlotTypeId() {
    this._slotTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeIdInput() {
    return this._slotTypeId;
  }

  // multiple_values_setting - computed: false, optional: true, required: false
  private _multipleValuesSetting = new Lexv2ModelsSlotMultipleValuesSettingList(this, "multiple_values_setting", false);
  public get multipleValuesSetting() {
    return this._multipleValuesSetting;
  }
  public putMultipleValuesSetting(value: Lexv2ModelsSlotMultipleValuesSetting[] | cdktf.IResolvable) {
    this._multipleValuesSetting.internalValue = value;
  }
  public resetMultipleValuesSetting() {
    this._multipleValuesSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleValuesSettingInput() {
    return this._multipleValuesSetting.internalValue;
  }

  // obfuscation_setting - computed: false, optional: true, required: false
  private _obfuscationSetting = new Lexv2ModelsSlotObfuscationSettingList(this, "obfuscation_setting", false);
  public get obfuscationSetting() {
    return this._obfuscationSetting;
  }
  public putObfuscationSetting(value: Lexv2ModelsSlotObfuscationSetting[] | cdktf.IResolvable) {
    this._obfuscationSetting.internalValue = value;
  }
  public resetObfuscationSetting() {
    this._obfuscationSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obfuscationSettingInput() {
    return this._obfuscationSetting.internalValue;
  }

  // sub_slot_setting - computed: false, optional: true, required: false
  private _subSlotSetting = new Lexv2ModelsSlotSubSlotSettingList(this, "sub_slot_setting", false);
  public get subSlotSetting() {
    return this._subSlotSetting;
  }
  public putSubSlotSetting(value: Lexv2ModelsSlotSubSlotSetting[] | cdktf.IResolvable) {
    this._subSlotSetting.internalValue = value;
  }
  public resetSubSlotSetting() {
    this._subSlotSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSlotSettingInput() {
    return this._subSlotSetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Lexv2ModelsSlotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Lexv2ModelsSlotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // value_elicitation_setting - computed: false, optional: true, required: false
  private _valueElicitationSetting = new Lexv2ModelsSlotValueElicitationSettingList(this, "value_elicitation_setting", false);
  public get valueElicitationSetting() {
    return this._valueElicitationSetting;
  }
  public putValueElicitationSetting(value: Lexv2ModelsSlotValueElicitationSetting[] | cdktf.IResolvable) {
    this._valueElicitationSetting.internalValue = value;
  }
  public resetValueElicitationSetting() {
    this._valueElicitationSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueElicitationSettingInput() {
    return this._valueElicitationSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_id: cdktf.stringToTerraform(this._botId),
      bot_version: cdktf.stringToTerraform(this._botVersion),
      description: cdktf.stringToTerraform(this._description),
      intent_id: cdktf.stringToTerraform(this._intentId),
      locale_id: cdktf.stringToTerraform(this._localeId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      slot_type_id: cdktf.stringToTerraform(this._slotTypeId),
      multiple_values_setting: cdktf.listMapper(lexv2ModelsSlotMultipleValuesSettingToTerraform, true)(this._multipleValuesSetting.internalValue),
      obfuscation_setting: cdktf.listMapper(lexv2ModelsSlotObfuscationSettingToTerraform, true)(this._obfuscationSetting.internalValue),
      sub_slot_setting: cdktf.listMapper(lexv2ModelsSlotSubSlotSettingToTerraform, true)(this._subSlotSetting.internalValue),
      timeouts: lexv2ModelsSlotTimeoutsToTerraform(this._timeouts.internalValue),
      value_elicitation_setting: cdktf.listMapper(lexv2ModelsSlotValueElicitationSettingToTerraform, true)(this._valueElicitationSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_id: {
        value: cdktf.stringToHclTerraform(this._botId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_version: {
        value: cdktf.stringToHclTerraform(this._botVersion),
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
      intent_id: {
        value: cdktf.stringToHclTerraform(this._intentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale_id: {
        value: cdktf.stringToHclTerraform(this._localeId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_type_id: {
        value: cdktf.stringToHclTerraform(this._slotTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_values_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotMultipleValuesSettingToHclTerraform, true)(this._multipleValuesSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotMultipleValuesSettingList",
      },
      obfuscation_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotObfuscationSettingToHclTerraform, true)(this._obfuscationSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotObfuscationSettingList",
      },
      sub_slot_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotSubSlotSettingToHclTerraform, true)(this._subSlotSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotSubSlotSettingList",
      },
      timeouts: {
        value: lexv2ModelsSlotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Lexv2ModelsSlotTimeouts",
      },
      value_elicitation_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsSlotValueElicitationSettingToHclTerraform, true)(this._valueElicitationSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsSlotValueElicitationSettingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
