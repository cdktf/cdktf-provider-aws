// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2InstanceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#default_cores DataAwsEc2InstanceType#default_cores}
  */
  readonly defaultCores?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#default_threads_per_core DataAwsEc2InstanceType#default_threads_per_core}
  */
  readonly defaultThreadsPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#hypervisor DataAwsEc2InstanceType#hypervisor}
  */
  readonly hypervisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#id DataAwsEc2InstanceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#maximum_ipv6_addresses_per_interface DataAwsEc2InstanceType#maximum_ipv6_addresses_per_interface}
  */
  readonly maximumIpv6AddressesPerInterface?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#total_fpga_memory DataAwsEc2InstanceType#total_fpga_memory}
  */
  readonly totalFpgaMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#total_gpu_memory DataAwsEc2InstanceType#total_gpu_memory}
  */
  readonly totalGpuMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#total_instance_storage DataAwsEc2InstanceType#total_instance_storage}
  */
  readonly totalInstanceStorage?: number;
  /**
  * fpgas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#fpgas DataAwsEc2InstanceType#fpgas}
  */
  readonly fpgas?: DataAwsEc2InstanceTypeFpgas[] | cdktf.IResolvable;
  /**
  * gpus block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#gpus DataAwsEc2InstanceType#gpus}
  */
  readonly gpus?: DataAwsEc2InstanceTypeGpus[] | cdktf.IResolvable;
  /**
  * inference_accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#inference_accelerators DataAwsEc2InstanceType#inference_accelerators}
  */
  readonly inferenceAccelerators?: DataAwsEc2InstanceTypeInferenceAccelerators[] | cdktf.IResolvable;
  /**
  * instance_disks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_disks DataAwsEc2InstanceType#instance_disks}
  */
  readonly instanceDisks?: DataAwsEc2InstanceTypeInstanceDisks[] | cdktf.IResolvable;
}
export interface DataAwsEc2InstanceTypeFpgas {
}

export function dataAwsEc2InstanceTypeFpgasToTerraform(struct?: DataAwsEc2InstanceTypeFpgas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsEc2InstanceTypeFpgasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeFpgas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeFpgas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeFpgasList extends cdktf.ComplexList {
  public internalValue? : DataAwsEc2InstanceTypeFpgas[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEc2InstanceTypeFpgasOutputReference {
    return new DataAwsEc2InstanceTypeFpgasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeGpus {
}

export function dataAwsEc2InstanceTypeGpusToTerraform(struct?: DataAwsEc2InstanceTypeGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsEc2InstanceTypeGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeGpus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeGpus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeGpusList extends cdktf.ComplexList {
  public internalValue? : DataAwsEc2InstanceTypeGpus[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEc2InstanceTypeGpusOutputReference {
    return new DataAwsEc2InstanceTypeGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeInferenceAccelerators {
}

export function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeInferenceAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeInferenceAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsEc2InstanceTypeInferenceAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : DataAwsEc2InstanceTypeInferenceAccelerators[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference {
    return new DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2InstanceTypeInstanceDisks {
}

export function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsEc2InstanceTypeInstanceDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2InstanceTypeInstanceDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2InstanceTypeInstanceDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsEc2InstanceTypeInstanceDisksList extends cdktf.ComplexList {
  public internalValue? : DataAwsEc2InstanceTypeInstanceDisks[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEc2InstanceTypeInstanceDisksOutputReference {
    return new DataAwsEc2InstanceTypeInstanceDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type aws_ec2_instance_type}
*/
export class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_instance_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type aws_ec2_instance_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2InstanceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_instance_type',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.15.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultCores = config.defaultCores;
    this._defaultThreadsPerCore = config.defaultThreadsPerCore;
    this._hypervisor = config.hypervisor;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._maximumIpv6AddressesPerInterface = config.maximumIpv6AddressesPerInterface;
    this._totalFpgaMemory = config.totalFpgaMemory;
    this._totalGpuMemory = config.totalGpuMemory;
    this._totalInstanceStorage = config.totalInstanceStorage;
    this._fpgas.internalValue = config.fpgas;
    this._gpus.internalValue = config.gpus;
    this._inferenceAccelerators.internalValue = config.inferenceAccelerators;
    this._instanceDisks.internalValue = config.instanceDisks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery_supported - computed: true, optional: false, required: false
  public get autoRecoverySupported() {
    return this.getBooleanAttribute('auto_recovery_supported');
  }

  // bare_metal - computed: true, optional: false, required: false
  public get bareMetal() {
    return this.getBooleanAttribute('bare_metal');
  }

  // burstable_performance_supported - computed: true, optional: false, required: false
  public get burstablePerformanceSupported() {
    return this.getBooleanAttribute('burstable_performance_supported');
  }

  // current_generation - computed: true, optional: false, required: false
  public get currentGeneration() {
    return this.getBooleanAttribute('current_generation');
  }

  // dedicated_hosts_supported - computed: true, optional: false, required: false
  public get dedicatedHostsSupported() {
    return this.getBooleanAttribute('dedicated_hosts_supported');
  }

  // default_cores - computed: true, optional: true, required: false
  private _defaultCores?: number; 
  public get defaultCores() {
    return this.getNumberAttribute('default_cores');
  }
  public set defaultCores(value: number) {
    this._defaultCores = value;
  }
  public resetDefaultCores() {
    this._defaultCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCoresInput() {
    return this._defaultCores;
  }

  // default_threads_per_core - computed: true, optional: true, required: false
  private _defaultThreadsPerCore?: number; 
  public get defaultThreadsPerCore() {
    return this.getNumberAttribute('default_threads_per_core');
  }
  public set defaultThreadsPerCore(value: number) {
    this._defaultThreadsPerCore = value;
  }
  public resetDefaultThreadsPerCore() {
    this._defaultThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultThreadsPerCoreInput() {
    return this._defaultThreadsPerCore;
  }

  // default_vcpus - computed: true, optional: false, required: false
  public get defaultVcpus() {
    return this.getNumberAttribute('default_vcpus');
  }

  // ebs_encryption_support - computed: true, optional: false, required: false
  public get ebsEncryptionSupport() {
    return this.getStringAttribute('ebs_encryption_support');
  }

  // ebs_nvme_support - computed: true, optional: false, required: false
  public get ebsNvmeSupport() {
    return this.getStringAttribute('ebs_nvme_support');
  }

  // ebs_optimized_support - computed: true, optional: false, required: false
  public get ebsOptimizedSupport() {
    return this.getStringAttribute('ebs_optimized_support');
  }

  // ebs_performance_baseline_bandwidth - computed: true, optional: false, required: false
  public get ebsPerformanceBaselineBandwidth() {
    return this.getNumberAttribute('ebs_performance_baseline_bandwidth');
  }

  // ebs_performance_baseline_iops - computed: true, optional: false, required: false
  public get ebsPerformanceBaselineIops() {
    return this.getNumberAttribute('ebs_performance_baseline_iops');
  }

  // ebs_performance_baseline_throughput - computed: true, optional: false, required: false
  public get ebsPerformanceBaselineThroughput() {
    return this.getNumberAttribute('ebs_performance_baseline_throughput');
  }

  // ebs_performance_maximum_bandwidth - computed: true, optional: false, required: false
  public get ebsPerformanceMaximumBandwidth() {
    return this.getNumberAttribute('ebs_performance_maximum_bandwidth');
  }

  // ebs_performance_maximum_iops - computed: true, optional: false, required: false
  public get ebsPerformanceMaximumIops() {
    return this.getNumberAttribute('ebs_performance_maximum_iops');
  }

  // ebs_performance_maximum_throughput - computed: true, optional: false, required: false
  public get ebsPerformanceMaximumThroughput() {
    return this.getNumberAttribute('ebs_performance_maximum_throughput');
  }

  // efa_supported - computed: true, optional: false, required: false
  public get efaSupported() {
    return this.getBooleanAttribute('efa_supported');
  }

  // ena_support - computed: true, optional: false, required: false
  public get enaSupport() {
    return this.getStringAttribute('ena_support');
  }

  // encryption_in_transit_supported - computed: true, optional: false, required: false
  public get encryptionInTransitSupported() {
    return this.getBooleanAttribute('encryption_in_transit_supported');
  }

  // free_tier_eligible - computed: true, optional: false, required: false
  public get freeTierEligible() {
    return this.getBooleanAttribute('free_tier_eligible');
  }

  // hibernation_supported - computed: true, optional: false, required: false
  public get hibernationSupported() {
    return this.getBooleanAttribute('hibernation_supported');
  }

  // hypervisor - computed: true, optional: true, required: false
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
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

  // instance_storage_supported - computed: true, optional: false, required: false
  public get instanceStorageSupported() {
    return this.getBooleanAttribute('instance_storage_supported');
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

  // ipv6_supported - computed: true, optional: false, required: false
  public get ipv6Supported() {
    return this.getBooleanAttribute('ipv6_supported');
  }

  // maximum_ipv4_addresses_per_interface - computed: true, optional: false, required: false
  public get maximumIpv4AddressesPerInterface() {
    return this.getNumberAttribute('maximum_ipv4_addresses_per_interface');
  }

  // maximum_ipv6_addresses_per_interface - computed: true, optional: true, required: false
  private _maximumIpv6AddressesPerInterface?: number; 
  public get maximumIpv6AddressesPerInterface() {
    return this.getNumberAttribute('maximum_ipv6_addresses_per_interface');
  }
  public set maximumIpv6AddressesPerInterface(value: number) {
    this._maximumIpv6AddressesPerInterface = value;
  }
  public resetMaximumIpv6AddressesPerInterface() {
    this._maximumIpv6AddressesPerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumIpv6AddressesPerInterfaceInput() {
    return this._maximumIpv6AddressesPerInterface;
  }

  // maximum_network_interfaces - computed: true, optional: false, required: false
  public get maximumNetworkInterfaces() {
    return this.getNumberAttribute('maximum_network_interfaces');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // network_performance - computed: true, optional: false, required: false
  public get networkPerformance() {
    return this.getStringAttribute('network_performance');
  }

  // supported_architectures - computed: true, optional: false, required: false
  public get supportedArchitectures() {
    return this.getListAttribute('supported_architectures');
  }

  // supported_placement_strategies - computed: true, optional: false, required: false
  public get supportedPlacementStrategies() {
    return this.getListAttribute('supported_placement_strategies');
  }

  // supported_root_device_types - computed: true, optional: false, required: false
  public get supportedRootDeviceTypes() {
    return this.getListAttribute('supported_root_device_types');
  }

  // supported_usages_classes - computed: true, optional: false, required: false
  public get supportedUsagesClasses() {
    return this.getListAttribute('supported_usages_classes');
  }

  // supported_virtualization_types - computed: true, optional: false, required: false
  public get supportedVirtualizationTypes() {
    return this.getListAttribute('supported_virtualization_types');
  }

  // sustained_clock_speed - computed: true, optional: false, required: false
  public get sustainedClockSpeed() {
    return this.getNumberAttribute('sustained_clock_speed');
  }

  // total_fpga_memory - computed: true, optional: true, required: false
  private _totalFpgaMemory?: number; 
  public get totalFpgaMemory() {
    return this.getNumberAttribute('total_fpga_memory');
  }
  public set totalFpgaMemory(value: number) {
    this._totalFpgaMemory = value;
  }
  public resetTotalFpgaMemory() {
    this._totalFpgaMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFpgaMemoryInput() {
    return this._totalFpgaMemory;
  }

  // total_gpu_memory - computed: true, optional: true, required: false
  private _totalGpuMemory?: number; 
  public get totalGpuMemory() {
    return this.getNumberAttribute('total_gpu_memory');
  }
  public set totalGpuMemory(value: number) {
    this._totalGpuMemory = value;
  }
  public resetTotalGpuMemory() {
    this._totalGpuMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalGpuMemoryInput() {
    return this._totalGpuMemory;
  }

  // total_instance_storage - computed: true, optional: true, required: false
  private _totalInstanceStorage?: number; 
  public get totalInstanceStorage() {
    return this.getNumberAttribute('total_instance_storage');
  }
  public set totalInstanceStorage(value: number) {
    this._totalInstanceStorage = value;
  }
  public resetTotalInstanceStorage() {
    this._totalInstanceStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInstanceStorageInput() {
    return this._totalInstanceStorage;
  }

  // valid_cores - computed: true, optional: false, required: false
  public get validCores() {
    return this.getNumberListAttribute('valid_cores');
  }

  // valid_threads_per_core - computed: true, optional: false, required: false
  public get validThreadsPerCore() {
    return this.getNumberListAttribute('valid_threads_per_core');
  }

  // fpgas - computed: false, optional: true, required: false
  private _fpgas = new DataAwsEc2InstanceTypeFpgasList(this, "fpgas", true);
  public get fpgas() {
    return this._fpgas;
  }
  public putFpgas(value: DataAwsEc2InstanceTypeFpgas[] | cdktf.IResolvable) {
    this._fpgas.internalValue = value;
  }
  public resetFpgas() {
    this._fpgas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgasInput() {
    return this._fpgas.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus = new DataAwsEc2InstanceTypeGpusList(this, "gpus", true);
  public get gpus() {
    return this._gpus;
  }
  public putGpus(value: DataAwsEc2InstanceTypeGpus[] | cdktf.IResolvable) {
    this._gpus.internalValue = value;
  }
  public resetGpus() {
    this._gpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus.internalValue;
  }

  // inference_accelerators - computed: false, optional: true, required: false
  private _inferenceAccelerators = new DataAwsEc2InstanceTypeInferenceAcceleratorsList(this, "inference_accelerators", true);
  public get inferenceAccelerators() {
    return this._inferenceAccelerators;
  }
  public putInferenceAccelerators(value: DataAwsEc2InstanceTypeInferenceAccelerators[] | cdktf.IResolvable) {
    this._inferenceAccelerators.internalValue = value;
  }
  public resetInferenceAccelerators() {
    this._inferenceAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAcceleratorsInput() {
    return this._inferenceAccelerators.internalValue;
  }

  // instance_disks - computed: false, optional: true, required: false
  private _instanceDisks = new DataAwsEc2InstanceTypeInstanceDisksList(this, "instance_disks", true);
  public get instanceDisks() {
    return this._instanceDisks;
  }
  public putInstanceDisks(value: DataAwsEc2InstanceTypeInstanceDisks[] | cdktf.IResolvable) {
    this._instanceDisks.internalValue = value;
  }
  public resetInstanceDisks() {
    this._instanceDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDisksInput() {
    return this._instanceDisks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_cores: cdktf.numberToTerraform(this._defaultCores),
      default_threads_per_core: cdktf.numberToTerraform(this._defaultThreadsPerCore),
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      maximum_ipv6_addresses_per_interface: cdktf.numberToTerraform(this._maximumIpv6AddressesPerInterface),
      total_fpga_memory: cdktf.numberToTerraform(this._totalFpgaMemory),
      total_gpu_memory: cdktf.numberToTerraform(this._totalGpuMemory),
      total_instance_storage: cdktf.numberToTerraform(this._totalInstanceStorage),
      fpgas: cdktf.listMapper(dataAwsEc2InstanceTypeFpgasToTerraform)(this._fpgas.internalValue),
      gpus: cdktf.listMapper(dataAwsEc2InstanceTypeGpusToTerraform)(this._gpus.internalValue),
      inference_accelerators: cdktf.listMapper(dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform)(this._inferenceAccelerators.internalValue),
      instance_disks: cdktf.listMapper(dataAwsEc2InstanceTypeInstanceDisksToTerraform)(this._instanceDisks.internalValue),
    };
  }
}
