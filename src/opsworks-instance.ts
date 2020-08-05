// https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agent_version": {
        "type": "string",
        "optional": true
      },
      "ami_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "architecture": {
        "type": "string",
        "optional": true
      },
      "auto_scaling_type": {
        "type": "string",
        "optional": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "created_at": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "delete_ebs": {
        "type": "bool",
        "optional": true
      },
      "delete_eip": {
        "type": "bool",
        "optional": true
      },
      "ebs_optimized": {
        "type": "bool",
        "optional": true
      },
      "ec2_instance_id": {
        "type": "string",
        "computed": true
      },
      "ecs_cluster_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "elastic_ip": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "hostname": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "infrastructure_class": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "install_updates_on_boot": {
        "type": "bool",
        "optional": true
      },
      "instance_profile_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_type": {
        "type": "string",
        "optional": true
      },
      "last_service_error_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "layer_ids": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "os": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "platform": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "private_dns": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "private_ip": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "public_dns": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "public_ip": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "registered_by": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "reported_agent_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "reported_os_family": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "reported_os_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "reported_os_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "root_device_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "root_device_volume_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "security_group_ids": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "ssh_host_dsa_key_fingerprint": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ssh_host_rsa_key_fingerprint": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ssh_key_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "stack_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "status": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tenancy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "virtualization_type": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "ebs_block_device": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "delete_on_termination": {
              "type": "bool",
              "optional": true
            },
            "device_name": {
              "type": "string",
              "required": true
            },
            "iops": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "snapshot_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "volume_size": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "volume_type": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
      },
      "ephemeral_block_device": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "device_name": {
              "type": "string",
              "required": true
            },
            "virtual_name": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "root_block_device": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "delete_on_termination": {
              "type": "bool",
              "optional": true
            },
            "iops": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "volume_size": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "volume_type": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OpsworksInstanceConfig extends TerraformMetaArguments {
  readonly agentVersion?: string;
  readonly amiId?: string;
  readonly architecture?: string;
  readonly autoScalingType?: string;
  readonly availabilityZone?: string;
  readonly createdAt?: string;
  readonly deleteEbs?: boolean;
  readonly deleteEip?: boolean;
  readonly ebsOptimized?: boolean;
  readonly ecsClusterArn?: string;
  readonly elasticIp?: string;
  readonly hostname?: string;
  readonly infrastructureClass?: string;
  readonly installUpdatesOnBoot?: boolean;
  readonly instanceProfileArn?: string;
  readonly instanceType?: string;
  readonly lastServiceErrorId?: string;
  readonly layerIds: string[];
  readonly os?: string;
  readonly platform?: string;
  readonly privateDns?: string;
  readonly privateIp?: string;
  readonly publicDns?: string;
  readonly publicIp?: string;
  readonly registeredBy?: string;
  readonly reportedAgentVersion?: string;
  readonly reportedOsFamily?: string;
  readonly reportedOsName?: string;
  readonly reportedOsVersion?: string;
  readonly rootDeviceType?: string;
  readonly rootDeviceVolumeId?: string;
  readonly securityGroupIds?: string[];
  readonly sshHostDsaKeyFingerprint?: string;
  readonly sshHostRsaKeyFingerprint?: string;
  readonly sshKeyName?: string;
  readonly stackId: string;
  readonly state?: string;
  readonly status?: string;
  readonly subnetId?: string;
  readonly tenancy?: string;
  readonly virtualizationType?: string;
  /** ebs_block_device block */
  readonly ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[];
  /** root_block_device block */
  readonly rootBlockDevice?: OpsworksInstanceRootBlockDevice[];
  /** timeouts block */
  readonly timeouts?: OpsworksInstanceTimeouts;
}
export interface OpsworksInstanceEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly iops?: number;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface OpsworksInstanceEphemeralBlockDevice {
  readonly deviceName: string;
  readonly virtualName: string;
}
export interface OpsworksInstanceRootBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly iops?: number;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface OpsworksInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OpsworksInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._lastServiceErrorId = config.lastServiceErrorId;
    this._layerIds = config.layerIds;
    this._os = config.os;
    this._platform = config.platform;
    this._privateDns = config.privateDns;
    this._privateIp = config.privateIp;
    this._publicDns = config.publicDns;
    this._publicIp = config.publicIp;
    this._registeredBy = config.registeredBy;
    this._reportedAgentVersion = config.reportedAgentVersion;
    this._reportedOsFamily = config.reportedOsFamily;
    this._reportedOsName = config.reportedOsName;
    this._reportedOsVersion = config.reportedOsVersion;
    this._rootDeviceType = config.rootDeviceType;
    this._rootDeviceVolumeId = config.rootDeviceVolumeId;
    this._securityGroupIds = config.securityGroupIds;
    this._sshHostDsaKeyFingerprint = config.sshHostDsaKeyFingerprint;
    this._sshHostRsaKeyFingerprint = config.sshHostRsaKeyFingerprint;
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: false, optional: true, required: false
  private _agentVersion?: string;
  public get agentVersion() {
    return this._agentVersion;
  }
  public set agentVersion(value: string | undefined) {
    this._agentVersion = value;
  }

  // ami_id - computed: true, optional: true, required: false
  private _amiId?: string;
  public get amiId() {
    return this._amiId ?? this.getStringAttribute('ami_id');
  }
  public set amiId(value: string | undefined) {
    this._amiId = value;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string;
  public get architecture() {
    return this._architecture;
  }
  public set architecture(value: string | undefined) {
    this._architecture = value;
  }

  // auto_scaling_type - computed: false, optional: true, required: false
  private _autoScalingType?: string;
  public get autoScalingType() {
    return this._autoScalingType;
  }
  public set autoScalingType(value: string | undefined) {
    this._autoScalingType = value;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string;
  public get createdAt() {
    return this._createdAt ?? this.getStringAttribute('created_at');
  }
  public set createdAt(value: string | undefined) {
    this._createdAt = value;
  }

  // delete_ebs - computed: false, optional: true, required: false
  private _deleteEbs?: boolean;
  public get deleteEbs() {
    return this._deleteEbs;
  }
  public set deleteEbs(value: boolean | undefined) {
    this._deleteEbs = value;
  }

  // delete_eip - computed: false, optional: true, required: false
  private _deleteEip?: boolean;
  public get deleteEip() {
    return this._deleteEip;
  }
  public set deleteEip(value: boolean | undefined) {
    this._deleteEip = value;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this._ebsOptimized;
  }
  public set ebsOptimized(value: boolean | undefined) {
    this._ebsOptimized = value;
  }

  // ec2_instance_id - computed: true, optional: false, required: true
  public get ec2InstanceId() {
    return this.getStringAttribute('ec2_instance_id');
  }

  // ecs_cluster_arn - computed: true, optional: true, required: false
  private _ecsClusterArn?: string;
  public get ecsClusterArn() {
    return this._ecsClusterArn ?? this.getStringAttribute('ecs_cluster_arn');
  }
  public set ecsClusterArn(value: string | undefined) {
    this._ecsClusterArn = value;
  }

  // elastic_ip - computed: true, optional: true, required: false
  private _elasticIp?: string;
  public get elasticIp() {
    return this._elasticIp ?? this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string | undefined) {
    this._elasticIp = value;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this._hostname ?? this.getStringAttribute('hostname');
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // infrastructure_class - computed: true, optional: true, required: false
  private _infrastructureClass?: string;
  public get infrastructureClass() {
    return this._infrastructureClass ?? this.getStringAttribute('infrastructure_class');
  }
  public set infrastructureClass(value: string | undefined) {
    this._infrastructureClass = value;
  }

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean;
  public get installUpdatesOnBoot() {
    return this._installUpdatesOnBoot;
  }
  public set installUpdatesOnBoot(value: boolean | undefined) {
    this._installUpdatesOnBoot = value;
  }

  // instance_profile_arn - computed: true, optional: true, required: false
  private _instanceProfileArn?: string;
  public get instanceProfileArn() {
    return this._instanceProfileArn ?? this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string | undefined) {
    this._instanceProfileArn = value;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string | undefined) {
    this._instanceType = value;
  }

  // last_service_error_id - computed: true, optional: true, required: false
  private _lastServiceErrorId?: string;
  public get lastServiceErrorId() {
    return this._lastServiceErrorId ?? this.getStringAttribute('last_service_error_id');
  }
  public set lastServiceErrorId(value: string | undefined) {
    this._lastServiceErrorId = value;
  }

  // layer_ids - computed: false, optional: false, required: true
  private _layerIds: string[];
  public get layerIds() {
    return this._layerIds;
  }
  public set layerIds(value: string[]) {
    this._layerIds = value;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string;
  public get os() {
    return this._os ?? this.getStringAttribute('os');
  }
  public set os(value: string | undefined) {
    this._os = value;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string;
  public get platform() {
    return this._platform ?? this.getStringAttribute('platform');
  }
  public set platform(value: string | undefined) {
    this._platform = value;
  }

  // private_dns - computed: true, optional: true, required: false
  private _privateDns?: string;
  public get privateDns() {
    return this._privateDns ?? this.getStringAttribute('private_dns');
  }
  public set privateDns(value: string | undefined) {
    this._privateDns = value;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string;
  public get privateIp() {
    return this._privateIp ?? this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string | undefined) {
    this._privateIp = value;
  }

  // public_dns - computed: true, optional: true, required: false
  private _publicDns?: string;
  public get publicDns() {
    return this._publicDns ?? this.getStringAttribute('public_dns');
  }
  public set publicDns(value: string | undefined) {
    this._publicDns = value;
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string;
  public get publicIp() {
    return this._publicIp ?? this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string | undefined) {
    this._publicIp = value;
  }

  // registered_by - computed: true, optional: true, required: false
  private _registeredBy?: string;
  public get registeredBy() {
    return this._registeredBy ?? this.getStringAttribute('registered_by');
  }
  public set registeredBy(value: string | undefined) {
    this._registeredBy = value;
  }

  // reported_agent_version - computed: true, optional: true, required: false
  private _reportedAgentVersion?: string;
  public get reportedAgentVersion() {
    return this._reportedAgentVersion ?? this.getStringAttribute('reported_agent_version');
  }
  public set reportedAgentVersion(value: string | undefined) {
    this._reportedAgentVersion = value;
  }

  // reported_os_family - computed: true, optional: true, required: false
  private _reportedOsFamily?: string;
  public get reportedOsFamily() {
    return this._reportedOsFamily ?? this.getStringAttribute('reported_os_family');
  }
  public set reportedOsFamily(value: string | undefined) {
    this._reportedOsFamily = value;
  }

  // reported_os_name - computed: true, optional: true, required: false
  private _reportedOsName?: string;
  public get reportedOsName() {
    return this._reportedOsName ?? this.getStringAttribute('reported_os_name');
  }
  public set reportedOsName(value: string | undefined) {
    this._reportedOsName = value;
  }

  // reported_os_version - computed: true, optional: true, required: false
  private _reportedOsVersion?: string;
  public get reportedOsVersion() {
    return this._reportedOsVersion ?? this.getStringAttribute('reported_os_version');
  }
  public set reportedOsVersion(value: string | undefined) {
    this._reportedOsVersion = value;
  }

  // root_device_type - computed: true, optional: true, required: false
  private _rootDeviceType?: string;
  public get rootDeviceType() {
    return this._rootDeviceType ?? this.getStringAttribute('root_device_type');
  }
  public set rootDeviceType(value: string | undefined) {
    this._rootDeviceType = value;
  }

  // root_device_volume_id - computed: true, optional: true, required: false
  private _rootDeviceVolumeId?: string;
  public get rootDeviceVolumeId() {
    return this._rootDeviceVolumeId ?? this.getStringAttribute('root_device_volume_id');
  }
  public set rootDeviceVolumeId(value: string | undefined) {
    this._rootDeviceVolumeId = value;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds ?? this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // ssh_host_dsa_key_fingerprint - computed: true, optional: true, required: false
  private _sshHostDsaKeyFingerprint?: string;
  public get sshHostDsaKeyFingerprint() {
    return this._sshHostDsaKeyFingerprint ?? this.getStringAttribute('ssh_host_dsa_key_fingerprint');
  }
  public set sshHostDsaKeyFingerprint(value: string | undefined) {
    this._sshHostDsaKeyFingerprint = value;
  }

  // ssh_host_rsa_key_fingerprint - computed: true, optional: true, required: false
  private _sshHostRsaKeyFingerprint?: string;
  public get sshHostRsaKeyFingerprint() {
    return this._sshHostRsaKeyFingerprint ?? this.getStringAttribute('ssh_host_rsa_key_fingerprint');
  }
  public set sshHostRsaKeyFingerprint(value: string | undefined) {
    this._sshHostRsaKeyFingerprint = value;
  }

  // ssh_key_name - computed: true, optional: true, required: false
  private _sshKeyName?: string;
  public get sshKeyName() {
    return this._sshKeyName ?? this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string | undefined) {
    this._sshKeyName = value;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: string) {
    this._stackId = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status ?? this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string;
  public get tenancy() {
    return this._tenancy ?? this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string | undefined) {
    this._tenancy = value;
  }

  // virtualization_type - computed: true, optional: true, required: false
  private _virtualizationType?: string;
  public get virtualizationType() {
    return this._virtualizationType ?? this.getStringAttribute('virtualization_type');
  }
  public set virtualizationType(value: string | undefined) {
    this._virtualizationType = value;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public set ebsBlockDevice(value: OpsworksInstanceEbsBlockDevice[] | undefined) {
    this._ebsBlockDevice = value;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public set ephemeralBlockDevice(value: OpsworksInstanceEphemeralBlockDevice[] | undefined) {
    this._ephemeralBlockDevice = value;
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: OpsworksInstanceRootBlockDevice[];
  public get rootBlockDevice() {
    return this._rootBlockDevice;
  }
  public set rootBlockDevice(value: OpsworksInstanceRootBlockDevice[] | undefined) {
    this._rootBlockDevice = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OpsworksInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OpsworksInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_version: this._agentVersion,
      ami_id: this._amiId,
      architecture: this._architecture,
      auto_scaling_type: this._autoScalingType,
      availability_zone: this._availabilityZone,
      created_at: this._createdAt,
      delete_ebs: this._deleteEbs,
      delete_eip: this._deleteEip,
      ebs_optimized: this._ebsOptimized,
      ecs_cluster_arn: this._ecsClusterArn,
      elastic_ip: this._elasticIp,
      hostname: this._hostname,
      infrastructure_class: this._infrastructureClass,
      install_updates_on_boot: this._installUpdatesOnBoot,
      instance_profile_arn: this._instanceProfileArn,
      instance_type: this._instanceType,
      last_service_error_id: this._lastServiceErrorId,
      layer_ids: this._layerIds,
      os: this._os,
      platform: this._platform,
      private_dns: this._privateDns,
      private_ip: this._privateIp,
      public_dns: this._publicDns,
      public_ip: this._publicIp,
      registered_by: this._registeredBy,
      reported_agent_version: this._reportedAgentVersion,
      reported_os_family: this._reportedOsFamily,
      reported_os_name: this._reportedOsName,
      reported_os_version: this._reportedOsVersion,
      root_device_type: this._rootDeviceType,
      root_device_volume_id: this._rootDeviceVolumeId,
      security_group_ids: this._securityGroupIds,
      ssh_host_dsa_key_fingerprint: this._sshHostDsaKeyFingerprint,
      ssh_host_rsa_key_fingerprint: this._sshHostRsaKeyFingerprint,
      ssh_key_name: this._sshKeyName,
      stack_id: this._stackId,
      state: this._state,
      status: this._status,
      subnet_id: this._subnetId,
      tenancy: this._tenancy,
      virtualization_type: this._virtualizationType,
      ebs_block_device: this._ebsBlockDevice,
      ephemeral_block_device: this._ephemeralBlockDevice,
      root_block_device: this._rootBlockDevice,
      timeouts: this._timeouts,
    };
  }
}
