// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DefaultNetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}
  */
  readonly defaultNetworkAclId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#subnet_ids DefaultNetworkAcl#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#tags DefaultNetworkAcl#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#tags_all DefaultNetworkAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * egress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#egress DefaultNetworkAcl#egress}
  */
  readonly egress?: DefaultNetworkAclEgress[];
  /**
  * ingress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ingress DefaultNetworkAcl#ingress}
  */
  readonly ingress?: DefaultNetworkAclIngress[];
}
export interface DefaultNetworkAclEgress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#action DefaultNetworkAcl#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#cidr_block DefaultNetworkAcl#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#from_port DefaultNetworkAcl#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_code DefaultNetworkAcl#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_type DefaultNetworkAcl#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#protocol DefaultNetworkAcl#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#rule_no DefaultNetworkAcl#rule_no}
  */
  readonly ruleNo: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#to_port DefaultNetworkAcl#to_port}
  */
  readonly toPort: number;
}

export function defaultNetworkAclEgressToTerraform(struct?: DefaultNetworkAclEgress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_no: cdktf.numberToTerraform(struct!.ruleNo),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface DefaultNetworkAclIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#action DefaultNetworkAcl#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#cidr_block DefaultNetworkAcl#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#from_port DefaultNetworkAcl#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_code DefaultNetworkAcl#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_type DefaultNetworkAcl#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#protocol DefaultNetworkAcl#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#rule_no DefaultNetworkAcl#rule_no}
  */
  readonly ruleNo: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#to_port DefaultNetworkAcl#to_port}
  */
  readonly toPort: number;
}

export function defaultNetworkAclIngressToTerraform(struct?: DefaultNetworkAclIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_no: cdktf.numberToTerraform(struct!.ruleNo),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl}
*/
export class DefaultNetworkAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_default_network_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultNetworkAclConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultNetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultNetworkAclId = config.defaultNetworkAclId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._egress = config.egress;
    this._ingress = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_network_acl_id - computed: false, optional: false, required: true
  private _defaultNetworkAclId?: string; 
  public get defaultNetworkAclId() {
    return this.getStringAttribute('default_network_acl_id');
  }
  public set defaultNetworkAclId(value: string) {
    this._defaultNetworkAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkAclIdInput() {
    return this._defaultNetworkAclId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // subnet_ids - computed: false, optional: true, required: false
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: DefaultNetworkAclEgress[]; 
  public get egress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: DefaultNetworkAclEgress[]) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: DefaultNetworkAclIngress[]; 
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: DefaultNetworkAclIngress[]) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_network_acl_id: cdktf.stringToTerraform(this._defaultNetworkAclId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      egress: cdktf.listMapper(defaultNetworkAclEgressToTerraform)(this._egress),
      ingress: cdktf.listMapper(defaultNetworkAclIngressToTerraform)(this._ingress),
    };
  }
}
