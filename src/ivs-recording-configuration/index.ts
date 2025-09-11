/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IvsRecordingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}
  */
  readonly recordingReconnectWindowSeconds?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#region IvsRecordingConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * destination_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#destination_configuration IvsRecordingConfiguration#destination_configuration}
  */
  readonly destinationConfiguration: IvsRecordingConfigurationDestinationConfiguration;
  /**
  * thumbnail_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#thumbnail_configuration IvsRecordingConfiguration#thumbnail_configuration}
  */
  readonly thumbnailConfiguration?: IvsRecordingConfigurationThumbnailConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#timeouts IvsRecordingConfiguration#timeouts}
  */
  readonly timeouts?: IvsRecordingConfigurationTimeouts;
}
export interface IvsRecordingConfigurationDestinationConfigurationS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}
  */
  readonly bucketName: string;
}

export function ivsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationS3OutputReference | IvsRecordingConfigurationDestinationConfigurationS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}


export function ivsRecordingConfigurationDestinationConfigurationS3ToHclTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationS3OutputReference | IvsRecordingConfigurationDestinationConfigurationS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IvsRecordingConfigurationDestinationConfigurationS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IvsRecordingConfigurationDestinationConfigurationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvsRecordingConfigurationDestinationConfigurationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }
}
export interface IvsRecordingConfigurationDestinationConfiguration {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#s3 IvsRecordingConfiguration#s3}
  */
  readonly s3: IvsRecordingConfigurationDestinationConfigurationS3;
}

export function ivsRecordingConfigurationDestinationConfigurationToTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationOutputReference | IvsRecordingConfigurationDestinationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: ivsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct!.s3),
  }
}


export function ivsRecordingConfigurationDestinationConfigurationToHclTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationOutputReference | IvsRecordingConfigurationDestinationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: ivsRecordingConfigurationDestinationConfigurationS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "IvsRecordingConfigurationDestinationConfigurationS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IvsRecordingConfigurationDestinationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IvsRecordingConfigurationDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvsRecordingConfigurationDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: false, required: true
  private _s3 = new IvsRecordingConfigurationDestinationConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: IvsRecordingConfigurationDestinationConfigurationS3) {
    this._s3.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface IvsRecordingConfigurationThumbnailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}
  */
  readonly recordingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}
  */
  readonly targetIntervalSeconds?: number;
}

export function ivsRecordingConfigurationThumbnailConfigurationToTerraform(struct?: IvsRecordingConfigurationThumbnailConfigurationOutputReference | IvsRecordingConfigurationThumbnailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recording_mode: cdktf.stringToTerraform(struct!.recordingMode),
    target_interval_seconds: cdktf.numberToTerraform(struct!.targetIntervalSeconds),
  }
}


export function ivsRecordingConfigurationThumbnailConfigurationToHclTerraform(struct?: IvsRecordingConfigurationThumbnailConfigurationOutputReference | IvsRecordingConfigurationThumbnailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recording_mode: {
      value: cdktf.stringToHclTerraform(struct!.recordingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.targetIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IvsRecordingConfigurationThumbnailConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IvsRecordingConfigurationThumbnailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingMode = this._recordingMode;
    }
    if (this._targetIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIntervalSeconds = this._targetIntervalSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvsRecordingConfigurationThumbnailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordingMode = undefined;
      this._targetIntervalSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordingMode = value.recordingMode;
      this._targetIntervalSeconds = value.targetIntervalSeconds;
    }
  }

  // recording_mode - computed: true, optional: true, required: false
  private _recordingMode?: string; 
  public get recordingMode() {
    return this.getStringAttribute('recording_mode');
  }
  public set recordingMode(value: string) {
    this._recordingMode = value;
  }
  public resetRecordingMode() {
    this._recordingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingModeInput() {
    return this._recordingMode;
  }

  // target_interval_seconds - computed: true, optional: true, required: false
  private _targetIntervalSeconds?: number; 
  public get targetIntervalSeconds() {
    return this.getNumberAttribute('target_interval_seconds');
  }
  public set targetIntervalSeconds(value: number) {
    this._targetIntervalSeconds = value;
  }
  public resetTargetIntervalSeconds() {
    this._targetIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIntervalSecondsInput() {
    return this._targetIntervalSeconds;
  }
}
export interface IvsRecordingConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#create IvsRecordingConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}
  */
  readonly delete?: string;
}

export function ivsRecordingConfigurationTimeoutsToTerraform(struct?: IvsRecordingConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ivsRecordingConfigurationTimeoutsToHclTerraform(struct?: IvsRecordingConfigurationTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IvsRecordingConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IvsRecordingConfigurationTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvsRecordingConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration aws_ivs_recording_configuration}
*/
export class IvsRecordingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ivs_recording_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IvsRecordingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IvsRecordingConfiguration to import
  * @param importFromId The id of the existing IvsRecordingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IvsRecordingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ivs_recording_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ivs_recording_configuration aws_ivs_recording_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvsRecordingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IvsRecordingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ivs_recording_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
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
    this._id = config.id;
    this._name = config.name;
    this._recordingReconnectWindowSeconds = config.recordingReconnectWindowSeconds;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._destinationConfiguration.internalValue = config.destinationConfiguration;
    this._thumbnailConfiguration.internalValue = config.thumbnailConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // recording_reconnect_window_seconds - computed: true, optional: true, required: false
  private _recordingReconnectWindowSeconds?: number; 
  public get recordingReconnectWindowSeconds() {
    return this.getNumberAttribute('recording_reconnect_window_seconds');
  }
  public set recordingReconnectWindowSeconds(value: number) {
    this._recordingReconnectWindowSeconds = value;
  }
  public resetRecordingReconnectWindowSeconds() {
    this._recordingReconnectWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingReconnectWindowSecondsInput() {
    return this._recordingReconnectWindowSeconds;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // destination_configuration - computed: false, optional: false, required: true
  private _destinationConfiguration = new IvsRecordingConfigurationDestinationConfigurationOutputReference(this, "destination_configuration");
  public get destinationConfiguration() {
    return this._destinationConfiguration;
  }
  public putDestinationConfiguration(value: IvsRecordingConfigurationDestinationConfiguration) {
    this._destinationConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationInput() {
    return this._destinationConfiguration.internalValue;
  }

  // thumbnail_configuration - computed: false, optional: true, required: false
  private _thumbnailConfiguration = new IvsRecordingConfigurationThumbnailConfigurationOutputReference(this, "thumbnail_configuration");
  public get thumbnailConfiguration() {
    return this._thumbnailConfiguration;
  }
  public putThumbnailConfiguration(value: IvsRecordingConfigurationThumbnailConfiguration) {
    this._thumbnailConfiguration.internalValue = value;
  }
  public resetThumbnailConfiguration() {
    this._thumbnailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigurationInput() {
    return this._thumbnailConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IvsRecordingConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IvsRecordingConfigurationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recording_reconnect_window_seconds: cdktf.numberToTerraform(this._recordingReconnectWindowSeconds),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      destination_configuration: ivsRecordingConfigurationDestinationConfigurationToTerraform(this._destinationConfiguration.internalValue),
      thumbnail_configuration: ivsRecordingConfigurationThumbnailConfigurationToTerraform(this._thumbnailConfiguration.internalValue),
      timeouts: ivsRecordingConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      recording_reconnect_window_seconds: {
        value: cdktf.numberToHclTerraform(this._recordingReconnectWindowSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destination_configuration: {
        value: ivsRecordingConfigurationDestinationConfigurationToHclTerraform(this._destinationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IvsRecordingConfigurationDestinationConfigurationList",
      },
      thumbnail_configuration: {
        value: ivsRecordingConfigurationThumbnailConfigurationToHclTerraform(this._thumbnailConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IvsRecordingConfigurationThumbnailConfigurationList",
      },
      timeouts: {
        value: ivsRecordingConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IvsRecordingConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
