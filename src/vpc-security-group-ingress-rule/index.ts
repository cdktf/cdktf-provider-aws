/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSecurityGroupIngressRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}
  */
  readonly cidrIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}
  */
  readonly cidrIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}
  */
  readonly referencedSecurityGroupId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#region VpcSecurityGroupIngressRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}
  */
  readonly toPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule aws_vpc_security_group_ingress_rule}
*/
export class VpcSecurityGroupIngressRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_security_group_ingress_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSecurityGroupIngressRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSecurityGroupIngressRule to import
  * @param importFromId The id of the existing VpcSecurityGroupIngressRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSecurityGroupIngressRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_security_group_ingress_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_security_group_ingress_rule aws_vpc_security_group_ingress_rule} Resource
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
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
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
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      to_port: cdktf.numberToTerraform(this._toPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_ipv4: {
        value: cdktf.stringToHclTerraform(this._cidrIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_ipv6: {
        value: cdktf.stringToHclTerraform(this._cidrIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_port: {
        value: cdktf.numberToHclTerraform(this._fromPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_id: {
        value: cdktf.stringToHclTerraform(this._prefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      referenced_security_group_id: {
        value: cdktf.stringToHclTerraform(this._referencedSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      to_port: {
        value: cdktf.numberToHclTerraform(this._toPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
