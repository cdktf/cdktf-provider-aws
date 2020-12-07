// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorFilterRuleConfig extends cdktf.TerraformMetaArguments {
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

function ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleDestinationPortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface Ec2TrafficMirrorFilterRuleSourcePortRange {
  readonly fromPort?: number;
  readonly toPort?: number;
}

function ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleSourcePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


// Resource

export class Ec2TrafficMirrorFilterRule extends cdktf.TerraformResource {

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
