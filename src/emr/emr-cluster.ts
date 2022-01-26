// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic MapReduce
*/
export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}
  */
  readonly autoscalingRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}
  */
  readonly configurations?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}
  */
  readonly configurationsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}
  */
  readonly customAmiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}
  */
  readonly ebsRootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}
  */
  readonly keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}
  */
  readonly logEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}
  */
  readonly logUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}
  */
  readonly scaleDownBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}
  */
  readonly serviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}
  */
  readonly step?: EmrClusterStep[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}
  */
  readonly stepConcurrencyLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}
  */
  readonly visibleToAllUsers?: boolean | cdktf.IResolvable;
  /**
  * auto_termination_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}
  */
  readonly autoTerminationPolicy?: EmrClusterAutoTerminationPolicy;
  /**
  * bootstrap_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}
  */
  readonly bootstrapAction?: EmrClusterBootstrapAction[] | cdktf.IResolvable;
  /**
  * core_instance_fleet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}
  */
  readonly coreInstanceFleet?: EmrClusterCoreInstanceFleet;
  /**
  * core_instance_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_group EmrCluster#core_instance_group}
  */
  readonly coreInstanceGroup?: EmrClusterCoreInstanceGroup;
  /**
  * ec2_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}
  */
  readonly ec2Attributes?: EmrClusterEc2Attributes;
  /**
  * kerberos_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}
  */
  readonly kerberosAttributes?: EmrClusterKerberosAttributes;
  /**
  * master_instance_fleet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}
  */
  readonly masterInstanceFleet?: EmrClusterMasterInstanceFleet;
  /**
  * master_instance_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_group EmrCluster#master_instance_group}
  */
  readonly masterInstanceGroup?: EmrClusterMasterInstanceGroup;
}
export interface EmrClusterStepHadoopJarStep {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}
  */
  readonly mainClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function emrClusterStepHadoopJarStepToTerraform(struct?: EmrClusterStepHadoopJarStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: struct!.args === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    jar: struct!.jar === undefined ? null : cdktf.stringToTerraform(struct!.jar),
    main_class: struct!.mainClass === undefined ? null : cdktf.stringToTerraform(struct!.mainClass),
    properties: struct!.properties === undefined ? null : cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}

export interface EmrClusterStep {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}
  */
  readonly actionOnFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}
  */
  readonly hadoopJarStep?: EmrClusterStepHadoopJarStep[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}
  */
  readonly name?: string;
}

export function emrClusterStepToTerraform(struct?: EmrClusterStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_failure: struct!.actionOnFailure === undefined ? null : cdktf.stringToTerraform(struct!.actionOnFailure),
    hadoop_jar_step: struct!.hadoopJarStep === undefined ? null : cdktf.listMapper(emrClusterStepHadoopJarStepToTerraform)(struct!.hadoopJarStep),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
  }
}

export interface EmrClusterAutoTerminationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}
  */
  readonly idleTimeout?: number;
}

export function emrClusterAutoTerminationPolicyToTerraform(struct?: EmrClusterAutoTerminationPolicyOutputReference | EmrClusterAutoTerminationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
  }
}

export class EmrClusterAutoTerminationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterAutoTerminationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterAutoTerminationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface EmrClusterBootstrapAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}
  */
  readonly path: string;
}

export function emrClusterBootstrapActionToTerraform(struct?: EmrClusterBootstrapAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}

export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrClusterCoreInstanceFleetInstanceTypeConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
  */
  readonly bidPriceAsPercentageOfOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * configurations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}
  */
  readonly configurations?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
  /**
  * ebs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}
  */
  readonly ebsConfig?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
}

export function emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
    configurations: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct!.configurations),
    ebs_config: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct!.ebsConfig),
  }
}

export interface EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
}

export function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
  }
}

export interface EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}
  */
  readonly timeoutAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
  */
  readonly timeoutDurationMinutes: number;
}

export function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
    timeout_duration_minutes: cdktf.numberToTerraform(struct!.timeoutDurationMinutes),
  }
}

export interface EmrClusterCoreInstanceFleetLaunchSpecifications {
  /**
  * on_demand_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}
  */
  readonly onDemandSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
  /**
  * spot_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}
  */
  readonly spotSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
}

export function emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference | EmrClusterCoreInstanceFleetLaunchSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_demand_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct!.onDemandSpecification),
    spot_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct!.spotSpecification),
  }
}

export class EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterCoreInstanceFleetLaunchSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemandSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandSpecification = this._onDemandSpecification;
    }
    if (this._spotSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSpecification = this._spotSpecification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterCoreInstanceFleetLaunchSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemandSpecification = undefined;
      this._spotSpecification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemandSpecification = value.onDemandSpecification;
      this._spotSpecification = value.spotSpecification;
    }
  }

  // on_demand_specification - computed: false, optional: true, required: false
  private _onDemandSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable; 
  public get onDemandSpecification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('on_demand_specification');
  }
  public set onDemandSpecification(value: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable) {
    this._onDemandSpecification = value;
  }
  public resetOnDemandSpecification() {
    this._onDemandSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandSpecificationInput() {
    return this._onDemandSpecification;
  }

  // spot_specification - computed: false, optional: true, required: false
  private _spotSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable; 
  public get spotSpecification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spot_specification');
  }
  public set spotSpecification(value: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable) {
    this._spotSpecification = value;
  }
  public resetSpotSpecification() {
    this._spotSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSpecificationInput() {
    return this._spotSpecification;
  }
}
export interface EmrClusterCoreInstanceFleet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
  */
  readonly targetOnDemandCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}
  */
  readonly targetSpotCapacity?: number;
  /**
  * instance_type_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}
  */
  readonly instanceTypeConfigs?: EmrClusterCoreInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
  /**
  * launch_specifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}
  */
  readonly launchSpecifications?: EmrClusterCoreInstanceFleetLaunchSpecifications;
}

export function emrClusterCoreInstanceFleetToTerraform(struct?: EmrClusterCoreInstanceFleetOutputReference | EmrClusterCoreInstanceFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target_on_demand_capacity: cdktf.numberToTerraform(struct!.targetOnDemandCapacity),
    target_spot_capacity: cdktf.numberToTerraform(struct!.targetSpotCapacity),
    instance_type_configs: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform)(struct!.instanceTypeConfigs),
    launch_specifications: emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct!.launchSpecifications),
  }
}

export class EmrClusterCoreInstanceFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterCoreInstanceFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetOnDemandCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOnDemandCapacity = this._targetOnDemandCapacity;
    }
    if (this._targetSpotCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSpotCapacity = this._targetSpotCapacity;
    }
    if (this._instanceTypeConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypeConfigs = this._instanceTypeConfigs;
    }
    if (this._launchSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchSpecifications = this._launchSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterCoreInstanceFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._targetOnDemandCapacity = undefined;
      this._targetSpotCapacity = undefined;
      this._instanceTypeConfigs = undefined;
      this._launchSpecifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._targetOnDemandCapacity = value.targetOnDemandCapacity;
      this._targetSpotCapacity = value.targetSpotCapacity;
      this._instanceTypeConfigs = value.instanceTypeConfigs;
      this._launchSpecifications.internalValue = value.launchSpecifications;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provisioned_on_demand_capacity - computed: true, optional: false, required: false
  public get provisionedOnDemandCapacity() {
    return this.getNumberAttribute('provisioned_on_demand_capacity');
  }

  // provisioned_spot_capacity - computed: true, optional: false, required: false
  public get provisionedSpotCapacity() {
    return this.getNumberAttribute('provisioned_spot_capacity');
  }

  // target_on_demand_capacity - computed: false, optional: true, required: false
  private _targetOnDemandCapacity?: number; 
  public get targetOnDemandCapacity() {
    return this.getNumberAttribute('target_on_demand_capacity');
  }
  public set targetOnDemandCapacity(value: number) {
    this._targetOnDemandCapacity = value;
  }
  public resetTargetOnDemandCapacity() {
    this._targetOnDemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOnDemandCapacityInput() {
    return this._targetOnDemandCapacity;
  }

  // target_spot_capacity - computed: false, optional: true, required: false
  private _targetSpotCapacity?: number; 
  public get targetSpotCapacity() {
    return this.getNumberAttribute('target_spot_capacity');
  }
  public set targetSpotCapacity(value: number) {
    this._targetSpotCapacity = value;
  }
  public resetTargetSpotCapacity() {
    this._targetSpotCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpotCapacityInput() {
    return this._targetSpotCapacity;
  }

  // instance_type_configs - computed: false, optional: true, required: false
  private _instanceTypeConfigs?: EmrClusterCoreInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable; 
  public get instanceTypeConfigs() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('instance_type_configs')));
  }
  public set instanceTypeConfigs(value: EmrClusterCoreInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable) {
    this._instanceTypeConfigs = value;
  }
  public resetInstanceTypeConfigs() {
    this._instanceTypeConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeConfigsInput() {
    return this._instanceTypeConfigs;
  }

  // launch_specifications - computed: false, optional: true, required: false
  private _launchSpecifications = new EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference(this, "launch_specifications", true);
  public get launchSpecifications() {
    return this._launchSpecifications;
  }
  public putLaunchSpecifications(value: EmrClusterCoreInstanceFleetLaunchSpecifications) {
    this._launchSpecifications.internalValue = value;
  }
  public resetLaunchSpecifications() {
    this._launchSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationsInput() {
    return this._launchSpecifications.internalValue;
  }
}
export interface EmrClusterCoreInstanceGroupEbsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct?: EmrClusterCoreInstanceGroupEbsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrClusterCoreInstanceGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}
  */
  readonly autoscalingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}
  */
  readonly name?: string;
  /**
  * ebs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}
  */
  readonly ebsConfig?: EmrClusterCoreInstanceGroupEbsConfig[] | cdktf.IResolvable;
}

export function emrClusterCoreInstanceGroupToTerraform(struct?: EmrClusterCoreInstanceGroupOutputReference | EmrClusterCoreInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_policy: cdktf.stringToTerraform(struct!.autoscalingPolicy),
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    name: cdktf.stringToTerraform(struct!.name),
    ebs_config: cdktf.listMapper(emrClusterCoreInstanceGroupEbsConfigToTerraform)(struct!.ebsConfig),
  }
}

export class EmrClusterCoreInstanceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterCoreInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingPolicy = this._autoscalingPolicy;
    }
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ebsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfig = this._ebsConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterCoreInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingPolicy = undefined;
      this._bidPrice = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._name = undefined;
      this._ebsConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingPolicy = value.autoscalingPolicy;
      this._bidPrice = value.bidPrice;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._name = value.name;
      this._ebsConfig = value.ebsConfig;
    }
  }

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy?: string; 
  public get autoscalingPolicy() {
    return this.getStringAttribute('autoscaling_policy');
  }
  public set autoscalingPolicy(value: string) {
    this._autoscalingPolicy = value;
  }
  public resetAutoscalingPolicy() {
    this._autoscalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy;
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig?: EmrClusterCoreInstanceGroupEbsConfig[] | cdktf.IResolvable; 
  public get ebsConfig() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ebs_config')));
  }
  public set ebsConfig(value: EmrClusterCoreInstanceGroupEbsConfig[] | cdktf.IResolvable) {
    this._ebsConfig = value;
  }
  public resetEbsConfig() {
    this._ebsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig;
  }
}
export interface EmrClusterEc2Attributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}
  */
  readonly additionalMasterSecurityGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}
  */
  readonly additionalSlaveSecurityGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}
  */
  readonly emrManagedMasterSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}
  */
  readonly emrManagedSlaveSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}
  */
  readonly instanceProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}
  */
  readonly serviceAccessSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function emrClusterEc2AttributesToTerraform(struct?: EmrClusterEc2AttributesOutputReference | EmrClusterEc2Attributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_master_security_groups: cdktf.stringToTerraform(struct!.additionalMasterSecurityGroups),
    additional_slave_security_groups: cdktf.stringToTerraform(struct!.additionalSlaveSecurityGroups),
    emr_managed_master_security_group: cdktf.stringToTerraform(struct!.emrManagedMasterSecurityGroup),
    emr_managed_slave_security_group: cdktf.stringToTerraform(struct!.emrManagedSlaveSecurityGroup),
    instance_profile: cdktf.stringToTerraform(struct!.instanceProfile),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    service_access_security_group: cdktf.stringToTerraform(struct!.serviceAccessSecurityGroup),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class EmrClusterEc2AttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterEc2Attributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMasterSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMasterSecurityGroups = this._additionalMasterSecurityGroups;
    }
    if (this._additionalSlaveSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSlaveSecurityGroups = this._additionalSlaveSecurityGroups;
    }
    if (this._emrManagedMasterSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrManagedMasterSecurityGroup = this._emrManagedMasterSecurityGroup;
    }
    if (this._emrManagedSlaveSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrManagedSlaveSecurityGroup = this._emrManagedSlaveSecurityGroup;
    }
    if (this._instanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfile = this._instanceProfile;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._serviceAccessSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessSecurityGroup = this._serviceAccessSecurityGroup;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterEc2Attributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalMasterSecurityGroups = undefined;
      this._additionalSlaveSecurityGroups = undefined;
      this._emrManagedMasterSecurityGroup = undefined;
      this._emrManagedSlaveSecurityGroup = undefined;
      this._instanceProfile = undefined;
      this._keyName = undefined;
      this._serviceAccessSecurityGroup = undefined;
      this._subnetId = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalMasterSecurityGroups = value.additionalMasterSecurityGroups;
      this._additionalSlaveSecurityGroups = value.additionalSlaveSecurityGroups;
      this._emrManagedMasterSecurityGroup = value.emrManagedMasterSecurityGroup;
      this._emrManagedSlaveSecurityGroup = value.emrManagedSlaveSecurityGroup;
      this._instanceProfile = value.instanceProfile;
      this._keyName = value.keyName;
      this._serviceAccessSecurityGroup = value.serviceAccessSecurityGroup;
      this._subnetId = value.subnetId;
      this._subnetIds = value.subnetIds;
    }
  }

  // additional_master_security_groups - computed: false, optional: true, required: false
  private _additionalMasterSecurityGroups?: string; 
  public get additionalMasterSecurityGroups() {
    return this.getStringAttribute('additional_master_security_groups');
  }
  public set additionalMasterSecurityGroups(value: string) {
    this._additionalMasterSecurityGroups = value;
  }
  public resetAdditionalMasterSecurityGroups() {
    this._additionalMasterSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMasterSecurityGroupsInput() {
    return this._additionalMasterSecurityGroups;
  }

  // additional_slave_security_groups - computed: false, optional: true, required: false
  private _additionalSlaveSecurityGroups?: string; 
  public get additionalSlaveSecurityGroups() {
    return this.getStringAttribute('additional_slave_security_groups');
  }
  public set additionalSlaveSecurityGroups(value: string) {
    this._additionalSlaveSecurityGroups = value;
  }
  public resetAdditionalSlaveSecurityGroups() {
    this._additionalSlaveSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSlaveSecurityGroupsInput() {
    return this._additionalSlaveSecurityGroups;
  }

  // emr_managed_master_security_group - computed: true, optional: true, required: false
  private _emrManagedMasterSecurityGroup?: string; 
  public get emrManagedMasterSecurityGroup() {
    return this.getStringAttribute('emr_managed_master_security_group');
  }
  public set emrManagedMasterSecurityGroup(value: string) {
    this._emrManagedMasterSecurityGroup = value;
  }
  public resetEmrManagedMasterSecurityGroup() {
    this._emrManagedMasterSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrManagedMasterSecurityGroupInput() {
    return this._emrManagedMasterSecurityGroup;
  }

  // emr_managed_slave_security_group - computed: true, optional: true, required: false
  private _emrManagedSlaveSecurityGroup?: string; 
  public get emrManagedSlaveSecurityGroup() {
    return this.getStringAttribute('emr_managed_slave_security_group');
  }
  public set emrManagedSlaveSecurityGroup(value: string) {
    this._emrManagedSlaveSecurityGroup = value;
  }
  public resetEmrManagedSlaveSecurityGroup() {
    this._emrManagedSlaveSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrManagedSlaveSecurityGroupInput() {
    return this._emrManagedSlaveSecurityGroup;
  }

  // instance_profile - computed: false, optional: false, required: true
  private _instanceProfile?: string; 
  public get instanceProfile() {
    return this.getStringAttribute('instance_profile');
  }
  public set instanceProfile(value: string) {
    this._instanceProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileInput() {
    return this._instanceProfile;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // service_access_security_group - computed: true, optional: true, required: false
  private _serviceAccessSecurityGroup?: string; 
  public get serviceAccessSecurityGroup() {
    return this.getStringAttribute('service_access_security_group');
  }
  public set serviceAccessSecurityGroup(value: string) {
    this._serviceAccessSecurityGroup = value;
  }
  public resetServiceAccessSecurityGroup() {
    this._serviceAccessSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessSecurityGroupInput() {
    return this._serviceAccessSecurityGroup;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_ids - computed: true, optional: true, required: false
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
}
export interface EmrClusterKerberosAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}
  */
  readonly adDomainJoinPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}
  */
  readonly adDomainJoinUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}
  */
  readonly crossRealmTrustPrincipalPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}
  */
  readonly kdcAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}
  */
  readonly realm: string;
}

export function emrClusterKerberosAttributesToTerraform(struct?: EmrClusterKerberosAttributesOutputReference | EmrClusterKerberosAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_domain_join_password: cdktf.stringToTerraform(struct!.adDomainJoinPassword),
    ad_domain_join_user: cdktf.stringToTerraform(struct!.adDomainJoinUser),
    cross_realm_trust_principal_password: cdktf.stringToTerraform(struct!.crossRealmTrustPrincipalPassword),
    kdc_admin_password: cdktf.stringToTerraform(struct!.kdcAdminPassword),
    realm: cdktf.stringToTerraform(struct!.realm),
  }
}

export class EmrClusterKerberosAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterKerberosAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDomainJoinPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomainJoinPassword = this._adDomainJoinPassword;
    }
    if (this._adDomainJoinUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomainJoinUser = this._adDomainJoinUser;
    }
    if (this._crossRealmTrustPrincipalPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustPrincipalPassword = this._crossRealmTrustPrincipalPassword;
    }
    if (this._kdcAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcAdminPassword = this._kdcAdminPassword;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterKerberosAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adDomainJoinPassword = undefined;
      this._adDomainJoinUser = undefined;
      this._crossRealmTrustPrincipalPassword = undefined;
      this._kdcAdminPassword = undefined;
      this._realm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adDomainJoinPassword = value.adDomainJoinPassword;
      this._adDomainJoinUser = value.adDomainJoinUser;
      this._crossRealmTrustPrincipalPassword = value.crossRealmTrustPrincipalPassword;
      this._kdcAdminPassword = value.kdcAdminPassword;
      this._realm = value.realm;
    }
  }

  // ad_domain_join_password - computed: false, optional: true, required: false
  private _adDomainJoinPassword?: string; 
  public get adDomainJoinPassword() {
    return this.getStringAttribute('ad_domain_join_password');
  }
  public set adDomainJoinPassword(value: string) {
    this._adDomainJoinPassword = value;
  }
  public resetAdDomainJoinPassword() {
    this._adDomainJoinPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainJoinPasswordInput() {
    return this._adDomainJoinPassword;
  }

  // ad_domain_join_user - computed: false, optional: true, required: false
  private _adDomainJoinUser?: string; 
  public get adDomainJoinUser() {
    return this.getStringAttribute('ad_domain_join_user');
  }
  public set adDomainJoinUser(value: string) {
    this._adDomainJoinUser = value;
  }
  public resetAdDomainJoinUser() {
    this._adDomainJoinUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainJoinUserInput() {
    return this._adDomainJoinUser;
  }

  // cross_realm_trust_principal_password - computed: false, optional: true, required: false
  private _crossRealmTrustPrincipalPassword?: string; 
  public get crossRealmTrustPrincipalPassword() {
    return this.getStringAttribute('cross_realm_trust_principal_password');
  }
  public set crossRealmTrustPrincipalPassword(value: string) {
    this._crossRealmTrustPrincipalPassword = value;
  }
  public resetCrossRealmTrustPrincipalPassword() {
    this._crossRealmTrustPrincipalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustPrincipalPasswordInput() {
    return this._crossRealmTrustPrincipalPassword;
  }

  // kdc_admin_password - computed: false, optional: false, required: true
  private _kdcAdminPassword?: string; 
  public get kdcAdminPassword() {
    return this.getStringAttribute('kdc_admin_password');
  }
  public set kdcAdminPassword(value: string) {
    this._kdcAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcAdminPasswordInput() {
    return this._kdcAdminPassword;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}

export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrClusterMasterInstanceFleetInstanceTypeConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
  */
  readonly bidPriceAsPercentageOfOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * configurations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}
  */
  readonly configurations?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
  /**
  * ebs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}
  */
  readonly ebsConfig?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
}

export function emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
    configurations: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct!.configurations),
    ebs_config: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct!.ebsConfig),
  }
}

export interface EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
}

export function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
  }
}

export interface EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}
  */
  readonly timeoutAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
  */
  readonly timeoutDurationMinutes: number;
}

export function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
    timeout_duration_minutes: cdktf.numberToTerraform(struct!.timeoutDurationMinutes),
  }
}

export interface EmrClusterMasterInstanceFleetLaunchSpecifications {
  /**
  * on_demand_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}
  */
  readonly onDemandSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
  /**
  * spot_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}
  */
  readonly spotSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
}

export function emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference | EmrClusterMasterInstanceFleetLaunchSpecifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_demand_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct!.onDemandSpecification),
    spot_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct!.spotSpecification),
  }
}

export class EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterMasterInstanceFleetLaunchSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemandSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandSpecification = this._onDemandSpecification;
    }
    if (this._spotSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSpecification = this._spotSpecification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMasterInstanceFleetLaunchSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemandSpecification = undefined;
      this._spotSpecification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemandSpecification = value.onDemandSpecification;
      this._spotSpecification = value.spotSpecification;
    }
  }

  // on_demand_specification - computed: false, optional: true, required: false
  private _onDemandSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable; 
  public get onDemandSpecification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('on_demand_specification');
  }
  public set onDemandSpecification(value: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable) {
    this._onDemandSpecification = value;
  }
  public resetOnDemandSpecification() {
    this._onDemandSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandSpecificationInput() {
    return this._onDemandSpecification;
  }

  // spot_specification - computed: false, optional: true, required: false
  private _spotSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable; 
  public get spotSpecification() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spot_specification');
  }
  public set spotSpecification(value: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable) {
    this._spotSpecification = value;
  }
  public resetSpotSpecification() {
    this._spotSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSpecificationInput() {
    return this._spotSpecification;
  }
}
export interface EmrClusterMasterInstanceFleet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
  */
  readonly targetOnDemandCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}
  */
  readonly targetSpotCapacity?: number;
  /**
  * instance_type_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}
  */
  readonly instanceTypeConfigs?: EmrClusterMasterInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
  /**
  * launch_specifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}
  */
  readonly launchSpecifications?: EmrClusterMasterInstanceFleetLaunchSpecifications;
}

export function emrClusterMasterInstanceFleetToTerraform(struct?: EmrClusterMasterInstanceFleetOutputReference | EmrClusterMasterInstanceFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target_on_demand_capacity: cdktf.numberToTerraform(struct!.targetOnDemandCapacity),
    target_spot_capacity: cdktf.numberToTerraform(struct!.targetSpotCapacity),
    instance_type_configs: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform)(struct!.instanceTypeConfigs),
    launch_specifications: emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct!.launchSpecifications),
  }
}

export class EmrClusterMasterInstanceFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterMasterInstanceFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetOnDemandCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOnDemandCapacity = this._targetOnDemandCapacity;
    }
    if (this._targetSpotCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSpotCapacity = this._targetSpotCapacity;
    }
    if (this._instanceTypeConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypeConfigs = this._instanceTypeConfigs;
    }
    if (this._launchSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchSpecifications = this._launchSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMasterInstanceFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._targetOnDemandCapacity = undefined;
      this._targetSpotCapacity = undefined;
      this._instanceTypeConfigs = undefined;
      this._launchSpecifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._targetOnDemandCapacity = value.targetOnDemandCapacity;
      this._targetSpotCapacity = value.targetSpotCapacity;
      this._instanceTypeConfigs = value.instanceTypeConfigs;
      this._launchSpecifications.internalValue = value.launchSpecifications;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provisioned_on_demand_capacity - computed: true, optional: false, required: false
  public get provisionedOnDemandCapacity() {
    return this.getNumberAttribute('provisioned_on_demand_capacity');
  }

  // provisioned_spot_capacity - computed: true, optional: false, required: false
  public get provisionedSpotCapacity() {
    return this.getNumberAttribute('provisioned_spot_capacity');
  }

  // target_on_demand_capacity - computed: false, optional: true, required: false
  private _targetOnDemandCapacity?: number; 
  public get targetOnDemandCapacity() {
    return this.getNumberAttribute('target_on_demand_capacity');
  }
  public set targetOnDemandCapacity(value: number) {
    this._targetOnDemandCapacity = value;
  }
  public resetTargetOnDemandCapacity() {
    this._targetOnDemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOnDemandCapacityInput() {
    return this._targetOnDemandCapacity;
  }

  // target_spot_capacity - computed: false, optional: true, required: false
  private _targetSpotCapacity?: number; 
  public get targetSpotCapacity() {
    return this.getNumberAttribute('target_spot_capacity');
  }
  public set targetSpotCapacity(value: number) {
    this._targetSpotCapacity = value;
  }
  public resetTargetSpotCapacity() {
    this._targetSpotCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpotCapacityInput() {
    return this._targetSpotCapacity;
  }

  // instance_type_configs - computed: false, optional: true, required: false
  private _instanceTypeConfigs?: EmrClusterMasterInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable; 
  public get instanceTypeConfigs() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('instance_type_configs')));
  }
  public set instanceTypeConfigs(value: EmrClusterMasterInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable) {
    this._instanceTypeConfigs = value;
  }
  public resetInstanceTypeConfigs() {
    this._instanceTypeConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeConfigsInput() {
    return this._instanceTypeConfigs;
  }

  // launch_specifications - computed: false, optional: true, required: false
  private _launchSpecifications = new EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference(this, "launch_specifications", true);
  public get launchSpecifications() {
    return this._launchSpecifications;
  }
  public putLaunchSpecifications(value: EmrClusterMasterInstanceFleetLaunchSpecifications) {
    this._launchSpecifications.internalValue = value;
  }
  public resetLaunchSpecifications() {
    this._launchSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationsInput() {
    return this._launchSpecifications.internalValue;
  }
}
export interface EmrClusterMasterInstanceGroupEbsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct?: EmrClusterMasterInstanceGroupEbsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrClusterMasterInstanceGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}
  */
  readonly name?: string;
  /**
  * ebs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}
  */
  readonly ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[] | cdktf.IResolvable;
}

export function emrClusterMasterInstanceGroupToTerraform(struct?: EmrClusterMasterInstanceGroupOutputReference | EmrClusterMasterInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    name: cdktf.stringToTerraform(struct!.name),
    ebs_config: cdktf.listMapper(emrClusterMasterInstanceGroupEbsConfigToTerraform)(struct!.ebsConfig),
  }
}

export class EmrClusterMasterInstanceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EmrClusterMasterInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ebsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfig = this._ebsConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMasterInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bidPrice = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._name = undefined;
      this._ebsConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bidPrice = value.bidPrice;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._name = value.name;
      this._ebsConfig = value.ebsConfig;
    }
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[] | cdktf.IResolvable; 
  public get ebsConfig() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ebs_config')));
  }
  public set ebsConfig(value: EmrClusterMasterInstanceGroupEbsConfig[] | cdktf.IResolvable) {
    this._ebsConfig = value;
  }
  public resetEbsConfig() {
    this._ebsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster aws_emr_cluster}
*/
export class EmrCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_emr_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster aws_emr_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalInfo = config.additionalInfo;
    this._applications = config.applications;
    this._autoscalingRole = config.autoscalingRole;
    this._configurations = config.configurations;
    this._configurationsJson = config.configurationsJson;
    this._customAmiId = config.customAmiId;
    this._ebsRootVolumeSize = config.ebsRootVolumeSize;
    this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
    this._logEncryptionKmsKeyId = config.logEncryptionKmsKeyId;
    this._logUri = config.logUri;
    this._name = config.name;
    this._releaseLabel = config.releaseLabel;
    this._scaleDownBehavior = config.scaleDownBehavior;
    this._securityConfiguration = config.securityConfiguration;
    this._serviceRole = config.serviceRole;
    this._step = config.step;
    this._stepConcurrencyLevel = config.stepConcurrencyLevel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._terminationProtection = config.terminationProtection;
    this._visibleToAllUsers = config.visibleToAllUsers;
    this._autoTerminationPolicy.internalValue = config.autoTerminationPolicy;
    this._bootstrapAction = config.bootstrapAction;
    this._coreInstanceFleet.internalValue = config.coreInstanceFleet;
    this._coreInstanceGroup.internalValue = config.coreInstanceGroup;
    this._ec2Attributes.internalValue = config.ec2Attributes;
    this._kerberosAttributes.internalValue = config.kerberosAttributes;
    this._masterInstanceFleet.internalValue = config.masterInstanceFleet;
    this._masterInstanceGroup.internalValue = config.masterInstanceGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: string; 
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_role - computed: false, optional: true, required: false
  private _autoscalingRole?: string; 
  public get autoscalingRole() {
    return this.getStringAttribute('autoscaling_role');
  }
  public set autoscalingRole(value: string) {
    this._autoscalingRole = value;
  }
  public resetAutoscalingRole() {
    this._autoscalingRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingRoleInput() {
    return this._autoscalingRole;
  }

  // cluster_state - computed: true, optional: false, required: false
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations?: string; 
  public get configurations() {
    return this.getStringAttribute('configurations');
  }
  public set configurations(value: string) {
    this._configurations = value;
  }
  public resetConfigurations() {
    this._configurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations;
  }

  // configurations_json - computed: false, optional: true, required: false
  private _configurationsJson?: string; 
  public get configurationsJson() {
    return this.getStringAttribute('configurations_json');
  }
  public set configurationsJson(value: string) {
    this._configurationsJson = value;
  }
  public resetConfigurationsJson() {
    this._configurationsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsJsonInput() {
    return this._configurationsJson;
  }

  // custom_ami_id - computed: false, optional: true, required: false
  private _customAmiId?: string; 
  public get customAmiId() {
    return this.getStringAttribute('custom_ami_id');
  }
  public set customAmiId(value: string) {
    this._customAmiId = value;
  }
  public resetCustomAmiId() {
    this._customAmiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAmiIdInput() {
    return this._customAmiId;
  }

  // ebs_root_volume_size - computed: false, optional: true, required: false
  private _ebsRootVolumeSize?: number; 
  public get ebsRootVolumeSize() {
    return this.getNumberAttribute('ebs_root_volume_size');
  }
  public set ebsRootVolumeSize(value: number) {
    this._ebsRootVolumeSize = value;
  }
  public resetEbsRootVolumeSize() {
    this._ebsRootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsRootVolumeSizeInput() {
    return this._ebsRootVolumeSize;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_job_flow_alive_when_no_steps - computed: true, optional: true, required: false
  private _keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable; 
  public get keepJobFlowAliveWhenNoSteps() {
    return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
  }
  public set keepJobFlowAliveWhenNoSteps(value: boolean | cdktf.IResolvable) {
    this._keepJobFlowAliveWhenNoSteps = value;
  }
  public resetKeepJobFlowAliveWhenNoSteps() {
    this._keepJobFlowAliveWhenNoSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobFlowAliveWhenNoStepsInput() {
    return this._keepJobFlowAliveWhenNoSteps;
  }

  // log_encryption_kms_key_id - computed: false, optional: true, required: false
  private _logEncryptionKmsKeyId?: string; 
  public get logEncryptionKmsKeyId() {
    return this.getStringAttribute('log_encryption_kms_key_id');
  }
  public set logEncryptionKmsKeyId(value: string) {
    this._logEncryptionKmsKeyId = value;
  }
  public resetLogEncryptionKmsKeyId() {
    this._logEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEncryptionKmsKeyIdInput() {
    return this._logEncryptionKmsKeyId;
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string; 
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string) {
    this._logUri = value;
  }
  public resetLogUri() {
    this._logUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri;
  }

  // master_public_dns - computed: true, optional: false, required: false
  public get masterPublicDns() {
    return this.getStringAttribute('master_public_dns');
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

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // scale_down_behavior - computed: true, optional: true, required: false
  private _scaleDownBehavior?: string; 
  public get scaleDownBehavior() {
    return this.getStringAttribute('scale_down_behavior');
  }
  public set scaleDownBehavior(value: string) {
    this._scaleDownBehavior = value;
  }
  public resetScaleDownBehavior() {
    this._scaleDownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownBehaviorInput() {
    return this._scaleDownBehavior;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string; 
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // step - computed: true, optional: true, required: false
  private _step?: EmrClusterStep[] | cdktf.IResolvable; 
  public get step() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('step');
  }
  public set step(value: EmrClusterStep[] | cdktf.IResolvable) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }

  // step_concurrency_level - computed: false, optional: true, required: false
  private _stepConcurrencyLevel?: number; 
  public get stepConcurrencyLevel() {
    return this.getNumberAttribute('step_concurrency_level');
  }
  public set stepConcurrencyLevel(value: number) {
    this._stepConcurrencyLevel = value;
  }
  public resetStepConcurrencyLevel() {
    this._stepConcurrencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepConcurrencyLevelInput() {
    return this._stepConcurrencyLevel;
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

  // termination_protection - computed: true, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // visible_to_all_users - computed: false, optional: true, required: false
  private _visibleToAllUsers?: boolean | cdktf.IResolvable; 
  public get visibleToAllUsers() {
    return this.getBooleanAttribute('visible_to_all_users');
  }
  public set visibleToAllUsers(value: boolean | cdktf.IResolvable) {
    this._visibleToAllUsers = value;
  }
  public resetVisibleToAllUsers() {
    this._visibleToAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleToAllUsersInput() {
    return this._visibleToAllUsers;
  }

  // auto_termination_policy - computed: false, optional: true, required: false
  private _autoTerminationPolicy = new EmrClusterAutoTerminationPolicyOutputReference(this, "auto_termination_policy", true);
  public get autoTerminationPolicy() {
    return this._autoTerminationPolicy;
  }
  public putAutoTerminationPolicy(value: EmrClusterAutoTerminationPolicy) {
    this._autoTerminationPolicy.internalValue = value;
  }
  public resetAutoTerminationPolicy() {
    this._autoTerminationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTerminationPolicyInput() {
    return this._autoTerminationPolicy.internalValue;
  }

  // bootstrap_action - computed: false, optional: true, required: false
  private _bootstrapAction?: EmrClusterBootstrapAction[] | cdktf.IResolvable; 
  public get bootstrapAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bootstrap_action');
  }
  public set bootstrapAction(value: EmrClusterBootstrapAction[] | cdktf.IResolvable) {
    this._bootstrapAction = value;
  }
  public resetBootstrapAction() {
    this._bootstrapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapActionInput() {
    return this._bootstrapAction;
  }

  // core_instance_fleet - computed: false, optional: true, required: false
  private _coreInstanceFleet = new EmrClusterCoreInstanceFleetOutputReference(this, "core_instance_fleet", true);
  public get coreInstanceFleet() {
    return this._coreInstanceFleet;
  }
  public putCoreInstanceFleet(value: EmrClusterCoreInstanceFleet) {
    this._coreInstanceFleet.internalValue = value;
  }
  public resetCoreInstanceFleet() {
    this._coreInstanceFleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceFleetInput() {
    return this._coreInstanceFleet.internalValue;
  }

  // core_instance_group - computed: false, optional: true, required: false
  private _coreInstanceGroup = new EmrClusterCoreInstanceGroupOutputReference(this, "core_instance_group", true);
  public get coreInstanceGroup() {
    return this._coreInstanceGroup;
  }
  public putCoreInstanceGroup(value: EmrClusterCoreInstanceGroup) {
    this._coreInstanceGroup.internalValue = value;
  }
  public resetCoreInstanceGroup() {
    this._coreInstanceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceGroupInput() {
    return this._coreInstanceGroup.internalValue;
  }

  // ec2_attributes - computed: false, optional: true, required: false
  private _ec2Attributes = new EmrClusterEc2AttributesOutputReference(this, "ec2_attributes", true);
  public get ec2Attributes() {
    return this._ec2Attributes;
  }
  public putEc2Attributes(value: EmrClusterEc2Attributes) {
    this._ec2Attributes.internalValue = value;
  }
  public resetEc2Attributes() {
    this._ec2Attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AttributesInput() {
    return this._ec2Attributes.internalValue;
  }

  // kerberos_attributes - computed: false, optional: true, required: false
  private _kerberosAttributes = new EmrClusterKerberosAttributesOutputReference(this, "kerberos_attributes", true);
  public get kerberosAttributes() {
    return this._kerberosAttributes;
  }
  public putKerberosAttributes(value: EmrClusterKerberosAttributes) {
    this._kerberosAttributes.internalValue = value;
  }
  public resetKerberosAttributes() {
    this._kerberosAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAttributesInput() {
    return this._kerberosAttributes.internalValue;
  }

  // master_instance_fleet - computed: false, optional: true, required: false
  private _masterInstanceFleet = new EmrClusterMasterInstanceFleetOutputReference(this, "master_instance_fleet", true);
  public get masterInstanceFleet() {
    return this._masterInstanceFleet;
  }
  public putMasterInstanceFleet(value: EmrClusterMasterInstanceFleet) {
    this._masterInstanceFleet.internalValue = value;
  }
  public resetMasterInstanceFleet() {
    this._masterInstanceFleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceFleetInput() {
    return this._masterInstanceFleet.internalValue;
  }

  // master_instance_group - computed: false, optional: true, required: false
  private _masterInstanceGroup = new EmrClusterMasterInstanceGroupOutputReference(this, "master_instance_group", true);
  public get masterInstanceGroup() {
    return this._masterInstanceGroup;
  }
  public putMasterInstanceGroup(value: EmrClusterMasterInstanceGroup) {
    this._masterInstanceGroup.internalValue = value;
  }
  public resetMasterInstanceGroup() {
    this._masterInstanceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceGroupInput() {
    return this._masterInstanceGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.stringToTerraform(this._additionalInfo),
      applications: cdktf.listMapper(cdktf.stringToTerraform)(this._applications),
      autoscaling_role: cdktf.stringToTerraform(this._autoscalingRole),
      configurations: cdktf.stringToTerraform(this._configurations),
      configurations_json: cdktf.stringToTerraform(this._configurationsJson),
      custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
      ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
      keep_job_flow_alive_when_no_steps: cdktf.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
      log_encryption_kms_key_id: cdktf.stringToTerraform(this._logEncryptionKmsKeyId),
      log_uri: cdktf.stringToTerraform(this._logUri),
      name: cdktf.stringToTerraform(this._name),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      scale_down_behavior: cdktf.stringToTerraform(this._scaleDownBehavior),
      security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      step: cdktf.listMapper(emrClusterStepToTerraform)(this._step),
      step_concurrency_level: cdktf.numberToTerraform(this._stepConcurrencyLevel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
      auto_termination_policy: emrClusterAutoTerminationPolicyToTerraform(this._autoTerminationPolicy.internalValue),
      bootstrap_action: cdktf.listMapper(emrClusterBootstrapActionToTerraform)(this._bootstrapAction),
      core_instance_fleet: emrClusterCoreInstanceFleetToTerraform(this._coreInstanceFleet.internalValue),
      core_instance_group: emrClusterCoreInstanceGroupToTerraform(this._coreInstanceGroup.internalValue),
      ec2_attributes: emrClusterEc2AttributesToTerraform(this._ec2Attributes.internalValue),
      kerberos_attributes: emrClusterKerberosAttributesToTerraform(this._kerberosAttributes.internalValue),
      master_instance_fleet: emrClusterMasterInstanceFleetToTerraform(this._masterInstanceFleet.internalValue),
      master_instance_group: emrClusterMasterInstanceGroupToTerraform(this._masterInstanceGroup.internalValue),
    };
  }
}
