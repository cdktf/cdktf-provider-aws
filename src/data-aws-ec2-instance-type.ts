// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_instance_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEc2InstanceTypeConfig extends TerraformMetaArguments {
  readonly defaultCores?: number;
  readonly defaultThreadsPerCore?: number;
  readonly hypervisor?: string;
  readonly instanceType: string;
  readonly maximumIpv6AddressesPerInterface?: number;
  readonly totalFpgaMemory?: number;
  readonly totalGpuMemory?: number;
  readonly totalInstanceStorage?: number;
  /** fpgas block */
  readonly fpgas?: DataAwsEc2InstanceTypeFpgas[];
  /** gpus block */
  readonly gpus?: DataAwsEc2InstanceTypeGpus[];
  /** inference_accelerators block */
  readonly inferenceAccelerators?: DataAwsEc2InstanceTypeInferenceAccelerators[];
  /** instance_disks block */
  readonly instanceDisks?: DataAwsEc2InstanceTypeInstanceDisks[];
}
export interface DataAwsEc2InstanceTypeFpgas {
}
export interface DataAwsEc2InstanceTypeGpus {
}
export interface DataAwsEc2InstanceTypeInferenceAccelerators {
}
export interface DataAwsEc2InstanceTypeInstanceDisks {
}

// Resource

export class DataAwsEc2InstanceType extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_instance_type',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultCores = config.defaultCores;
    this._defaultThreadsPerCore = config.defaultThreadsPerCore;
    this._hypervisor = config.hypervisor;
    this._instanceType = config.instanceType;
    this._maximumIpv6AddressesPerInterface = config.maximumIpv6AddressesPerInterface;
    this._totalFpgaMemory = config.totalFpgaMemory;
    this._totalGpuMemory = config.totalGpuMemory;
    this._totalInstanceStorage = config.totalInstanceStorage;
    this._fpgas = config.fpgas;
    this._gpus = config.gpus;
    this._inferenceAccelerators = config.inferenceAccelerators;
    this._instanceDisks = config.instanceDisks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery_supported - computed: true, optional: false, required: true
  public get autoRecoverySupported() {
    return this.getBooleanAttribute('auto_recovery_supported');
  }

  // bare_metal - computed: true, optional: false, required: true
  public get bareMetal() {
    return this.getBooleanAttribute('bare_metal');
  }

  // burstable_performance_supported - computed: true, optional: false, required: true
  public get burstablePerformanceSupported() {
    return this.getBooleanAttribute('burstable_performance_supported');
  }

  // current_generation - computed: true, optional: false, required: true
  public get currentGeneration() {
    return this.getBooleanAttribute('current_generation');
  }

  // dedicated_hosts_supported - computed: true, optional: false, required: true
  public get dedicatedHostsSupported() {
    return this.getBooleanAttribute('dedicated_hosts_supported');
  }

  // default_cores - computed: true, optional: true, required: false
  private _defaultCores?: number;
  public get defaultCores() {
    return this._defaultCores ?? this.getNumberAttribute('default_cores');
  }
  public set defaultCores(value: number | undefined) {
    this._defaultCores = value;
  }

  // default_threads_per_core - computed: true, optional: true, required: false
  private _defaultThreadsPerCore?: number;
  public get defaultThreadsPerCore() {
    return this._defaultThreadsPerCore ?? this.getNumberAttribute('default_threads_per_core');
  }
  public set defaultThreadsPerCore(value: number | undefined) {
    this._defaultThreadsPerCore = value;
  }

  // default_vcpus - computed: true, optional: false, required: true
  public get defaultVcpus() {
    return this.getNumberAttribute('default_vcpus');
  }

  // ebs_encryption_support - computed: true, optional: false, required: true
  public get ebsEncryptionSupport() {
    return this.getStringAttribute('ebs_encryption_support');
  }

  // ebs_nvme_support - computed: true, optional: false, required: true
  public get ebsNvmeSupport() {
    return this.getStringAttribute('ebs_nvme_support');
  }

  // ebs_optimized_support - computed: true, optional: false, required: true
  public get ebsOptimizedSupport() {
    return this.getStringAttribute('ebs_optimized_support');
  }

  // ebs_performance_baseline_bandwidth - computed: true, optional: false, required: true
  public get ebsPerformanceBaselineBandwidth() {
    return this.getNumberAttribute('ebs_performance_baseline_bandwidth');
  }

  // ebs_performance_baseline_iops - computed: true, optional: false, required: true
  public get ebsPerformanceBaselineIops() {
    return this.getNumberAttribute('ebs_performance_baseline_iops');
  }

  // ebs_performance_baseline_throughput - computed: true, optional: false, required: true
  public get ebsPerformanceBaselineThroughput() {
    return this.getNumberAttribute('ebs_performance_baseline_throughput');
  }

  // ebs_performance_maximum_bandwidth - computed: true, optional: false, required: true
  public get ebsPerformanceMaximumBandwidth() {
    return this.getNumberAttribute('ebs_performance_maximum_bandwidth');
  }

  // ebs_performance_maximum_iops - computed: true, optional: false, required: true
  public get ebsPerformanceMaximumIops() {
    return this.getNumberAttribute('ebs_performance_maximum_iops');
  }

  // ebs_performance_maximum_throughput - computed: true, optional: false, required: true
  public get ebsPerformanceMaximumThroughput() {
    return this.getNumberAttribute('ebs_performance_maximum_throughput');
  }

  // efa_supported - computed: true, optional: false, required: true
  public get efaSupported() {
    return this.getBooleanAttribute('efa_supported');
  }

  // ena_support - computed: true, optional: false, required: true
  public get enaSupport() {
    return this.getStringAttribute('ena_support');
  }

  // free_tier_eligible - computed: true, optional: false, required: true
  public get freeTierEligible() {
    return this.getBooleanAttribute('free_tier_eligible');
  }

  // hibernation_supported - computed: true, optional: false, required: true
  public get hibernationSupported() {
    return this.getBooleanAttribute('hibernation_supported');
  }

  // hypervisor - computed: true, optional: true, required: false
  private _hypervisor?: string;
  public get hypervisor() {
    return this._hypervisor ?? this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string | undefined) {
    this._hypervisor = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_storage_supported - computed: true, optional: false, required: true
  public get instanceStorageSupported() {
    return this.getBooleanAttribute('instance_storage_supported');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // ipv6_supported - computed: true, optional: false, required: true
  public get ipv6Supported() {
    return this.getBooleanAttribute('ipv6_supported');
  }

  // maximum_ipv4_addresses_per_interface - computed: true, optional: false, required: true
  public get maximumIpv4AddressesPerInterface() {
    return this.getNumberAttribute('maximum_ipv4_addresses_per_interface');
  }

  // maximum_ipv6_addresses_per_interface - computed: true, optional: true, required: false
  private _maximumIpv6AddressesPerInterface?: number;
  public get maximumIpv6AddressesPerInterface() {
    return this._maximumIpv6AddressesPerInterface ?? this.getNumberAttribute('maximum_ipv6_addresses_per_interface');
  }
  public set maximumIpv6AddressesPerInterface(value: number | undefined) {
    this._maximumIpv6AddressesPerInterface = value;
  }

  // maximum_network_interfaces - computed: true, optional: false, required: true
  public get maximumNetworkInterfaces() {
    return this.getNumberAttribute('maximum_network_interfaces');
  }

  // memory_size - computed: true, optional: false, required: true
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // network_performance - computed: true, optional: false, required: true
  public get networkPerformance() {
    return this.getStringAttribute('network_performance');
  }

  // supported_architectures - computed: true, optional: false, required: true
  public get supportedArchitectures() {
    return this.getListAttribute('supported_architectures');
  }

  // supported_placement_strategies - computed: true, optional: false, required: true
  public get supportedPlacementStrategies() {
    return this.getListAttribute('supported_placement_strategies');
  }

  // supported_root_device_types - computed: true, optional: false, required: true
  public get supportedRootDeviceTypes() {
    return this.getListAttribute('supported_root_device_types');
  }

  // supported_usages_classes - computed: true, optional: false, required: true
  public get supportedUsagesClasses() {
    return this.getListAttribute('supported_usages_classes');
  }

  // supported_virtualization_types - computed: true, optional: false, required: true
  public get supportedVirtualizationTypes() {
    return this.getListAttribute('supported_virtualization_types');
  }

  // sustained_clock_speed - computed: true, optional: false, required: true
  public get sustainedClockSpeed() {
    return this.getNumberAttribute('sustained_clock_speed');
  }

  // total_fpga_memory - computed: true, optional: true, required: false
  private _totalFpgaMemory?: number;
  public get totalFpgaMemory() {
    return this._totalFpgaMemory ?? this.getNumberAttribute('total_fpga_memory');
  }
  public set totalFpgaMemory(value: number | undefined) {
    this._totalFpgaMemory = value;
  }

  // total_gpu_memory - computed: true, optional: true, required: false
  private _totalGpuMemory?: number;
  public get totalGpuMemory() {
    return this._totalGpuMemory ?? this.getNumberAttribute('total_gpu_memory');
  }
  public set totalGpuMemory(value: number | undefined) {
    this._totalGpuMemory = value;
  }

  // total_instance_storage - computed: true, optional: true, required: false
  private _totalInstanceStorage?: number;
  public get totalInstanceStorage() {
    return this._totalInstanceStorage ?? this.getNumberAttribute('total_instance_storage');
  }
  public set totalInstanceStorage(value: number | undefined) {
    this._totalInstanceStorage = value;
  }

  // valid_cores - computed: true, optional: false, required: true
  public get validCores() {
    return 'not implemented' as any;
  }

  // valid_threads_per_core - computed: true, optional: false, required: true
  public get validThreadsPerCore() {
    return 'not implemented' as any;
  }

  // fpgas - computed: false, optional: true, required: false
  private _fpgas?: DataAwsEc2InstanceTypeFpgas[];
  public get fpgas() {
    return this._fpgas;
  }
  public set fpgas(value: DataAwsEc2InstanceTypeFpgas[] | undefined) {
    this._fpgas = value;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: DataAwsEc2InstanceTypeGpus[];
  public get gpus() {
    return this._gpus;
  }
  public set gpus(value: DataAwsEc2InstanceTypeGpus[] | undefined) {
    this._gpus = value;
  }

  // inference_accelerators - computed: false, optional: true, required: false
  private _inferenceAccelerators?: DataAwsEc2InstanceTypeInferenceAccelerators[];
  public get inferenceAccelerators() {
    return this._inferenceAccelerators;
  }
  public set inferenceAccelerators(value: DataAwsEc2InstanceTypeInferenceAccelerators[] | undefined) {
    this._inferenceAccelerators = value;
  }

  // instance_disks - computed: false, optional: true, required: false
  private _instanceDisks?: DataAwsEc2InstanceTypeInstanceDisks[];
  public get instanceDisks() {
    return this._instanceDisks;
  }
  public set instanceDisks(value: DataAwsEc2InstanceTypeInstanceDisks[] | undefined) {
    this._instanceDisks = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_cores: this._defaultCores,
      default_threads_per_core: this._defaultThreadsPerCore,
      hypervisor: this._hypervisor,
      instance_type: this._instanceType,
      maximum_ipv6_addresses_per_interface: this._maximumIpv6AddressesPerInterface,
      total_fpga_memory: this._totalFpgaMemory,
      total_gpu_memory: this._totalGpuMemory,
      total_instance_storage: this._totalInstanceStorage,
      fpgas: this._fpgas,
      gpus: this._gpus,
      inference_accelerators: this._inferenceAccelerators,
      instance_disks: this._instanceDisks,
    };
  }
}
