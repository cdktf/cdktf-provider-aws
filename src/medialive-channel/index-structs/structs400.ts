import * as cdktf from 'cdktf';
import { MedialiveChannelInputAttachmentsInputSettingsAudioSelector,
medialiveChannelInputAttachmentsInputSettingsAudioSelectorToTerraform,
MedialiveChannelInputAttachmentsInputSettingsAudioSelectorList,
MedialiveChannelInputAttachmentsInputSettingsCaptionSelector,
medialiveChannelInputAttachmentsInputSettingsCaptionSelectorToTerraform,
MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorList,
MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings,
medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsToTerraform,
MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference,
MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings,
medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsToTerraform,
MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference } from './structs0'
export interface MedialiveChannelInputAttachmentsInputSettingsVideoSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#color_space MedialiveChannel#color_space}
  */
  readonly colorSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#color_space_usage MedialiveChannel#color_space_usage}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#deblock_filter MedialiveChannel#deblock_filter}
  */
  readonly deblockFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#denoise_filter MedialiveChannel#denoise_filter}
  */
  readonly denoiseFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#filter_strength MedialiveChannel#filter_strength}
  */
  readonly filterStrength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#input_filter MedialiveChannel#input_filter}
  */
  readonly inputFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
  */
  readonly scte35Pid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#smpte2038_data_preference MedialiveChannel#smpte2038_data_preference}
  */
  readonly smpte2038DataPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#source_end_behavior MedialiveChannel#source_end_behavior}
  */
  readonly sourceEndBehavior?: string;
  /**
  * audio_selector block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#audio_selector MedialiveChannel#audio_selector}
  */
  readonly audioSelector?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable;
  /**
  * caption_selector block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#caption_selector MedialiveChannel#caption_selector}
  */
  readonly captionSelector?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable;
  /**
  * network_input_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#network_input_settings MedialiveChannel#network_input_settings}
  */
  readonly networkInputSettings?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings;
  /**
  * video_selector block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#video_selector MedialiveChannel#video_selector}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#input_attachment_name MedialiveChannel#input_attachment_name}
  */
  readonly inputAttachmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#input_id MedialiveChannel#input_id}
  */
  readonly inputId: string;
  /**
  * automatic_input_failover_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#automatic_input_failover_settings MedialiveChannel#automatic_input_failover_settings}
  */
  readonly automaticInputFailoverSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings;
  /**
  * input_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#input_settings MedialiveChannel#input_settings}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#codec MedialiveChannel#codec}
  */
  readonly codec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#input_resolution MedialiveChannel#input_resolution}
  */
  readonly inputResolution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#maximum_bitrate MedialiveChannel#maximum_bitrate}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#maintenance_day MedialiveChannel#maintenance_day}
  */
  readonly maintenanceDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#maintenance_start_time MedialiveChannel#maintenance_start_time}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#create MedialiveChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#delete MedialiveChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#update MedialiveChannel#update}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#public_address_allocation_ids MedialiveChannel#public_address_allocation_ids}
  */
  readonly publicAddressAllocationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#security_group_ids MedialiveChannel#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/medialive_channel#subnet_ids MedialiveChannel#subnet_ids}
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
    return this.getListAttribute('availability_zones');
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
    return this.getListAttribute('security_group_ids');
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
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
