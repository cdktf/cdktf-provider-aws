// https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_zone_id": {
        "type": "string",
        "computed": true
      },
      "availability_zone_name": {
        "type": "string",
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "file_system_arn": {
        "type": "string",
        "computed": true
      },
      "file_system_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "mount_target_dns_name": {
        "type": "string",
        "computed": true
      },
      "network_interface_id": {
        "type": "string",
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EfsMountTargetConfig extends TerraformMetaArguments {
  readonly fileSystemId: string;
  readonly ipAddress?: string;
  readonly securityGroups?: string[];
  readonly subnetId: string;
}

// Resource

export class EfsMountTarget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EfsMountTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_mount_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileSystemId = config.fileSystemId;
    this._ipAddress = config.ipAddress;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone_id - computed: true, optional: false, required: true
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // availability_zone_name - computed: true, optional: false, required: true
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // file_system_arn - computed: true, optional: false, required: true
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this._fileSystemId;
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress ?? this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // mount_target_dns_name - computed: true, optional: false, required: true
  public get mountTargetDnsName() {
    return this.getStringAttribute('mount_target_dns_name');
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups ?? this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: this._fileSystemId,
      ip_address: this._ipAddress,
      security_groups: this._securityGroups,
      subnet_id: this._subnetId,
    };
  }
}
