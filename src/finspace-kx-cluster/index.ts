// https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FinspaceKxClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}
  */
  readonly azMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}
  */
  readonly commandLineArguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}
  */
  readonly executionRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}
  */
  readonly initializationScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}
  */
  readonly type: string;
  /**
  * auto_scaling_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}
  */
  readonly autoScalingConfiguration?: FinspaceKxClusterAutoScalingConfiguration;
  /**
  * cache_storage_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}
  */
  readonly cacheStorageConfigurations?: FinspaceKxClusterCacheStorageConfigurations[] | cdktf.IResolvable;
  /**
  * capacity_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}
  */
  readonly capacityConfiguration?: FinspaceKxClusterCapacityConfiguration;
  /**
  * code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}
  */
  readonly code?: FinspaceKxClusterCode;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}
  */
  readonly database?: FinspaceKxClusterDatabase[] | cdktf.IResolvable;
  /**
  * savedown_storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}
  */
  readonly savedownStorageConfiguration?: FinspaceKxClusterSavedownStorageConfiguration;
  /**
  * scaling_group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#scaling_group_configuration FinspaceKxCluster#scaling_group_configuration}
  */
  readonly scalingGroupConfiguration?: FinspaceKxClusterScalingGroupConfiguration;
  /**
  * tickerplant_log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#tickerplant_log_configuration FinspaceKxCluster#tickerplant_log_configuration}
  */
  readonly tickerplantLogConfiguration?: FinspaceKxClusterTickerplantLogConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}
  */
  readonly timeouts?: FinspaceKxClusterTimeouts;
  /**
  * vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}
  */
  readonly vpcConfiguration: FinspaceKxClusterVpcConfiguration;
}
export interface FinspaceKxClusterAutoScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}
  */
  readonly autoScalingMetric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}
  */
  readonly metricTarget: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}
  */
  readonly minNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}
  */
  readonly scaleInCooldownSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}
  */
  readonly scaleOutCooldownSeconds: number;
}

export function finspaceKxClusterAutoScalingConfigurationToTerraform(struct?: FinspaceKxClusterAutoScalingConfigurationOutputReference | FinspaceKxClusterAutoScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling_metric: cdktf.stringToTerraform(struct!.autoScalingMetric),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    metric_target: cdktf.numberToTerraform(struct!.metricTarget),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    scale_in_cooldown_seconds: cdktf.numberToTerraform(struct!.scaleInCooldownSeconds),
    scale_out_cooldown_seconds: cdktf.numberToTerraform(struct!.scaleOutCooldownSeconds),
  }
}


export function finspaceKxClusterAutoScalingConfigurationToHclTerraform(struct?: FinspaceKxClusterAutoScalingConfigurationOutputReference | FinspaceKxClusterAutoScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling_metric: {
      value: cdktf.stringToHclTerraform(struct!.autoScalingMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_target: {
      value: cdktf.numberToHclTerraform(struct!.metricTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scaleInCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scaleOutCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterAutoScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FinspaceKxClusterAutoScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingMetric = this._autoScalingMetric;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._metricTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTarget = this._metricTarget;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._scaleInCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldownSeconds = this._scaleInCooldownSeconds;
    }
    if (this._scaleOutCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldownSeconds = this._scaleOutCooldownSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterAutoScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScalingMetric = undefined;
      this._maxNodeCount = undefined;
      this._metricTarget = undefined;
      this._minNodeCount = undefined;
      this._scaleInCooldownSeconds = undefined;
      this._scaleOutCooldownSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScalingMetric = value.autoScalingMetric;
      this._maxNodeCount = value.maxNodeCount;
      this._metricTarget = value.metricTarget;
      this._minNodeCount = value.minNodeCount;
      this._scaleInCooldownSeconds = value.scaleInCooldownSeconds;
      this._scaleOutCooldownSeconds = value.scaleOutCooldownSeconds;
    }
  }

  // auto_scaling_metric - computed: false, optional: false, required: true
  private _autoScalingMetric?: string; 
  public get autoScalingMetric() {
    return this.getStringAttribute('auto_scaling_metric');
  }
  public set autoScalingMetric(value: string) {
    this._autoScalingMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingMetricInput() {
    return this._autoScalingMetric;
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // metric_target - computed: false, optional: false, required: true
  private _metricTarget?: number; 
  public get metricTarget() {
    return this.getNumberAttribute('metric_target');
  }
  public set metricTarget(value: number) {
    this._metricTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTargetInput() {
    return this._metricTarget;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // scale_in_cooldown_seconds - computed: false, optional: false, required: true
  private _scaleInCooldownSeconds?: number; 
  public get scaleInCooldownSeconds() {
    return this.getNumberAttribute('scale_in_cooldown_seconds');
  }
  public set scaleInCooldownSeconds(value: number) {
    this._scaleInCooldownSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownSecondsInput() {
    return this._scaleInCooldownSeconds;
  }

  // scale_out_cooldown_seconds - computed: false, optional: false, required: true
  private _scaleOutCooldownSeconds?: number; 
  public get scaleOutCooldownSeconds() {
    return this.getNumberAttribute('scale_out_cooldown_seconds');
  }
  public set scaleOutCooldownSeconds(value: number) {
    this._scaleOutCooldownSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownSecondsInput() {
    return this._scaleOutCooldownSeconds;
  }
}
export interface FinspaceKxClusterCacheStorageConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}
  */
  readonly type: string;
}

export function finspaceKxClusterCacheStorageConfigurationsToTerraform(struct?: FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function finspaceKxClusterCacheStorageConfigurationsToHclTerraform(struct?: FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterCacheStorageConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._size = value.size;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FinspaceKxClusterCacheStorageConfigurationsList extends cdktf.ComplexList {
  public internalValue? : FinspaceKxClusterCacheStorageConfigurations[] | cdktf.IResolvable

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
  public get(index: number): FinspaceKxClusterCacheStorageConfigurationsOutputReference {
    return new FinspaceKxClusterCacheStorageConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FinspaceKxClusterCapacityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}
  */
  readonly nodeType: string;
}

export function finspaceKxClusterCapacityConfigurationToTerraform(struct?: FinspaceKxClusterCapacityConfigurationOutputReference | FinspaceKxClusterCapacityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
  }
}


export function finspaceKxClusterCapacityConfigurationToHclTerraform(struct?: FinspaceKxClusterCapacityConfigurationOutputReference | FinspaceKxClusterCapacityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterCapacityConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FinspaceKxClusterCapacityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterCapacityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCount = undefined;
      this._nodeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCount = value.nodeCount;
      this._nodeType = value.nodeType;
    }
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }
}
export interface FinspaceKxClusterCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}
  */
  readonly s3Key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
}

export function finspaceKxClusterCodeToTerraform(struct?: FinspaceKxClusterCodeOutputReference | FinspaceKxClusterCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
    s3_object_version: cdktf.stringToTerraform(struct!.s3ObjectVersion),
  }
}


export function finspaceKxClusterCodeToHclTerraform(struct?: FinspaceKxClusterCodeOutputReference | FinspaceKxClusterCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key: {
      value: cdktf.stringToHclTerraform(struct!.s3Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_version: {
      value: cdktf.stringToHclTerraform(struct!.s3ObjectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FinspaceKxClusterCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    if (this._s3ObjectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectVersion = this._s3ObjectVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Key = undefined;
      this._s3ObjectVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Key = value.s3Key;
      this._s3ObjectVersion = value.s3ObjectVersion;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: false, required: true
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string; 
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion;
  }
}
export interface FinspaceKxClusterDatabaseCacheConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}
  */
  readonly cacheType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}
  */
  readonly dbPaths?: string[];
}

export function finspaceKxClusterDatabaseCacheConfigurationsToTerraform(struct?: FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_type: cdktf.stringToTerraform(struct!.cacheType),
    db_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbPaths),
  }
}


export function finspaceKxClusterDatabaseCacheConfigurationsToHclTerraform(struct?: FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_type: {
      value: cdktf.stringToHclTerraform(struct!.cacheType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterDatabaseCacheConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheType = this._cacheType;
    }
    if (this._dbPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPaths = this._dbPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheType = undefined;
      this._dbPaths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheType = value.cacheType;
      this._dbPaths = value.dbPaths;
    }
  }

  // cache_type - computed: false, optional: false, required: true
  private _cacheType?: string; 
  public get cacheType() {
    return this.getStringAttribute('cache_type');
  }
  public set cacheType(value: string) {
    this._cacheType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // db_paths - computed: false, optional: true, required: false
  private _dbPaths?: string[]; 
  public get dbPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('db_paths'));
  }
  public set dbPaths(value: string[]) {
    this._dbPaths = value;
  }
  public resetDbPaths() {
    this._dbPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPathsInput() {
    return this._dbPaths;
  }
}

export class FinspaceKxClusterDatabaseCacheConfigurationsList extends cdktf.ComplexList {
  public internalValue? : FinspaceKxClusterDatabaseCacheConfigurations[] | cdktf.IResolvable

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
  public get(index: number): FinspaceKxClusterDatabaseCacheConfigurationsOutputReference {
    return new FinspaceKxClusterDatabaseCacheConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FinspaceKxClusterDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}
  */
  readonly changesetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}
  */
  readonly dataviewName?: string;
  /**
  * cache_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#cache_configurations FinspaceKxCluster#cache_configurations}
  */
  readonly cacheConfigurations?: FinspaceKxClusterDatabaseCacheConfigurations[] | cdktf.IResolvable;
}

export function finspaceKxClusterDatabaseToTerraform(struct?: FinspaceKxClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    changeset_id: cdktf.stringToTerraform(struct!.changesetId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    dataview_name: cdktf.stringToTerraform(struct!.dataviewName),
    cache_configurations: cdktf.listMapper(finspaceKxClusterDatabaseCacheConfigurationsToTerraform, true)(struct!.cacheConfigurations),
  }
}


export function finspaceKxClusterDatabaseToHclTerraform(struct?: FinspaceKxClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    changeset_id: {
      value: cdktf.stringToHclTerraform(struct!.changesetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataview_name: {
      value: cdktf.stringToHclTerraform(struct!.dataviewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_configurations: {
      value: cdktf.listMapperHcl(finspaceKxClusterDatabaseCacheConfigurationsToHclTerraform, true)(struct!.cacheConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "FinspaceKxClusterDatabaseCacheConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FinspaceKxClusterDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changesetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.changesetId = this._changesetId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dataviewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataviewName = this._dataviewName;
    }
    if (this._cacheConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheConfigurations = this._cacheConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changesetId = undefined;
      this._databaseName = undefined;
      this._dataviewName = undefined;
      this._cacheConfigurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changesetId = value.changesetId;
      this._databaseName = value.databaseName;
      this._dataviewName = value.dataviewName;
      this._cacheConfigurations.internalValue = value.cacheConfigurations;
    }
  }

  // changeset_id - computed: false, optional: true, required: false
  private _changesetId?: string; 
  public get changesetId() {
    return this.getStringAttribute('changeset_id');
  }
  public set changesetId(value: string) {
    this._changesetId = value;
  }
  public resetChangesetId() {
    this._changesetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changesetIdInput() {
    return this._changesetId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // dataview_name - computed: false, optional: true, required: false
  private _dataviewName?: string; 
  public get dataviewName() {
    return this.getStringAttribute('dataview_name');
  }
  public set dataviewName(value: string) {
    this._dataviewName = value;
  }
  public resetDataviewName() {
    this._dataviewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataviewNameInput() {
    return this._dataviewName;
  }

  // cache_configurations - computed: false, optional: true, required: false
  private _cacheConfigurations = new FinspaceKxClusterDatabaseCacheConfigurationsList(this, "cache_configurations", false);
  public get cacheConfigurations() {
    return this._cacheConfigurations;
  }
  public putCacheConfigurations(value: FinspaceKxClusterDatabaseCacheConfigurations[] | cdktf.IResolvable) {
    this._cacheConfigurations.internalValue = value;
  }
  public resetCacheConfigurations() {
    this._cacheConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigurationsInput() {
    return this._cacheConfigurations.internalValue;
  }
}

export class FinspaceKxClusterDatabaseList extends cdktf.ComplexList {
  public internalValue? : FinspaceKxClusterDatabase[] | cdktf.IResolvable

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
  public get(index: number): FinspaceKxClusterDatabaseOutputReference {
    return new FinspaceKxClusterDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FinspaceKxClusterSavedownStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}
  */
  readonly volumeName?: string;
}

export function finspaceKxClusterSavedownStorageConfigurationToTerraform(struct?: FinspaceKxClusterSavedownStorageConfigurationOutputReference | FinspaceKxClusterSavedownStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function finspaceKxClusterSavedownStorageConfigurationToHclTerraform(struct?: FinspaceKxClusterSavedownStorageConfigurationOutputReference | FinspaceKxClusterSavedownStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterSavedownStorageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FinspaceKxClusterSavedownStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterSavedownStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._type = undefined;
      this._volumeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._type = value.type;
      this._volumeName = value.volumeName;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
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

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface FinspaceKxClusterScalingGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}
  */
  readonly memoryReservation: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}
  */
  readonly scalingGroupName: string;
}

export function finspaceKxClusterScalingGroupConfigurationToTerraform(struct?: FinspaceKxClusterScalingGroupConfigurationOutputReference | FinspaceKxClusterScalingGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory_limit: cdktf.numberToTerraform(struct!.memoryLimit),
    memory_reservation: cdktf.numberToTerraform(struct!.memoryReservation),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    scaling_group_name: cdktf.stringToTerraform(struct!.scalingGroupName),
  }
}


export function finspaceKxClusterScalingGroupConfigurationToHclTerraform(struct?: FinspaceKxClusterScalingGroupConfigurationOutputReference | FinspaceKxClusterScalingGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation: {
      value: cdktf.numberToHclTerraform(struct!.memoryReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_group_name: {
      value: cdktf.stringToHclTerraform(struct!.scalingGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterScalingGroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FinspaceKxClusterScalingGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservation = this._memoryReservation;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._scalingGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingGroupName = this._scalingGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterScalingGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memoryLimit = undefined;
      this._memoryReservation = undefined;
      this._nodeCount = undefined;
      this._scalingGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memoryLimit = value.memoryLimit;
      this._memoryReservation = value.memoryReservation;
      this._nodeCount = value.nodeCount;
      this._scalingGroupName = value.scalingGroupName;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_reservation - computed: false, optional: false, required: true
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // scaling_group_name - computed: false, optional: false, required: true
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }
}
export interface FinspaceKxClusterTickerplantLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}
  */
  readonly tickerplantLogVolumes: string[];
}

export function finspaceKxClusterTickerplantLogConfigurationToTerraform(struct?: FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tickerplant_log_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tickerplantLogVolumes),
  }
}


export function finspaceKxClusterTickerplantLogConfigurationToHclTerraform(struct?: FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tickerplant_log_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tickerplantLogVolumes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterTickerplantLogConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tickerplantLogVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickerplantLogVolumes = this._tickerplantLogVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tickerplantLogVolumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tickerplantLogVolumes = value.tickerplantLogVolumes;
    }
  }

  // tickerplant_log_volumes - computed: false, optional: false, required: true
  private _tickerplantLogVolumes?: string[]; 
  public get tickerplantLogVolumes() {
    return cdktf.Fn.tolist(this.getListAttribute('tickerplant_log_volumes'));
  }
  public set tickerplantLogVolumes(value: string[]) {
    this._tickerplantLogVolumes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tickerplantLogVolumesInput() {
    return this._tickerplantLogVolumes;
  }
}

export class FinspaceKxClusterTickerplantLogConfigurationList extends cdktf.ComplexList {
  public internalValue? : FinspaceKxClusterTickerplantLogConfiguration[] | cdktf.IResolvable

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
  public get(index: number): FinspaceKxClusterTickerplantLogConfigurationOutputReference {
    return new FinspaceKxClusterTickerplantLogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FinspaceKxClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}
  */
  readonly update?: string;
}

export function finspaceKxClusterTimeoutsToTerraform(struct?: FinspaceKxClusterTimeouts | cdktf.IResolvable): any {
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


export function finspaceKxClusterTimeoutsToHclTerraform(struct?: FinspaceKxClusterTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FinspaceKxClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FinspaceKxClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface FinspaceKxClusterVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}
  */
  readonly ipAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}
  */
  readonly vpcId: string;
}

export function finspaceKxClusterVpcConfigurationToTerraform(struct?: FinspaceKxClusterVpcConfigurationOutputReference | FinspaceKxClusterVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function finspaceKxClusterVpcConfigurationToHclTerraform(struct?: FinspaceKxClusterVpcConfigurationOutputReference | FinspaceKxClusterVpcConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxClusterVpcConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FinspaceKxClusterVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxClusterVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressType = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressType = value.ipAddressType;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // ip_address_type - computed: false, optional: false, required: true
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster}
*/
export class FinspaceKxCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_finspace_kx_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FinspaceKxCluster to import
  * @param importFromId The id of the existing FinspaceKxCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FinspaceKxCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_finspace_kx_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FinspaceKxClusterConfig
  */
  public constructor(scope: Construct, id: string, config: FinspaceKxClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_finspace_kx_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZoneId = config.availabilityZoneId;
    this._azMode = config.azMode;
    this._commandLineArguments = config.commandLineArguments;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._executionRole = config.executionRole;
    this._id = config.id;
    this._initializationScript = config.initializationScript;
    this._name = config.name;
    this._releaseLabel = config.releaseLabel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._autoScalingConfiguration.internalValue = config.autoScalingConfiguration;
    this._cacheStorageConfigurations.internalValue = config.cacheStorageConfigurations;
    this._capacityConfiguration.internalValue = config.capacityConfiguration;
    this._code.internalValue = config.code;
    this._database.internalValue = config.database;
    this._savedownStorageConfiguration.internalValue = config.savedownStorageConfiguration;
    this._scalingGroupConfiguration.internalValue = config.scalingGroupConfiguration;
    this._tickerplantLogConfiguration.internalValue = config.tickerplantLogConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfiguration.internalValue = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_id - computed: false, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // az_mode - computed: false, optional: false, required: true
  private _azMode?: string; 
  public get azMode() {
    return this.getStringAttribute('az_mode');
  }
  public set azMode(value: string) {
    this._azMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azModeInput() {
    return this._azMode;
  }

  // command_line_arguments - computed: false, optional: true, required: false
  private _commandLineArguments?: { [key: string]: string }; 
  public get commandLineArguments() {
    return this.getStringMapAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: { [key: string]: string }) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
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

  // initialization_script - computed: false, optional: true, required: false
  private _initializationScript?: string; 
  public get initializationScript() {
    return this.getStringAttribute('initialization_script');
  }
  public set initializationScript(value: string) {
    this._initializationScript = value;
  }
  public resetInitializationScript() {
    this._initializationScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationScriptInput() {
    return this._initializationScript;
  }

  // last_modified_timestamp - computed: true, optional: false, required: false
  public get lastModifiedTimestamp() {
    return this.getStringAttribute('last_modified_timestamp');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // auto_scaling_configuration - computed: false, optional: true, required: false
  private _autoScalingConfiguration = new FinspaceKxClusterAutoScalingConfigurationOutputReference(this, "auto_scaling_configuration");
  public get autoScalingConfiguration() {
    return this._autoScalingConfiguration;
  }
  public putAutoScalingConfiguration(value: FinspaceKxClusterAutoScalingConfiguration) {
    this._autoScalingConfiguration.internalValue = value;
  }
  public resetAutoScalingConfiguration() {
    this._autoScalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationInput() {
    return this._autoScalingConfiguration.internalValue;
  }

  // cache_storage_configurations - computed: false, optional: true, required: false
  private _cacheStorageConfigurations = new FinspaceKxClusterCacheStorageConfigurationsList(this, "cache_storage_configurations", false);
  public get cacheStorageConfigurations() {
    return this._cacheStorageConfigurations;
  }
  public putCacheStorageConfigurations(value: FinspaceKxClusterCacheStorageConfigurations[] | cdktf.IResolvable) {
    this._cacheStorageConfigurations.internalValue = value;
  }
  public resetCacheStorageConfigurations() {
    this._cacheStorageConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheStorageConfigurationsInput() {
    return this._cacheStorageConfigurations.internalValue;
  }

  // capacity_configuration - computed: false, optional: true, required: false
  private _capacityConfiguration = new FinspaceKxClusterCapacityConfigurationOutputReference(this, "capacity_configuration");
  public get capacityConfiguration() {
    return this._capacityConfiguration;
  }
  public putCapacityConfiguration(value: FinspaceKxClusterCapacityConfiguration) {
    this._capacityConfiguration.internalValue = value;
  }
  public resetCapacityConfiguration() {
    this._capacityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityConfigurationInput() {
    return this._capacityConfiguration.internalValue;
  }

  // code - computed: false, optional: true, required: false
  private _code = new FinspaceKxClusterCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: FinspaceKxClusterCode) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new FinspaceKxClusterDatabaseList(this, "database", false);
  public get database() {
    return this._database;
  }
  public putDatabase(value: FinspaceKxClusterDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // savedown_storage_configuration - computed: false, optional: true, required: false
  private _savedownStorageConfiguration = new FinspaceKxClusterSavedownStorageConfigurationOutputReference(this, "savedown_storage_configuration");
  public get savedownStorageConfiguration() {
    return this._savedownStorageConfiguration;
  }
  public putSavedownStorageConfiguration(value: FinspaceKxClusterSavedownStorageConfiguration) {
    this._savedownStorageConfiguration.internalValue = value;
  }
  public resetSavedownStorageConfiguration() {
    this._savedownStorageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedownStorageConfigurationInput() {
    return this._savedownStorageConfiguration.internalValue;
  }

  // scaling_group_configuration - computed: false, optional: true, required: false
  private _scalingGroupConfiguration = new FinspaceKxClusterScalingGroupConfigurationOutputReference(this, "scaling_group_configuration");
  public get scalingGroupConfiguration() {
    return this._scalingGroupConfiguration;
  }
  public putScalingGroupConfiguration(value: FinspaceKxClusterScalingGroupConfiguration) {
    this._scalingGroupConfiguration.internalValue = value;
  }
  public resetScalingGroupConfiguration() {
    this._scalingGroupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupConfigurationInput() {
    return this._scalingGroupConfiguration.internalValue;
  }

  // tickerplant_log_configuration - computed: false, optional: true, required: false
  private _tickerplantLogConfiguration = new FinspaceKxClusterTickerplantLogConfigurationList(this, "tickerplant_log_configuration", false);
  public get tickerplantLogConfiguration() {
    return this._tickerplantLogConfiguration;
  }
  public putTickerplantLogConfiguration(value: FinspaceKxClusterTickerplantLogConfiguration[] | cdktf.IResolvable) {
    this._tickerplantLogConfiguration.internalValue = value;
  }
  public resetTickerplantLogConfiguration() {
    this._tickerplantLogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickerplantLogConfigurationInput() {
    return this._tickerplantLogConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FinspaceKxClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FinspaceKxClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_configuration - computed: false, optional: false, required: true
  private _vpcConfiguration = new FinspaceKxClusterVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: FinspaceKxClusterVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
      az_mode: cdktf.stringToTerraform(this._azMode),
      command_line_arguments: cdktf.hashMapper(cdktf.stringToTerraform)(this._commandLineArguments),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      execution_role: cdktf.stringToTerraform(this._executionRole),
      id: cdktf.stringToTerraform(this._id),
      initialization_script: cdktf.stringToTerraform(this._initializationScript),
      name: cdktf.stringToTerraform(this._name),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      auto_scaling_configuration: finspaceKxClusterAutoScalingConfigurationToTerraform(this._autoScalingConfiguration.internalValue),
      cache_storage_configurations: cdktf.listMapper(finspaceKxClusterCacheStorageConfigurationsToTerraform, true)(this._cacheStorageConfigurations.internalValue),
      capacity_configuration: finspaceKxClusterCapacityConfigurationToTerraform(this._capacityConfiguration.internalValue),
      code: finspaceKxClusterCodeToTerraform(this._code.internalValue),
      database: cdktf.listMapper(finspaceKxClusterDatabaseToTerraform, true)(this._database.internalValue),
      savedown_storage_configuration: finspaceKxClusterSavedownStorageConfigurationToTerraform(this._savedownStorageConfiguration.internalValue),
      scaling_group_configuration: finspaceKxClusterScalingGroupConfigurationToTerraform(this._scalingGroupConfiguration.internalValue),
      tickerplant_log_configuration: cdktf.listMapper(finspaceKxClusterTickerplantLogConfigurationToTerraform, true)(this._tickerplantLogConfiguration.internalValue),
      timeouts: finspaceKxClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_configuration: finspaceKxClusterVpcConfigurationToTerraform(this._vpcConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_id: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      az_mode: {
        value: cdktf.stringToHclTerraform(this._azMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_line_arguments: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._commandLineArguments),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role: {
        value: cdktf.stringToHclTerraform(this._executionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initialization_script: {
        value: cdktf.stringToHclTerraform(this._initializationScript),
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
      release_label: {
        value: cdktf.stringToHclTerraform(this._releaseLabel),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scaling_configuration: {
        value: finspaceKxClusterAutoScalingConfigurationToHclTerraform(this._autoScalingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterAutoScalingConfigurationList",
      },
      cache_storage_configurations: {
        value: cdktf.listMapperHcl(finspaceKxClusterCacheStorageConfigurationsToHclTerraform, true)(this._cacheStorageConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterCacheStorageConfigurationsList",
      },
      capacity_configuration: {
        value: finspaceKxClusterCapacityConfigurationToHclTerraform(this._capacityConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterCapacityConfigurationList",
      },
      code: {
        value: finspaceKxClusterCodeToHclTerraform(this._code.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterCodeList",
      },
      database: {
        value: cdktf.listMapperHcl(finspaceKxClusterDatabaseToHclTerraform, true)(this._database.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterDatabaseList",
      },
      savedown_storage_configuration: {
        value: finspaceKxClusterSavedownStorageConfigurationToHclTerraform(this._savedownStorageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterSavedownStorageConfigurationList",
      },
      scaling_group_configuration: {
        value: finspaceKxClusterScalingGroupConfigurationToHclTerraform(this._scalingGroupConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterScalingGroupConfigurationList",
      },
      tickerplant_log_configuration: {
        value: cdktf.listMapperHcl(finspaceKxClusterTickerplantLogConfigurationToHclTerraform, true)(this._tickerplantLogConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterTickerplantLogConfigurationList",
      },
      timeouts: {
        value: finspaceKxClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FinspaceKxClusterTimeouts",
      },
      vpc_configuration: {
        value: finspaceKxClusterVpcConfigurationToHclTerraform(this._vpcConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxClusterVpcConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
