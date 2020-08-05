// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "destination_cidr_block": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "protocol": {
        "type": "number",
        "optional": true
      },
      "rule_action": {
        "type": "string",
        "required": true
      },
      "rule_number": {
        "type": "number",
        "required": true
      },
      "source_cidr_block": {
        "type": "string",
        "required": true
      },
      "traffic_direction": {
        "type": "string",
        "required": true
      },
      "traffic_mirror_filter_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "destination_port_range": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "from_port": {
              "type": "number",
              "optional": true
            },
            "to_port": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "source_port_range": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "from_port": {
              "type": "number",
              "optional": true
            },
            "to_port": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorFilterRuleConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly destinationCidrBlock: string;
  readonly protocol?: number;
  readonly ruleAction: string;
  readonly ruleNumber: number;
  readonly sourceCidrBlock: string;
  readonly trafficDirection: string;
  readonly trafficMirrorFilterId: string;
  /** destination_port_range block */
  readonly destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange[];
  /** source_port_range block */
  readonly sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange[];
}
export interface Ec2TrafficMirrorFilterRuleDestinationPortRange {
  readonly fromPort?: number;
  readonly toPort?: number;
}
export interface Ec2TrafficMirrorFilterRuleSourcePortRange {
  readonly fromPort?: number;
  readonly toPort?: number;
}

// Resource

export class Ec2TrafficMirrorFilterRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorFilterRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_traffic_mirror_filter_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._protocol = config.protocol;
    this._ruleAction = config.ruleAction;
    this._ruleNumber = config.ruleNumber;
    this._sourceCidrBlock = config.sourceCidrBlock;
    this._trafficDirection = config.trafficDirection;
    this._trafficMirrorFilterId = config.trafficMirrorFilterId;
    this._destinationPortRange = config.destinationPortRange;
    this._sourcePortRange = config.sourcePortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock: string;
  public get destinationCidrBlock() {
    return this._destinationCidrBlock;
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: number | undefined) {
    this._protocol = value;
  }

  // rule_action - computed: false, optional: false, required: true
  private _ruleAction: string;
  public get ruleAction() {
    return this._ruleAction;
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber: number;
  public get ruleNumber() {
    return this._ruleNumber;
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }

  // source_cidr_block - computed: false, optional: false, required: true
  private _sourceCidrBlock: string;
  public get sourceCidrBlock() {
    return this._sourceCidrBlock;
  }
  public set sourceCidrBlock(value: string) {
    this._sourceCidrBlock = value;
  }

  // traffic_direction - computed: false, optional: false, required: true
  private _trafficDirection: string;
  public get trafficDirection() {
    return this._trafficDirection;
  }
  public set trafficDirection(value: string) {
    this._trafficDirection = value;
  }

  // traffic_mirror_filter_id - computed: false, optional: false, required: true
  private _trafficMirrorFilterId: string;
  public get trafficMirrorFilterId() {
    return this._trafficMirrorFilterId;
  }
  public set trafficMirrorFilterId(value: string) {
    this._trafficMirrorFilterId = value;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange[];
  public get destinationPortRange() {
    return this._destinationPortRange;
  }
  public set destinationPortRange(value: Ec2TrafficMirrorFilterRuleDestinationPortRange[] | undefined) {
    this._destinationPortRange = value;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange[];
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
  public set sourcePortRange(value: Ec2TrafficMirrorFilterRuleSourcePortRange[] | undefined) {
    this._sourcePortRange = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      destination_cidr_block: this._destinationCidrBlock,
      protocol: this._protocol,
      rule_action: this._ruleAction,
      rule_number: this._ruleNumber,
      source_cidr_block: this._sourceCidrBlock,
      traffic_direction: this._trafficDirection,
      traffic_mirror_filter_id: this._trafficMirrorFilterId,
      destination_port_range: this._destinationPortRange,
      source_port_range: this._sourcePortRange,
    };
  }
}
