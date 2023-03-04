// https://www.terraform.io/docs/providers/aws/r/mskconnect_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MskconnectConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}
  */
  readonly connectorConfiguration: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}
  */
  readonly kafkaconnectVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}
  */
  readonly serviceExecutionRoleArn: string;
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#capacity MskconnectConnector#capacity}
  */
  readonly capacity: MskconnectConnectorCapacity;
  /**
  * kafka_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster MskconnectConnector#kafka_cluster}
  */
  readonly kafkaCluster: MskconnectConnectorKafkaCluster;
  /**
  * kafka_cluster_client_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_client_authentication MskconnectConnector#kafka_cluster_client_authentication}
  */
  readonly kafkaClusterClientAuthentication: MskconnectConnectorKafkaClusterClientAuthentication;
  /**
  * kafka_cluster_encryption_in_transit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_encryption_in_transit MskconnectConnector#kafka_cluster_encryption_in_transit}
  */
  readonly kafkaClusterEncryptionInTransit: MskconnectConnectorKafkaClusterEncryptionInTransit;
  /**
  * log_delivery block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_delivery MskconnectConnector#log_delivery}
  */
  readonly logDelivery?: MskconnectConnectorLogDelivery;
  /**
  * plugin block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#plugin MskconnectConnector#plugin}
  */
  readonly plugin: MskconnectConnectorPlugin[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#timeouts MskconnectConnector#timeouts}
  */
  readonly timeouts?: MskconnectConnectorTimeouts;
  /**
  * worker_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_configuration MskconnectConnector#worker_configuration}
  */
  readonly workerConfiguration?: MskconnectConnectorWorkerConfiguration;
}
export interface MskconnectConnectorCapacityAutoscalingScaleInPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}
  */
  readonly cpuUtilizationPercentage?: number;
}

export function mskconnectConnectorCapacityAutoscalingScaleInPolicyToTerraform(struct?: MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference | MskconnectConnectorCapacityAutoscalingScaleInPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_utilization_percentage: cdktf.numberToTerraform(struct!.cpuUtilizationPercentage),
  }
}

export class MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorCapacityAutoscalingScaleInPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationPercentage = this._cpuUtilizationPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorCapacityAutoscalingScaleInPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationPercentage = value.cpuUtilizationPercentage;
    }
  }

  // cpu_utilization_percentage - computed: true, optional: true, required: false
  private _cpuUtilizationPercentage?: number; 
  public get cpuUtilizationPercentage() {
    return this.getNumberAttribute('cpu_utilization_percentage');
  }
  public set cpuUtilizationPercentage(value: number) {
    this._cpuUtilizationPercentage = value;
  }
  public resetCpuUtilizationPercentage() {
    this._cpuUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationPercentageInput() {
    return this._cpuUtilizationPercentage;
  }
}
export interface MskconnectConnectorCapacityAutoscalingScaleOutPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}
  */
  readonly cpuUtilizationPercentage?: number;
}

export function mskconnectConnectorCapacityAutoscalingScaleOutPolicyToTerraform(struct?: MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference | MskconnectConnectorCapacityAutoscalingScaleOutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_utilization_percentage: cdktf.numberToTerraform(struct!.cpuUtilizationPercentage),
  }
}

export class MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorCapacityAutoscalingScaleOutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationPercentage = this._cpuUtilizationPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorCapacityAutoscalingScaleOutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationPercentage = value.cpuUtilizationPercentage;
    }
  }

  // cpu_utilization_percentage - computed: true, optional: true, required: false
  private _cpuUtilizationPercentage?: number; 
  public get cpuUtilizationPercentage() {
    return this.getNumberAttribute('cpu_utilization_percentage');
  }
  public set cpuUtilizationPercentage(value: number) {
    this._cpuUtilizationPercentage = value;
  }
  public resetCpuUtilizationPercentage() {
    this._cpuUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationPercentageInput() {
    return this._cpuUtilizationPercentage;
  }
}
export interface MskconnectConnectorCapacityAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}
  */
  readonly maxWorkerCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}
  */
  readonly mcuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}
  */
  readonly minWorkerCount: number;
  /**
  * scale_in_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_in_policy MskconnectConnector#scale_in_policy}
  */
  readonly scaleInPolicy?: MskconnectConnectorCapacityAutoscalingScaleInPolicy;
  /**
  * scale_out_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_out_policy MskconnectConnector#scale_out_policy}
  */
  readonly scaleOutPolicy?: MskconnectConnectorCapacityAutoscalingScaleOutPolicy;
}

export function mskconnectConnectorCapacityAutoscalingToTerraform(struct?: MskconnectConnectorCapacityAutoscalingOutputReference | MskconnectConnectorCapacityAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_worker_count: cdktf.numberToTerraform(struct!.maxWorkerCount),
    mcu_count: cdktf.numberToTerraform(struct!.mcuCount),
    min_worker_count: cdktf.numberToTerraform(struct!.minWorkerCount),
    scale_in_policy: mskconnectConnectorCapacityAutoscalingScaleInPolicyToTerraform(struct!.scaleInPolicy),
    scale_out_policy: mskconnectConnectorCapacityAutoscalingScaleOutPolicyToTerraform(struct!.scaleOutPolicy),
  }
}

export class MskconnectConnectorCapacityAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorCapacityAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerCount = this._maxWorkerCount;
    }
    if (this._mcuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcuCount = this._mcuCount;
    }
    if (this._minWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkerCount = this._minWorkerCount;
    }
    if (this._scaleInPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInPolicy = this._scaleInPolicy?.internalValue;
    }
    if (this._scaleOutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutPolicy = this._scaleOutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorCapacityAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkerCount = undefined;
      this._mcuCount = undefined;
      this._minWorkerCount = undefined;
      this._scaleInPolicy.internalValue = undefined;
      this._scaleOutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkerCount = value.maxWorkerCount;
      this._mcuCount = value.mcuCount;
      this._minWorkerCount = value.minWorkerCount;
      this._scaleInPolicy.internalValue = value.scaleInPolicy;
      this._scaleOutPolicy.internalValue = value.scaleOutPolicy;
    }
  }

  // max_worker_count - computed: false, optional: false, required: true
  private _maxWorkerCount?: number; 
  public get maxWorkerCount() {
    return this.getNumberAttribute('max_worker_count');
  }
  public set maxWorkerCount(value: number) {
    this._maxWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerCountInput() {
    return this._maxWorkerCount;
  }

  // mcu_count - computed: false, optional: true, required: false
  private _mcuCount?: number; 
  public get mcuCount() {
    return this.getNumberAttribute('mcu_count');
  }
  public set mcuCount(value: number) {
    this._mcuCount = value;
  }
  public resetMcuCount() {
    this._mcuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcuCountInput() {
    return this._mcuCount;
  }

  // min_worker_count - computed: false, optional: false, required: true
  private _minWorkerCount?: number; 
  public get minWorkerCount() {
    return this.getNumberAttribute('min_worker_count');
  }
  public set minWorkerCount(value: number) {
    this._minWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkerCountInput() {
    return this._minWorkerCount;
  }

  // scale_in_policy - computed: false, optional: true, required: false
  private _scaleInPolicy = new MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference(this, "scale_in_policy");
  public get scaleInPolicy() {
    return this._scaleInPolicy;
  }
  public putScaleInPolicy(value: MskconnectConnectorCapacityAutoscalingScaleInPolicy) {
    this._scaleInPolicy.internalValue = value;
  }
  public resetScaleInPolicy() {
    this._scaleInPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInPolicyInput() {
    return this._scaleInPolicy.internalValue;
  }

  // scale_out_policy - computed: false, optional: true, required: false
  private _scaleOutPolicy = new MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference(this, "scale_out_policy");
  public get scaleOutPolicy() {
    return this._scaleOutPolicy;
  }
  public putScaleOutPolicy(value: MskconnectConnectorCapacityAutoscalingScaleOutPolicy) {
    this._scaleOutPolicy.internalValue = value;
  }
  public resetScaleOutPolicy() {
    this._scaleOutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutPolicyInput() {
    return this._scaleOutPolicy.internalValue;
  }
}
export interface MskconnectConnectorCapacityProvisionedCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}
  */
  readonly mcuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}
  */
  readonly workerCount: number;
}

export function mskconnectConnectorCapacityProvisionedCapacityToTerraform(struct?: MskconnectConnectorCapacityProvisionedCapacityOutputReference | MskconnectConnectorCapacityProvisionedCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mcu_count: cdktf.numberToTerraform(struct!.mcuCount),
    worker_count: cdktf.numberToTerraform(struct!.workerCount),
  }
}

export class MskconnectConnectorCapacityProvisionedCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorCapacityProvisionedCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcuCount = this._mcuCount;
    }
    if (this._workerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerCount = this._workerCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorCapacityProvisionedCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mcuCount = undefined;
      this._workerCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mcuCount = value.mcuCount;
      this._workerCount = value.workerCount;
    }
  }

  // mcu_count - computed: false, optional: true, required: false
  private _mcuCount?: number; 
  public get mcuCount() {
    return this.getNumberAttribute('mcu_count');
  }
  public set mcuCount(value: number) {
    this._mcuCount = value;
  }
  public resetMcuCount() {
    this._mcuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcuCountInput() {
    return this._mcuCount;
  }

  // worker_count - computed: false, optional: false, required: true
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }
}
export interface MskconnectConnectorCapacity {
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#autoscaling MskconnectConnector#autoscaling}
  */
  readonly autoscaling?: MskconnectConnectorCapacityAutoscaling;
  /**
  * provisioned_capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#provisioned_capacity MskconnectConnector#provisioned_capacity}
  */
  readonly provisionedCapacity?: MskconnectConnectorCapacityProvisionedCapacity;
}

export function mskconnectConnectorCapacityToTerraform(struct?: MskconnectConnectorCapacityOutputReference | MskconnectConnectorCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: mskconnectConnectorCapacityAutoscalingToTerraform(struct!.autoscaling),
    provisioned_capacity: mskconnectConnectorCapacityProvisionedCapacityToTerraform(struct!.provisionedCapacity),
  }
}

export class MskconnectConnectorCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._provisionedCapacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedCapacity = this._provisionedCapacity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaling.internalValue = undefined;
      this._provisionedCapacity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaling.internalValue = value.autoscaling;
      this._provisionedCapacity.internalValue = value.provisionedCapacity;
    }
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new MskconnectConnectorCapacityAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: MskconnectConnectorCapacityAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // provisioned_capacity - computed: false, optional: true, required: false
  private _provisionedCapacity = new MskconnectConnectorCapacityProvisionedCapacityOutputReference(this, "provisioned_capacity");
  public get provisionedCapacity() {
    return this._provisionedCapacity;
  }
  public putProvisionedCapacity(value: MskconnectConnectorCapacityProvisionedCapacity) {
    this._provisionedCapacity.internalValue = value;
  }
  public resetProvisionedCapacity() {
    this._provisionedCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedCapacityInput() {
    return this._provisionedCapacity.internalValue;
  }
}
export interface MskconnectConnectorKafkaClusterApacheKafkaClusterVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}
  */
  readonly subnets: string[];
}

export function mskconnectConnectorKafkaClusterApacheKafkaClusterVpcToTerraform(struct?: MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference | MskconnectConnectorKafkaClusterApacheKafkaClusterVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}

export class MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorKafkaClusterApacheKafkaClusterVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface MskconnectConnectorKafkaClusterApacheKafkaCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * vpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#vpc MskconnectConnector#vpc}
  */
  readonly vpc: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc;
}

export function mskconnectConnectorKafkaClusterApacheKafkaClusterToTerraform(struct?: MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference | MskconnectConnectorKafkaClusterApacheKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    vpc: mskconnectConnectorKafkaClusterApacheKafkaClusterVpcToTerraform(struct!.vpc),
  }
}

export class MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorKafkaClusterApacheKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorKafkaClusterApacheKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapServers = undefined;
      this._vpc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapServers = value.bootstrapServers;
      this._vpc.internalValue = value.vpc;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc = new MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: MskconnectConnectorKafkaClusterApacheKafkaClusterVpc) {
    this._vpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface MskconnectConnectorKafkaCluster {
  /**
  * apache_kafka_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#apache_kafka_cluster MskconnectConnector#apache_kafka_cluster}
  */
  readonly apacheKafkaCluster: MskconnectConnectorKafkaClusterApacheKafkaCluster;
}

export function mskconnectConnectorKafkaClusterToTerraform(struct?: MskconnectConnectorKafkaClusterOutputReference | MskconnectConnectorKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apache_kafka_cluster: mskconnectConnectorKafkaClusterApacheKafkaClusterToTerraform(struct!.apacheKafkaCluster),
  }
}

export class MskconnectConnectorKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apacheKafkaCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apacheKafkaCluster = this._apacheKafkaCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apacheKafkaCluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apacheKafkaCluster.internalValue = value.apacheKafkaCluster;
    }
  }

  // apache_kafka_cluster - computed: false, optional: false, required: true
  private _apacheKafkaCluster = new MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(this, "apache_kafka_cluster");
  public get apacheKafkaCluster() {
    return this._apacheKafkaCluster;
  }
  public putApacheKafkaCluster(value: MskconnectConnectorKafkaClusterApacheKafkaCluster) {
    this._apacheKafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheKafkaClusterInput() {
    return this._apacheKafkaCluster.internalValue;
  }
}
export interface MskconnectConnectorKafkaClusterClientAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}
  */
  readonly authenticationType?: string;
}

export function mskconnectConnectorKafkaClusterClientAuthenticationToTerraform(struct?: MskconnectConnectorKafkaClusterClientAuthenticationOutputReference | MskconnectConnectorKafkaClusterClientAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
  }
}

export class MskconnectConnectorKafkaClusterClientAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorKafkaClusterClientAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorKafkaClusterClientAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }
}
export interface MskconnectConnectorKafkaClusterEncryptionInTransit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}
  */
  readonly encryptionType?: string;
}

export function mskconnectConnectorKafkaClusterEncryptionInTransitToTerraform(struct?: MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference | MskconnectConnectorKafkaClusterEncryptionInTransit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
  }
}

export class MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorKafkaClusterEncryptionInTransit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorKafkaClusterEncryptionInTransit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionType = value.encryptionType;
    }
  }

  // encryption_type - computed: false, optional: true, required: false
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
}
export interface MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}
  */
  readonly logGroup?: string;
}

export function mskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group: cdktf.stringToTerraform(struct!.logGroup),
  }
}

export class MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function mskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: false, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}
  */
  readonly prefix?: string;
}

export function mskconnectConnectorLogDeliveryWorkerLogDeliveryS3ToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference | MskconnectConnectorLogDeliveryWorkerLogDeliveryS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface MskconnectConnectorLogDeliveryWorkerLogDelivery {
  /**
  * cloudwatch_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cloudwatch_logs MskconnectConnector#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
  /**
  * firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#firehose MskconnectConnector#firehose}
  */
  readonly firehose?: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#s3 MskconnectConnector#s3}
  */
  readonly s3?: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3;
}

export function mskconnectConnectorLogDeliveryWorkerLogDeliveryToTerraform(struct?: MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference | MskconnectConnectorLogDeliveryWorkerLogDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_logs: mskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    firehose: mskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseToTerraform(struct!.firehose),
    s3: mskconnectConnectorLogDeliveryWorkerLogDeliveryS3ToTerraform(struct!.s3),
  }
}

export class MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorLogDeliveryWorkerLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorLogDeliveryWorkerLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogs.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._firehose.internalValue = value.firehose;
      this._s3.internalValue = value.s3;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: MskconnectConnectorLogDeliveryWorkerLogDeliveryS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface MskconnectConnectorLogDelivery {
  /**
  * worker_log_delivery block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_log_delivery MskconnectConnector#worker_log_delivery}
  */
  readonly workerLogDelivery: MskconnectConnectorLogDeliveryWorkerLogDelivery;
}

export function mskconnectConnectorLogDeliveryToTerraform(struct?: MskconnectConnectorLogDeliveryOutputReference | MskconnectConnectorLogDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_log_delivery: mskconnectConnectorLogDeliveryWorkerLogDeliveryToTerraform(struct!.workerLogDelivery),
  }
}

export class MskconnectConnectorLogDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerLogDelivery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerLogDelivery = this._workerLogDelivery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerLogDelivery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerLogDelivery.internalValue = value.workerLogDelivery;
    }
  }

  // worker_log_delivery - computed: false, optional: false, required: true
  private _workerLogDelivery = new MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(this, "worker_log_delivery");
  public get workerLogDelivery() {
    return this._workerLogDelivery;
  }
  public putWorkerLogDelivery(value: MskconnectConnectorLogDeliveryWorkerLogDelivery) {
    this._workerLogDelivery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerLogDeliveryInput() {
    return this._workerLogDelivery.internalValue;
  }
}
export interface MskconnectConnectorPluginCustomPlugin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}
  */
  readonly revision: number;
}

export function mskconnectConnectorPluginCustomPluginToTerraform(struct?: MskconnectConnectorPluginCustomPluginOutputReference | MskconnectConnectorPluginCustomPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}

export class MskconnectConnectorPluginCustomPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorPluginCustomPlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorPluginCustomPlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._revision = value.revision;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface MskconnectConnectorPlugin {
  /**
  * custom_plugin block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#custom_plugin MskconnectConnector#custom_plugin}
  */
  readonly customPlugin: MskconnectConnectorPluginCustomPlugin;
}

export function mskconnectConnectorPluginToTerraform(struct?: MskconnectConnectorPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_plugin: mskconnectConnectorPluginCustomPluginToTerraform(struct!.customPlugin),
  }
}

export class MskconnectConnectorPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MskconnectConnectorPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = value.customPlugin;
    }
  }

  // custom_plugin - computed: false, optional: false, required: true
  private _customPlugin = new MskconnectConnectorPluginCustomPluginOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
  public putCustomPlugin(value: MskconnectConnectorPluginCustomPlugin) {
    this._customPlugin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin.internalValue;
  }
}

export class MskconnectConnectorPluginList extends cdktf.ComplexList {
  public internalValue? : MskconnectConnectorPlugin[] | cdktf.IResolvable

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
  public get(index: number): MskconnectConnectorPluginOutputReference {
    return new MskconnectConnectorPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskconnectConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}
  */
  readonly update?: string;
}

export function mskconnectConnectorTimeoutsToTerraform(struct?: MskconnectConnectorTimeoutsOutputReference | MskconnectConnectorTimeouts | cdktf.IResolvable): any {
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

export class MskconnectConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MskconnectConnectorTimeouts | cdktf.IResolvable | undefined) {
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
export interface MskconnectConnectorWorkerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}
  */
  readonly revision: number;
}

export function mskconnectConnectorWorkerConfigurationToTerraform(struct?: MskconnectConnectorWorkerConfigurationOutputReference | MskconnectConnectorWorkerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}

export class MskconnectConnectorWorkerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MskconnectConnectorWorkerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskconnectConnectorWorkerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._revision = value.revision;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector aws_mskconnect_connector}
*/
export class MskconnectConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mskconnect_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector aws_mskconnect_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskconnectConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: MskconnectConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mskconnect_connector',
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
    this._connectorConfiguration = config.connectorConfiguration;
    this._description = config.description;
    this._id = config.id;
    this._kafkaconnectVersion = config.kafkaconnectVersion;
    this._name = config.name;
    this._serviceExecutionRoleArn = config.serviceExecutionRoleArn;
    this._capacity.internalValue = config.capacity;
    this._kafkaCluster.internalValue = config.kafkaCluster;
    this._kafkaClusterClientAuthentication.internalValue = config.kafkaClusterClientAuthentication;
    this._kafkaClusterEncryptionInTransit.internalValue = config.kafkaClusterEncryptionInTransit;
    this._logDelivery.internalValue = config.logDelivery;
    this._plugin.internalValue = config.plugin;
    this._timeouts.internalValue = config.timeouts;
    this._workerConfiguration.internalValue = config.workerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connector_configuration - computed: false, optional: false, required: true
  private _connectorConfiguration?: { [key: string]: string }; 
  public get connectorConfiguration() {
    return this.getStringMapAttribute('connector_configuration');
  }
  public set connectorConfiguration(value: { [key: string]: string }) {
    this._connectorConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigurationInput() {
    return this._connectorConfiguration;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // kafkaconnect_version - computed: false, optional: false, required: true
  private _kafkaconnectVersion?: string; 
  public get kafkaconnectVersion() {
    return this.getStringAttribute('kafkaconnect_version');
  }
  public set kafkaconnectVersion(value: string) {
    this._kafkaconnectVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaconnectVersionInput() {
    return this._kafkaconnectVersion;
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

  // service_execution_role_arn - computed: false, optional: false, required: true
  private _serviceExecutionRoleArn?: string; 
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }
  public set serviceExecutionRoleArn(value: string) {
    this._serviceExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleArnInput() {
    return this._serviceExecutionRoleArn;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity = new MskconnectConnectorCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: MskconnectConnectorCapacity) {
    this._capacity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new MskconnectConnectorKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: MskconnectConnectorKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // kafka_cluster_client_authentication - computed: false, optional: false, required: true
  private _kafkaClusterClientAuthentication = new MskconnectConnectorKafkaClusterClientAuthenticationOutputReference(this, "kafka_cluster_client_authentication");
  public get kafkaClusterClientAuthentication() {
    return this._kafkaClusterClientAuthentication;
  }
  public putKafkaClusterClientAuthentication(value: MskconnectConnectorKafkaClusterClientAuthentication) {
    this._kafkaClusterClientAuthentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterClientAuthenticationInput() {
    return this._kafkaClusterClientAuthentication.internalValue;
  }

  // kafka_cluster_encryption_in_transit - computed: false, optional: false, required: true
  private _kafkaClusterEncryptionInTransit = new MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference(this, "kafka_cluster_encryption_in_transit");
  public get kafkaClusterEncryptionInTransit() {
    return this._kafkaClusterEncryptionInTransit;
  }
  public putKafkaClusterEncryptionInTransit(value: MskconnectConnectorKafkaClusterEncryptionInTransit) {
    this._kafkaClusterEncryptionInTransit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterEncryptionInTransitInput() {
    return this._kafkaClusterEncryptionInTransit.internalValue;
  }

  // log_delivery - computed: false, optional: true, required: false
  private _logDelivery = new MskconnectConnectorLogDeliveryOutputReference(this, "log_delivery");
  public get logDelivery() {
    return this._logDelivery;
  }
  public putLogDelivery(value: MskconnectConnectorLogDelivery) {
    this._logDelivery.internalValue = value;
  }
  public resetLogDelivery() {
    this._logDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryInput() {
    return this._logDelivery.internalValue;
  }

  // plugin - computed: false, optional: false, required: true
  private _plugin = new MskconnectConnectorPluginList(this, "plugin", true);
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: MskconnectConnectorPlugin[] | cdktf.IResolvable) {
    this._plugin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MskconnectConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MskconnectConnectorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_configuration - computed: false, optional: true, required: false
  private _workerConfiguration = new MskconnectConnectorWorkerConfigurationOutputReference(this, "worker_configuration");
  public get workerConfiguration() {
    return this._workerConfiguration;
  }
  public putWorkerConfiguration(value: MskconnectConnectorWorkerConfiguration) {
    this._workerConfiguration.internalValue = value;
  }
  public resetWorkerConfiguration() {
    this._workerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigurationInput() {
    return this._workerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._connectorConfiguration),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kafkaconnect_version: cdktf.stringToTerraform(this._kafkaconnectVersion),
      name: cdktf.stringToTerraform(this._name),
      service_execution_role_arn: cdktf.stringToTerraform(this._serviceExecutionRoleArn),
      capacity: mskconnectConnectorCapacityToTerraform(this._capacity.internalValue),
      kafka_cluster: mskconnectConnectorKafkaClusterToTerraform(this._kafkaCluster.internalValue),
      kafka_cluster_client_authentication: mskconnectConnectorKafkaClusterClientAuthenticationToTerraform(this._kafkaClusterClientAuthentication.internalValue),
      kafka_cluster_encryption_in_transit: mskconnectConnectorKafkaClusterEncryptionInTransitToTerraform(this._kafkaClusterEncryptionInTransit.internalValue),
      log_delivery: mskconnectConnectorLogDeliveryToTerraform(this._logDelivery.internalValue),
      plugin: cdktf.listMapper(mskconnectConnectorPluginToTerraform, true)(this._plugin.internalValue),
      timeouts: mskconnectConnectorTimeoutsToTerraform(this._timeouts.internalValue),
      worker_configuration: mskconnectConnectorWorkerConfigurationToTerraform(this._workerConfiguration.internalValue),
    };
  }
}
