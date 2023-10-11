// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorStreamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}
  */
  readonly dataRetention: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}
  */
  readonly streamingNotificationTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}
  */
  readonly voiceConnectorId: string;
  /**
  * media_insights_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#media_insights_configuration ChimeVoiceConnectorStreaming#media_insights_configuration}
  */
  readonly mediaInsightsConfiguration?: ChimeVoiceConnectorStreamingMediaInsightsConfiguration;
}
export interface ChimeVoiceConnectorStreamingMediaInsightsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}
  */
  readonly configurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function chimeVoiceConnectorStreamingMediaInsightsConfigurationToTerraform(struct?: ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference | ChimeVoiceConnectorStreamingMediaInsightsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_arn: cdktf.stringToTerraform(struct!.configurationArn),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimeVoiceConnectorStreamingMediaInsightsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationArn = this._configurationArn;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimeVoiceConnectorStreamingMediaInsightsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationArn = undefined;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationArn = value.configurationArn;
      this._disabled = value.disabled;
    }
  }

  // configuration_arn - computed: false, optional: true, required: false
  private _configurationArn?: string; 
  public get configurationArn() {
    return this.getStringAttribute('configuration_arn');
  }
  public set configurationArn(value: string) {
    this._configurationArn = value;
  }
  public resetConfigurationArn() {
    this._configurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationArnInput() {
    return this._configurationArn;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming}
*/
export class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chime_voice_connector_streaming";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorStreamingConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorStreamingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_streaming',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._dataRetention = config.dataRetention;
    this._disabled = config.disabled;
    this._id = config.id;
    this._streamingNotificationTargets = config.streamingNotificationTargets;
    this._voiceConnectorId = config.voiceConnectorId;
    this._mediaInsightsConfiguration.internalValue = config.mediaInsightsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_retention - computed: false, optional: false, required: true
  private _dataRetention?: number; 
  public get dataRetention() {
    return this.getNumberAttribute('data_retention');
  }
  public set dataRetention(value: number) {
    this._dataRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInput() {
    return this._dataRetention;
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

  // streaming_notification_targets - computed: false, optional: true, required: false
  private _streamingNotificationTargets?: string[]; 
  public get streamingNotificationTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('streaming_notification_targets'));
  }
  public set streamingNotificationTargets(value: string[]) {
    this._streamingNotificationTargets = value;
  }
  public resetStreamingNotificationTargets() {
    this._streamingNotificationTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingNotificationTargetsInput() {
    return this._streamingNotificationTargets;
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

  // media_insights_configuration - computed: false, optional: true, required: false
  private _mediaInsightsConfiguration = new ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference(this, "media_insights_configuration");
  public get mediaInsightsConfiguration() {
    return this._mediaInsightsConfiguration;
  }
  public putMediaInsightsConfiguration(value: ChimeVoiceConnectorStreamingMediaInsightsConfiguration) {
    this._mediaInsightsConfiguration.internalValue = value;
  }
  public resetMediaInsightsConfiguration() {
    this._mediaInsightsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaInsightsConfigurationInput() {
    return this._mediaInsightsConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_retention: cdktf.numberToTerraform(this._dataRetention),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      streaming_notification_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streamingNotificationTargets),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      media_insights_configuration: chimeVoiceConnectorStreamingMediaInsightsConfigurationToTerraform(this._mediaInsightsConfiguration.internalValue),
    };
  }
}
