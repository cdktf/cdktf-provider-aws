// https://www.terraform.io/docs/providers/aws/r/network_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#egress NetworkAcl#egress}
  */
  readonly egress?: NetworkAclEgress[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#id NetworkAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ingress NetworkAcl#ingress}
  */
  readonly ingress?: NetworkAclIngress[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#subnet_ids NetworkAcl#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags NetworkAcl#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags_all NetworkAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#vpc_id NetworkAcl#vpc_id}
  */
  readonly vpcId: string;
}
export interface NetworkAclEgress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#action NetworkAcl#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#cidr_block NetworkAcl#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#from_port NetworkAcl#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_code NetworkAcl#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_type NetworkAcl#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#protocol NetworkAcl#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#rule_no NetworkAcl#rule_no}
  */
  readonly ruleNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#to_port NetworkAcl#to_port}
  */
  readonly toPort?: number;
}

export function networkAclEgressToTerraform(struct?: NetworkAclEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class NetworkAclEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkAclEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNo = this._ruleNo;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidrBlock = undefined;
      this._fromPort = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._ipv6CidrBlock = undefined;
      this._protocol = undefined;
      this._ruleNo = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidrBlock = value.cidrBlock;
      this._fromPort = value.fromPort;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._protocol = value.protocol;
      this._ruleNo = value.ruleNo;
      this._toPort = value.toPort;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // from_port - computed: true, optional: true, required: false
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

  // icmp_code - computed: true, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: true, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_no - computed: true, optional: true, required: false
  private _ruleNo?: number; 
  public get ruleNo() {
    return this.getNumberAttribute('rule_no');
  }
  public set ruleNo(value: number) {
    this._ruleNo = value;
  }
  public resetRuleNo() {
    this._ruleNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNoInput() {
    return this._ruleNo;
  }

  // to_port - computed: true, optional: true, required: false
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
}

export class NetworkAclEgressList extends cdktf.ComplexList {
  public internalValue? : NetworkAclEgress[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkAclEgressOutputReference {
    return new NetworkAclEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAclIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#action NetworkAcl#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#cidr_block NetworkAcl#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#from_port NetworkAcl#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_code NetworkAcl#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_type NetworkAcl#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#protocol NetworkAcl#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#rule_no NetworkAcl#rule_no}
  */
  readonly ruleNo?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#to_port NetworkAcl#to_port}
  */
  readonly toPort?: number;
}

export function networkAclIngressToTerraform(struct?: NetworkAclIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class NetworkAclIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkAclIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNo = this._ruleNo;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidrBlock = undefined;
      this._fromPort = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._ipv6CidrBlock = undefined;
      this._protocol = undefined;
      this._ruleNo = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidrBlock = value.cidrBlock;
      this._fromPort = value.fromPort;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._protocol = value.protocol;
      this._ruleNo = value.ruleNo;
      this._toPort = value.toPort;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // from_port - computed: true, optional: true, required: false
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

  // icmp_code - computed: true, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: true, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_no - computed: true, optional: true, required: false
  private _ruleNo?: number; 
  public get ruleNo() {
    return this.getNumberAttribute('rule_no');
  }
  public set ruleNo(value: number) {
    this._ruleNo = value;
  }
  public resetRuleNo() {
    this._ruleNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNoInput() {
    return this._ruleNo;
  }

  // to_port - computed: true, optional: true, required: false
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
}

export class NetworkAclIngressList extends cdktf.ComplexList {
  public internalValue? : NetworkAclIngress[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkAclIngressOutputReference {
    return new NetworkAclIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl aws_network_acl}
*/
export class NetworkAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_network_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl aws_network_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAclConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acl',
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
    this._egress.internalValue = config.egress;
    this._id = config.id;
    this._ingress.internalValue = config.ingress;
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
  private _egress = new NetworkAclEgressList(this, "egress", true);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: NetworkAclEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
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

  // ingress - computed: true, optional: true, required: false
  private _ingress = new NetworkAclIngressList(this, "ingress", true);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: NetworkAclIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
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
      egress: cdktf.listMapper(networkAclEgressToTerraform, false)(this._egress.internalValue),
      id: cdktf.stringToTerraform(this._id),
      ingress: cdktf.listMapper(networkAclIngressToTerraform, false)(this._ingress.internalValue),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
