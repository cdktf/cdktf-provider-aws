// https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSecurityGroupIngressRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}
  */
  readonly cidrIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}
  */
  readonly cidrIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}
  */
  readonly referencedSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}
  */
  readonly toPort?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule aws_vpc_security_group_ingress_rule}
*/
export class VpcSecurityGroupIngressRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_security_group_ingress_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule aws_vpc_security_group_ingress_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSecurityGroupIngressRuleConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSecurityGroupIngressRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_security_group_ingress_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._cidrIpv4 = config.cidrIpv4;
    this._cidrIpv6 = config.cidrIpv6;
    this._description = config.description;
    this._fromPort = config.fromPort;
    this._ipProtocol = config.ipProtocol;
    this._prefixListId = config.prefixListId;
    this._referencedSecurityGroupId = config.referencedSecurityGroupId;
    this._securityGroupId = config.securityGroupId;
    this._tags = config.tags;
    this._toPort = config.toPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cidr_ipv4 - computed: false, optional: true, required: false
  private _cidrIpv4?: string; 
  public get cidrIpv4() {
    return this.getStringAttribute('cidr_ipv4');
  }
  public set cidrIpv4(value: string) {
    this._cidrIpv4 = value;
  }
  public resetCidrIpv4() {
    this._cidrIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpv4Input() {
    return this._cidrIpv4;
  }

  // cidr_ipv6 - computed: false, optional: true, required: false
  private _cidrIpv6?: string; 
  public get cidrIpv6() {
    return this.getStringAttribute('cidr_ipv6');
  }
  public set cidrIpv6(value: string) {
    this._cidrIpv6 = value;
  }
  public resetCidrIpv6() {
    this._cidrIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpv6Input() {
    return this._cidrIpv6;
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

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // referenced_security_group_id - computed: false, optional: true, required: false
  private _referencedSecurityGroupId?: string; 
  public get referencedSecurityGroupId() {
    return this.getStringAttribute('referenced_security_group_id');
  }
  public set referencedSecurityGroupId(value: string) {
    this._referencedSecurityGroupId = value;
  }
  public resetReferencedSecurityGroupId() {
    this._referencedSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedSecurityGroupIdInput() {
    return this._referencedSecurityGroupId;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_rule_id - computed: true, optional: false, required: false
  public get securityGroupRuleId() {
    return this.getStringAttribute('security_group_rule_id');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_ipv4: cdktf.stringToTerraform(this._cidrIpv4),
      cidr_ipv6: cdktf.stringToTerraform(this._cidrIpv6),
      description: cdktf.stringToTerraform(this._description),
      from_port: cdktf.numberToTerraform(this._fromPort),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
      referenced_security_group_id: cdktf.stringToTerraform(this._referencedSecurityGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      to_port: cdktf.numberToTerraform(this._toPort),
    };
  }
}
