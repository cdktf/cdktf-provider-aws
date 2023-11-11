import * as cdktf from 'cdktf';
import { MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings,
medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsToTerraform,
MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference } from './structs0'
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_loss_threshold_msec MedialiveChannel#input_loss_threshold_msec}
  */
  readonly inputLossThresholdMsec?: number;
}

export function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_loss_threshold_msec: cdktf.numberToTerraform(struct!.inputLossThresholdMsec),
  }
}

export class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputLossThresholdMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLossThresholdMsec = this._inputLossThresholdMsec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputLossThresholdMsec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputLossThresholdMsec = value.inputLossThresholdMsec;
    }
  }

  // input_loss_threshold_msec - computed: false, optional: true, required: false
  private _inputLossThresholdMsec?: number; 
  public get inputLossThresholdMsec() {
    return this.getNumberAttribute('input_loss_threshold_msec');
  }
  public set inputLossThresholdMsec(value: number) {
    this._inputLossThresholdMsec = value;
  }
  public resetInputLossThresholdMsec() {
    this._inputLossThresholdMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLossThresholdMsecInput() {
    return this._inputLossThresholdMsec;
  }
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#black_detect_threshold MedialiveChannel#black_detect_threshold}
  */
  readonly blackDetectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#video_black_threshold_msec MedialiveChannel#video_black_threshold_msec}
  */
  readonly videoBlackThresholdMsec?: number;
}

export function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_detect_threshold: cdktf.numberToTerraform(struct!.blackDetectThreshold),
    video_black_threshold_msec: cdktf.numberToTerraform(struct!.videoBlackThresholdMsec),
  }
}

export class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackDetectThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackDetectThreshold = this._blackDetectThreshold;
    }
    if (this._videoBlackThresholdMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoBlackThresholdMsec = this._videoBlackThresholdMsec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blackDetectThreshold = undefined;
      this._videoBlackThresholdMsec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blackDetectThreshold = value.blackDetectThreshold;
      this._videoBlackThresholdMsec = value.videoBlackThresholdMsec;
    }
  }

  // black_detect_threshold - computed: false, optional: true, required: false
  private _blackDetectThreshold?: number; 
  public get blackDetectThreshold() {
    return this.getNumberAttribute('black_detect_threshold');
  }
  public set blackDetectThreshold(value: number) {
    this._blackDetectThreshold = value;
  }
  public resetBlackDetectThreshold() {
    this._blackDetectThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackDetectThresholdInput() {
    return this._blackDetectThreshold;
  }

  // video_black_threshold_msec - computed: false, optional: true, required: false
  private _videoBlackThresholdMsec?: number; 
  public get videoBlackThresholdMsec() {
    return this.getNumberAttribute('video_black_threshold_msec');
  }
  public set videoBlackThresholdMsec(value: number) {
    this._videoBlackThresholdMsec = value;
  }
  public resetVideoBlackThresholdMsec() {
    this._videoBlackThresholdMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoBlackThresholdMsecInput() {
    return this._videoBlackThresholdMsec;
  }
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings {
  /**
  * audio_silence_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#audio_silence_settings MedialiveChannel#audio_silence_settings}
  */
  readonly audioSilenceSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings;
  /**
  * input_loss_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_loss_settings MedialiveChannel#input_loss_settings}
  */
  readonly inputLossSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings;
  /**
  * video_black_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#video_black_settings MedialiveChannel#video_black_settings}
  */
  readonly videoBlackSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings;
}

export function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_silence_settings: medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsToTerraform(struct!.audioSilenceSettings),
    input_loss_settings: medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsToTerraform(struct!.inputLossSettings),
    video_black_settings: medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsToTerraform(struct!.videoBlackSettings),
  }
}

export class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioSilenceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSilenceSettings = this._audioSilenceSettings?.internalValue;
    }
    if (this._inputLossSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLossSettings = this._inputLossSettings?.internalValue;
    }
    if (this._videoBlackSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoBlackSettings = this._videoBlackSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioSilenceSettings.internalValue = undefined;
      this._inputLossSettings.internalValue = undefined;
      this._videoBlackSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioSilenceSettings.internalValue = value.audioSilenceSettings;
      this._inputLossSettings.internalValue = value.inputLossSettings;
      this._videoBlackSettings.internalValue = value.videoBlackSettings;
    }
  }

  // audio_silence_settings - computed: false, optional: true, required: false
  private _audioSilenceSettings = new MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference(this, "audio_silence_settings");
  public get audioSilenceSettings() {
    return this._audioSilenceSettings;
  }
  public putAudioSilenceSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings) {
    this._audioSilenceSettings.internalValue = value;
  }
  public resetAudioSilenceSettings() {
    this._audioSilenceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSilenceSettingsInput() {
    return this._audioSilenceSettings.internalValue;
  }

  // input_loss_settings - computed: false, optional: true, required: false
  private _inputLossSettings = new MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsOutputReference(this, "input_loss_settings");
  public get inputLossSettings() {
    return this._inputLossSettings;
  }
  public putInputLossSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings) {
    this._inputLossSettings.internalValue = value;
  }
  public resetInputLossSettings() {
    this._inputLossSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLossSettingsInput() {
    return this._inputLossSettings.internalValue;
  }

  // video_black_settings - computed: false, optional: true, required: false
  private _videoBlackSettings = new MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsOutputReference(this, "video_black_settings");
  public get videoBlackSettings() {
    return this._videoBlackSettings;
  }
  public putVideoBlackSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings) {
    this._videoBlackSettings.internalValue = value;
  }
  public resetVideoBlackSettings() {
    this._videoBlackSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoBlackSettingsInput() {
    return this._videoBlackSettings.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition {
  /**
  * failover_condition_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#failover_condition_settings MedialiveChannel#failover_condition_settings}
  */
  readonly failoverConditionSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings;
}

export function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_condition_settings: medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsToTerraform(struct!.failoverConditionSettings),
  }
}

export class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverConditionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverConditionSettings = this._failoverConditionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverConditionSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverConditionSettings.internalValue = value.failoverConditionSettings;
    }
  }

  // failover_condition_settings - computed: false, optional: true, required: false
  private _failoverConditionSettings = new MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsOutputReference(this, "failover_condition_settings");
  public get failoverConditionSettings() {
    return this._failoverConditionSettings;
  }
  public putFailoverConditionSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings) {
    this._failoverConditionSettings.internalValue = value;
  }
  public resetFailoverConditionSettings() {
    this._failoverConditionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverConditionSettingsInput() {
    return this._failoverConditionSettings.internalValue;
  }
}

export class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionOutputReference {
    return new MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#error_clear_time_msec MedialiveChannel#error_clear_time_msec}
  */
  readonly errorClearTimeMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_preference MedialiveChannel#input_preference}
  */
  readonly inputPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#secondary_input_id MedialiveChannel#secondary_input_id}
  */
  readonly secondaryInputId: string;
  /**
  * failover_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#failover_condition MedialiveChannel#failover_condition}
  */
  readonly failoverCondition?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition[] | cdktf.IResolvable;
}

export function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_clear_time_msec: cdktf.numberToTerraform(struct!.errorClearTimeMsec),
    input_preference: cdktf.stringToTerraform(struct!.inputPreference),
    secondary_input_id: cdktf.stringToTerraform(struct!.secondaryInputId),
    failover_condition: cdktf.listMapper(medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionToTerraform, true)(struct!.failoverCondition),
  }
}

export class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorClearTimeMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorClearTimeMsec = this._errorClearTimeMsec;
    }
    if (this._inputPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPreference = this._inputPreference;
    }
    if (this._secondaryInputId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryInputId = this._secondaryInputId;
    }
    if (this._failoverCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverCondition = this._failoverCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorClearTimeMsec = undefined;
      this._inputPreference = undefined;
      this._secondaryInputId = undefined;
      this._failoverCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorClearTimeMsec = value.errorClearTimeMsec;
      this._inputPreference = value.inputPreference;
      this._secondaryInputId = value.secondaryInputId;
      this._failoverCondition.internalValue = value.failoverCondition;
    }
  }

  // error_clear_time_msec - computed: false, optional: true, required: false
  private _errorClearTimeMsec?: number; 
  public get errorClearTimeMsec() {
    return this.getNumberAttribute('error_clear_time_msec');
  }
  public set errorClearTimeMsec(value: number) {
    this._errorClearTimeMsec = value;
  }
  public resetErrorClearTimeMsec() {
    this._errorClearTimeMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorClearTimeMsecInput() {
    return this._errorClearTimeMsec;
  }

  // input_preference - computed: false, optional: true, required: false
  private _inputPreference?: string; 
  public get inputPreference() {
    return this.getStringAttribute('input_preference');
  }
  public set inputPreference(value: string) {
    this._inputPreference = value;
  }
  public resetInputPreference() {
    this._inputPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPreferenceInput() {
    return this._inputPreference;
  }

  // secondary_input_id - computed: false, optional: false, required: true
  private _secondaryInputId?: string; 
  public get secondaryInputId() {
    return this.getStringAttribute('secondary_input_id');
  }
  public set secondaryInputId(value: string) {
    this._secondaryInputId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInputIdInput() {
    return this._secondaryInputId;
  }

  // failover_condition - computed: false, optional: true, required: false
  private _failoverCondition = new MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionList(this, "failover_condition", true);
  public get failoverCondition() {
    return this._failoverCondition;
  }
  public putFailoverCondition(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition[] | cdktf.IResolvable) {
    this._failoverCondition.internalValue = value;
  }
  public resetFailoverCondition() {
    this._failoverCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverConditionInput() {
    return this._failoverCondition.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#group_id MedialiveChannel#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._name = value.name;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#language_code MedialiveChannel#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#language_selection_policy MedialiveChannel#language_selection_policy}
  */
  readonly languageSelectionPolicy?: string;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    language_selection_policy: cdktf.stringToTerraform(struct!.languageSelectionPolicy),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._languageSelectionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageSelectionPolicy = this._languageSelectionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._languageCode = undefined;
      this._languageSelectionPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._languageCode = value.languageCode;
      this._languageSelectionPolicy = value.languageSelectionPolicy;
    }
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // language_selection_policy - computed: false, optional: true, required: false
  private _languageSelectionPolicy?: string; 
  public get languageSelectionPolicy() {
    return this.getStringAttribute('language_selection_policy');
  }
  public set languageSelectionPolicy(value: string) {
    this._languageSelectionPolicy = value;
  }
  public resetLanguageSelectionPolicy() {
    this._languageSelectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageSelectionPolicyInput() {
    return this._languageSelectionPolicy;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#pid MedialiveChannel#pid}
  */
  readonly pid: number;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pid: cdktf.numberToTerraform(struct!.pid),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pid = value.pid;
    }
  }

  // pid - computed: false, optional: false, required: true
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#program_selection MedialiveChannel#program_selection}
  */
  readonly programSelection: string;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    program_selection: cdktf.stringToTerraform(struct!.programSelection),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._programSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.programSelection = this._programSelection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._programSelection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._programSelection = value.programSelection;
    }
  }

  // program_selection - computed: false, optional: false, required: true
  private _programSelection?: string; 
  public get programSelection() {
    return this.getStringAttribute('program_selection');
  }
  public set programSelection(value: string) {
    this._programSelection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programSelectionInput() {
    return this._programSelection;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#track MedialiveChannel#track}
  */
  readonly track: number;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    track: cdktf.numberToTerraform(struct!.track),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._track = value.track;
    }
  }

  // track - computed: false, optional: false, required: true
  private _track?: number; 
  public get track() {
    return this.getNumberAttribute('track');
  }
  public set track(value: number) {
    this._track = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksOutputReference {
    return new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection {
  /**
  * dolby_e_decode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#dolby_e_decode MedialiveChannel#dolby_e_decode}
  */
  readonly dolbyEDecode?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode;
  /**
  * tracks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#tracks MedialiveChannel#tracks}
  */
  readonly tracks: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks[] | cdktf.IResolvable;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dolby_e_decode: medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeToTerraform(struct!.dolbyEDecode),
    tracks: cdktf.listMapper(medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksToTerraform, true)(struct!.tracks),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dolbyEDecode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dolbyEDecode = this._dolbyEDecode?.internalValue;
    }
    if (this._tracks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracks = this._tracks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dolbyEDecode.internalValue = undefined;
      this._tracks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dolbyEDecode.internalValue = value.dolbyEDecode;
      this._tracks.internalValue = value.tracks;
    }
  }

  // dolby_e_decode - computed: false, optional: true, required: false
  private _dolbyEDecode = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeOutputReference(this, "dolby_e_decode");
  public get dolbyEDecode() {
    return this._dolbyEDecode;
  }
  public putDolbyEDecode(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode) {
    this._dolbyEDecode.internalValue = value;
  }
  public resetDolbyEDecode() {
    this._dolbyEDecode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dolbyEDecodeInput() {
    return this._dolbyEDecode.internalValue;
  }

  // tracks - computed: false, optional: false, required: true
  private _tracks = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksList(this, "tracks", true);
  public get tracks() {
    return this._tracks;
  }
  public putTracks(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks[] | cdktf.IResolvable) {
    this._tracks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tracksInput() {
    return this._tracks.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings {
  /**
  * audio_hls_rendition_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#audio_hls_rendition_selection MedialiveChannel#audio_hls_rendition_selection}
  */
  readonly audioHlsRenditionSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection;
  /**
  * audio_language_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#audio_language_selection MedialiveChannel#audio_language_selection}
  */
  readonly audioLanguageSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection;
  /**
  * audio_pid_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#audio_pid_selection MedialiveChannel#audio_pid_selection}
  */
  readonly audioPidSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection;
  /**
  * audio_track_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#audio_track_selection MedialiveChannel#audio_track_selection}
  */
  readonly audioTrackSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_hls_rendition_selection: medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionToTerraform(struct!.audioHlsRenditionSelection),
    audio_language_selection: medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionToTerraform(struct!.audioLanguageSelection),
    audio_pid_selection: medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionToTerraform(struct!.audioPidSelection),
    audio_track_selection: medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionToTerraform(struct!.audioTrackSelection),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioHlsRenditionSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioHlsRenditionSelection = this._audioHlsRenditionSelection?.internalValue;
    }
    if (this._audioLanguageSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioLanguageSelection = this._audioLanguageSelection?.internalValue;
    }
    if (this._audioPidSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioPidSelection = this._audioPidSelection?.internalValue;
    }
    if (this._audioTrackSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioTrackSelection = this._audioTrackSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioHlsRenditionSelection.internalValue = undefined;
      this._audioLanguageSelection.internalValue = undefined;
      this._audioPidSelection.internalValue = undefined;
      this._audioTrackSelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioHlsRenditionSelection.internalValue = value.audioHlsRenditionSelection;
      this._audioLanguageSelection.internalValue = value.audioLanguageSelection;
      this._audioPidSelection.internalValue = value.audioPidSelection;
      this._audioTrackSelection.internalValue = value.audioTrackSelection;
    }
  }

  // audio_hls_rendition_selection - computed: false, optional: true, required: false
  private _audioHlsRenditionSelection = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionOutputReference(this, "audio_hls_rendition_selection");
  public get audioHlsRenditionSelection() {
    return this._audioHlsRenditionSelection;
  }
  public putAudioHlsRenditionSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection) {
    this._audioHlsRenditionSelection.internalValue = value;
  }
  public resetAudioHlsRenditionSelection() {
    this._audioHlsRenditionSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioHlsRenditionSelectionInput() {
    return this._audioHlsRenditionSelection.internalValue;
  }

  // audio_language_selection - computed: false, optional: true, required: false
  private _audioLanguageSelection = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionOutputReference(this, "audio_language_selection");
  public get audioLanguageSelection() {
    return this._audioLanguageSelection;
  }
  public putAudioLanguageSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection) {
    this._audioLanguageSelection.internalValue = value;
  }
  public resetAudioLanguageSelection() {
    this._audioLanguageSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioLanguageSelectionInput() {
    return this._audioLanguageSelection.internalValue;
  }

  // audio_pid_selection - computed: false, optional: true, required: false
  private _audioPidSelection = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionOutputReference(this, "audio_pid_selection");
  public get audioPidSelection() {
    return this._audioPidSelection;
  }
  public putAudioPidSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection) {
    this._audioPidSelection.internalValue = value;
  }
  public resetAudioPidSelection() {
    this._audioPidSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioPidSelectionInput() {
    return this._audioPidSelection.internalValue;
  }

  // audio_track_selection - computed: false, optional: true, required: false
  private _audioTrackSelection = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference(this, "audio_track_selection");
  public get audioTrackSelection() {
    return this._audioTrackSelection;
  }
  public putAudioTrackSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection) {
    this._audioTrackSelection.internalValue = value;
  }
  public resetAudioTrackSelection() {
    this._audioTrackSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTrackSelectionInput() {
    return this._audioTrackSelection.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * selector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#selector_settings MedialiveChannel#selector_settings}
  */
  readonly selectorSettings?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector_settings: medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsToTerraform(struct!.selectorSettings),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorSettings = this._selectorSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selectorSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selectorSettings.internalValue = value.selectorSettings;
    }
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

  // selector_settings - computed: false, optional: true, required: false
  private _selectorSettings = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsOutputReference(this, "selector_settings");
  public get selectorSettings() {
    return this._selectorSettings;
  }
  public putSelectorSettings(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings) {
    this._selectorSettings.internalValue = value;
  }
  public resetSelectorSettings() {
    this._selectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorSettingsInput() {
    return this._selectorSettings.internalValue;
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorOutputReference {
    return new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#source_ancillary_channel_number MedialiveChannel#source_ancillary_channel_number}
  */
  readonly sourceAncillaryChannelNumber?: number;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ancillary_channel_number: cdktf.numberToTerraform(struct!.sourceAncillaryChannelNumber),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAncillaryChannelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAncillaryChannelNumber = this._sourceAncillaryChannelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceAncillaryChannelNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceAncillaryChannelNumber = value.sourceAncillaryChannelNumber;
    }
  }

  // source_ancillary_channel_number - computed: false, optional: true, required: false
  private _sourceAncillaryChannelNumber?: number; 
  public get sourceAncillaryChannelNumber() {
    return this.getNumberAttribute('source_ancillary_channel_number');
  }
  public set sourceAncillaryChannelNumber(value: number) {
    this._sourceAncillaryChannelNumber = value;
  }
  public resetSourceAncillaryChannelNumber() {
    this._sourceAncillaryChannelNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAncillaryChannelNumberInput() {
    return this._sourceAncillaryChannelNumber;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings {
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#ocr_language MedialiveChannel#ocr_language}
  */
  readonly ocrLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#pid MedialiveChannel#pid}
  */
  readonly pid?: number;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocr_language: cdktf.stringToTerraform(struct!.ocrLanguage),
    pid: cdktf.numberToTerraform(struct!.pid),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocrLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrLanguage = this._ocrLanguage;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ocrLanguage = undefined;
      this._pid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ocrLanguage = value.ocrLanguage;
      this._pid = value.pid;
    }
  }

  // ocr_language - computed: false, optional: true, required: false
  private _ocrLanguage?: string; 
  public get ocrLanguage() {
    return this.getStringAttribute('ocr_language');
  }
  public set ocrLanguage(value: string) {
    this._ocrLanguage = value;
  }
  public resetOcrLanguage() {
    this._ocrLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrLanguageInput() {
    return this._ocrLanguage;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#convert_608_to_708 MedialiveChannel#convert_608_to_708}
  */
  readonly convert608To708?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#scte20_detection MedialiveChannel#scte20_detection}
  */
  readonly scte20Detection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#source_608_channel_number MedialiveChannel#source_608_channel_number}
  */
  readonly source608ChannelNumber?: number;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert_608_to_708: cdktf.stringToTerraform(struct!.convert608To708),
    scte20_detection: cdktf.stringToTerraform(struct!.scte20Detection),
    source_608_channel_number: cdktf.numberToTerraform(struct!.source608ChannelNumber),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convert608To708 !== undefined) {
      hasAnyValues = true;
      internalValueResult.convert608To708 = this._convert608To708;
    }
    if (this._scte20Detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte20Detection = this._scte20Detection;
    }
    if (this._source608ChannelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.source608ChannelNumber = this._source608ChannelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._convert608To708 = undefined;
      this._scte20Detection = undefined;
      this._source608ChannelNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._convert608To708 = value.convert608To708;
      this._scte20Detection = value.scte20Detection;
      this._source608ChannelNumber = value.source608ChannelNumber;
    }
  }

  // convert_608_to_708 - computed: false, optional: true, required: false
  private _convert608To708?: string; 
  public get convert608To708() {
    return this.getStringAttribute('convert_608_to_708');
  }
  public set convert608To708(value: string) {
    this._convert608To708 = value;
  }
  public resetConvert608To708() {
    this._convert608To708 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convert608To708Input() {
    return this._convert608To708;
  }

  // scte20_detection - computed: false, optional: true, required: false
  private _scte20Detection?: string; 
  public get scte20Detection() {
    return this.getStringAttribute('scte20_detection');
  }
  public set scte20Detection(value: string) {
    this._scte20Detection = value;
  }
  public resetScte20Detection() {
    this._scte20Detection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte20DetectionInput() {
    return this._scte20Detection;
  }

  // source_608_channel_number - computed: false, optional: true, required: false
  private _source608ChannelNumber?: number; 
  public get source608ChannelNumber() {
    return this.getNumberAttribute('source_608_channel_number');
  }
  public set source608ChannelNumber(value: number) {
    this._source608ChannelNumber = value;
  }
  public resetSource608ChannelNumber() {
    this._source608ChannelNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source608ChannelNumberInput() {
    return this._source608ChannelNumber;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#convert_608_to_708 MedialiveChannel#convert_608_to_708}
  */
  readonly convert608To708?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#source_608_channel_number MedialiveChannel#source_608_channel_number}
  */
  readonly source608ChannelNumber?: number;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert_608_to_708: cdktf.stringToTerraform(struct!.convert608To708),
    source_608_channel_number: cdktf.numberToTerraform(struct!.source608ChannelNumber),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convert608To708 !== undefined) {
      hasAnyValues = true;
      internalValueResult.convert608To708 = this._convert608To708;
    }
    if (this._source608ChannelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.source608ChannelNumber = this._source608ChannelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._convert608To708 = undefined;
      this._source608ChannelNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._convert608To708 = value.convert608To708;
      this._source608ChannelNumber = value.source608ChannelNumber;
    }
  }

  // convert_608_to_708 - computed: false, optional: true, required: false
  private _convert608To708?: string; 
  public get convert608To708() {
    return this.getStringAttribute('convert_608_to_708');
  }
  public set convert608To708(value: string) {
    this._convert608To708 = value;
  }
  public resetConvert608To708() {
    this._convert608To708 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convert608To708Input() {
    return this._convert608To708;
  }

  // source_608_channel_number - computed: false, optional: true, required: false
  private _source608ChannelNumber?: number; 
  public get source608ChannelNumber() {
    return this.getNumberAttribute('source_608_channel_number');
  }
  public set source608ChannelNumber(value: number) {
    this._source608ChannelNumber = value;
  }
  public resetSource608ChannelNumber() {
    this._source608ChannelNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source608ChannelNumberInput() {
    return this._source608ChannelNumber;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#ocr_language MedialiveChannel#ocr_language}
  */
  readonly ocrLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#pid MedialiveChannel#pid}
  */
  readonly pid?: number;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocr_language: cdktf.stringToTerraform(struct!.ocrLanguage),
    pid: cdktf.numberToTerraform(struct!.pid),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocrLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrLanguage = this._ocrLanguage;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ocrLanguage = undefined;
      this._pid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ocrLanguage = value.ocrLanguage;
      this._pid = value.pid;
    }
  }

  // ocr_language - computed: false, optional: true, required: false
  private _ocrLanguage?: string; 
  public get ocrLanguage() {
    return this.getStringAttribute('ocr_language');
  }
  public set ocrLanguage(value: string) {
    this._ocrLanguage = value;
  }
  public resetOcrLanguage() {
    this._ocrLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrLanguageInput() {
    return this._ocrLanguage;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: number; 
  public get pid() {
    return this.getNumberAttribute('pid');
  }
  public set pid(value: number) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#height MedialiveChannel#height}
  */
  readonly height: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#left_offset MedialiveChannel#left_offset}
  */
  readonly leftOffset: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#top_offset MedialiveChannel#top_offset}
  */
  readonly topOffset: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#width MedialiveChannel#width}
  */
  readonly width: number;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    left_offset: cdktf.numberToTerraform(struct!.leftOffset),
    top_offset: cdktf.numberToTerraform(struct!.topOffset),
    width: cdktf.numberToTerraform(struct!.width),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._leftOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftOffset = this._leftOffset;
    }
    if (this._topOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.topOffset = this._topOffset;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._leftOffset = undefined;
      this._topOffset = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._leftOffset = value.leftOffset;
      this._topOffset = value.topOffset;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // left_offset - computed: false, optional: false, required: true
  private _leftOffset?: number; 
  public get leftOffset() {
    return this.getNumberAttribute('left_offset');
  }
  public set leftOffset(value: number) {
    this._leftOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftOffsetInput() {
    return this._leftOffset;
  }

  // top_offset - computed: false, optional: false, required: true
  private _topOffset?: number; 
  public get topOffset() {
    return this.getNumberAttribute('top_offset');
  }
  public set topOffset(value: number) {
    this._topOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topOffsetInput() {
    return this._topOffset;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#page_number MedialiveChannel#page_number}
  */
  readonly pageNumber?: string;
  /**
  * output_rectangle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#output_rectangle MedialiveChannel#output_rectangle}
  */
  readonly outputRectangle?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_number: cdktf.stringToTerraform(struct!.pageNumber),
    output_rectangle: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleToTerraform(struct!.outputRectangle),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageNumber = this._pageNumber;
    }
    if (this._outputRectangle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputRectangle = this._outputRectangle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageNumber = undefined;
      this._outputRectangle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageNumber = value.pageNumber;
      this._outputRectangle.internalValue = value.outputRectangle;
    }
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: string; 
  public get pageNumber() {
    return this.getStringAttribute('page_number');
  }
  public set pageNumber(value: string) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // output_rectangle - computed: false, optional: true, required: false
  private _outputRectangle = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleOutputReference(this, "output_rectangle");
  public get outputRectangle() {
    return this._outputRectangle;
  }
  public putOutputRectangle(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle) {
    this._outputRectangle.internalValue = value;
  }
  public resetOutputRectangle() {
    this._outputRectangle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputRectangleInput() {
    return this._outputRectangle.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings {
  /**
  * ancillary_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#ancillary_source_settings MedialiveChannel#ancillary_source_settings}
  */
  readonly ancillarySourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings;
  /**
  * arib_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#arib_source_settings MedialiveChannel#arib_source_settings}
  */
  readonly aribSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings;
  /**
  * dvb_sub_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#dvb_sub_source_settings MedialiveChannel#dvb_sub_source_settings}
  */
  readonly dvbSubSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings;
  /**
  * embedded_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#embedded_source_settings MedialiveChannel#embedded_source_settings}
  */
  readonly embeddedSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings;
  /**
  * scte20_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#scte20_source_settings MedialiveChannel#scte20_source_settings}
  */
  readonly scte20SourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings;
  /**
  * scte27_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#scte27_source_settings MedialiveChannel#scte27_source_settings}
  */
  readonly scte27SourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings;
  /**
  * teletext_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#teletext_source_settings MedialiveChannel#teletext_source_settings}
  */
  readonly teletextSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ancillary_source_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsToTerraform(struct!.ancillarySourceSettings),
    arib_source_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsToTerraform(struct!.aribSourceSettings),
    dvb_sub_source_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsToTerraform(struct!.dvbSubSourceSettings),
    embedded_source_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsToTerraform(struct!.embeddedSourceSettings),
    scte20_source_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsToTerraform(struct!.scte20SourceSettings),
    scte27_source_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsToTerraform(struct!.scte27SourceSettings),
    teletext_source_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsToTerraform(struct!.teletextSourceSettings),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ancillarySourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancillarySourceSettings = this._ancillarySourceSettings?.internalValue;
    }
    if (this._aribSourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aribSourceSettings = this._aribSourceSettings?.internalValue;
    }
    if (this._dvbSubSourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbSubSourceSettings = this._dvbSubSourceSettings?.internalValue;
    }
    if (this._embeddedSourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddedSourceSettings = this._embeddedSourceSettings?.internalValue;
    }
    if (this._scte20SourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte20SourceSettings = this._scte20SourceSettings?.internalValue;
    }
    if (this._scte27SourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte27SourceSettings = this._scte27SourceSettings?.internalValue;
    }
    if (this._teletextSourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teletextSourceSettings = this._teletextSourceSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ancillarySourceSettings.internalValue = undefined;
      this._aribSourceSettings.internalValue = undefined;
      this._dvbSubSourceSettings.internalValue = undefined;
      this._embeddedSourceSettings.internalValue = undefined;
      this._scte20SourceSettings.internalValue = undefined;
      this._scte27SourceSettings.internalValue = undefined;
      this._teletextSourceSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ancillarySourceSettings.internalValue = value.ancillarySourceSettings;
      this._aribSourceSettings.internalValue = value.aribSourceSettings;
      this._dvbSubSourceSettings.internalValue = value.dvbSubSourceSettings;
      this._embeddedSourceSettings.internalValue = value.embeddedSourceSettings;
      this._scte20SourceSettings.internalValue = value.scte20SourceSettings;
      this._scte27SourceSettings.internalValue = value.scte27SourceSettings;
      this._teletextSourceSettings.internalValue = value.teletextSourceSettings;
    }
  }

  // ancillary_source_settings - computed: false, optional: true, required: false
  private _ancillarySourceSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsOutputReference(this, "ancillary_source_settings");
  public get ancillarySourceSettings() {
    return this._ancillarySourceSettings;
  }
  public putAncillarySourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings) {
    this._ancillarySourceSettings.internalValue = value;
  }
  public resetAncillarySourceSettings() {
    this._ancillarySourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancillarySourceSettingsInput() {
    return this._ancillarySourceSettings.internalValue;
  }

  // arib_source_settings - computed: false, optional: true, required: false
  private _aribSourceSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsOutputReference(this, "arib_source_settings");
  public get aribSourceSettings() {
    return this._aribSourceSettings;
  }
  public putAribSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings) {
    this._aribSourceSettings.internalValue = value;
  }
  public resetAribSourceSettings() {
    this._aribSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aribSourceSettingsInput() {
    return this._aribSourceSettings.internalValue;
  }

  // dvb_sub_source_settings - computed: false, optional: true, required: false
  private _dvbSubSourceSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsOutputReference(this, "dvb_sub_source_settings");
  public get dvbSubSourceSettings() {
    return this._dvbSubSourceSettings;
  }
  public putDvbSubSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings) {
    this._dvbSubSourceSettings.internalValue = value;
  }
  public resetDvbSubSourceSettings() {
    this._dvbSubSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbSubSourceSettingsInput() {
    return this._dvbSubSourceSettings.internalValue;
  }

  // embedded_source_settings - computed: false, optional: true, required: false
  private _embeddedSourceSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsOutputReference(this, "embedded_source_settings");
  public get embeddedSourceSettings() {
    return this._embeddedSourceSettings;
  }
  public putEmbeddedSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings) {
    this._embeddedSourceSettings.internalValue = value;
  }
  public resetEmbeddedSourceSettings() {
    this._embeddedSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedSourceSettingsInput() {
    return this._embeddedSourceSettings.internalValue;
  }

  // scte20_source_settings - computed: false, optional: true, required: false
  private _scte20SourceSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsOutputReference(this, "scte20_source_settings");
  public get scte20SourceSettings() {
    return this._scte20SourceSettings;
  }
  public putScte20SourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings) {
    this._scte20SourceSettings.internalValue = value;
  }
  public resetScte20SourceSettings() {
    this._scte20SourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte20SourceSettingsInput() {
    return this._scte20SourceSettings.internalValue;
  }

  // scte27_source_settings - computed: false, optional: true, required: false
  private _scte27SourceSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsOutputReference(this, "scte27_source_settings");
  public get scte27SourceSettings() {
    return this._scte27SourceSettings;
  }
  public putScte27SourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings) {
    this._scte27SourceSettings.internalValue = value;
  }
  public resetScte27SourceSettings() {
    this._scte27SourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte27SourceSettingsInput() {
    return this._scte27SourceSettings.internalValue;
  }

  // teletext_source_settings - computed: false, optional: true, required: false
  private _teletextSourceSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputReference(this, "teletext_source_settings");
  public get teletextSourceSettings() {
    return this._teletextSourceSettings;
  }
  public putTeletextSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings) {
    this._teletextSourceSettings.internalValue = value;
  }
  public resetTeletextSourceSettings() {
    this._teletextSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teletextSourceSettingsInput() {
    return this._teletextSourceSettings.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#language_code MedialiveChannel#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * selector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#selector_settings MedialiveChannel#selector_settings}
  */
  readonly selectorSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    name: cdktf.stringToTerraform(struct!.name),
    selector_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsToTerraform(struct!.selectorSettings),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorSettings = this._selectorSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._languageCode = undefined;
      this._name = undefined;
      this._selectorSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._languageCode = value.languageCode;
      this._name = value.name;
      this._selectorSettings.internalValue = value.selectorSettings;
    }
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // selector_settings - computed: false, optional: true, required: false
  private _selectorSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsOutputReference(this, "selector_settings");
  public get selectorSettings() {
    return this._selectorSettings;
  }
  public putSelectorSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings) {
    this._selectorSettings.internalValue = value;
  }
  public resetSelectorSettings() {
    this._selectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorSettingsInput() {
    return this._selectorSettings.internalValue;
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorOutputReference {
    return new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#bandwidth MedialiveChannel#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#buffer_segments MedialiveChannel#buffer_segments}
  */
  readonly bufferSegments?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#retries MedialiveChannel#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#retry_interval MedialiveChannel#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#scte35_source MedialiveChannel#scte35_source}
  */
  readonly scte35Source?: string;
}

export function medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    buffer_segments: cdktf.numberToTerraform(struct!.bufferSegments),
    retries: cdktf.numberToTerraform(struct!.retries),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    scte35_source: cdktf.stringToTerraform(struct!.scte35Source),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._bufferSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSegments = this._bufferSegments;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._scte35Source !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Source = this._scte35Source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidth = undefined;
      this._bufferSegments = undefined;
      this._retries = undefined;
      this._retryInterval = undefined;
      this._scte35Source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidth = value.bandwidth;
      this._bufferSegments = value.bufferSegments;
      this._retries = value.retries;
      this._retryInterval = value.retryInterval;
      this._scte35Source = value.scte35Source;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // buffer_segments - computed: false, optional: true, required: false
  private _bufferSegments?: number; 
  public get bufferSegments() {
    return this.getNumberAttribute('buffer_segments');
  }
  public set bufferSegments(value: number) {
    this._bufferSegments = value;
  }
  public resetBufferSegments() {
    this._bufferSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSegmentsInput() {
    return this._bufferSegments;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // scte35_source - computed: false, optional: true, required: false
  private _scte35Source?: string; 
  public get scte35Source() {
    return this.getStringAttribute('scte35_source');
  }
  public set scte35Source(value: string) {
    this._scte35Source = value;
  }
  public resetScte35Source() {
    this._scte35Source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35SourceInput() {
    return this._scte35Source;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#server_validation MedialiveChannel#server_validation}
  */
  readonly serverValidation?: string;
  /**
  * hls_input_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#hls_input_settings MedialiveChannel#hls_input_settings}
  */
  readonly hlsInputSettings?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings;
}

export function medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_validation: cdktf.stringToTerraform(struct!.serverValidation),
    hls_input_settings: medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsToTerraform(struct!.hlsInputSettings),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverValidation = this._serverValidation;
    }
    if (this._hlsInputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsInputSettings = this._hlsInputSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverValidation = undefined;
      this._hlsInputSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverValidation = value.serverValidation;
      this._hlsInputSettings.internalValue = value.hlsInputSettings;
    }
  }

  // server_validation - computed: false, optional: true, required: false
  private _serverValidation?: string; 
  public get serverValidation() {
    return this.getStringAttribute('server_validation');
  }
  public set serverValidation(value: string) {
    this._serverValidation = value;
  }
  public resetServerValidation() {
    this._serverValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverValidationInput() {
    return this._serverValidation;
  }

  // hls_input_settings - computed: false, optional: true, required: false
  private _hlsInputSettings = new MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsOutputReference(this, "hls_input_settings");
  public get hlsInputSettings() {
    return this._hlsInputSettings;
  }
  public putHlsInputSettings(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings) {
    this._hlsInputSettings.internalValue = value;
  }
  public resetHlsInputSettings() {
    this._hlsInputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsInputSettingsInput() {
    return this._hlsInputSettings.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsVideoSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#color_space MedialiveChannel#color_space}
  */
  readonly colorSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#color_space_usage MedialiveChannel#color_space_usage}
  */
  readonly colorSpaceUsage?: string;
}

export function medialiveChannelInputAttachmentsInputSettingsVideoSelectorToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsVideoSelectorOutputReference | MedialiveChannelInputAttachmentsInputSettingsVideoSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color_space: cdktf.stringToTerraform(struct!.colorSpace),
    color_space_usage: cdktf.stringToTerraform(struct!.colorSpaceUsage),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsVideoSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsVideoSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colorSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorSpace = this._colorSpace;
    }
    if (this._colorSpaceUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorSpaceUsage = this._colorSpaceUsage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsVideoSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colorSpace = undefined;
      this._colorSpaceUsage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colorSpace = value.colorSpace;
      this._colorSpaceUsage = value.colorSpaceUsage;
    }
  }

  // color_space - computed: false, optional: true, required: false
  private _colorSpace?: string; 
  public get colorSpace() {
    return this.getStringAttribute('color_space');
  }
  public set colorSpace(value: string) {
    this._colorSpace = value;
  }
  public resetColorSpace() {
    this._colorSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSpaceInput() {
    return this._colorSpace;
  }

  // color_space_usage - computed: false, optional: true, required: false
  private _colorSpaceUsage?: string; 
  public get colorSpaceUsage() {
    return this.getStringAttribute('color_space_usage');
  }
  public set colorSpaceUsage(value: string) {
    this._colorSpaceUsage = value;
  }
  public resetColorSpaceUsage() {
    this._colorSpaceUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSpaceUsageInput() {
    return this._colorSpaceUsage;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#deblock_filter MedialiveChannel#deblock_filter}
  */
  readonly deblockFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#denoise_filter MedialiveChannel#denoise_filter}
  */
  readonly denoiseFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#filter_strength MedialiveChannel#filter_strength}
  */
  readonly filterStrength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_filter MedialiveChannel#input_filter}
  */
  readonly inputFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
  */
  readonly scte35Pid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#smpte2038_data_preference MedialiveChannel#smpte2038_data_preference}
  */
  readonly smpte2038DataPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#source_end_behavior MedialiveChannel#source_end_behavior}
  */
  readonly sourceEndBehavior?: string;
  /**
  * audio_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#audio_selector MedialiveChannel#audio_selector}
  */
  readonly audioSelector?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable;
  /**
  * caption_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#caption_selector MedialiveChannel#caption_selector}
  */
  readonly captionSelector?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable;
  /**
  * network_input_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#network_input_settings MedialiveChannel#network_input_settings}
  */
  readonly networkInputSettings?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings;
  /**
  * video_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#video_selector MedialiveChannel#video_selector}
  */
  readonly videoSelector?: MedialiveChannelInputAttachmentsInputSettingsVideoSelector;
}

export function medialiveChannelInputAttachmentsInputSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deblock_filter: cdktf.stringToTerraform(struct!.deblockFilter),
    denoise_filter: cdktf.stringToTerraform(struct!.denoiseFilter),
    filter_strength: cdktf.numberToTerraform(struct!.filterStrength),
    input_filter: cdktf.stringToTerraform(struct!.inputFilter),
    scte35_pid: cdktf.numberToTerraform(struct!.scte35Pid),
    smpte2038_data_preference: cdktf.stringToTerraform(struct!.smpte2038DataPreference),
    source_end_behavior: cdktf.stringToTerraform(struct!.sourceEndBehavior),
    audio_selector: cdktf.listMapper(medialiveChannelInputAttachmentsInputSettingsAudioSelectorToTerraform, true)(struct!.audioSelector),
    caption_selector: cdktf.listMapper(medialiveChannelInputAttachmentsInputSettingsCaptionSelectorToTerraform, true)(struct!.captionSelector),
    network_input_settings: medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsToTerraform(struct!.networkInputSettings),
    video_selector: medialiveChannelInputAttachmentsInputSettingsVideoSelectorToTerraform(struct!.videoSelector),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deblockFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deblockFilter = this._deblockFilter;
    }
    if (this._denoiseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.denoiseFilter = this._denoiseFilter;
    }
    if (this._filterStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterStrength = this._filterStrength;
    }
    if (this._inputFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFilter = this._inputFilter;
    }
    if (this._scte35Pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Pid = this._scte35Pid;
    }
    if (this._smpte2038DataPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpte2038DataPreference = this._smpte2038DataPreference;
    }
    if (this._sourceEndBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEndBehavior = this._sourceEndBehavior;
    }
    if (this._audioSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSelector = this._audioSelector?.internalValue;
    }
    if (this._captionSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionSelector = this._captionSelector?.internalValue;
    }
    if (this._networkInputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInputSettings = this._networkInputSettings?.internalValue;
    }
    if (this._videoSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoSelector = this._videoSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deblockFilter = undefined;
      this._denoiseFilter = undefined;
      this._filterStrength = undefined;
      this._inputFilter = undefined;
      this._scte35Pid = undefined;
      this._smpte2038DataPreference = undefined;
      this._sourceEndBehavior = undefined;
      this._audioSelector.internalValue = undefined;
      this._captionSelector.internalValue = undefined;
      this._networkInputSettings.internalValue = undefined;
      this._videoSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deblockFilter = value.deblockFilter;
      this._denoiseFilter = value.denoiseFilter;
      this._filterStrength = value.filterStrength;
      this._inputFilter = value.inputFilter;
      this._scte35Pid = value.scte35Pid;
      this._smpte2038DataPreference = value.smpte2038DataPreference;
      this._sourceEndBehavior = value.sourceEndBehavior;
      this._audioSelector.internalValue = value.audioSelector;
      this._captionSelector.internalValue = value.captionSelector;
      this._networkInputSettings.internalValue = value.networkInputSettings;
      this._videoSelector.internalValue = value.videoSelector;
    }
  }

  // deblock_filter - computed: false, optional: true, required: false
  private _deblockFilter?: string; 
  public get deblockFilter() {
    return this.getStringAttribute('deblock_filter');
  }
  public set deblockFilter(value: string) {
    this._deblockFilter = value;
  }
  public resetDeblockFilter() {
    this._deblockFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deblockFilterInput() {
    return this._deblockFilter;
  }

  // denoise_filter - computed: false, optional: true, required: false
  private _denoiseFilter?: string; 
  public get denoiseFilter() {
    return this.getStringAttribute('denoise_filter');
  }
  public set denoiseFilter(value: string) {
    this._denoiseFilter = value;
  }
  public resetDenoiseFilter() {
    this._denoiseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denoiseFilterInput() {
    return this._denoiseFilter;
  }

  // filter_strength - computed: false, optional: true, required: false
  private _filterStrength?: number; 
  public get filterStrength() {
    return this.getNumberAttribute('filter_strength');
  }
  public set filterStrength(value: number) {
    this._filterStrength = value;
  }
  public resetFilterStrength() {
    this._filterStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStrengthInput() {
    return this._filterStrength;
  }

  // input_filter - computed: true, optional: true, required: false
  private _inputFilter?: string; 
  public get inputFilter() {
    return this.getStringAttribute('input_filter');
  }
  public set inputFilter(value: string) {
    this._inputFilter = value;
  }
  public resetInputFilter() {
    this._inputFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFilterInput() {
    return this._inputFilter;
  }

  // scte35_pid - computed: false, optional: true, required: false
  private _scte35Pid?: number; 
  public get scte35Pid() {
    return this.getNumberAttribute('scte35_pid');
  }
  public set scte35Pid(value: number) {
    this._scte35Pid = value;
  }
  public resetScte35Pid() {
    this._scte35Pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35PidInput() {
    return this._scte35Pid;
  }

  // smpte2038_data_preference - computed: false, optional: true, required: false
  private _smpte2038DataPreference?: string; 
  public get smpte2038DataPreference() {
    return this.getStringAttribute('smpte2038_data_preference');
  }
  public set smpte2038DataPreference(value: string) {
    this._smpte2038DataPreference = value;
  }
  public resetSmpte2038DataPreference() {
    this._smpte2038DataPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpte2038DataPreferenceInput() {
    return this._smpte2038DataPreference;
  }

  // source_end_behavior - computed: false, optional: true, required: false
  private _sourceEndBehavior?: string; 
  public get sourceEndBehavior() {
    return this.getStringAttribute('source_end_behavior');
  }
  public set sourceEndBehavior(value: string) {
    this._sourceEndBehavior = value;
  }
  public resetSourceEndBehavior() {
    this._sourceEndBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndBehaviorInput() {
    return this._sourceEndBehavior;
  }

  // audio_selector - computed: false, optional: true, required: false
  private _audioSelector = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorList(this, "audio_selector", false);
  public get audioSelector() {
    return this._audioSelector;
  }
  public putAudioSelector(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable) {
    this._audioSelector.internalValue = value;
  }
  public resetAudioSelector() {
    this._audioSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSelectorInput() {
    return this._audioSelector.internalValue;
  }

  // caption_selector - computed: false, optional: true, required: false
  private _captionSelector = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorList(this, "caption_selector", false);
  public get captionSelector() {
    return this._captionSelector;
  }
  public putCaptionSelector(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable) {
    this._captionSelector.internalValue = value;
  }
  public resetCaptionSelector() {
    this._captionSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionSelectorInput() {
    return this._captionSelector.internalValue;
  }

  // network_input_settings - computed: false, optional: true, required: false
  private _networkInputSettings = new MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference(this, "network_input_settings");
  public get networkInputSettings() {
    return this._networkInputSettings;
  }
  public putNetworkInputSettings(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings) {
    this._networkInputSettings.internalValue = value;
  }
  public resetNetworkInputSettings() {
    this._networkInputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInputSettingsInput() {
    return this._networkInputSettings.internalValue;
  }

  // video_selector - computed: false, optional: true, required: false
  private _videoSelector = new MedialiveChannelInputAttachmentsInputSettingsVideoSelectorOutputReference(this, "video_selector");
  public get videoSelector() {
    return this._videoSelector;
  }
  public putVideoSelector(value: MedialiveChannelInputAttachmentsInputSettingsVideoSelector) {
    this._videoSelector.internalValue = value;
  }
  public resetVideoSelector() {
    this._videoSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSelectorInput() {
    return this._videoSelector.internalValue;
  }
}
export interface MedialiveChannelInputAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_attachment_name MedialiveChannel#input_attachment_name}
  */
  readonly inputAttachmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_id MedialiveChannel#input_id}
  */
  readonly inputId: string;
  /**
  * automatic_input_failover_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#automatic_input_failover_settings MedialiveChannel#automatic_input_failover_settings}
  */
  readonly automaticInputFailoverSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings;
  /**
  * input_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_settings MedialiveChannel#input_settings}
  */
  readonly inputSettings?: MedialiveChannelInputAttachmentsInputSettings;
}

export function medialiveChannelInputAttachmentsToTerraform(struct?: MedialiveChannelInputAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_attachment_name: cdktf.stringToTerraform(struct!.inputAttachmentName),
    input_id: cdktf.stringToTerraform(struct!.inputId),
    automatic_input_failover_settings: medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsToTerraform(struct!.automaticInputFailoverSettings),
    input_settings: medialiveChannelInputAttachmentsInputSettingsToTerraform(struct!.inputSettings),
  }
}

export class MedialiveChannelInputAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelInputAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAttachmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAttachmentName = this._inputAttachmentName;
    }
    if (this._inputId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputId = this._inputId;
    }
    if (this._automaticInputFailoverSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticInputFailoverSettings = this._automaticInputFailoverSettings?.internalValue;
    }
    if (this._inputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSettings = this._inputSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAttachmentName = undefined;
      this._inputId = undefined;
      this._automaticInputFailoverSettings.internalValue = undefined;
      this._inputSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAttachmentName = value.inputAttachmentName;
      this._inputId = value.inputId;
      this._automaticInputFailoverSettings.internalValue = value.automaticInputFailoverSettings;
      this._inputSettings.internalValue = value.inputSettings;
    }
  }

  // input_attachment_name - computed: false, optional: false, required: true
  private _inputAttachmentName?: string; 
  public get inputAttachmentName() {
    return this.getStringAttribute('input_attachment_name');
  }
  public set inputAttachmentName(value: string) {
    this._inputAttachmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputAttachmentNameInput() {
    return this._inputAttachmentName;
  }

  // input_id - computed: false, optional: false, required: true
  private _inputId?: string; 
  public get inputId() {
    return this.getStringAttribute('input_id');
  }
  public set inputId(value: string) {
    this._inputId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputIdInput() {
    return this._inputId;
  }

  // automatic_input_failover_settings - computed: false, optional: true, required: false
  private _automaticInputFailoverSettings = new MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference(this, "automatic_input_failover_settings");
  public get automaticInputFailoverSettings() {
    return this._automaticInputFailoverSettings;
  }
  public putAutomaticInputFailoverSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings) {
    this._automaticInputFailoverSettings.internalValue = value;
  }
  public resetAutomaticInputFailoverSettings() {
    this._automaticInputFailoverSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInputFailoverSettingsInput() {
    return this._automaticInputFailoverSettings.internalValue;
  }

  // input_settings - computed: false, optional: true, required: false
  private _inputSettings = new MedialiveChannelInputAttachmentsInputSettingsOutputReference(this, "input_settings");
  public get inputSettings() {
    return this._inputSettings;
  }
  public putInputSettings(value: MedialiveChannelInputAttachmentsInputSettings) {
    this._inputSettings.internalValue = value;
  }
  public resetInputSettings() {
    this._inputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSettingsInput() {
    return this._inputSettings.internalValue;
  }
}

export class MedialiveChannelInputAttachmentsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelInputAttachments[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelInputAttachmentsOutputReference {
    return new MedialiveChannelInputAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelInputSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#codec MedialiveChannel#codec}
  */
  readonly codec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#input_resolution MedialiveChannel#input_resolution}
  */
  readonly inputResolution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#maximum_bitrate MedialiveChannel#maximum_bitrate}
  */
  readonly maximumBitrate: string;
}

export function medialiveChannelInputSpecificationToTerraform(struct?: MedialiveChannelInputSpecificationOutputReference | MedialiveChannelInputSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
    input_resolution: cdktf.stringToTerraform(struct!.inputResolution),
    maximum_bitrate: cdktf.stringToTerraform(struct!.maximumBitrate),
  }
}

export class MedialiveChannelInputSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._inputResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputResolution = this._inputResolution;
    }
    if (this._maximumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitrate = this._maximumBitrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codec = undefined;
      this._inputResolution = undefined;
      this._maximumBitrate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codec = value.codec;
      this._inputResolution = value.inputResolution;
      this._maximumBitrate = value.maximumBitrate;
    }
  }

  // codec - computed: false, optional: false, required: true
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // input_resolution - computed: false, optional: false, required: true
  private _inputResolution?: string; 
  public get inputResolution() {
    return this.getStringAttribute('input_resolution');
  }
  public set inputResolution(value: string) {
    this._inputResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputResolutionInput() {
    return this._inputResolution;
  }

  // maximum_bitrate - computed: false, optional: false, required: true
  private _maximumBitrate?: string; 
  public get maximumBitrate() {
    return this.getStringAttribute('maximum_bitrate');
  }
  public set maximumBitrate(value: string) {
    this._maximumBitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitrateInput() {
    return this._maximumBitrate;
  }
}
export interface MedialiveChannelMaintenance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#maintenance_day MedialiveChannel#maintenance_day}
  */
  readonly maintenanceDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#maintenance_start_time MedialiveChannel#maintenance_start_time}
  */
  readonly maintenanceStartTime: string;
}

export function medialiveChannelMaintenanceToTerraform(struct?: MedialiveChannelMaintenanceOutputReference | MedialiveChannelMaintenance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_day: cdktf.stringToTerraform(struct!.maintenanceDay),
    maintenance_start_time: cdktf.stringToTerraform(struct!.maintenanceStartTime),
  }
}

export class MedialiveChannelMaintenanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceDay = this._maintenanceDay;
    }
    if (this._maintenanceStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceStartTime = this._maintenanceStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelMaintenance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceDay = undefined;
      this._maintenanceStartTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceDay = value.maintenanceDay;
      this._maintenanceStartTime = value.maintenanceStartTime;
    }
  }

  // maintenance_day - computed: false, optional: false, required: true
  private _maintenanceDay?: string; 
  public get maintenanceDay() {
    return this.getStringAttribute('maintenance_day');
  }
  public set maintenanceDay(value: string) {
    this._maintenanceDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDayInput() {
    return this._maintenanceDay;
  }

  // maintenance_start_time - computed: false, optional: false, required: true
  private _maintenanceStartTime?: string; 
  public get maintenanceStartTime() {
    return this.getStringAttribute('maintenance_start_time');
  }
  public set maintenanceStartTime(value: string) {
    this._maintenanceStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStartTimeInput() {
    return this._maintenanceStartTime;
  }
}
export interface MedialiveChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#create MedialiveChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#delete MedialiveChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#update MedialiveChannel#update}
  */
  readonly update?: string;
}

export function medialiveChannelTimeoutsToTerraform(struct?: MedialiveChannelTimeouts | cdktf.IResolvable): any {
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

export class MedialiveChannelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveChannelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MedialiveChannelTimeouts | cdktf.IResolvable | undefined) {
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
export interface MedialiveChannelVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#public_address_allocation_ids MedialiveChannel#public_address_allocation_ids}
  */
  readonly publicAddressAllocationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#security_group_ids MedialiveChannel#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/resources/medialive_channel#subnet_ids MedialiveChannel#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function medialiveChannelVpcToTerraform(struct?: MedialiveChannelVpcOutputReference | MedialiveChannelVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_address_allocation_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicAddressAllocationIds),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}

export class MedialiveChannelVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicAddressAllocationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddressAllocationIds = this._publicAddressAllocationIds;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicAddressAllocationIds = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicAddressAllocationIds = value.publicAddressAllocationIds;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_interface_ids'));
  }

  // public_address_allocation_ids - computed: false, optional: false, required: true
  private _publicAddressAllocationIds?: string[]; 
  public get publicAddressAllocationIds() {
    return this.getListAttribute('public_address_allocation_ids');
  }
  public set publicAddressAllocationIds(value: string[]) {
    this._publicAddressAllocationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressAllocationIdsInput() {
    return this._publicAddressAllocationIds;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
