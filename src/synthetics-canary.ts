// https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsCanaryConfig extends cdktf.TerraformMetaArguments {
  readonly artifactS3Location: string;
  readonly executionRoleArn: string;
  readonly failureRetentionPeriod?: number;
  readonly handler: string;
  readonly name: string;
  readonly runtimeVersion: string;
  readonly s3Bucket?: string;
  readonly s3Key?: string;
  readonly s3Version?: string;
  readonly startCanary?: boolean;
  readonly successRetentionPeriod?: number;
  readonly tags?: { [key: string]: string };
  readonly zipFile?: string;
  /** run_config block */
  readonly runConfig?: SyntheticsCanaryRunConfig[];
  /** schedule block */
  readonly schedule: SyntheticsCanarySchedule[];
  /** vpc_config block */
  readonly vpcConfig?: SyntheticsCanaryVpcConfig[];
}
export class SyntheticsCanaryTimeline extends cdktf.ComplexComputedList {

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_started - computed: true, optional: false, required: false
  public get lastStarted() {
    return this.getStringAttribute('last_started');
  }

  // last_stopped - computed: true, optional: false, required: false
  public get lastStopped() {
    return this.getStringAttribute('last_stopped');
  }
}
export interface SyntheticsCanaryRunConfig {
  readonly activeTracing?: boolean;
  readonly memoryInMb?: number;
  readonly timeoutInSeconds?: number;
}

function syntheticsCanaryRunConfigToTerraform(struct?: SyntheticsCanaryRunConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_tracing: cdktf.booleanToTerraform(struct!.activeTracing),
    memory_in_mb: cdktf.numberToTerraform(struct!.memoryInMb),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}

export interface SyntheticsCanarySchedule {
  readonly durationInSeconds?: number;
  readonly expression: string;
}

function syntheticsCanaryScheduleToTerraform(struct?: SyntheticsCanarySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export interface SyntheticsCanaryVpcConfig {
  readonly securityGroupIds?: string[];
  readonly subnetIds?: string[];
}

function syntheticsCanaryVpcConfigToTerraform(struct?: SyntheticsCanaryVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


// Resource

export class SyntheticsCanary extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SyntheticsCanaryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_synthetics_canary',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._artifactS3Location = config.artifactS3Location;
    this._executionRoleArn = config.executionRoleArn;
    this._failureRetentionPeriod = config.failureRetentionPeriod;
    this._handler = config.handler;
    this._name = config.name;
    this._runtimeVersion = config.runtimeVersion;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3Version = config.s3Version;
    this._startCanary = config.startCanary;
    this._successRetentionPeriod = config.successRetentionPeriod;
    this._tags = config.tags;
    this._zipFile = config.zipFile;
    this._runConfig = config.runConfig;
    this._schedule = config.schedule;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // artifact_s3_location - computed: false, optional: false, required: true
  private _artifactS3Location: string;
  public get artifactS3Location() {
    return this.getStringAttribute('artifact_s3_location');
  }
  public set artifactS3Location(value: string) {
    this._artifactS3Location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactS3LocationInput() {
    return this._artifactS3Location
  }

  // engine_arn - computed: true, optional: false, required: false
  public get engineArn() {
    return this.getStringAttribute('engine_arn');
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // failure_retention_period - computed: false, optional: true, required: false
  private _failureRetentionPeriod?: number;
  public get failureRetentionPeriod() {
    return this.getNumberAttribute('failure_retention_period');
  }
  public set failureRetentionPeriod(value: number ) {
    this._failureRetentionPeriod = value;
  }
  public resetFailureRetentionPeriod() {
    this._failureRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRetentionPeriodInput() {
    return this._failureRetentionPeriod
  }

  // handler - computed: false, optional: false, required: true
  private _handler: string;
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion: string;
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string ) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string;
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string ) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key
  }

  // s3_version - computed: false, optional: true, required: false
  private _s3Version?: string;
  public get s3Version() {
    return this.getStringAttribute('s3_version');
  }
  public set s3Version(value: string ) {
    this._s3Version = value;
  }
  public resetS3Version() {
    this._s3Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3VersionInput() {
    return this._s3Version
  }

  // source_location_arn - computed: true, optional: false, required: false
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }

  // start_canary - computed: false, optional: true, required: false
  private _startCanary?: boolean;
  public get startCanary() {
    return this.getBooleanAttribute('start_canary');
  }
  public set startCanary(value: boolean ) {
    this._startCanary = value;
  }
  public resetStartCanary() {
    this._startCanary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCanaryInput() {
    return this._startCanary
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // success_retention_period - computed: false, optional: true, required: false
  private _successRetentionPeriod?: number;
  public get successRetentionPeriod() {
    return this.getNumberAttribute('success_retention_period');
  }
  public set successRetentionPeriod(value: number ) {
    this._successRetentionPeriod = value;
  }
  public resetSuccessRetentionPeriod() {
    this._successRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRetentionPeriodInput() {
    return this._successRetentionPeriod
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeline - computed: true, optional: false, required: false
  public timeline(index: string) {
    return new SyntheticsCanaryTimeline(this, 'timeline', index);
  }

  // zip_file - computed: false, optional: true, required: false
  private _zipFile?: string;
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string ) {
    this._zipFile = value;
  }
  public resetZipFile() {
    this._zipFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile
  }

  // run_config - computed: false, optional: true, required: false
  private _runConfig?: SyntheticsCanaryRunConfig[];
  public get runConfig() {
    return this.interpolationForAttribute('run_config') as any;
  }
  public set runConfig(value: SyntheticsCanaryRunConfig[] ) {
    this._runConfig = value;
  }
  public resetRunConfig() {
    this._runConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runConfigInput() {
    return this._runConfig
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: SyntheticsCanarySchedule[];
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: SyntheticsCanarySchedule[]) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: SyntheticsCanaryVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: SyntheticsCanaryVpcConfig[] ) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_s3_location: cdktf.stringToTerraform(this._artifactS3Location),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      failure_retention_period: cdktf.numberToTerraform(this._failureRetentionPeriod),
      handler: cdktf.stringToTerraform(this._handler),
      name: cdktf.stringToTerraform(this._name),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_key: cdktf.stringToTerraform(this._s3Key),
      s3_version: cdktf.stringToTerraform(this._s3Version),
      start_canary: cdktf.booleanToTerraform(this._startCanary),
      success_retention_period: cdktf.numberToTerraform(this._successRetentionPeriod),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zip_file: cdktf.stringToTerraform(this._zipFile),
      run_config: cdktf.listMapper(syntheticsCanaryRunConfigToTerraform)(this._runConfig),
      schedule: cdktf.listMapper(syntheticsCanaryScheduleToTerraform)(this._schedule),
      vpc_config: cdktf.listMapper(syntheticsCanaryVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
