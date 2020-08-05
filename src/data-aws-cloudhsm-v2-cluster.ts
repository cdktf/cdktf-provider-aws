// https://www.terraform.io/docs/providers/aws/r/data_aws_cloudhsm_v2_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_certificates": {
        "type": [
          "list",
          [
            "object",
            {
              "aws_hardware_certificate": "string",
              "cluster_certificate": "string",
              "cluster_csr": "string",
              "hsm_certificate": "string",
              "manufacturer_hardware_certificate": "string"
            }
          ]
        ],
        "computed": true
      },
      "cluster_id": {
        "type": "string",
        "required": true
      },
      "cluster_state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "security_group_id": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "vpc_id": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsCloudhsmV2ClusterConfig extends TerraformMetaArguments {
  readonly clusterId: string;
  readonly clusterState?: string;
}
export class DataAwsCloudhsmV2ClusterClusterCertificates extends ComplexComputedList {

  // aws_hardware_certificate - computed: true, optional: false, required: true
  public get awsHardwareCertificate() {
    return this.getStringAttribute('aws_hardware_certificate');
  }

  // cluster_certificate - computed: true, optional: false, required: true
  public get clusterCertificate() {
    return this.getStringAttribute('cluster_certificate');
  }

  // cluster_csr - computed: true, optional: false, required: true
  public get clusterCsr() {
    return this.getStringAttribute('cluster_csr');
  }

  // hsm_certificate - computed: true, optional: false, required: true
  public get hsmCertificate() {
    return this.getStringAttribute('hsm_certificate');
  }

  // manufacturer_hardware_certificate - computed: true, optional: false, required: true
  public get manufacturerHardwareCertificate() {
    return this.getStringAttribute('manufacturer_hardware_certificate');
  }
}

// Resource

export class DataAwsCloudhsmV2Cluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsCloudhsmV2ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudhsm_v2_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._clusterState = config.clusterState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_certificates - computed: true, optional: false, required: true
  public clusterCertificates(index: string) {
    return new DataAwsCloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }

  // cluster_state - computed: true, optional: true, required: false
  private _clusterState?: string;
  public get clusterState() {
    return this._clusterState ?? this.getStringAttribute('cluster_state');
  }
  public set clusterState(value: string | undefined) {
    this._clusterState = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // security_group_id - computed: true, optional: false, required: true
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      cluster_state: this._clusterState,
    };
  }
}
