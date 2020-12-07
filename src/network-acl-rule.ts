// https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAclRuleConfig extends cdktf.TerraformMetaArguments {
  readonly cidrBlock?: string;
  readonly egress?: boolean;
  readonly fromPort?: number;
  readonly icmpCode?: string;
  readonly icmpType?: string;
  readonly ipv6CidrBlock?: string;
  readonly networkAclId: string;
  readonly protocol: string;
  readonly ruleAction: string;
  readonly ruleNumber: number;
  readonly toPort?: number;
}

// Resource

export class NetworkAclRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkAclRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acl_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidrBlock = config.cidrBlock;
    this._egress = config.egress;
    this._fromPort = config.fromPort;
    this._icmpCode = config.icmpCode;
    this._icmpType = config.icmpType;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._networkAclId = config.networkAclId;
    this._protocol = config.protocol;
    this._ruleAction = config.ruleAction;
    this._ruleNumber = config.ruleNumber;
    this._toPort = config.toPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string;
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string ) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: boolean;
  public get egress() {
    return this.getBooleanAttribute('egress');
  }
  public set egress(value: boolean ) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number;
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number ) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string;
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string ) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string;
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string ) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string;
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string ) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock
  }

  // network_acl_id - computed: false, optional: false, required: true
  private _networkAclId: string;
  public get networkAclId() {
    return this.getStringAttribute('network_acl_id');
  }
  public set networkAclId(value: string) {
    this._networkAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclIdInput() {
    return this._networkAclId
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
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

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number;
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number ) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      egress: cdktf.booleanToTerraform(this._egress),
      from_port: cdktf.numberToTerraform(this._fromPort),
      icmp_code: cdktf.stringToTerraform(this._icmpCode),
      icmp_type: cdktf.stringToTerraform(this._icmpType),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      network_acl_id: cdktf.stringToTerraform(this._networkAclId),
      protocol: cdktf.stringToTerraform(this._protocol),
      rule_action: cdktf.stringToTerraform(this._ruleAction),
      rule_number: cdktf.numberToTerraform(this._ruleNumber),
      to_port: cdktf.numberToTerraform(this._toPort),
    };
  }
}
