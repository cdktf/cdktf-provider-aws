// https://www.terraform.io/docs/providers/aws/r/data_aws_eks_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "certificate_authority": {
        "type": [
          "list",
          [
            "object",
            {
              "data": "string"
            }
          ]
        ],
        "computed": true
      },
      "created_at": {
        "type": "string",
        "computed": true
      },
      "enabled_cluster_log_types": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity": {
        "type": [
          "list",
          [
            "object",
            {
              "oidc": [
                "list",
                [
                  "object",
                  {
                    "issuer": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "platform_version": {
        "type": "string",
        "computed": true
      },
      "role_arn": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "version": {
        "type": "string",
        "computed": true
      },
      "vpc_config": {
        "type": [
          "list",
          [
            "object",
            {
              "cluster_security_group_id": "string",
              "endpoint_private_access": "bool",
              "endpoint_public_access": "bool",
              "public_access_cidrs": [
                "set",
                "string"
              ],
              "security_group_ids": [
                "set",
                "string"
              ],
              "subnet_ids": [
                "set",
                "string"
              ],
              "vpc_id": "string"
            }
          ]
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsEksClusterConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsEksClusterCertificateAuthority extends ComplexComputedList {

  // data - computed: true, optional: false, required: true
  public get data() {
    return this.getStringAttribute('data');
  }
}
export class DataAwsEksClusterIdentityOidc extends ComplexComputedList {

  // issuer - computed: true, optional: false, required: true
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export class DataAwsEksClusterIdentity extends ComplexComputedList {

  // oidc - computed: true, optional: false, required: true
  public get oidc() {
    return 'not implemented' as any;
  }
}
export class DataAwsEksClusterVpcConfig extends ComplexComputedList {

  // cluster_security_group_id - computed: true, optional: false, required: true
  public get clusterSecurityGroupId() {
    return this.getStringAttribute('cluster_security_group_id');
  }

  // endpoint_private_access - computed: true, optional: false, required: true
  public get endpointPrivateAccess() {
    return this.getBooleanAttribute('endpoint_private_access');
  }

  // endpoint_public_access - computed: true, optional: false, required: true
  public get endpointPublicAccess() {
    return this.getBooleanAttribute('endpoint_public_access');
  }

  // public_access_cidrs - computed: true, optional: false, required: true
  public get publicAccessCidrs() {
    return this.getListAttribute('public_access_cidrs');
  }

  // security_group_ids - computed: true, optional: false, required: true
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

// Resource

export class DataAwsEksCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: true
  public certificateAuthority(index: string) {
    return new DataAwsEksClusterCertificateAuthority(this, 'certificate_authority', index);
  }

  // created_at - computed: true, optional: false, required: true
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled_cluster_log_types - computed: true, optional: false, required: true
  public get enabledClusterLogTypes() {
    return this.getListAttribute('enabled_cluster_log_types');
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity - computed: true, optional: false, required: true
  public identity(index: string) {
    return new DataAwsEksClusterIdentity(this, 'identity', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform_version - computed: true, optional: false, required: true
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // role_arn - computed: true, optional: false, required: true
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_config - computed: true, optional: false, required: true
  public vpcConfig(index: string) {
    return new DataAwsEksClusterVpcConfig(this, 'vpc_config', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
    };
  }
}
