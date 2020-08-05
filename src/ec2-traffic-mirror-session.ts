// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html
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
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_interface_id": {
        "type": "string",
        "required": true
      },
      "packet_length": {
        "type": "number",
        "optional": true
      },
      "session_number": {
        "type": "number",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "traffic_mirror_filter_id": {
        "type": "string",
        "required": true
      },
      "traffic_mirror_target_id": {
        "type": "string",
        "required": true
      },
      "virtual_network_id": {
        "type": "number",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorSessionConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly networkInterfaceId: string;
  readonly packetLength?: number;
  readonly sessionNumber: number;
  readonly tags?: { [key: string]: string };
  readonly trafficMirrorFilterId: string;
  readonly trafficMirrorTargetId: string;
  readonly virtualNetworkId?: number;
}

// Resource

export class Ec2TrafficMirrorSession extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_traffic_mirror_session',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._networkInterfaceId = config.networkInterfaceId;
    this._packetLength = config.packetLength;
    this._sessionNumber = config.sessionNumber;
    this._tags = config.tags;
    this._trafficMirrorFilterId = config.trafficMirrorFilterId;
    this._trafficMirrorTargetId = config.trafficMirrorTargetId;
    this._virtualNetworkId = config.virtualNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: number;
  public get packetLength() {
    return this._packetLength;
  }
  public set packetLength(value: number | undefined) {
    this._packetLength = value;
  }

  // session_number - computed: false, optional: false, required: true
  private _sessionNumber: number;
  public get sessionNumber() {
    return this._sessionNumber;
  }
  public set sessionNumber(value: number) {
    this._sessionNumber = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // traffic_mirror_filter_id - computed: false, optional: false, required: true
  private _trafficMirrorFilterId: string;
  public get trafficMirrorFilterId() {
    return this._trafficMirrorFilterId;
  }
  public set trafficMirrorFilterId(value: string) {
    this._trafficMirrorFilterId = value;
  }

  // traffic_mirror_target_id - computed: false, optional: false, required: true
  private _trafficMirrorTargetId: string;
  public get trafficMirrorTargetId() {
    return this._trafficMirrorTargetId;
  }
  public set trafficMirrorTargetId(value: string) {
    this._trafficMirrorTargetId = value;
  }

  // virtual_network_id - computed: true, optional: true, required: false
  private _virtualNetworkId?: number;
  public get virtualNetworkId() {
    return this._virtualNetworkId ?? this.getNumberAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: number | undefined) {
    this._virtualNetworkId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      network_interface_id: this._networkInterfaceId,
      packet_length: this._packetLength,
      session_number: this._sessionNumber,
      tags: this._tags,
      traffic_mirror_filter_id: this._trafficMirrorFilterId,
      traffic_mirror_target_id: this._trafficMirrorTargetId,
      virtual_network_id: this._virtualNetworkId,
    };
  }
}
