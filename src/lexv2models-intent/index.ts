// generated from terraform resource schema

import { Lexv2ModelsIntentClosingSetting, 
lexv2ModelsIntentClosingSettingToTerraform, 
lexv2ModelsIntentClosingSettingToHclTerraform, 
Lexv2ModelsIntentClosingSettingList, 
Lexv2ModelsIntentConfirmationSetting, 
lexv2ModelsIntentConfirmationSettingToTerraform, 
lexv2ModelsIntentConfirmationSettingToHclTerraform, 
Lexv2ModelsIntentConfirmationSettingList, 
Lexv2ModelsIntentDialogCodeHook, 
lexv2ModelsIntentDialogCodeHookToTerraform, 
lexv2ModelsIntentDialogCodeHookToHclTerraform, 
Lexv2ModelsIntentDialogCodeHookList, 
Lexv2ModelsIntentFulfillmentCodeHook, 
lexv2ModelsIntentFulfillmentCodeHookToTerraform, 
lexv2ModelsIntentFulfillmentCodeHookToHclTerraform, 
Lexv2ModelsIntentFulfillmentCodeHookList, 
Lexv2ModelsIntentInitialResponseSetting, 
lexv2ModelsIntentInitialResponseSettingToTerraform, 
lexv2ModelsIntentInitialResponseSettingToHclTerraform, 
Lexv2ModelsIntentInitialResponseSettingList, 
Lexv2ModelsIntentInputContext, 
lexv2ModelsIntentInputContextToTerraform, 
lexv2ModelsIntentInputContextToHclTerraform, 
Lexv2ModelsIntentInputContextList, 
Lexv2ModelsIntentKendraConfiguration, 
lexv2ModelsIntentKendraConfigurationToTerraform, 
lexv2ModelsIntentKendraConfigurationToHclTerraform, 
Lexv2ModelsIntentKendraConfigurationList, 
Lexv2ModelsIntentOutputContext, 
lexv2ModelsIntentOutputContextToTerraform, 
lexv2ModelsIntentOutputContextToHclTerraform, 
Lexv2ModelsIntentOutputContextList, 
Lexv2ModelsIntentSampleUtterance, 
lexv2ModelsIntentSampleUtteranceToTerraform, 
lexv2ModelsIntentSampleUtteranceToHclTerraform, 
Lexv2ModelsIntentSampleUtteranceList, 
Lexv2ModelsIntentSlotPriority, 
lexv2ModelsIntentSlotPriorityToTerraform, 
lexv2ModelsIntentSlotPriorityToHclTerraform, 
Lexv2ModelsIntentSlotPriorityList, 
Lexv2ModelsIntentTimeouts, 
lexv2ModelsIntentTimeoutsToTerraform, 
lexv2ModelsIntentTimeoutsToHclTerraform, 
Lexv2ModelsIntentTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsIntentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#bot_id Lexv2ModelsIntent#bot_id}
  */
  readonly botId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#bot_version Lexv2ModelsIntent#bot_version}
  */
  readonly botVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#description Lexv2ModelsIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#locale_id Lexv2ModelsIntent#locale_id}
  */
  readonly localeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#parent_intent_signature Lexv2ModelsIntent#parent_intent_signature}
  */
  readonly parentIntentSignature?: string;
  /**
  * closing_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#closing_setting Lexv2ModelsIntent#closing_setting}
  */
  readonly closingSetting?: Lexv2ModelsIntentClosingSetting[] | cdktf.IResolvable;
  /**
  * confirmation_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#confirmation_setting Lexv2ModelsIntent#confirmation_setting}
  */
  readonly confirmationSetting?: Lexv2ModelsIntentConfirmationSetting[] | cdktf.IResolvable;
  /**
  * dialog_code_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#dialog_code_hook Lexv2ModelsIntent#dialog_code_hook}
  */
  readonly dialogCodeHook?: Lexv2ModelsIntentDialogCodeHook[] | cdktf.IResolvable;
  /**
  * fulfillment_code_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#fulfillment_code_hook Lexv2ModelsIntent#fulfillment_code_hook}
  */
  readonly fulfillmentCodeHook?: Lexv2ModelsIntentFulfillmentCodeHook[] | cdktf.IResolvable;
  /**
  * initial_response_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#initial_response_setting Lexv2ModelsIntent#initial_response_setting}
  */
  readonly initialResponseSetting?: Lexv2ModelsIntentInitialResponseSetting[] | cdktf.IResolvable;
  /**
  * input_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#input_context Lexv2ModelsIntent#input_context}
  */
  readonly inputContext?: Lexv2ModelsIntentInputContext[] | cdktf.IResolvable;
  /**
  * kendra_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#kendra_configuration Lexv2ModelsIntent#kendra_configuration}
  */
  readonly kendraConfiguration?: Lexv2ModelsIntentKendraConfiguration[] | cdktf.IResolvable;
  /**
  * output_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#output_context Lexv2ModelsIntent#output_context}
  */
  readonly outputContext?: Lexv2ModelsIntentOutputContext[] | cdktf.IResolvable;
  /**
  * sample_utterance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#sample_utterance Lexv2ModelsIntent#sample_utterance}
  */
  readonly sampleUtterance?: Lexv2ModelsIntentSampleUtterance[] | cdktf.IResolvable;
  /**
  * slot_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#slot_priority Lexv2ModelsIntent#slot_priority}
  */
  readonly slotPriority?: Lexv2ModelsIntentSlotPriority[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#timeouts Lexv2ModelsIntent#timeouts}
  */
  readonly timeouts?: Lexv2ModelsIntentTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent aws_lexv2models_intent}
*/
export class Lexv2ModelsIntent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lexv2models_intent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lexv2ModelsIntent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lexv2ModelsIntent to import
  * @param importFromId The id of the existing Lexv2ModelsIntent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lexv2ModelsIntent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lexv2models_intent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/lexv2models_intent aws_lexv2models_intent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Lexv2ModelsIntentConfig
  */
  public constructor(scope: Construct, id: string, config: Lexv2ModelsIntentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lexv2models_intent',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.34.0',
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
    this._name = config.name;
    this._parentIntentSignature = config.parentIntentSignature;
    this._closingSetting.internalValue = config.closingSetting;
    this._confirmationSetting.internalValue = config.confirmationSetting;
    this._dialogCodeHook.internalValue = config.dialogCodeHook;
    this._fulfillmentCodeHook.internalValue = config.fulfillmentCodeHook;
    this._initialResponseSetting.internalValue = config.initialResponseSetting;
    this._inputContext.internalValue = config.inputContext;
    this._kendraConfiguration.internalValue = config.kendraConfiguration;
    this._outputContext.internalValue = config.outputContext;
    this._sampleUtterance.internalValue = config.sampleUtterance;
    this._slotPriority.internalValue = config.slotPriority;
    this._timeouts.internalValue = config.timeouts;
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

  // creation_date_time - computed: true, optional: false, required: false
  public get creationDateTime() {
    return this.getStringAttribute('creation_date_time');
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

  // intent_id - computed: true, optional: false, required: false
  public get intentId() {
    return this.getStringAttribute('intent_id');
  }

  // last_updated_date_time - computed: true, optional: false, required: false
  public get lastUpdatedDateTime() {
    return this.getStringAttribute('last_updated_date_time');
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

  // parent_intent_signature - computed: false, optional: true, required: false
  private _parentIntentSignature?: string; 
  public get parentIntentSignature() {
    return this.getStringAttribute('parent_intent_signature');
  }
  public set parentIntentSignature(value: string) {
    this._parentIntentSignature = value;
  }
  public resetParentIntentSignature() {
    this._parentIntentSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIntentSignatureInput() {
    return this._parentIntentSignature;
  }

  // closing_setting - computed: false, optional: true, required: false
  private _closingSetting = new Lexv2ModelsIntentClosingSettingList(this, "closing_setting", false);
  public get closingSetting() {
    return this._closingSetting;
  }
  public putClosingSetting(value: Lexv2ModelsIntentClosingSetting[] | cdktf.IResolvable) {
    this._closingSetting.internalValue = value;
  }
  public resetClosingSetting() {
    this._closingSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closingSettingInput() {
    return this._closingSetting.internalValue;
  }

  // confirmation_setting - computed: false, optional: true, required: false
  private _confirmationSetting = new Lexv2ModelsIntentConfirmationSettingList(this, "confirmation_setting", false);
  public get confirmationSetting() {
    return this._confirmationSetting;
  }
  public putConfirmationSetting(value: Lexv2ModelsIntentConfirmationSetting[] | cdktf.IResolvable) {
    this._confirmationSetting.internalValue = value;
  }
  public resetConfirmationSetting() {
    this._confirmationSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationSettingInput() {
    return this._confirmationSetting.internalValue;
  }

  // dialog_code_hook - computed: false, optional: true, required: false
  private _dialogCodeHook = new Lexv2ModelsIntentDialogCodeHookList(this, "dialog_code_hook", false);
  public get dialogCodeHook() {
    return this._dialogCodeHook;
  }
  public putDialogCodeHook(value: Lexv2ModelsIntentDialogCodeHook[] | cdktf.IResolvable) {
    this._dialogCodeHook.internalValue = value;
  }
  public resetDialogCodeHook() {
    this._dialogCodeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogCodeHookInput() {
    return this._dialogCodeHook.internalValue;
  }

  // fulfillment_code_hook - computed: false, optional: true, required: false
  private _fulfillmentCodeHook = new Lexv2ModelsIntentFulfillmentCodeHookList(this, "fulfillment_code_hook", false);
  public get fulfillmentCodeHook() {
    return this._fulfillmentCodeHook;
  }
  public putFulfillmentCodeHook(value: Lexv2ModelsIntentFulfillmentCodeHook[] | cdktf.IResolvable) {
    this._fulfillmentCodeHook.internalValue = value;
  }
  public resetFulfillmentCodeHook() {
    this._fulfillmentCodeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfillmentCodeHookInput() {
    return this._fulfillmentCodeHook.internalValue;
  }

  // initial_response_setting - computed: false, optional: true, required: false
  private _initialResponseSetting = new Lexv2ModelsIntentInitialResponseSettingList(this, "initial_response_setting", false);
  public get initialResponseSetting() {
    return this._initialResponseSetting;
  }
  public putInitialResponseSetting(value: Lexv2ModelsIntentInitialResponseSetting[] | cdktf.IResolvable) {
    this._initialResponseSetting.internalValue = value;
  }
  public resetInitialResponseSetting() {
    this._initialResponseSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialResponseSettingInput() {
    return this._initialResponseSetting.internalValue;
  }

  // input_context - computed: false, optional: true, required: false
  private _inputContext = new Lexv2ModelsIntentInputContextList(this, "input_context", false);
  public get inputContext() {
    return this._inputContext;
  }
  public putInputContext(value: Lexv2ModelsIntentInputContext[] | cdktf.IResolvable) {
    this._inputContext.internalValue = value;
  }
  public resetInputContext() {
    this._inputContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputContextInput() {
    return this._inputContext.internalValue;
  }

  // kendra_configuration - computed: false, optional: true, required: false
  private _kendraConfiguration = new Lexv2ModelsIntentKendraConfigurationList(this, "kendra_configuration", false);
  public get kendraConfiguration() {
    return this._kendraConfiguration;
  }
  public putKendraConfiguration(value: Lexv2ModelsIntentKendraConfiguration[] | cdktf.IResolvable) {
    this._kendraConfiguration.internalValue = value;
  }
  public resetKendraConfiguration() {
    this._kendraConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraConfigurationInput() {
    return this._kendraConfiguration.internalValue;
  }

  // output_context - computed: false, optional: true, required: false
  private _outputContext = new Lexv2ModelsIntentOutputContextList(this, "output_context", false);
  public get outputContext() {
    return this._outputContext;
  }
  public putOutputContext(value: Lexv2ModelsIntentOutputContext[] | cdktf.IResolvable) {
    this._outputContext.internalValue = value;
  }
  public resetOutputContext() {
    this._outputContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputContextInput() {
    return this._outputContext.internalValue;
  }

  // sample_utterance - computed: false, optional: true, required: false
  private _sampleUtterance = new Lexv2ModelsIntentSampleUtteranceList(this, "sample_utterance", false);
  public get sampleUtterance() {
    return this._sampleUtterance;
  }
  public putSampleUtterance(value: Lexv2ModelsIntentSampleUtterance[] | cdktf.IResolvable) {
    this._sampleUtterance.internalValue = value;
  }
  public resetSampleUtterance() {
    this._sampleUtterance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtteranceInput() {
    return this._sampleUtterance.internalValue;
  }

  // slot_priority - computed: false, optional: true, required: false
  private _slotPriority = new Lexv2ModelsIntentSlotPriorityList(this, "slot_priority", false);
  public get slotPriority() {
    return this._slotPriority;
  }
  public putSlotPriority(value: Lexv2ModelsIntentSlotPriority[] | cdktf.IResolvable) {
    this._slotPriority.internalValue = value;
  }
  public resetSlotPriority() {
    this._slotPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotPriorityInput() {
    return this._slotPriority.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Lexv2ModelsIntentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Lexv2ModelsIntentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      name: cdktf.stringToTerraform(this._name),
      parent_intent_signature: cdktf.stringToTerraform(this._parentIntentSignature),
      closing_setting: cdktf.listMapper(lexv2ModelsIntentClosingSettingToTerraform, true)(this._closingSetting.internalValue),
      confirmation_setting: cdktf.listMapper(lexv2ModelsIntentConfirmationSettingToTerraform, true)(this._confirmationSetting.internalValue),
      dialog_code_hook: cdktf.listMapper(lexv2ModelsIntentDialogCodeHookToTerraform, true)(this._dialogCodeHook.internalValue),
      fulfillment_code_hook: cdktf.listMapper(lexv2ModelsIntentFulfillmentCodeHookToTerraform, true)(this._fulfillmentCodeHook.internalValue),
      initial_response_setting: cdktf.listMapper(lexv2ModelsIntentInitialResponseSettingToTerraform, true)(this._initialResponseSetting.internalValue),
      input_context: cdktf.listMapper(lexv2ModelsIntentInputContextToTerraform, true)(this._inputContext.internalValue),
      kendra_configuration: cdktf.listMapper(lexv2ModelsIntentKendraConfigurationToTerraform, true)(this._kendraConfiguration.internalValue),
      output_context: cdktf.listMapper(lexv2ModelsIntentOutputContextToTerraform, true)(this._outputContext.internalValue),
      sample_utterance: cdktf.listMapper(lexv2ModelsIntentSampleUtteranceToTerraform, true)(this._sampleUtterance.internalValue),
      slot_priority: cdktf.listMapper(lexv2ModelsIntentSlotPriorityToTerraform, true)(this._slotPriority.internalValue),
      timeouts: lexv2ModelsIntentTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_intent_signature: {
        value: cdktf.stringToHclTerraform(this._parentIntentSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      closing_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentClosingSettingToHclTerraform, true)(this._closingSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentClosingSettingList",
      },
      confirmation_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentConfirmationSettingToHclTerraform, true)(this._confirmationSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentConfirmationSettingList",
      },
      dialog_code_hook: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentDialogCodeHookToHclTerraform, true)(this._dialogCodeHook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentDialogCodeHookList",
      },
      fulfillment_code_hook: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentFulfillmentCodeHookToHclTerraform, true)(this._fulfillmentCodeHook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentFulfillmentCodeHookList",
      },
      initial_response_setting: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentInitialResponseSettingToHclTerraform, true)(this._initialResponseSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentInitialResponseSettingList",
      },
      input_context: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentInputContextToHclTerraform, true)(this._inputContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentInputContextList",
      },
      kendra_configuration: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentKendraConfigurationToHclTerraform, true)(this._kendraConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentKendraConfigurationList",
      },
      output_context: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentOutputContextToHclTerraform, true)(this._outputContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentOutputContextList",
      },
      sample_utterance: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentSampleUtteranceToHclTerraform, true)(this._sampleUtterance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentSampleUtteranceList",
      },
      slot_priority: {
        value: cdktf.listMapperHcl(lexv2ModelsIntentSlotPriorityToHclTerraform, true)(this._slotPriority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Lexv2ModelsIntentSlotPriorityList",
      },
      timeouts: {
        value: lexv2ModelsIntentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Lexv2ModelsIntentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
