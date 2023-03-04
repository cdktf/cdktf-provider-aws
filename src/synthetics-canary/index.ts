// https://www.terraform.io/docs/providers/aws/r/synthetics_canary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsCanaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}
  */
  readonly artifactS3Location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}
  */
  readonly deleteLambda?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}
  */
  readonly failureRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#handler SyntheticsCanary#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#id SyntheticsCanary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#name SyntheticsCanary#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}
  */
  readonly runtimeVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_key SyntheticsCanary#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_version SyntheticsCanary#s3_version}
  */
  readonly s3Version?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#start_canary SyntheticsCanary#start_canary}
  */
  readonly startCanary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}
  */
  readonly successRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags SyntheticsCanary#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#tags_all SyntheticsCanary#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#zip_file SyntheticsCanary#zip_file}
  */
  readonly zipFile?: string;
  /**
  * artifact_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}
  */
  readonly artifactConfig?: SyntheticsCanaryArtifactConfig;
  /**
  * run_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#run_config SyntheticsCanary#run_config}
  */
  readonly runConfig?: SyntheticsCanaryRunConfig;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#schedule SyntheticsCanary#schedule}
  */
  readonly schedule: SyntheticsCanarySchedule;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}
  */
  readonly vpcConfig?: SyntheticsCanaryVpcConfig;
}
export interface SyntheticsCanaryTimeline {
}

export function syntheticsCanaryTimelineToTerraform(struct?: SyntheticsCanaryTimeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class SyntheticsCanaryTimelineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsCanaryTimeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryTimeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class SyntheticsCanaryTimelineList extends cdktf.ComplexList {

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
  public get(index: number): SyntheticsCanaryTimelineOutputReference {
    return new SyntheticsCanaryTimelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsCanaryArtifactConfigS3Encryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function syntheticsCanaryArtifactConfigS3EncryptionToTerraform(struct?: SyntheticsCanaryArtifactConfigS3EncryptionOutputReference | SyntheticsCanaryArtifactConfigS3Encryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_mode: cdktf.stringToTerraform(struct!.encryptionMode),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class SyntheticsCanaryArtifactConfigS3EncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsCanaryArtifactConfigS3Encryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMode = this._encryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryArtifactConfigS3Encryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionMode = value.encryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string; 
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface SyntheticsCanaryArtifactConfig {
  /**
  * s3_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}
  */
  readonly s3Encryption?: SyntheticsCanaryArtifactConfigS3Encryption;
}

export function syntheticsCanaryArtifactConfigToTerraform(struct?: SyntheticsCanaryArtifactConfigOutputReference | SyntheticsCanaryArtifactConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_encryption: syntheticsCanaryArtifactConfigS3EncryptionToTerraform(struct!.s3Encryption),
  }
}

export class SyntheticsCanaryArtifactConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsCanaryArtifactConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Encryption = this._s3Encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryArtifactConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Encryption.internalValue = value.s3Encryption;
    }
  }

  // s3_encryption - computed: false, optional: true, required: false
  private _s3Encryption = new SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(this, "s3_encryption");
  public get s3Encryption() {
    return this._s3Encryption;
  }
  public putS3Encryption(value: SyntheticsCanaryArtifactConfigS3Encryption) {
    this._s3Encryption.internalValue = value;
  }
  public resetS3Encryption() {
    this._s3Encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionInput() {
    return this._s3Encryption.internalValue;
  }
}
export interface SyntheticsCanaryRunConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}
  */
  readonly activeTracing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}
  */
  readonly memoryInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function syntheticsCanaryRunConfigToTerraform(struct?: SyntheticsCanaryRunConfigOutputReference | SyntheticsCanaryRunConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_tracing: cdktf.booleanToTerraform(struct!.activeTracing),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    memory_in_mb: cdktf.numberToTerraform(struct!.memoryInMb),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}

export class SyntheticsCanaryRunConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsCanaryRunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTracing = this._activeTracing;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._memoryInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInMb = this._memoryInMb;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryRunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTracing = undefined;
      this._environmentVariables = undefined;
      this._memoryInMb = undefined;
      this._timeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTracing = value.activeTracing;
      this._environmentVariables = value.environmentVariables;
      this._memoryInMb = value.memoryInMb;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // active_tracing - computed: false, optional: true, required: false
  private _activeTracing?: boolean | cdktf.IResolvable; 
  public get activeTracing() {
    return this.getBooleanAttribute('active_tracing');
  }
  public set activeTracing(value: boolean | cdktf.IResolvable) {
    this._activeTracing = value;
  }
  public resetActiveTracing() {
    this._activeTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTracingInput() {
    return this._activeTracing;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // memory_in_mb - computed: true, optional: true, required: false
  private _memoryInMb?: number; 
  public get memoryInMb() {
    return this.getNumberAttribute('memory_in_mb');
  }
  public set memoryInMb(value: number) {
    this._memoryInMb = value;
  }
  public resetMemoryInMb() {
    this._memoryInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInMbInput() {
    return this._memoryInMb;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}
export interface SyntheticsCanarySchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}
  */
  readonly durationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#expression SyntheticsCanary#expression}
  */
  readonly expression: string;
}

export function syntheticsCanaryScheduleToTerraform(struct?: SyntheticsCanaryScheduleOutputReference | SyntheticsCanarySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class SyntheticsCanaryScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsCanarySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInSeconds = this._durationInSeconds;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanarySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationInSeconds = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationInSeconds = value.durationInSeconds;
      this._expression = value.expression;
    }
  }

  // duration_in_seconds - computed: false, optional: true, required: false
  private _durationInSeconds?: number; 
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
  public set durationInSeconds(value: number) {
    this._durationInSeconds = value;
  }
  public resetDurationInSeconds() {
    this._durationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInSecondsInput() {
    return this._durationInSeconds;
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
    return this._expression;
  }
}
export interface SyntheticsCanaryVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function syntheticsCanaryVpcConfigToTerraform(struct?: SyntheticsCanaryVpcConfigOutputReference | SyntheticsCanaryVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}

export class SyntheticsCanaryVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsCanaryVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SyntheticsCanaryVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary aws_synthetics_canary}
*/
export class SyntheticsCanary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_synthetics_canary";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary aws_synthetics_canary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsCanaryConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsCanaryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_synthetics_canary',
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
    this._artifactS3Location = config.artifactS3Location;
    this._deleteLambda = config.deleteLambda;
    this._executionRoleArn = config.executionRoleArn;
    this._failureRetentionPeriod = config.failureRetentionPeriod;
    this._handler = config.handler;
    this._id = config.id;
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
    this._artifactConfig.internalValue = config.artifactConfig;
    this._runConfig.internalValue = config.runConfig;
    this._schedule.internalValue = config.schedule;
    this._vpcConfig.internalValue = config.vpcConfig;
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
    return this._artifactS3Location;
  }

  // delete_lambda - computed: false, optional: true, required: false
  private _deleteLambda?: boolean | cdktf.IResolvable; 
  public get deleteLambda() {
    return this.getBooleanAttribute('delete_lambda');
  }
  public set deleteLambda(value: boolean | cdktf.IResolvable) {
    this._deleteLambda = value;
  }
  public resetDeleteLambda() {
    this._deleteLambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteLambdaInput() {
    return this._deleteLambda;
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
    return this._executionRoleArn;
  }

  // failure_retention_period - computed: false, optional: true, required: false
  private _failureRetentionPeriod?: number; 
  public get failureRetentionPeriod() {
    return this.getNumberAttribute('failure_retention_period');
  }
  public set failureRetentionPeriod(value: number) {
    this._failureRetentionPeriod = value;
  }
  public resetFailureRetentionPeriod() {
    this._failureRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRetentionPeriodInput() {
    return this._failureRetentionPeriod;
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
    return this._handler;
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
    return this._runtimeVersion;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_version - computed: false, optional: true, required: false
  private _s3Version?: string; 
  public get s3Version() {
    return this.getStringAttribute('s3_version');
  }
  public set s3Version(value: string) {
    this._s3Version = value;
  }
  public resetS3Version() {
    this._s3Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3VersionInput() {
    return this._s3Version;
  }

  // source_location_arn - computed: true, optional: false, required: false
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }

  // start_canary - computed: false, optional: true, required: false
  private _startCanary?: boolean | cdktf.IResolvable; 
  public get startCanary() {
    return this.getBooleanAttribute('start_canary');
  }
  public set startCanary(value: boolean | cdktf.IResolvable) {
    this._startCanary = value;
  }
  public resetStartCanary() {
    this._startCanary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCanaryInput() {
    return this._startCanary;
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
  public set successRetentionPeriod(value: number) {
    this._successRetentionPeriod = value;
  }
  public resetSuccessRetentionPeriod() {
    this._successRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRetentionPeriodInput() {
    return this._successRetentionPeriod;
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

  // timeline - computed: true, optional: false, required: false
  private _timeline = new SyntheticsCanaryTimelineList(this, "timeline", false);
  public get timeline() {
    return this._timeline;
  }

  // zip_file - computed: false, optional: true, required: false
  private _zipFile?: string; 
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string) {
    this._zipFile = value;
  }
  public resetZipFile() {
    this._zipFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile;
  }

  // artifact_config - computed: false, optional: true, required: false
  private _artifactConfig = new SyntheticsCanaryArtifactConfigOutputReference(this, "artifact_config");
  public get artifactConfig() {
    return this._artifactConfig;
  }
  public putArtifactConfig(value: SyntheticsCanaryArtifactConfig) {
    this._artifactConfig.internalValue = value;
  }
  public resetArtifactConfig() {
    this._artifactConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactConfigInput() {
    return this._artifactConfig.internalValue;
  }

  // run_config - computed: false, optional: true, required: false
  private _runConfig = new SyntheticsCanaryRunConfigOutputReference(this, "run_config");
  public get runConfig() {
    return this._runConfig;
  }
  public putRunConfig(value: SyntheticsCanaryRunConfig) {
    this._runConfig.internalValue = value;
  }
  public resetRunConfig() {
    this._runConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runConfigInput() {
    return this._runConfig.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new SyntheticsCanaryScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SyntheticsCanarySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new SyntheticsCanaryVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SyntheticsCanaryVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_s3_location: cdktf.stringToTerraform(this._artifactS3Location),
      delete_lambda: cdktf.booleanToTerraform(this._deleteLambda),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      failure_retention_period: cdktf.numberToTerraform(this._failureRetentionPeriod),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_key: cdktf.stringToTerraform(this._s3Key),
      s3_version: cdktf.stringToTerraform(this._s3Version),
      start_canary: cdktf.booleanToTerraform(this._startCanary),
      success_retention_period: cdktf.numberToTerraform(this._successRetentionPeriod),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      zip_file: cdktf.stringToTerraform(this._zipFile),
      artifact_config: syntheticsCanaryArtifactConfigToTerraform(this._artifactConfig.internalValue),
      run_config: syntheticsCanaryRunConfigToTerraform(this._runConfig.internalValue),
      schedule: syntheticsCanaryScheduleToTerraform(this._schedule.internalValue),
      vpc_config: syntheticsCanaryVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }
}
