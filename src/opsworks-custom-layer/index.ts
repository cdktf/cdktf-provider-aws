// https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksCustomLayerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_elastic_ips OpsworksCustomLayer#auto_assign_elastic_ips}
  */
  readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_assign_public_ips OpsworksCustomLayer#auto_assign_public_ips}
  */
  readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#auto_healing OpsworksCustomLayer#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_configure_recipes OpsworksCustomLayer#custom_configure_recipes}
  */
  readonly customConfigureRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_deploy_recipes OpsworksCustomLayer#custom_deploy_recipes}
  */
  readonly customDeployRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_instance_profile_arn OpsworksCustomLayer#custom_instance_profile_arn}
  */
  readonly customInstanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_json OpsworksCustomLayer#custom_json}
  */
  readonly customJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_security_group_ids OpsworksCustomLayer#custom_security_group_ids}
  */
  readonly customSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_setup_recipes OpsworksCustomLayer#custom_setup_recipes}
  */
  readonly customSetupRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_shutdown_recipes OpsworksCustomLayer#custom_shutdown_recipes}
  */
  readonly customShutdownRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#custom_undeploy_recipes OpsworksCustomLayer#custom_undeploy_recipes}
  */
  readonly customUndeployRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#drain_elb_on_shutdown OpsworksCustomLayer#drain_elb_on_shutdown}
  */
  readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#elastic_load_balancer OpsworksCustomLayer#elastic_load_balancer}
  */
  readonly elasticLoadBalancer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#id OpsworksCustomLayer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#install_updates_on_boot OpsworksCustomLayer#install_updates_on_boot}
  */
  readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_shutdown_timeout OpsworksCustomLayer#instance_shutdown_timeout}
  */
  readonly instanceShutdownTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#name OpsworksCustomLayer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#short_name OpsworksCustomLayer#short_name}
  */
  readonly shortName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#stack_id OpsworksCustomLayer#stack_id}
  */
  readonly stackId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#system_packages OpsworksCustomLayer#system_packages}
  */
  readonly systemPackages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags OpsworksCustomLayer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#tags_all OpsworksCustomLayer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#use_ebs_optimized_instances OpsworksCustomLayer#use_ebs_optimized_instances}
  */
  readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
  /**
  * cloudwatch_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cloudwatch_configuration OpsworksCustomLayer#cloudwatch_configuration}
  */
  readonly cloudwatchConfiguration?: OpsworksCustomLayerCloudwatchConfiguration;
  /**
  * ebs_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ebs_volume OpsworksCustomLayer#ebs_volume}
  */
  readonly ebsVolume?: OpsworksCustomLayerEbsVolume[] | cdktf.IResolvable;
  /**
  * load_based_auto_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_based_auto_scaling OpsworksCustomLayer#load_based_auto_scaling}
  */
  readonly loadBasedAutoScaling?: OpsworksCustomLayerLoadBasedAutoScaling;
}
export interface OpsworksCustomLayerCloudwatchConfigurationLogStreams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#batch_count OpsworksCustomLayer#batch_count}
  */
  readonly batchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#batch_size OpsworksCustomLayer#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#buffer_duration OpsworksCustomLayer#buffer_duration}
  */
  readonly bufferDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#datetime_format OpsworksCustomLayer#datetime_format}
  */
  readonly datetimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#encoding OpsworksCustomLayer#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#file OpsworksCustomLayer#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#file_fingerprint_lines OpsworksCustomLayer#file_fingerprint_lines}
  */
  readonly fileFingerprintLines?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#initial_position OpsworksCustomLayer#initial_position}
  */
  readonly initialPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#log_group_name OpsworksCustomLayer#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#multiline_start_pattern OpsworksCustomLayer#multiline_start_pattern}
  */
  readonly multilineStartPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#time_zone OpsworksCustomLayer#time_zone}
  */
  readonly timeZone?: string;
}

export function opsworksCustomLayerCloudwatchConfigurationLogStreamsToTerraform(struct?: OpsworksCustomLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_count: cdktf.numberToTerraform(struct!.batchCount),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    buffer_duration: cdktf.numberToTerraform(struct!.bufferDuration),
    datetime_format: cdktf.stringToTerraform(struct!.datetimeFormat),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    file: cdktf.stringToTerraform(struct!.file),
    file_fingerprint_lines: cdktf.stringToTerraform(struct!.fileFingerprintLines),
    initial_position: cdktf.stringToTerraform(struct!.initialPosition),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    multiline_start_pattern: cdktf.stringToTerraform(struct!.multilineStartPattern),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export class OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsworksCustomLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCount = this._batchCount;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._bufferDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferDuration = this._bufferDuration;
    }
    if (this._datetimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimeFormat = this._datetimeFormat;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._fileFingerprintLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFingerprintLines = this._fileFingerprintLines;
    }
    if (this._initialPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialPosition = this._initialPosition;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._multilineStartPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineStartPattern = this._multilineStartPattern;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksCustomLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchCount = undefined;
      this._batchSize = undefined;
      this._bufferDuration = undefined;
      this._datetimeFormat = undefined;
      this._encoding = undefined;
      this._file = undefined;
      this._fileFingerprintLines = undefined;
      this._initialPosition = undefined;
      this._logGroupName = undefined;
      this._multilineStartPattern = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchCount = value.batchCount;
      this._batchSize = value.batchSize;
      this._bufferDuration = value.bufferDuration;
      this._datetimeFormat = value.datetimeFormat;
      this._encoding = value.encoding;
      this._file = value.file;
      this._fileFingerprintLines = value.fileFingerprintLines;
      this._initialPosition = value.initialPosition;
      this._logGroupName = value.logGroupName;
      this._multilineStartPattern = value.multilineStartPattern;
      this._timeZone = value.timeZone;
    }
  }

  // batch_count - computed: false, optional: true, required: false
  private _batchCount?: number; 
  public get batchCount() {
    return this.getNumberAttribute('batch_count');
  }
  public set batchCount(value: number) {
    this._batchCount = value;
  }
  public resetBatchCount() {
    this._batchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCountInput() {
    return this._batchCount;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // buffer_duration - computed: false, optional: true, required: false
  private _bufferDuration?: number; 
  public get bufferDuration() {
    return this.getNumberAttribute('buffer_duration');
  }
  public set bufferDuration(value: number) {
    this._bufferDuration = value;
  }
  public resetBufferDuration() {
    this._bufferDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferDurationInput() {
    return this._bufferDuration;
  }

  // datetime_format - computed: false, optional: true, required: false
  private _datetimeFormat?: string; 
  public get datetimeFormat() {
    return this.getStringAttribute('datetime_format');
  }
  public set datetimeFormat(value: string) {
    this._datetimeFormat = value;
  }
  public resetDatetimeFormat() {
    this._datetimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeFormatInput() {
    return this._datetimeFormat;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // file_fingerprint_lines - computed: false, optional: true, required: false
  private _fileFingerprintLines?: string; 
  public get fileFingerprintLines() {
    return this.getStringAttribute('file_fingerprint_lines');
  }
  public set fileFingerprintLines(value: string) {
    this._fileFingerprintLines = value;
  }
  public resetFileFingerprintLines() {
    this._fileFingerprintLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFingerprintLinesInput() {
    return this._fileFingerprintLines;
  }

  // initial_position - computed: false, optional: true, required: false
  private _initialPosition?: string; 
  public get initialPosition() {
    return this.getStringAttribute('initial_position');
  }
  public set initialPosition(value: string) {
    this._initialPosition = value;
  }
  public resetInitialPosition() {
    this._initialPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPositionInput() {
    return this._initialPosition;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // multiline_start_pattern - computed: false, optional: true, required: false
  private _multilineStartPattern?: string; 
  public get multilineStartPattern() {
    return this.getStringAttribute('multiline_start_pattern');
  }
  public set multilineStartPattern(value: string) {
    this._multilineStartPattern = value;
  }
  public resetMultilineStartPattern() {
    this._multilineStartPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineStartPatternInput() {
    return this._multilineStartPattern;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class OpsworksCustomLayerCloudwatchConfigurationLogStreamsList extends cdktf.ComplexList {
  public internalValue? : OpsworksCustomLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable

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
  public get(index: number): OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference {
    return new OpsworksCustomLayerCloudwatchConfigurationLogStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsworksCustomLayerCloudwatchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#enabled OpsworksCustomLayer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * log_streams block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#log_streams OpsworksCustomLayer#log_streams}
  */
  readonly logStreams?: OpsworksCustomLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
}

export function opsworksCustomLayerCloudwatchConfigurationToTerraform(struct?: OpsworksCustomLayerCloudwatchConfigurationOutputReference | OpsworksCustomLayerCloudwatchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_streams: cdktf.listMapper(opsworksCustomLayerCloudwatchConfigurationLogStreamsToTerraform, true)(struct!.logStreams),
  }
}

export class OpsworksCustomLayerCloudwatchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksCustomLayerCloudwatchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logStreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreams = this._logStreams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksCustomLayerCloudwatchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logStreams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logStreams.internalValue = value.logStreams;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_streams - computed: false, optional: true, required: false
  private _logStreams = new OpsworksCustomLayerCloudwatchConfigurationLogStreamsList(this, "log_streams", false);
  public get logStreams() {
    return this._logStreams;
  }
  public putLogStreams(value: OpsworksCustomLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable) {
    this._logStreams.internalValue = value;
  }
  public resetLogStreams() {
    this._logStreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamsInput() {
    return this._logStreams.internalValue;
  }
}
export interface OpsworksCustomLayerEbsVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#encrypted OpsworksCustomLayer#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#iops OpsworksCustomLayer#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#mount_point OpsworksCustomLayer#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#number_of_disks OpsworksCustomLayer#number_of_disks}
  */
  readonly numberOfDisks: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#raid_level OpsworksCustomLayer#raid_level}
  */
  readonly raidLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#size OpsworksCustomLayer#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#type OpsworksCustomLayer#type}
  */
  readonly type?: string;
}

export function opsworksCustomLayerEbsVolumeToTerraform(struct?: OpsworksCustomLayerEbsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
    raid_level: cdktf.stringToTerraform(struct!.raidLevel),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OpsworksCustomLayerEbsVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsworksCustomLayerEbsVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._numberOfDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDisks = this._numberOfDisks;
    }
    if (this._raidLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidLevel = this._raidLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksCustomLayerEbsVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._mountPoint = undefined;
      this._numberOfDisks = undefined;
      this._raidLevel = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._mountPoint = value.mountPoint;
      this._numberOfDisks = value.numberOfDisks;
      this._raidLevel = value.raidLevel;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // number_of_disks - computed: false, optional: false, required: true
  private _numberOfDisks?: number; 
  public get numberOfDisks() {
    return this.getNumberAttribute('number_of_disks');
  }
  public set numberOfDisks(value: number) {
    this._numberOfDisks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDisksInput() {
    return this._numberOfDisks;
  }

  // raid_level - computed: false, optional: true, required: false
  private _raidLevel?: string; 
  public get raidLevel() {
    return this.getStringAttribute('raid_level');
  }
  public set raidLevel(value: string) {
    this._raidLevel = value;
  }
  public resetRaidLevel() {
    this._raidLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidLevelInput() {
    return this._raidLevel;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OpsworksCustomLayerEbsVolumeList extends cdktf.ComplexList {
  public internalValue? : OpsworksCustomLayerEbsVolume[] | cdktf.IResolvable

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
  public get(index: number): OpsworksCustomLayerEbsVolumeOutputReference {
    return new OpsworksCustomLayerEbsVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsworksCustomLayerLoadBasedAutoScalingDownscaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#alarms OpsworksCustomLayer#alarms}
  */
  readonly alarms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cpu_threshold OpsworksCustomLayer#cpu_threshold}
  */
  readonly cpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ignore_metrics_time OpsworksCustomLayer#ignore_metrics_time}
  */
  readonly ignoreMetricsTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_count OpsworksCustomLayer#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_threshold OpsworksCustomLayer#load_threshold}
  */
  readonly loadThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#memory_threshold OpsworksCustomLayer#memory_threshold}
  */
  readonly memoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#thresholds_wait_time OpsworksCustomLayer#thresholds_wait_time}
  */
  readonly thresholdsWaitTime?: number;
}

export function opsworksCustomLayerLoadBasedAutoScalingDownscalingToTerraform(struct?: OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksCustomLayerLoadBasedAutoScalingDownscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarms),
    cpu_threshold: cdktf.numberToTerraform(struct!.cpuThreshold),
    ignore_metrics_time: cdktf.numberToTerraform(struct!.ignoreMetricsTime),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    load_threshold: cdktf.numberToTerraform(struct!.loadThreshold),
    memory_threshold: cdktf.numberToTerraform(struct!.memoryThreshold),
    thresholds_wait_time: cdktf.numberToTerraform(struct!.thresholdsWaitTime),
  }
}

export class OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksCustomLayerLoadBasedAutoScalingDownscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    if (this._cpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThreshold = this._cpuThreshold;
    }
    if (this._ignoreMetricsTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMetricsTime = this._ignoreMetricsTime;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._loadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadThreshold = this._loadThreshold;
    }
    if (this._memoryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryThreshold = this._memoryThreshold;
    }
    if (this._thresholdsWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdsWaitTime = this._thresholdsWaitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksCustomLayerLoadBasedAutoScalingDownscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms = undefined;
      this._cpuThreshold = undefined;
      this._ignoreMetricsTime = undefined;
      this._instanceCount = undefined;
      this._loadThreshold = undefined;
      this._memoryThreshold = undefined;
      this._thresholdsWaitTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms = value.alarms;
      this._cpuThreshold = value.cpuThreshold;
      this._ignoreMetricsTime = value.ignoreMetricsTime;
      this._instanceCount = value.instanceCount;
      this._loadThreshold = value.loadThreshold;
      this._memoryThreshold = value.memoryThreshold;
      this._thresholdsWaitTime = value.thresholdsWaitTime;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return this.getListAttribute('alarms');
  }
  public set alarms(value: string[]) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms;
  }

  // cpu_threshold - computed: false, optional: true, required: false
  private _cpuThreshold?: number; 
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: number) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
  }

  // ignore_metrics_time - computed: false, optional: true, required: false
  private _ignoreMetricsTime?: number; 
  public get ignoreMetricsTime() {
    return this.getNumberAttribute('ignore_metrics_time');
  }
  public set ignoreMetricsTime(value: number) {
    this._ignoreMetricsTime = value;
  }
  public resetIgnoreMetricsTime() {
    this._ignoreMetricsTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMetricsTimeInput() {
    return this._ignoreMetricsTime;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // load_threshold - computed: false, optional: true, required: false
  private _loadThreshold?: number; 
  public get loadThreshold() {
    return this.getNumberAttribute('load_threshold');
  }
  public set loadThreshold(value: number) {
    this._loadThreshold = value;
  }
  public resetLoadThreshold() {
    this._loadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadThresholdInput() {
    return this._loadThreshold;
  }

  // memory_threshold - computed: false, optional: true, required: false
  private _memoryThreshold?: number; 
  public get memoryThreshold() {
    return this.getNumberAttribute('memory_threshold');
  }
  public set memoryThreshold(value: number) {
    this._memoryThreshold = value;
  }
  public resetMemoryThreshold() {
    this._memoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryThresholdInput() {
    return this._memoryThreshold;
  }

  // thresholds_wait_time - computed: false, optional: true, required: false
  private _thresholdsWaitTime?: number; 
  public get thresholdsWaitTime() {
    return this.getNumberAttribute('thresholds_wait_time');
  }
  public set thresholdsWaitTime(value: number) {
    this._thresholdsWaitTime = value;
  }
  public resetThresholdsWaitTime() {
    this._thresholdsWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsWaitTimeInput() {
    return this._thresholdsWaitTime;
  }
}
export interface OpsworksCustomLayerLoadBasedAutoScalingUpscaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#alarms OpsworksCustomLayer#alarms}
  */
  readonly alarms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#cpu_threshold OpsworksCustomLayer#cpu_threshold}
  */
  readonly cpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#ignore_metrics_time OpsworksCustomLayer#ignore_metrics_time}
  */
  readonly ignoreMetricsTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#instance_count OpsworksCustomLayer#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#load_threshold OpsworksCustomLayer#load_threshold}
  */
  readonly loadThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#memory_threshold OpsworksCustomLayer#memory_threshold}
  */
  readonly memoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#thresholds_wait_time OpsworksCustomLayer#thresholds_wait_time}
  */
  readonly thresholdsWaitTime?: number;
}

export function opsworksCustomLayerLoadBasedAutoScalingUpscalingToTerraform(struct?: OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksCustomLayerLoadBasedAutoScalingUpscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarms),
    cpu_threshold: cdktf.numberToTerraform(struct!.cpuThreshold),
    ignore_metrics_time: cdktf.numberToTerraform(struct!.ignoreMetricsTime),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    load_threshold: cdktf.numberToTerraform(struct!.loadThreshold),
    memory_threshold: cdktf.numberToTerraform(struct!.memoryThreshold),
    thresholds_wait_time: cdktf.numberToTerraform(struct!.thresholdsWaitTime),
  }
}

export class OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksCustomLayerLoadBasedAutoScalingUpscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    if (this._cpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThreshold = this._cpuThreshold;
    }
    if (this._ignoreMetricsTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMetricsTime = this._ignoreMetricsTime;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._loadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadThreshold = this._loadThreshold;
    }
    if (this._memoryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryThreshold = this._memoryThreshold;
    }
    if (this._thresholdsWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdsWaitTime = this._thresholdsWaitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksCustomLayerLoadBasedAutoScalingUpscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms = undefined;
      this._cpuThreshold = undefined;
      this._ignoreMetricsTime = undefined;
      this._instanceCount = undefined;
      this._loadThreshold = undefined;
      this._memoryThreshold = undefined;
      this._thresholdsWaitTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms = value.alarms;
      this._cpuThreshold = value.cpuThreshold;
      this._ignoreMetricsTime = value.ignoreMetricsTime;
      this._instanceCount = value.instanceCount;
      this._loadThreshold = value.loadThreshold;
      this._memoryThreshold = value.memoryThreshold;
      this._thresholdsWaitTime = value.thresholdsWaitTime;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return this.getListAttribute('alarms');
  }
  public set alarms(value: string[]) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms;
  }

  // cpu_threshold - computed: false, optional: true, required: false
  private _cpuThreshold?: number; 
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: number) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
  }

  // ignore_metrics_time - computed: false, optional: true, required: false
  private _ignoreMetricsTime?: number; 
  public get ignoreMetricsTime() {
    return this.getNumberAttribute('ignore_metrics_time');
  }
  public set ignoreMetricsTime(value: number) {
    this._ignoreMetricsTime = value;
  }
  public resetIgnoreMetricsTime() {
    this._ignoreMetricsTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMetricsTimeInput() {
    return this._ignoreMetricsTime;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // load_threshold - computed: false, optional: true, required: false
  private _loadThreshold?: number; 
  public get loadThreshold() {
    return this.getNumberAttribute('load_threshold');
  }
  public set loadThreshold(value: number) {
    this._loadThreshold = value;
  }
  public resetLoadThreshold() {
    this._loadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadThresholdInput() {
    return this._loadThreshold;
  }

  // memory_threshold - computed: false, optional: true, required: false
  private _memoryThreshold?: number; 
  public get memoryThreshold() {
    return this.getNumberAttribute('memory_threshold');
  }
  public set memoryThreshold(value: number) {
    this._memoryThreshold = value;
  }
  public resetMemoryThreshold() {
    this._memoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryThresholdInput() {
    return this._memoryThreshold;
  }

  // thresholds_wait_time - computed: false, optional: true, required: false
  private _thresholdsWaitTime?: number; 
  public get thresholdsWaitTime() {
    return this.getNumberAttribute('thresholds_wait_time');
  }
  public set thresholdsWaitTime(value: number) {
    this._thresholdsWaitTime = value;
  }
  public resetThresholdsWaitTime() {
    this._thresholdsWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsWaitTimeInput() {
    return this._thresholdsWaitTime;
  }
}
export interface OpsworksCustomLayerLoadBasedAutoScaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#enable OpsworksCustomLayer#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * downscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#downscaling OpsworksCustomLayer#downscaling}
  */
  readonly downscaling?: OpsworksCustomLayerLoadBasedAutoScalingDownscaling;
  /**
  * upscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer#upscaling OpsworksCustomLayer#upscaling}
  */
  readonly upscaling?: OpsworksCustomLayerLoadBasedAutoScalingUpscaling;
}

export function opsworksCustomLayerLoadBasedAutoScalingToTerraform(struct?: OpsworksCustomLayerLoadBasedAutoScalingOutputReference | OpsworksCustomLayerLoadBasedAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    downscaling: opsworksCustomLayerLoadBasedAutoScalingDownscalingToTerraform(struct!.downscaling),
    upscaling: opsworksCustomLayerLoadBasedAutoScalingUpscalingToTerraform(struct!.upscaling),
  }
}

export class OpsworksCustomLayerLoadBasedAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksCustomLayerLoadBasedAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._downscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downscaling = this._downscaling?.internalValue;
    }
    if (this._upscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upscaling = this._upscaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksCustomLayerLoadBasedAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._downscaling.internalValue = undefined;
      this._upscaling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._downscaling.internalValue = value.downscaling;
      this._upscaling.internalValue = value.upscaling;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // downscaling - computed: false, optional: true, required: false
  private _downscaling = new OpsworksCustomLayerLoadBasedAutoScalingDownscalingOutputReference(this, "downscaling");
  public get downscaling() {
    return this._downscaling;
  }
  public putDownscaling(value: OpsworksCustomLayerLoadBasedAutoScalingDownscaling) {
    this._downscaling.internalValue = value;
  }
  public resetDownscaling() {
    this._downscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downscalingInput() {
    return this._downscaling.internalValue;
  }

  // upscaling - computed: false, optional: true, required: false
  private _upscaling = new OpsworksCustomLayerLoadBasedAutoScalingUpscalingOutputReference(this, "upscaling");
  public get upscaling() {
    return this._upscaling;
  }
  public putUpscaling(value: OpsworksCustomLayerLoadBasedAutoScalingUpscaling) {
    this._upscaling.internalValue = value;
  }
  public resetUpscaling() {
    this._upscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upscalingInput() {
    return this._upscaling.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer aws_opsworks_custom_layer}
*/
export class OpsworksCustomLayer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opsworks_custom_layer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer aws_opsworks_custom_layer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksCustomLayerConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksCustomLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_custom_layer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._autoAssignElasticIps = config.autoAssignElasticIps;
    this._autoAssignPublicIps = config.autoAssignPublicIps;
    this._autoHealing = config.autoHealing;
    this._customConfigureRecipes = config.customConfigureRecipes;
    this._customDeployRecipes = config.customDeployRecipes;
    this._customInstanceProfileArn = config.customInstanceProfileArn;
    this._customJson = config.customJson;
    this._customSecurityGroupIds = config.customSecurityGroupIds;
    this._customSetupRecipes = config.customSetupRecipes;
    this._customShutdownRecipes = config.customShutdownRecipes;
    this._customUndeployRecipes = config.customUndeployRecipes;
    this._drainElbOnShutdown = config.drainElbOnShutdown;
    this._elasticLoadBalancer = config.elasticLoadBalancer;
    this._id = config.id;
    this._installUpdatesOnBoot = config.installUpdatesOnBoot;
    this._instanceShutdownTimeout = config.instanceShutdownTimeout;
    this._name = config.name;
    this._shortName = config.shortName;
    this._stackId = config.stackId;
    this._systemPackages = config.systemPackages;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
    this._cloudwatchConfiguration.internalValue = config.cloudwatchConfiguration;
    this._ebsVolume.internalValue = config.ebsVolume;
    this._loadBasedAutoScaling.internalValue = config.loadBasedAutoScaling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_assign_elastic_ips - computed: false, optional: true, required: false
  private _autoAssignElasticIps?: boolean | cdktf.IResolvable; 
  public get autoAssignElasticIps() {
    return this.getBooleanAttribute('auto_assign_elastic_ips');
  }
  public set autoAssignElasticIps(value: boolean | cdktf.IResolvable) {
    this._autoAssignElasticIps = value;
  }
  public resetAutoAssignElasticIps() {
    this._autoAssignElasticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignElasticIpsInput() {
    return this._autoAssignElasticIps;
  }

  // auto_assign_public_ips - computed: false, optional: true, required: false
  private _autoAssignPublicIps?: boolean | cdktf.IResolvable; 
  public get autoAssignPublicIps() {
    return this.getBooleanAttribute('auto_assign_public_ips');
  }
  public set autoAssignPublicIps(value: boolean | cdktf.IResolvable) {
    this._autoAssignPublicIps = value;
  }
  public resetAutoAssignPublicIps() {
    this._autoAssignPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignPublicIpsInput() {
    return this._autoAssignPublicIps;
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // custom_configure_recipes - computed: false, optional: true, required: false
  private _customConfigureRecipes?: string[]; 
  public get customConfigureRecipes() {
    return this.getListAttribute('custom_configure_recipes');
  }
  public set customConfigureRecipes(value: string[]) {
    this._customConfigureRecipes = value;
  }
  public resetCustomConfigureRecipes() {
    this._customConfigureRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigureRecipesInput() {
    return this._customConfigureRecipes;
  }

  // custom_deploy_recipes - computed: false, optional: true, required: false
  private _customDeployRecipes?: string[]; 
  public get customDeployRecipes() {
    return this.getListAttribute('custom_deploy_recipes');
  }
  public set customDeployRecipes(value: string[]) {
    this._customDeployRecipes = value;
  }
  public resetCustomDeployRecipes() {
    this._customDeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeployRecipesInput() {
    return this._customDeployRecipes;
  }

  // custom_instance_profile_arn - computed: false, optional: true, required: false
  private _customInstanceProfileArn?: string; 
  public get customInstanceProfileArn() {
    return this.getStringAttribute('custom_instance_profile_arn');
  }
  public set customInstanceProfileArn(value: string) {
    this._customInstanceProfileArn = value;
  }
  public resetCustomInstanceProfileArn() {
    this._customInstanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstanceProfileArnInput() {
    return this._customInstanceProfileArn;
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string; 
  public get customJson() {
    return this.getStringAttribute('custom_json');
  }
  public set customJson(value: string) {
    this._customJson = value;
  }
  public resetCustomJson() {
    this._customJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJsonInput() {
    return this._customJson;
  }

  // custom_security_group_ids - computed: false, optional: true, required: false
  private _customSecurityGroupIds?: string[]; 
  public get customSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_security_group_ids'));
  }
  public set customSecurityGroupIds(value: string[]) {
    this._customSecurityGroupIds = value;
  }
  public resetCustomSecurityGroupIds() {
    this._customSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupIdsInput() {
    return this._customSecurityGroupIds;
  }

  // custom_setup_recipes - computed: false, optional: true, required: false
  private _customSetupRecipes?: string[]; 
  public get customSetupRecipes() {
    return this.getListAttribute('custom_setup_recipes');
  }
  public set customSetupRecipes(value: string[]) {
    this._customSetupRecipes = value;
  }
  public resetCustomSetupRecipes() {
    this._customSetupRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupRecipesInput() {
    return this._customSetupRecipes;
  }

  // custom_shutdown_recipes - computed: false, optional: true, required: false
  private _customShutdownRecipes?: string[]; 
  public get customShutdownRecipes() {
    return this.getListAttribute('custom_shutdown_recipes');
  }
  public set customShutdownRecipes(value: string[]) {
    this._customShutdownRecipes = value;
  }
  public resetCustomShutdownRecipes() {
    this._customShutdownRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customShutdownRecipesInput() {
    return this._customShutdownRecipes;
  }

  // custom_undeploy_recipes - computed: false, optional: true, required: false
  private _customUndeployRecipes?: string[]; 
  public get customUndeployRecipes() {
    return this.getListAttribute('custom_undeploy_recipes');
  }
  public set customUndeployRecipes(value: string[]) {
    this._customUndeployRecipes = value;
  }
  public resetCustomUndeployRecipes() {
    this._customUndeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUndeployRecipesInput() {
    return this._customUndeployRecipes;
  }

  // drain_elb_on_shutdown - computed: false, optional: true, required: false
  private _drainElbOnShutdown?: boolean | cdktf.IResolvable; 
  public get drainElbOnShutdown() {
    return this.getBooleanAttribute('drain_elb_on_shutdown');
  }
  public set drainElbOnShutdown(value: boolean | cdktf.IResolvable) {
    this._drainElbOnShutdown = value;
  }
  public resetDrainElbOnShutdown() {
    this._drainElbOnShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainElbOnShutdownInput() {
    return this._drainElbOnShutdown;
  }

  // elastic_load_balancer - computed: false, optional: true, required: false
  private _elasticLoadBalancer?: string; 
  public get elasticLoadBalancer() {
    return this.getStringAttribute('elastic_load_balancer');
  }
  public set elasticLoadBalancer(value: string) {
    this._elasticLoadBalancer = value;
  }
  public resetElasticLoadBalancer() {
    this._elasticLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancerInput() {
    return this._elasticLoadBalancer;
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

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean | cdktf.IResolvable; 
  public get installUpdatesOnBoot() {
    return this.getBooleanAttribute('install_updates_on_boot');
  }
  public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable) {
    this._installUpdatesOnBoot = value;
  }
  public resetInstallUpdatesOnBoot() {
    this._installUpdatesOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installUpdatesOnBootInput() {
    return this._installUpdatesOnBoot;
  }

  // instance_shutdown_timeout - computed: false, optional: true, required: false
  private _instanceShutdownTimeout?: number; 
  public get instanceShutdownTimeout() {
    return this.getNumberAttribute('instance_shutdown_timeout');
  }
  public set instanceShutdownTimeout(value: number) {
    this._instanceShutdownTimeout = value;
  }
  public resetInstanceShutdownTimeout() {
    this._instanceShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShutdownTimeoutInput() {
    return this._instanceShutdownTimeout;
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

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[]; 
  public get systemPackages() {
    return cdktf.Fn.tolist(this.getListAttribute('system_packages'));
  }
  public set systemPackages(value: string[]) {
    this._systemPackages = value;
  }
  public resetSystemPackages() {
    this._systemPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPackagesInput() {
    return this._systemPackages;
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

  // use_ebs_optimized_instances - computed: false, optional: true, required: false
  private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable; 
  public get useEbsOptimizedInstances() {
    return this.getBooleanAttribute('use_ebs_optimized_instances');
  }
  public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable) {
    this._useEbsOptimizedInstances = value;
  }
  public resetUseEbsOptimizedInstances() {
    this._useEbsOptimizedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEbsOptimizedInstancesInput() {
    return this._useEbsOptimizedInstances;
  }

  // cloudwatch_configuration - computed: false, optional: true, required: false
  private _cloudwatchConfiguration = new OpsworksCustomLayerCloudwatchConfigurationOutputReference(this, "cloudwatch_configuration");
  public get cloudwatchConfiguration() {
    return this._cloudwatchConfiguration;
  }
  public putCloudwatchConfiguration(value: OpsworksCustomLayerCloudwatchConfiguration) {
    this._cloudwatchConfiguration.internalValue = value;
  }
  public resetCloudwatchConfiguration() {
    this._cloudwatchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchConfigurationInput() {
    return this._cloudwatchConfiguration.internalValue;
  }

  // ebs_volume - computed: false, optional: true, required: false
  private _ebsVolume = new OpsworksCustomLayerEbsVolumeList(this, "ebs_volume", true);
  public get ebsVolume() {
    return this._ebsVolume;
  }
  public putEbsVolume(value: OpsworksCustomLayerEbsVolume[] | cdktf.IResolvable) {
    this._ebsVolume.internalValue = value;
  }
  public resetEbsVolume() {
    this._ebsVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeInput() {
    return this._ebsVolume.internalValue;
  }

  // load_based_auto_scaling - computed: false, optional: true, required: false
  private _loadBasedAutoScaling = new OpsworksCustomLayerLoadBasedAutoScalingOutputReference(this, "load_based_auto_scaling");
  public get loadBasedAutoScaling() {
    return this._loadBasedAutoScaling;
  }
  public putLoadBasedAutoScaling(value: OpsworksCustomLayerLoadBasedAutoScaling) {
    this._loadBasedAutoScaling.internalValue = value;
  }
  public resetLoadBasedAutoScaling() {
    this._loadBasedAutoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBasedAutoScalingInput() {
    return this._loadBasedAutoScaling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
      auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customConfigureRecipes),
      custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDeployRecipes),
      custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
      custom_json: cdktf.stringToTerraform(this._customJson),
      custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSecurityGroupIds),
      custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSetupRecipes),
      custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customShutdownRecipes),
      custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customUndeployRecipes),
      drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
      elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
      id: cdktf.stringToTerraform(this._id),
      install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
      instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
      name: cdktf.stringToTerraform(this._name),
      short_name: cdktf.stringToTerraform(this._shortName),
      stack_id: cdktf.stringToTerraform(this._stackId),
      system_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemPackages),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
      cloudwatch_configuration: opsworksCustomLayerCloudwatchConfigurationToTerraform(this._cloudwatchConfiguration.internalValue),
      ebs_volume: cdktf.listMapper(opsworksCustomLayerEbsVolumeToTerraform, true)(this._ebsVolume.internalValue),
      load_based_auto_scaling: opsworksCustomLayerLoadBasedAutoScalingToTerraform(this._loadBasedAutoScaling.internalValue),
    };
  }
}
