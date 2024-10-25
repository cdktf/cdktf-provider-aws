/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Lexv2ModelsBotLocaleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}
  */
  readonly botId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}
  */
  readonly botVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}
  */
  readonly localeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}
  */
  readonly nLuIntentConfidenceThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}
  */
  readonly timeouts?: Lexv2ModelsBotLocaleTimeouts;
  /**
  * voice_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}
  */
  readonly voiceSettings?: Lexv2ModelsBotLocaleVoiceSettings[] | cdktf.IResolvable;
}
export interface Lexv2ModelsBotLocaleTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#create Lexv2ModelsBotLocale#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#delete Lexv2ModelsBotLocale#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#update Lexv2ModelsBotLocale#update}
  */
  readonly update?: string;
}

export function lexv2ModelsBotLocaleTimeoutsToTerraform(struct?: Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lexv2ModelsBotLocaleTimeoutsToHclTerraform(struct?: Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsBotLocaleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface Lexv2ModelsBotLocaleVoiceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}
  */
  readonly voiceId: string;
}

export function lexv2ModelsBotLocaleVoiceSettingsToTerraform(struct?: Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine: cdktf.stringToTerraform(struct!.engine),
    voice_id: cdktf.stringToTerraform(struct!.voiceId),
  }
}


export function lexv2ModelsBotLocaleVoiceSettingsToHclTerraform(struct?: Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_id: {
      value: cdktf.stringToHclTerraform(struct!.voiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsBotLocaleVoiceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._voiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceId = this._voiceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engine = undefined;
      this._voiceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engine = value.engine;
      this._voiceId = value.voiceId;
    }
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // voice_id - computed: false, optional: false, required: true
  private _voiceId?: string; 
  public get voiceId() {
    return this.getStringAttribute('voice_id');
  }
  public set voiceId(value: string) {
    this._voiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceIdInput() {
    return this._voiceId;
  }
}

export class Lexv2ModelsBotLocaleVoiceSettingsList extends cdktf.ComplexList {
  public internalValue? : Lexv2ModelsBotLocaleVoiceSettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsBotLocaleVoiceSettingsOutputReference {
    return new Lexv2ModelsBotLocaleVoiceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale}
*/
export class Lexv2ModelsBotLocale extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lexv2models_bot_locale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lexv2ModelsBotLocale to import
  * @param importFromId The id of the existing Lexv2ModelsBotLocale that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lexv2ModelsBotLocale to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lexv2models_bot_locale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Lexv2ModelsBotLocaleConfig
  */
  public constructor(scope: Construct, id: string, config: Lexv2ModelsBotLocaleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lexv2models_bot_locale',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.73.0',
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
    this._botId = config.botId;
    this._botVersion = config.botVersion;
    this._description = config.description;
    this._localeId = config.localeId;
    this._nLuIntentConfidenceThreshold = config.nLuIntentConfidenceThreshold;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
    this._voiceSettings.internalValue = config.voiceSettings;
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

  // n_lu_intent_confidence_threshold - computed: false, optional: false, required: true
  private _nLuIntentConfidenceThreshold?: number; 
  public get nLuIntentConfidenceThreshold() {
    return this.getNumberAttribute('n_lu_intent_confidence_threshold');
  }
  public set nLuIntentConfidenceThreshold(value: number) {
    this._nLuIntentConfidenceThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nLuIntentConfidenceThresholdInput() {
    return this._nLuIntentConfidenceThreshold;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Lexv2ModelsBotLocaleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Lexv2ModelsBotLocaleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // voice_settings - computed: false, optional: true, required: false
  private _voiceSettings = new Lexv2ModelsBotLocaleVoiceSettingsList(this, "voice_settings", false);
  public get voiceSettings() {
    return this._voiceSettings;
  }
  public putVoiceSettings(value: Lexv2ModelsBotLocaleVoiceSettings[] | cdktf.IResolvable) {
    this._voiceSettings.internalValue = value;
  }
  public resetVoiceSettings() {
    this._voiceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceSettingsInput() {
    return this._voiceSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_id: cdktf.stringToTerraform(this._botId),
      bot_version: cdktf.stringToTerraform(this._botVersion),
      description: cdktf.stringToTerraform(this._description),
      locale_id: cdktf.stringToTerraform(this._localeId),
      n_lu_intent_confidence_threshold: cdktf.numberToTerraform(this._nLuIntentConfidenceThreshold),
      name: cdktf.stringToTerraform(this._name),
      timeouts: lexv2ModelsBotLocaleTimeoutsToTerraform(this._timeouts.internalValue),
      voice_settings: cdktf.listMapper(lexv2ModelsBotLocaleVoiceSettingsToTerraform, true)(this._voiceSettings.internalValue),
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
      locale_id: {
        value: cdktf.stringToHclTerraform(this._localeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n_lu_intent_confidence_threshold: {
        value: cdktf.numberToHclTerraform(this._nLuIntentConfidenceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lexv2ModelsBotLocaleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Lexv2ModelsBotLocaleTimeouts",
      },
      voice_settings: {
        value: cdktf.listMapperHcl(lexv2ModelsBotLocaleVoiceSettingsToHclTerraform, true)(this._voiceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsBotLocaleVoiceSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
