// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}
  */
  readonly packetLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}
  */
  readonly sessionNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}
  */
  readonly trafficMirrorFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}
  */
  readonly trafficMirrorTargetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}
  */
  readonly virtualNetworkId?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session aws_ec2_traffic_mirror_session}
*/
export class Ec2TrafficMirrorSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_traffic_mirror_session";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session aws_ec2_traffic_mirror_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TrafficMirrorSessionConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_traffic_mirror_session',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._networkInterfaceId = config.networkInterfaceId;
    this._packetLength = config.packetLength;
    this._sessionNumber = config.sessionNumber;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: number; 
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }
  public set packetLength(value: number) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // session_number - computed: false, optional: false, required: true
  private _sessionNumber?: number; 
  public get sessionNumber() {
    return this.getNumberAttribute('session_number');
  }
  public set sessionNumber(value: number) {
    this._sessionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNumberInput() {
    return this._sessionNumber;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // traffic_mirror_filter_id - computed: false, optional: false, required: true
  private _trafficMirrorFilterId?: string; 
  public get trafficMirrorFilterId() {
    return this.getStringAttribute('traffic_mirror_filter_id');
  }
  public set trafficMirrorFilterId(value: string) {
    this._trafficMirrorFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorFilterIdInput() {
    return this._trafficMirrorFilterId;
  }

  // traffic_mirror_target_id - computed: false, optional: false, required: true
  private _trafficMirrorTargetId?: string; 
  public get trafficMirrorTargetId() {
    return this.getStringAttribute('traffic_mirror_target_id');
  }
  public set trafficMirrorTargetId(value: string) {
    this._trafficMirrorTargetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorTargetIdInput() {
    return this._trafficMirrorTargetId;
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
    return this._virtualNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      packet_length: cdktf.numberToTerraform(this._packetLength),
      session_number: cdktf.numberToTerraform(this._sessionNumber),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
      traffic_mirror_target_id: cdktf.stringToTerraform(this._trafficMirrorTargetId),
      virtual_network_id: cdktf.numberToTerraform(this._virtualNetworkId),
    };
  }
}
