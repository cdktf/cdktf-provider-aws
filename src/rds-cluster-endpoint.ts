// https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html
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
      "cluster_endpoint_identifier": {
        "type": "string",
        "required": true
      },
      "cluster_identifier": {
        "type": "string",
        "required": true
      },
      "custom_endpoint_type": {
        "type": "string",
        "required": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "excluded_members": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "static_members": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RdsClusterEndpointConfig extends TerraformMetaArguments {
  readonly clusterEndpointIdentifier: string;
  readonly clusterIdentifier: string;
  readonly customEndpointType: string;
  readonly excludedMembers?: string[];
  readonly staticMembers?: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class RdsClusterEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RdsClusterEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterEndpointIdentifier = config.clusterEndpointIdentifier;
    this._clusterIdentifier = config.clusterIdentifier;
    this._customEndpointType = config.customEndpointType;
    this._excludedMembers = config.excludedMembers;
    this._staticMembers = config.staticMembers;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_endpoint_identifier - computed: false, optional: false, required: true
  private _clusterEndpointIdentifier: string;
  public get clusterEndpointIdentifier() {
    return this._clusterEndpointIdentifier;
  }
  public set clusterEndpointIdentifier(value: string) {
    this._clusterEndpointIdentifier = value;
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier;
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }

  // custom_endpoint_type - computed: false, optional: false, required: true
  private _customEndpointType: string;
  public get customEndpointType() {
    return this._customEndpointType;
  }
  public set customEndpointType(value: string) {
    this._customEndpointType = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // excluded_members - computed: false, optional: true, required: false
  private _excludedMembers?: string[];
  public get excludedMembers() {
    return this._excludedMembers;
  }
  public set excludedMembers(value: string[] | undefined) {
    this._excludedMembers = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // static_members - computed: false, optional: true, required: false
  private _staticMembers?: string[];
  public get staticMembers() {
    return this._staticMembers;
  }
  public set staticMembers(value: string[] | undefined) {
    this._staticMembers = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_endpoint_identifier: this._clusterEndpointIdentifier,
      cluster_identifier: this._clusterIdentifier,
      custom_endpoint_type: this._customEndpointType,
      excluded_members: this._excludedMembers,
      static_members: this._staticMembers,
      tags: this._tags,
    };
  }
}
