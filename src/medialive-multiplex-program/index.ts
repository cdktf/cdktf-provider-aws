// https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MedialiveMultiplexProgramConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}
  */
  readonly multiplexId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}
  */
  readonly programName: string;
  /**
  * multiplex_program_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_program_settings MedialiveMultiplexProgram#multiplex_program_settings}
  */
  readonly multiplexProgramSettings: MedialiveMultiplexProgramMultiplexProgramSettings;
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}
  */
  readonly serviceName: string;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference | MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._providerName = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._providerName = value.providerName;
      this._serviceName = value.serviceName;
    }
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}
  */
  readonly maximumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}
  */
  readonly minimumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}
  */
  readonly priority?: number;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_bitrate: cdktf.numberToTerraform(struct!.maximumBitrate),
    minimum_bitrate: cdktf.numberToTerraform(struct!.minimumBitrate),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitrate = this._maximumBitrate;
    }
    if (this._minimumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBitrate = this._minimumBitrate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBitrate = undefined;
      this._minimumBitrate = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBitrate = value.maximumBitrate;
      this._minimumBitrate = value.minimumBitrate;
      this._priority = value.priority;
    }
  }

  // maximum_bitrate - computed: true, optional: true, required: false
  private _maximumBitrate?: number; 
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }
  public set maximumBitrate(value: number) {
    this._maximumBitrate = value;
  }
  public resetMaximumBitrate() {
    this._maximumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitrateInput() {
    return this._maximumBitrate;
  }

  // minimum_bitrate - computed: true, optional: true, required: false
  private _minimumBitrate?: number; 
  public get minimumBitrate() {
    return this.getNumberAttribute('minimum_bitrate');
  }
  public set minimumBitrate(value: number) {
    this._minimumBitrate = value;
  }
  public resetMinimumBitrate() {
    this._minimumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBitrateInput() {
    return this._minimumBitrate;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}
  */
  readonly maximumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}
  */
  readonly minimumBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}
  */
  readonly priority?: number;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_bitrate: cdktf.numberToTerraform(struct!.maximumBitrate),
    minimum_bitrate: cdktf.numberToTerraform(struct!.minimumBitrate),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitrate = this._maximumBitrate;
    }
    if (this._minimumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBitrate = this._minimumBitrate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBitrate = undefined;
      this._minimumBitrate = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBitrate = value.maximumBitrate;
      this._minimumBitrate = value.minimumBitrate;
      this._priority = value.priority;
    }
  }

  // maximum_bitrate - computed: true, optional: true, required: false
  private _maximumBitrate?: number; 
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }
  public set maximumBitrate(value: number) {
    this._maximumBitrate = value;
  }
  public resetMaximumBitrate() {
    this._maximumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitrateInput() {
    return this._maximumBitrate;
  }

  // minimum_bitrate - computed: true, optional: true, required: false
  private _minimumBitrate?: number; 
  public get minimumBitrate() {
    return this.getNumberAttribute('minimum_bitrate');
  }
  public set minimumBitrate(value: number) {
    this._minimumBitrate = value;
  }
  public resetMinimumBitrate() {
    this._minimumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBitrateInput() {
    return this._minimumBitrate;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}
  */
  readonly constantBitrate?: number;
  /**
  * statemux_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#statemux_settings MedialiveMultiplexProgram#statemux_settings}
  */
  readonly statemuxSettings?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings;
  /**
  * statmux_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#statmux_settings MedialiveMultiplexProgram#statmux_settings}
  */
  readonly statmuxSettings?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant_bitrate: cdktf.numberToTerraform(struct!.constantBitrate),
    statemux_settings: medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsToTerraform(struct!.statemuxSettings),
    statmux_settings: medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform(struct!.statmuxSettings),
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantBitrate = this._constantBitrate;
    }
    if (this._statemuxSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statemuxSettings = this._statemuxSettings?.internalValue;
    }
    if (this._statmuxSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statmuxSettings = this._statmuxSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constantBitrate = undefined;
      this._statemuxSettings.internalValue = undefined;
      this._statmuxSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constantBitrate = value.constantBitrate;
      this._statemuxSettings.internalValue = value.statemuxSettings;
      this._statmuxSettings.internalValue = value.statmuxSettings;
    }
  }

  // constant_bitrate - computed: true, optional: true, required: false
  private _constantBitrate?: number; 
  public get constantBitrate() {
    return this.getNumberAttribute('constant_bitrate');
  }
  public set constantBitrate(value: number) {
    this._constantBitrate = value;
  }
  public resetConstantBitrate() {
    this._constantBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantBitrateInput() {
    return this._constantBitrate;
  }

  // statemux_settings - computed: false, optional: true, required: false
  private _statemuxSettings = new MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference(this, "statemux_settings");
  public get statemuxSettings() {
    return this._statemuxSettings;
  }
  public putStatemuxSettings(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings) {
    this._statemuxSettings.internalValue = value;
  }
  public resetStatemuxSettings() {
    this._statemuxSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statemuxSettingsInput() {
    return this._statemuxSettings.internalValue;
  }

  // statmux_settings - computed: false, optional: true, required: false
  private _statmuxSettings = new MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(this, "statmux_settings");
  public get statmuxSettings() {
    return this._statmuxSettings;
  }
  public putStatmuxSettings(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings) {
    this._statmuxSettings.internalValue = value;
  }
  public resetStatmuxSettings() {
    this._statmuxSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statmuxSettingsInput() {
    return this._statmuxSettings.internalValue;
  }
}
export interface MedialiveMultiplexProgramMultiplexProgramSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}
  */
  readonly preferredChannelPipeline: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}
  */
  readonly programNumber: number;
  /**
  * service_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_descriptor MedialiveMultiplexProgram#service_descriptor}
  */
  readonly serviceDescriptor?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor;
  /**
  * video_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#video_settings MedialiveMultiplexProgram#video_settings}
  */
  readonly videoSettings?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings;
}

export function medialiveMultiplexProgramMultiplexProgramSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference | MedialiveMultiplexProgramMultiplexProgramSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_channel_pipeline: cdktf.stringToTerraform(struct!.preferredChannelPipeline),
    program_number: cdktf.numberToTerraform(struct!.programNumber),
    service_descriptor: medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToTerraform(struct!.serviceDescriptor),
    video_settings: medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToTerraform(struct!.videoSettings),
  }
}

export class MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredChannelPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredChannelPipeline = this._preferredChannelPipeline;
    }
    if (this._programNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.programNumber = this._programNumber;
    }
    if (this._serviceDescriptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDescriptor = this._serviceDescriptor?.internalValue;
    }
    if (this._videoSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoSettings = this._videoSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredChannelPipeline = undefined;
      this._programNumber = undefined;
      this._serviceDescriptor.internalValue = undefined;
      this._videoSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredChannelPipeline = value.preferredChannelPipeline;
      this._programNumber = value.programNumber;
      this._serviceDescriptor.internalValue = value.serviceDescriptor;
      this._videoSettings.internalValue = value.videoSettings;
    }
  }

  // preferred_channel_pipeline - computed: false, optional: false, required: true
  private _preferredChannelPipeline?: string; 
  public get preferredChannelPipeline() {
    return this.getStringAttribute('preferred_channel_pipeline');
  }
  public set preferredChannelPipeline(value: string) {
    this._preferredChannelPipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredChannelPipelineInput() {
    return this._preferredChannelPipeline;
  }

  // program_number - computed: false, optional: false, required: true
  private _programNumber?: number; 
  public get programNumber() {
    return this.getNumberAttribute('program_number');
  }
  public set programNumber(value: number) {
    this._programNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumberInput() {
    return this._programNumber;
  }

  // service_descriptor - computed: false, optional: true, required: false
  private _serviceDescriptor = new MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference(this, "service_descriptor");
  public get serviceDescriptor() {
    return this._serviceDescriptor;
  }
  public putServiceDescriptor(value: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor) {
    this._serviceDescriptor.internalValue = value;
  }
  public resetServiceDescriptor() {
    this._serviceDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptorInput() {
    return this._serviceDescriptor.internalValue;
  }

  // video_settings - computed: false, optional: true, required: false
  private _videoSettings = new MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference(this, "video_settings");
  public get videoSettings() {
    return this._videoSettings;
  }
  public putVideoSettings(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings) {
    this._videoSettings.internalValue = value;
  }
  public resetVideoSettings() {
    this._videoSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsInput() {
    return this._videoSettings.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program aws_medialive_multiplex_program}
*/
export class MedialiveMultiplexProgram extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_medialive_multiplex_program";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program aws_medialive_multiplex_program} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveMultiplexProgramConfig
  */
  public constructor(scope: Construct, id: string, config: MedialiveMultiplexProgramConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_medialive_multiplex_program',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.40.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._multiplexId = config.multiplexId;
    this._programName = config.programName;
    this._multiplexProgramSettings.internalValue = config.multiplexProgramSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiplex_id - computed: false, optional: false, required: true
  private _multiplexId?: string; 
  public get multiplexId() {
    return this.getStringAttribute('multiplex_id');
  }
  public set multiplexId(value: string) {
    this._multiplexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexIdInput() {
    return this._multiplexId;
  }

  // program_name - computed: false, optional: false, required: true
  private _programName?: string; 
  public get programName() {
    return this.getStringAttribute('program_name');
  }
  public set programName(value: string) {
    this._programName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programNameInput() {
    return this._programName;
  }

  // multiplex_program_settings - computed: false, optional: false, required: true
  private _multiplexProgramSettings = new MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference(this, "multiplex_program_settings");
  public get multiplexProgramSettings() {
    return this._multiplexProgramSettings;
  }
  public putMultiplexProgramSettings(value: MedialiveMultiplexProgramMultiplexProgramSettings) {
    this._multiplexProgramSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexProgramSettingsInput() {
    return this._multiplexProgramSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      multiplex_id: cdktf.stringToTerraform(this._multiplexId),
      program_name: cdktf.stringToTerraform(this._programName),
      multiplex_program_settings: medialiveMultiplexProgramMultiplexProgramSettingsToTerraform(this._multiplexProgramSettings.internalValue),
    };
  }
}
