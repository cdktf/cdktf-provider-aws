/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorStreamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}
  */
  readonly dataRetention: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#region ChimeVoiceConnectorStreaming#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}
  */
  readonly streamingNotificationTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}
  */
  readonly voiceConnectorId: string;
  /**
  * media_insights_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#media_insights_configuration ChimeVoiceConnectorStreaming#media_insights_configuration}
  */
  readonly mediaInsightsConfiguration?: ChimeVoiceConnectorStreamingMediaInsightsConfiguration;
}
export interface ChimeVoiceConnectorStreamingMediaInsightsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}
  */
  readonly configurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
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


export function chimeVoiceConnectorStreamingMediaInsightsConfigurationToHclTerraform(struct?: ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference | ChimeVoiceConnectorStreamingMediaInsightsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_arn: {
      value: cdktf.stringToHclTerraform(struct!.configurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming}
*/
export class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chime_voice_connector_streaming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorStreaming to import
  * @param importFromId The id of the existing ChimeVoiceConnectorStreaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeVoiceConnectorStreaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chime_voice_connector_streaming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming} Resource
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
        providerVersion: '6.9.0',
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
    this._dataRetention = config.dataRetention;
    this._disabled = config.disabled;
    this._id = config.id;
    this._region = config.region;
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
      region: cdktf.stringToTerraform(this._region),
      streaming_notification_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streamingNotificationTargets),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      media_insights_configuration: chimeVoiceConnectorStreamingMediaInsightsConfigurationToTerraform(this._mediaInsightsConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_retention: {
        value: cdktf.numberToHclTerraform(this._dataRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      streaming_notification_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._streamingNotificationTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      voice_connector_id: {
        value: cdktf.stringToHclTerraform(this._voiceConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_insights_configuration: {
        value: chimeVoiceConnectorStreamingMediaInsightsConfigurationToHclTerraform(this._mediaInsightsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChimeVoiceConnectorStreamingMediaInsightsConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
