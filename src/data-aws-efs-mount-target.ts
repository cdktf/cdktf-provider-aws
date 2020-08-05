// https://www.terraform.io/docs/providers/aws/r/data_aws_efs_mount_target.html
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
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "computed": true
      },
      "mount_target_dns_name": {
        "type": "string",
        "computed": true
      },
      "mount_target_id": {
        "type": "string",
        "required": true
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
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEfsMountTargetConfig extends TerraformMetaArguments {
  readonly mountTargetId: string;
}

// Resource

export class DataAwsEfsMountTarget extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEfsMountTargetConfig) {
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
    this._mountTargetId = config.mountTargetId;
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

  // file_system_id - computed: true, optional: false, required: true
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mount_target_dns_name - computed: true, optional: false, required: true
  public get mountTargetDnsName() {
    return this.getStringAttribute('mount_target_dns_name');
  }

  // mount_target_id - computed: false, optional: false, required: true
  private _mountTargetId: string;
  public get mountTargetId() {
    return this._mountTargetId;
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // security_groups - computed: true, optional: false, required: true
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      mount_target_id: this._mountTargetId,
    };
  }
}
