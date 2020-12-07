// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorSessionConfig extends cdktf.TerraformMetaArguments {
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

export class Ec2TrafficMirrorSession extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: number;
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }
  public set packetLength(value: number ) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength
  }

  // session_number - computed: false, optional: false, required: true
  private _sessionNumber: number;
  public get sessionNumber() {
    return this.getNumberAttribute('session_number');
  }
  public set sessionNumber(value: number) {
    this._sessionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNumberInput() {
    return this._sessionNumber
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // traffic_mirror_filter_id - computed: false, optional: false, required: true
  private _trafficMirrorFilterId: string;
  public get trafficMirrorFilterId() {
    return this.getStringAttribute('traffic_mirror_filter_id');
  }
  public set trafficMirrorFilterId(value: string) {
    this._trafficMirrorFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorFilterIdInput() {
    return this._trafficMirrorFilterId
  }

  // traffic_mirror_target_id - computed: false, optional: false, required: true
  private _trafficMirrorTargetId: string;
  public get trafficMirrorTargetId() {
    return this.getStringAttribute('traffic_mirror_target_id');
  }
  public set trafficMirrorTargetId(value: string) {
    this._trafficMirrorTargetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorTargetIdInput() {
    return this._trafficMirrorTargetId
  }

  // virtual_network_id - computed: true, optional: true, required: false
  private _virtualNetworkId?: number;
  public get virtualNetworkId() {
    return this.getNumberAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: number) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      packet_length: cdktf.numberToTerraform(this._packetLength),
      session_number: cdktf.numberToTerraform(this._sessionNumber),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
      traffic_mirror_target_id: cdktf.stringToTerraform(this._trafficMirrorTargetId),
      virtual_network_id: cdktf.numberToTerraform(this._virtualNetworkId),
    };
  }
}
