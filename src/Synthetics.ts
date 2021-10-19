// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Synthetics
*/
export namespace Synthetics {
  export interface SyntheticsCanaryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#artifact_s3_location SyntheticsCanary#artifact_s3_location}
    */
    readonly artifactS3Location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#execution_role_arn SyntheticsCanary#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#failure_retention_period SyntheticsCanary#failure_retention_period}
    */
    readonly failureRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#handler SyntheticsCanary#handler}
    */
    readonly handler: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#name SyntheticsCanary#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#runtime_version SyntheticsCanary#runtime_version}
    */
    readonly runtimeVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_bucket SyntheticsCanary#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_key SyntheticsCanary#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_version SyntheticsCanary#s3_version}
    */
    readonly s3Version?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#start_canary SyntheticsCanary#start_canary}
    */
    readonly startCanary?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#success_retention_period SyntheticsCanary#success_retention_period}
    */
    readonly successRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#tags SyntheticsCanary#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#tags_all SyntheticsCanary#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#zip_file SyntheticsCanary#zip_file}
    */
    readonly zipFile?: string;
    /**
    * run_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#run_config SyntheticsCanary#run_config}
    */
    readonly runConfig?: SyntheticsCanaryRunConfig;
    /**
    * schedule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#schedule SyntheticsCanary#schedule}
    */
    readonly schedule: SyntheticsCanarySchedule;
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#vpc_config SyntheticsCanary#vpc_config}
    */
    readonly vpcConfig?: SyntheticsCanaryVpcConfig;
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
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#active_tracing SyntheticsCanary#active_tracing}
    */
    readonly activeTracing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#memory_in_mb SyntheticsCanary#memory_in_mb}
    */
    readonly memoryInMb?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
  }

  function syntheticsCanaryRunConfigToTerraform(struct?: SyntheticsCanaryRunConfigOutputReference | SyntheticsCanaryRunConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      active_tracing: cdktf.booleanToTerraform(struct!.activeTracing),
      memory_in_mb: cdktf.numberToTerraform(struct!.memoryInMb),
      timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    }
  }

  export class SyntheticsCanaryRunConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // active_tracing - computed: false, optional: true, required: false
    private _activeTracing?: boolean | cdktf.IResolvable | undefined; 
    public get activeTracing() {
      return this.getBooleanAttribute('active_tracing') as any;
    }
    public set activeTracing(value: boolean | cdktf.IResolvable | undefined) {
      this._activeTracing = value;
    }
    public resetActiveTracing() {
      this._activeTracing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeTracingInput() {
      return this._activeTracing
    }

    // memory_in_mb - computed: true, optional: true, required: false
    private _memoryInMb?: number | undefined; 
    public get memoryInMb() {
      return this.getNumberAttribute('memory_in_mb');
    }
    public set memoryInMb(value: number | undefined) {
      this._memoryInMb = value;
    }
    public resetMemoryInMb() {
      this._memoryInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInMbInput() {
      return this._memoryInMb
    }

    // timeout_in_seconds - computed: false, optional: true, required: false
    private _timeoutInSeconds?: number | undefined; 
    public get timeoutInSeconds() {
      return this.getNumberAttribute('timeout_in_seconds');
    }
    public set timeoutInSeconds(value: number | undefined) {
      this._timeoutInSeconds = value;
    }
    public resetTimeoutInSeconds() {
      this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInSecondsInput() {
      return this._timeoutInSeconds
    }
  }
  export interface SyntheticsCanarySchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#duration_in_seconds SyntheticsCanary#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#expression SyntheticsCanary#expression}
    */
    readonly expression: string;
  }

  function syntheticsCanaryScheduleToTerraform(struct?: SyntheticsCanaryScheduleOutputReference | SyntheticsCanarySchedule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
      expression: cdktf.stringToTerraform(struct!.expression),
    }
  }

  export class SyntheticsCanaryScheduleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // duration_in_seconds - computed: false, optional: true, required: false
    private _durationInSeconds?: number | undefined; 
    public get durationInSeconds() {
      return this.getNumberAttribute('duration_in_seconds');
    }
    public set durationInSeconds(value: number | undefined) {
      this._durationInSeconds = value;
    }
    public resetDurationInSeconds() {
      this._durationInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInSecondsInput() {
      return this._durationInSeconds
    }

    // expression - computed: false, optional: false, required: true
    private _expression?: string; 
    public get expression() {
      return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
      this._expression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
      return this._expression
    }
  }
  export interface SyntheticsCanaryVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#security_group_ids SyntheticsCanary#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#subnet_ids SyntheticsCanary#subnet_ids}
    */
    readonly subnetIds?: string[];
  }

  function syntheticsCanaryVpcConfigToTerraform(struct?: SyntheticsCanaryVpcConfigOutputReference | SyntheticsCanaryVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export class SyntheticsCanaryVpcConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: false, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary}
  */
  export class SyntheticsCanary extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_synthetics_canary";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SyntheticsCanaryConfig
    */
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
      this._tagsAll = config.tagsAll;
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
    private _artifactS3Location?: string; 
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
    private _executionRoleArn?: string; 
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
    private _failureRetentionPeriod?: number | undefined; 
    public get failureRetentionPeriod() {
      return this.getNumberAttribute('failure_retention_period');
    }
    public set failureRetentionPeriod(value: number | undefined) {
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
    private _handler?: string; 
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
    private _name?: string; 
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
    private _runtimeVersion?: string; 
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
    private _s3Bucket?: string | undefined; 
    public get s3Bucket() {
      return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string | undefined) {
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
    private _s3Key?: string | undefined; 
    public get s3Key() {
      return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string | undefined) {
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
    private _s3Version?: string | undefined; 
    public get s3Version() {
      return this.getStringAttribute('s3_version');
    }
    public set s3Version(value: string | undefined) {
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
    private _startCanary?: boolean | cdktf.IResolvable | undefined; 
    public get startCanary() {
      return this.getBooleanAttribute('start_canary') as any;
    }
    public set startCanary(value: boolean | cdktf.IResolvable | undefined) {
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
    private _successRetentionPeriod?: number | undefined; 
    public get successRetentionPeriod() {
      return this.getNumberAttribute('success_retention_period');
    }
    public set successRetentionPeriod(value: number | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeline - computed: true, optional: false, required: false
    public timeline(index: string) {
      return new SyntheticsCanaryTimeline(this, 'timeline', index);
    }

    // zip_file - computed: false, optional: true, required: false
    private _zipFile?: string | undefined; 
    public get zipFile() {
      return this.getStringAttribute('zip_file');
    }
    public set zipFile(value: string | undefined) {
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
    private _runConfig?: SyntheticsCanaryRunConfig | undefined; 
    private __runConfigOutput = new SyntheticsCanaryRunConfigOutputReference(this as any, "run_config", true);
    public get runConfig() {
      return this.__runConfigOutput;
    }
    public putRunConfig(value: SyntheticsCanaryRunConfig | undefined) {
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
    private _schedule?: SyntheticsCanarySchedule; 
    private __scheduleOutput = new SyntheticsCanaryScheduleOutputReference(this as any, "schedule", true);
    public get schedule() {
      return this.__scheduleOutput;
    }
    public putSchedule(value: SyntheticsCanarySchedule) {
      this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // vpc_config - computed: false, optional: true, required: false
    private _vpcConfig?: SyntheticsCanaryVpcConfig | undefined; 
    private __vpcConfigOutput = new SyntheticsCanaryVpcConfigOutputReference(this as any, "vpc_config", true);
    public get vpcConfig() {
      return this.__vpcConfigOutput;
    }
    public putVpcConfig(value: SyntheticsCanaryVpcConfig | undefined) {
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
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        zip_file: cdktf.stringToTerraform(this._zipFile),
        run_config: syntheticsCanaryRunConfigToTerraform(this._runConfig),
        schedule: syntheticsCanaryScheduleToTerraform(this._schedule),
        vpc_config: syntheticsCanaryVpcConfigToTerraform(this._vpcConfig),
      };
    }
  }
}
