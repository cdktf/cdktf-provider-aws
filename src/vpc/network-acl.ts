// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface NetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#egress NetworkAcl#egress}
  */
  readonly egress?: NetworkAclEgress[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ingress NetworkAcl#ingress}
  */
  readonly ingress?: NetworkAclIngress[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#subnet_ids NetworkAcl#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#tags NetworkAcl#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#tags_all NetworkAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#vpc_id NetworkAcl#vpc_id}
  */
  readonly vpcId: string;
}
export interface NetworkAclEgress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#action NetworkAcl#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#cidr_block NetworkAcl#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#from_port NetworkAcl#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_code NetworkAcl#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_type NetworkAcl#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#protocol NetworkAcl#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#rule_no NetworkAcl#rule_no}
  */
  readonly ruleNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#to_port NetworkAcl#to_port}
  */
  readonly toPort?: number;
}

export function networkAclEgressToTerraform(struct?: NetworkAclEgress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    cidr_block: struct!.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.cidrBlock),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    icmp_code: struct!.icmpCode === undefined ? null : cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: struct!.icmpType === undefined ? null : cdktf.numberToTerraform(struct!.icmpType),
    ipv6_cidr_block: struct!.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    rule_no: struct!.ruleNo === undefined ? null : cdktf.numberToTerraform(struct!.ruleNo),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface NetworkAclIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#action NetworkAcl#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#cidr_block NetworkAcl#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#from_port NetworkAcl#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_code NetworkAcl#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_type NetworkAcl#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#protocol NetworkAcl#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#rule_no NetworkAcl#rule_no}
  */
  readonly ruleNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#to_port NetworkAcl#to_port}
  */
  readonly toPort?: number;
}

export function networkAclIngressToTerraform(struct?: NetworkAclIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    cidr_block: struct!.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.cidrBlock),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    icmp_code: struct!.icmpCode === undefined ? null : cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: struct!.icmpType === undefined ? null : cdktf.numberToTerraform(struct!.icmpType),
    ipv6_cidr_block: struct!.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    rule_no: struct!.ruleNo === undefined ? null : cdktf.numberToTerraform(struct!.ruleNo),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl}
*/
export class NetworkAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_network_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAclConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._egress = config.egress;
    this._ingress = config.ingress;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // egress - computed: true, optional: true, required: false
  private _egress?: NetworkAclEgress[]; 
  public get egress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: NetworkAclEgress[]) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress?: NetworkAclIngress[]; 
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: NetworkAclIngress[]) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egress: cdktf.listMapper(networkAclEgressToTerraform)(this._egress),
      ingress: cdktf.listMapper(networkAclIngressToTerraform)(this._ingress),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
