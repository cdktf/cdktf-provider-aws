// https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cidr_block": {
        "type": "string",
        "optional": true
      },
      "egress": {
        "type": "bool",
        "optional": true
      },
      "from_port": {
        "type": "number",
        "optional": true
      },
      "icmp_code": {
        "type": "string",
        "optional": true
      },
      "icmp_type": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_cidr_block": {
        "type": "string",
        "optional": true
      },
      "network_acl_id": {
        "type": "string",
        "required": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "rule_action": {
        "type": "string",
        "required": true
      },
      "rule_number": {
        "type": "number",
        "required": true
      },
      "to_port": {
        "type": "number",
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

export interface NetworkAclRuleConfig extends TerraformMetaArguments {
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

export class NetworkAclRule extends TerraformResource {

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
    return this._cidrBlock;
  }
  public set cidrBlock(value: string | undefined) {
    this._cidrBlock = value;
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: boolean;
  public get egress() {
    return this._egress;
  }
  public set egress(value: boolean | undefined) {
    this._egress = value;
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number;
  public get fromPort() {
    return this._fromPort;
  }
  public set fromPort(value: number | undefined) {
    this._fromPort = value;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string;
  public get icmpCode() {
    return this._icmpCode;
  }
  public set icmpCode(value: string | undefined) {
    this._icmpCode = value;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string;
  public get icmpType() {
    return this._icmpType;
  }
  public set icmpType(value: string | undefined) {
    this._icmpType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string;
  public get ipv6CidrBlock() {
    return this._ipv6CidrBlock;
  }
  public set ipv6CidrBlock(value: string | undefined) {
    this._ipv6CidrBlock = value;
  }

  // network_acl_id - computed: false, optional: false, required: true
  private _networkAclId: string;
  public get networkAclId() {
    return this._networkAclId;
  }
  public set networkAclId(value: string) {
    this._networkAclId = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
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

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number;
  public get toPort() {
    return this._toPort;
  }
  public set toPort(value: number | undefined) {
    this._toPort = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: this._cidrBlock,
      egress: this._egress,
      from_port: this._fromPort,
      icmp_code: this._icmpCode,
      icmp_type: this._icmpType,
      ipv6_cidr_block: this._ipv6CidrBlock,
      network_acl_id: this._networkAclId,
      protocol: this._protocol,
      rule_action: this._ruleAction,
      rule_number: this._ruleNumber,
      to_port: this._toPort,
    };
  }
}
