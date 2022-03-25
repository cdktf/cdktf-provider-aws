// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS OpsWorks
*/
export interface OpsworksInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#agent_version OpsworksInstance#agent_version}
  */
  readonly agentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ami_id OpsworksInstance#ami_id}
  */
  readonly amiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#architecture OpsworksInstance#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}
  */
  readonly autoScalingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#availability_zone OpsworksInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#created_at OpsworksInstance#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}
  */
  readonly deleteEbs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_eip OpsworksInstance#delete_eip}
  */
  readonly deleteEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}
  */
  readonly ecsClusterArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}
  */
  readonly elasticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#hostname OpsworksInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}
  */
  readonly infrastructureClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}
  */
  readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#instance_type OpsworksInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#layer_ids OpsworksInstance#layer_ids}
  */
  readonly layerIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#os OpsworksInstance#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_device_type OpsworksInstance#root_device_type}
  */
  readonly rootDeviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}
  */
  readonly sshKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#stack_id OpsworksInstance#stack_id}
  */
  readonly stackId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#state OpsworksInstance#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#status OpsworksInstance#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#subnet_id OpsworksInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#tenancy OpsworksInstance#tenancy}
  */
  readonly tenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}
  */
  readonly virtualizationType?: string;
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ebs_block_device OpsworksInstance#ebs_block_device}
  */
  readonly ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#ephemeral_block_device OpsworksInstance#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[] | cdktf.IResolvable;
  /**
  * root_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#root_block_device OpsworksInstance#root_block_device}
  */
  readonly rootBlockDevice?: OpsworksInstanceRootBlockDevice[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#timeouts OpsworksInstance#timeouts}
  */
  readonly timeouts?: OpsworksInstanceTimeouts;
}
export interface OpsworksInstanceEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#device_name OpsworksInstance#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#iops OpsworksInstance#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#snapshot_id OpsworksInstance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_size OpsworksInstance#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_type OpsworksInstance#volume_type}
  */
  readonly volumeType?: string;
}

export function opsworksInstanceEbsBlockDeviceToTerraform(struct?: OpsworksInstanceEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    iops: cdktf.numberToTerraform(struct!.iops),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface OpsworksInstanceEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#device_name OpsworksInstance#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#virtual_name OpsworksInstance#virtual_name}
  */
  readonly virtualName: string;
}

export function opsworksInstanceEphemeralBlockDeviceToTerraform(struct?: OpsworksInstanceEphemeralBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface OpsworksInstanceRootBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#iops OpsworksInstance#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_size OpsworksInstance#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#volume_type OpsworksInstance#volume_type}
  */
  readonly volumeType?: string;
}

export function opsworksInstanceRootBlockDeviceToTerraform(struct?: OpsworksInstanceRootBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    iops: cdktf.numberToTerraform(struct!.iops),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface OpsworksInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#create OpsworksInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#delete OpsworksInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance#update OpsworksInstance#update}
  */
  readonly update?: string;
}

export function opsworksInstanceTimeoutsToTerraform(struct?: OpsworksInstanceTimeoutsOutputReference | OpsworksInstanceTimeouts | cdktf.IResolvable): any {
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

export class OpsworksInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): OpsworksInstanceTimeouts | undefined {
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

  public set internalValue(value: OpsworksInstanceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance aws_opsworks_instance}
*/
export class OpsworksInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_opsworks_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance aws_opsworks_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentVersion = config.agentVersion;
    this._amiId = config.amiId;
    this._architecture = config.architecture;
    this._autoScalingType = config.autoScalingType;
    this._availabilityZone = config.availabilityZone;
    this._createdAt = config.createdAt;
    this._deleteEbs = config.deleteEbs;
    this._deleteEip = config.deleteEip;
    this._ebsOptimized = config.ebsOptimized;
    this._ecsClusterArn = config.ecsClusterArn;
    this._elasticIp = config.elasticIp;
    this._hostname = config.hostname;
    this._infrastructureClass = config.infrastructureClass;
    this._installUpdatesOnBoot = config.installUpdatesOnBoot;
    this._instanceProfileArn = config.instanceProfileArn;
    this._instanceType = config.instanceType;
    this._layerIds = config.layerIds;
    this._os = config.os;
    this._rootDeviceType = config.rootDeviceType;
    this._securityGroupIds = config.securityGroupIds;
    this._sshKeyName = config.sshKeyName;
    this._stackId = config.stackId;
    this._state = config.state;
    this._status = config.status;
    this._subnetId = config.subnetId;
    this._tenancy = config.tenancy;
    this._virtualizationType = config.virtualizationType;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._rootBlockDevice = config.rootBlockDevice;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: false, optional: true, required: false
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
  }

  // ami_id - computed: true, optional: true, required: false
  private _amiId?: string; 
  public get amiId() {
    return this.getStringAttribute('ami_id');
  }
  public set amiId(value: string) {
    this._amiId = value;
  }
  public resetAmiId() {
    this._amiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiIdInput() {
    return this._amiId;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // auto_scaling_type - computed: false, optional: true, required: false
  private _autoScalingType?: string; 
  public get autoScalingType() {
    return this.getStringAttribute('auto_scaling_type');
  }
  public set autoScalingType(value: string) {
    this._autoScalingType = value;
  }
  public resetAutoScalingType() {
    this._autoScalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingTypeInput() {
    return this._autoScalingType;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // delete_ebs - computed: false, optional: true, required: false
  private _deleteEbs?: boolean | cdktf.IResolvable; 
  public get deleteEbs() {
    return this.getBooleanAttribute('delete_ebs');
  }
  public set deleteEbs(value: boolean | cdktf.IResolvable) {
    this._deleteEbs = value;
  }
  public resetDeleteEbs() {
    this._deleteEbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEbsInput() {
    return this._deleteEbs;
  }

  // delete_eip - computed: false, optional: true, required: false
  private _deleteEip?: boolean | cdktf.IResolvable; 
  public get deleteEip() {
    return this.getBooleanAttribute('delete_eip');
  }
  public set deleteEip(value: boolean | cdktf.IResolvable) {
    this._deleteEip = value;
  }
  public resetDeleteEip() {
    this._deleteEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEipInput() {
    return this._deleteEip;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // ec2_instance_id - computed: true, optional: false, required: false
  public get ec2InstanceId() {
    return this.getStringAttribute('ec2_instance_id');
  }

  // ecs_cluster_arn - computed: true, optional: true, required: false
  private _ecsClusterArn?: string; 
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
  }
  public set ecsClusterArn(value: string) {
    this._ecsClusterArn = value;
  }
  public resetEcsClusterArn() {
    this._ecsClusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsClusterArnInput() {
    return this._ecsClusterArn;
  }

  // elastic_ip - computed: true, optional: true, required: false
  private _elasticIp?: string; 
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_class - computed: true, optional: true, required: false
  private _infrastructureClass?: string; 
  public get infrastructureClass() {
    return this.getStringAttribute('infrastructure_class');
  }
  public set infrastructureClass(value: string) {
    this._infrastructureClass = value;
  }
  public resetInfrastructureClass() {
    this._infrastructureClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureClassInput() {
    return this._infrastructureClass;
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

  // instance_profile_arn - computed: true, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // last_service_error_id - computed: true, optional: false, required: false
  public get lastServiceErrorId() {
    return this.getStringAttribute('last_service_error_id');
  }

  // layer_ids - computed: false, optional: false, required: true
  private _layerIds?: string[]; 
  public get layerIds() {
    return this.getListAttribute('layer_ids');
  }
  public set layerIds(value: string[]) {
    this._layerIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerIdsInput() {
    return this._layerIds;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // private_dns - computed: true, optional: false, required: false
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_dns - computed: true, optional: false, required: false
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // registered_by - computed: true, optional: false, required: false
  public get registeredBy() {
    return this.getStringAttribute('registered_by');
  }

  // reported_agent_version - computed: true, optional: false, required: false
  public get reportedAgentVersion() {
    return this.getStringAttribute('reported_agent_version');
  }

  // reported_os_family - computed: true, optional: false, required: false
  public get reportedOsFamily() {
    return this.getStringAttribute('reported_os_family');
  }

  // reported_os_name - computed: true, optional: false, required: false
  public get reportedOsName() {
    return this.getStringAttribute('reported_os_name');
  }

  // reported_os_version - computed: true, optional: false, required: false
  public get reportedOsVersion() {
    return this.getStringAttribute('reported_os_version');
  }

  // root_device_type - computed: true, optional: true, required: false
  private _rootDeviceType?: string; 
  public get rootDeviceType() {
    return this.getStringAttribute('root_device_type');
  }
  public set rootDeviceType(value: string) {
    this._rootDeviceType = value;
  }
  public resetRootDeviceType() {
    this._rootDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceTypeInput() {
    return this._rootDeviceType;
  }

  // root_device_volume_id - computed: true, optional: false, required: false
  public get rootDeviceVolumeId() {
    return this.getStringAttribute('root_device_volume_id');
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
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

  // ssh_host_dsa_key_fingerprint - computed: true, optional: false, required: false
  public get sshHostDsaKeyFingerprint() {
    return this.getStringAttribute('ssh_host_dsa_key_fingerprint');
  }

  // ssh_host_rsa_key_fingerprint - computed: true, optional: false, required: false
  public get sshHostRsaKeyFingerprint() {
    return this.getStringAttribute('ssh_host_rsa_key_fingerprint');
  }

  // ssh_key_name - computed: true, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // virtualization_type - computed: true, optional: true, required: false
  private _virtualizationType?: string; 
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }
  public set virtualizationType(value: string) {
    this._virtualizationType = value;
  }
  public resetVirtualizationType() {
    this._virtualizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualizationTypeInput() {
    return this._virtualizationType;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[] | cdktf.IResolvable; 
  public get ebsBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ebs_block_device')));
  }
  public set ebsBlockDevice(value: OpsworksInstanceEbsBlockDevice[] | cdktf.IResolvable) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[] | cdktf.IResolvable; 
  public get ephemeralBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ephemeral_block_device')));
  }
  public set ephemeralBlockDevice(value: OpsworksInstanceEphemeralBlockDevice[] | cdktf.IResolvable) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice;
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: OpsworksInstanceRootBlockDevice[] | cdktf.IResolvable; 
  public get rootBlockDevice() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('root_block_device')));
  }
  public set rootBlockDevice(value: OpsworksInstanceRootBlockDevice[] | cdktf.IResolvable) {
    this._rootBlockDevice = value;
  }
  public resetRootBlockDevice() {
    this._rootBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootBlockDeviceInput() {
    return this._rootBlockDevice;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpsworksInstanceTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpsworksInstanceTimeouts) {
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
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      ami_id: cdktf.stringToTerraform(this._amiId),
      architecture: cdktf.stringToTerraform(this._architecture),
      auto_scaling_type: cdktf.stringToTerraform(this._autoScalingType),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      created_at: cdktf.stringToTerraform(this._createdAt),
      delete_ebs: cdktf.booleanToTerraform(this._deleteEbs),
      delete_eip: cdktf.booleanToTerraform(this._deleteEip),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      ecs_cluster_arn: cdktf.stringToTerraform(this._ecsClusterArn),
      elastic_ip: cdktf.stringToTerraform(this._elasticIp),
      hostname: cdktf.stringToTerraform(this._hostname),
      infrastructure_class: cdktf.stringToTerraform(this._infrastructureClass),
      install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      layer_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._layerIds),
      os: cdktf.stringToTerraform(this._os),
      root_device_type: cdktf.stringToTerraform(this._rootDeviceType),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
      stack_id: cdktf.stringToTerraform(this._stackId),
      state: cdktf.stringToTerraform(this._state),
      status: cdktf.stringToTerraform(this._status),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tenancy: cdktf.stringToTerraform(this._tenancy),
      virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
      ebs_block_device: cdktf.listMapper(opsworksInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(opsworksInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      root_block_device: cdktf.listMapper(opsworksInstanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
      timeouts: opsworksInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
