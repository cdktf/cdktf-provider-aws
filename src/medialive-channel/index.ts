// https://www.terraform.io/docs/providers/aws/r/medialive_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MedialiveChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#channel_class MedialiveChannel#channel_class}
  */
  readonly channelClass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#id MedialiveChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#log_level MedialiveChannel#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#role_arn MedialiveChannel#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#start_channel MedialiveChannel#start_channel}
  */
  readonly startChannel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#tags MedialiveChannel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#tags_all MedialiveChannel#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cdi_input_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#cdi_input_specification MedialiveChannel#cdi_input_specification}
  */
  readonly cdiInputSpecification?: MedialiveChannelCdiInputSpecification;
  /**
  * destinations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destinations MedialiveChannel#destinations}
  */
  readonly destinations: MedialiveChannelDestinations[] | cdktf.IResolvable;
  /**
  * encoder_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#encoder_settings MedialiveChannel#encoder_settings}
  */
  readonly encoderSettings: MedialiveChannelEncoderSettings;
  /**
  * input_attachments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_attachments MedialiveChannel#input_attachments}
  */
  readonly inputAttachments: MedialiveChannelInputAttachments[] | cdktf.IResolvable;
  /**
  * input_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_specification MedialiveChannel#input_specification}
  */
  readonly inputSpecification: MedialiveChannelInputSpecification;
  /**
  * maintenance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#maintenance MedialiveChannel#maintenance}
  */
  readonly maintenance?: MedialiveChannelMaintenance;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timeouts MedialiveChannel#timeouts}
  */
  readonly timeouts?: MedialiveChannelTimeouts;
  /**
  * vpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#vpc MedialiveChannel#vpc}
  */
  readonly vpc?: MedialiveChannelVpc;
}
export interface MedialiveChannelCdiInputSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#resolution MedialiveChannel#resolution}
  */
  readonly resolution: string;
}

export function medialiveChannelCdiInputSpecificationToTerraform(struct?: MedialiveChannelCdiInputSpecificationOutputReference | MedialiveChannelCdiInputSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolution: cdktf.stringToTerraform(struct!.resolution),
  }
}

export class MedialiveChannelCdiInputSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelCdiInputSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelCdiInputSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resolution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resolution = value.resolution;
    }
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }
}
export interface MedialiveChannelDestinationsMediaPackageSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#channel_id MedialiveChannel#channel_id}
  */
  readonly channelId: string;
}

export function medialiveChannelDestinationsMediaPackageSettingsToTerraform(struct?: MedialiveChannelDestinationsMediaPackageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
  }
}

export class MedialiveChannelDestinationsMediaPackageSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelDestinationsMediaPackageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelDestinationsMediaPackageSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
    }
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }
}

export class MedialiveChannelDestinationsMediaPackageSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelDestinationsMediaPackageSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelDestinationsMediaPackageSettingsOutputReference {
    return new MedialiveChannelDestinationsMediaPackageSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelDestinationsMultiplexSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#multiplex_id MedialiveChannel#multiplex_id}
  */
  readonly multiplexId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#program_name MedialiveChannel#program_name}
  */
  readonly programName: string;
}

export function medialiveChannelDestinationsMultiplexSettingsToTerraform(struct?: MedialiveChannelDestinationsMultiplexSettingsOutputReference | MedialiveChannelDestinationsMultiplexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplex_id: cdktf.stringToTerraform(struct!.multiplexId),
    program_name: cdktf.stringToTerraform(struct!.programName),
  }
}

export class MedialiveChannelDestinationsMultiplexSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelDestinationsMultiplexSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplexId !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplexId = this._multiplexId;
    }
    if (this._programName !== undefined) {
      hasAnyValues = true;
      internalValueResult.programName = this._programName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelDestinationsMultiplexSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiplexId = undefined;
      this._programName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiplexId = value.multiplexId;
      this._programName = value.programName;
    }
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
}
export interface MedialiveChannelDestinationsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#password_param MedialiveChannel#password_param}
  */
  readonly passwordParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#stream_name MedialiveChannel#stream_name}
  */
  readonly streamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#url MedialiveChannel#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#username MedialiveChannel#username}
  */
  readonly username?: string;
}

export function medialiveChannelDestinationsSettingsToTerraform(struct?: MedialiveChannelDestinationsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_param: cdktf.stringToTerraform(struct!.passwordParam),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MedialiveChannelDestinationsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelDestinationsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordParam = this._passwordParam;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelDestinationsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordParam = undefined;
      this._streamName = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordParam = value.passwordParam;
      this._streamName = value.streamName;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // password_param - computed: false, optional: true, required: false
  private _passwordParam?: string; 
  public get passwordParam() {
    return this.getStringAttribute('password_param');
  }
  public set passwordParam(value: string) {
    this._passwordParam = value;
  }
  public resetPasswordParam() {
    this._passwordParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordParamInput() {
    return this._passwordParam;
  }

  // stream_name - computed: false, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class MedialiveChannelDestinationsSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelDestinationsSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelDestinationsSettingsOutputReference {
    return new MedialiveChannelDestinationsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelDestinations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#id MedialiveChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * media_package_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#media_package_settings MedialiveChannel#media_package_settings}
  */
  readonly mediaPackageSettings?: MedialiveChannelDestinationsMediaPackageSettings[] | cdktf.IResolvable;
  /**
  * multiplex_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#multiplex_settings MedialiveChannel#multiplex_settings}
  */
  readonly multiplexSettings?: MedialiveChannelDestinationsMultiplexSettings;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#settings MedialiveChannel#settings}
  */
  readonly settings?: MedialiveChannelDestinationsSettings[] | cdktf.IResolvable;
}

export function medialiveChannelDestinationsToTerraform(struct?: MedialiveChannelDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    media_package_settings: cdktf.listMapper(medialiveChannelDestinationsMediaPackageSettingsToTerraform, true)(struct!.mediaPackageSettings),
    multiplex_settings: medialiveChannelDestinationsMultiplexSettingsToTerraform(struct!.multiplexSettings),
    settings: cdktf.listMapper(medialiveChannelDestinationsSettingsToTerraform, true)(struct!.settings),
  }
}

export class MedialiveChannelDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mediaPackageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaPackageSettings = this._mediaPackageSettings?.internalValue;
    }
    if (this._multiplexSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplexSettings = this._multiplexSettings?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mediaPackageSettings.internalValue = undefined;
      this._multiplexSettings.internalValue = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mediaPackageSettings.internalValue = value.mediaPackageSettings;
      this._multiplexSettings.internalValue = value.multiplexSettings;
      this._settings.internalValue = value.settings;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // media_package_settings - computed: false, optional: true, required: false
  private _mediaPackageSettings = new MedialiveChannelDestinationsMediaPackageSettingsList(this, "media_package_settings", true);
  public get mediaPackageSettings() {
    return this._mediaPackageSettings;
  }
  public putMediaPackageSettings(value: MedialiveChannelDestinationsMediaPackageSettings[] | cdktf.IResolvable) {
    this._mediaPackageSettings.internalValue = value;
  }
  public resetMediaPackageSettings() {
    this._mediaPackageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaPackageSettingsInput() {
    return this._mediaPackageSettings.internalValue;
  }

  // multiplex_settings - computed: false, optional: true, required: false
  private _multiplexSettings = new MedialiveChannelDestinationsMultiplexSettingsOutputReference(this, "multiplex_settings");
  public get multiplexSettings() {
    return this._multiplexSettings;
  }
  public putMultiplexSettings(value: MedialiveChannelDestinationsMultiplexSettings) {
    this._multiplexSettings.internalValue = value;
  }
  public resetMultiplexSettings() {
    this._multiplexSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexSettingsInput() {
    return this._multiplexSettings.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new MedialiveChannelDestinationsSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: MedialiveChannelDestinationsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class MedialiveChannelDestinationsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelDestinations[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelDestinationsOutputReference {
    return new MedialiveChannelDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#algorithm MedialiveChannel#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#algorithm_control MedialiveChannel#algorithm_control}
  */
  readonly algorithmControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#target_lkfs MedialiveChannel#target_lkfs}
  */
  readonly targetLkfs?: number;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    algorithm_control: cdktf.stringToTerraform(struct!.algorithmControl),
    target_lkfs: cdktf.numberToTerraform(struct!.targetLkfs),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._algorithmControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmControl = this._algorithmControl;
    }
    if (this._targetLkfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLkfs = this._targetLkfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._algorithmControl = undefined;
      this._targetLkfs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._algorithmControl = value.algorithmControl;
      this._targetLkfs = value.targetLkfs;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // algorithm_control - computed: true, optional: true, required: false
  private _algorithmControl?: string; 
  public get algorithmControl() {
    return this.getStringAttribute('algorithm_control');
  }
  public set algorithmControl(value: string) {
    this._algorithmControl = value;
  }
  public resetAlgorithmControl() {
    this._algorithmControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmControlInput() {
    return this._algorithmControl;
  }

  // target_lkfs - computed: true, optional: true, required: false
  private _targetLkfs?: number; 
  public get targetLkfs() {
    return this.getNumberAttribute('target_lkfs');
  }
  public set targetLkfs(value: number) {
    this._targetLkfs = value;
  }
  public resetTargetLkfs() {
    this._targetLkfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLkfsInput() {
    return this._targetLkfs;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#cbet_check_digit_string MedialiveChannel#cbet_check_digit_string}
  */
  readonly cbetCheckDigitString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#cbet_stepaside MedialiveChannel#cbet_stepaside}
  */
  readonly cbetStepaside: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#csid MedialiveChannel#csid}
  */
  readonly csid: string;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cbet_check_digit_string: cdktf.stringToTerraform(struct!.cbetCheckDigitString),
    cbet_stepaside: cdktf.stringToTerraform(struct!.cbetStepaside),
    csid: cdktf.stringToTerraform(struct!.csid),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cbetCheckDigitString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbetCheckDigitString = this._cbetCheckDigitString;
    }
    if (this._cbetStepaside !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbetStepaside = this._cbetStepaside;
    }
    if (this._csid !== undefined) {
      hasAnyValues = true;
      internalValueResult.csid = this._csid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cbetCheckDigitString = undefined;
      this._cbetStepaside = undefined;
      this._csid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cbetCheckDigitString = value.cbetCheckDigitString;
      this._cbetStepaside = value.cbetStepaside;
      this._csid = value.csid;
    }
  }

  // cbet_check_digit_string - computed: false, optional: false, required: true
  private _cbetCheckDigitString?: string; 
  public get cbetCheckDigitString() {
    return this.getStringAttribute('cbet_check_digit_string');
  }
  public set cbetCheckDigitString(value: string) {
    this._cbetCheckDigitString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbetCheckDigitStringInput() {
    return this._cbetCheckDigitString;
  }

  // cbet_stepaside - computed: false, optional: false, required: true
  private _cbetStepaside?: string; 
  public get cbetStepaside() {
    return this.getStringAttribute('cbet_stepaside');
  }
  public set cbetStepaside(value: string) {
    this._cbetStepaside = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbetStepasideInput() {
    return this._cbetStepaside;
  }

  // csid - computed: false, optional: false, required: true
  private _csid?: string; 
  public get csid() {
    return this.getStringAttribute('csid');
  }
  public set csid(value: string) {
    this._csid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csidInput() {
    return this._csid;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#check_digit_string MedialiveChannel#check_digit_string}
  */
  readonly checkDigitString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#sid MedialiveChannel#sid}
  */
  readonly sid: number;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_digit_string: cdktf.stringToTerraform(struct!.checkDigitString),
    sid: cdktf.numberToTerraform(struct!.sid),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkDigitString !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkDigitString = this._checkDigitString;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkDigitString = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkDigitString = value.checkDigitString;
      this._sid = value.sid;
    }
  }

  // check_digit_string - computed: false, optional: false, required: true
  private _checkDigitString?: string; 
  public get checkDigitString() {
    return this.getStringAttribute('check_digit_string');
  }
  public set checkDigitString(value: string) {
    this._checkDigitString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDigitStringInput() {
    return this._checkDigitString;
  }

  // sid - computed: false, optional: false, required: true
  private _sid?: number; 
  public get sid() {
    return this.getNumberAttribute('sid');
  }
  public set sid(value: number) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsOutputReference {
    return new MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_distribution_type MedialiveChannel#nielsen_distribution_type}
  */
  readonly nielsenDistributionType?: string;
  /**
  * nielsen_cbet_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_cbet_settings MedialiveChannel#nielsen_cbet_settings}
  */
  readonly nielsenCbetSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings;
  /**
  * nielsen_naes_ii_nw_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_naes_ii_nw_settings MedialiveChannel#nielsen_naes_ii_nw_settings}
  */
  readonly nielsenNaesIiNwSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings[] | cdktf.IResolvable;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nielsen_distribution_type: cdktf.stringToTerraform(struct!.nielsenDistributionType),
    nielsen_cbet_settings: medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsToTerraform(struct!.nielsenCbetSettings),
    nielsen_naes_ii_nw_settings: cdktf.listMapper(medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsToTerraform, true)(struct!.nielsenNaesIiNwSettings),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nielsenDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenDistributionType = this._nielsenDistributionType;
    }
    if (this._nielsenCbetSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenCbetSettings = this._nielsenCbetSettings?.internalValue;
    }
    if (this._nielsenNaesIiNwSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenNaesIiNwSettings = this._nielsenNaesIiNwSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nielsenDistributionType = undefined;
      this._nielsenCbetSettings.internalValue = undefined;
      this._nielsenNaesIiNwSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nielsenDistributionType = value.nielsenDistributionType;
      this._nielsenCbetSettings.internalValue = value.nielsenCbetSettings;
      this._nielsenNaesIiNwSettings.internalValue = value.nielsenNaesIiNwSettings;
    }
  }

  // nielsen_distribution_type - computed: true, optional: true, required: false
  private _nielsenDistributionType?: string; 
  public get nielsenDistributionType() {
    return this.getStringAttribute('nielsen_distribution_type');
  }
  public set nielsenDistributionType(value: string) {
    this._nielsenDistributionType = value;
  }
  public resetNielsenDistributionType() {
    this._nielsenDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenDistributionTypeInput() {
    return this._nielsenDistributionType;
  }

  // nielsen_cbet_settings - computed: false, optional: true, required: false
  private _nielsenCbetSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsOutputReference(this, "nielsen_cbet_settings");
  public get nielsenCbetSettings() {
    return this._nielsenCbetSettings;
  }
  public putNielsenCbetSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings) {
    this._nielsenCbetSettings.internalValue = value;
  }
  public resetNielsenCbetSettings() {
    this._nielsenCbetSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenCbetSettingsInput() {
    return this._nielsenCbetSettings.internalValue;
  }

  // nielsen_naes_ii_nw_settings - computed: false, optional: true, required: false
  private _nielsenNaesIiNwSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsList(this, "nielsen_naes_ii_nw_settings", false);
  public get nielsenNaesIiNwSettings() {
    return this._nielsenNaesIiNwSettings;
  }
  public putNielsenNaesIiNwSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings[] | cdktf.IResolvable) {
    this._nielsenNaesIiNwSettings.internalValue = value;
  }
  public resetNielsenNaesIiNwSettings() {
    this._nielsenNaesIiNwSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenNaesIiNwSettingsInput() {
    return this._nielsenNaesIiNwSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings {
  /**
  * nielsen_watermarks_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_watermarks_settings MedialiveChannel#nielsen_watermarks_settings}
  */
  readonly nielsenWatermarksSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nielsen_watermarks_settings: medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsToTerraform(struct!.nielsenWatermarksSettings),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nielsenWatermarksSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenWatermarksSettings = this._nielsenWatermarksSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nielsenWatermarksSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nielsenWatermarksSettings.internalValue = value.nielsenWatermarksSettings;
    }
  }

  // nielsen_watermarks_settings - computed: false, optional: true, required: false
  private _nielsenWatermarksSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsOutputReference(this, "nielsen_watermarks_settings");
  public get nielsenWatermarksSettings() {
    return this._nielsenWatermarksSettings;
  }
  public putNielsenWatermarksSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings) {
    this._nielsenWatermarksSettings.internalValue = value;
  }
  public resetNielsenWatermarksSettings() {
    this._nielsenWatermarksSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenWatermarksSettingsInput() {
    return this._nielsenWatermarksSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#coding_mode MedialiveChannel#coding_mode}
  */
  readonly codingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_type MedialiveChannel#input_type}
  */
  readonly inputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#profile MedialiveChannel#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rate_control_mode MedialiveChannel#rate_control_mode}
  */
  readonly rateControlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#raw_format MedialiveChannel#raw_format}
  */
  readonly rawFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#sample_rate MedialiveChannel#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#spec MedialiveChannel#spec}
  */
  readonly spec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#vbr_quality MedialiveChannel#vbr_quality}
  */
  readonly vbrQuality?: string;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    coding_mode: cdktf.stringToTerraform(struct!.codingMode),
    input_type: cdktf.stringToTerraform(struct!.inputType),
    profile: cdktf.stringToTerraform(struct!.profile),
    rate_control_mode: cdktf.stringToTerraform(struct!.rateControlMode),
    raw_format: cdktf.stringToTerraform(struct!.rawFormat),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    spec: cdktf.stringToTerraform(struct!.spec),
    vbr_quality: cdktf.stringToTerraform(struct!.vbrQuality),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingMode = this._codingMode;
    }
    if (this._inputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputType = this._inputType;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._rateControlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateControlMode = this._rateControlMode;
    }
    if (this._rawFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFormat = this._rawFormat;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._vbrQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.vbrQuality = this._vbrQuality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codingMode = undefined;
      this._inputType = undefined;
      this._profile = undefined;
      this._rateControlMode = undefined;
      this._rawFormat = undefined;
      this._sampleRate = undefined;
      this._spec = undefined;
      this._vbrQuality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codingMode = value.codingMode;
      this._inputType = value.inputType;
      this._profile = value.profile;
      this._rateControlMode = value.rateControlMode;
      this._rawFormat = value.rawFormat;
      this._sampleRate = value.sampleRate;
      this._spec = value.spec;
      this._vbrQuality = value.vbrQuality;
    }
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // coding_mode - computed: true, optional: true, required: false
  private _codingMode?: string; 
  public get codingMode() {
    return this.getStringAttribute('coding_mode');
  }
  public set codingMode(value: string) {
    this._codingMode = value;
  }
  public resetCodingMode() {
    this._codingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codingModeInput() {
    return this._codingMode;
  }

  // input_type - computed: true, optional: true, required: false
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  public resetInputType() {
    this._inputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // rate_control_mode - computed: true, optional: true, required: false
  private _rateControlMode?: string; 
  public get rateControlMode() {
    return this.getStringAttribute('rate_control_mode');
  }
  public set rateControlMode(value: string) {
    this._rateControlMode = value;
  }
  public resetRateControlMode() {
    this._rateControlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateControlModeInput() {
    return this._rateControlMode;
  }

  // raw_format - computed: true, optional: true, required: false
  private _rawFormat?: string; 
  public get rawFormat() {
    return this.getStringAttribute('raw_format');
  }
  public set rawFormat(value: string) {
    this._rawFormat = value;
  }
  public resetRawFormat() {
    this._rawFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFormatInput() {
    return this._rawFormat;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // spec - computed: true, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // vbr_quality - computed: true, optional: true, required: false
  private _vbrQuality?: string; 
  public get vbrQuality() {
    return this.getStringAttribute('vbr_quality');
  }
  public set vbrQuality(value: string) {
    this._vbrQuality = value;
  }
  public resetVbrQuality() {
    this._vbrQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrQualityInput() {
    return this._vbrQuality;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitstream_mode MedialiveChannel#bitstream_mode}
  */
  readonly bitstreamMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#coding_mode MedialiveChannel#coding_mode}
  */
  readonly codingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dialnorm MedialiveChannel#dialnorm}
  */
  readonly dialnorm?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#drc_profile MedialiveChannel#drc_profile}
  */
  readonly drcProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#lfe_filter MedialiveChannel#lfe_filter}
  */
  readonly lfeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#metadata_control MedialiveChannel#metadata_control}
  */
  readonly metadataControl?: string;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    bitstream_mode: cdktf.stringToTerraform(struct!.bitstreamMode),
    coding_mode: cdktf.stringToTerraform(struct!.codingMode),
    dialnorm: cdktf.numberToTerraform(struct!.dialnorm),
    drc_profile: cdktf.stringToTerraform(struct!.drcProfile),
    lfe_filter: cdktf.stringToTerraform(struct!.lfeFilter),
    metadata_control: cdktf.stringToTerraform(struct!.metadataControl),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bitstreamMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitstreamMode = this._bitstreamMode;
    }
    if (this._codingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingMode = this._codingMode;
    }
    if (this._dialnorm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialnorm = this._dialnorm;
    }
    if (this._drcProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.drcProfile = this._drcProfile;
    }
    if (this._lfeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfeFilter = this._lfeFilter;
    }
    if (this._metadataControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataControl = this._metadataControl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._bitstreamMode = undefined;
      this._codingMode = undefined;
      this._dialnorm = undefined;
      this._drcProfile = undefined;
      this._lfeFilter = undefined;
      this._metadataControl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._bitstreamMode = value.bitstreamMode;
      this._codingMode = value.codingMode;
      this._dialnorm = value.dialnorm;
      this._drcProfile = value.drcProfile;
      this._lfeFilter = value.lfeFilter;
      this._metadataControl = value.metadataControl;
    }
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // bitstream_mode - computed: true, optional: true, required: false
  private _bitstreamMode?: string; 
  public get bitstreamMode() {
    return this.getStringAttribute('bitstream_mode');
  }
  public set bitstreamMode(value: string) {
    this._bitstreamMode = value;
  }
  public resetBitstreamMode() {
    this._bitstreamMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitstreamModeInput() {
    return this._bitstreamMode;
  }

  // coding_mode - computed: true, optional: true, required: false
  private _codingMode?: string; 
  public get codingMode() {
    return this.getStringAttribute('coding_mode');
  }
  public set codingMode(value: string) {
    this._codingMode = value;
  }
  public resetCodingMode() {
    this._codingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codingModeInput() {
    return this._codingMode;
  }

  // dialnorm - computed: true, optional: true, required: false
  private _dialnorm?: number; 
  public get dialnorm() {
    return this.getNumberAttribute('dialnorm');
  }
  public set dialnorm(value: number) {
    this._dialnorm = value;
  }
  public resetDialnorm() {
    this._dialnorm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialnormInput() {
    return this._dialnorm;
  }

  // drc_profile - computed: true, optional: true, required: false
  private _drcProfile?: string; 
  public get drcProfile() {
    return this.getStringAttribute('drc_profile');
  }
  public set drcProfile(value: string) {
    this._drcProfile = value;
  }
  public resetDrcProfile() {
    this._drcProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drcProfileInput() {
    return this._drcProfile;
  }

  // lfe_filter - computed: true, optional: true, required: false
  private _lfeFilter?: string; 
  public get lfeFilter() {
    return this.getStringAttribute('lfe_filter');
  }
  public set lfeFilter(value: string) {
    this._lfeFilter = value;
  }
  public resetLfeFilter() {
    this._lfeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfeFilterInput() {
    return this._lfeFilter;
  }

  // metadata_control - computed: true, optional: true, required: false
  private _metadataControl?: string; 
  public get metadataControl() {
    return this.getStringAttribute('metadata_control');
  }
  public set metadataControl(value: string) {
    this._metadataControl = value;
  }
  public resetMetadataControl() {
    this._metadataControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataControlInput() {
    return this._metadataControl;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#coding_mode MedialiveChannel#coding_mode}
  */
  readonly codingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dialnorm MedialiveChannel#dialnorm}
  */
  readonly dialnorm?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#drc_line MedialiveChannel#drc_line}
  */
  readonly drcLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#drc_rf MedialiveChannel#drc_rf}
  */
  readonly drcRf?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#height_trim MedialiveChannel#height_trim}
  */
  readonly heightTrim?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#surround_trim MedialiveChannel#surround_trim}
  */
  readonly surroundTrim?: number;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    coding_mode: cdktf.stringToTerraform(struct!.codingMode),
    dialnorm: cdktf.numberToTerraform(struct!.dialnorm),
    drc_line: cdktf.stringToTerraform(struct!.drcLine),
    drc_rf: cdktf.stringToTerraform(struct!.drcRf),
    height_trim: cdktf.numberToTerraform(struct!.heightTrim),
    surround_trim: cdktf.numberToTerraform(struct!.surroundTrim),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingMode = this._codingMode;
    }
    if (this._dialnorm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialnorm = this._dialnorm;
    }
    if (this._drcLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.drcLine = this._drcLine;
    }
    if (this._drcRf !== undefined) {
      hasAnyValues = true;
      internalValueResult.drcRf = this._drcRf;
    }
    if (this._heightTrim !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightTrim = this._heightTrim;
    }
    if (this._surroundTrim !== undefined) {
      hasAnyValues = true;
      internalValueResult.surroundTrim = this._surroundTrim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codingMode = undefined;
      this._dialnorm = undefined;
      this._drcLine = undefined;
      this._drcRf = undefined;
      this._heightTrim = undefined;
      this._surroundTrim = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codingMode = value.codingMode;
      this._dialnorm = value.dialnorm;
      this._drcLine = value.drcLine;
      this._drcRf = value.drcRf;
      this._heightTrim = value.heightTrim;
      this._surroundTrim = value.surroundTrim;
    }
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // coding_mode - computed: true, optional: true, required: false
  private _codingMode?: string; 
  public get codingMode() {
    return this.getStringAttribute('coding_mode');
  }
  public set codingMode(value: string) {
    this._codingMode = value;
  }
  public resetCodingMode() {
    this._codingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codingModeInput() {
    return this._codingMode;
  }

  // dialnorm - computed: true, optional: true, required: false
  private _dialnorm?: number; 
  public get dialnorm() {
    return this.getNumberAttribute('dialnorm');
  }
  public set dialnorm(value: number) {
    this._dialnorm = value;
  }
  public resetDialnorm() {
    this._dialnorm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialnormInput() {
    return this._dialnorm;
  }

  // drc_line - computed: true, optional: true, required: false
  private _drcLine?: string; 
  public get drcLine() {
    return this.getStringAttribute('drc_line');
  }
  public set drcLine(value: string) {
    this._drcLine = value;
  }
  public resetDrcLine() {
    this._drcLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drcLineInput() {
    return this._drcLine;
  }

  // drc_rf - computed: true, optional: true, required: false
  private _drcRf?: string; 
  public get drcRf() {
    return this.getStringAttribute('drc_rf');
  }
  public set drcRf(value: string) {
    this._drcRf = value;
  }
  public resetDrcRf() {
    this._drcRf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drcRfInput() {
    return this._drcRf;
  }

  // height_trim - computed: true, optional: true, required: false
  private _heightTrim?: number; 
  public get heightTrim() {
    return this.getNumberAttribute('height_trim');
  }
  public set heightTrim(value: number) {
    this._heightTrim = value;
  }
  public resetHeightTrim() {
    this._heightTrim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightTrimInput() {
    return this._heightTrim;
  }

  // surround_trim - computed: true, optional: true, required: false
  private _surroundTrim?: number; 
  public get surroundTrim() {
    return this.getNumberAttribute('surround_trim');
  }
  public set surroundTrim(value: number) {
    this._surroundTrim = value;
  }
  public resetSurroundTrim() {
    this._surroundTrim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surroundTrimInput() {
    return this._surroundTrim;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#attenuation_control MedialiveChannel#attenuation_control}
  */
  readonly attenuationControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitstream_mode MedialiveChannel#bitstream_mode}
  */
  readonly bitstreamMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#coding_mode MedialiveChannel#coding_mode}
  */
  readonly codingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dc_filter MedialiveChannel#dc_filter}
  */
  readonly dcFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dialnorm MedialiveChannel#dialnorm}
  */
  readonly dialnorm?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#drc_line MedialiveChannel#drc_line}
  */
  readonly drcLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#drc_rf MedialiveChannel#drc_rf}
  */
  readonly drcRf?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#lfe_control MedialiveChannel#lfe_control}
  */
  readonly lfeControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#lfe_filter MedialiveChannel#lfe_filter}
  */
  readonly lfeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#lo_ro_center_mix_level MedialiveChannel#lo_ro_center_mix_level}
  */
  readonly loRoCenterMixLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#lo_ro_surround_mix_level MedialiveChannel#lo_ro_surround_mix_level}
  */
  readonly loRoSurroundMixLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#lt_rt_center_mix_level MedialiveChannel#lt_rt_center_mix_level}
  */
  readonly ltRtCenterMixLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#lt_rt_surround_mix_level MedialiveChannel#lt_rt_surround_mix_level}
  */
  readonly ltRtSurroundMixLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#metadata_control MedialiveChannel#metadata_control}
  */
  readonly metadataControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#passthrough_control MedialiveChannel#passthrough_control}
  */
  readonly passthroughControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#phase_control MedialiveChannel#phase_control}
  */
  readonly phaseControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#stereo_downmix MedialiveChannel#stereo_downmix}
  */
  readonly stereoDownmix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#surround_ex_mode MedialiveChannel#surround_ex_mode}
  */
  readonly surroundExMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#surround_mode MedialiveChannel#surround_mode}
  */
  readonly surroundMode?: string;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attenuation_control: cdktf.stringToTerraform(struct!.attenuationControl),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    bitstream_mode: cdktf.stringToTerraform(struct!.bitstreamMode),
    coding_mode: cdktf.stringToTerraform(struct!.codingMode),
    dc_filter: cdktf.stringToTerraform(struct!.dcFilter),
    dialnorm: cdktf.numberToTerraform(struct!.dialnorm),
    drc_line: cdktf.stringToTerraform(struct!.drcLine),
    drc_rf: cdktf.stringToTerraform(struct!.drcRf),
    lfe_control: cdktf.stringToTerraform(struct!.lfeControl),
    lfe_filter: cdktf.stringToTerraform(struct!.lfeFilter),
    lo_ro_center_mix_level: cdktf.numberToTerraform(struct!.loRoCenterMixLevel),
    lo_ro_surround_mix_level: cdktf.numberToTerraform(struct!.loRoSurroundMixLevel),
    lt_rt_center_mix_level: cdktf.numberToTerraform(struct!.ltRtCenterMixLevel),
    lt_rt_surround_mix_level: cdktf.numberToTerraform(struct!.ltRtSurroundMixLevel),
    metadata_control: cdktf.stringToTerraform(struct!.metadataControl),
    passthrough_control: cdktf.stringToTerraform(struct!.passthroughControl),
    phase_control: cdktf.stringToTerraform(struct!.phaseControl),
    stereo_downmix: cdktf.stringToTerraform(struct!.stereoDownmix),
    surround_ex_mode: cdktf.stringToTerraform(struct!.surroundExMode),
    surround_mode: cdktf.stringToTerraform(struct!.surroundMode),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attenuationControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.attenuationControl = this._attenuationControl;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bitstreamMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitstreamMode = this._bitstreamMode;
    }
    if (this._codingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingMode = this._codingMode;
    }
    if (this._dcFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcFilter = this._dcFilter;
    }
    if (this._dialnorm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialnorm = this._dialnorm;
    }
    if (this._drcLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.drcLine = this._drcLine;
    }
    if (this._drcRf !== undefined) {
      hasAnyValues = true;
      internalValueResult.drcRf = this._drcRf;
    }
    if (this._lfeControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfeControl = this._lfeControl;
    }
    if (this._lfeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfeFilter = this._lfeFilter;
    }
    if (this._loRoCenterMixLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loRoCenterMixLevel = this._loRoCenterMixLevel;
    }
    if (this._loRoSurroundMixLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loRoSurroundMixLevel = this._loRoSurroundMixLevel;
    }
    if (this._ltRtCenterMixLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltRtCenterMixLevel = this._ltRtCenterMixLevel;
    }
    if (this._ltRtSurroundMixLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltRtSurroundMixLevel = this._ltRtSurroundMixLevel;
    }
    if (this._metadataControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataControl = this._metadataControl;
    }
    if (this._passthroughControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthroughControl = this._passthroughControl;
    }
    if (this._phaseControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseControl = this._phaseControl;
    }
    if (this._stereoDownmix !== undefined) {
      hasAnyValues = true;
      internalValueResult.stereoDownmix = this._stereoDownmix;
    }
    if (this._surroundExMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.surroundExMode = this._surroundExMode;
    }
    if (this._surroundMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.surroundMode = this._surroundMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attenuationControl = undefined;
      this._bitrate = undefined;
      this._bitstreamMode = undefined;
      this._codingMode = undefined;
      this._dcFilter = undefined;
      this._dialnorm = undefined;
      this._drcLine = undefined;
      this._drcRf = undefined;
      this._lfeControl = undefined;
      this._lfeFilter = undefined;
      this._loRoCenterMixLevel = undefined;
      this._loRoSurroundMixLevel = undefined;
      this._ltRtCenterMixLevel = undefined;
      this._ltRtSurroundMixLevel = undefined;
      this._metadataControl = undefined;
      this._passthroughControl = undefined;
      this._phaseControl = undefined;
      this._stereoDownmix = undefined;
      this._surroundExMode = undefined;
      this._surroundMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attenuationControl = value.attenuationControl;
      this._bitrate = value.bitrate;
      this._bitstreamMode = value.bitstreamMode;
      this._codingMode = value.codingMode;
      this._dcFilter = value.dcFilter;
      this._dialnorm = value.dialnorm;
      this._drcLine = value.drcLine;
      this._drcRf = value.drcRf;
      this._lfeControl = value.lfeControl;
      this._lfeFilter = value.lfeFilter;
      this._loRoCenterMixLevel = value.loRoCenterMixLevel;
      this._loRoSurroundMixLevel = value.loRoSurroundMixLevel;
      this._ltRtCenterMixLevel = value.ltRtCenterMixLevel;
      this._ltRtSurroundMixLevel = value.ltRtSurroundMixLevel;
      this._metadataControl = value.metadataControl;
      this._passthroughControl = value.passthroughControl;
      this._phaseControl = value.phaseControl;
      this._stereoDownmix = value.stereoDownmix;
      this._surroundExMode = value.surroundExMode;
      this._surroundMode = value.surroundMode;
    }
  }

  // attenuation_control - computed: true, optional: true, required: false
  private _attenuationControl?: string; 
  public get attenuationControl() {
    return this.getStringAttribute('attenuation_control');
  }
  public set attenuationControl(value: string) {
    this._attenuationControl = value;
  }
  public resetAttenuationControl() {
    this._attenuationControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attenuationControlInput() {
    return this._attenuationControl;
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // bitstream_mode - computed: true, optional: true, required: false
  private _bitstreamMode?: string; 
  public get bitstreamMode() {
    return this.getStringAttribute('bitstream_mode');
  }
  public set bitstreamMode(value: string) {
    this._bitstreamMode = value;
  }
  public resetBitstreamMode() {
    this._bitstreamMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitstreamModeInput() {
    return this._bitstreamMode;
  }

  // coding_mode - computed: true, optional: true, required: false
  private _codingMode?: string; 
  public get codingMode() {
    return this.getStringAttribute('coding_mode');
  }
  public set codingMode(value: string) {
    this._codingMode = value;
  }
  public resetCodingMode() {
    this._codingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codingModeInput() {
    return this._codingMode;
  }

  // dc_filter - computed: true, optional: true, required: false
  private _dcFilter?: string; 
  public get dcFilter() {
    return this.getStringAttribute('dc_filter');
  }
  public set dcFilter(value: string) {
    this._dcFilter = value;
  }
  public resetDcFilter() {
    this._dcFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcFilterInput() {
    return this._dcFilter;
  }

  // dialnorm - computed: true, optional: true, required: false
  private _dialnorm?: number; 
  public get dialnorm() {
    return this.getNumberAttribute('dialnorm');
  }
  public set dialnorm(value: number) {
    this._dialnorm = value;
  }
  public resetDialnorm() {
    this._dialnorm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialnormInput() {
    return this._dialnorm;
  }

  // drc_line - computed: true, optional: true, required: false
  private _drcLine?: string; 
  public get drcLine() {
    return this.getStringAttribute('drc_line');
  }
  public set drcLine(value: string) {
    this._drcLine = value;
  }
  public resetDrcLine() {
    this._drcLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drcLineInput() {
    return this._drcLine;
  }

  // drc_rf - computed: true, optional: true, required: false
  private _drcRf?: string; 
  public get drcRf() {
    return this.getStringAttribute('drc_rf');
  }
  public set drcRf(value: string) {
    this._drcRf = value;
  }
  public resetDrcRf() {
    this._drcRf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drcRfInput() {
    return this._drcRf;
  }

  // lfe_control - computed: true, optional: true, required: false
  private _lfeControl?: string; 
  public get lfeControl() {
    return this.getStringAttribute('lfe_control');
  }
  public set lfeControl(value: string) {
    this._lfeControl = value;
  }
  public resetLfeControl() {
    this._lfeControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfeControlInput() {
    return this._lfeControl;
  }

  // lfe_filter - computed: true, optional: true, required: false
  private _lfeFilter?: string; 
  public get lfeFilter() {
    return this.getStringAttribute('lfe_filter');
  }
  public set lfeFilter(value: string) {
    this._lfeFilter = value;
  }
  public resetLfeFilter() {
    this._lfeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfeFilterInput() {
    return this._lfeFilter;
  }

  // lo_ro_center_mix_level - computed: true, optional: true, required: false
  private _loRoCenterMixLevel?: number; 
  public get loRoCenterMixLevel() {
    return this.getNumberAttribute('lo_ro_center_mix_level');
  }
  public set loRoCenterMixLevel(value: number) {
    this._loRoCenterMixLevel = value;
  }
  public resetLoRoCenterMixLevel() {
    this._loRoCenterMixLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loRoCenterMixLevelInput() {
    return this._loRoCenterMixLevel;
  }

  // lo_ro_surround_mix_level - computed: true, optional: true, required: false
  private _loRoSurroundMixLevel?: number; 
  public get loRoSurroundMixLevel() {
    return this.getNumberAttribute('lo_ro_surround_mix_level');
  }
  public set loRoSurroundMixLevel(value: number) {
    this._loRoSurroundMixLevel = value;
  }
  public resetLoRoSurroundMixLevel() {
    this._loRoSurroundMixLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loRoSurroundMixLevelInput() {
    return this._loRoSurroundMixLevel;
  }

  // lt_rt_center_mix_level - computed: true, optional: true, required: false
  private _ltRtCenterMixLevel?: number; 
  public get ltRtCenterMixLevel() {
    return this.getNumberAttribute('lt_rt_center_mix_level');
  }
  public set ltRtCenterMixLevel(value: number) {
    this._ltRtCenterMixLevel = value;
  }
  public resetLtRtCenterMixLevel() {
    this._ltRtCenterMixLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltRtCenterMixLevelInput() {
    return this._ltRtCenterMixLevel;
  }

  // lt_rt_surround_mix_level - computed: true, optional: true, required: false
  private _ltRtSurroundMixLevel?: number; 
  public get ltRtSurroundMixLevel() {
    return this.getNumberAttribute('lt_rt_surround_mix_level');
  }
  public set ltRtSurroundMixLevel(value: number) {
    this._ltRtSurroundMixLevel = value;
  }
  public resetLtRtSurroundMixLevel() {
    this._ltRtSurroundMixLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltRtSurroundMixLevelInput() {
    return this._ltRtSurroundMixLevel;
  }

  // metadata_control - computed: true, optional: true, required: false
  private _metadataControl?: string; 
  public get metadataControl() {
    return this.getStringAttribute('metadata_control');
  }
  public set metadataControl(value: string) {
    this._metadataControl = value;
  }
  public resetMetadataControl() {
    this._metadataControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataControlInput() {
    return this._metadataControl;
  }

  // passthrough_control - computed: true, optional: true, required: false
  private _passthroughControl?: string; 
  public get passthroughControl() {
    return this.getStringAttribute('passthrough_control');
  }
  public set passthroughControl(value: string) {
    this._passthroughControl = value;
  }
  public resetPassthroughControl() {
    this._passthroughControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughControlInput() {
    return this._passthroughControl;
  }

  // phase_control - computed: true, optional: true, required: false
  private _phaseControl?: string; 
  public get phaseControl() {
    return this.getStringAttribute('phase_control');
  }
  public set phaseControl(value: string) {
    this._phaseControl = value;
  }
  public resetPhaseControl() {
    this._phaseControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseControlInput() {
    return this._phaseControl;
  }

  // stereo_downmix - computed: true, optional: true, required: false
  private _stereoDownmix?: string; 
  public get stereoDownmix() {
    return this.getStringAttribute('stereo_downmix');
  }
  public set stereoDownmix(value: string) {
    this._stereoDownmix = value;
  }
  public resetStereoDownmix() {
    this._stereoDownmix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stereoDownmixInput() {
    return this._stereoDownmix;
  }

  // surround_ex_mode - computed: true, optional: true, required: false
  private _surroundExMode?: string; 
  public get surroundExMode() {
    return this.getStringAttribute('surround_ex_mode');
  }
  public set surroundExMode(value: string) {
    this._surroundExMode = value;
  }
  public resetSurroundExMode() {
    this._surroundExMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surroundExModeInput() {
    return this._surroundExMode;
  }

  // surround_mode - computed: true, optional: true, required: false
  private _surroundMode?: string; 
  public get surroundMode() {
    return this.getStringAttribute('surround_mode');
  }
  public set surroundMode(value: string) {
    this._surroundMode = value;
  }
  public resetSurroundMode() {
    this._surroundMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surroundModeInput() {
    return this._surroundMode;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#coding_mode MedialiveChannel#coding_mode}
  */
  readonly codingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#sample_rate MedialiveChannel#sample_rate}
  */
  readonly sampleRate?: number;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    coding_mode: cdktf.stringToTerraform(struct!.codingMode),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingMode = this._codingMode;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codingMode = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codingMode = value.codingMode;
      this._sampleRate = value.sampleRate;
    }
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // coding_mode - computed: true, optional: true, required: false
  private _codingMode?: string; 
  public get codingMode() {
    return this.getStringAttribute('coding_mode');
  }
  public set codingMode(value: string) {
    this._codingMode = value;
  }
  public resetCodingMode() {
    this._codingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codingModeInput() {
    return this._codingMode;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings {
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bit_depth MedialiveChannel#bit_depth}
  */
  readonly bitDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#coding_mode MedialiveChannel#coding_mode}
  */
  readonly codingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#sample_rate MedialiveChannel#sample_rate}
  */
  readonly sampleRate?: number;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_depth: cdktf.numberToTerraform(struct!.bitDepth),
    coding_mode: cdktf.stringToTerraform(struct!.codingMode),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitDepth = this._bitDepth;
    }
    if (this._codingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingMode = this._codingMode;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitDepth = undefined;
      this._codingMode = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitDepth = value.bitDepth;
      this._codingMode = value.codingMode;
      this._sampleRate = value.sampleRate;
    }
  }

  // bit_depth - computed: true, optional: true, required: false
  private _bitDepth?: number; 
  public get bitDepth() {
    return this.getNumberAttribute('bit_depth');
  }
  public set bitDepth(value: number) {
    this._bitDepth = value;
  }
  public resetBitDepth() {
    this._bitDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitDepthInput() {
    return this._bitDepth;
  }

  // coding_mode - computed: true, optional: true, required: false
  private _codingMode?: string; 
  public get codingMode() {
    return this.getStringAttribute('coding_mode');
  }
  public set codingMode(value: string) {
    this._codingMode = value;
  }
  public resetCodingMode() {
    this._codingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codingModeInput() {
    return this._codingMode;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings {
  /**
  * aac_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#aac_settings MedialiveChannel#aac_settings}
  */
  readonly aacSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings;
  /**
  * ac3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ac3_settings MedialiveChannel#ac3_settings}
  */
  readonly ac3Settings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings;
  /**
  * eac3_atmos_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#eac3_atmos_settings MedialiveChannel#eac3_atmos_settings}
  */
  readonly eac3AtmosSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings;
  /**
  * eac3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#eac3_settings MedialiveChannel#eac3_settings}
  */
  readonly eac3Settings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings;
  /**
  * mp2_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#mp2_settings MedialiveChannel#mp2_settings}
  */
  readonly mp2Settings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings;
  /**
  * pass_through_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pass_through_settings MedialiveChannel#pass_through_settings}
  */
  readonly passThroughSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings;
  /**
  * wav_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#wav_settings MedialiveChannel#wav_settings}
  */
  readonly wavSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aac_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsToTerraform(struct!.aacSettings),
    ac3_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsToTerraform(struct!.ac3Settings),
    eac3_atmos_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsToTerraform(struct!.eac3AtmosSettings),
    eac3_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsToTerraform(struct!.eac3Settings),
    mp2_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsToTerraform(struct!.mp2Settings),
    pass_through_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsToTerraform(struct!.passThroughSettings),
    wav_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsToTerraform(struct!.wavSettings),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aacSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aacSettings = this._aacSettings?.internalValue;
    }
    if (this._ac3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ac3Settings = this._ac3Settings?.internalValue;
    }
    if (this._eac3AtmosSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eac3AtmosSettings = this._eac3AtmosSettings?.internalValue;
    }
    if (this._eac3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eac3Settings = this._eac3Settings?.internalValue;
    }
    if (this._mp2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mp2Settings = this._mp2Settings?.internalValue;
    }
    if (this._passThroughSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughSettings = this._passThroughSettings?.internalValue;
    }
    if (this._wavSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wavSettings = this._wavSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aacSettings.internalValue = undefined;
      this._ac3Settings.internalValue = undefined;
      this._eac3AtmosSettings.internalValue = undefined;
      this._eac3Settings.internalValue = undefined;
      this._mp2Settings.internalValue = undefined;
      this._passThroughSettings.internalValue = undefined;
      this._wavSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aacSettings.internalValue = value.aacSettings;
      this._ac3Settings.internalValue = value.ac3Settings;
      this._eac3AtmosSettings.internalValue = value.eac3AtmosSettings;
      this._eac3Settings.internalValue = value.eac3Settings;
      this._mp2Settings.internalValue = value.mp2Settings;
      this._passThroughSettings.internalValue = value.passThroughSettings;
      this._wavSettings.internalValue = value.wavSettings;
    }
  }

  // aac_settings - computed: false, optional: true, required: false
  private _aacSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsOutputReference(this, "aac_settings");
  public get aacSettings() {
    return this._aacSettings;
  }
  public putAacSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings) {
    this._aacSettings.internalValue = value;
  }
  public resetAacSettings() {
    this._aacSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aacSettingsInput() {
    return this._aacSettings.internalValue;
  }

  // ac3_settings - computed: false, optional: true, required: false
  private _ac3Settings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsOutputReference(this, "ac3_settings");
  public get ac3Settings() {
    return this._ac3Settings;
  }
  public putAc3Settings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings) {
    this._ac3Settings.internalValue = value;
  }
  public resetAc3Settings() {
    this._ac3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ac3SettingsInput() {
    return this._ac3Settings.internalValue;
  }

  // eac3_atmos_settings - computed: false, optional: true, required: false
  private _eac3AtmosSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsOutputReference(this, "eac3_atmos_settings");
  public get eac3AtmosSettings() {
    return this._eac3AtmosSettings;
  }
  public putEac3AtmosSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings) {
    this._eac3AtmosSettings.internalValue = value;
  }
  public resetEac3AtmosSettings() {
    this._eac3AtmosSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eac3AtmosSettingsInput() {
    return this._eac3AtmosSettings.internalValue;
  }

  // eac3_settings - computed: false, optional: true, required: false
  private _eac3Settings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsOutputReference(this, "eac3_settings");
  public get eac3Settings() {
    return this._eac3Settings;
  }
  public putEac3Settings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings) {
    this._eac3Settings.internalValue = value;
  }
  public resetEac3Settings() {
    this._eac3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eac3SettingsInput() {
    return this._eac3Settings.internalValue;
  }

  // mp2_settings - computed: false, optional: true, required: false
  private _mp2Settings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsOutputReference(this, "mp2_settings");
  public get mp2Settings() {
    return this._mp2Settings;
  }
  public putMp2Settings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings) {
    this._mp2Settings.internalValue = value;
  }
  public resetMp2Settings() {
    this._mp2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp2SettingsInput() {
    return this._mp2Settings.internalValue;
  }

  // pass_through_settings - computed: false, optional: true, required: false
  private _passThroughSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsOutputReference(this, "pass_through_settings");
  public get passThroughSettings() {
    return this._passThroughSettings;
  }
  public putPassThroughSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings) {
    this._passThroughSettings.internalValue = value;
  }
  public resetPassThroughSettings() {
    this._passThroughSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughSettingsInput() {
    return this._passThroughSettings.internalValue;
  }

  // wav_settings - computed: false, optional: true, required: false
  private _wavSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsOutputReference(this, "wav_settings");
  public get wavSettings() {
    return this._wavSettings;
  }
  public putWavSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings) {
    this._wavSettings.internalValue = value;
  }
  public resetWavSettings() {
    this._wavSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wavSettingsInput() {
    return this._wavSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#gain MedialiveChannel#gain}
  */
  readonly gain: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_channel MedialiveChannel#input_channel}
  */
  readonly inputChannel: number;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gain: cdktf.numberToTerraform(struct!.gain),
    input_channel: cdktf.numberToTerraform(struct!.inputChannel),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gain !== undefined) {
      hasAnyValues = true;
      internalValueResult.gain = this._gain;
    }
    if (this._inputChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputChannel = this._inputChannel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gain = undefined;
      this._inputChannel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gain = value.gain;
      this._inputChannel = value.inputChannel;
    }
  }

  // gain - computed: false, optional: false, required: true
  private _gain?: number; 
  public get gain() {
    return this.getNumberAttribute('gain');
  }
  public set gain(value: number) {
    this._gain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gainInput() {
    return this._gain;
  }

  // input_channel - computed: false, optional: false, required: true
  private _inputChannel?: number; 
  public get inputChannel() {
    return this.getNumberAttribute('input_channel');
  }
  public set inputChannel(value: number) {
    this._inputChannel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputChannelInput() {
    return this._inputChannel;
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsOutputReference {
    return new MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_channel MedialiveChannel#output_channel}
  */
  readonly outputChannel: number;
  /**
  * input_channel_levels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_channel_levels MedialiveChannel#input_channel_levels}
  */
  readonly inputChannelLevels: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels[] | cdktf.IResolvable;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_channel: cdktf.numberToTerraform(struct!.outputChannel),
    input_channel_levels: cdktf.listMapper(medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsToTerraform, true)(struct!.inputChannelLevels),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputChannel = this._outputChannel;
    }
    if (this._inputChannelLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputChannelLevels = this._inputChannelLevels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputChannel = undefined;
      this._inputChannelLevels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputChannel = value.outputChannel;
      this._inputChannelLevels.internalValue = value.inputChannelLevels;
    }
  }

  // output_channel - computed: false, optional: false, required: true
  private _outputChannel?: number; 
  public get outputChannel() {
    return this.getNumberAttribute('output_channel');
  }
  public set outputChannel(value: number) {
    this._outputChannel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputChannelInput() {
    return this._outputChannel;
  }

  // input_channel_levels - computed: false, optional: false, required: true
  private _inputChannelLevels = new MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsList(this, "input_channel_levels", true);
  public get inputChannelLevels() {
    return this._inputChannelLevels;
  }
  public putInputChannelLevels(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels[] | cdktf.IResolvable) {
    this._inputChannelLevels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputChannelLevelsInput() {
    return this._inputChannelLevels.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsOutputReference {
    return new MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#channels_in MedialiveChannel#channels_in}
  */
  readonly channelsIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#channels_out MedialiveChannel#channels_out}
  */
  readonly channelsOut?: number;
  /**
  * channel_mappings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#channel_mappings MedialiveChannel#channel_mappings}
  */
  readonly channelMappings: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings[] | cdktf.IResolvable;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channels_in: cdktf.numberToTerraform(struct!.channelsIn),
    channels_out: cdktf.numberToTerraform(struct!.channelsOut),
    channel_mappings: cdktf.listMapper(medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsToTerraform, true)(struct!.channelMappings),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelsIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelsIn = this._channelsIn;
    }
    if (this._channelsOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelsOut = this._channelsOut;
    }
    if (this._channelMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelMappings = this._channelMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelsIn = undefined;
      this._channelsOut = undefined;
      this._channelMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelsIn = value.channelsIn;
      this._channelsOut = value.channelsOut;
      this._channelMappings.internalValue = value.channelMappings;
    }
  }

  // channels_in - computed: true, optional: true, required: false
  private _channelsIn?: number; 
  public get channelsIn() {
    return this.getNumberAttribute('channels_in');
  }
  public set channelsIn(value: number) {
    this._channelsIn = value;
  }
  public resetChannelsIn() {
    this._channelsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInInput() {
    return this._channelsIn;
  }

  // channels_out - computed: true, optional: true, required: false
  private _channelsOut?: number; 
  public get channelsOut() {
    return this.getNumberAttribute('channels_out');
  }
  public set channelsOut(value: number) {
    this._channelsOut = value;
  }
  public resetChannelsOut() {
    this._channelsOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsOutInput() {
    return this._channelsOut;
  }

  // channel_mappings - computed: false, optional: false, required: true
  private _channelMappings = new MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsList(this, "channel_mappings", true);
  public get channelMappings() {
    return this._channelMappings;
  }
  public putChannelMappings(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings[] | cdktf.IResolvable) {
    this._channelMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelMappingsInput() {
    return this._channelMappings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsAudioDescriptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_selector_name MedialiveChannel#audio_selector_name}
  */
  readonly audioSelectorName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_type MedialiveChannel#audio_type}
  */
  readonly audioType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_type_control MedialiveChannel#audio_type_control}
  */
  readonly audioTypeControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#language_code MedialiveChannel#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#language_code_control MedialiveChannel#language_code_control}
  */
  readonly languageCodeControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#stream_name MedialiveChannel#stream_name}
  */
  readonly streamName?: string;
  /**
  * audio_normalization_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_normalization_settings MedialiveChannel#audio_normalization_settings}
  */
  readonly audioNormalizationSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings;
  /**
  * audio_watermark_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_watermark_settings MedialiveChannel#audio_watermark_settings}
  */
  readonly audioWatermarkSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings;
  /**
  * codec_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#codec_settings MedialiveChannel#codec_settings}
  */
  readonly codecSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings;
  /**
  * remix_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#remix_settings MedialiveChannel#remix_settings}
  */
  readonly remixSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings;
}

export function medialiveChannelEncoderSettingsAudioDescriptionsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_selector_name: cdktf.stringToTerraform(struct!.audioSelectorName),
    audio_type: cdktf.stringToTerraform(struct!.audioType),
    audio_type_control: cdktf.stringToTerraform(struct!.audioTypeControl),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    language_code_control: cdktf.stringToTerraform(struct!.languageCodeControl),
    name: cdktf.stringToTerraform(struct!.name),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
    audio_normalization_settings: medialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsToTerraform(struct!.audioNormalizationSettings),
    audio_watermark_settings: medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsToTerraform(struct!.audioWatermarkSettings),
    codec_settings: medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsToTerraform(struct!.codecSettings),
    remix_settings: medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsToTerraform(struct!.remixSettings),
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioSelectorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSelectorName = this._audioSelectorName;
    }
    if (this._audioType !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioType = this._audioType;
    }
    if (this._audioTypeControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioTypeControl = this._audioTypeControl;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._languageCodeControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCodeControl = this._languageCodeControl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    if (this._audioNormalizationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioNormalizationSettings = this._audioNormalizationSettings?.internalValue;
    }
    if (this._audioWatermarkSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioWatermarkSettings = this._audioWatermarkSettings?.internalValue;
    }
    if (this._codecSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codecSettings = this._codecSettings?.internalValue;
    }
    if (this._remixSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remixSettings = this._remixSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioSelectorName = undefined;
      this._audioType = undefined;
      this._audioTypeControl = undefined;
      this._languageCode = undefined;
      this._languageCodeControl = undefined;
      this._name = undefined;
      this._streamName = undefined;
      this._audioNormalizationSettings.internalValue = undefined;
      this._audioWatermarkSettings.internalValue = undefined;
      this._codecSettings.internalValue = undefined;
      this._remixSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioSelectorName = value.audioSelectorName;
      this._audioType = value.audioType;
      this._audioTypeControl = value.audioTypeControl;
      this._languageCode = value.languageCode;
      this._languageCodeControl = value.languageCodeControl;
      this._name = value.name;
      this._streamName = value.streamName;
      this._audioNormalizationSettings.internalValue = value.audioNormalizationSettings;
      this._audioWatermarkSettings.internalValue = value.audioWatermarkSettings;
      this._codecSettings.internalValue = value.codecSettings;
      this._remixSettings.internalValue = value.remixSettings;
    }
  }

  // audio_selector_name - computed: false, optional: false, required: true
  private _audioSelectorName?: string; 
  public get audioSelectorName() {
    return this.getStringAttribute('audio_selector_name');
  }
  public set audioSelectorName(value: string) {
    this._audioSelectorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSelectorNameInput() {
    return this._audioSelectorName;
  }

  // audio_type - computed: true, optional: true, required: false
  private _audioType?: string; 
  public get audioType() {
    return this.getStringAttribute('audio_type');
  }
  public set audioType(value: string) {
    this._audioType = value;
  }
  public resetAudioType() {
    this._audioType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTypeInput() {
    return this._audioType;
  }

  // audio_type_control - computed: true, optional: true, required: false
  private _audioTypeControl?: string; 
  public get audioTypeControl() {
    return this.getStringAttribute('audio_type_control');
  }
  public set audioTypeControl(value: string) {
    this._audioTypeControl = value;
  }
  public resetAudioTypeControl() {
    this._audioTypeControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTypeControlInput() {
    return this._audioTypeControl;
  }

  // language_code - computed: true, optional: true, required: false
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

  // language_code_control - computed: true, optional: true, required: false
  private _languageCodeControl?: string; 
  public get languageCodeControl() {
    return this.getStringAttribute('language_code_control');
  }
  public set languageCodeControl(value: string) {
    this._languageCodeControl = value;
  }
  public resetLanguageCodeControl() {
    this._languageCodeControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeControlInput() {
    return this._languageCodeControl;
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

  // stream_name - computed: true, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // audio_normalization_settings - computed: false, optional: true, required: false
  private _audioNormalizationSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsOutputReference(this, "audio_normalization_settings");
  public get audioNormalizationSettings() {
    return this._audioNormalizationSettings;
  }
  public putAudioNormalizationSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings) {
    this._audioNormalizationSettings.internalValue = value;
  }
  public resetAudioNormalizationSettings() {
    this._audioNormalizationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioNormalizationSettingsInput() {
    return this._audioNormalizationSettings.internalValue;
  }

  // audio_watermark_settings - computed: false, optional: true, required: false
  private _audioWatermarkSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsOutputReference(this, "audio_watermark_settings");
  public get audioWatermarkSettings() {
    return this._audioWatermarkSettings;
  }
  public putAudioWatermarkSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings) {
    this._audioWatermarkSettings.internalValue = value;
  }
  public resetAudioWatermarkSettings() {
    this._audioWatermarkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioWatermarkSettingsInput() {
    return this._audioWatermarkSettings.internalValue;
  }

  // codec_settings - computed: false, optional: true, required: false
  private _codecSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsOutputReference(this, "codec_settings");
  public get codecSettings() {
    return this._codecSettings;
  }
  public putCodecSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings) {
    this._codecSettings.internalValue = value;
  }
  public resetCodecSettings() {
    this._codecSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecSettingsInput() {
    return this._codecSettings.internalValue;
  }

  // remix_settings - computed: false, optional: true, required: false
  private _remixSettings = new MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsOutputReference(this, "remix_settings");
  public get remixSettings() {
    return this._remixSettings;
  }
  public putRemixSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings) {
    this._remixSettings.internalValue = value;
  }
  public resetRemixSettings() {
    this._remixSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remixSettingsInput() {
    return this._remixSettings.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsAudioDescriptionsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsAudioDescriptions[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsOutputReference {
    return new MedialiveChannelEncoderSettingsAudioDescriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#password_param MedialiveChannel#password_param}
  */
  readonly passwordParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#uri MedialiveChannel#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#username MedialiveChannel#username}
  */
  readonly username?: string;
}

export function medialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageToTerraform(struct?: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageOutputReference | MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_param: cdktf.stringToTerraform(struct!.passwordParam),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordParam = this._passwordParam;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordParam = undefined;
      this._uri = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordParam = value.passwordParam;
      this._uri = value.uri;
      this._username = value.username;
    }
  }

  // password_param - computed: true, optional: true, required: false
  private _passwordParam?: string; 
  public get passwordParam() {
    return this.getStringAttribute('password_param');
  }
  public set passwordParam(value: string) {
    this._passwordParam = value;
  }
  public resetPasswordParam() {
    this._passwordParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordParamInput() {
    return this._passwordParam;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MedialiveChannelEncoderSettingsAvailBlanking {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#state MedialiveChannel#state}
  */
  readonly state?: string;
  /**
  * avail_blanking_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#avail_blanking_image MedialiveChannel#avail_blanking_image}
  */
  readonly availBlankingImage?: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage;
}

export function medialiveChannelEncoderSettingsAvailBlankingToTerraform(struct?: MedialiveChannelEncoderSettingsAvailBlankingOutputReference | MedialiveChannelEncoderSettingsAvailBlanking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
    avail_blanking_image: medialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageToTerraform(struct!.availBlankingImage),
  }
}

export class MedialiveChannelEncoderSettingsAvailBlankingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsAvailBlanking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._availBlankingImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availBlankingImage = this._availBlankingImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsAvailBlanking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
      this._availBlankingImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
      this._availBlankingImage.internalValue = value.availBlankingImage;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // avail_blanking_image - computed: false, optional: true, required: false
  private _availBlankingImage = new MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageOutputReference(this, "avail_blanking_image");
  public get availBlankingImage() {
    return this._availBlankingImage;
  }
  public putAvailBlankingImage(value: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage) {
    this._availBlankingImage.internalValue = value;
  }
  public resetAvailBlankingImage() {
    this._availBlankingImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availBlankingImageInput() {
    return this._availBlankingImage.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#canned_acl MedialiveChannel#canned_acl}
  */
  readonly cannedAcl?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings {
  /**
  * archive_s3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#archive_s3_settings MedialiveChannel#archive_s3_settings}
  */
  readonly archiveS3Settings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_s3_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsToTerraform(struct!.archiveS3Settings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveS3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveS3Settings = this._archiveS3Settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveS3Settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveS3Settings.internalValue = value.archiveS3Settings;
    }
  }

  // archive_s3_settings - computed: false, optional: true, required: false
  private _archiveS3Settings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsOutputReference(this, "archive_s3_settings");
  public get archiveS3Settings() {
    return this._archiveS3Settings;
  }
  public putArchiveS3Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings) {
    this._archiveS3Settings.internalValue = value;
  }
  public resetArchiveS3Settings() {
    this._archiveS3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveS3SettingsInput() {
    return this._archiveS3Settings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rollover_interval MedialiveChannel#rollover_interval}
  */
  readonly rolloverInterval?: number;
  /**
  * archive_cdn_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#archive_cdn_settings MedialiveChannel#archive_cdn_settings}
  */
  readonly archiveCdnSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollover_interval: cdktf.numberToTerraform(struct!.rolloverInterval),
    archive_cdn_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsToTerraform(struct!.archiveCdnSettings),
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationToTerraform(struct!.destination),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolloverInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloverInterval = this._rolloverInterval;
    }
    if (this._archiveCdnSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveCdnSettings = this._archiveCdnSettings?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rolloverInterval = undefined;
      this._archiveCdnSettings.internalValue = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rolloverInterval = value.rolloverInterval;
      this._archiveCdnSettings.internalValue = value.archiveCdnSettings;
      this._destination.internalValue = value.destination;
    }
  }

  // rollover_interval - computed: false, optional: true, required: false
  private _rolloverInterval?: number; 
  public get rolloverInterval() {
    return this.getNumberAttribute('rollover_interval');
  }
  public set rolloverInterval(value: number) {
    this._rolloverInterval = value;
  }
  public resetRolloverInterval() {
    this._rolloverInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloverIntervalInput() {
    return this._rolloverInterval;
  }

  // archive_cdn_settings - computed: false, optional: true, required: false
  private _archiveCdnSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsOutputReference(this, "archive_cdn_settings");
  public get archiveCdnSettings() {
    return this._archiveCdnSettings;
  }
  public putArchiveCdnSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings) {
    this._archiveCdnSettings.internalValue = value;
  }
  public resetArchiveCdnSettings() {
    this._archiveCdnSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveCdnSettingsInput() {
    return this._archiveCdnSettings.internalValue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsOutputReference {
    return new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#canned_acl MedialiveChannel#canned_acl}
  */
  readonly cannedAcl?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings {
  /**
  * frame_capture_s3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#frame_capture_s3_settings MedialiveChannel#frame_capture_s3_settings}
  */
  readonly frameCaptureS3Settings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frame_capture_s3_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsToTerraform(struct!.frameCaptureS3Settings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frameCaptureS3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameCaptureS3Settings = this._frameCaptureS3Settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frameCaptureS3Settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frameCaptureS3Settings.internalValue = value.frameCaptureS3Settings;
    }
  }

  // frame_capture_s3_settings - computed: false, optional: true, required: false
  private _frameCaptureS3Settings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsOutputReference(this, "frame_capture_s3_settings");
  public get frameCaptureS3Settings() {
    return this._frameCaptureS3Settings;
  }
  public putFrameCaptureS3Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings) {
    this._frameCaptureS3Settings.internalValue = value;
  }
  public resetFrameCaptureS3Settings() {
    this._frameCaptureS3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameCaptureS3SettingsInput() {
    return this._frameCaptureS3Settings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings {
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination;
  /**
  * frame_capture_cdn_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#frame_capture_cdn_settings MedialiveChannel#frame_capture_cdn_settings}
  */
  readonly frameCaptureCdnSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationToTerraform(struct!.destination),
    frame_capture_cdn_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsToTerraform(struct!.frameCaptureCdnSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._frameCaptureCdnSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameCaptureCdnSettings = this._frameCaptureCdnSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination.internalValue = undefined;
      this._frameCaptureCdnSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination.internalValue = value.destination;
      this._frameCaptureCdnSettings.internalValue = value.frameCaptureCdnSettings;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // frame_capture_cdn_settings - computed: false, optional: true, required: false
  private _frameCaptureCdnSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsOutputReference(this, "frame_capture_cdn_settings");
  public get frameCaptureCdnSettings() {
    return this._frameCaptureCdnSettings;
  }
  public putFrameCaptureCdnSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings) {
    this._frameCaptureCdnSettings.internalValue = value;
  }
  public resetFrameCaptureCdnSettings() {
    this._frameCaptureCdnSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameCaptureCdnSettingsInput() {
    return this._frameCaptureCdnSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#caption_channel MedialiveChannel#caption_channel}
  */
  readonly captionChannel: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#language_code MedialiveChannel#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#language_description MedialiveChannel#language_description}
  */
  readonly languageDescription: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caption_channel: cdktf.numberToTerraform(struct!.captionChannel),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    language_description: cdktf.stringToTerraform(struct!.languageDescription),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captionChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionChannel = this._captionChannel;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._languageDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageDescription = this._languageDescription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captionChannel = undefined;
      this._languageCode = undefined;
      this._languageDescription = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captionChannel = value.captionChannel;
      this._languageCode = value.languageCode;
      this._languageDescription = value.languageDescription;
    }
  }

  // caption_channel - computed: false, optional: false, required: true
  private _captionChannel?: number; 
  public get captionChannel() {
    return this.getNumberAttribute('caption_channel');
  }
  public set captionChannel(value: number) {
    this._captionChannel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captionChannelInput() {
    return this._captionChannel;
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

  // language_description - computed: false, optional: false, required: true
  private _languageDescription?: string; 
  public get languageDescription() {
    return this.getStringAttribute('language_description');
  }
  public set languageDescription(value: string) {
    this._languageDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageDescriptionInput() {
    return this._languageDescription;
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsOutputReference {
    return new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
  */
  readonly connectionRetryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
  */
  readonly filecacheDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#http_transfer_mode MedialiveChannel#http_transfer_mode}
  */
  readonly httpTransferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#num_retries MedialiveChannel#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#restart_delay MedialiveChannel#restart_delay}
  */
  readonly restartDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#salt MedialiveChannel#salt}
  */
  readonly salt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#token MedialiveChannel#token}
  */
  readonly token?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_retry_interval: cdktf.numberToTerraform(struct!.connectionRetryInterval),
    filecache_duration: cdktf.numberToTerraform(struct!.filecacheDuration),
    http_transfer_mode: cdktf.stringToTerraform(struct!.httpTransferMode),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    restart_delay: cdktf.numberToTerraform(struct!.restartDelay),
    salt: cdktf.stringToTerraform(struct!.salt),
    token: cdktf.stringToTerraform(struct!.token),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRetryInterval = this._connectionRetryInterval;
    }
    if (this._filecacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.filecacheDuration = this._filecacheDuration;
    }
    if (this._httpTransferMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTransferMode = this._httpTransferMode;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._restartDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDelay = this._restartDelay;
    }
    if (this._salt !== undefined) {
      hasAnyValues = true;
      internalValueResult.salt = this._salt;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionRetryInterval = undefined;
      this._filecacheDuration = undefined;
      this._httpTransferMode = undefined;
      this._numRetries = undefined;
      this._restartDelay = undefined;
      this._salt = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionRetryInterval = value.connectionRetryInterval;
      this._filecacheDuration = value.filecacheDuration;
      this._httpTransferMode = value.httpTransferMode;
      this._numRetries = value.numRetries;
      this._restartDelay = value.restartDelay;
      this._salt = value.salt;
      this._token = value.token;
    }
  }

  // connection_retry_interval - computed: false, optional: true, required: false
  private _connectionRetryInterval?: number; 
  public get connectionRetryInterval() {
    return this.getNumberAttribute('connection_retry_interval');
  }
  public set connectionRetryInterval(value: number) {
    this._connectionRetryInterval = value;
  }
  public resetConnectionRetryInterval() {
    this._connectionRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryIntervalInput() {
    return this._connectionRetryInterval;
  }

  // filecache_duration - computed: false, optional: true, required: false
  private _filecacheDuration?: number; 
  public get filecacheDuration() {
    return this.getNumberAttribute('filecache_duration');
  }
  public set filecacheDuration(value: number) {
    this._filecacheDuration = value;
  }
  public resetFilecacheDuration() {
    this._filecacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filecacheDurationInput() {
    return this._filecacheDuration;
  }

  // http_transfer_mode - computed: true, optional: true, required: false
  private _httpTransferMode?: string; 
  public get httpTransferMode() {
    return this.getStringAttribute('http_transfer_mode');
  }
  public set httpTransferMode(value: string) {
    this._httpTransferMode = value;
  }
  public resetHttpTransferMode() {
    this._httpTransferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTransferModeInput() {
    return this._httpTransferMode;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // restart_delay - computed: false, optional: true, required: false
  private _restartDelay?: number; 
  public get restartDelay() {
    return this.getNumberAttribute('restart_delay');
  }
  public set restartDelay(value: number) {
    this._restartDelay = value;
  }
  public resetRestartDelay() {
    this._restartDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDelayInput() {
    return this._restartDelay;
  }

  // salt - computed: true, optional: true, required: false
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
  */
  readonly connectionRetryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
  */
  readonly filecacheDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#num_retries MedialiveChannel#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#restart_delay MedialiveChannel#restart_delay}
  */
  readonly restartDelay?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_retry_interval: cdktf.numberToTerraform(struct!.connectionRetryInterval),
    filecache_duration: cdktf.numberToTerraform(struct!.filecacheDuration),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    restart_delay: cdktf.numberToTerraform(struct!.restartDelay),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRetryInterval = this._connectionRetryInterval;
    }
    if (this._filecacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.filecacheDuration = this._filecacheDuration;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._restartDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDelay = this._restartDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionRetryInterval = undefined;
      this._filecacheDuration = undefined;
      this._numRetries = undefined;
      this._restartDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionRetryInterval = value.connectionRetryInterval;
      this._filecacheDuration = value.filecacheDuration;
      this._numRetries = value.numRetries;
      this._restartDelay = value.restartDelay;
    }
  }

  // connection_retry_interval - computed: false, optional: true, required: false
  private _connectionRetryInterval?: number; 
  public get connectionRetryInterval() {
    return this.getNumberAttribute('connection_retry_interval');
  }
  public set connectionRetryInterval(value: number) {
    this._connectionRetryInterval = value;
  }
  public resetConnectionRetryInterval() {
    this._connectionRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryIntervalInput() {
    return this._connectionRetryInterval;
  }

  // filecache_duration - computed: false, optional: true, required: false
  private _filecacheDuration?: number; 
  public get filecacheDuration() {
    return this.getNumberAttribute('filecache_duration');
  }
  public set filecacheDuration(value: number) {
    this._filecacheDuration = value;
  }
  public resetFilecacheDuration() {
    this._filecacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filecacheDurationInput() {
    return this._filecacheDuration;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // restart_delay - computed: false, optional: true, required: false
  private _restartDelay?: number; 
  public get restartDelay() {
    return this.getNumberAttribute('restart_delay');
  }
  public set restartDelay(value: number) {
    this._restartDelay = value;
  }
  public resetRestartDelay() {
    this._restartDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDelayInput() {
    return this._restartDelay;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
  */
  readonly connectionRetryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
  */
  readonly filecacheDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#media_store_storage_class MedialiveChannel#media_store_storage_class}
  */
  readonly mediaStoreStorageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#num_retries MedialiveChannel#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#restart_delay MedialiveChannel#restart_delay}
  */
  readonly restartDelay?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_retry_interval: cdktf.numberToTerraform(struct!.connectionRetryInterval),
    filecache_duration: cdktf.numberToTerraform(struct!.filecacheDuration),
    media_store_storage_class: cdktf.stringToTerraform(struct!.mediaStoreStorageClass),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    restart_delay: cdktf.numberToTerraform(struct!.restartDelay),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRetryInterval = this._connectionRetryInterval;
    }
    if (this._filecacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.filecacheDuration = this._filecacheDuration;
    }
    if (this._mediaStoreStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaStoreStorageClass = this._mediaStoreStorageClass;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._restartDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDelay = this._restartDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionRetryInterval = undefined;
      this._filecacheDuration = undefined;
      this._mediaStoreStorageClass = undefined;
      this._numRetries = undefined;
      this._restartDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionRetryInterval = value.connectionRetryInterval;
      this._filecacheDuration = value.filecacheDuration;
      this._mediaStoreStorageClass = value.mediaStoreStorageClass;
      this._numRetries = value.numRetries;
      this._restartDelay = value.restartDelay;
    }
  }

  // connection_retry_interval - computed: false, optional: true, required: false
  private _connectionRetryInterval?: number; 
  public get connectionRetryInterval() {
    return this.getNumberAttribute('connection_retry_interval');
  }
  public set connectionRetryInterval(value: number) {
    this._connectionRetryInterval = value;
  }
  public resetConnectionRetryInterval() {
    this._connectionRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryIntervalInput() {
    return this._connectionRetryInterval;
  }

  // filecache_duration - computed: false, optional: true, required: false
  private _filecacheDuration?: number; 
  public get filecacheDuration() {
    return this.getNumberAttribute('filecache_duration');
  }
  public set filecacheDuration(value: number) {
    this._filecacheDuration = value;
  }
  public resetFilecacheDuration() {
    this._filecacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filecacheDurationInput() {
    return this._filecacheDuration;
  }

  // media_store_storage_class - computed: true, optional: true, required: false
  private _mediaStoreStorageClass?: string; 
  public get mediaStoreStorageClass() {
    return this.getStringAttribute('media_store_storage_class');
  }
  public set mediaStoreStorageClass(value: string) {
    this._mediaStoreStorageClass = value;
  }
  public resetMediaStoreStorageClass() {
    this._mediaStoreStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaStoreStorageClassInput() {
    return this._mediaStoreStorageClass;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // restart_delay - computed: false, optional: true, required: false
  private _restartDelay?: number; 
  public get restartDelay() {
    return this.getNumberAttribute('restart_delay');
  }
  public set restartDelay(value: number) {
    this._restartDelay = value;
  }
  public resetRestartDelay() {
    this._restartDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDelayInput() {
    return this._restartDelay;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#canned_acl MedialiveChannel#canned_acl}
  */
  readonly cannedAcl?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
  */
  readonly connectionRetryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
  */
  readonly filecacheDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#http_transfer_mode MedialiveChannel#http_transfer_mode}
  */
  readonly httpTransferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#num_retries MedialiveChannel#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#restart_delay MedialiveChannel#restart_delay}
  */
  readonly restartDelay?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_retry_interval: cdktf.numberToTerraform(struct!.connectionRetryInterval),
    filecache_duration: cdktf.numberToTerraform(struct!.filecacheDuration),
    http_transfer_mode: cdktf.stringToTerraform(struct!.httpTransferMode),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    restart_delay: cdktf.numberToTerraform(struct!.restartDelay),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRetryInterval = this._connectionRetryInterval;
    }
    if (this._filecacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.filecacheDuration = this._filecacheDuration;
    }
    if (this._httpTransferMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTransferMode = this._httpTransferMode;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._restartDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDelay = this._restartDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionRetryInterval = undefined;
      this._filecacheDuration = undefined;
      this._httpTransferMode = undefined;
      this._numRetries = undefined;
      this._restartDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionRetryInterval = value.connectionRetryInterval;
      this._filecacheDuration = value.filecacheDuration;
      this._httpTransferMode = value.httpTransferMode;
      this._numRetries = value.numRetries;
      this._restartDelay = value.restartDelay;
    }
  }

  // connection_retry_interval - computed: false, optional: true, required: false
  private _connectionRetryInterval?: number; 
  public get connectionRetryInterval() {
    return this.getNumberAttribute('connection_retry_interval');
  }
  public set connectionRetryInterval(value: number) {
    this._connectionRetryInterval = value;
  }
  public resetConnectionRetryInterval() {
    this._connectionRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryIntervalInput() {
    return this._connectionRetryInterval;
  }

  // filecache_duration - computed: false, optional: true, required: false
  private _filecacheDuration?: number; 
  public get filecacheDuration() {
    return this.getNumberAttribute('filecache_duration');
  }
  public set filecacheDuration(value: number) {
    this._filecacheDuration = value;
  }
  public resetFilecacheDuration() {
    this._filecacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filecacheDurationInput() {
    return this._filecacheDuration;
  }

  // http_transfer_mode - computed: true, optional: true, required: false
  private _httpTransferMode?: string; 
  public get httpTransferMode() {
    return this.getStringAttribute('http_transfer_mode');
  }
  public set httpTransferMode(value: string) {
    this._httpTransferMode = value;
  }
  public resetHttpTransferMode() {
    this._httpTransferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTransferModeInput() {
    return this._httpTransferMode;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // restart_delay - computed: false, optional: true, required: false
  private _restartDelay?: number; 
  public get restartDelay() {
    return this.getNumberAttribute('restart_delay');
  }
  public set restartDelay(value: number) {
    this._restartDelay = value;
  }
  public resetRestartDelay() {
    this._restartDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDelayInput() {
    return this._restartDelay;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings {
  /**
  * hls_akamai_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_akamai_settings MedialiveChannel#hls_akamai_settings}
  */
  readonly hlsAkamaiSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings;
  /**
  * hls_basic_put_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_basic_put_settings MedialiveChannel#hls_basic_put_settings}
  */
  readonly hlsBasicPutSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings;
  /**
  * hls_media_store_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_media_store_settings MedialiveChannel#hls_media_store_settings}
  */
  readonly hlsMediaStoreSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings;
  /**
  * hls_s3_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_s3_settings MedialiveChannel#hls_s3_settings}
  */
  readonly hlsS3Settings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings;
  /**
  * hls_webdav_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_webdav_settings MedialiveChannel#hls_webdav_settings}
  */
  readonly hlsWebdavSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hls_akamai_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsToTerraform(struct!.hlsAkamaiSettings),
    hls_basic_put_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsToTerraform(struct!.hlsBasicPutSettings),
    hls_media_store_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsToTerraform(struct!.hlsMediaStoreSettings),
    hls_s3_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsToTerraform(struct!.hlsS3Settings),
    hls_webdav_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsToTerraform(struct!.hlsWebdavSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hlsAkamaiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsAkamaiSettings = this._hlsAkamaiSettings?.internalValue;
    }
    if (this._hlsBasicPutSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsBasicPutSettings = this._hlsBasicPutSettings?.internalValue;
    }
    if (this._hlsMediaStoreSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsMediaStoreSettings = this._hlsMediaStoreSettings?.internalValue;
    }
    if (this._hlsS3Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsS3Settings = this._hlsS3Settings?.internalValue;
    }
    if (this._hlsWebdavSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsWebdavSettings = this._hlsWebdavSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hlsAkamaiSettings.internalValue = undefined;
      this._hlsBasicPutSettings.internalValue = undefined;
      this._hlsMediaStoreSettings.internalValue = undefined;
      this._hlsS3Settings.internalValue = undefined;
      this._hlsWebdavSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hlsAkamaiSettings.internalValue = value.hlsAkamaiSettings;
      this._hlsBasicPutSettings.internalValue = value.hlsBasicPutSettings;
      this._hlsMediaStoreSettings.internalValue = value.hlsMediaStoreSettings;
      this._hlsS3Settings.internalValue = value.hlsS3Settings;
      this._hlsWebdavSettings.internalValue = value.hlsWebdavSettings;
    }
  }

  // hls_akamai_settings - computed: false, optional: true, required: false
  private _hlsAkamaiSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsOutputReference(this, "hls_akamai_settings");
  public get hlsAkamaiSettings() {
    return this._hlsAkamaiSettings;
  }
  public putHlsAkamaiSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings) {
    this._hlsAkamaiSettings.internalValue = value;
  }
  public resetHlsAkamaiSettings() {
    this._hlsAkamaiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsAkamaiSettingsInput() {
    return this._hlsAkamaiSettings.internalValue;
  }

  // hls_basic_put_settings - computed: false, optional: true, required: false
  private _hlsBasicPutSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsOutputReference(this, "hls_basic_put_settings");
  public get hlsBasicPutSettings() {
    return this._hlsBasicPutSettings;
  }
  public putHlsBasicPutSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings) {
    this._hlsBasicPutSettings.internalValue = value;
  }
  public resetHlsBasicPutSettings() {
    this._hlsBasicPutSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsBasicPutSettingsInput() {
    return this._hlsBasicPutSettings.internalValue;
  }

  // hls_media_store_settings - computed: false, optional: true, required: false
  private _hlsMediaStoreSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsOutputReference(this, "hls_media_store_settings");
  public get hlsMediaStoreSettings() {
    return this._hlsMediaStoreSettings;
  }
  public putHlsMediaStoreSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings) {
    this._hlsMediaStoreSettings.internalValue = value;
  }
  public resetHlsMediaStoreSettings() {
    this._hlsMediaStoreSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsMediaStoreSettingsInput() {
    return this._hlsMediaStoreSettings.internalValue;
  }

  // hls_s3_settings - computed: false, optional: true, required: false
  private _hlsS3Settings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsOutputReference(this, "hls_s3_settings");
  public get hlsS3Settings() {
    return this._hlsS3Settings;
  }
  public putHlsS3Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings) {
    this._hlsS3Settings.internalValue = value;
  }
  public resetHlsS3Settings() {
    this._hlsS3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsS3SettingsInput() {
    return this._hlsS3Settings.internalValue;
  }

  // hls_webdav_settings - computed: false, optional: true, required: false
  private _hlsWebdavSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsOutputReference(this, "hls_webdav_settings");
  public get hlsWebdavSettings() {
    return this._hlsWebdavSettings;
  }
  public putHlsWebdavSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings) {
    this._hlsWebdavSettings.internalValue = value;
  }
  public resetHlsWebdavSettings() {
    this._hlsWebdavSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsWebdavSettingsInput() {
    return this._hlsWebdavSettings.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsOutputReference {
    return new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#password_param MedialiveChannel#password_param}
  */
  readonly passwordParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#uri MedialiveChannel#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#username MedialiveChannel#username}
  */
  readonly username?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_param: cdktf.stringToTerraform(struct!.passwordParam),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordParam = this._passwordParam;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordParam = undefined;
      this._uri = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordParam = value.passwordParam;
      this._uri = value.uri;
      this._username = value.username;
    }
  }

  // password_param - computed: true, optional: true, required: false
  private _passwordParam?: string; 
  public get passwordParam() {
    return this.getStringAttribute('password_param');
  }
  public set passwordParam(value: string) {
    this._passwordParam = value;
  }
  public resetPasswordParam() {
    this._passwordParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordParamInput() {
    return this._passwordParam;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#static_key_value MedialiveChannel#static_key_value}
  */
  readonly staticKeyValue: string;
  /**
  * key_provider_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#key_provider_server MedialiveChannel#key_provider_server}
  */
  readonly keyProviderServer?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_key_value: cdktf.stringToTerraform(struct!.staticKeyValue),
    key_provider_server: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerToTerraform(struct!.keyProviderServer),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticKeyValue = this._staticKeyValue;
    }
    if (this._keyProviderServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyProviderServer = this._keyProviderServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticKeyValue = undefined;
      this._keyProviderServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticKeyValue = value.staticKeyValue;
      this._keyProviderServer.internalValue = value.keyProviderServer;
    }
  }

  // static_key_value - computed: false, optional: false, required: true
  private _staticKeyValue?: string; 
  public get staticKeyValue() {
    return this.getStringAttribute('static_key_value');
  }
  public set staticKeyValue(value: string) {
    this._staticKeyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticKeyValueInput() {
    return this._staticKeyValue;
  }

  // key_provider_server - computed: false, optional: true, required: false
  private _keyProviderServer = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerOutputReference(this, "key_provider_server");
  public get keyProviderServer() {
    return this._keyProviderServer;
  }
  public putKeyProviderServer(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer) {
    this._keyProviderServer.internalValue = value;
  }
  public resetKeyProviderServer() {
    this._keyProviderServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyProviderServerInput() {
    return this._keyProviderServer.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsOutputReference {
    return new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings {
  /**
  * static_key_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#static_key_settings MedialiveChannel#static_key_settings}
  */
  readonly staticKeySettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings[] | cdktf.IResolvable;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_key_settings: cdktf.listMapper(medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsToTerraform, true)(struct!.staticKeySettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticKeySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticKeySettings = this._staticKeySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticKeySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticKeySettings.internalValue = value.staticKeySettings;
    }
  }

  // static_key_settings - computed: false, optional: true, required: false
  private _staticKeySettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsList(this, "static_key_settings", false);
  public get staticKeySettings() {
    return this._staticKeySettings;
  }
  public putStaticKeySettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings[] | cdktf.IResolvable) {
    this._staticKeySettings.internalValue = value;
  }
  public resetStaticKeySettings() {
    this._staticKeySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticKeySettingsInput() {
    return this._staticKeySettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ad_markers MedialiveChannel#ad_markers}
  */
  readonly adMarkers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#base_url_content MedialiveChannel#base_url_content}
  */
  readonly baseUrlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#base_url_content1 MedialiveChannel#base_url_content1}
  */
  readonly baseUrlContent1?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#base_url_manifest MedialiveChannel#base_url_manifest}
  */
  readonly baseUrlManifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#base_url_manifest1 MedialiveChannel#base_url_manifest1}
  */
  readonly baseUrlManifest1?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#caption_language_setting MedialiveChannel#caption_language_setting}
  */
  readonly captionLanguageSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#client_cache MedialiveChannel#client_cache}
  */
  readonly clientCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#codec_specification MedialiveChannel#codec_specification}
  */
  readonly codecSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#constant_iv MedialiveChannel#constant_iv}
  */
  readonly constantIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#directory_structure MedialiveChannel#directory_structure}
  */
  readonly directoryStructure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#discontinuity_tags MedialiveChannel#discontinuity_tags}
  */
  readonly discontinuityTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#encryption_type MedialiveChannel#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_id3_segment_tagging MedialiveChannel#hls_id3_segment_tagging}
  */
  readonly hlsId3SegmentTagging?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#iframe_only_playlists MedialiveChannel#iframe_only_playlists}
  */
  readonly iframeOnlyPlaylists?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#incomplete_segment_behavior MedialiveChannel#incomplete_segment_behavior}
  */
  readonly incompleteSegmentBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#index_n_segments MedialiveChannel#index_n_segments}
  */
  readonly indexNSegments?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
  */
  readonly inputLossAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#iv_in_manifest MedialiveChannel#iv_in_manifest}
  */
  readonly ivInManifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#iv_source MedialiveChannel#iv_source}
  */
  readonly ivSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#keep_segments MedialiveChannel#keep_segments}
  */
  readonly keepSegments?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#key_format MedialiveChannel#key_format}
  */
  readonly keyFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#key_format_versions MedialiveChannel#key_format_versions}
  */
  readonly keyFormatVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#manifest_compression MedialiveChannel#manifest_compression}
  */
  readonly manifestCompression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#manifest_duration_format MedialiveChannel#manifest_duration_format}
  */
  readonly manifestDurationFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#min_segment_length MedialiveChannel#min_segment_length}
  */
  readonly minSegmentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#mode MedialiveChannel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_selection MedialiveChannel#output_selection}
  */
  readonly outputSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#program_date_time MedialiveChannel#program_date_time}
  */
  readonly programDateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#program_date_time_clock MedialiveChannel#program_date_time_clock}
  */
  readonly programDateTimeClock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#program_date_time_period MedialiveChannel#program_date_time_period}
  */
  readonly programDateTimePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#redundant_manifest MedialiveChannel#redundant_manifest}
  */
  readonly redundantManifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segment_length MedialiveChannel#segment_length}
  */
  readonly segmentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segments_per_subdirectory MedialiveChannel#segments_per_subdirectory}
  */
  readonly segmentsPerSubdirectory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#stream_inf_resolution MedialiveChannel#stream_inf_resolution}
  */
  readonly streamInfResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_id3_frame MedialiveChannel#timed_metadata_id3_frame}
  */
  readonly timedMetadataId3Frame?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_id3_period MedialiveChannel#timed_metadata_id3_period}
  */
  readonly timedMetadataId3Period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timestamp_delta_milliseconds MedialiveChannel#timestamp_delta_milliseconds}
  */
  readonly timestampDeltaMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ts_file_mode MedialiveChannel#ts_file_mode}
  */
  readonly tsFileMode?: string;
  /**
  * caption_language_mappings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#caption_language_mappings MedialiveChannel#caption_language_mappings}
  */
  readonly captionLanguageMappings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings[] | cdktf.IResolvable;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination;
  /**
  * hls_cdn_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_cdn_settings MedialiveChannel#hls_cdn_settings}
  */
  readonly hlsCdnSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings[] | cdktf.IResolvable;
  /**
  * key_provider_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#key_provider_settings MedialiveChannel#key_provider_settings}
  */
  readonly keyProviderSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_markers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adMarkers),
    base_url_content: cdktf.stringToTerraform(struct!.baseUrlContent),
    base_url_content1: cdktf.stringToTerraform(struct!.baseUrlContent1),
    base_url_manifest: cdktf.stringToTerraform(struct!.baseUrlManifest),
    base_url_manifest1: cdktf.stringToTerraform(struct!.baseUrlManifest1),
    caption_language_setting: cdktf.stringToTerraform(struct!.captionLanguageSetting),
    client_cache: cdktf.stringToTerraform(struct!.clientCache),
    codec_specification: cdktf.stringToTerraform(struct!.codecSpecification),
    constant_iv: cdktf.stringToTerraform(struct!.constantIv),
    directory_structure: cdktf.stringToTerraform(struct!.directoryStructure),
    discontinuity_tags: cdktf.stringToTerraform(struct!.discontinuityTags),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    hls_id3_segment_tagging: cdktf.stringToTerraform(struct!.hlsId3SegmentTagging),
    iframe_only_playlists: cdktf.stringToTerraform(struct!.iframeOnlyPlaylists),
    incomplete_segment_behavior: cdktf.stringToTerraform(struct!.incompleteSegmentBehavior),
    index_n_segments: cdktf.numberToTerraform(struct!.indexNSegments),
    input_loss_action: cdktf.stringToTerraform(struct!.inputLossAction),
    iv_in_manifest: cdktf.stringToTerraform(struct!.ivInManifest),
    iv_source: cdktf.stringToTerraform(struct!.ivSource),
    keep_segments: cdktf.numberToTerraform(struct!.keepSegments),
    key_format: cdktf.stringToTerraform(struct!.keyFormat),
    key_format_versions: cdktf.stringToTerraform(struct!.keyFormatVersions),
    manifest_compression: cdktf.stringToTerraform(struct!.manifestCompression),
    manifest_duration_format: cdktf.stringToTerraform(struct!.manifestDurationFormat),
    min_segment_length: cdktf.numberToTerraform(struct!.minSegmentLength),
    mode: cdktf.stringToTerraform(struct!.mode),
    output_selection: cdktf.stringToTerraform(struct!.outputSelection),
    program_date_time: cdktf.stringToTerraform(struct!.programDateTime),
    program_date_time_clock: cdktf.stringToTerraform(struct!.programDateTimeClock),
    program_date_time_period: cdktf.numberToTerraform(struct!.programDateTimePeriod),
    redundant_manifest: cdktf.stringToTerraform(struct!.redundantManifest),
    segment_length: cdktf.numberToTerraform(struct!.segmentLength),
    segments_per_subdirectory: cdktf.numberToTerraform(struct!.segmentsPerSubdirectory),
    stream_inf_resolution: cdktf.stringToTerraform(struct!.streamInfResolution),
    timed_metadata_id3_frame: cdktf.stringToTerraform(struct!.timedMetadataId3Frame),
    timed_metadata_id3_period: cdktf.numberToTerraform(struct!.timedMetadataId3Period),
    timestamp_delta_milliseconds: cdktf.numberToTerraform(struct!.timestampDeltaMilliseconds),
    ts_file_mode: cdktf.stringToTerraform(struct!.tsFileMode),
    caption_language_mappings: cdktf.listMapper(medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsToTerraform, true)(struct!.captionLanguageMappings),
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationToTerraform(struct!.destination),
    hls_cdn_settings: cdktf.listMapper(medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsToTerraform, true)(struct!.hlsCdnSettings),
    key_provider_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsToTerraform(struct!.keyProviderSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.adMarkers = this._adMarkers;
    }
    if (this._baseUrlContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrlContent = this._baseUrlContent;
    }
    if (this._baseUrlContent1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrlContent1 = this._baseUrlContent1;
    }
    if (this._baseUrlManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrlManifest = this._baseUrlManifest;
    }
    if (this._baseUrlManifest1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrlManifest1 = this._baseUrlManifest1;
    }
    if (this._captionLanguageSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionLanguageSetting = this._captionLanguageSetting;
    }
    if (this._clientCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCache = this._clientCache;
    }
    if (this._codecSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.codecSpecification = this._codecSpecification;
    }
    if (this._constantIv !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantIv = this._constantIv;
    }
    if (this._directoryStructure !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryStructure = this._directoryStructure;
    }
    if (this._discontinuityTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.discontinuityTags = this._discontinuityTags;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._hlsId3SegmentTagging !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsId3SegmentTagging = this._hlsId3SegmentTagging;
    }
    if (this._iframeOnlyPlaylists !== undefined) {
      hasAnyValues = true;
      internalValueResult.iframeOnlyPlaylists = this._iframeOnlyPlaylists;
    }
    if (this._incompleteSegmentBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.incompleteSegmentBehavior = this._incompleteSegmentBehavior;
    }
    if (this._indexNSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexNSegments = this._indexNSegments;
    }
    if (this._inputLossAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLossAction = this._inputLossAction;
    }
    if (this._ivInManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ivInManifest = this._ivInManifest;
    }
    if (this._ivSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.ivSource = this._ivSource;
    }
    if (this._keepSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepSegments = this._keepSegments;
    }
    if (this._keyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFormat = this._keyFormat;
    }
    if (this._keyFormatVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFormatVersions = this._keyFormatVersions;
    }
    if (this._manifestCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestCompression = this._manifestCompression;
    }
    if (this._manifestDurationFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestDurationFormat = this._manifestDurationFormat;
    }
    if (this._minSegmentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSegmentLength = this._minSegmentLength;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._outputSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSelection = this._outputSelection;
    }
    if (this._programDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.programDateTime = this._programDateTime;
    }
    if (this._programDateTimeClock !== undefined) {
      hasAnyValues = true;
      internalValueResult.programDateTimeClock = this._programDateTimeClock;
    }
    if (this._programDateTimePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.programDateTimePeriod = this._programDateTimePeriod;
    }
    if (this._redundantManifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantManifest = this._redundantManifest;
    }
    if (this._segmentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentLength = this._segmentLength;
    }
    if (this._segmentsPerSubdirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentsPerSubdirectory = this._segmentsPerSubdirectory;
    }
    if (this._streamInfResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamInfResolution = this._streamInfResolution;
    }
    if (this._timedMetadataId3Frame !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataId3Frame = this._timedMetadataId3Frame;
    }
    if (this._timedMetadataId3Period !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataId3Period = this._timedMetadataId3Period;
    }
    if (this._timestampDeltaMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampDeltaMilliseconds = this._timestampDeltaMilliseconds;
    }
    if (this._tsFileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsFileMode = this._tsFileMode;
    }
    if (this._captionLanguageMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionLanguageMappings = this._captionLanguageMappings?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._hlsCdnSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsCdnSettings = this._hlsCdnSettings?.internalValue;
    }
    if (this._keyProviderSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyProviderSettings = this._keyProviderSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adMarkers = undefined;
      this._baseUrlContent = undefined;
      this._baseUrlContent1 = undefined;
      this._baseUrlManifest = undefined;
      this._baseUrlManifest1 = undefined;
      this._captionLanguageSetting = undefined;
      this._clientCache = undefined;
      this._codecSpecification = undefined;
      this._constantIv = undefined;
      this._directoryStructure = undefined;
      this._discontinuityTags = undefined;
      this._encryptionType = undefined;
      this._hlsId3SegmentTagging = undefined;
      this._iframeOnlyPlaylists = undefined;
      this._incompleteSegmentBehavior = undefined;
      this._indexNSegments = undefined;
      this._inputLossAction = undefined;
      this._ivInManifest = undefined;
      this._ivSource = undefined;
      this._keepSegments = undefined;
      this._keyFormat = undefined;
      this._keyFormatVersions = undefined;
      this._manifestCompression = undefined;
      this._manifestDurationFormat = undefined;
      this._minSegmentLength = undefined;
      this._mode = undefined;
      this._outputSelection = undefined;
      this._programDateTime = undefined;
      this._programDateTimeClock = undefined;
      this._programDateTimePeriod = undefined;
      this._redundantManifest = undefined;
      this._segmentLength = undefined;
      this._segmentsPerSubdirectory = undefined;
      this._streamInfResolution = undefined;
      this._timedMetadataId3Frame = undefined;
      this._timedMetadataId3Period = undefined;
      this._timestampDeltaMilliseconds = undefined;
      this._tsFileMode = undefined;
      this._captionLanguageMappings.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._hlsCdnSettings.internalValue = undefined;
      this._keyProviderSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adMarkers = value.adMarkers;
      this._baseUrlContent = value.baseUrlContent;
      this._baseUrlContent1 = value.baseUrlContent1;
      this._baseUrlManifest = value.baseUrlManifest;
      this._baseUrlManifest1 = value.baseUrlManifest1;
      this._captionLanguageSetting = value.captionLanguageSetting;
      this._clientCache = value.clientCache;
      this._codecSpecification = value.codecSpecification;
      this._constantIv = value.constantIv;
      this._directoryStructure = value.directoryStructure;
      this._discontinuityTags = value.discontinuityTags;
      this._encryptionType = value.encryptionType;
      this._hlsId3SegmentTagging = value.hlsId3SegmentTagging;
      this._iframeOnlyPlaylists = value.iframeOnlyPlaylists;
      this._incompleteSegmentBehavior = value.incompleteSegmentBehavior;
      this._indexNSegments = value.indexNSegments;
      this._inputLossAction = value.inputLossAction;
      this._ivInManifest = value.ivInManifest;
      this._ivSource = value.ivSource;
      this._keepSegments = value.keepSegments;
      this._keyFormat = value.keyFormat;
      this._keyFormatVersions = value.keyFormatVersions;
      this._manifestCompression = value.manifestCompression;
      this._manifestDurationFormat = value.manifestDurationFormat;
      this._minSegmentLength = value.minSegmentLength;
      this._mode = value.mode;
      this._outputSelection = value.outputSelection;
      this._programDateTime = value.programDateTime;
      this._programDateTimeClock = value.programDateTimeClock;
      this._programDateTimePeriod = value.programDateTimePeriod;
      this._redundantManifest = value.redundantManifest;
      this._segmentLength = value.segmentLength;
      this._segmentsPerSubdirectory = value.segmentsPerSubdirectory;
      this._streamInfResolution = value.streamInfResolution;
      this._timedMetadataId3Frame = value.timedMetadataId3Frame;
      this._timedMetadataId3Period = value.timedMetadataId3Period;
      this._timestampDeltaMilliseconds = value.timestampDeltaMilliseconds;
      this._tsFileMode = value.tsFileMode;
      this._captionLanguageMappings.internalValue = value.captionLanguageMappings;
      this._destination.internalValue = value.destination;
      this._hlsCdnSettings.internalValue = value.hlsCdnSettings;
      this._keyProviderSettings.internalValue = value.keyProviderSettings;
    }
  }

  // ad_markers - computed: true, optional: true, required: false
  private _adMarkers?: string[]; 
  public get adMarkers() {
    return this.getListAttribute('ad_markers');
  }
  public set adMarkers(value: string[]) {
    this._adMarkers = value;
  }
  public resetAdMarkers() {
    this._adMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adMarkersInput() {
    return this._adMarkers;
  }

  // base_url_content - computed: true, optional: true, required: false
  private _baseUrlContent?: string; 
  public get baseUrlContent() {
    return this.getStringAttribute('base_url_content');
  }
  public set baseUrlContent(value: string) {
    this._baseUrlContent = value;
  }
  public resetBaseUrlContent() {
    this._baseUrlContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlContentInput() {
    return this._baseUrlContent;
  }

  // base_url_content1 - computed: true, optional: true, required: false
  private _baseUrlContent1?: string; 
  public get baseUrlContent1() {
    return this.getStringAttribute('base_url_content1');
  }
  public set baseUrlContent1(value: string) {
    this._baseUrlContent1 = value;
  }
  public resetBaseUrlContent1() {
    this._baseUrlContent1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlContent1Input() {
    return this._baseUrlContent1;
  }

  // base_url_manifest - computed: true, optional: true, required: false
  private _baseUrlManifest?: string; 
  public get baseUrlManifest() {
    return this.getStringAttribute('base_url_manifest');
  }
  public set baseUrlManifest(value: string) {
    this._baseUrlManifest = value;
  }
  public resetBaseUrlManifest() {
    this._baseUrlManifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlManifestInput() {
    return this._baseUrlManifest;
  }

  // base_url_manifest1 - computed: true, optional: true, required: false
  private _baseUrlManifest1?: string; 
  public get baseUrlManifest1() {
    return this.getStringAttribute('base_url_manifest1');
  }
  public set baseUrlManifest1(value: string) {
    this._baseUrlManifest1 = value;
  }
  public resetBaseUrlManifest1() {
    this._baseUrlManifest1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlManifest1Input() {
    return this._baseUrlManifest1;
  }

  // caption_language_setting - computed: true, optional: true, required: false
  private _captionLanguageSetting?: string; 
  public get captionLanguageSetting() {
    return this.getStringAttribute('caption_language_setting');
  }
  public set captionLanguageSetting(value: string) {
    this._captionLanguageSetting = value;
  }
  public resetCaptionLanguageSetting() {
    this._captionLanguageSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionLanguageSettingInput() {
    return this._captionLanguageSetting;
  }

  // client_cache - computed: true, optional: true, required: false
  private _clientCache?: string; 
  public get clientCache() {
    return this.getStringAttribute('client_cache');
  }
  public set clientCache(value: string) {
    this._clientCache = value;
  }
  public resetClientCache() {
    this._clientCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCacheInput() {
    return this._clientCache;
  }

  // codec_specification - computed: true, optional: true, required: false
  private _codecSpecification?: string; 
  public get codecSpecification() {
    return this.getStringAttribute('codec_specification');
  }
  public set codecSpecification(value: string) {
    this._codecSpecification = value;
  }
  public resetCodecSpecification() {
    this._codecSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecSpecificationInput() {
    return this._codecSpecification;
  }

  // constant_iv - computed: true, optional: true, required: false
  private _constantIv?: string; 
  public get constantIv() {
    return this.getStringAttribute('constant_iv');
  }
  public set constantIv(value: string) {
    this._constantIv = value;
  }
  public resetConstantIv() {
    this._constantIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantIvInput() {
    return this._constantIv;
  }

  // directory_structure - computed: true, optional: true, required: false
  private _directoryStructure?: string; 
  public get directoryStructure() {
    return this.getStringAttribute('directory_structure');
  }
  public set directoryStructure(value: string) {
    this._directoryStructure = value;
  }
  public resetDirectoryStructure() {
    this._directoryStructure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryStructureInput() {
    return this._directoryStructure;
  }

  // discontinuity_tags - computed: true, optional: true, required: false
  private _discontinuityTags?: string; 
  public get discontinuityTags() {
    return this.getStringAttribute('discontinuity_tags');
  }
  public set discontinuityTags(value: string) {
    this._discontinuityTags = value;
  }
  public resetDiscontinuityTags() {
    this._discontinuityTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discontinuityTagsInput() {
    return this._discontinuityTags;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // hls_id3_segment_tagging - computed: true, optional: true, required: false
  private _hlsId3SegmentTagging?: string; 
  public get hlsId3SegmentTagging() {
    return this.getStringAttribute('hls_id3_segment_tagging');
  }
  public set hlsId3SegmentTagging(value: string) {
    this._hlsId3SegmentTagging = value;
  }
  public resetHlsId3SegmentTagging() {
    this._hlsId3SegmentTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsId3SegmentTaggingInput() {
    return this._hlsId3SegmentTagging;
  }

  // iframe_only_playlists - computed: true, optional: true, required: false
  private _iframeOnlyPlaylists?: string; 
  public get iframeOnlyPlaylists() {
    return this.getStringAttribute('iframe_only_playlists');
  }
  public set iframeOnlyPlaylists(value: string) {
    this._iframeOnlyPlaylists = value;
  }
  public resetIframeOnlyPlaylists() {
    this._iframeOnlyPlaylists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iframeOnlyPlaylistsInput() {
    return this._iframeOnlyPlaylists;
  }

  // incomplete_segment_behavior - computed: true, optional: true, required: false
  private _incompleteSegmentBehavior?: string; 
  public get incompleteSegmentBehavior() {
    return this.getStringAttribute('incomplete_segment_behavior');
  }
  public set incompleteSegmentBehavior(value: string) {
    this._incompleteSegmentBehavior = value;
  }
  public resetIncompleteSegmentBehavior() {
    this._incompleteSegmentBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incompleteSegmentBehaviorInput() {
    return this._incompleteSegmentBehavior;
  }

  // index_n_segments - computed: true, optional: true, required: false
  private _indexNSegments?: number; 
  public get indexNSegments() {
    return this.getNumberAttribute('index_n_segments');
  }
  public set indexNSegments(value: number) {
    this._indexNSegments = value;
  }
  public resetIndexNSegments() {
    this._indexNSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNSegmentsInput() {
    return this._indexNSegments;
  }

  // input_loss_action - computed: true, optional: true, required: false
  private _inputLossAction?: string; 
  public get inputLossAction() {
    return this.getStringAttribute('input_loss_action');
  }
  public set inputLossAction(value: string) {
    this._inputLossAction = value;
  }
  public resetInputLossAction() {
    this._inputLossAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLossActionInput() {
    return this._inputLossAction;
  }

  // iv_in_manifest - computed: true, optional: true, required: false
  private _ivInManifest?: string; 
  public get ivInManifest() {
    return this.getStringAttribute('iv_in_manifest');
  }
  public set ivInManifest(value: string) {
    this._ivInManifest = value;
  }
  public resetIvInManifest() {
    this._ivInManifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ivInManifestInput() {
    return this._ivInManifest;
  }

  // iv_source - computed: true, optional: true, required: false
  private _ivSource?: string; 
  public get ivSource() {
    return this.getStringAttribute('iv_source');
  }
  public set ivSource(value: string) {
    this._ivSource = value;
  }
  public resetIvSource() {
    this._ivSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ivSourceInput() {
    return this._ivSource;
  }

  // keep_segments - computed: true, optional: true, required: false
  private _keepSegments?: number; 
  public get keepSegments() {
    return this.getNumberAttribute('keep_segments');
  }
  public set keepSegments(value: number) {
    this._keepSegments = value;
  }
  public resetKeepSegments() {
    this._keepSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSegmentsInput() {
    return this._keepSegments;
  }

  // key_format - computed: true, optional: true, required: false
  private _keyFormat?: string; 
  public get keyFormat() {
    return this.getStringAttribute('key_format');
  }
  public set keyFormat(value: string) {
    this._keyFormat = value;
  }
  public resetKeyFormat() {
    this._keyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFormatInput() {
    return this._keyFormat;
  }

  // key_format_versions - computed: true, optional: true, required: false
  private _keyFormatVersions?: string; 
  public get keyFormatVersions() {
    return this.getStringAttribute('key_format_versions');
  }
  public set keyFormatVersions(value: string) {
    this._keyFormatVersions = value;
  }
  public resetKeyFormatVersions() {
    this._keyFormatVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFormatVersionsInput() {
    return this._keyFormatVersions;
  }

  // manifest_compression - computed: true, optional: true, required: false
  private _manifestCompression?: string; 
  public get manifestCompression() {
    return this.getStringAttribute('manifest_compression');
  }
  public set manifestCompression(value: string) {
    this._manifestCompression = value;
  }
  public resetManifestCompression() {
    this._manifestCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestCompressionInput() {
    return this._manifestCompression;
  }

  // manifest_duration_format - computed: true, optional: true, required: false
  private _manifestDurationFormat?: string; 
  public get manifestDurationFormat() {
    return this.getStringAttribute('manifest_duration_format');
  }
  public set manifestDurationFormat(value: string) {
    this._manifestDurationFormat = value;
  }
  public resetManifestDurationFormat() {
    this._manifestDurationFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestDurationFormatInput() {
    return this._manifestDurationFormat;
  }

  // min_segment_length - computed: true, optional: true, required: false
  private _minSegmentLength?: number; 
  public get minSegmentLength() {
    return this.getNumberAttribute('min_segment_length');
  }
  public set minSegmentLength(value: number) {
    this._minSegmentLength = value;
  }
  public resetMinSegmentLength() {
    this._minSegmentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSegmentLengthInput() {
    return this._minSegmentLength;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // output_selection - computed: true, optional: true, required: false
  private _outputSelection?: string; 
  public get outputSelection() {
    return this.getStringAttribute('output_selection');
  }
  public set outputSelection(value: string) {
    this._outputSelection = value;
  }
  public resetOutputSelection() {
    this._outputSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSelectionInput() {
    return this._outputSelection;
  }

  // program_date_time - computed: true, optional: true, required: false
  private _programDateTime?: string; 
  public get programDateTime() {
    return this.getStringAttribute('program_date_time');
  }
  public set programDateTime(value: string) {
    this._programDateTime = value;
  }
  public resetProgramDateTime() {
    this._programDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programDateTimeInput() {
    return this._programDateTime;
  }

  // program_date_time_clock - computed: true, optional: true, required: false
  private _programDateTimeClock?: string; 
  public get programDateTimeClock() {
    return this.getStringAttribute('program_date_time_clock');
  }
  public set programDateTimeClock(value: string) {
    this._programDateTimeClock = value;
  }
  public resetProgramDateTimeClock() {
    this._programDateTimeClock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programDateTimeClockInput() {
    return this._programDateTimeClock;
  }

  // program_date_time_period - computed: true, optional: true, required: false
  private _programDateTimePeriod?: number; 
  public get programDateTimePeriod() {
    return this.getNumberAttribute('program_date_time_period');
  }
  public set programDateTimePeriod(value: number) {
    this._programDateTimePeriod = value;
  }
  public resetProgramDateTimePeriod() {
    this._programDateTimePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programDateTimePeriodInput() {
    return this._programDateTimePeriod;
  }

  // redundant_manifest - computed: true, optional: true, required: false
  private _redundantManifest?: string; 
  public get redundantManifest() {
    return this.getStringAttribute('redundant_manifest');
  }
  public set redundantManifest(value: string) {
    this._redundantManifest = value;
  }
  public resetRedundantManifest() {
    this._redundantManifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantManifestInput() {
    return this._redundantManifest;
  }

  // segment_length - computed: true, optional: true, required: false
  private _segmentLength?: number; 
  public get segmentLength() {
    return this.getNumberAttribute('segment_length');
  }
  public set segmentLength(value: number) {
    this._segmentLength = value;
  }
  public resetSegmentLength() {
    this._segmentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentLengthInput() {
    return this._segmentLength;
  }

  // segments_per_subdirectory - computed: true, optional: true, required: false
  private _segmentsPerSubdirectory?: number; 
  public get segmentsPerSubdirectory() {
    return this.getNumberAttribute('segments_per_subdirectory');
  }
  public set segmentsPerSubdirectory(value: number) {
    this._segmentsPerSubdirectory = value;
  }
  public resetSegmentsPerSubdirectory() {
    this._segmentsPerSubdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsPerSubdirectoryInput() {
    return this._segmentsPerSubdirectory;
  }

  // stream_inf_resolution - computed: true, optional: true, required: false
  private _streamInfResolution?: string; 
  public get streamInfResolution() {
    return this.getStringAttribute('stream_inf_resolution');
  }
  public set streamInfResolution(value: string) {
    this._streamInfResolution = value;
  }
  public resetStreamInfResolution() {
    this._streamInfResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInfResolutionInput() {
    return this._streamInfResolution;
  }

  // timed_metadata_id3_frame - computed: true, optional: true, required: false
  private _timedMetadataId3Frame?: string; 
  public get timedMetadataId3Frame() {
    return this.getStringAttribute('timed_metadata_id3_frame');
  }
  public set timedMetadataId3Frame(value: string) {
    this._timedMetadataId3Frame = value;
  }
  public resetTimedMetadataId3Frame() {
    this._timedMetadataId3Frame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataId3FrameInput() {
    return this._timedMetadataId3Frame;
  }

  // timed_metadata_id3_period - computed: true, optional: true, required: false
  private _timedMetadataId3Period?: number; 
  public get timedMetadataId3Period() {
    return this.getNumberAttribute('timed_metadata_id3_period');
  }
  public set timedMetadataId3Period(value: number) {
    this._timedMetadataId3Period = value;
  }
  public resetTimedMetadataId3Period() {
    this._timedMetadataId3Period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataId3PeriodInput() {
    return this._timedMetadataId3Period;
  }

  // timestamp_delta_milliseconds - computed: true, optional: true, required: false
  private _timestampDeltaMilliseconds?: number; 
  public get timestampDeltaMilliseconds() {
    return this.getNumberAttribute('timestamp_delta_milliseconds');
  }
  public set timestampDeltaMilliseconds(value: number) {
    this._timestampDeltaMilliseconds = value;
  }
  public resetTimestampDeltaMilliseconds() {
    this._timestampDeltaMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampDeltaMillisecondsInput() {
    return this._timestampDeltaMilliseconds;
  }

  // ts_file_mode - computed: true, optional: true, required: false
  private _tsFileMode?: string; 
  public get tsFileMode() {
    return this.getStringAttribute('ts_file_mode');
  }
  public set tsFileMode(value: string) {
    this._tsFileMode = value;
  }
  public resetTsFileMode() {
    this._tsFileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsFileModeInput() {
    return this._tsFileMode;
  }

  // caption_language_mappings - computed: false, optional: true, required: false
  private _captionLanguageMappings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsList(this, "caption_language_mappings", true);
  public get captionLanguageMappings() {
    return this._captionLanguageMappings;
  }
  public putCaptionLanguageMappings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings[] | cdktf.IResolvable) {
    this._captionLanguageMappings.internalValue = value;
  }
  public resetCaptionLanguageMappings() {
    this._captionLanguageMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionLanguageMappingsInput() {
    return this._captionLanguageMappings.internalValue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // hls_cdn_settings - computed: false, optional: true, required: false
  private _hlsCdnSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsList(this, "hls_cdn_settings", false);
  public get hlsCdnSettings() {
    return this._hlsCdnSettings;
  }
  public putHlsCdnSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings[] | cdktf.IResolvable) {
    this._hlsCdnSettings.internalValue = value;
  }
  public resetHlsCdnSettings() {
    this._hlsCdnSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsCdnSettingsInput() {
    return this._hlsCdnSettings.internalValue;
  }

  // key_provider_settings - computed: false, optional: true, required: false
  private _keyProviderSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsOutputReference(this, "key_provider_settings");
  public get keyProviderSettings() {
    return this._keyProviderSettings;
  }
  public putKeyProviderSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings) {
    this._keyProviderSettings.internalValue = value;
  }
  public resetKeyProviderSettings() {
    this._keyProviderSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyProviderSettingsInput() {
    return this._keyProviderSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings {
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationToTerraform(struct!.destination),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination.internalValue = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#acquisition_point_id MedialiveChannel#acquisition_point_id}
  */
  readonly acquisitionPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_only_timecodec_control MedialiveChannel#audio_only_timecodec_control}
  */
  readonly audioOnlyTimecodecControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#certificate_mode MedialiveChannel#certificate_mode}
  */
  readonly certificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
  */
  readonly connectionRetryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#event_id MedialiveChannel#event_id}
  */
  readonly eventId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#event_id_mode MedialiveChannel#event_id_mode}
  */
  readonly eventIdMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#event_stop_behavior MedialiveChannel#event_stop_behavior}
  */
  readonly eventStopBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
  */
  readonly filecacheDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#fragment_length MedialiveChannel#fragment_length}
  */
  readonly fragmentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
  */
  readonly inputLossAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#num_retries MedialiveChannel#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#restart_delay MedialiveChannel#restart_delay}
  */
  readonly restartDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segmentation_mode MedialiveChannel#segmentation_mode}
  */
  readonly segmentationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#send_delay_ms MedialiveChannel#send_delay_ms}
  */
  readonly sendDelayMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#sparse_track_type MedialiveChannel#sparse_track_type}
  */
  readonly sparseTrackType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#stream_manifest_behavior MedialiveChannel#stream_manifest_behavior}
  */
  readonly streamManifestBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timestamp_offset MedialiveChannel#timestamp_offset}
  */
  readonly timestampOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timestamp_offset_mode MedialiveChannel#timestamp_offset_mode}
  */
  readonly timestampOffsetMode?: string;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_point_id: cdktf.stringToTerraform(struct!.acquisitionPointId),
    audio_only_timecodec_control: cdktf.stringToTerraform(struct!.audioOnlyTimecodecControl),
    certificate_mode: cdktf.stringToTerraform(struct!.certificateMode),
    connection_retry_interval: cdktf.numberToTerraform(struct!.connectionRetryInterval),
    event_id: cdktf.numberToTerraform(struct!.eventId),
    event_id_mode: cdktf.stringToTerraform(struct!.eventIdMode),
    event_stop_behavior: cdktf.stringToTerraform(struct!.eventStopBehavior),
    filecache_duration: cdktf.numberToTerraform(struct!.filecacheDuration),
    fragment_length: cdktf.numberToTerraform(struct!.fragmentLength),
    input_loss_action: cdktf.stringToTerraform(struct!.inputLossAction),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    restart_delay: cdktf.numberToTerraform(struct!.restartDelay),
    segmentation_mode: cdktf.stringToTerraform(struct!.segmentationMode),
    send_delay_ms: cdktf.numberToTerraform(struct!.sendDelayMs),
    sparse_track_type: cdktf.stringToTerraform(struct!.sparseTrackType),
    stream_manifest_behavior: cdktf.stringToTerraform(struct!.streamManifestBehavior),
    timestamp_offset: cdktf.stringToTerraform(struct!.timestampOffset),
    timestamp_offset_mode: cdktf.stringToTerraform(struct!.timestampOffsetMode),
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationToTerraform(struct!.destination),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acquisitionPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acquisitionPointId = this._acquisitionPointId;
    }
    if (this._audioOnlyTimecodecControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioOnlyTimecodecControl = this._audioOnlyTimecodecControl;
    }
    if (this._certificateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateMode = this._certificateMode;
    }
    if (this._connectionRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRetryInterval = this._connectionRetryInterval;
    }
    if (this._eventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventId = this._eventId;
    }
    if (this._eventIdMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventIdMode = this._eventIdMode;
    }
    if (this._eventStopBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStopBehavior = this._eventStopBehavior;
    }
    if (this._filecacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.filecacheDuration = this._filecacheDuration;
    }
    if (this._fragmentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentLength = this._fragmentLength;
    }
    if (this._inputLossAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLossAction = this._inputLossAction;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._restartDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDelay = this._restartDelay;
    }
    if (this._segmentationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationMode = this._segmentationMode;
    }
    if (this._sendDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendDelayMs = this._sendDelayMs;
    }
    if (this._sparseTrackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparseTrackType = this._sparseTrackType;
    }
    if (this._streamManifestBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamManifestBehavior = this._streamManifestBehavior;
    }
    if (this._timestampOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampOffset = this._timestampOffset;
    }
    if (this._timestampOffsetMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampOffsetMode = this._timestampOffsetMode;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionPointId = undefined;
      this._audioOnlyTimecodecControl = undefined;
      this._certificateMode = undefined;
      this._connectionRetryInterval = undefined;
      this._eventId = undefined;
      this._eventIdMode = undefined;
      this._eventStopBehavior = undefined;
      this._filecacheDuration = undefined;
      this._fragmentLength = undefined;
      this._inputLossAction = undefined;
      this._numRetries = undefined;
      this._restartDelay = undefined;
      this._segmentationMode = undefined;
      this._sendDelayMs = undefined;
      this._sparseTrackType = undefined;
      this._streamManifestBehavior = undefined;
      this._timestampOffset = undefined;
      this._timestampOffsetMode = undefined;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionPointId = value.acquisitionPointId;
      this._audioOnlyTimecodecControl = value.audioOnlyTimecodecControl;
      this._certificateMode = value.certificateMode;
      this._connectionRetryInterval = value.connectionRetryInterval;
      this._eventId = value.eventId;
      this._eventIdMode = value.eventIdMode;
      this._eventStopBehavior = value.eventStopBehavior;
      this._filecacheDuration = value.filecacheDuration;
      this._fragmentLength = value.fragmentLength;
      this._inputLossAction = value.inputLossAction;
      this._numRetries = value.numRetries;
      this._restartDelay = value.restartDelay;
      this._segmentationMode = value.segmentationMode;
      this._sendDelayMs = value.sendDelayMs;
      this._sparseTrackType = value.sparseTrackType;
      this._streamManifestBehavior = value.streamManifestBehavior;
      this._timestampOffset = value.timestampOffset;
      this._timestampOffsetMode = value.timestampOffsetMode;
      this._destination.internalValue = value.destination;
    }
  }

  // acquisition_point_id - computed: true, optional: true, required: false
  private _acquisitionPointId?: string; 
  public get acquisitionPointId() {
    return this.getStringAttribute('acquisition_point_id');
  }
  public set acquisitionPointId(value: string) {
    this._acquisitionPointId = value;
  }
  public resetAcquisitionPointId() {
    this._acquisitionPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acquisitionPointIdInput() {
    return this._acquisitionPointId;
  }

  // audio_only_timecodec_control - computed: true, optional: true, required: false
  private _audioOnlyTimecodecControl?: string; 
  public get audioOnlyTimecodecControl() {
    return this.getStringAttribute('audio_only_timecodec_control');
  }
  public set audioOnlyTimecodecControl(value: string) {
    this._audioOnlyTimecodecControl = value;
  }
  public resetAudioOnlyTimecodecControl() {
    this._audioOnlyTimecodecControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioOnlyTimecodecControlInput() {
    return this._audioOnlyTimecodecControl;
  }

  // certificate_mode - computed: true, optional: true, required: false
  private _certificateMode?: string; 
  public get certificateMode() {
    return this.getStringAttribute('certificate_mode');
  }
  public set certificateMode(value: string) {
    this._certificateMode = value;
  }
  public resetCertificateMode() {
    this._certificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateModeInput() {
    return this._certificateMode;
  }

  // connection_retry_interval - computed: true, optional: true, required: false
  private _connectionRetryInterval?: number; 
  public get connectionRetryInterval() {
    return this.getNumberAttribute('connection_retry_interval');
  }
  public set connectionRetryInterval(value: number) {
    this._connectionRetryInterval = value;
  }
  public resetConnectionRetryInterval() {
    this._connectionRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryIntervalInput() {
    return this._connectionRetryInterval;
  }

  // event_id - computed: true, optional: true, required: false
  private _eventId?: number; 
  public get eventId() {
    return this.getNumberAttribute('event_id');
  }
  public set eventId(value: number) {
    this._eventId = value;
  }
  public resetEventId() {
    this._eventId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdInput() {
    return this._eventId;
  }

  // event_id_mode - computed: true, optional: true, required: false
  private _eventIdMode?: string; 
  public get eventIdMode() {
    return this.getStringAttribute('event_id_mode');
  }
  public set eventIdMode(value: string) {
    this._eventIdMode = value;
  }
  public resetEventIdMode() {
    this._eventIdMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdModeInput() {
    return this._eventIdMode;
  }

  // event_stop_behavior - computed: true, optional: true, required: false
  private _eventStopBehavior?: string; 
  public get eventStopBehavior() {
    return this.getStringAttribute('event_stop_behavior');
  }
  public set eventStopBehavior(value: string) {
    this._eventStopBehavior = value;
  }
  public resetEventStopBehavior() {
    this._eventStopBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStopBehaviorInput() {
    return this._eventStopBehavior;
  }

  // filecache_duration - computed: false, optional: true, required: false
  private _filecacheDuration?: number; 
  public get filecacheDuration() {
    return this.getNumberAttribute('filecache_duration');
  }
  public set filecacheDuration(value: number) {
    this._filecacheDuration = value;
  }
  public resetFilecacheDuration() {
    this._filecacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filecacheDurationInput() {
    return this._filecacheDuration;
  }

  // fragment_length - computed: true, optional: true, required: false
  private _fragmentLength?: number; 
  public get fragmentLength() {
    return this.getNumberAttribute('fragment_length');
  }
  public set fragmentLength(value: number) {
    this._fragmentLength = value;
  }
  public resetFragmentLength() {
    this._fragmentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentLengthInput() {
    return this._fragmentLength;
  }

  // input_loss_action - computed: true, optional: true, required: false
  private _inputLossAction?: string; 
  public get inputLossAction() {
    return this.getStringAttribute('input_loss_action');
  }
  public set inputLossAction(value: string) {
    this._inputLossAction = value;
  }
  public resetInputLossAction() {
    this._inputLossAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLossActionInput() {
    return this._inputLossAction;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // restart_delay - computed: false, optional: true, required: false
  private _restartDelay?: number; 
  public get restartDelay() {
    return this.getNumberAttribute('restart_delay');
  }
  public set restartDelay(value: number) {
    this._restartDelay = value;
  }
  public resetRestartDelay() {
    this._restartDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDelayInput() {
    return this._restartDelay;
  }

  // segmentation_mode - computed: true, optional: true, required: false
  private _segmentationMode?: string; 
  public get segmentationMode() {
    return this.getStringAttribute('segmentation_mode');
  }
  public set segmentationMode(value: string) {
    this._segmentationMode = value;
  }
  public resetSegmentationMode() {
    this._segmentationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationModeInput() {
    return this._segmentationMode;
  }

  // send_delay_ms - computed: true, optional: true, required: false
  private _sendDelayMs?: number; 
  public get sendDelayMs() {
    return this.getNumberAttribute('send_delay_ms');
  }
  public set sendDelayMs(value: number) {
    this._sendDelayMs = value;
  }
  public resetSendDelayMs() {
    this._sendDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDelayMsInput() {
    return this._sendDelayMs;
  }

  // sparse_track_type - computed: true, optional: true, required: false
  private _sparseTrackType?: string; 
  public get sparseTrackType() {
    return this.getStringAttribute('sparse_track_type');
  }
  public set sparseTrackType(value: string) {
    this._sparseTrackType = value;
  }
  public resetSparseTrackType() {
    this._sparseTrackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseTrackTypeInput() {
    return this._sparseTrackType;
  }

  // stream_manifest_behavior - computed: true, optional: true, required: false
  private _streamManifestBehavior?: string; 
  public get streamManifestBehavior() {
    return this.getStringAttribute('stream_manifest_behavior');
  }
  public set streamManifestBehavior(value: string) {
    this._streamManifestBehavior = value;
  }
  public resetStreamManifestBehavior() {
    this._streamManifestBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamManifestBehaviorInput() {
    return this._streamManifestBehavior;
  }

  // timestamp_offset - computed: true, optional: true, required: false
  private _timestampOffset?: string; 
  public get timestampOffset() {
    return this.getStringAttribute('timestamp_offset');
  }
  public set timestampOffset(value: string) {
    this._timestampOffset = value;
  }
  public resetTimestampOffset() {
    this._timestampOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampOffsetInput() {
    return this._timestampOffset;
  }

  // timestamp_offset_mode - computed: true, optional: true, required: false
  private _timestampOffsetMode?: string; 
  public get timestampOffsetMode() {
    return this.getStringAttribute('timestamp_offset_mode');
  }
  public set timestampOffsetMode(value: string) {
    this._timestampOffsetMode = value;
  }
  public resetTimestampOffsetMode() {
    this._timestampOffsetMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampOffsetModeInput() {
    return this._timestampOffsetMode;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings {
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ad_markers MedialiveChannel#ad_markers}
  */
  readonly adMarkers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#authentication_scheme MedialiveChannel#authentication_scheme}
  */
  readonly authenticationScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#cache_full_behavior MedialiveChannel#cache_full_behavior}
  */
  readonly cacheFullBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#cache_length MedialiveChannel#cache_length}
  */
  readonly cacheLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#caption_data MedialiveChannel#caption_data}
  */
  readonly captionData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
  */
  readonly inputLossAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#restart_delay MedialiveChannel#restart_delay}
  */
  readonly restartDelay?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_markers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adMarkers),
    authentication_scheme: cdktf.stringToTerraform(struct!.authenticationScheme),
    cache_full_behavior: cdktf.stringToTerraform(struct!.cacheFullBehavior),
    cache_length: cdktf.numberToTerraform(struct!.cacheLength),
    caption_data: cdktf.stringToTerraform(struct!.captionData),
    input_loss_action: cdktf.stringToTerraform(struct!.inputLossAction),
    restart_delay: cdktf.numberToTerraform(struct!.restartDelay),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.adMarkers = this._adMarkers;
    }
    if (this._authenticationScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationScheme = this._authenticationScheme;
    }
    if (this._cacheFullBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheFullBehavior = this._cacheFullBehavior;
    }
    if (this._cacheLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLength = this._cacheLength;
    }
    if (this._captionData !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionData = this._captionData;
    }
    if (this._inputLossAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLossAction = this._inputLossAction;
    }
    if (this._restartDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDelay = this._restartDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adMarkers = undefined;
      this._authenticationScheme = undefined;
      this._cacheFullBehavior = undefined;
      this._cacheLength = undefined;
      this._captionData = undefined;
      this._inputLossAction = undefined;
      this._restartDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adMarkers = value.adMarkers;
      this._authenticationScheme = value.authenticationScheme;
      this._cacheFullBehavior = value.cacheFullBehavior;
      this._cacheLength = value.cacheLength;
      this._captionData = value.captionData;
      this._inputLossAction = value.inputLossAction;
      this._restartDelay = value.restartDelay;
    }
  }

  // ad_markers - computed: false, optional: true, required: false
  private _adMarkers?: string[]; 
  public get adMarkers() {
    return this.getListAttribute('ad_markers');
  }
  public set adMarkers(value: string[]) {
    this._adMarkers = value;
  }
  public resetAdMarkers() {
    this._adMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adMarkersInput() {
    return this._adMarkers;
  }

  // authentication_scheme - computed: true, optional: true, required: false
  private _authenticationScheme?: string; 
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }
  public set authenticationScheme(value: string) {
    this._authenticationScheme = value;
  }
  public resetAuthenticationScheme() {
    this._authenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSchemeInput() {
    return this._authenticationScheme;
  }

  // cache_full_behavior - computed: true, optional: true, required: false
  private _cacheFullBehavior?: string; 
  public get cacheFullBehavior() {
    return this.getStringAttribute('cache_full_behavior');
  }
  public set cacheFullBehavior(value: string) {
    this._cacheFullBehavior = value;
  }
  public resetCacheFullBehavior() {
    this._cacheFullBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheFullBehaviorInput() {
    return this._cacheFullBehavior;
  }

  // cache_length - computed: true, optional: true, required: false
  private _cacheLength?: number; 
  public get cacheLength() {
    return this.getNumberAttribute('cache_length');
  }
  public set cacheLength(value: number) {
    this._cacheLength = value;
  }
  public resetCacheLength() {
    this._cacheLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLengthInput() {
    return this._cacheLength;
  }

  // caption_data - computed: true, optional: true, required: false
  private _captionData?: string; 
  public get captionData() {
    return this.getStringAttribute('caption_data');
  }
  public set captionData(value: string) {
    this._captionData = value;
  }
  public resetCaptionData() {
    this._captionData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionDataInput() {
    return this._captionData;
  }

  // input_loss_action - computed: true, optional: true, required: false
  private _inputLossAction?: string; 
  public get inputLossAction() {
    return this.getStringAttribute('input_loss_action');
  }
  public set inputLossAction(value: string) {
    this._inputLossAction = value;
  }
  public resetInputLossAction() {
    this._inputLossAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLossActionInput() {
    return this._inputLossAction;
  }

  // restart_delay - computed: false, optional: true, required: false
  private _restartDelay?: number; 
  public get restartDelay() {
    return this.getNumberAttribute('restart_delay');
  }
  public set restartDelay(value: number) {
    this._restartDelay = value;
  }
  public resetRestartDelay() {
    this._restartDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDelayInput() {
    return this._restartDelay;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
  */
  readonly inputLossAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_id3_frame MedialiveChannel#timed_metadata_id3_frame}
  */
  readonly timedMetadataId3Frame?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_id3_period MedialiveChannel#timed_metadata_id3_period}
  */
  readonly timedMetadataId3Period?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_loss_action: cdktf.stringToTerraform(struct!.inputLossAction),
    timed_metadata_id3_frame: cdktf.stringToTerraform(struct!.timedMetadataId3Frame),
    timed_metadata_id3_period: cdktf.numberToTerraform(struct!.timedMetadataId3Period),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputLossAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLossAction = this._inputLossAction;
    }
    if (this._timedMetadataId3Frame !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataId3Frame = this._timedMetadataId3Frame;
    }
    if (this._timedMetadataId3Period !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataId3Period = this._timedMetadataId3Period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputLossAction = undefined;
      this._timedMetadataId3Frame = undefined;
      this._timedMetadataId3Period = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputLossAction = value.inputLossAction;
      this._timedMetadataId3Frame = value.timedMetadataId3Frame;
      this._timedMetadataId3Period = value.timedMetadataId3Period;
    }
  }

  // input_loss_action - computed: true, optional: true, required: false
  private _inputLossAction?: string; 
  public get inputLossAction() {
    return this.getStringAttribute('input_loss_action');
  }
  public set inputLossAction(value: string) {
    this._inputLossAction = value;
  }
  public resetInputLossAction() {
    this._inputLossAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLossActionInput() {
    return this._inputLossAction;
  }

  // timed_metadata_id3_frame - computed: true, optional: true, required: false
  private _timedMetadataId3Frame?: string; 
  public get timedMetadataId3Frame() {
    return this.getStringAttribute('timed_metadata_id3_frame');
  }
  public set timedMetadataId3Frame(value: string) {
    this._timedMetadataId3Frame = value;
  }
  public resetTimedMetadataId3Frame() {
    this._timedMetadataId3Frame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataId3FrameInput() {
    return this._timedMetadataId3Frame;
  }

  // timed_metadata_id3_period - computed: true, optional: true, required: false
  private _timedMetadataId3Period?: number; 
  public get timedMetadataId3Period() {
    return this.getNumberAttribute('timed_metadata_id3_period');
  }
  public set timedMetadataId3Period(value: number) {
    this._timedMetadataId3Period = value;
  }
  public resetTimedMetadataId3Period() {
    this._timedMetadataId3Period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataId3PeriodInput() {
    return this._timedMetadataId3Period;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings {
  /**
  * archive_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#archive_group_settings MedialiveChannel#archive_group_settings}
  */
  readonly archiveGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings[] | cdktf.IResolvable;
  /**
  * frame_capture_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#frame_capture_group_settings MedialiveChannel#frame_capture_group_settings}
  */
  readonly frameCaptureGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings;
  /**
  * hls_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_group_settings MedialiveChannel#hls_group_settings}
  */
  readonly hlsGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings;
  /**
  * media_package_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#media_package_group_settings MedialiveChannel#media_package_group_settings}
  */
  readonly mediaPackageGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings;
  /**
  * ms_smooth_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ms_smooth_group_settings MedialiveChannel#ms_smooth_group_settings}
  */
  readonly msSmoothGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings;
  /**
  * multiplex_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#multiplex_group_settings MedialiveChannel#multiplex_group_settings}
  */
  readonly multiplexGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings;
  /**
  * rtmp_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rtmp_group_settings MedialiveChannel#rtmp_group_settings}
  */
  readonly rtmpGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings;
  /**
  * udp_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#udp_group_settings MedialiveChannel#udp_group_settings}
  */
  readonly udpGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_group_settings: cdktf.listMapper(medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsToTerraform, true)(struct!.archiveGroupSettings),
    frame_capture_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsToTerraform(struct!.frameCaptureGroupSettings),
    hls_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsToTerraform(struct!.hlsGroupSettings),
    media_package_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsToTerraform(struct!.mediaPackageGroupSettings),
    ms_smooth_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsToTerraform(struct!.msSmoothGroupSettings),
    multiplex_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsToTerraform(struct!.multiplexGroupSettings),
    rtmp_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsToTerraform(struct!.rtmpGroupSettings),
    udp_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsToTerraform(struct!.udpGroupSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveGroupSettings = this._archiveGroupSettings?.internalValue;
    }
    if (this._frameCaptureGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameCaptureGroupSettings = this._frameCaptureGroupSettings?.internalValue;
    }
    if (this._hlsGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsGroupSettings = this._hlsGroupSettings?.internalValue;
    }
    if (this._mediaPackageGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaPackageGroupSettings = this._mediaPackageGroupSettings?.internalValue;
    }
    if (this._msSmoothGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msSmoothGroupSettings = this._msSmoothGroupSettings?.internalValue;
    }
    if (this._multiplexGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplexGroupSettings = this._multiplexGroupSettings?.internalValue;
    }
    if (this._rtmpGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtmpGroupSettings = this._rtmpGroupSettings?.internalValue;
    }
    if (this._udpGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpGroupSettings = this._udpGroupSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveGroupSettings.internalValue = undefined;
      this._frameCaptureGroupSettings.internalValue = undefined;
      this._hlsGroupSettings.internalValue = undefined;
      this._mediaPackageGroupSettings.internalValue = undefined;
      this._msSmoothGroupSettings.internalValue = undefined;
      this._multiplexGroupSettings.internalValue = undefined;
      this._rtmpGroupSettings.internalValue = undefined;
      this._udpGroupSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveGroupSettings.internalValue = value.archiveGroupSettings;
      this._frameCaptureGroupSettings.internalValue = value.frameCaptureGroupSettings;
      this._hlsGroupSettings.internalValue = value.hlsGroupSettings;
      this._mediaPackageGroupSettings.internalValue = value.mediaPackageGroupSettings;
      this._msSmoothGroupSettings.internalValue = value.msSmoothGroupSettings;
      this._multiplexGroupSettings.internalValue = value.multiplexGroupSettings;
      this._rtmpGroupSettings.internalValue = value.rtmpGroupSettings;
      this._udpGroupSettings.internalValue = value.udpGroupSettings;
    }
  }

  // archive_group_settings - computed: false, optional: true, required: false
  private _archiveGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsList(this, "archive_group_settings", false);
  public get archiveGroupSettings() {
    return this._archiveGroupSettings;
  }
  public putArchiveGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings[] | cdktf.IResolvable) {
    this._archiveGroupSettings.internalValue = value;
  }
  public resetArchiveGroupSettings() {
    this._archiveGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveGroupSettingsInput() {
    return this._archiveGroupSettings.internalValue;
  }

  // frame_capture_group_settings - computed: false, optional: true, required: false
  private _frameCaptureGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsOutputReference(this, "frame_capture_group_settings");
  public get frameCaptureGroupSettings() {
    return this._frameCaptureGroupSettings;
  }
  public putFrameCaptureGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings) {
    this._frameCaptureGroupSettings.internalValue = value;
  }
  public resetFrameCaptureGroupSettings() {
    this._frameCaptureGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameCaptureGroupSettingsInput() {
    return this._frameCaptureGroupSettings.internalValue;
  }

  // hls_group_settings - computed: false, optional: true, required: false
  private _hlsGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsOutputReference(this, "hls_group_settings");
  public get hlsGroupSettings() {
    return this._hlsGroupSettings;
  }
  public putHlsGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings) {
    this._hlsGroupSettings.internalValue = value;
  }
  public resetHlsGroupSettings() {
    this._hlsGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsGroupSettingsInput() {
    return this._hlsGroupSettings.internalValue;
  }

  // media_package_group_settings - computed: false, optional: true, required: false
  private _mediaPackageGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsOutputReference(this, "media_package_group_settings");
  public get mediaPackageGroupSettings() {
    return this._mediaPackageGroupSettings;
  }
  public putMediaPackageGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings) {
    this._mediaPackageGroupSettings.internalValue = value;
  }
  public resetMediaPackageGroupSettings() {
    this._mediaPackageGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaPackageGroupSettingsInput() {
    return this._mediaPackageGroupSettings.internalValue;
  }

  // ms_smooth_group_settings - computed: false, optional: true, required: false
  private _msSmoothGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsOutputReference(this, "ms_smooth_group_settings");
  public get msSmoothGroupSettings() {
    return this._msSmoothGroupSettings;
  }
  public putMsSmoothGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings) {
    this._msSmoothGroupSettings.internalValue = value;
  }
  public resetMsSmoothGroupSettings() {
    this._msSmoothGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msSmoothGroupSettingsInput() {
    return this._msSmoothGroupSettings.internalValue;
  }

  // multiplex_group_settings - computed: false, optional: true, required: false
  private _multiplexGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsOutputReference(this, "multiplex_group_settings");
  public get multiplexGroupSettings() {
    return this._multiplexGroupSettings;
  }
  public putMultiplexGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings) {
    this._multiplexGroupSettings.internalValue = value;
  }
  public resetMultiplexGroupSettings() {
    this._multiplexGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexGroupSettingsInput() {
    return this._multiplexGroupSettings.internalValue;
  }

  // rtmp_group_settings - computed: false, optional: true, required: false
  private _rtmpGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsOutputReference(this, "rtmp_group_settings");
  public get rtmpGroupSettings() {
    return this._rtmpGroupSettings;
  }
  public putRtmpGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings) {
    this._rtmpGroupSettings.internalValue = value;
  }
  public resetRtmpGroupSettings() {
    this._rtmpGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmpGroupSettingsInput() {
    return this._rtmpGroupSettings.internalValue;
  }

  // udp_group_settings - computed: false, optional: true, required: false
  private _udpGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsOutputReference(this, "udp_group_settings");
  public get udpGroupSettings() {
    return this._udpGroupSettings;
  }
  public putUdpGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings) {
    this._udpGroupSettings.internalValue = value;
  }
  public resetUdpGroupSettings() {
    this._udpGroupSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpGroupSettingsInput() {
    return this._udpGroupSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#network_id MedialiveChannel#network_id}
  */
  readonly networkId: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#network_name MedialiveChannel#network_name}
  */
  readonly networkName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rep_interval MedialiveChannel#rep_interval}
  */
  readonly repInterval?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.numberToTerraform(struct!.networkId),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    rep_interval: cdktf.numberToTerraform(struct!.repInterval),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._repInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repInterval = this._repInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
      this._networkName = undefined;
      this._repInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
      this._networkName = value.networkName;
      this._repInterval = value.repInterval;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // rep_interval - computed: false, optional: true, required: false
  private _repInterval?: number; 
  public get repInterval() {
    return this.getNumberAttribute('rep_interval');
  }
  public set repInterval(value: number) {
    this._repInterval = value;
  }
  public resetRepInterval() {
    this._repInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repIntervalInput() {
    return this._repInterval;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_sdt MedialiveChannel#output_sdt}
  */
  readonly outputSdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rep_interval MedialiveChannel#rep_interval}
  */
  readonly repInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#service_name MedialiveChannel#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#service_provider_name MedialiveChannel#service_provider_name}
  */
  readonly serviceProviderName?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_sdt: cdktf.stringToTerraform(struct!.outputSdt),
    rep_interval: cdktf.numberToTerraform(struct!.repInterval),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_provider_name: cdktf.stringToTerraform(struct!.serviceProviderName),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputSdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSdt = this._outputSdt;
    }
    if (this._repInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repInterval = this._repInterval;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._serviceProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderName = this._serviceProviderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputSdt = undefined;
      this._repInterval = undefined;
      this._serviceName = undefined;
      this._serviceProviderName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputSdt = value.outputSdt;
      this._repInterval = value.repInterval;
      this._serviceName = value.serviceName;
      this._serviceProviderName = value.serviceProviderName;
    }
  }

  // output_sdt - computed: false, optional: true, required: false
  private _outputSdt?: string; 
  public get outputSdt() {
    return this.getStringAttribute('output_sdt');
  }
  public set outputSdt(value: string) {
    this._outputSdt = value;
  }
  public resetOutputSdt() {
    this._outputSdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSdtInput() {
    return this._outputSdt;
  }

  // rep_interval - computed: false, optional: true, required: false
  private _repInterval?: number; 
  public get repInterval() {
    return this.getNumberAttribute('rep_interval');
  }
  public set repInterval(value: number) {
    this._repInterval = value;
  }
  public resetRepInterval() {
    this._repInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repIntervalInput() {
    return this._repInterval;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_provider_name - computed: false, optional: true, required: false
  private _serviceProviderName?: string; 
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
  public set serviceProviderName(value: string) {
    this._serviceProviderName = value;
  }
  public resetServiceProviderName() {
    this._serviceProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderNameInput() {
    return this._serviceProviderName;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rep_interval MedialiveChannel#rep_interval}
  */
  readonly repInterval?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rep_interval: cdktf.numberToTerraform(struct!.repInterval),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repInterval = this._repInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repInterval = value.repInterval;
    }
  }

  // rep_interval - computed: false, optional: true, required: false
  private _repInterval?: number; 
  public get repInterval() {
    return this.getNumberAttribute('rep_interval');
  }
  public set repInterval(value: number) {
    this._repInterval = value;
  }
  public resetRepInterval() {
    this._repInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repIntervalInput() {
    return this._repInterval;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#absent_input_audio_behavior MedialiveChannel#absent_input_audio_behavior}
  */
  readonly absentInputAudioBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#arib MedialiveChannel#arib}
  */
  readonly arib?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#arib_captions_pid MedialiveChannel#arib_captions_pid}
  */
  readonly aribCaptionsPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#arib_captions_pid_control MedialiveChannel#arib_captions_pid_control}
  */
  readonly aribCaptionsPidControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_buffer_model MedialiveChannel#audio_buffer_model}
  */
  readonly audioBufferModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_frames_per_pes MedialiveChannel#audio_frames_per_pes}
  */
  readonly audioFramesPerPes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_pids MedialiveChannel#audio_pids}
  */
  readonly audioPids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_stream_type MedialiveChannel#audio_stream_type}
  */
  readonly audioStreamType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#buffer_model MedialiveChannel#buffer_model}
  */
  readonly bufferModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#cc_descriptor MedialiveChannel#cc_descriptor}
  */
  readonly ccDescriptor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_sub_pids MedialiveChannel#dvb_sub_pids}
  */
  readonly dvbSubPids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_teletext_pid MedialiveChannel#dvb_teletext_pid}
  */
  readonly dvbTeletextPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebif MedialiveChannel#ebif}
  */
  readonly ebif?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebp_audio_interval MedialiveChannel#ebp_audio_interval}
  */
  readonly ebpAudioInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebp_lookahead_ms MedialiveChannel#ebp_lookahead_ms}
  */
  readonly ebpLookaheadMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebp_placement MedialiveChannel#ebp_placement}
  */
  readonly ebpPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ecm_pid MedialiveChannel#ecm_pid}
  */
  readonly ecmPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#es_rate_in_pes MedialiveChannel#es_rate_in_pes}
  */
  readonly esRateInPes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#etv_platform_pid MedialiveChannel#etv_platform_pid}
  */
  readonly etvPlatformPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#etv_signal_pid MedialiveChannel#etv_signal_pid}
  */
  readonly etvSignalPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#fragment_time MedialiveChannel#fragment_time}
  */
  readonly fragmentTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#klv MedialiveChannel#klv}
  */
  readonly klv?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#klv_data_pids MedialiveChannel#klv_data_pids}
  */
  readonly klvDataPids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
  */
  readonly nielsenId3Behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#null_packet_bitrate MedialiveChannel#null_packet_bitrate}
  */
  readonly nullPacketBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pat_interval MedialiveChannel#pat_interval}
  */
  readonly patInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_control MedialiveChannel#pcr_control}
  */
  readonly pcrControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_period MedialiveChannel#pcr_period}
  */
  readonly pcrPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_pid MedialiveChannel#pcr_pid}
  */
  readonly pcrPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pmt_interval MedialiveChannel#pmt_interval}
  */
  readonly pmtInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pmt_pid MedialiveChannel#pmt_pid}
  */
  readonly pmtPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#program_num MedialiveChannel#program_num}
  */
  readonly programNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rate_mode MedialiveChannel#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte27_pids MedialiveChannel#scte27_pids}
  */
  readonly scte27Pids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_control MedialiveChannel#scte35_control}
  */
  readonly scte35Control?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
  */
  readonly scte35Pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segmentation_markers MedialiveChannel#segmentation_markers}
  */
  readonly segmentationMarkers?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segmentation_style MedialiveChannel#segmentation_style}
  */
  readonly segmentationStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segmentation_time MedialiveChannel#segmentation_time}
  */
  readonly segmentationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
  */
  readonly timedMetadataBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_pid MedialiveChannel#timed_metadata_pid}
  */
  readonly timedMetadataPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#transport_stream_id MedialiveChannel#transport_stream_id}
  */
  readonly transportStreamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_pid MedialiveChannel#video_pid}
  */
  readonly videoPid?: string;
  /**
  * dvb_nit_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_nit_settings MedialiveChannel#dvb_nit_settings}
  */
  readonly dvbNitSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings;
  /**
  * dvb_sdt_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_sdt_settings MedialiveChannel#dvb_sdt_settings}
  */
  readonly dvbSdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings;
  /**
  * dvb_tdt_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_tdt_settings MedialiveChannel#dvb_tdt_settings}
  */
  readonly dvbTdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absent_input_audio_behavior: cdktf.stringToTerraform(struct!.absentInputAudioBehavior),
    arib: cdktf.stringToTerraform(struct!.arib),
    arib_captions_pid: cdktf.stringToTerraform(struct!.aribCaptionsPid),
    arib_captions_pid_control: cdktf.stringToTerraform(struct!.aribCaptionsPidControl),
    audio_buffer_model: cdktf.stringToTerraform(struct!.audioBufferModel),
    audio_frames_per_pes: cdktf.numberToTerraform(struct!.audioFramesPerPes),
    audio_pids: cdktf.stringToTerraform(struct!.audioPids),
    audio_stream_type: cdktf.stringToTerraform(struct!.audioStreamType),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    buffer_model: cdktf.stringToTerraform(struct!.bufferModel),
    cc_descriptor: cdktf.stringToTerraform(struct!.ccDescriptor),
    dvb_sub_pids: cdktf.stringToTerraform(struct!.dvbSubPids),
    dvb_teletext_pid: cdktf.stringToTerraform(struct!.dvbTeletextPid),
    ebif: cdktf.stringToTerraform(struct!.ebif),
    ebp_audio_interval: cdktf.stringToTerraform(struct!.ebpAudioInterval),
    ebp_lookahead_ms: cdktf.numberToTerraform(struct!.ebpLookaheadMs),
    ebp_placement: cdktf.stringToTerraform(struct!.ebpPlacement),
    ecm_pid: cdktf.stringToTerraform(struct!.ecmPid),
    es_rate_in_pes: cdktf.stringToTerraform(struct!.esRateInPes),
    etv_platform_pid: cdktf.stringToTerraform(struct!.etvPlatformPid),
    etv_signal_pid: cdktf.stringToTerraform(struct!.etvSignalPid),
    fragment_time: cdktf.numberToTerraform(struct!.fragmentTime),
    klv: cdktf.stringToTerraform(struct!.klv),
    klv_data_pids: cdktf.stringToTerraform(struct!.klvDataPids),
    nielsen_id3_behavior: cdktf.stringToTerraform(struct!.nielsenId3Behavior),
    null_packet_bitrate: cdktf.numberToTerraform(struct!.nullPacketBitrate),
    pat_interval: cdktf.numberToTerraform(struct!.patInterval),
    pcr_control: cdktf.stringToTerraform(struct!.pcrControl),
    pcr_period: cdktf.numberToTerraform(struct!.pcrPeriod),
    pcr_pid: cdktf.stringToTerraform(struct!.pcrPid),
    pmt_interval: cdktf.numberToTerraform(struct!.pmtInterval),
    pmt_pid: cdktf.stringToTerraform(struct!.pmtPid),
    program_num: cdktf.numberToTerraform(struct!.programNum),
    rate_mode: cdktf.stringToTerraform(struct!.rateMode),
    scte27_pids: cdktf.stringToTerraform(struct!.scte27Pids),
    scte35_control: cdktf.stringToTerraform(struct!.scte35Control),
    scte35_pid: cdktf.stringToTerraform(struct!.scte35Pid),
    segmentation_markers: cdktf.stringToTerraform(struct!.segmentationMarkers),
    segmentation_style: cdktf.stringToTerraform(struct!.segmentationStyle),
    segmentation_time: cdktf.numberToTerraform(struct!.segmentationTime),
    timed_metadata_behavior: cdktf.stringToTerraform(struct!.timedMetadataBehavior),
    timed_metadata_pid: cdktf.stringToTerraform(struct!.timedMetadataPid),
    transport_stream_id: cdktf.numberToTerraform(struct!.transportStreamId),
    video_pid: cdktf.stringToTerraform(struct!.videoPid),
    dvb_nit_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToTerraform(struct!.dvbNitSettings),
    dvb_sdt_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToTerraform(struct!.dvbSdtSettings),
    dvb_tdt_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToTerraform(struct!.dvbTdtSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absentInputAudioBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.absentInputAudioBehavior = this._absentInputAudioBehavior;
    }
    if (this._arib !== undefined) {
      hasAnyValues = true;
      internalValueResult.arib = this._arib;
    }
    if (this._aribCaptionsPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.aribCaptionsPid = this._aribCaptionsPid;
    }
    if (this._aribCaptionsPidControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.aribCaptionsPidControl = this._aribCaptionsPidControl;
    }
    if (this._audioBufferModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioBufferModel = this._audioBufferModel;
    }
    if (this._audioFramesPerPes !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioFramesPerPes = this._audioFramesPerPes;
    }
    if (this._audioPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioPids = this._audioPids;
    }
    if (this._audioStreamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioStreamType = this._audioStreamType;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bufferModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferModel = this._bufferModel;
    }
    if (this._ccDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccDescriptor = this._ccDescriptor;
    }
    if (this._dvbSubPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbSubPids = this._dvbSubPids;
    }
    if (this._dvbTeletextPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbTeletextPid = this._dvbTeletextPid;
    }
    if (this._ebif !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebif = this._ebif;
    }
    if (this._ebpAudioInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpAudioInterval = this._ebpAudioInterval;
    }
    if (this._ebpLookaheadMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpLookaheadMs = this._ebpLookaheadMs;
    }
    if (this._ebpPlacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpPlacement = this._ebpPlacement;
    }
    if (this._ecmPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmPid = this._ecmPid;
    }
    if (this._esRateInPes !== undefined) {
      hasAnyValues = true;
      internalValueResult.esRateInPes = this._esRateInPes;
    }
    if (this._etvPlatformPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etvPlatformPid = this._etvPlatformPid;
    }
    if (this._etvSignalPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etvSignalPid = this._etvSignalPid;
    }
    if (this._fragmentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentTime = this._fragmentTime;
    }
    if (this._klv !== undefined) {
      hasAnyValues = true;
      internalValueResult.klv = this._klv;
    }
    if (this._klvDataPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.klvDataPids = this._klvDataPids;
    }
    if (this._nielsenId3Behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenId3Behavior = this._nielsenId3Behavior;
    }
    if (this._nullPacketBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullPacketBitrate = this._nullPacketBitrate;
    }
    if (this._patInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.patInterval = this._patInterval;
    }
    if (this._pcrControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrControl = this._pcrControl;
    }
    if (this._pcrPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrPeriod = this._pcrPeriod;
    }
    if (this._pcrPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrPid = this._pcrPid;
    }
    if (this._pmtInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtInterval = this._pmtInterval;
    }
    if (this._pmtPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtPid = this._pmtPid;
    }
    if (this._programNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.programNum = this._programNum;
    }
    if (this._rateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateMode = this._rateMode;
    }
    if (this._scte27Pids !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte27Pids = this._scte27Pids;
    }
    if (this._scte35Control !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Control = this._scte35Control;
    }
    if (this._scte35Pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Pid = this._scte35Pid;
    }
    if (this._segmentationMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationMarkers = this._segmentationMarkers;
    }
    if (this._segmentationStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationStyle = this._segmentationStyle;
    }
    if (this._segmentationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationTime = this._segmentationTime;
    }
    if (this._timedMetadataBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataBehavior = this._timedMetadataBehavior;
    }
    if (this._timedMetadataPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataPid = this._timedMetadataPid;
    }
    if (this._transportStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamId = this._transportStreamId;
    }
    if (this._videoPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoPid = this._videoPid;
    }
    if (this._dvbNitSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbNitSettings = this._dvbNitSettings?.internalValue;
    }
    if (this._dvbSdtSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbSdtSettings = this._dvbSdtSettings?.internalValue;
    }
    if (this._dvbTdtSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbTdtSettings = this._dvbTdtSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absentInputAudioBehavior = undefined;
      this._arib = undefined;
      this._aribCaptionsPid = undefined;
      this._aribCaptionsPidControl = undefined;
      this._audioBufferModel = undefined;
      this._audioFramesPerPes = undefined;
      this._audioPids = undefined;
      this._audioStreamType = undefined;
      this._bitrate = undefined;
      this._bufferModel = undefined;
      this._ccDescriptor = undefined;
      this._dvbSubPids = undefined;
      this._dvbTeletextPid = undefined;
      this._ebif = undefined;
      this._ebpAudioInterval = undefined;
      this._ebpLookaheadMs = undefined;
      this._ebpPlacement = undefined;
      this._ecmPid = undefined;
      this._esRateInPes = undefined;
      this._etvPlatformPid = undefined;
      this._etvSignalPid = undefined;
      this._fragmentTime = undefined;
      this._klv = undefined;
      this._klvDataPids = undefined;
      this._nielsenId3Behavior = undefined;
      this._nullPacketBitrate = undefined;
      this._patInterval = undefined;
      this._pcrControl = undefined;
      this._pcrPeriod = undefined;
      this._pcrPid = undefined;
      this._pmtInterval = undefined;
      this._pmtPid = undefined;
      this._programNum = undefined;
      this._rateMode = undefined;
      this._scte27Pids = undefined;
      this._scte35Control = undefined;
      this._scte35Pid = undefined;
      this._segmentationMarkers = undefined;
      this._segmentationStyle = undefined;
      this._segmentationTime = undefined;
      this._timedMetadataBehavior = undefined;
      this._timedMetadataPid = undefined;
      this._transportStreamId = undefined;
      this._videoPid = undefined;
      this._dvbNitSettings.internalValue = undefined;
      this._dvbSdtSettings.internalValue = undefined;
      this._dvbTdtSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absentInputAudioBehavior = value.absentInputAudioBehavior;
      this._arib = value.arib;
      this._aribCaptionsPid = value.aribCaptionsPid;
      this._aribCaptionsPidControl = value.aribCaptionsPidControl;
      this._audioBufferModel = value.audioBufferModel;
      this._audioFramesPerPes = value.audioFramesPerPes;
      this._audioPids = value.audioPids;
      this._audioStreamType = value.audioStreamType;
      this._bitrate = value.bitrate;
      this._bufferModel = value.bufferModel;
      this._ccDescriptor = value.ccDescriptor;
      this._dvbSubPids = value.dvbSubPids;
      this._dvbTeletextPid = value.dvbTeletextPid;
      this._ebif = value.ebif;
      this._ebpAudioInterval = value.ebpAudioInterval;
      this._ebpLookaheadMs = value.ebpLookaheadMs;
      this._ebpPlacement = value.ebpPlacement;
      this._ecmPid = value.ecmPid;
      this._esRateInPes = value.esRateInPes;
      this._etvPlatformPid = value.etvPlatformPid;
      this._etvSignalPid = value.etvSignalPid;
      this._fragmentTime = value.fragmentTime;
      this._klv = value.klv;
      this._klvDataPids = value.klvDataPids;
      this._nielsenId3Behavior = value.nielsenId3Behavior;
      this._nullPacketBitrate = value.nullPacketBitrate;
      this._patInterval = value.patInterval;
      this._pcrControl = value.pcrControl;
      this._pcrPeriod = value.pcrPeriod;
      this._pcrPid = value.pcrPid;
      this._pmtInterval = value.pmtInterval;
      this._pmtPid = value.pmtPid;
      this._programNum = value.programNum;
      this._rateMode = value.rateMode;
      this._scte27Pids = value.scte27Pids;
      this._scte35Control = value.scte35Control;
      this._scte35Pid = value.scte35Pid;
      this._segmentationMarkers = value.segmentationMarkers;
      this._segmentationStyle = value.segmentationStyle;
      this._segmentationTime = value.segmentationTime;
      this._timedMetadataBehavior = value.timedMetadataBehavior;
      this._timedMetadataPid = value.timedMetadataPid;
      this._transportStreamId = value.transportStreamId;
      this._videoPid = value.videoPid;
      this._dvbNitSettings.internalValue = value.dvbNitSettings;
      this._dvbSdtSettings.internalValue = value.dvbSdtSettings;
      this._dvbTdtSettings.internalValue = value.dvbTdtSettings;
    }
  }

  // absent_input_audio_behavior - computed: true, optional: true, required: false
  private _absentInputAudioBehavior?: string; 
  public get absentInputAudioBehavior() {
    return this.getStringAttribute('absent_input_audio_behavior');
  }
  public set absentInputAudioBehavior(value: string) {
    this._absentInputAudioBehavior = value;
  }
  public resetAbsentInputAudioBehavior() {
    this._absentInputAudioBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absentInputAudioBehaviorInput() {
    return this._absentInputAudioBehavior;
  }

  // arib - computed: false, optional: true, required: false
  private _arib?: string; 
  public get arib() {
    return this.getStringAttribute('arib');
  }
  public set arib(value: string) {
    this._arib = value;
  }
  public resetArib() {
    this._arib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aribInput() {
    return this._arib;
  }

  // arib_captions_pid - computed: true, optional: true, required: false
  private _aribCaptionsPid?: string; 
  public get aribCaptionsPid() {
    return this.getStringAttribute('arib_captions_pid');
  }
  public set aribCaptionsPid(value: string) {
    this._aribCaptionsPid = value;
  }
  public resetAribCaptionsPid() {
    this._aribCaptionsPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aribCaptionsPidInput() {
    return this._aribCaptionsPid;
  }

  // arib_captions_pid_control - computed: false, optional: true, required: false
  private _aribCaptionsPidControl?: string; 
  public get aribCaptionsPidControl() {
    return this.getStringAttribute('arib_captions_pid_control');
  }
  public set aribCaptionsPidControl(value: string) {
    this._aribCaptionsPidControl = value;
  }
  public resetAribCaptionsPidControl() {
    this._aribCaptionsPidControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aribCaptionsPidControlInput() {
    return this._aribCaptionsPidControl;
  }

  // audio_buffer_model - computed: false, optional: true, required: false
  private _audioBufferModel?: string; 
  public get audioBufferModel() {
    return this.getStringAttribute('audio_buffer_model');
  }
  public set audioBufferModel(value: string) {
    this._audioBufferModel = value;
  }
  public resetAudioBufferModel() {
    this._audioBufferModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioBufferModelInput() {
    return this._audioBufferModel;
  }

  // audio_frames_per_pes - computed: false, optional: true, required: false
  private _audioFramesPerPes?: number; 
  public get audioFramesPerPes() {
    return this.getNumberAttribute('audio_frames_per_pes');
  }
  public set audioFramesPerPes(value: number) {
    this._audioFramesPerPes = value;
  }
  public resetAudioFramesPerPes() {
    this._audioFramesPerPes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioFramesPerPesInput() {
    return this._audioFramesPerPes;
  }

  // audio_pids - computed: true, optional: true, required: false
  private _audioPids?: string; 
  public get audioPids() {
    return this.getStringAttribute('audio_pids');
  }
  public set audioPids(value: string) {
    this._audioPids = value;
  }
  public resetAudioPids() {
    this._audioPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioPidsInput() {
    return this._audioPids;
  }

  // audio_stream_type - computed: false, optional: true, required: false
  private _audioStreamType?: string; 
  public get audioStreamType() {
    return this.getStringAttribute('audio_stream_type');
  }
  public set audioStreamType(value: string) {
    this._audioStreamType = value;
  }
  public resetAudioStreamType() {
    this._audioStreamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioStreamTypeInput() {
    return this._audioStreamType;
  }

  // bitrate - computed: false, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // buffer_model - computed: false, optional: true, required: false
  private _bufferModel?: string; 
  public get bufferModel() {
    return this.getStringAttribute('buffer_model');
  }
  public set bufferModel(value: string) {
    this._bufferModel = value;
  }
  public resetBufferModel() {
    this._bufferModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferModelInput() {
    return this._bufferModel;
  }

  // cc_descriptor - computed: false, optional: true, required: false
  private _ccDescriptor?: string; 
  public get ccDescriptor() {
    return this.getStringAttribute('cc_descriptor');
  }
  public set ccDescriptor(value: string) {
    this._ccDescriptor = value;
  }
  public resetCcDescriptor() {
    this._ccDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccDescriptorInput() {
    return this._ccDescriptor;
  }

  // dvb_sub_pids - computed: true, optional: true, required: false
  private _dvbSubPids?: string; 
  public get dvbSubPids() {
    return this.getStringAttribute('dvb_sub_pids');
  }
  public set dvbSubPids(value: string) {
    this._dvbSubPids = value;
  }
  public resetDvbSubPids() {
    this._dvbSubPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbSubPidsInput() {
    return this._dvbSubPids;
  }

  // dvb_teletext_pid - computed: true, optional: true, required: false
  private _dvbTeletextPid?: string; 
  public get dvbTeletextPid() {
    return this.getStringAttribute('dvb_teletext_pid');
  }
  public set dvbTeletextPid(value: string) {
    this._dvbTeletextPid = value;
  }
  public resetDvbTeletextPid() {
    this._dvbTeletextPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbTeletextPidInput() {
    return this._dvbTeletextPid;
  }

  // ebif - computed: false, optional: true, required: false
  private _ebif?: string; 
  public get ebif() {
    return this.getStringAttribute('ebif');
  }
  public set ebif(value: string) {
    this._ebif = value;
  }
  public resetEbif() {
    this._ebif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebifInput() {
    return this._ebif;
  }

  // ebp_audio_interval - computed: false, optional: true, required: false
  private _ebpAudioInterval?: string; 
  public get ebpAudioInterval() {
    return this.getStringAttribute('ebp_audio_interval');
  }
  public set ebpAudioInterval(value: string) {
    this._ebpAudioInterval = value;
  }
  public resetEbpAudioInterval() {
    this._ebpAudioInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpAudioIntervalInput() {
    return this._ebpAudioInterval;
  }

  // ebp_lookahead_ms - computed: false, optional: true, required: false
  private _ebpLookaheadMs?: number; 
  public get ebpLookaheadMs() {
    return this.getNumberAttribute('ebp_lookahead_ms');
  }
  public set ebpLookaheadMs(value: number) {
    this._ebpLookaheadMs = value;
  }
  public resetEbpLookaheadMs() {
    this._ebpLookaheadMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpLookaheadMsInput() {
    return this._ebpLookaheadMs;
  }

  // ebp_placement - computed: false, optional: true, required: false
  private _ebpPlacement?: string; 
  public get ebpPlacement() {
    return this.getStringAttribute('ebp_placement');
  }
  public set ebpPlacement(value: string) {
    this._ebpPlacement = value;
  }
  public resetEbpPlacement() {
    this._ebpPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpPlacementInput() {
    return this._ebpPlacement;
  }

  // ecm_pid - computed: false, optional: true, required: false
  private _ecmPid?: string; 
  public get ecmPid() {
    return this.getStringAttribute('ecm_pid');
  }
  public set ecmPid(value: string) {
    this._ecmPid = value;
  }
  public resetEcmPid() {
    this._ecmPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmPidInput() {
    return this._ecmPid;
  }

  // es_rate_in_pes - computed: false, optional: true, required: false
  private _esRateInPes?: string; 
  public get esRateInPes() {
    return this.getStringAttribute('es_rate_in_pes');
  }
  public set esRateInPes(value: string) {
    this._esRateInPes = value;
  }
  public resetEsRateInPes() {
    this._esRateInPes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRateInPesInput() {
    return this._esRateInPes;
  }

  // etv_platform_pid - computed: true, optional: true, required: false
  private _etvPlatformPid?: string; 
  public get etvPlatformPid() {
    return this.getStringAttribute('etv_platform_pid');
  }
  public set etvPlatformPid(value: string) {
    this._etvPlatformPid = value;
  }
  public resetEtvPlatformPid() {
    this._etvPlatformPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etvPlatformPidInput() {
    return this._etvPlatformPid;
  }

  // etv_signal_pid - computed: true, optional: true, required: false
  private _etvSignalPid?: string; 
  public get etvSignalPid() {
    return this.getStringAttribute('etv_signal_pid');
  }
  public set etvSignalPid(value: string) {
    this._etvSignalPid = value;
  }
  public resetEtvSignalPid() {
    this._etvSignalPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etvSignalPidInput() {
    return this._etvSignalPid;
  }

  // fragment_time - computed: false, optional: true, required: false
  private _fragmentTime?: number; 
  public get fragmentTime() {
    return this.getNumberAttribute('fragment_time');
  }
  public set fragmentTime(value: number) {
    this._fragmentTime = value;
  }
  public resetFragmentTime() {
    this._fragmentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentTimeInput() {
    return this._fragmentTime;
  }

  // klv - computed: false, optional: true, required: false
  private _klv?: string; 
  public get klv() {
    return this.getStringAttribute('klv');
  }
  public set klv(value: string) {
    this._klv = value;
  }
  public resetKlv() {
    this._klv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get klvInput() {
    return this._klv;
  }

  // klv_data_pids - computed: true, optional: true, required: false
  private _klvDataPids?: string; 
  public get klvDataPids() {
    return this.getStringAttribute('klv_data_pids');
  }
  public set klvDataPids(value: string) {
    this._klvDataPids = value;
  }
  public resetKlvDataPids() {
    this._klvDataPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get klvDataPidsInput() {
    return this._klvDataPids;
  }

  // nielsen_id3_behavior - computed: false, optional: true, required: false
  private _nielsenId3Behavior?: string; 
  public get nielsenId3Behavior() {
    return this.getStringAttribute('nielsen_id3_behavior');
  }
  public set nielsenId3Behavior(value: string) {
    this._nielsenId3Behavior = value;
  }
  public resetNielsenId3Behavior() {
    this._nielsenId3Behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenId3BehaviorInput() {
    return this._nielsenId3Behavior;
  }

  // null_packet_bitrate - computed: false, optional: true, required: false
  private _nullPacketBitrate?: number; 
  public get nullPacketBitrate() {
    return this.getNumberAttribute('null_packet_bitrate');
  }
  public set nullPacketBitrate(value: number) {
    this._nullPacketBitrate = value;
  }
  public resetNullPacketBitrate() {
    this._nullPacketBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullPacketBitrateInput() {
    return this._nullPacketBitrate;
  }

  // pat_interval - computed: false, optional: true, required: false
  private _patInterval?: number; 
  public get patInterval() {
    return this.getNumberAttribute('pat_interval');
  }
  public set patInterval(value: number) {
    this._patInterval = value;
  }
  public resetPatInterval() {
    this._patInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patIntervalInput() {
    return this._patInterval;
  }

  // pcr_control - computed: false, optional: true, required: false
  private _pcrControl?: string; 
  public get pcrControl() {
    return this.getStringAttribute('pcr_control');
  }
  public set pcrControl(value: string) {
    this._pcrControl = value;
  }
  public resetPcrControl() {
    this._pcrControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrControlInput() {
    return this._pcrControl;
  }

  // pcr_period - computed: false, optional: true, required: false
  private _pcrPeriod?: number; 
  public get pcrPeriod() {
    return this.getNumberAttribute('pcr_period');
  }
  public set pcrPeriod(value: number) {
    this._pcrPeriod = value;
  }
  public resetPcrPeriod() {
    this._pcrPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrPeriodInput() {
    return this._pcrPeriod;
  }

  // pcr_pid - computed: false, optional: true, required: false
  private _pcrPid?: string; 
  public get pcrPid() {
    return this.getStringAttribute('pcr_pid');
  }
  public set pcrPid(value: string) {
    this._pcrPid = value;
  }
  public resetPcrPid() {
    this._pcrPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrPidInput() {
    return this._pcrPid;
  }

  // pmt_interval - computed: false, optional: true, required: false
  private _pmtInterval?: number; 
  public get pmtInterval() {
    return this.getNumberAttribute('pmt_interval');
  }
  public set pmtInterval(value: number) {
    this._pmtInterval = value;
  }
  public resetPmtInterval() {
    this._pmtInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtIntervalInput() {
    return this._pmtInterval;
  }

  // pmt_pid - computed: true, optional: true, required: false
  private _pmtPid?: string; 
  public get pmtPid() {
    return this.getStringAttribute('pmt_pid');
  }
  public set pmtPid(value: string) {
    this._pmtPid = value;
  }
  public resetPmtPid() {
    this._pmtPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtPidInput() {
    return this._pmtPid;
  }

  // program_num - computed: false, optional: true, required: false
  private _programNum?: number; 
  public get programNum() {
    return this.getNumberAttribute('program_num');
  }
  public set programNum(value: number) {
    this._programNum = value;
  }
  public resetProgramNum() {
    this._programNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumInput() {
    return this._programNum;
  }

  // rate_mode - computed: false, optional: true, required: false
  private _rateMode?: string; 
  public get rateMode() {
    return this.getStringAttribute('rate_mode');
  }
  public set rateMode(value: string) {
    this._rateMode = value;
  }
  public resetRateMode() {
    this._rateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateModeInput() {
    return this._rateMode;
  }

  // scte27_pids - computed: true, optional: true, required: false
  private _scte27Pids?: string; 
  public get scte27Pids() {
    return this.getStringAttribute('scte27_pids');
  }
  public set scte27Pids(value: string) {
    this._scte27Pids = value;
  }
  public resetScte27Pids() {
    this._scte27Pids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte27PidsInput() {
    return this._scte27Pids;
  }

  // scte35_control - computed: false, optional: true, required: false
  private _scte35Control?: string; 
  public get scte35Control() {
    return this.getStringAttribute('scte35_control');
  }
  public set scte35Control(value: string) {
    this._scte35Control = value;
  }
  public resetScte35Control() {
    this._scte35Control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35ControlInput() {
    return this._scte35Control;
  }

  // scte35_pid - computed: true, optional: true, required: false
  private _scte35Pid?: string; 
  public get scte35Pid() {
    return this.getStringAttribute('scte35_pid');
  }
  public set scte35Pid(value: string) {
    this._scte35Pid = value;
  }
  public resetScte35Pid() {
    this._scte35Pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35PidInput() {
    return this._scte35Pid;
  }

  // segmentation_markers - computed: false, optional: true, required: false
  private _segmentationMarkers?: string; 
  public get segmentationMarkers() {
    return this.getStringAttribute('segmentation_markers');
  }
  public set segmentationMarkers(value: string) {
    this._segmentationMarkers = value;
  }
  public resetSegmentationMarkers() {
    this._segmentationMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationMarkersInput() {
    return this._segmentationMarkers;
  }

  // segmentation_style - computed: false, optional: true, required: false
  private _segmentationStyle?: string; 
  public get segmentationStyle() {
    return this.getStringAttribute('segmentation_style');
  }
  public set segmentationStyle(value: string) {
    this._segmentationStyle = value;
  }
  public resetSegmentationStyle() {
    this._segmentationStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationStyleInput() {
    return this._segmentationStyle;
  }

  // segmentation_time - computed: false, optional: true, required: false
  private _segmentationTime?: number; 
  public get segmentationTime() {
    return this.getNumberAttribute('segmentation_time');
  }
  public set segmentationTime(value: number) {
    this._segmentationTime = value;
  }
  public resetSegmentationTime() {
    this._segmentationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationTimeInput() {
    return this._segmentationTime;
  }

  // timed_metadata_behavior - computed: false, optional: true, required: false
  private _timedMetadataBehavior?: string; 
  public get timedMetadataBehavior() {
    return this.getStringAttribute('timed_metadata_behavior');
  }
  public set timedMetadataBehavior(value: string) {
    this._timedMetadataBehavior = value;
  }
  public resetTimedMetadataBehavior() {
    this._timedMetadataBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataBehaviorInput() {
    return this._timedMetadataBehavior;
  }

  // timed_metadata_pid - computed: true, optional: true, required: false
  private _timedMetadataPid?: string; 
  public get timedMetadataPid() {
    return this.getStringAttribute('timed_metadata_pid');
  }
  public set timedMetadataPid(value: string) {
    this._timedMetadataPid = value;
  }
  public resetTimedMetadataPid() {
    this._timedMetadataPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataPidInput() {
    return this._timedMetadataPid;
  }

  // transport_stream_id - computed: false, optional: true, required: false
  private _transportStreamId?: number; 
  public get transportStreamId() {
    return this.getNumberAttribute('transport_stream_id');
  }
  public set transportStreamId(value: number) {
    this._transportStreamId = value;
  }
  public resetTransportStreamId() {
    this._transportStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamIdInput() {
    return this._transportStreamId;
  }

  // video_pid - computed: true, optional: true, required: false
  private _videoPid?: string; 
  public get videoPid() {
    return this.getStringAttribute('video_pid');
  }
  public set videoPid(value: string) {
    this._videoPid = value;
  }
  public resetVideoPid() {
    this._videoPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoPidInput() {
    return this._videoPid;
  }

  // dvb_nit_settings - computed: false, optional: true, required: false
  private _dvbNitSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference(this, "dvb_nit_settings");
  public get dvbNitSettings() {
    return this._dvbNitSettings;
  }
  public putDvbNitSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings) {
    this._dvbNitSettings.internalValue = value;
  }
  public resetDvbNitSettings() {
    this._dvbNitSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbNitSettingsInput() {
    return this._dvbNitSettings.internalValue;
  }

  // dvb_sdt_settings - computed: false, optional: true, required: false
  private _dvbSdtSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference(this, "dvb_sdt_settings");
  public get dvbSdtSettings() {
    return this._dvbSdtSettings;
  }
  public putDvbSdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings) {
    this._dvbSdtSettings.internalValue = value;
  }
  public resetDvbSdtSettings() {
    this._dvbSdtSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbSdtSettingsInput() {
    return this._dvbSdtSettings.internalValue;
  }

  // dvb_tdt_settings - computed: false, optional: true, required: false
  private _dvbTdtSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference(this, "dvb_tdt_settings");
  public get dvbTdtSettings() {
    return this._dvbTdtSettings;
  }
  public putDvbTdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings) {
    this._dvbTdtSettings.internalValue = value;
  }
  public resetDvbTdtSettings() {
    this._dvbTdtSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbTdtSettingsInput() {
    return this._dvbTdtSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings {
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings {
  /**
  * m2ts_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#m2ts_settings MedialiveChannel#m2ts_settings}
  */
  readonly m2TsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings;
  /**
  * raw_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#raw_settings MedialiveChannel#raw_settings}
  */
  readonly rawSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    m2ts_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsToTerraform(struct!.m2TsSettings),
    raw_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsToTerraform(struct!.rawSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._m2TsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.m2TsSettings = this._m2TsSettings?.internalValue;
    }
    if (this._rawSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawSettings = this._rawSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._m2TsSettings.internalValue = undefined;
      this._rawSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._m2TsSettings.internalValue = value.m2TsSettings;
      this._rawSettings.internalValue = value.rawSettings;
    }
  }

  // m2ts_settings - computed: false, optional: true, required: false
  private _m2TsSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsOutputReference(this, "m2ts_settings");
  public get m2TsSettings() {
    return this._m2TsSettings;
  }
  public putM2TsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings) {
    this._m2TsSettings.internalValue = value;
  }
  public resetM2TsSettings() {
    this._m2TsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m2TsSettingsInput() {
    return this._m2TsSettings.internalValue;
  }

  // raw_settings - computed: false, optional: true, required: false
  private _rawSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsOutputReference(this, "raw_settings");
  public get rawSettings() {
    return this._rawSettings;
  }
  public putRawSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings) {
    this._rawSettings.internalValue = value;
  }
  public resetRawSettings() {
    this._rawSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawSettingsInput() {
    return this._rawSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#extension MedialiveChannel#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name_modifier MedialiveChannel#name_modifier}
  */
  readonly nameModifier?: string;
  /**
  * container_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#container_settings MedialiveChannel#container_settings}
  */
  readonly containerSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension: cdktf.stringToTerraform(struct!.extension),
    name_modifier: cdktf.stringToTerraform(struct!.nameModifier),
    container_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsToTerraform(struct!.containerSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    if (this._nameModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameModifier = this._nameModifier;
    }
    if (this._containerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSettings = this._containerSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extension = undefined;
      this._nameModifier = undefined;
      this._containerSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extension = value.extension;
      this._nameModifier = value.nameModifier;
      this._containerSettings.internalValue = value.containerSettings;
    }
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // name_modifier - computed: false, optional: true, required: false
  private _nameModifier?: string; 
  public get nameModifier() {
    return this.getStringAttribute('name_modifier');
  }
  public set nameModifier(value: string) {
    this._nameModifier = value;
  }
  public resetNameModifier() {
    this._nameModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameModifierInput() {
    return this._nameModifier;
  }

  // container_settings - computed: false, optional: true, required: false
  private _containerSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsOutputReference(this, "container_settings");
  public get containerSettings() {
    return this._containerSettings;
  }
  public putContainerSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings) {
    this._containerSettings.internalValue = value;
  }
  public resetContainerSettings() {
    this._containerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSettingsInput() {
    return this._containerSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name_modifier MedialiveChannel#name_modifier}
  */
  readonly nameModifier?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_modifier: cdktf.stringToTerraform(struct!.nameModifier),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameModifier = this._nameModifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameModifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameModifier = value.nameModifier;
    }
  }

  // name_modifier - computed: true, optional: true, required: false
  private _nameModifier?: string; 
  public get nameModifier() {
    return this.getStringAttribute('name_modifier');
  }
  public set nameModifier(value: string) {
    this._nameModifier = value;
  }
  public resetNameModifier() {
    this._nameModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameModifierInput() {
    return this._nameModifier;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#password_param MedialiveChannel#password_param}
  */
  readonly passwordParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#uri MedialiveChannel#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#username MedialiveChannel#username}
  */
  readonly username?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_param: cdktf.stringToTerraform(struct!.passwordParam),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordParam = this._passwordParam;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordParam = undefined;
      this._uri = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordParam = value.passwordParam;
      this._uri = value.uri;
      this._username = value.username;
    }
  }

  // password_param - computed: true, optional: true, required: false
  private _passwordParam?: string; 
  public get passwordParam() {
    return this.getStringAttribute('password_param');
  }
  public set passwordParam(value: string) {
    this._passwordParam = value;
  }
  public resetPasswordParam() {
    this._passwordParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordParamInput() {
    return this._passwordParam;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_group_id MedialiveChannel#audio_group_id}
  */
  readonly audioGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_track_type MedialiveChannel#audio_track_type}
  */
  readonly audioTrackType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segment_type MedialiveChannel#segment_type}
  */
  readonly segmentType?: string;
  /**
  * audio_only_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_only_image MedialiveChannel#audio_only_image}
  */
  readonly audioOnlyImage?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_group_id: cdktf.stringToTerraform(struct!.audioGroupId),
    audio_track_type: cdktf.stringToTerraform(struct!.audioTrackType),
    segment_type: cdktf.stringToTerraform(struct!.segmentType),
    audio_only_image: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageToTerraform(struct!.audioOnlyImage),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioGroupId = this._audioGroupId;
    }
    if (this._audioTrackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioTrackType = this._audioTrackType;
    }
    if (this._segmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentType = this._segmentType;
    }
    if (this._audioOnlyImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioOnlyImage = this._audioOnlyImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioGroupId = undefined;
      this._audioTrackType = undefined;
      this._segmentType = undefined;
      this._audioOnlyImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioGroupId = value.audioGroupId;
      this._audioTrackType = value.audioTrackType;
      this._segmentType = value.segmentType;
      this._audioOnlyImage.internalValue = value.audioOnlyImage;
    }
  }

  // audio_group_id - computed: true, optional: true, required: false
  private _audioGroupId?: string; 
  public get audioGroupId() {
    return this.getStringAttribute('audio_group_id');
  }
  public set audioGroupId(value: string) {
    this._audioGroupId = value;
  }
  public resetAudioGroupId() {
    this._audioGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioGroupIdInput() {
    return this._audioGroupId;
  }

  // audio_track_type - computed: true, optional: true, required: false
  private _audioTrackType?: string; 
  public get audioTrackType() {
    return this.getStringAttribute('audio_track_type');
  }
  public set audioTrackType(value: string) {
    this._audioTrackType = value;
  }
  public resetAudioTrackType() {
    this._audioTrackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTrackTypeInput() {
    return this._audioTrackType;
  }

  // segment_type - computed: true, optional: true, required: false
  private _segmentType?: string; 
  public get segmentType() {
    return this.getStringAttribute('segment_type');
  }
  public set segmentType(value: string) {
    this._segmentType = value;
  }
  public resetSegmentType() {
    this._segmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentTypeInput() {
    return this._segmentType;
  }

  // audio_only_image - computed: false, optional: true, required: false
  private _audioOnlyImage = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageOutputReference(this, "audio_only_image");
  public get audioOnlyImage() {
    return this._audioOnlyImage;
  }
  public putAudioOnlyImage(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage) {
    this._audioOnlyImage.internalValue = value;
  }
  public resetAudioOnlyImage() {
    this._audioOnlyImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioOnlyImageInput() {
    return this._audioOnlyImage.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_rendition_sets MedialiveChannel#audio_rendition_sets}
  */
  readonly audioRenditionSets?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
  */
  readonly nielsenId3Behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
  */
  readonly timedMetadataBehavior?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_rendition_sets: cdktf.stringToTerraform(struct!.audioRenditionSets),
    nielsen_id3_behavior: cdktf.stringToTerraform(struct!.nielsenId3Behavior),
    timed_metadata_behavior: cdktf.stringToTerraform(struct!.timedMetadataBehavior),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioRenditionSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioRenditionSets = this._audioRenditionSets;
    }
    if (this._nielsenId3Behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenId3Behavior = this._nielsenId3Behavior;
    }
    if (this._timedMetadataBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataBehavior = this._timedMetadataBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioRenditionSets = undefined;
      this._nielsenId3Behavior = undefined;
      this._timedMetadataBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioRenditionSets = value.audioRenditionSets;
      this._nielsenId3Behavior = value.nielsenId3Behavior;
      this._timedMetadataBehavior = value.timedMetadataBehavior;
    }
  }

  // audio_rendition_sets - computed: true, optional: true, required: false
  private _audioRenditionSets?: string; 
  public get audioRenditionSets() {
    return this.getStringAttribute('audio_rendition_sets');
  }
  public set audioRenditionSets(value: string) {
    this._audioRenditionSets = value;
  }
  public resetAudioRenditionSets() {
    this._audioRenditionSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioRenditionSetsInput() {
    return this._audioRenditionSets;
  }

  // nielsen_id3_behavior - computed: true, optional: true, required: false
  private _nielsenId3Behavior?: string; 
  public get nielsenId3Behavior() {
    return this.getStringAttribute('nielsen_id3_behavior');
  }
  public set nielsenId3Behavior(value: string) {
    this._nielsenId3Behavior = value;
  }
  public resetNielsenId3Behavior() {
    this._nielsenId3Behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenId3BehaviorInput() {
    return this._nielsenId3Behavior;
  }

  // timed_metadata_behavior - computed: true, optional: true, required: false
  private _timedMetadataBehavior?: string; 
  public get timedMetadataBehavior() {
    return this.getStringAttribute('timed_metadata_behavior');
  }
  public set timedMetadataBehavior(value: string) {
    this._timedMetadataBehavior = value;
  }
  public resetTimedMetadataBehavior() {
    this._timedMetadataBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataBehaviorInput() {
    return this._timedMetadataBehavior;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings {
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_frames_per_pes MedialiveChannel#audio_frames_per_pes}
  */
  readonly audioFramesPerPes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_pids MedialiveChannel#audio_pids}
  */
  readonly audioPids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ecm_pid MedialiveChannel#ecm_pid}
  */
  readonly ecmPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
  */
  readonly nielsenId3Behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pat_interval MedialiveChannel#pat_interval}
  */
  readonly patInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_control MedialiveChannel#pcr_control}
  */
  readonly pcrControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_period MedialiveChannel#pcr_period}
  */
  readonly pcrPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_pid MedialiveChannel#pcr_pid}
  */
  readonly pcrPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pmt_interval MedialiveChannel#pmt_interval}
  */
  readonly pmtInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pmt_pid MedialiveChannel#pmt_pid}
  */
  readonly pmtPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#program_num MedialiveChannel#program_num}
  */
  readonly programNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_behavior MedialiveChannel#scte35_behavior}
  */
  readonly scte35Behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
  */
  readonly scte35Pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
  */
  readonly timedMetadataBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_pid MedialiveChannel#timed_metadata_pid}
  */
  readonly timedMetadataPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#transport_stream_id MedialiveChannel#transport_stream_id}
  */
  readonly transportStreamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_pid MedialiveChannel#video_pid}
  */
  readonly videoPid?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_frames_per_pes: cdktf.numberToTerraform(struct!.audioFramesPerPes),
    audio_pids: cdktf.stringToTerraform(struct!.audioPids),
    ecm_pid: cdktf.stringToTerraform(struct!.ecmPid),
    nielsen_id3_behavior: cdktf.stringToTerraform(struct!.nielsenId3Behavior),
    pat_interval: cdktf.numberToTerraform(struct!.patInterval),
    pcr_control: cdktf.stringToTerraform(struct!.pcrControl),
    pcr_period: cdktf.numberToTerraform(struct!.pcrPeriod),
    pcr_pid: cdktf.stringToTerraform(struct!.pcrPid),
    pmt_interval: cdktf.numberToTerraform(struct!.pmtInterval),
    pmt_pid: cdktf.stringToTerraform(struct!.pmtPid),
    program_num: cdktf.numberToTerraform(struct!.programNum),
    scte35_behavior: cdktf.stringToTerraform(struct!.scte35Behavior),
    scte35_pid: cdktf.stringToTerraform(struct!.scte35Pid),
    timed_metadata_behavior: cdktf.stringToTerraform(struct!.timedMetadataBehavior),
    timed_metadata_pid: cdktf.stringToTerraform(struct!.timedMetadataPid),
    transport_stream_id: cdktf.numberToTerraform(struct!.transportStreamId),
    video_pid: cdktf.stringToTerraform(struct!.videoPid),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioFramesPerPes !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioFramesPerPes = this._audioFramesPerPes;
    }
    if (this._audioPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioPids = this._audioPids;
    }
    if (this._ecmPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmPid = this._ecmPid;
    }
    if (this._nielsenId3Behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenId3Behavior = this._nielsenId3Behavior;
    }
    if (this._patInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.patInterval = this._patInterval;
    }
    if (this._pcrControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrControl = this._pcrControl;
    }
    if (this._pcrPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrPeriod = this._pcrPeriod;
    }
    if (this._pcrPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrPid = this._pcrPid;
    }
    if (this._pmtInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtInterval = this._pmtInterval;
    }
    if (this._pmtPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtPid = this._pmtPid;
    }
    if (this._programNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.programNum = this._programNum;
    }
    if (this._scte35Behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Behavior = this._scte35Behavior;
    }
    if (this._scte35Pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Pid = this._scte35Pid;
    }
    if (this._timedMetadataBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataBehavior = this._timedMetadataBehavior;
    }
    if (this._timedMetadataPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataPid = this._timedMetadataPid;
    }
    if (this._transportStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamId = this._transportStreamId;
    }
    if (this._videoPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoPid = this._videoPid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioFramesPerPes = undefined;
      this._audioPids = undefined;
      this._ecmPid = undefined;
      this._nielsenId3Behavior = undefined;
      this._patInterval = undefined;
      this._pcrControl = undefined;
      this._pcrPeriod = undefined;
      this._pcrPid = undefined;
      this._pmtInterval = undefined;
      this._pmtPid = undefined;
      this._programNum = undefined;
      this._scte35Behavior = undefined;
      this._scte35Pid = undefined;
      this._timedMetadataBehavior = undefined;
      this._timedMetadataPid = undefined;
      this._transportStreamId = undefined;
      this._videoPid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioFramesPerPes = value.audioFramesPerPes;
      this._audioPids = value.audioPids;
      this._ecmPid = value.ecmPid;
      this._nielsenId3Behavior = value.nielsenId3Behavior;
      this._patInterval = value.patInterval;
      this._pcrControl = value.pcrControl;
      this._pcrPeriod = value.pcrPeriod;
      this._pcrPid = value.pcrPid;
      this._pmtInterval = value.pmtInterval;
      this._pmtPid = value.pmtPid;
      this._programNum = value.programNum;
      this._scte35Behavior = value.scte35Behavior;
      this._scte35Pid = value.scte35Pid;
      this._timedMetadataBehavior = value.timedMetadataBehavior;
      this._timedMetadataPid = value.timedMetadataPid;
      this._transportStreamId = value.transportStreamId;
      this._videoPid = value.videoPid;
    }
  }

  // audio_frames_per_pes - computed: true, optional: true, required: false
  private _audioFramesPerPes?: number; 
  public get audioFramesPerPes() {
    return this.getNumberAttribute('audio_frames_per_pes');
  }
  public set audioFramesPerPes(value: number) {
    this._audioFramesPerPes = value;
  }
  public resetAudioFramesPerPes() {
    this._audioFramesPerPes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioFramesPerPesInput() {
    return this._audioFramesPerPes;
  }

  // audio_pids - computed: true, optional: true, required: false
  private _audioPids?: string; 
  public get audioPids() {
    return this.getStringAttribute('audio_pids');
  }
  public set audioPids(value: string) {
    this._audioPids = value;
  }
  public resetAudioPids() {
    this._audioPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioPidsInput() {
    return this._audioPids;
  }

  // ecm_pid - computed: true, optional: true, required: false
  private _ecmPid?: string; 
  public get ecmPid() {
    return this.getStringAttribute('ecm_pid');
  }
  public set ecmPid(value: string) {
    this._ecmPid = value;
  }
  public resetEcmPid() {
    this._ecmPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmPidInput() {
    return this._ecmPid;
  }

  // nielsen_id3_behavior - computed: true, optional: true, required: false
  private _nielsenId3Behavior?: string; 
  public get nielsenId3Behavior() {
    return this.getStringAttribute('nielsen_id3_behavior');
  }
  public set nielsenId3Behavior(value: string) {
    this._nielsenId3Behavior = value;
  }
  public resetNielsenId3Behavior() {
    this._nielsenId3Behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenId3BehaviorInput() {
    return this._nielsenId3Behavior;
  }

  // pat_interval - computed: true, optional: true, required: false
  private _patInterval?: number; 
  public get patInterval() {
    return this.getNumberAttribute('pat_interval');
  }
  public set patInterval(value: number) {
    this._patInterval = value;
  }
  public resetPatInterval() {
    this._patInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patIntervalInput() {
    return this._patInterval;
  }

  // pcr_control - computed: true, optional: true, required: false
  private _pcrControl?: string; 
  public get pcrControl() {
    return this.getStringAttribute('pcr_control');
  }
  public set pcrControl(value: string) {
    this._pcrControl = value;
  }
  public resetPcrControl() {
    this._pcrControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrControlInput() {
    return this._pcrControl;
  }

  // pcr_period - computed: true, optional: true, required: false
  private _pcrPeriod?: number; 
  public get pcrPeriod() {
    return this.getNumberAttribute('pcr_period');
  }
  public set pcrPeriod(value: number) {
    this._pcrPeriod = value;
  }
  public resetPcrPeriod() {
    this._pcrPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrPeriodInput() {
    return this._pcrPeriod;
  }

  // pcr_pid - computed: true, optional: true, required: false
  private _pcrPid?: string; 
  public get pcrPid() {
    return this.getStringAttribute('pcr_pid');
  }
  public set pcrPid(value: string) {
    this._pcrPid = value;
  }
  public resetPcrPid() {
    this._pcrPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrPidInput() {
    return this._pcrPid;
  }

  // pmt_interval - computed: true, optional: true, required: false
  private _pmtInterval?: number; 
  public get pmtInterval() {
    return this.getNumberAttribute('pmt_interval');
  }
  public set pmtInterval(value: number) {
    this._pmtInterval = value;
  }
  public resetPmtInterval() {
    this._pmtInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtIntervalInput() {
    return this._pmtInterval;
  }

  // pmt_pid - computed: true, optional: true, required: false
  private _pmtPid?: string; 
  public get pmtPid() {
    return this.getStringAttribute('pmt_pid');
  }
  public set pmtPid(value: string) {
    this._pmtPid = value;
  }
  public resetPmtPid() {
    this._pmtPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtPidInput() {
    return this._pmtPid;
  }

  // program_num - computed: true, optional: true, required: false
  private _programNum?: number; 
  public get programNum() {
    return this.getNumberAttribute('program_num');
  }
  public set programNum(value: number) {
    this._programNum = value;
  }
  public resetProgramNum() {
    this._programNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumInput() {
    return this._programNum;
  }

  // scte35_behavior - computed: true, optional: true, required: false
  private _scte35Behavior?: string; 
  public get scte35Behavior() {
    return this.getStringAttribute('scte35_behavior');
  }
  public set scte35Behavior(value: string) {
    this._scte35Behavior = value;
  }
  public resetScte35Behavior() {
    this._scte35Behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35BehaviorInput() {
    return this._scte35Behavior;
  }

  // scte35_pid - computed: true, optional: true, required: false
  private _scte35Pid?: string; 
  public get scte35Pid() {
    return this.getStringAttribute('scte35_pid');
  }
  public set scte35Pid(value: string) {
    this._scte35Pid = value;
  }
  public resetScte35Pid() {
    this._scte35Pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35PidInput() {
    return this._scte35Pid;
  }

  // timed_metadata_behavior - computed: true, optional: true, required: false
  private _timedMetadataBehavior?: string; 
  public get timedMetadataBehavior() {
    return this.getStringAttribute('timed_metadata_behavior');
  }
  public set timedMetadataBehavior(value: string) {
    this._timedMetadataBehavior = value;
  }
  public resetTimedMetadataBehavior() {
    this._timedMetadataBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataBehaviorInput() {
    return this._timedMetadataBehavior;
  }

  // timed_metadata_pid - computed: true, optional: true, required: false
  private _timedMetadataPid?: string; 
  public get timedMetadataPid() {
    return this.getStringAttribute('timed_metadata_pid');
  }
  public set timedMetadataPid(value: string) {
    this._timedMetadataPid = value;
  }
  public resetTimedMetadataPid() {
    this._timedMetadataPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataPidInput() {
    return this._timedMetadataPid;
  }

  // transport_stream_id - computed: true, optional: true, required: false
  private _transportStreamId?: number; 
  public get transportStreamId() {
    return this.getNumberAttribute('transport_stream_id');
  }
  public set transportStreamId(value: number) {
    this._transportStreamId = value;
  }
  public resetTransportStreamId() {
    this._transportStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamIdInput() {
    return this._transportStreamId;
  }

  // video_pid - computed: true, optional: true, required: false
  private _videoPid?: string; 
  public get videoPid() {
    return this.getStringAttribute('video_pid');
  }
  public set videoPid(value: string) {
    this._videoPid = value;
  }
  public resetVideoPid() {
    this._videoPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoPidInput() {
    return this._videoPid;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_rendition_sets MedialiveChannel#audio_rendition_sets}
  */
  readonly audioRenditionSets?: string;
  /**
  * m3u8_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#m3u8_settings MedialiveChannel#m3u8_settings}
  */
  readonly m3U8Settings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_rendition_sets: cdktf.stringToTerraform(struct!.audioRenditionSets),
    m3u8_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsToTerraform(struct!.m3U8Settings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioRenditionSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioRenditionSets = this._audioRenditionSets;
    }
    if (this._m3U8Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.m3U8Settings = this._m3U8Settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioRenditionSets = undefined;
      this._m3U8Settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioRenditionSets = value.audioRenditionSets;
      this._m3U8Settings.internalValue = value.m3U8Settings;
    }
  }

  // audio_rendition_sets - computed: true, optional: true, required: false
  private _audioRenditionSets?: string; 
  public get audioRenditionSets() {
    return this.getStringAttribute('audio_rendition_sets');
  }
  public set audioRenditionSets(value: string) {
    this._audioRenditionSets = value;
  }
  public resetAudioRenditionSets() {
    this._audioRenditionSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioRenditionSetsInput() {
    return this._audioRenditionSets;
  }

  // m3u8_settings - computed: false, optional: false, required: true
  private _m3U8Settings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsOutputReference(this, "m3u8_settings");
  public get m3U8Settings() {
    return this._m3U8Settings;
  }
  public putM3U8Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings) {
    this._m3U8Settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get m3U8SettingsInput() {
    return this._m3U8Settings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings {
  /**
  * audio_only_hls_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_only_hls_settings MedialiveChannel#audio_only_hls_settings}
  */
  readonly audioOnlyHlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings;
  /**
  * fmp4_hls_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#fmp4_hls_settings MedialiveChannel#fmp4_hls_settings}
  */
  readonly fmp4HlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings;
  /**
  * frame_capture_hls_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#frame_capture_hls_settings MedialiveChannel#frame_capture_hls_settings}
  */
  readonly frameCaptureHlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings;
  /**
  * standard_hls_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#standard_hls_settings MedialiveChannel#standard_hls_settings}
  */
  readonly standardHlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_only_hls_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsToTerraform(struct!.audioOnlyHlsSettings),
    fmp4_hls_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsToTerraform(struct!.fmp4HlsSettings),
    frame_capture_hls_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsToTerraform(struct!.frameCaptureHlsSettings),
    standard_hls_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsToTerraform(struct!.standardHlsSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioOnlyHlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioOnlyHlsSettings = this._audioOnlyHlsSettings?.internalValue;
    }
    if (this._fmp4HlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmp4HlsSettings = this._fmp4HlsSettings?.internalValue;
    }
    if (this._frameCaptureHlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameCaptureHlsSettings = this._frameCaptureHlsSettings?.internalValue;
    }
    if (this._standardHlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardHlsSettings = this._standardHlsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioOnlyHlsSettings.internalValue = undefined;
      this._fmp4HlsSettings.internalValue = undefined;
      this._frameCaptureHlsSettings.internalValue = undefined;
      this._standardHlsSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioOnlyHlsSettings.internalValue = value.audioOnlyHlsSettings;
      this._fmp4HlsSettings.internalValue = value.fmp4HlsSettings;
      this._frameCaptureHlsSettings.internalValue = value.frameCaptureHlsSettings;
      this._standardHlsSettings.internalValue = value.standardHlsSettings;
    }
  }

  // audio_only_hls_settings - computed: false, optional: true, required: false
  private _audioOnlyHlsSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsOutputReference(this, "audio_only_hls_settings");
  public get audioOnlyHlsSettings() {
    return this._audioOnlyHlsSettings;
  }
  public putAudioOnlyHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings) {
    this._audioOnlyHlsSettings.internalValue = value;
  }
  public resetAudioOnlyHlsSettings() {
    this._audioOnlyHlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioOnlyHlsSettingsInput() {
    return this._audioOnlyHlsSettings.internalValue;
  }

  // fmp4_hls_settings - computed: false, optional: true, required: false
  private _fmp4HlsSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsOutputReference(this, "fmp4_hls_settings");
  public get fmp4HlsSettings() {
    return this._fmp4HlsSettings;
  }
  public putFmp4HlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings) {
    this._fmp4HlsSettings.internalValue = value;
  }
  public resetFmp4HlsSettings() {
    this._fmp4HlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmp4HlsSettingsInput() {
    return this._fmp4HlsSettings.internalValue;
  }

  // frame_capture_hls_settings - computed: false, optional: true, required: false
  private _frameCaptureHlsSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsOutputReference(this, "frame_capture_hls_settings");
  public get frameCaptureHlsSettings() {
    return this._frameCaptureHlsSettings;
  }
  public putFrameCaptureHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings) {
    this._frameCaptureHlsSettings.internalValue = value;
  }
  public resetFrameCaptureHlsSettings() {
    this._frameCaptureHlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameCaptureHlsSettingsInput() {
    return this._frameCaptureHlsSettings.internalValue;
  }

  // standard_hls_settings - computed: false, optional: true, required: false
  private _standardHlsSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsOutputReference(this, "standard_hls_settings");
  public get standardHlsSettings() {
    return this._standardHlsSettings;
  }
  public putStandardHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings) {
    this._standardHlsSettings.internalValue = value;
  }
  public resetStandardHlsSettings() {
    this._standardHlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardHlsSettingsInput() {
    return this._standardHlsSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#h265_packaging_type MedialiveChannel#h265_packaging_type}
  */
  readonly h265PackagingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name_modifier MedialiveChannel#name_modifier}
  */
  readonly nameModifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segment_modifier MedialiveChannel#segment_modifier}
  */
  readonly segmentModifier?: string;
  /**
  * hls_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_settings MedialiveChannel#hls_settings}
  */
  readonly hlsSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h265_packaging_type: cdktf.stringToTerraform(struct!.h265PackagingType),
    name_modifier: cdktf.stringToTerraform(struct!.nameModifier),
    segment_modifier: cdktf.stringToTerraform(struct!.segmentModifier),
    hls_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsToTerraform(struct!.hlsSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h265PackagingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.h265PackagingType = this._h265PackagingType;
    }
    if (this._nameModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameModifier = this._nameModifier;
    }
    if (this._segmentModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentModifier = this._segmentModifier;
    }
    if (this._hlsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsSettings = this._hlsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._h265PackagingType = undefined;
      this._nameModifier = undefined;
      this._segmentModifier = undefined;
      this._hlsSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._h265PackagingType = value.h265PackagingType;
      this._nameModifier = value.nameModifier;
      this._segmentModifier = value.segmentModifier;
      this._hlsSettings.internalValue = value.hlsSettings;
    }
  }

  // h265_packaging_type - computed: true, optional: true, required: false
  private _h265PackagingType?: string; 
  public get h265PackagingType() {
    return this.getStringAttribute('h265_packaging_type');
  }
  public set h265PackagingType(value: string) {
    this._h265PackagingType = value;
  }
  public resetH265PackagingType() {
    this._h265PackagingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h265PackagingTypeInput() {
    return this._h265PackagingType;
  }

  // name_modifier - computed: true, optional: true, required: false
  private _nameModifier?: string; 
  public get nameModifier() {
    return this.getStringAttribute('name_modifier');
  }
  public set nameModifier(value: string) {
    this._nameModifier = value;
  }
  public resetNameModifier() {
    this._nameModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameModifierInput() {
    return this._nameModifier;
  }

  // segment_modifier - computed: true, optional: true, required: false
  private _segmentModifier?: string; 
  public get segmentModifier() {
    return this.getStringAttribute('segment_modifier');
  }
  public set segmentModifier(value: string) {
    this._segmentModifier = value;
  }
  public resetSegmentModifier() {
    this._segmentModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentModifierInput() {
    return this._segmentModifier;
  }

  // hls_settings - computed: false, optional: false, required: true
  private _hlsSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsOutputReference(this, "hls_settings");
  public get hlsSettings() {
    return this._hlsSettings;
  }
  public putHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings) {
    this._hlsSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsSettingsInput() {
    return this._hlsSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings {
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#h265_packaging_type MedialiveChannel#h265_packaging_type}
  */
  readonly h265PackagingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name_modifier MedialiveChannel#name_modifier}
  */
  readonly nameModifier?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h265_packaging_type: cdktf.stringToTerraform(struct!.h265PackagingType),
    name_modifier: cdktf.stringToTerraform(struct!.nameModifier),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h265PackagingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.h265PackagingType = this._h265PackagingType;
    }
    if (this._nameModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameModifier = this._nameModifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._h265PackagingType = undefined;
      this._nameModifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._h265PackagingType = value.h265PackagingType;
      this._nameModifier = value.nameModifier;
    }
  }

  // h265_packaging_type - computed: true, optional: true, required: false
  private _h265PackagingType?: string; 
  public get h265PackagingType() {
    return this.getStringAttribute('h265_packaging_type');
  }
  public set h265PackagingType(value: string) {
    this._h265PackagingType = value;
  }
  public resetH265PackagingType() {
    this._h265PackagingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h265PackagingTypeInput() {
    return this._h265PackagingType;
  }

  // name_modifier - computed: true, optional: true, required: false
  private _nameModifier?: string; 
  public get nameModifier() {
    return this.getStringAttribute('name_modifier');
  }
  public set nameModifier(value: string) {
    this._nameModifier = value;
  }
  public resetNameModifier() {
    this._nameModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameModifierInput() {
    return this._nameModifier;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings {
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationToTerraform(struct!.destination),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination.internalValue = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#certficate_mode MedialiveChannel#certficate_mode}
  */
  readonly certficateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
  */
  readonly connectionRetryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#num_retries MedialiveChannel#num_retries}
  */
  readonly numRetries?: number;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certficate_mode: cdktf.stringToTerraform(struct!.certficateMode),
    connection_retry_interval: cdktf.numberToTerraform(struct!.connectionRetryInterval),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationToTerraform(struct!.destination),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certficateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.certficateMode = this._certficateMode;
    }
    if (this._connectionRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRetryInterval = this._connectionRetryInterval;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certficateMode = undefined;
      this._connectionRetryInterval = undefined;
      this._numRetries = undefined;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certficateMode = value.certficateMode;
      this._connectionRetryInterval = value.connectionRetryInterval;
      this._numRetries = value.numRetries;
      this._destination.internalValue = value.destination;
    }
  }

  // certficate_mode - computed: true, optional: true, required: false
  private _certficateMode?: string; 
  public get certficateMode() {
    return this.getStringAttribute('certficate_mode');
  }
  public set certficateMode(value: string) {
    this._certficateMode = value;
  }
  public resetCertficateMode() {
    this._certficateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certficateModeInput() {
    return this._certficateMode;
  }

  // connection_retry_interval - computed: true, optional: true, required: false
  private _connectionRetryInterval?: number; 
  public get connectionRetryInterval() {
    return this.getNumberAttribute('connection_retry_interval');
  }
  public set connectionRetryInterval(value: number) {
    this._connectionRetryInterval = value;
  }
  public resetConnectionRetryInterval() {
    this._connectionRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryIntervalInput() {
    return this._connectionRetryInterval;
  }

  // num_retries - computed: true, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#network_id MedialiveChannel#network_id}
  */
  readonly networkId: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#network_name MedialiveChannel#network_name}
  */
  readonly networkName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rep_interval MedialiveChannel#rep_interval}
  */
  readonly repInterval?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.numberToTerraform(struct!.networkId),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    rep_interval: cdktf.numberToTerraform(struct!.repInterval),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._repInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repInterval = this._repInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
      this._networkName = undefined;
      this._repInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
      this._networkName = value.networkName;
      this._repInterval = value.repInterval;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // rep_interval - computed: false, optional: true, required: false
  private _repInterval?: number; 
  public get repInterval() {
    return this.getNumberAttribute('rep_interval');
  }
  public set repInterval(value: number) {
    this._repInterval = value;
  }
  public resetRepInterval() {
    this._repInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repIntervalInput() {
    return this._repInterval;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_sdt MedialiveChannel#output_sdt}
  */
  readonly outputSdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rep_interval MedialiveChannel#rep_interval}
  */
  readonly repInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#service_name MedialiveChannel#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#service_provider_name MedialiveChannel#service_provider_name}
  */
  readonly serviceProviderName?: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_sdt: cdktf.stringToTerraform(struct!.outputSdt),
    rep_interval: cdktf.numberToTerraform(struct!.repInterval),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_provider_name: cdktf.stringToTerraform(struct!.serviceProviderName),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputSdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSdt = this._outputSdt;
    }
    if (this._repInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repInterval = this._repInterval;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._serviceProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderName = this._serviceProviderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputSdt = undefined;
      this._repInterval = undefined;
      this._serviceName = undefined;
      this._serviceProviderName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputSdt = value.outputSdt;
      this._repInterval = value.repInterval;
      this._serviceName = value.serviceName;
      this._serviceProviderName = value.serviceProviderName;
    }
  }

  // output_sdt - computed: false, optional: true, required: false
  private _outputSdt?: string; 
  public get outputSdt() {
    return this.getStringAttribute('output_sdt');
  }
  public set outputSdt(value: string) {
    this._outputSdt = value;
  }
  public resetOutputSdt() {
    this._outputSdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSdtInput() {
    return this._outputSdt;
  }

  // rep_interval - computed: false, optional: true, required: false
  private _repInterval?: number; 
  public get repInterval() {
    return this.getNumberAttribute('rep_interval');
  }
  public set repInterval(value: number) {
    this._repInterval = value;
  }
  public resetRepInterval() {
    this._repInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repIntervalInput() {
    return this._repInterval;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_provider_name - computed: false, optional: true, required: false
  private _serviceProviderName?: string; 
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
  public set serviceProviderName(value: string) {
    this._serviceProviderName = value;
  }
  public resetServiceProviderName() {
    this._serviceProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderNameInput() {
    return this._serviceProviderName;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rep_interval MedialiveChannel#rep_interval}
  */
  readonly repInterval?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rep_interval: cdktf.numberToTerraform(struct!.repInterval),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repInterval = this._repInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repInterval = value.repInterval;
    }
  }

  // rep_interval - computed: false, optional: true, required: false
  private _repInterval?: number; 
  public get repInterval() {
    return this.getNumberAttribute('rep_interval');
  }
  public set repInterval(value: number) {
    this._repInterval = value;
  }
  public resetRepInterval() {
    this._repInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repIntervalInput() {
    return this._repInterval;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#absent_input_audio_behavior MedialiveChannel#absent_input_audio_behavior}
  */
  readonly absentInputAudioBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#arib MedialiveChannel#arib}
  */
  readonly arib?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#arib_captions_pid MedialiveChannel#arib_captions_pid}
  */
  readonly aribCaptionsPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#arib_captions_pid_control MedialiveChannel#arib_captions_pid_control}
  */
  readonly aribCaptionsPidControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_buffer_model MedialiveChannel#audio_buffer_model}
  */
  readonly audioBufferModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_frames_per_pes MedialiveChannel#audio_frames_per_pes}
  */
  readonly audioFramesPerPes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_pids MedialiveChannel#audio_pids}
  */
  readonly audioPids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_stream_type MedialiveChannel#audio_stream_type}
  */
  readonly audioStreamType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#buffer_model MedialiveChannel#buffer_model}
  */
  readonly bufferModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#cc_descriptor MedialiveChannel#cc_descriptor}
  */
  readonly ccDescriptor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_sub_pids MedialiveChannel#dvb_sub_pids}
  */
  readonly dvbSubPids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_teletext_pid MedialiveChannel#dvb_teletext_pid}
  */
  readonly dvbTeletextPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebif MedialiveChannel#ebif}
  */
  readonly ebif?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebp_audio_interval MedialiveChannel#ebp_audio_interval}
  */
  readonly ebpAudioInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebp_lookahead_ms MedialiveChannel#ebp_lookahead_ms}
  */
  readonly ebpLookaheadMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ebp_placement MedialiveChannel#ebp_placement}
  */
  readonly ebpPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ecm_pid MedialiveChannel#ecm_pid}
  */
  readonly ecmPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#es_rate_in_pes MedialiveChannel#es_rate_in_pes}
  */
  readonly esRateInPes?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#etv_platform_pid MedialiveChannel#etv_platform_pid}
  */
  readonly etvPlatformPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#etv_signal_pid MedialiveChannel#etv_signal_pid}
  */
  readonly etvSignalPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#fragment_time MedialiveChannel#fragment_time}
  */
  readonly fragmentTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#klv MedialiveChannel#klv}
  */
  readonly klv?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#klv_data_pids MedialiveChannel#klv_data_pids}
  */
  readonly klvDataPids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
  */
  readonly nielsenId3Behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#null_packet_bitrate MedialiveChannel#null_packet_bitrate}
  */
  readonly nullPacketBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pat_interval MedialiveChannel#pat_interval}
  */
  readonly patInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_control MedialiveChannel#pcr_control}
  */
  readonly pcrControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_period MedialiveChannel#pcr_period}
  */
  readonly pcrPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pcr_pid MedialiveChannel#pcr_pid}
  */
  readonly pcrPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pmt_interval MedialiveChannel#pmt_interval}
  */
  readonly pmtInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pmt_pid MedialiveChannel#pmt_pid}
  */
  readonly pmtPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#program_num MedialiveChannel#program_num}
  */
  readonly programNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rate_mode MedialiveChannel#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte27_pids MedialiveChannel#scte27_pids}
  */
  readonly scte27Pids?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_control MedialiveChannel#scte35_control}
  */
  readonly scte35Control?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
  */
  readonly scte35Pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segmentation_markers MedialiveChannel#segmentation_markers}
  */
  readonly segmentationMarkers?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segmentation_style MedialiveChannel#segmentation_style}
  */
  readonly segmentationStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#segmentation_time MedialiveChannel#segmentation_time}
  */
  readonly segmentationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
  */
  readonly timedMetadataBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timed_metadata_pid MedialiveChannel#timed_metadata_pid}
  */
  readonly timedMetadataPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#transport_stream_id MedialiveChannel#transport_stream_id}
  */
  readonly transportStreamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_pid MedialiveChannel#video_pid}
  */
  readonly videoPid?: string;
  /**
  * dvb_nit_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_nit_settings MedialiveChannel#dvb_nit_settings}
  */
  readonly dvbNitSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings;
  /**
  * dvb_sdt_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_sdt_settings MedialiveChannel#dvb_sdt_settings}
  */
  readonly dvbSdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings;
  /**
  * dvb_tdt_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_tdt_settings MedialiveChannel#dvb_tdt_settings}
  */
  readonly dvbTdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absent_input_audio_behavior: cdktf.stringToTerraform(struct!.absentInputAudioBehavior),
    arib: cdktf.stringToTerraform(struct!.arib),
    arib_captions_pid: cdktf.stringToTerraform(struct!.aribCaptionsPid),
    arib_captions_pid_control: cdktf.stringToTerraform(struct!.aribCaptionsPidControl),
    audio_buffer_model: cdktf.stringToTerraform(struct!.audioBufferModel),
    audio_frames_per_pes: cdktf.numberToTerraform(struct!.audioFramesPerPes),
    audio_pids: cdktf.stringToTerraform(struct!.audioPids),
    audio_stream_type: cdktf.stringToTerraform(struct!.audioStreamType),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    buffer_model: cdktf.stringToTerraform(struct!.bufferModel),
    cc_descriptor: cdktf.stringToTerraform(struct!.ccDescriptor),
    dvb_sub_pids: cdktf.stringToTerraform(struct!.dvbSubPids),
    dvb_teletext_pid: cdktf.stringToTerraform(struct!.dvbTeletextPid),
    ebif: cdktf.stringToTerraform(struct!.ebif),
    ebp_audio_interval: cdktf.stringToTerraform(struct!.ebpAudioInterval),
    ebp_lookahead_ms: cdktf.numberToTerraform(struct!.ebpLookaheadMs),
    ebp_placement: cdktf.stringToTerraform(struct!.ebpPlacement),
    ecm_pid: cdktf.stringToTerraform(struct!.ecmPid),
    es_rate_in_pes: cdktf.stringToTerraform(struct!.esRateInPes),
    etv_platform_pid: cdktf.stringToTerraform(struct!.etvPlatformPid),
    etv_signal_pid: cdktf.stringToTerraform(struct!.etvSignalPid),
    fragment_time: cdktf.numberToTerraform(struct!.fragmentTime),
    klv: cdktf.stringToTerraform(struct!.klv),
    klv_data_pids: cdktf.stringToTerraform(struct!.klvDataPids),
    nielsen_id3_behavior: cdktf.stringToTerraform(struct!.nielsenId3Behavior),
    null_packet_bitrate: cdktf.numberToTerraform(struct!.nullPacketBitrate),
    pat_interval: cdktf.numberToTerraform(struct!.patInterval),
    pcr_control: cdktf.stringToTerraform(struct!.pcrControl),
    pcr_period: cdktf.numberToTerraform(struct!.pcrPeriod),
    pcr_pid: cdktf.stringToTerraform(struct!.pcrPid),
    pmt_interval: cdktf.numberToTerraform(struct!.pmtInterval),
    pmt_pid: cdktf.stringToTerraform(struct!.pmtPid),
    program_num: cdktf.numberToTerraform(struct!.programNum),
    rate_mode: cdktf.stringToTerraform(struct!.rateMode),
    scte27_pids: cdktf.stringToTerraform(struct!.scte27Pids),
    scte35_control: cdktf.stringToTerraform(struct!.scte35Control),
    scte35_pid: cdktf.stringToTerraform(struct!.scte35Pid),
    segmentation_markers: cdktf.stringToTerraform(struct!.segmentationMarkers),
    segmentation_style: cdktf.stringToTerraform(struct!.segmentationStyle),
    segmentation_time: cdktf.numberToTerraform(struct!.segmentationTime),
    timed_metadata_behavior: cdktf.stringToTerraform(struct!.timedMetadataBehavior),
    timed_metadata_pid: cdktf.stringToTerraform(struct!.timedMetadataPid),
    transport_stream_id: cdktf.numberToTerraform(struct!.transportStreamId),
    video_pid: cdktf.stringToTerraform(struct!.videoPid),
    dvb_nit_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToTerraform(struct!.dvbNitSettings),
    dvb_sdt_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToTerraform(struct!.dvbSdtSettings),
    dvb_tdt_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToTerraform(struct!.dvbTdtSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absentInputAudioBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.absentInputAudioBehavior = this._absentInputAudioBehavior;
    }
    if (this._arib !== undefined) {
      hasAnyValues = true;
      internalValueResult.arib = this._arib;
    }
    if (this._aribCaptionsPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.aribCaptionsPid = this._aribCaptionsPid;
    }
    if (this._aribCaptionsPidControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.aribCaptionsPidControl = this._aribCaptionsPidControl;
    }
    if (this._audioBufferModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioBufferModel = this._audioBufferModel;
    }
    if (this._audioFramesPerPes !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioFramesPerPes = this._audioFramesPerPes;
    }
    if (this._audioPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioPids = this._audioPids;
    }
    if (this._audioStreamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioStreamType = this._audioStreamType;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bufferModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferModel = this._bufferModel;
    }
    if (this._ccDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccDescriptor = this._ccDescriptor;
    }
    if (this._dvbSubPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbSubPids = this._dvbSubPids;
    }
    if (this._dvbTeletextPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbTeletextPid = this._dvbTeletextPid;
    }
    if (this._ebif !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebif = this._ebif;
    }
    if (this._ebpAudioInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpAudioInterval = this._ebpAudioInterval;
    }
    if (this._ebpLookaheadMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpLookaheadMs = this._ebpLookaheadMs;
    }
    if (this._ebpPlacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpPlacement = this._ebpPlacement;
    }
    if (this._ecmPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmPid = this._ecmPid;
    }
    if (this._esRateInPes !== undefined) {
      hasAnyValues = true;
      internalValueResult.esRateInPes = this._esRateInPes;
    }
    if (this._etvPlatformPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etvPlatformPid = this._etvPlatformPid;
    }
    if (this._etvSignalPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etvSignalPid = this._etvSignalPid;
    }
    if (this._fragmentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentTime = this._fragmentTime;
    }
    if (this._klv !== undefined) {
      hasAnyValues = true;
      internalValueResult.klv = this._klv;
    }
    if (this._klvDataPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.klvDataPids = this._klvDataPids;
    }
    if (this._nielsenId3Behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.nielsenId3Behavior = this._nielsenId3Behavior;
    }
    if (this._nullPacketBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullPacketBitrate = this._nullPacketBitrate;
    }
    if (this._patInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.patInterval = this._patInterval;
    }
    if (this._pcrControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrControl = this._pcrControl;
    }
    if (this._pcrPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrPeriod = this._pcrPeriod;
    }
    if (this._pcrPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrPid = this._pcrPid;
    }
    if (this._pmtInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtInterval = this._pmtInterval;
    }
    if (this._pmtPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtPid = this._pmtPid;
    }
    if (this._programNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.programNum = this._programNum;
    }
    if (this._rateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateMode = this._rateMode;
    }
    if (this._scte27Pids !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte27Pids = this._scte27Pids;
    }
    if (this._scte35Control !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Control = this._scte35Control;
    }
    if (this._scte35Pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Pid = this._scte35Pid;
    }
    if (this._segmentationMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationMarkers = this._segmentationMarkers;
    }
    if (this._segmentationStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationStyle = this._segmentationStyle;
    }
    if (this._segmentationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentationTime = this._segmentationTime;
    }
    if (this._timedMetadataBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataBehavior = this._timedMetadataBehavior;
    }
    if (this._timedMetadataPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataPid = this._timedMetadataPid;
    }
    if (this._transportStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamId = this._transportStreamId;
    }
    if (this._videoPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoPid = this._videoPid;
    }
    if (this._dvbNitSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbNitSettings = this._dvbNitSettings?.internalValue;
    }
    if (this._dvbSdtSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbSdtSettings = this._dvbSdtSettings?.internalValue;
    }
    if (this._dvbTdtSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbTdtSettings = this._dvbTdtSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absentInputAudioBehavior = undefined;
      this._arib = undefined;
      this._aribCaptionsPid = undefined;
      this._aribCaptionsPidControl = undefined;
      this._audioBufferModel = undefined;
      this._audioFramesPerPes = undefined;
      this._audioPids = undefined;
      this._audioStreamType = undefined;
      this._bitrate = undefined;
      this._bufferModel = undefined;
      this._ccDescriptor = undefined;
      this._dvbSubPids = undefined;
      this._dvbTeletextPid = undefined;
      this._ebif = undefined;
      this._ebpAudioInterval = undefined;
      this._ebpLookaheadMs = undefined;
      this._ebpPlacement = undefined;
      this._ecmPid = undefined;
      this._esRateInPes = undefined;
      this._etvPlatformPid = undefined;
      this._etvSignalPid = undefined;
      this._fragmentTime = undefined;
      this._klv = undefined;
      this._klvDataPids = undefined;
      this._nielsenId3Behavior = undefined;
      this._nullPacketBitrate = undefined;
      this._patInterval = undefined;
      this._pcrControl = undefined;
      this._pcrPeriod = undefined;
      this._pcrPid = undefined;
      this._pmtInterval = undefined;
      this._pmtPid = undefined;
      this._programNum = undefined;
      this._rateMode = undefined;
      this._scte27Pids = undefined;
      this._scte35Control = undefined;
      this._scte35Pid = undefined;
      this._segmentationMarkers = undefined;
      this._segmentationStyle = undefined;
      this._segmentationTime = undefined;
      this._timedMetadataBehavior = undefined;
      this._timedMetadataPid = undefined;
      this._transportStreamId = undefined;
      this._videoPid = undefined;
      this._dvbNitSettings.internalValue = undefined;
      this._dvbSdtSettings.internalValue = undefined;
      this._dvbTdtSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absentInputAudioBehavior = value.absentInputAudioBehavior;
      this._arib = value.arib;
      this._aribCaptionsPid = value.aribCaptionsPid;
      this._aribCaptionsPidControl = value.aribCaptionsPidControl;
      this._audioBufferModel = value.audioBufferModel;
      this._audioFramesPerPes = value.audioFramesPerPes;
      this._audioPids = value.audioPids;
      this._audioStreamType = value.audioStreamType;
      this._bitrate = value.bitrate;
      this._bufferModel = value.bufferModel;
      this._ccDescriptor = value.ccDescriptor;
      this._dvbSubPids = value.dvbSubPids;
      this._dvbTeletextPid = value.dvbTeletextPid;
      this._ebif = value.ebif;
      this._ebpAudioInterval = value.ebpAudioInterval;
      this._ebpLookaheadMs = value.ebpLookaheadMs;
      this._ebpPlacement = value.ebpPlacement;
      this._ecmPid = value.ecmPid;
      this._esRateInPes = value.esRateInPes;
      this._etvPlatformPid = value.etvPlatformPid;
      this._etvSignalPid = value.etvSignalPid;
      this._fragmentTime = value.fragmentTime;
      this._klv = value.klv;
      this._klvDataPids = value.klvDataPids;
      this._nielsenId3Behavior = value.nielsenId3Behavior;
      this._nullPacketBitrate = value.nullPacketBitrate;
      this._patInterval = value.patInterval;
      this._pcrControl = value.pcrControl;
      this._pcrPeriod = value.pcrPeriod;
      this._pcrPid = value.pcrPid;
      this._pmtInterval = value.pmtInterval;
      this._pmtPid = value.pmtPid;
      this._programNum = value.programNum;
      this._rateMode = value.rateMode;
      this._scte27Pids = value.scte27Pids;
      this._scte35Control = value.scte35Control;
      this._scte35Pid = value.scte35Pid;
      this._segmentationMarkers = value.segmentationMarkers;
      this._segmentationStyle = value.segmentationStyle;
      this._segmentationTime = value.segmentationTime;
      this._timedMetadataBehavior = value.timedMetadataBehavior;
      this._timedMetadataPid = value.timedMetadataPid;
      this._transportStreamId = value.transportStreamId;
      this._videoPid = value.videoPid;
      this._dvbNitSettings.internalValue = value.dvbNitSettings;
      this._dvbSdtSettings.internalValue = value.dvbSdtSettings;
      this._dvbTdtSettings.internalValue = value.dvbTdtSettings;
    }
  }

  // absent_input_audio_behavior - computed: true, optional: true, required: false
  private _absentInputAudioBehavior?: string; 
  public get absentInputAudioBehavior() {
    return this.getStringAttribute('absent_input_audio_behavior');
  }
  public set absentInputAudioBehavior(value: string) {
    this._absentInputAudioBehavior = value;
  }
  public resetAbsentInputAudioBehavior() {
    this._absentInputAudioBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absentInputAudioBehaviorInput() {
    return this._absentInputAudioBehavior;
  }

  // arib - computed: false, optional: true, required: false
  private _arib?: string; 
  public get arib() {
    return this.getStringAttribute('arib');
  }
  public set arib(value: string) {
    this._arib = value;
  }
  public resetArib() {
    this._arib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aribInput() {
    return this._arib;
  }

  // arib_captions_pid - computed: true, optional: true, required: false
  private _aribCaptionsPid?: string; 
  public get aribCaptionsPid() {
    return this.getStringAttribute('arib_captions_pid');
  }
  public set aribCaptionsPid(value: string) {
    this._aribCaptionsPid = value;
  }
  public resetAribCaptionsPid() {
    this._aribCaptionsPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aribCaptionsPidInput() {
    return this._aribCaptionsPid;
  }

  // arib_captions_pid_control - computed: false, optional: true, required: false
  private _aribCaptionsPidControl?: string; 
  public get aribCaptionsPidControl() {
    return this.getStringAttribute('arib_captions_pid_control');
  }
  public set aribCaptionsPidControl(value: string) {
    this._aribCaptionsPidControl = value;
  }
  public resetAribCaptionsPidControl() {
    this._aribCaptionsPidControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aribCaptionsPidControlInput() {
    return this._aribCaptionsPidControl;
  }

  // audio_buffer_model - computed: false, optional: true, required: false
  private _audioBufferModel?: string; 
  public get audioBufferModel() {
    return this.getStringAttribute('audio_buffer_model');
  }
  public set audioBufferModel(value: string) {
    this._audioBufferModel = value;
  }
  public resetAudioBufferModel() {
    this._audioBufferModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioBufferModelInput() {
    return this._audioBufferModel;
  }

  // audio_frames_per_pes - computed: false, optional: true, required: false
  private _audioFramesPerPes?: number; 
  public get audioFramesPerPes() {
    return this.getNumberAttribute('audio_frames_per_pes');
  }
  public set audioFramesPerPes(value: number) {
    this._audioFramesPerPes = value;
  }
  public resetAudioFramesPerPes() {
    this._audioFramesPerPes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioFramesPerPesInput() {
    return this._audioFramesPerPes;
  }

  // audio_pids - computed: true, optional: true, required: false
  private _audioPids?: string; 
  public get audioPids() {
    return this.getStringAttribute('audio_pids');
  }
  public set audioPids(value: string) {
    this._audioPids = value;
  }
  public resetAudioPids() {
    this._audioPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioPidsInput() {
    return this._audioPids;
  }

  // audio_stream_type - computed: false, optional: true, required: false
  private _audioStreamType?: string; 
  public get audioStreamType() {
    return this.getStringAttribute('audio_stream_type');
  }
  public set audioStreamType(value: string) {
    this._audioStreamType = value;
  }
  public resetAudioStreamType() {
    this._audioStreamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioStreamTypeInput() {
    return this._audioStreamType;
  }

  // bitrate - computed: false, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // buffer_model - computed: false, optional: true, required: false
  private _bufferModel?: string; 
  public get bufferModel() {
    return this.getStringAttribute('buffer_model');
  }
  public set bufferModel(value: string) {
    this._bufferModel = value;
  }
  public resetBufferModel() {
    this._bufferModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferModelInput() {
    return this._bufferModel;
  }

  // cc_descriptor - computed: false, optional: true, required: false
  private _ccDescriptor?: string; 
  public get ccDescriptor() {
    return this.getStringAttribute('cc_descriptor');
  }
  public set ccDescriptor(value: string) {
    this._ccDescriptor = value;
  }
  public resetCcDescriptor() {
    this._ccDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccDescriptorInput() {
    return this._ccDescriptor;
  }

  // dvb_sub_pids - computed: true, optional: true, required: false
  private _dvbSubPids?: string; 
  public get dvbSubPids() {
    return this.getStringAttribute('dvb_sub_pids');
  }
  public set dvbSubPids(value: string) {
    this._dvbSubPids = value;
  }
  public resetDvbSubPids() {
    this._dvbSubPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbSubPidsInput() {
    return this._dvbSubPids;
  }

  // dvb_teletext_pid - computed: true, optional: true, required: false
  private _dvbTeletextPid?: string; 
  public get dvbTeletextPid() {
    return this.getStringAttribute('dvb_teletext_pid');
  }
  public set dvbTeletextPid(value: string) {
    this._dvbTeletextPid = value;
  }
  public resetDvbTeletextPid() {
    this._dvbTeletextPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbTeletextPidInput() {
    return this._dvbTeletextPid;
  }

  // ebif - computed: false, optional: true, required: false
  private _ebif?: string; 
  public get ebif() {
    return this.getStringAttribute('ebif');
  }
  public set ebif(value: string) {
    this._ebif = value;
  }
  public resetEbif() {
    this._ebif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebifInput() {
    return this._ebif;
  }

  // ebp_audio_interval - computed: false, optional: true, required: false
  private _ebpAudioInterval?: string; 
  public get ebpAudioInterval() {
    return this.getStringAttribute('ebp_audio_interval');
  }
  public set ebpAudioInterval(value: string) {
    this._ebpAudioInterval = value;
  }
  public resetEbpAudioInterval() {
    this._ebpAudioInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpAudioIntervalInput() {
    return this._ebpAudioInterval;
  }

  // ebp_lookahead_ms - computed: false, optional: true, required: false
  private _ebpLookaheadMs?: number; 
  public get ebpLookaheadMs() {
    return this.getNumberAttribute('ebp_lookahead_ms');
  }
  public set ebpLookaheadMs(value: number) {
    this._ebpLookaheadMs = value;
  }
  public resetEbpLookaheadMs() {
    this._ebpLookaheadMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpLookaheadMsInput() {
    return this._ebpLookaheadMs;
  }

  // ebp_placement - computed: false, optional: true, required: false
  private _ebpPlacement?: string; 
  public get ebpPlacement() {
    return this.getStringAttribute('ebp_placement');
  }
  public set ebpPlacement(value: string) {
    this._ebpPlacement = value;
  }
  public resetEbpPlacement() {
    this._ebpPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpPlacementInput() {
    return this._ebpPlacement;
  }

  // ecm_pid - computed: false, optional: true, required: false
  private _ecmPid?: string; 
  public get ecmPid() {
    return this.getStringAttribute('ecm_pid');
  }
  public set ecmPid(value: string) {
    this._ecmPid = value;
  }
  public resetEcmPid() {
    this._ecmPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmPidInput() {
    return this._ecmPid;
  }

  // es_rate_in_pes - computed: false, optional: true, required: false
  private _esRateInPes?: string; 
  public get esRateInPes() {
    return this.getStringAttribute('es_rate_in_pes');
  }
  public set esRateInPes(value: string) {
    this._esRateInPes = value;
  }
  public resetEsRateInPes() {
    this._esRateInPes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRateInPesInput() {
    return this._esRateInPes;
  }

  // etv_platform_pid - computed: true, optional: true, required: false
  private _etvPlatformPid?: string; 
  public get etvPlatformPid() {
    return this.getStringAttribute('etv_platform_pid');
  }
  public set etvPlatformPid(value: string) {
    this._etvPlatformPid = value;
  }
  public resetEtvPlatformPid() {
    this._etvPlatformPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etvPlatformPidInput() {
    return this._etvPlatformPid;
  }

  // etv_signal_pid - computed: true, optional: true, required: false
  private _etvSignalPid?: string; 
  public get etvSignalPid() {
    return this.getStringAttribute('etv_signal_pid');
  }
  public set etvSignalPid(value: string) {
    this._etvSignalPid = value;
  }
  public resetEtvSignalPid() {
    this._etvSignalPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etvSignalPidInput() {
    return this._etvSignalPid;
  }

  // fragment_time - computed: false, optional: true, required: false
  private _fragmentTime?: number; 
  public get fragmentTime() {
    return this.getNumberAttribute('fragment_time');
  }
  public set fragmentTime(value: number) {
    this._fragmentTime = value;
  }
  public resetFragmentTime() {
    this._fragmentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentTimeInput() {
    return this._fragmentTime;
  }

  // klv - computed: false, optional: true, required: false
  private _klv?: string; 
  public get klv() {
    return this.getStringAttribute('klv');
  }
  public set klv(value: string) {
    this._klv = value;
  }
  public resetKlv() {
    this._klv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get klvInput() {
    return this._klv;
  }

  // klv_data_pids - computed: true, optional: true, required: false
  private _klvDataPids?: string; 
  public get klvDataPids() {
    return this.getStringAttribute('klv_data_pids');
  }
  public set klvDataPids(value: string) {
    this._klvDataPids = value;
  }
  public resetKlvDataPids() {
    this._klvDataPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get klvDataPidsInput() {
    return this._klvDataPids;
  }

  // nielsen_id3_behavior - computed: false, optional: true, required: false
  private _nielsenId3Behavior?: string; 
  public get nielsenId3Behavior() {
    return this.getStringAttribute('nielsen_id3_behavior');
  }
  public set nielsenId3Behavior(value: string) {
    this._nielsenId3Behavior = value;
  }
  public resetNielsenId3Behavior() {
    this._nielsenId3Behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nielsenId3BehaviorInput() {
    return this._nielsenId3Behavior;
  }

  // null_packet_bitrate - computed: false, optional: true, required: false
  private _nullPacketBitrate?: number; 
  public get nullPacketBitrate() {
    return this.getNumberAttribute('null_packet_bitrate');
  }
  public set nullPacketBitrate(value: number) {
    this._nullPacketBitrate = value;
  }
  public resetNullPacketBitrate() {
    this._nullPacketBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullPacketBitrateInput() {
    return this._nullPacketBitrate;
  }

  // pat_interval - computed: false, optional: true, required: false
  private _patInterval?: number; 
  public get patInterval() {
    return this.getNumberAttribute('pat_interval');
  }
  public set patInterval(value: number) {
    this._patInterval = value;
  }
  public resetPatInterval() {
    this._patInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patIntervalInput() {
    return this._patInterval;
  }

  // pcr_control - computed: false, optional: true, required: false
  private _pcrControl?: string; 
  public get pcrControl() {
    return this.getStringAttribute('pcr_control');
  }
  public set pcrControl(value: string) {
    this._pcrControl = value;
  }
  public resetPcrControl() {
    this._pcrControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrControlInput() {
    return this._pcrControl;
  }

  // pcr_period - computed: false, optional: true, required: false
  private _pcrPeriod?: number; 
  public get pcrPeriod() {
    return this.getNumberAttribute('pcr_period');
  }
  public set pcrPeriod(value: number) {
    this._pcrPeriod = value;
  }
  public resetPcrPeriod() {
    this._pcrPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrPeriodInput() {
    return this._pcrPeriod;
  }

  // pcr_pid - computed: false, optional: true, required: false
  private _pcrPid?: string; 
  public get pcrPid() {
    return this.getStringAttribute('pcr_pid');
  }
  public set pcrPid(value: string) {
    this._pcrPid = value;
  }
  public resetPcrPid() {
    this._pcrPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrPidInput() {
    return this._pcrPid;
  }

  // pmt_interval - computed: false, optional: true, required: false
  private _pmtInterval?: number; 
  public get pmtInterval() {
    return this.getNumberAttribute('pmt_interval');
  }
  public set pmtInterval(value: number) {
    this._pmtInterval = value;
  }
  public resetPmtInterval() {
    this._pmtInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtIntervalInput() {
    return this._pmtInterval;
  }

  // pmt_pid - computed: true, optional: true, required: false
  private _pmtPid?: string; 
  public get pmtPid() {
    return this.getStringAttribute('pmt_pid');
  }
  public set pmtPid(value: string) {
    this._pmtPid = value;
  }
  public resetPmtPid() {
    this._pmtPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtPidInput() {
    return this._pmtPid;
  }

  // program_num - computed: false, optional: true, required: false
  private _programNum?: number; 
  public get programNum() {
    return this.getNumberAttribute('program_num');
  }
  public set programNum(value: number) {
    this._programNum = value;
  }
  public resetProgramNum() {
    this._programNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumInput() {
    return this._programNum;
  }

  // rate_mode - computed: false, optional: true, required: false
  private _rateMode?: string; 
  public get rateMode() {
    return this.getStringAttribute('rate_mode');
  }
  public set rateMode(value: string) {
    this._rateMode = value;
  }
  public resetRateMode() {
    this._rateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateModeInput() {
    return this._rateMode;
  }

  // scte27_pids - computed: true, optional: true, required: false
  private _scte27Pids?: string; 
  public get scte27Pids() {
    return this.getStringAttribute('scte27_pids');
  }
  public set scte27Pids(value: string) {
    this._scte27Pids = value;
  }
  public resetScte27Pids() {
    this._scte27Pids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte27PidsInput() {
    return this._scte27Pids;
  }

  // scte35_control - computed: false, optional: true, required: false
  private _scte35Control?: string; 
  public get scte35Control() {
    return this.getStringAttribute('scte35_control');
  }
  public set scte35Control(value: string) {
    this._scte35Control = value;
  }
  public resetScte35Control() {
    this._scte35Control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35ControlInput() {
    return this._scte35Control;
  }

  // scte35_pid - computed: true, optional: true, required: false
  private _scte35Pid?: string; 
  public get scte35Pid() {
    return this.getStringAttribute('scte35_pid');
  }
  public set scte35Pid(value: string) {
    this._scte35Pid = value;
  }
  public resetScte35Pid() {
    this._scte35Pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35PidInput() {
    return this._scte35Pid;
  }

  // segmentation_markers - computed: false, optional: true, required: false
  private _segmentationMarkers?: string; 
  public get segmentationMarkers() {
    return this.getStringAttribute('segmentation_markers');
  }
  public set segmentationMarkers(value: string) {
    this._segmentationMarkers = value;
  }
  public resetSegmentationMarkers() {
    this._segmentationMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationMarkersInput() {
    return this._segmentationMarkers;
  }

  // segmentation_style - computed: false, optional: true, required: false
  private _segmentationStyle?: string; 
  public get segmentationStyle() {
    return this.getStringAttribute('segmentation_style');
  }
  public set segmentationStyle(value: string) {
    this._segmentationStyle = value;
  }
  public resetSegmentationStyle() {
    this._segmentationStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationStyleInput() {
    return this._segmentationStyle;
  }

  // segmentation_time - computed: false, optional: true, required: false
  private _segmentationTime?: number; 
  public get segmentationTime() {
    return this.getNumberAttribute('segmentation_time');
  }
  public set segmentationTime(value: number) {
    this._segmentationTime = value;
  }
  public resetSegmentationTime() {
    this._segmentationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationTimeInput() {
    return this._segmentationTime;
  }

  // timed_metadata_behavior - computed: false, optional: true, required: false
  private _timedMetadataBehavior?: string; 
  public get timedMetadataBehavior() {
    return this.getStringAttribute('timed_metadata_behavior');
  }
  public set timedMetadataBehavior(value: string) {
    this._timedMetadataBehavior = value;
  }
  public resetTimedMetadataBehavior() {
    this._timedMetadataBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataBehaviorInput() {
    return this._timedMetadataBehavior;
  }

  // timed_metadata_pid - computed: true, optional: true, required: false
  private _timedMetadataPid?: string; 
  public get timedMetadataPid() {
    return this.getStringAttribute('timed_metadata_pid');
  }
  public set timedMetadataPid(value: string) {
    this._timedMetadataPid = value;
  }
  public resetTimedMetadataPid() {
    this._timedMetadataPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataPidInput() {
    return this._timedMetadataPid;
  }

  // transport_stream_id - computed: false, optional: true, required: false
  private _transportStreamId?: number; 
  public get transportStreamId() {
    return this.getNumberAttribute('transport_stream_id');
  }
  public set transportStreamId(value: number) {
    this._transportStreamId = value;
  }
  public resetTransportStreamId() {
    this._transportStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamIdInput() {
    return this._transportStreamId;
  }

  // video_pid - computed: true, optional: true, required: false
  private _videoPid?: string; 
  public get videoPid() {
    return this.getStringAttribute('video_pid');
  }
  public set videoPid(value: string) {
    this._videoPid = value;
  }
  public resetVideoPid() {
    this._videoPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoPidInput() {
    return this._videoPid;
  }

  // dvb_nit_settings - computed: false, optional: true, required: false
  private _dvbNitSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference(this, "dvb_nit_settings");
  public get dvbNitSettings() {
    return this._dvbNitSettings;
  }
  public putDvbNitSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings) {
    this._dvbNitSettings.internalValue = value;
  }
  public resetDvbNitSettings() {
    this._dvbNitSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbNitSettingsInput() {
    return this._dvbNitSettings.internalValue;
  }

  // dvb_sdt_settings - computed: false, optional: true, required: false
  private _dvbSdtSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference(this, "dvb_sdt_settings");
  public get dvbSdtSettings() {
    return this._dvbSdtSettings;
  }
  public putDvbSdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings) {
    this._dvbSdtSettings.internalValue = value;
  }
  public resetDvbSdtSettings() {
    this._dvbSdtSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbSdtSettingsInput() {
    return this._dvbSdtSettings.internalValue;
  }

  // dvb_tdt_settings - computed: false, optional: true, required: false
  private _dvbTdtSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference(this, "dvb_tdt_settings");
  public get dvbTdtSettings() {
    return this._dvbTdtSettings;
  }
  public putDvbTdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings) {
    this._dvbTdtSettings.internalValue = value;
  }
  public resetDvbTdtSettings() {
    this._dvbTdtSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbTdtSettingsInput() {
    return this._dvbTdtSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings {
  /**
  * m2ts_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#m2ts_settings MedialiveChannel#m2ts_settings}
  */
  readonly m2TsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    m2ts_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsToTerraform(struct!.m2TsSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._m2TsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.m2TsSettings = this._m2TsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._m2TsSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._m2TsSettings.internalValue = value.m2TsSettings;
    }
  }

  // m2ts_settings - computed: false, optional: true, required: false
  private _m2TsSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsOutputReference(this, "m2ts_settings");
  public get m2TsSettings() {
    return this._m2TsSettings;
  }
  public putM2TsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings) {
    this._m2TsSettings.internalValue = value;
  }
  public resetM2TsSettings() {
    this._m2TsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m2TsSettingsInput() {
    return this._m2TsSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
  */
  readonly destinationRefId: string;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ref_id: cdktf.stringToTerraform(struct!.destinationRefId),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRefId = this._destinationRefId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRefId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRefId = value.destinationRefId;
    }
  }

  // destination_ref_id - computed: false, optional: false, required: true
  private _destinationRefId?: string; 
  public get destinationRefId() {
    return this.getStringAttribute('destination_ref_id');
  }
  public set destinationRefId(value: string) {
    this._destinationRefId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRefIdInput() {
    return this._destinationRefId;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#column_depth MedialiveChannel#column_depth}
  */
  readonly columnDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#include_fec MedialiveChannel#include_fec}
  */
  readonly includeFec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#row_length MedialiveChannel#row_length}
  */
  readonly rowLength?: number;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_depth: cdktf.numberToTerraform(struct!.columnDepth),
    include_fec: cdktf.stringToTerraform(struct!.includeFec),
    row_length: cdktf.numberToTerraform(struct!.rowLength),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDepth = this._columnDepth;
    }
    if (this._includeFec !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFec = this._includeFec;
    }
    if (this._rowLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowLength = this._rowLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnDepth = undefined;
      this._includeFec = undefined;
      this._rowLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnDepth = value.columnDepth;
      this._includeFec = value.includeFec;
      this._rowLength = value.rowLength;
    }
  }

  // column_depth - computed: true, optional: true, required: false
  private _columnDepth?: number; 
  public get columnDepth() {
    return this.getNumberAttribute('column_depth');
  }
  public set columnDepth(value: number) {
    this._columnDepth = value;
  }
  public resetColumnDepth() {
    this._columnDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDepthInput() {
    return this._columnDepth;
  }

  // include_fec - computed: true, optional: true, required: false
  private _includeFec?: string; 
  public get includeFec() {
    return this.getStringAttribute('include_fec');
  }
  public set includeFec(value: string) {
    this._includeFec = value;
  }
  public resetIncludeFec() {
    this._includeFec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFecInput() {
    return this._includeFec;
  }

  // row_length - computed: true, optional: true, required: false
  private _rowLength?: number; 
  public get rowLength() {
    return this.getNumberAttribute('row_length');
  }
  public set rowLength(value: number) {
    this._rowLength = value;
  }
  public resetRowLength() {
    this._rowLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowLengthInput() {
    return this._rowLength;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#buffer_msec MedialiveChannel#buffer_msec}
  */
  readonly bufferMsec?: number;
  /**
  * container_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#container_settings MedialiveChannel#container_settings}
  */
  readonly containerSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#destination MedialiveChannel#destination}
  */
  readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination;
  /**
  * fec_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#fec_output_settings MedialiveChannel#fec_output_settings}
  */
  readonly fecOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_msec: cdktf.numberToTerraform(struct!.bufferMsec),
    container_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsToTerraform(struct!.containerSettings),
    destination: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationToTerraform(struct!.destination),
    fec_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsToTerraform(struct!.fecOutputSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferMsec = this._bufferMsec;
    }
    if (this._containerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSettings = this._containerSettings?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._fecOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fecOutputSettings = this._fecOutputSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferMsec = undefined;
      this._containerSettings.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._fecOutputSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferMsec = value.bufferMsec;
      this._containerSettings.internalValue = value.containerSettings;
      this._destination.internalValue = value.destination;
      this._fecOutputSettings.internalValue = value.fecOutputSettings;
    }
  }

  // buffer_msec - computed: true, optional: true, required: false
  private _bufferMsec?: number; 
  public get bufferMsec() {
    return this.getNumberAttribute('buffer_msec');
  }
  public set bufferMsec(value: number) {
    this._bufferMsec = value;
  }
  public resetBufferMsec() {
    this._bufferMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferMsecInput() {
    return this._bufferMsec;
  }

  // container_settings - computed: false, optional: false, required: true
  private _containerSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsOutputReference(this, "container_settings");
  public get containerSettings() {
    return this._containerSettings;
  }
  public putContainerSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings) {
    this._containerSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSettingsInput() {
    return this._containerSettings.internalValue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // fec_output_settings - computed: false, optional: true, required: false
  private _fecOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsOutputReference(this, "fec_output_settings");
  public get fecOutputSettings() {
    return this._fecOutputSettings;
  }
  public putFecOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings) {
    this._fecOutputSettings.internalValue = value;
  }
  public resetFecOutputSettings() {
    this._fecOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecOutputSettingsInput() {
    return this._fecOutputSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings {
  /**
  * archive_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#archive_output_settings MedialiveChannel#archive_output_settings}
  */
  readonly archiveOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings;
  /**
  * frame_capture_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#frame_capture_output_settings MedialiveChannel#frame_capture_output_settings}
  */
  readonly frameCaptureOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings;
  /**
  * hls_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_output_settings MedialiveChannel#hls_output_settings}
  */
  readonly hlsOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings;
  /**
  * media_package_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#media_package_output_settings MedialiveChannel#media_package_output_settings}
  */
  readonly mediaPackageOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings;
  /**
  * ms_smooth_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ms_smooth_output_settings MedialiveChannel#ms_smooth_output_settings}
  */
  readonly msSmoothOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings;
  /**
  * multiplex_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#multiplex_output_settings MedialiveChannel#multiplex_output_settings}
  */
  readonly multiplexOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings;
  /**
  * rtmp_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rtmp_output_settings MedialiveChannel#rtmp_output_settings}
  */
  readonly rtmpOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings;
  /**
  * udp_output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#udp_output_settings MedialiveChannel#udp_output_settings}
  */
  readonly udpOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsToTerraform(struct!.archiveOutputSettings),
    frame_capture_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsToTerraform(struct!.frameCaptureOutputSettings),
    hls_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsToTerraform(struct!.hlsOutputSettings),
    media_package_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsToTerraform(struct!.mediaPackageOutputSettings),
    ms_smooth_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsToTerraform(struct!.msSmoothOutputSettings),
    multiplex_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsToTerraform(struct!.multiplexOutputSettings),
    rtmp_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsToTerraform(struct!.rtmpOutputSettings),
    udp_output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsToTerraform(struct!.udpOutputSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveOutputSettings = this._archiveOutputSettings?.internalValue;
    }
    if (this._frameCaptureOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameCaptureOutputSettings = this._frameCaptureOutputSettings?.internalValue;
    }
    if (this._hlsOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsOutputSettings = this._hlsOutputSettings?.internalValue;
    }
    if (this._mediaPackageOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaPackageOutputSettings = this._mediaPackageOutputSettings?.internalValue;
    }
    if (this._msSmoothOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msSmoothOutputSettings = this._msSmoothOutputSettings?.internalValue;
    }
    if (this._multiplexOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplexOutputSettings = this._multiplexOutputSettings?.internalValue;
    }
    if (this._rtmpOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtmpOutputSettings = this._rtmpOutputSettings?.internalValue;
    }
    if (this._udpOutputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpOutputSettings = this._udpOutputSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveOutputSettings.internalValue = undefined;
      this._frameCaptureOutputSettings.internalValue = undefined;
      this._hlsOutputSettings.internalValue = undefined;
      this._mediaPackageOutputSettings.internalValue = undefined;
      this._msSmoothOutputSettings.internalValue = undefined;
      this._multiplexOutputSettings.internalValue = undefined;
      this._rtmpOutputSettings.internalValue = undefined;
      this._udpOutputSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveOutputSettings.internalValue = value.archiveOutputSettings;
      this._frameCaptureOutputSettings.internalValue = value.frameCaptureOutputSettings;
      this._hlsOutputSettings.internalValue = value.hlsOutputSettings;
      this._mediaPackageOutputSettings.internalValue = value.mediaPackageOutputSettings;
      this._msSmoothOutputSettings.internalValue = value.msSmoothOutputSettings;
      this._multiplexOutputSettings.internalValue = value.multiplexOutputSettings;
      this._rtmpOutputSettings.internalValue = value.rtmpOutputSettings;
      this._udpOutputSettings.internalValue = value.udpOutputSettings;
    }
  }

  // archive_output_settings - computed: false, optional: true, required: false
  private _archiveOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsOutputReference(this, "archive_output_settings");
  public get archiveOutputSettings() {
    return this._archiveOutputSettings;
  }
  public putArchiveOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings) {
    this._archiveOutputSettings.internalValue = value;
  }
  public resetArchiveOutputSettings() {
    this._archiveOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOutputSettingsInput() {
    return this._archiveOutputSettings.internalValue;
  }

  // frame_capture_output_settings - computed: false, optional: true, required: false
  private _frameCaptureOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsOutputReference(this, "frame_capture_output_settings");
  public get frameCaptureOutputSettings() {
    return this._frameCaptureOutputSettings;
  }
  public putFrameCaptureOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings) {
    this._frameCaptureOutputSettings.internalValue = value;
  }
  public resetFrameCaptureOutputSettings() {
    this._frameCaptureOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameCaptureOutputSettingsInput() {
    return this._frameCaptureOutputSettings.internalValue;
  }

  // hls_output_settings - computed: false, optional: true, required: false
  private _hlsOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsOutputReference(this, "hls_output_settings");
  public get hlsOutputSettings() {
    return this._hlsOutputSettings;
  }
  public putHlsOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings) {
    this._hlsOutputSettings.internalValue = value;
  }
  public resetHlsOutputSettings() {
    this._hlsOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsOutputSettingsInput() {
    return this._hlsOutputSettings.internalValue;
  }

  // media_package_output_settings - computed: false, optional: true, required: false
  private _mediaPackageOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsOutputReference(this, "media_package_output_settings");
  public get mediaPackageOutputSettings() {
    return this._mediaPackageOutputSettings;
  }
  public putMediaPackageOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings) {
    this._mediaPackageOutputSettings.internalValue = value;
  }
  public resetMediaPackageOutputSettings() {
    this._mediaPackageOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaPackageOutputSettingsInput() {
    return this._mediaPackageOutputSettings.internalValue;
  }

  // ms_smooth_output_settings - computed: false, optional: true, required: false
  private _msSmoothOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsOutputReference(this, "ms_smooth_output_settings");
  public get msSmoothOutputSettings() {
    return this._msSmoothOutputSettings;
  }
  public putMsSmoothOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings) {
    this._msSmoothOutputSettings.internalValue = value;
  }
  public resetMsSmoothOutputSettings() {
    this._msSmoothOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msSmoothOutputSettingsInput() {
    return this._msSmoothOutputSettings.internalValue;
  }

  // multiplex_output_settings - computed: false, optional: true, required: false
  private _multiplexOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsOutputReference(this, "multiplex_output_settings");
  public get multiplexOutputSettings() {
    return this._multiplexOutputSettings;
  }
  public putMultiplexOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings) {
    this._multiplexOutputSettings.internalValue = value;
  }
  public resetMultiplexOutputSettings() {
    this._multiplexOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexOutputSettingsInput() {
    return this._multiplexOutputSettings.internalValue;
  }

  // rtmp_output_settings - computed: false, optional: true, required: false
  private _rtmpOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsOutputReference(this, "rtmp_output_settings");
  public get rtmpOutputSettings() {
    return this._rtmpOutputSettings;
  }
  public putRtmpOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings) {
    this._rtmpOutputSettings.internalValue = value;
  }
  public resetRtmpOutputSettings() {
    this._rtmpOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmpOutputSettingsInput() {
    return this._rtmpOutputSettings.internalValue;
  }

  // udp_output_settings - computed: false, optional: true, required: false
  private _udpOutputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsOutputReference(this, "udp_output_settings");
  public get udpOutputSettings() {
    return this._udpOutputSettings;
  }
  public putUdpOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings) {
    this._udpOutputSettings.internalValue = value;
  }
  public resetUdpOutputSettings() {
    this._udpOutputSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpOutputSettingsInput() {
    return this._udpOutputSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_description_names MedialiveChannel#audio_description_names}
  */
  readonly audioDescriptionNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#caption_description_names MedialiveChannel#caption_description_names}
  */
  readonly captionDescriptionNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_name MedialiveChannel#output_name}
  */
  readonly outputName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_description_name MedialiveChannel#video_description_name}
  */
  readonly videoDescriptionName?: string;
  /**
  * output_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_settings MedialiveChannel#output_settings}
  */
  readonly outputSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings;
}

export function medialiveChannelEncoderSettingsOutputGroupsOutputsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_description_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audioDescriptionNames),
    caption_description_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.captionDescriptionNames),
    output_name: cdktf.stringToTerraform(struct!.outputName),
    video_description_name: cdktf.stringToTerraform(struct!.videoDescriptionName),
    output_settings: medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsToTerraform(struct!.outputSettings),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioDescriptionNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioDescriptionNames = this._audioDescriptionNames;
    }
    if (this._captionDescriptionNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionDescriptionNames = this._captionDescriptionNames;
    }
    if (this._outputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputName = this._outputName;
    }
    if (this._videoDescriptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoDescriptionName = this._videoDescriptionName;
    }
    if (this._outputSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSettings = this._outputSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioDescriptionNames = undefined;
      this._captionDescriptionNames = undefined;
      this._outputName = undefined;
      this._videoDescriptionName = undefined;
      this._outputSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioDescriptionNames = value.audioDescriptionNames;
      this._captionDescriptionNames = value.captionDescriptionNames;
      this._outputName = value.outputName;
      this._videoDescriptionName = value.videoDescriptionName;
      this._outputSettings.internalValue = value.outputSettings;
    }
  }

  // audio_description_names - computed: false, optional: true, required: false
  private _audioDescriptionNames?: string[]; 
  public get audioDescriptionNames() {
    return cdktf.Fn.tolist(this.getListAttribute('audio_description_names'));
  }
  public set audioDescriptionNames(value: string[]) {
    this._audioDescriptionNames = value;
  }
  public resetAudioDescriptionNames() {
    this._audioDescriptionNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioDescriptionNamesInput() {
    return this._audioDescriptionNames;
  }

  // caption_description_names - computed: true, optional: true, required: false
  private _captionDescriptionNames?: string[]; 
  public get captionDescriptionNames() {
    return cdktf.Fn.tolist(this.getListAttribute('caption_description_names'));
  }
  public set captionDescriptionNames(value: string[]) {
    this._captionDescriptionNames = value;
  }
  public resetCaptionDescriptionNames() {
    this._captionDescriptionNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionDescriptionNamesInput() {
    return this._captionDescriptionNames;
  }

  // output_name - computed: false, optional: true, required: false
  private _outputName?: string; 
  public get outputName() {
    return this.getStringAttribute('output_name');
  }
  public set outputName(value: string) {
    this._outputName = value;
  }
  public resetOutputName() {
    this._outputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNameInput() {
    return this._outputName;
  }

  // video_description_name - computed: false, optional: true, required: false
  private _videoDescriptionName?: string; 
  public get videoDescriptionName() {
    return this.getStringAttribute('video_description_name');
  }
  public set videoDescriptionName(value: string) {
    this._videoDescriptionName = value;
  }
  public resetVideoDescriptionName() {
    this._videoDescriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoDescriptionNameInput() {
    return this._videoDescriptionName;
  }

  // output_settings - computed: false, optional: false, required: true
  private _outputSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsOutputReference(this, "output_settings");
  public get outputSettings() {
    return this._outputSettings;
  }
  public putOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings) {
    this._outputSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSettingsInput() {
    return this._outputSettings.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsOutputGroupsOutputs[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputReference {
    return new MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsOutputGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name MedialiveChannel#name}
  */
  readonly name?: string;
  /**
  * output_group_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_group_settings MedialiveChannel#output_group_settings}
  */
  readonly outputGroupSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings;
  /**
  * outputs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#outputs MedialiveChannel#outputs}
  */
  readonly outputs: MedialiveChannelEncoderSettingsOutputGroupsOutputs[] | cdktf.IResolvable;
}

export function medialiveChannelEncoderSettingsOutputGroupsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    output_group_settings: medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsToTerraform(struct!.outputGroupSettings),
    outputs: cdktf.listMapper(medialiveChannelEncoderSettingsOutputGroupsOutputsToTerraform, true)(struct!.outputs),
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsOutputGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputGroupSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputGroupSettings = this._outputGroupSettings?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsOutputGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._outputGroupSettings.internalValue = undefined;
      this._outputs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._outputGroupSettings.internalValue = value.outputGroupSettings;
      this._outputs.internalValue = value.outputs;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // output_group_settings - computed: false, optional: false, required: true
  private _outputGroupSettings = new MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsOutputReference(this, "output_group_settings");
  public get outputGroupSettings() {
    return this._outputGroupSettings;
  }
  public putOutputGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings) {
    this._outputGroupSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputGroupSettingsInput() {
    return this._outputGroupSettings.internalValue;
  }

  // outputs - computed: false, optional: false, required: true
  private _outputs = new MedialiveChannelEncoderSettingsOutputGroupsOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: MedialiveChannelEncoderSettingsOutputGroupsOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsOutputGroupsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsOutputGroups[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputReference {
    return new MedialiveChannelEncoderSettingsOutputGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettingsTimecodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#source MedialiveChannel#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#sync_threshold MedialiveChannel#sync_threshold}
  */
  readonly syncThreshold?: number;
}

export function medialiveChannelEncoderSettingsTimecodeConfigToTerraform(struct?: MedialiveChannelEncoderSettingsTimecodeConfigOutputReference | MedialiveChannelEncoderSettingsTimecodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    sync_threshold: cdktf.numberToTerraform(struct!.syncThreshold),
  }
}

export class MedialiveChannelEncoderSettingsTimecodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsTimecodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._syncThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncThreshold = this._syncThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsTimecodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
      this._syncThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
      this._syncThreshold = value.syncThreshold;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sync_threshold - computed: true, optional: true, required: false
  private _syncThreshold?: number; 
  public get syncThreshold() {
    return this.getNumberAttribute('sync_threshold');
  }
  public set syncThreshold(value: number) {
    this._syncThreshold = value;
  }
  public resetSyncThreshold() {
    this._syncThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncThresholdInput() {
    return this._syncThreshold;
  }
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#capture_interval MedialiveChannel#capture_interval}
  */
  readonly captureInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#capture_interval_units MedialiveChannel#capture_interval_units}
  */
  readonly captureIntervalUnits?: string;
}

export function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_interval: cdktf.numberToTerraform(struct!.captureInterval),
    capture_interval_units: cdktf.stringToTerraform(struct!.captureIntervalUnits),
  }
}

export class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureInterval = this._captureInterval;
    }
    if (this._captureIntervalUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureIntervalUnits = this._captureIntervalUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureInterval = undefined;
      this._captureIntervalUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureInterval = value.captureInterval;
      this._captureIntervalUnits = value.captureIntervalUnits;
    }
  }

  // capture_interval - computed: true, optional: true, required: false
  private _captureInterval?: number; 
  public get captureInterval() {
    return this.getNumberAttribute('capture_interval');
  }
  public set captureInterval(value: number) {
    this._captureInterval = value;
  }
  public resetCaptureInterval() {
    this._captureInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureIntervalInput() {
    return this._captureInterval;
  }

  // capture_interval_units - computed: true, optional: true, required: false
  private _captureIntervalUnits?: string; 
  public get captureIntervalUnits() {
    return this.getStringAttribute('capture_interval_units');
  }
  public set captureIntervalUnits(value: string) {
    this._captureIntervalUnits = value;
  }
  public resetCaptureIntervalUnits() {
    this._captureIntervalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureIntervalUnitsInput() {
    return this._captureIntervalUnits;
  }
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#post_filter_sharpening MedialiveChannel#post_filter_sharpening}
  */
  readonly postFilterSharpening?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#strength MedialiveChannel#strength}
  */
  readonly strength?: string;
}

export function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_filter_sharpening: cdktf.stringToTerraform(struct!.postFilterSharpening),
    strength: cdktf.stringToTerraform(struct!.strength),
  }
}

export class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postFilterSharpening !== undefined) {
      hasAnyValues = true;
      internalValueResult.postFilterSharpening = this._postFilterSharpening;
    }
    if (this._strength !== undefined) {
      hasAnyValues = true;
      internalValueResult.strength = this._strength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postFilterSharpening = undefined;
      this._strength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postFilterSharpening = value.postFilterSharpening;
      this._strength = value.strength;
    }
  }

  // post_filter_sharpening - computed: false, optional: true, required: false
  private _postFilterSharpening?: string; 
  public get postFilterSharpening() {
    return this.getStringAttribute('post_filter_sharpening');
  }
  public set postFilterSharpening(value: string) {
    this._postFilterSharpening = value;
  }
  public resetPostFilterSharpening() {
    this._postFilterSharpening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postFilterSharpeningInput() {
    return this._postFilterSharpening;
  }

  // strength - computed: false, optional: true, required: false
  private _strength?: string; 
  public get strength() {
    return this.getStringAttribute('strength');
  }
  public set strength(value: string) {
    this._strength = value;
  }
  public resetStrength() {
    this._strength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strengthInput() {
    return this._strength;
  }
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings {
  /**
  * temporal_filter_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#temporal_filter_settings MedialiveChannel#temporal_filter_settings}
  */
  readonly temporalFilterSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings;
}

export function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    temporal_filter_settings: medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsToTerraform(struct!.temporalFilterSettings),
  }
}

export class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._temporalFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporalFilterSettings = this._temporalFilterSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._temporalFilterSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._temporalFilterSettings.internalValue = value.temporalFilterSettings;
    }
  }

  // temporal_filter_settings - computed: false, optional: true, required: false
  private _temporalFilterSettings = new MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsOutputReference(this, "temporal_filter_settings");
  public get temporalFilterSettings() {
    return this._temporalFilterSettings;
  }
  public putTemporalFilterSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings) {
    this._temporalFilterSettings.internalValue = value;
  }
  public resetTemporalFilterSettings() {
    this._temporalFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporalFilterSettingsInput() {
    return this._temporalFilterSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#adaptive_quantization MedialiveChannel#adaptive_quantization}
  */
  readonly adaptiveQuantization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#afd_signaling MedialiveChannel#afd_signaling}
  */
  readonly afdSignaling?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bitrate MedialiveChannel#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#buf_fill_pct MedialiveChannel#buf_fill_pct}
  */
  readonly bufFillPct?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#buf_size MedialiveChannel#buf_size}
  */
  readonly bufSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#color_metadata MedialiveChannel#color_metadata}
  */
  readonly colorMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#entropy_encoding MedialiveChannel#entropy_encoding}
  */
  readonly entropyEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#fixed_afd MedialiveChannel#fixed_afd}
  */
  readonly fixedAfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#flicker_aq MedialiveChannel#flicker_aq}
  */
  readonly flickerAq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#force_field_pictures MedialiveChannel#force_field_pictures}
  */
  readonly forceFieldPictures?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#framerate_control MedialiveChannel#framerate_control}
  */
  readonly framerateControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#framerate_denominator MedialiveChannel#framerate_denominator}
  */
  readonly framerateDenominator?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#framerate_numerator MedialiveChannel#framerate_numerator}
  */
  readonly framerateNumerator?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#gop_b_reference MedialiveChannel#gop_b_reference}
  */
  readonly gopBReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#gop_closed_cadence MedialiveChannel#gop_closed_cadence}
  */
  readonly gopClosedCadence?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#gop_num_b_frames MedialiveChannel#gop_num_b_frames}
  */
  readonly gopNumBFrames?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#gop_size MedialiveChannel#gop_size}
  */
  readonly gopSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#gop_size_units MedialiveChannel#gop_size_units}
  */
  readonly gopSizeUnits?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#level MedialiveChannel#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#look_ahead_rate_control MedialiveChannel#look_ahead_rate_control}
  */
  readonly lookAheadRateControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#max_bitrate MedialiveChannel#max_bitrate}
  */
  readonly maxBitrate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#min_i_interval MedialiveChannel#min_i_interval}
  */
  readonly minIInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#num_ref_frames MedialiveChannel#num_ref_frames}
  */
  readonly numRefFrames?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#par_control MedialiveChannel#par_control}
  */
  readonly parControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#par_denominator MedialiveChannel#par_denominator}
  */
  readonly parDenominator?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#par_numerator MedialiveChannel#par_numerator}
  */
  readonly parNumerator?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#profile MedialiveChannel#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#quality_level MedialiveChannel#quality_level}
  */
  readonly qualityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#qvbr_quality_level MedialiveChannel#qvbr_quality_level}
  */
  readonly qvbrQualityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#rate_control_mode MedialiveChannel#rate_control_mode}
  */
  readonly rateControlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scan_type MedialiveChannel#scan_type}
  */
  readonly scanType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scene_change_detect MedialiveChannel#scene_change_detect}
  */
  readonly sceneChangeDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#slices MedialiveChannel#slices}
  */
  readonly slices?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#softness MedialiveChannel#softness}
  */
  readonly softness?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#spatial_aq MedialiveChannel#spatial_aq}
  */
  readonly spatialAq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#subgop_length MedialiveChannel#subgop_length}
  */
  readonly subgopLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#syntax MedialiveChannel#syntax}
  */
  readonly syntax?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#temporal_aq MedialiveChannel#temporal_aq}
  */
  readonly temporalAq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timecode_insertion MedialiveChannel#timecode_insertion}
  */
  readonly timecodeInsertion?: string;
  /**
  * filter_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#filter_settings MedialiveChannel#filter_settings}
  */
  readonly filterSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings;
}

export function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_quantization: cdktf.stringToTerraform(struct!.adaptiveQuantization),
    afd_signaling: cdktf.stringToTerraform(struct!.afdSignaling),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    buf_fill_pct: cdktf.numberToTerraform(struct!.bufFillPct),
    buf_size: cdktf.numberToTerraform(struct!.bufSize),
    color_metadata: cdktf.stringToTerraform(struct!.colorMetadata),
    entropy_encoding: cdktf.stringToTerraform(struct!.entropyEncoding),
    fixed_afd: cdktf.stringToTerraform(struct!.fixedAfd),
    flicker_aq: cdktf.stringToTerraform(struct!.flickerAq),
    force_field_pictures: cdktf.stringToTerraform(struct!.forceFieldPictures),
    framerate_control: cdktf.stringToTerraform(struct!.framerateControl),
    framerate_denominator: cdktf.numberToTerraform(struct!.framerateDenominator),
    framerate_numerator: cdktf.numberToTerraform(struct!.framerateNumerator),
    gop_b_reference: cdktf.stringToTerraform(struct!.gopBReference),
    gop_closed_cadence: cdktf.numberToTerraform(struct!.gopClosedCadence),
    gop_num_b_frames: cdktf.numberToTerraform(struct!.gopNumBFrames),
    gop_size: cdktf.numberToTerraform(struct!.gopSize),
    gop_size_units: cdktf.stringToTerraform(struct!.gopSizeUnits),
    level: cdktf.stringToTerraform(struct!.level),
    look_ahead_rate_control: cdktf.stringToTerraform(struct!.lookAheadRateControl),
    max_bitrate: cdktf.numberToTerraform(struct!.maxBitrate),
    min_i_interval: cdktf.numberToTerraform(struct!.minIInterval),
    num_ref_frames: cdktf.numberToTerraform(struct!.numRefFrames),
    par_control: cdktf.stringToTerraform(struct!.parControl),
    par_denominator: cdktf.numberToTerraform(struct!.parDenominator),
    par_numerator: cdktf.numberToTerraform(struct!.parNumerator),
    profile: cdktf.stringToTerraform(struct!.profile),
    quality_level: cdktf.stringToTerraform(struct!.qualityLevel),
    qvbr_quality_level: cdktf.numberToTerraform(struct!.qvbrQualityLevel),
    rate_control_mode: cdktf.stringToTerraform(struct!.rateControlMode),
    scan_type: cdktf.stringToTerraform(struct!.scanType),
    scene_change_detect: cdktf.stringToTerraform(struct!.sceneChangeDetect),
    slices: cdktf.numberToTerraform(struct!.slices),
    softness: cdktf.numberToTerraform(struct!.softness),
    spatial_aq: cdktf.stringToTerraform(struct!.spatialAq),
    subgop_length: cdktf.stringToTerraform(struct!.subgopLength),
    syntax: cdktf.stringToTerraform(struct!.syntax),
    temporal_aq: cdktf.stringToTerraform(struct!.temporalAq),
    timecode_insertion: cdktf.stringToTerraform(struct!.timecodeInsertion),
    filter_settings: medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsToTerraform(struct!.filterSettings),
  }
}

export class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQuantization !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQuantization = this._adaptiveQuantization;
    }
    if (this._afdSignaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.afdSignaling = this._afdSignaling;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._bufFillPct !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufFillPct = this._bufFillPct;
    }
    if (this._bufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufSize = this._bufSize;
    }
    if (this._colorMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorMetadata = this._colorMetadata;
    }
    if (this._entropyEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.entropyEncoding = this._entropyEncoding;
    }
    if (this._fixedAfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedAfd = this._fixedAfd;
    }
    if (this._flickerAq !== undefined) {
      hasAnyValues = true;
      internalValueResult.flickerAq = this._flickerAq;
    }
    if (this._forceFieldPictures !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceFieldPictures = this._forceFieldPictures;
    }
    if (this._framerateControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.framerateControl = this._framerateControl;
    }
    if (this._framerateDenominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.framerateDenominator = this._framerateDenominator;
    }
    if (this._framerateNumerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.framerateNumerator = this._framerateNumerator;
    }
    if (this._gopBReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.gopBReference = this._gopBReference;
    }
    if (this._gopClosedCadence !== undefined) {
      hasAnyValues = true;
      internalValueResult.gopClosedCadence = this._gopClosedCadence;
    }
    if (this._gopNumBFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.gopNumBFrames = this._gopNumBFrames;
    }
    if (this._gopSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gopSize = this._gopSize;
    }
    if (this._gopSizeUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gopSizeUnits = this._gopSizeUnits;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._lookAheadRateControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookAheadRateControl = this._lookAheadRateControl;
    }
    if (this._maxBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBitrate = this._maxBitrate;
    }
    if (this._minIInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIInterval = this._minIInterval;
    }
    if (this._numRefFrames !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRefFrames = this._numRefFrames;
    }
    if (this._parControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.parControl = this._parControl;
    }
    if (this._parDenominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.parDenominator = this._parDenominator;
    }
    if (this._parNumerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.parNumerator = this._parNumerator;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._qualityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualityLevel = this._qualityLevel;
    }
    if (this._qvbrQualityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.qvbrQualityLevel = this._qvbrQualityLevel;
    }
    if (this._rateControlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateControlMode = this._rateControlMode;
    }
    if (this._scanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanType = this._scanType;
    }
    if (this._sceneChangeDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.sceneChangeDetect = this._sceneChangeDetect;
    }
    if (this._slices !== undefined) {
      hasAnyValues = true;
      internalValueResult.slices = this._slices;
    }
    if (this._softness !== undefined) {
      hasAnyValues = true;
      internalValueResult.softness = this._softness;
    }
    if (this._spatialAq !== undefined) {
      hasAnyValues = true;
      internalValueResult.spatialAq = this._spatialAq;
    }
    if (this._subgopLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.subgopLength = this._subgopLength;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    if (this._temporalAq !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporalAq = this._temporalAq;
    }
    if (this._timecodeInsertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.timecodeInsertion = this._timecodeInsertion;
    }
    if (this._filterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSettings = this._filterSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQuantization = undefined;
      this._afdSignaling = undefined;
      this._bitrate = undefined;
      this._bufFillPct = undefined;
      this._bufSize = undefined;
      this._colorMetadata = undefined;
      this._entropyEncoding = undefined;
      this._fixedAfd = undefined;
      this._flickerAq = undefined;
      this._forceFieldPictures = undefined;
      this._framerateControl = undefined;
      this._framerateDenominator = undefined;
      this._framerateNumerator = undefined;
      this._gopBReference = undefined;
      this._gopClosedCadence = undefined;
      this._gopNumBFrames = undefined;
      this._gopSize = undefined;
      this._gopSizeUnits = undefined;
      this._level = undefined;
      this._lookAheadRateControl = undefined;
      this._maxBitrate = undefined;
      this._minIInterval = undefined;
      this._numRefFrames = undefined;
      this._parControl = undefined;
      this._parDenominator = undefined;
      this._parNumerator = undefined;
      this._profile = undefined;
      this._qualityLevel = undefined;
      this._qvbrQualityLevel = undefined;
      this._rateControlMode = undefined;
      this._scanType = undefined;
      this._sceneChangeDetect = undefined;
      this._slices = undefined;
      this._softness = undefined;
      this._spatialAq = undefined;
      this._subgopLength = undefined;
      this._syntax = undefined;
      this._temporalAq = undefined;
      this._timecodeInsertion = undefined;
      this._filterSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQuantization = value.adaptiveQuantization;
      this._afdSignaling = value.afdSignaling;
      this._bitrate = value.bitrate;
      this._bufFillPct = value.bufFillPct;
      this._bufSize = value.bufSize;
      this._colorMetadata = value.colorMetadata;
      this._entropyEncoding = value.entropyEncoding;
      this._fixedAfd = value.fixedAfd;
      this._flickerAq = value.flickerAq;
      this._forceFieldPictures = value.forceFieldPictures;
      this._framerateControl = value.framerateControl;
      this._framerateDenominator = value.framerateDenominator;
      this._framerateNumerator = value.framerateNumerator;
      this._gopBReference = value.gopBReference;
      this._gopClosedCadence = value.gopClosedCadence;
      this._gopNumBFrames = value.gopNumBFrames;
      this._gopSize = value.gopSize;
      this._gopSizeUnits = value.gopSizeUnits;
      this._level = value.level;
      this._lookAheadRateControl = value.lookAheadRateControl;
      this._maxBitrate = value.maxBitrate;
      this._minIInterval = value.minIInterval;
      this._numRefFrames = value.numRefFrames;
      this._parControl = value.parControl;
      this._parDenominator = value.parDenominator;
      this._parNumerator = value.parNumerator;
      this._profile = value.profile;
      this._qualityLevel = value.qualityLevel;
      this._qvbrQualityLevel = value.qvbrQualityLevel;
      this._rateControlMode = value.rateControlMode;
      this._scanType = value.scanType;
      this._sceneChangeDetect = value.sceneChangeDetect;
      this._slices = value.slices;
      this._softness = value.softness;
      this._spatialAq = value.spatialAq;
      this._subgopLength = value.subgopLength;
      this._syntax = value.syntax;
      this._temporalAq = value.temporalAq;
      this._timecodeInsertion = value.timecodeInsertion;
      this._filterSettings.internalValue = value.filterSettings;
    }
  }

  // adaptive_quantization - computed: true, optional: true, required: false
  private _adaptiveQuantization?: string; 
  public get adaptiveQuantization() {
    return this.getStringAttribute('adaptive_quantization');
  }
  public set adaptiveQuantization(value: string) {
    this._adaptiveQuantization = value;
  }
  public resetAdaptiveQuantization() {
    this._adaptiveQuantization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQuantizationInput() {
    return this._adaptiveQuantization;
  }

  // afd_signaling - computed: true, optional: true, required: false
  private _afdSignaling?: string; 
  public get afdSignaling() {
    return this.getStringAttribute('afd_signaling');
  }
  public set afdSignaling(value: string) {
    this._afdSignaling = value;
  }
  public resetAfdSignaling() {
    this._afdSignaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afdSignalingInput() {
    return this._afdSignaling;
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // buf_fill_pct - computed: true, optional: true, required: false
  private _bufFillPct?: number; 
  public get bufFillPct() {
    return this.getNumberAttribute('buf_fill_pct');
  }
  public set bufFillPct(value: number) {
    this._bufFillPct = value;
  }
  public resetBufFillPct() {
    this._bufFillPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufFillPctInput() {
    return this._bufFillPct;
  }

  // buf_size - computed: true, optional: true, required: false
  private _bufSize?: number; 
  public get bufSize() {
    return this.getNumberAttribute('buf_size');
  }
  public set bufSize(value: number) {
    this._bufSize = value;
  }
  public resetBufSize() {
    this._bufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufSizeInput() {
    return this._bufSize;
  }

  // color_metadata - computed: true, optional: true, required: false
  private _colorMetadata?: string; 
  public get colorMetadata() {
    return this.getStringAttribute('color_metadata');
  }
  public set colorMetadata(value: string) {
    this._colorMetadata = value;
  }
  public resetColorMetadata() {
    this._colorMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorMetadataInput() {
    return this._colorMetadata;
  }

  // entropy_encoding - computed: true, optional: true, required: false
  private _entropyEncoding?: string; 
  public get entropyEncoding() {
    return this.getStringAttribute('entropy_encoding');
  }
  public set entropyEncoding(value: string) {
    this._entropyEncoding = value;
  }
  public resetEntropyEncoding() {
    this._entropyEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entropyEncodingInput() {
    return this._entropyEncoding;
  }

  // fixed_afd - computed: true, optional: true, required: false
  private _fixedAfd?: string; 
  public get fixedAfd() {
    return this.getStringAttribute('fixed_afd');
  }
  public set fixedAfd(value: string) {
    this._fixedAfd = value;
  }
  public resetFixedAfd() {
    this._fixedAfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedAfdInput() {
    return this._fixedAfd;
  }

  // flicker_aq - computed: true, optional: true, required: false
  private _flickerAq?: string; 
  public get flickerAq() {
    return this.getStringAttribute('flicker_aq');
  }
  public set flickerAq(value: string) {
    this._flickerAq = value;
  }
  public resetFlickerAq() {
    this._flickerAq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flickerAqInput() {
    return this._flickerAq;
  }

  // force_field_pictures - computed: true, optional: true, required: false
  private _forceFieldPictures?: string; 
  public get forceFieldPictures() {
    return this.getStringAttribute('force_field_pictures');
  }
  public set forceFieldPictures(value: string) {
    this._forceFieldPictures = value;
  }
  public resetForceFieldPictures() {
    this._forceFieldPictures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceFieldPicturesInput() {
    return this._forceFieldPictures;
  }

  // framerate_control - computed: true, optional: true, required: false
  private _framerateControl?: string; 
  public get framerateControl() {
    return this.getStringAttribute('framerate_control');
  }
  public set framerateControl(value: string) {
    this._framerateControl = value;
  }
  public resetFramerateControl() {
    this._framerateControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framerateControlInput() {
    return this._framerateControl;
  }

  // framerate_denominator - computed: true, optional: true, required: false
  private _framerateDenominator?: number; 
  public get framerateDenominator() {
    return this.getNumberAttribute('framerate_denominator');
  }
  public set framerateDenominator(value: number) {
    this._framerateDenominator = value;
  }
  public resetFramerateDenominator() {
    this._framerateDenominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framerateDenominatorInput() {
    return this._framerateDenominator;
  }

  // framerate_numerator - computed: true, optional: true, required: false
  private _framerateNumerator?: number; 
  public get framerateNumerator() {
    return this.getNumberAttribute('framerate_numerator');
  }
  public set framerateNumerator(value: number) {
    this._framerateNumerator = value;
  }
  public resetFramerateNumerator() {
    this._framerateNumerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framerateNumeratorInput() {
    return this._framerateNumerator;
  }

  // gop_b_reference - computed: true, optional: true, required: false
  private _gopBReference?: string; 
  public get gopBReference() {
    return this.getStringAttribute('gop_b_reference');
  }
  public set gopBReference(value: string) {
    this._gopBReference = value;
  }
  public resetGopBReference() {
    this._gopBReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopBReferenceInput() {
    return this._gopBReference;
  }

  // gop_closed_cadence - computed: true, optional: true, required: false
  private _gopClosedCadence?: number; 
  public get gopClosedCadence() {
    return this.getNumberAttribute('gop_closed_cadence');
  }
  public set gopClosedCadence(value: number) {
    this._gopClosedCadence = value;
  }
  public resetGopClosedCadence() {
    this._gopClosedCadence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopClosedCadenceInput() {
    return this._gopClosedCadence;
  }

  // gop_num_b_frames - computed: true, optional: true, required: false
  private _gopNumBFrames?: number; 
  public get gopNumBFrames() {
    return this.getNumberAttribute('gop_num_b_frames');
  }
  public set gopNumBFrames(value: number) {
    this._gopNumBFrames = value;
  }
  public resetGopNumBFrames() {
    this._gopNumBFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopNumBFramesInput() {
    return this._gopNumBFrames;
  }

  // gop_size - computed: true, optional: true, required: false
  private _gopSize?: number; 
  public get gopSize() {
    return this.getNumberAttribute('gop_size');
  }
  public set gopSize(value: number) {
    this._gopSize = value;
  }
  public resetGopSize() {
    this._gopSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopSizeInput() {
    return this._gopSize;
  }

  // gop_size_units - computed: true, optional: true, required: false
  private _gopSizeUnits?: string; 
  public get gopSizeUnits() {
    return this.getStringAttribute('gop_size_units');
  }
  public set gopSizeUnits(value: string) {
    this._gopSizeUnits = value;
  }
  public resetGopSizeUnits() {
    this._gopSizeUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopSizeUnitsInput() {
    return this._gopSizeUnits;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // look_ahead_rate_control - computed: true, optional: true, required: false
  private _lookAheadRateControl?: string; 
  public get lookAheadRateControl() {
    return this.getStringAttribute('look_ahead_rate_control');
  }
  public set lookAheadRateControl(value: string) {
    this._lookAheadRateControl = value;
  }
  public resetLookAheadRateControl() {
    this._lookAheadRateControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookAheadRateControlInput() {
    return this._lookAheadRateControl;
  }

  // max_bitrate - computed: true, optional: true, required: false
  private _maxBitrate?: number; 
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
  public set maxBitrate(value: number) {
    this._maxBitrate = value;
  }
  public resetMaxBitrate() {
    this._maxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateInput() {
    return this._maxBitrate;
  }

  // min_i_interval - computed: true, optional: true, required: false
  private _minIInterval?: number; 
  public get minIInterval() {
    return this.getNumberAttribute('min_i_interval');
  }
  public set minIInterval(value: number) {
    this._minIInterval = value;
  }
  public resetMinIInterval() {
    this._minIInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIIntervalInput() {
    return this._minIInterval;
  }

  // num_ref_frames - computed: true, optional: true, required: false
  private _numRefFrames?: number; 
  public get numRefFrames() {
    return this.getNumberAttribute('num_ref_frames');
  }
  public set numRefFrames(value: number) {
    this._numRefFrames = value;
  }
  public resetNumRefFrames() {
    this._numRefFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRefFramesInput() {
    return this._numRefFrames;
  }

  // par_control - computed: true, optional: true, required: false
  private _parControl?: string; 
  public get parControl() {
    return this.getStringAttribute('par_control');
  }
  public set parControl(value: string) {
    this._parControl = value;
  }
  public resetParControl() {
    this._parControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parControlInput() {
    return this._parControl;
  }

  // par_denominator - computed: true, optional: true, required: false
  private _parDenominator?: number; 
  public get parDenominator() {
    return this.getNumberAttribute('par_denominator');
  }
  public set parDenominator(value: number) {
    this._parDenominator = value;
  }
  public resetParDenominator() {
    this._parDenominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parDenominatorInput() {
    return this._parDenominator;
  }

  // par_numerator - computed: true, optional: true, required: false
  private _parNumerator?: number; 
  public get parNumerator() {
    return this.getNumberAttribute('par_numerator');
  }
  public set parNumerator(value: number) {
    this._parNumerator = value;
  }
  public resetParNumerator() {
    this._parNumerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parNumeratorInput() {
    return this._parNumerator;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // quality_level - computed: true, optional: true, required: false
  private _qualityLevel?: string; 
  public get qualityLevel() {
    return this.getStringAttribute('quality_level');
  }
  public set qualityLevel(value: string) {
    this._qualityLevel = value;
  }
  public resetQualityLevel() {
    this._qualityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityLevelInput() {
    return this._qualityLevel;
  }

  // qvbr_quality_level - computed: true, optional: true, required: false
  private _qvbrQualityLevel?: number; 
  public get qvbrQualityLevel() {
    return this.getNumberAttribute('qvbr_quality_level');
  }
  public set qvbrQualityLevel(value: number) {
    this._qvbrQualityLevel = value;
  }
  public resetQvbrQualityLevel() {
    this._qvbrQualityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qvbrQualityLevelInput() {
    return this._qvbrQualityLevel;
  }

  // rate_control_mode - computed: true, optional: true, required: false
  private _rateControlMode?: string; 
  public get rateControlMode() {
    return this.getStringAttribute('rate_control_mode');
  }
  public set rateControlMode(value: string) {
    this._rateControlMode = value;
  }
  public resetRateControlMode() {
    this._rateControlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateControlModeInput() {
    return this._rateControlMode;
  }

  // scan_type - computed: true, optional: true, required: false
  private _scanType?: string; 
  public get scanType() {
    return this.getStringAttribute('scan_type');
  }
  public set scanType(value: string) {
    this._scanType = value;
  }
  public resetScanType() {
    this._scanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTypeInput() {
    return this._scanType;
  }

  // scene_change_detect - computed: true, optional: true, required: false
  private _sceneChangeDetect?: string; 
  public get sceneChangeDetect() {
    return this.getStringAttribute('scene_change_detect');
  }
  public set sceneChangeDetect(value: string) {
    this._sceneChangeDetect = value;
  }
  public resetSceneChangeDetect() {
    this._sceneChangeDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneChangeDetectInput() {
    return this._sceneChangeDetect;
  }

  // slices - computed: true, optional: true, required: false
  private _slices?: number; 
  public get slices() {
    return this.getNumberAttribute('slices');
  }
  public set slices(value: number) {
    this._slices = value;
  }
  public resetSlices() {
    this._slices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slicesInput() {
    return this._slices;
  }

  // softness - computed: true, optional: true, required: false
  private _softness?: number; 
  public get softness() {
    return this.getNumberAttribute('softness');
  }
  public set softness(value: number) {
    this._softness = value;
  }
  public resetSoftness() {
    this._softness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softnessInput() {
    return this._softness;
  }

  // spatial_aq - computed: true, optional: true, required: false
  private _spatialAq?: string; 
  public get spatialAq() {
    return this.getStringAttribute('spatial_aq');
  }
  public set spatialAq(value: string) {
    this._spatialAq = value;
  }
  public resetSpatialAq() {
    this._spatialAq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spatialAqInput() {
    return this._spatialAq;
  }

  // subgop_length - computed: true, optional: true, required: false
  private _subgopLength?: string; 
  public get subgopLength() {
    return this.getStringAttribute('subgop_length');
  }
  public set subgopLength(value: string) {
    this._subgopLength = value;
  }
  public resetSubgopLength() {
    this._subgopLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subgopLengthInput() {
    return this._subgopLength;
  }

  // syntax - computed: true, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }

  // temporal_aq - computed: true, optional: true, required: false
  private _temporalAq?: string; 
  public get temporalAq() {
    return this.getStringAttribute('temporal_aq');
  }
  public set temporalAq(value: string) {
    this._temporalAq = value;
  }
  public resetTemporalAq() {
    this._temporalAq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporalAqInput() {
    return this._temporalAq;
  }

  // timecode_insertion - computed: true, optional: true, required: false
  private _timecodeInsertion?: string; 
  public get timecodeInsertion() {
    return this.getStringAttribute('timecode_insertion');
  }
  public set timecodeInsertion(value: string) {
    this._timecodeInsertion = value;
  }
  public resetTimecodeInsertion() {
    this._timecodeInsertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timecodeInsertionInput() {
    return this._timecodeInsertion;
  }

  // filter_settings - computed: false, optional: true, required: false
  private _filterSettings = new MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsOutputReference(this, "filter_settings");
  public get filterSettings() {
    return this._filterSettings;
  }
  public putFilterSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings) {
    this._filterSettings.internalValue = value;
  }
  public resetFilterSettings() {
    this._filterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSettingsInput() {
    return this._filterSettings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings {
  /**
  * frame_capture_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#frame_capture_settings MedialiveChannel#frame_capture_settings}
  */
  readonly frameCaptureSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings;
  /**
  * h264_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#h264_settings MedialiveChannel#h264_settings}
  */
  readonly h264Settings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings;
}

export function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frame_capture_settings: medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsToTerraform(struct!.frameCaptureSettings),
    h264_settings: medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsToTerraform(struct!.h264Settings),
  }
}

export class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frameCaptureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameCaptureSettings = this._frameCaptureSettings?.internalValue;
    }
    if (this._h264Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.h264Settings = this._h264Settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frameCaptureSettings.internalValue = undefined;
      this._h264Settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frameCaptureSettings.internalValue = value.frameCaptureSettings;
      this._h264Settings.internalValue = value.h264Settings;
    }
  }

  // frame_capture_settings - computed: false, optional: true, required: false
  private _frameCaptureSettings = new MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsOutputReference(this, "frame_capture_settings");
  public get frameCaptureSettings() {
    return this._frameCaptureSettings;
  }
  public putFrameCaptureSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings) {
    this._frameCaptureSettings.internalValue = value;
  }
  public resetFrameCaptureSettings() {
    this._frameCaptureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameCaptureSettingsInput() {
    return this._frameCaptureSettings.internalValue;
  }

  // h264_settings - computed: false, optional: true, required: false
  private _h264Settings = new MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsOutputReference(this, "h264_settings");
  public get h264Settings() {
    return this._h264Settings;
  }
  public putH264Settings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings) {
    this._h264Settings.internalValue = value;
  }
  public resetH264Settings() {
    this._h264Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h264SettingsInput() {
    return this._h264Settings.internalValue;
  }
}
export interface MedialiveChannelEncoderSettingsVideoDescriptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#height MedialiveChannel#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#respond_to_afd MedialiveChannel#respond_to_afd}
  */
  readonly respondToAfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scaling_behavior MedialiveChannel#scaling_behavior}
  */
  readonly scalingBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#sharpness MedialiveChannel#sharpness}
  */
  readonly sharpness?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#width MedialiveChannel#width}
  */
  readonly width?: number;
  /**
  * codec_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#codec_settings MedialiveChannel#codec_settings}
  */
  readonly codecSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings;
}

export function medialiveChannelEncoderSettingsVideoDescriptionsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    respond_to_afd: cdktf.stringToTerraform(struct!.respondToAfd),
    scaling_behavior: cdktf.stringToTerraform(struct!.scalingBehavior),
    sharpness: cdktf.numberToTerraform(struct!.sharpness),
    width: cdktf.numberToTerraform(struct!.width),
    codec_settings: medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsToTerraform(struct!.codecSettings),
  }
}

export class MedialiveChannelEncoderSettingsVideoDescriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._respondToAfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.respondToAfd = this._respondToAfd;
    }
    if (this._scalingBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingBehavior = this._scalingBehavior;
    }
    if (this._sharpness !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharpness = this._sharpness;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._codecSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codecSettings = this._codecSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._name = undefined;
      this._respondToAfd = undefined;
      this._scalingBehavior = undefined;
      this._sharpness = undefined;
      this._width = undefined;
      this._codecSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._name = value.name;
      this._respondToAfd = value.respondToAfd;
      this._scalingBehavior = value.scalingBehavior;
      this._sharpness = value.sharpness;
      this._width = value.width;
      this._codecSettings.internalValue = value.codecSettings;
    }
  }

  // height - computed: true, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // respond_to_afd - computed: true, optional: true, required: false
  private _respondToAfd?: string; 
  public get respondToAfd() {
    return this.getStringAttribute('respond_to_afd');
  }
  public set respondToAfd(value: string) {
    this._respondToAfd = value;
  }
  public resetRespondToAfd() {
    this._respondToAfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondToAfdInput() {
    return this._respondToAfd;
  }

  // scaling_behavior - computed: true, optional: true, required: false
  private _scalingBehavior?: string; 
  public get scalingBehavior() {
    return this.getStringAttribute('scaling_behavior');
  }
  public set scalingBehavior(value: string) {
    this._scalingBehavior = value;
  }
  public resetScalingBehavior() {
    this._scalingBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingBehaviorInput() {
    return this._scalingBehavior;
  }

  // sharpness - computed: true, optional: true, required: false
  private _sharpness?: number; 
  public get sharpness() {
    return this.getNumberAttribute('sharpness');
  }
  public set sharpness(value: number) {
    this._sharpness = value;
  }
  public resetSharpness() {
    this._sharpness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharpnessInput() {
    return this._sharpness;
  }

  // width - computed: true, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // codec_settings - computed: false, optional: true, required: false
  private _codecSettings = new MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsOutputReference(this, "codec_settings");
  public get codecSettings() {
    return this._codecSettings;
  }
  public putCodecSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings) {
    this._codecSettings.internalValue = value;
  }
  public resetCodecSettings() {
    this._codecSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecSettingsInput() {
    return this._codecSettings.internalValue;
  }
}

export class MedialiveChannelEncoderSettingsVideoDescriptionsList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelEncoderSettingsVideoDescriptions[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelEncoderSettingsVideoDescriptionsOutputReference {
    return new MedialiveChannelEncoderSettingsVideoDescriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelEncoderSettings {
  /**
  * audio_descriptions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_descriptions MedialiveChannel#audio_descriptions}
  */
  readonly audioDescriptions?: MedialiveChannelEncoderSettingsAudioDescriptions[] | cdktf.IResolvable;
  /**
  * avail_blanking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#avail_blanking MedialiveChannel#avail_blanking}
  */
  readonly availBlanking?: MedialiveChannelEncoderSettingsAvailBlanking;
  /**
  * output_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_groups MedialiveChannel#output_groups}
  */
  readonly outputGroups: MedialiveChannelEncoderSettingsOutputGroups[] | cdktf.IResolvable;
  /**
  * timecode_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#timecode_config MedialiveChannel#timecode_config}
  */
  readonly timecodeConfig: MedialiveChannelEncoderSettingsTimecodeConfig;
  /**
  * video_descriptions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_descriptions MedialiveChannel#video_descriptions}
  */
  readonly videoDescriptions?: MedialiveChannelEncoderSettingsVideoDescriptions[] | cdktf.IResolvable;
}

export function medialiveChannelEncoderSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputReference | MedialiveChannelEncoderSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_descriptions: cdktf.listMapper(medialiveChannelEncoderSettingsAudioDescriptionsToTerraform, true)(struct!.audioDescriptions),
    avail_blanking: medialiveChannelEncoderSettingsAvailBlankingToTerraform(struct!.availBlanking),
    output_groups: cdktf.listMapper(medialiveChannelEncoderSettingsOutputGroupsToTerraform, true)(struct!.outputGroups),
    timecode_config: medialiveChannelEncoderSettingsTimecodeConfigToTerraform(struct!.timecodeConfig),
    video_descriptions: cdktf.listMapper(medialiveChannelEncoderSettingsVideoDescriptionsToTerraform, true)(struct!.videoDescriptions),
  }
}

export class MedialiveChannelEncoderSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelEncoderSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioDescriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioDescriptions = this._audioDescriptions?.internalValue;
    }
    if (this._availBlanking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availBlanking = this._availBlanking?.internalValue;
    }
    if (this._outputGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputGroups = this._outputGroups?.internalValue;
    }
    if (this._timecodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timecodeConfig = this._timecodeConfig?.internalValue;
    }
    if (this._videoDescriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoDescriptions = this._videoDescriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelEncoderSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioDescriptions.internalValue = undefined;
      this._availBlanking.internalValue = undefined;
      this._outputGroups.internalValue = undefined;
      this._timecodeConfig.internalValue = undefined;
      this._videoDescriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioDescriptions.internalValue = value.audioDescriptions;
      this._availBlanking.internalValue = value.availBlanking;
      this._outputGroups.internalValue = value.outputGroups;
      this._timecodeConfig.internalValue = value.timecodeConfig;
      this._videoDescriptions.internalValue = value.videoDescriptions;
    }
  }

  // audio_descriptions - computed: false, optional: true, required: false
  private _audioDescriptions = new MedialiveChannelEncoderSettingsAudioDescriptionsList(this, "audio_descriptions", true);
  public get audioDescriptions() {
    return this._audioDescriptions;
  }
  public putAudioDescriptions(value: MedialiveChannelEncoderSettingsAudioDescriptions[] | cdktf.IResolvable) {
    this._audioDescriptions.internalValue = value;
  }
  public resetAudioDescriptions() {
    this._audioDescriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioDescriptionsInput() {
    return this._audioDescriptions.internalValue;
  }

  // avail_blanking - computed: false, optional: true, required: false
  private _availBlanking = new MedialiveChannelEncoderSettingsAvailBlankingOutputReference(this, "avail_blanking");
  public get availBlanking() {
    return this._availBlanking;
  }
  public putAvailBlanking(value: MedialiveChannelEncoderSettingsAvailBlanking) {
    this._availBlanking.internalValue = value;
  }
  public resetAvailBlanking() {
    this._availBlanking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availBlankingInput() {
    return this._availBlanking.internalValue;
  }

  // output_groups - computed: false, optional: false, required: true
  private _outputGroups = new MedialiveChannelEncoderSettingsOutputGroupsList(this, "output_groups", false);
  public get outputGroups() {
    return this._outputGroups;
  }
  public putOutputGroups(value: MedialiveChannelEncoderSettingsOutputGroups[] | cdktf.IResolvable) {
    this._outputGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputGroupsInput() {
    return this._outputGroups.internalValue;
  }

  // timecode_config - computed: false, optional: false, required: true
  private _timecodeConfig = new MedialiveChannelEncoderSettingsTimecodeConfigOutputReference(this, "timecode_config");
  public get timecodeConfig() {
    return this._timecodeConfig;
  }
  public putTimecodeConfig(value: MedialiveChannelEncoderSettingsTimecodeConfig) {
    this._timecodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timecodeConfigInput() {
    return this._timecodeConfig.internalValue;
  }

  // video_descriptions - computed: false, optional: true, required: false
  private _videoDescriptions = new MedialiveChannelEncoderSettingsVideoDescriptionsList(this, "video_descriptions", true);
  public get videoDescriptions() {
    return this._videoDescriptions;
  }
  public putVideoDescriptions(value: MedialiveChannelEncoderSettingsVideoDescriptions[] | cdktf.IResolvable) {
    this._videoDescriptions.internalValue = value;
  }
  public resetVideoDescriptions() {
    this._videoDescriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoDescriptionsInput() {
    return this._videoDescriptions.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_selector_name MedialiveChannel#audio_selector_name}
  */
  readonly audioSelectorName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_silence_threshold_msec MedialiveChannel#audio_silence_threshold_msec}
  */
  readonly audioSilenceThresholdMsec?: number;
}

export function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_selector_name: cdktf.stringToTerraform(struct!.audioSelectorName),
    audio_silence_threshold_msec: cdktf.numberToTerraform(struct!.audioSilenceThresholdMsec),
  }
}

export class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioSelectorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSelectorName = this._audioSelectorName;
    }
    if (this._audioSilenceThresholdMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioSilenceThresholdMsec = this._audioSilenceThresholdMsec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioSelectorName = undefined;
      this._audioSilenceThresholdMsec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioSelectorName = value.audioSelectorName;
      this._audioSilenceThresholdMsec = value.audioSilenceThresholdMsec;
    }
  }

  // audio_selector_name - computed: false, optional: false, required: true
  private _audioSelectorName?: string; 
  public get audioSelectorName() {
    return this.getStringAttribute('audio_selector_name');
  }
  public set audioSelectorName(value: string) {
    this._audioSelectorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSelectorNameInput() {
    return this._audioSelectorName;
  }

  // audio_silence_threshold_msec - computed: false, optional: true, required: false
  private _audioSilenceThresholdMsec?: number; 
  public get audioSilenceThresholdMsec() {
    return this.getNumberAttribute('audio_silence_threshold_msec');
  }
  public set audioSilenceThresholdMsec(value: number) {
    this._audioSilenceThresholdMsec = value;
  }
  public resetAudioSilenceThresholdMsec() {
    this._audioSilenceThresholdMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioSilenceThresholdMsecInput() {
    return this._audioSilenceThresholdMsec;
  }
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_loss_threshold_msec MedialiveChannel#input_loss_threshold_msec}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#black_detect_threshold MedialiveChannel#black_detect_threshold}
  */
  readonly blackDetectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_black_threshold_msec MedialiveChannel#video_black_threshold_msec}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_silence_settings MedialiveChannel#audio_silence_settings}
  */
  readonly audioSilenceSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings;
  /**
  * input_loss_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_loss_settings MedialiveChannel#input_loss_settings}
  */
  readonly inputLossSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings;
  /**
  * video_black_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_black_settings MedialiveChannel#video_black_settings}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#failover_condition_settings MedialiveChannel#failover_condition_settings}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#error_clear_time_msec MedialiveChannel#error_clear_time_msec}
  */
  readonly errorClearTimeMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_preference MedialiveChannel#input_preference}
  */
  readonly inputPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#secondary_input_id MedialiveChannel#secondary_input_id}
  */
  readonly secondaryInputId: string;
  /**
  * failover_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#failover_condition MedialiveChannel#failover_condition}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#group_id MedialiveChannel#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name MedialiveChannel#name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#language_code MedialiveChannel#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#language_selection_policy MedialiveChannel#language_selection_policy}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pid MedialiveChannel#pid}
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
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#track MedialiveChannel#track}
  */
  readonly track: number;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrackToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    track: cdktf.numberToTerraform(struct!.track),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack | cdktf.IResolvable | undefined) {
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

export class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrackList extends cdktf.ComplexList {
  public internalValue? : MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack[] | cdktf.IResolvable

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
  public get(index: number): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrackOutputReference {
    return new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection {
  /**
  * track block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#track MedialiveChannel#track}
  */
  readonly track: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack[] | cdktf.IResolvable;
}

export function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    track: cdktf.listMapper(medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrackToTerraform, true)(struct!.track),
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
    if (this._track?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._track.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._track.internalValue = value.track;
    }
  }

  // track - computed: false, optional: false, required: true
  private _track = new MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrackList(this, "track", true);
  public get track() {
    return this._track;
  }
  public putTrack(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTrack[] | cdktf.IResolvable) {
    this._track.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track.internalValue;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings {
  /**
  * audio_hls_rendition_selection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_hls_rendition_selection MedialiveChannel#audio_hls_rendition_selection}
  */
  readonly audioHlsRenditionSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection;
  /**
  * audio_language_selection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_language_selection MedialiveChannel#audio_language_selection}
  */
  readonly audioLanguageSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection;
  /**
  * audio_pid_selection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_pid_selection MedialiveChannel#audio_pid_selection}
  */
  readonly audioPidSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection;
  /**
  * audio_track_selection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_track_selection MedialiveChannel#audio_track_selection}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * selector_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#selector_settings MedialiveChannel#selector_settings}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#source_ancillary_channel_number MedialiveChannel#source_ancillary_channel_number}
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
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ocr_language MedialiveChannel#ocr_language}
  */
  readonly ocrLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pid MedialiveChannel#pid}
  */
  readonly pid?: number;
}

export function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocr_language: cdktf.stringToTerraform(struct!.ocrLanguage),
    pid: cdktf.numberToTerraform(struct!.pid),
  }
}

export class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettings | undefined {
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

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettings | undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#convert_608_to_708 MedialiveChannel#convert_608_to_708}
  */
  readonly convert608To708?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte20_detection MedialiveChannel#scte20_detection}
  */
  readonly scte20Detection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#source_608_channel_number MedialiveChannel#source_608_channel_number}
  */
  readonly source608ChannelNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#source_608_track_number MedialiveChannel#source_608_track_number}
  */
  readonly source608TrackNumber?: number;
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
    source_608_track_number: cdktf.numberToTerraform(struct!.source608TrackNumber),
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
    if (this._source608TrackNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.source608TrackNumber = this._source608TrackNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._convert608To708 = undefined;
      this._scte20Detection = undefined;
      this._source608ChannelNumber = undefined;
      this._source608TrackNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._convert608To708 = value.convert608To708;
      this._scte20Detection = value.scte20Detection;
      this._source608ChannelNumber = value.source608ChannelNumber;
      this._source608TrackNumber = value.source608TrackNumber;
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

  // source_608_track_number - computed: false, optional: true, required: false
  private _source608TrackNumber?: number; 
  public get source608TrackNumber() {
    return this.getNumberAttribute('source_608_track_number');
  }
  public set source608TrackNumber(value: number) {
    this._source608TrackNumber = value;
  }
  public resetSource608TrackNumber() {
    this._source608TrackNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source608TrackNumberInput() {
    return this._source608TrackNumber;
  }
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#convert_608_to_708 MedialiveChannel#convert_608_to_708}
  */
  readonly convert608To708?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#source_608_channel_number MedialiveChannel#source_608_channel_number}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ocr_language MedialiveChannel#ocr_language}
  */
  readonly ocrLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#pid MedialiveChannel#pid}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#height MedialiveChannel#height}
  */
  readonly height: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#left_offset MedialiveChannel#left_offset}
  */
  readonly leftOffset: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#top_offset MedialiveChannel#top_offset}
  */
  readonly topOffset: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#width MedialiveChannel#width}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#page_number MedialiveChannel#page_number}
  */
  readonly pageNumber?: string;
  /**
  * output_rectangle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#output_rectangle MedialiveChannel#output_rectangle}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#ancillary_source_settings MedialiveChannel#ancillary_source_settings}
  */
  readonly ancillarySourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings;
  /**
  * dvb_tdt_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#dvb_tdt_settings MedialiveChannel#dvb_tdt_settings}
  */
  readonly dvbTdtSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettings;
  /**
  * embedded_source_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#embedded_source_settings MedialiveChannel#embedded_source_settings}
  */
  readonly embeddedSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings;
  /**
  * scte20_source_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte20_source_settings MedialiveChannel#scte20_source_settings}
  */
  readonly scte20SourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings;
  /**
  * scte27_source_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte27_source_settings MedialiveChannel#scte27_source_settings}
  */
  readonly scte27SourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings;
  /**
  * teletext_source_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#teletext_source_settings MedialiveChannel#teletext_source_settings}
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
    dvb_tdt_settings: medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettingsToTerraform(struct!.dvbTdtSettings),
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
    if (this._dvbTdtSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbTdtSettings = this._dvbTdtSettings?.internalValue;
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
      this._dvbTdtSettings.internalValue = undefined;
      this._embeddedSourceSettings.internalValue = undefined;
      this._scte20SourceSettings.internalValue = undefined;
      this._scte27SourceSettings.internalValue = undefined;
      this._teletextSourceSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ancillarySourceSettings.internalValue = value.ancillarySourceSettings;
      this._dvbTdtSettings.internalValue = value.dvbTdtSettings;
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

  // dvb_tdt_settings - computed: false, optional: true, required: false
  private _dvbTdtSettings = new MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettingsOutputReference(this, "dvb_tdt_settings");
  public get dvbTdtSettings() {
    return this._dvbTdtSettings;
  }
  public putDvbTdtSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbTdtSettings) {
    this._dvbTdtSettings.internalValue = value;
  }
  public resetDvbTdtSettings() {
    this._dvbTdtSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbTdtSettingsInput() {
    return this._dvbTdtSettings.internalValue;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#language_code MedialiveChannel#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * selector_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#selector_settings MedialiveChannel#selector_settings}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#bandwidth MedialiveChannel#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#buffer_segments MedialiveChannel#buffer_segments}
  */
  readonly bufferSegments?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#retries MedialiveChannel#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#retry_interval MedialiveChannel#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_source MedialiveChannel#scte35_source}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#server_validation MedialiveChannel#server_validation}
  */
  readonly serverValidation?: string;
  /**
  * hls_input_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#hls_input_settings MedialiveChannel#hls_input_settings}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#color_space MedialiveChannel#color_space}
  */
  readonly colorSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#color_space_usage MedialiveChannel#color_space_usage}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#deblock_filter MedialiveChannel#deblock_filter}
  */
  readonly deblockFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#denoise_filter MedialiveChannel#denoise_filter}
  */
  readonly denoiseFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#filter_strength MedialiveChannel#filter_strength}
  */
  readonly filterStrength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_filter MedialiveChannel#input_filter}
  */
  readonly inputFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
  */
  readonly scte35Pid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#smpte2038_data_preference MedialiveChannel#smpte2038_data_preference}
  */
  readonly smpte2038DataPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#source_end_behavior MedialiveChannel#source_end_behavior}
  */
  readonly sourceEndBehavior?: string;
  /**
  * audio_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#audio_selector MedialiveChannel#audio_selector}
  */
  readonly audioSelector?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable;
  /**
  * caption_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#caption_selector MedialiveChannel#caption_selector}
  */
  readonly captionSelector?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable;
  /**
  * network_input_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#network_input_settings MedialiveChannel#network_input_settings}
  */
  readonly networkInputSettings?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings;
  /**
  * video_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#video_selector MedialiveChannel#video_selector}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_attachment_name MedialiveChannel#input_attachment_name}
  */
  readonly inputAttachmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_id MedialiveChannel#input_id}
  */
  readonly inputId: string;
  /**
  * automatic_input_failover_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#automatic_input_failover_settings MedialiveChannel#automatic_input_failover_settings}
  */
  readonly automaticInputFailoverSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings;
  /**
  * input_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_settings MedialiveChannel#input_settings}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#codec MedialiveChannel#codec}
  */
  readonly codec: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#input_resolution MedialiveChannel#input_resolution}
  */
  readonly inputResolution: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#maximum_bitrate MedialiveChannel#maximum_bitrate}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#maintenance_day MedialiveChannel#maintenance_day}
  */
  readonly maintenanceDay: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#maintenance_start_time MedialiveChannel#maintenance_start_time}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#create MedialiveChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#delete MedialiveChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#update MedialiveChannel#update}
  */
  readonly update?: string;
}

export function medialiveChannelTimeoutsToTerraform(struct?: MedialiveChannelTimeoutsOutputReference | MedialiveChannelTimeouts | cdktf.IResolvable): any {
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
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#public_address_allocation_ids MedialiveChannel#public_address_allocation_ids}
  */
  readonly publicAddressAllocationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#security_group_ids MedialiveChannel#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel#subnet_ids MedialiveChannel#subnet_ids}
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel aws_medialive_channel}
*/
export class MedialiveChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_medialive_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/medialive_channel aws_medialive_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MedialiveChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_medialive_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._channelClass = config.channelClass;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._startChannel = config.startChannel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cdiInputSpecification.internalValue = config.cdiInputSpecification;
    this._destinations.internalValue = config.destinations;
    this._encoderSettings.internalValue = config.encoderSettings;
    this._inputAttachments.internalValue = config.inputAttachments;
    this._inputSpecification.internalValue = config.inputSpecification;
    this._maintenance.internalValue = config.maintenance;
    this._timeouts.internalValue = config.timeouts;
    this._vpc.internalValue = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_class - computed: false, optional: false, required: true
  private _channelClass?: string; 
  public get channelClass() {
    return this.getStringAttribute('channel_class');
  }
  public set channelClass(value: string) {
    this._channelClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelClassInput() {
    return this._channelClass;
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // start_channel - computed: false, optional: true, required: false
  private _startChannel?: boolean | cdktf.IResolvable; 
  public get startChannel() {
    return this.getBooleanAttribute('start_channel');
  }
  public set startChannel(value: boolean | cdktf.IResolvable) {
    this._startChannel = value;
  }
  public resetStartChannel() {
    this._startChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startChannelInput() {
    return this._startChannel;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // cdi_input_specification - computed: false, optional: true, required: false
  private _cdiInputSpecification = new MedialiveChannelCdiInputSpecificationOutputReference(this, "cdi_input_specification");
  public get cdiInputSpecification() {
    return this._cdiInputSpecification;
  }
  public putCdiInputSpecification(value: MedialiveChannelCdiInputSpecification) {
    this._cdiInputSpecification.internalValue = value;
  }
  public resetCdiInputSpecification() {
    this._cdiInputSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdiInputSpecificationInput() {
    return this._cdiInputSpecification.internalValue;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new MedialiveChannelDestinationsList(this, "destinations", true);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MedialiveChannelDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // encoder_settings - computed: false, optional: false, required: true
  private _encoderSettings = new MedialiveChannelEncoderSettingsOutputReference(this, "encoder_settings");
  public get encoderSettings() {
    return this._encoderSettings;
  }
  public putEncoderSettings(value: MedialiveChannelEncoderSettings) {
    this._encoderSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encoderSettingsInput() {
    return this._encoderSettings.internalValue;
  }

  // input_attachments - computed: false, optional: false, required: true
  private _inputAttachments = new MedialiveChannelInputAttachmentsList(this, "input_attachments", true);
  public get inputAttachments() {
    return this._inputAttachments;
  }
  public putInputAttachments(value: MedialiveChannelInputAttachments[] | cdktf.IResolvable) {
    this._inputAttachments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputAttachmentsInput() {
    return this._inputAttachments.internalValue;
  }

  // input_specification - computed: false, optional: false, required: true
  private _inputSpecification = new MedialiveChannelInputSpecificationOutputReference(this, "input_specification");
  public get inputSpecification() {
    return this._inputSpecification;
  }
  public putInputSpecification(value: MedialiveChannelInputSpecification) {
    this._inputSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSpecificationInput() {
    return this._inputSpecification.internalValue;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance = new MedialiveChannelMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }
  public putMaintenance(value: MedialiveChannelMaintenance) {
    this._maintenance.internalValue = value;
  }
  public resetMaintenance() {
    this._maintenance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MedialiveChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MedialiveChannelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new MedialiveChannelVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: MedialiveChannelVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_class: cdktf.stringToTerraform(this._channelClass),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      start_channel: cdktf.booleanToTerraform(this._startChannel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      cdi_input_specification: medialiveChannelCdiInputSpecificationToTerraform(this._cdiInputSpecification.internalValue),
      destinations: cdktf.listMapper(medialiveChannelDestinationsToTerraform, true)(this._destinations.internalValue),
      encoder_settings: medialiveChannelEncoderSettingsToTerraform(this._encoderSettings.internalValue),
      input_attachments: cdktf.listMapper(medialiveChannelInputAttachmentsToTerraform, true)(this._inputAttachments.internalValue),
      input_specification: medialiveChannelInputSpecificationToTerraform(this._inputSpecification.internalValue),
      maintenance: medialiveChannelMaintenanceToTerraform(this._maintenance.internalValue),
      timeouts: medialiveChannelTimeoutsToTerraform(this._timeouts.internalValue),
      vpc: medialiveChannelVpcToTerraform(this._vpc.internalValue),
    };
  }
}
