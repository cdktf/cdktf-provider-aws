// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorFilterRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#description Ec2TrafficMirrorFilterRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#protocol Ec2TrafficMirrorFilterRule#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#rule_action Ec2TrafficMirrorFilterRule#rule_action}
  */
  readonly ruleAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#rule_number Ec2TrafficMirrorFilterRule#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}
  */
  readonly sourceCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}
  */
  readonly trafficDirection: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}
  */
  readonly trafficMirrorFilterId: string;
  /**
  * destination_port_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}
  */
  readonly destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange[];
  /**
  * source_port_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}
  */
  readonly sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange[];
}
export interface Ec2TrafficMirrorFilterRuleDestinationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#from_port Ec2TrafficMirrorFilterRule#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#to_port Ec2TrafficMirrorFilterRule#to_port}
  */
  readonly toPort?: number;
}

function ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleDestinationPortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface Ec2TrafficMirrorFilterRuleSourcePortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#from_port Ec2TrafficMirrorFilterRule#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#to_port Ec2TrafficMirrorFilterRule#to_port}
  */
  readonly toPort?: number;
}

function ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleSourcePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule}
*/
export class Ec2TrafficMirrorFilterRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_traffic_mirror_filter_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TrafficMirrorFilterRuleConfig
  */
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

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock: string;
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number;
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number ) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // rule_action - computed: false, optional: false, required: true
  private _ruleAction: string;
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber: number;
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber
  }

  // source_cidr_block - computed: false, optional: false, required: true
  private _sourceCidrBlock: string;
  public get sourceCidrBlock() {
    return this.getStringAttribute('source_cidr_block');
  }
  public set sourceCidrBlock(value: string) {
    this._sourceCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrBlockInput() {
    return this._sourceCidrBlock
  }

  // traffic_direction - computed: false, optional: false, required: true
  private _trafficDirection: string;
  public get trafficDirection() {
    return this.getStringAttribute('traffic_direction');
  }
  public set trafficDirection(value: string) {
    this._trafficDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDirectionInput() {
    return this._trafficDirection
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

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange[];
  public get destinationPortRange() {
    return this.interpolationForAttribute('destination_port_range') as any;
  }
  public set destinationPortRange(value: Ec2TrafficMirrorFilterRuleDestinationPortRange[] ) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange[];
  public get sourcePortRange() {
    return this.interpolationForAttribute('source_port_range') as any;
  }
  public set sourcePortRange(value: Ec2TrafficMirrorFilterRuleSourcePortRange[] ) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      protocol: cdktf.numberToTerraform(this._protocol),
      rule_action: cdktf.stringToTerraform(this._ruleAction),
      rule_number: cdktf.numberToTerraform(this._ruleNumber),
      source_cidr_block: cdktf.stringToTerraform(this._sourceCidrBlock),
      traffic_direction: cdktf.stringToTerraform(this._trafficDirection),
      traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
      destination_port_range: cdktf.listMapper(ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform)(this._destinationPortRange),
      source_port_range: cdktf.listMapper(ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform)(this._sourcePortRange),
    };
  }
}
