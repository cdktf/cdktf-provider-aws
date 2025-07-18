/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#description SecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#egress SecurityGroup#egress}
  */
  readonly egress?: SecurityGroupEgress[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#id SecurityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#ingress SecurityGroup#ingress}
  */
  readonly ingress?: SecurityGroupIngress[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#name SecurityGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#name_prefix SecurityGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#region SecurityGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}
  */
  readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#tags SecurityGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#tags_all SecurityGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#vpc_id SecurityGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#timeouts SecurityGroup#timeouts}
  */
  readonly timeouts?: SecurityGroupTimeouts;
}
export interface SecurityGroupEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#description SecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#from_port SecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}
  */
  readonly prefixListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#protocol SecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#self SecurityGroup#self}
  */
  readonly selfAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#to_port SecurityGroup#to_port}
  */
  readonly toPort?: number;
}

export function securityGroupEgressToTerraform(struct?: SecurityGroupEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6CidrBlocks),
    prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListIds),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}


export function securityGroupEgressToHclTerraform(struct?: SecurityGroupEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: struct!.cidrBlocks === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: struct!.description === undefined ? null : cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_port: {
      value: struct!.fromPort === undefined ? null : cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_cidr_blocks: {
      value: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_list_ids: {
      value: struct!.prefixListIds === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: struct!.protocol === undefined ? null : cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: struct!.securityGroups === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    self: {
      value: struct!.selfAttribute === undefined ? null : cdktf.booleanToHclTerraform(struct!.selfAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_port: {
      value: struct!.toPort === undefined ? null : cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityGroupEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._ipv6CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlocks = this._ipv6CidrBlocks;
    }
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._self !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
      this._description = undefined;
      this._fromPort = undefined;
      this._ipv6CidrBlocks = undefined;
      this._prefixListIds = undefined;
      this._protocol = undefined;
      this._securityGroups = undefined;
      this._self = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
      this._description = value.description;
      this._fromPort = value.fromPort;
      this._ipv6CidrBlocks = value.ipv6CidrBlocks;
      this._prefixListIds = value.prefixListIds;
      this._protocol = value.protocol;
      this._securityGroups = value.securityGroups;
      this._self = value.selfAttribute;
      this._toPort = value.toPort;
    }
  }

  // cidr_blocks - computed: true, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // description - computed: true, optional: true, required: false
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

  // ipv6_cidr_blocks - computed: true, optional: true, required: false
  private _ipv6CidrBlocks?: string[]; 
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6_cidr_blocks');
  }
  public set ipv6CidrBlocks(value: string[]) {
    this._ipv6CidrBlocks = value;
  }
  public resetIpv6CidrBlocks() {
    this._ipv6CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlocksInput() {
    return this._ipv6CidrBlocks;
  }

  // prefix_list_ids - computed: true, optional: true, required: false
  private _prefixListIds?: string[]; 
  public get prefixListIds() {
    return this.getListAttribute('prefix_list_ids');
  }
  public set prefixListIds(value: string[]) {
    this._prefixListIds = value;
  }
  public resetPrefixListIds() {
    this._prefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
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

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // self - computed: true, optional: true, required: false
  private _self?: boolean | cdktf.IResolvable; 
  public get selfAttribute() {
    return this.getBooleanAttribute('self');
  }
  public set selfAttribute(value: boolean | cdktf.IResolvable) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self;
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

export class SecurityGroupEgressList extends cdktf.ComplexList {
  public internalValue? : SecurityGroupEgress[] | cdktf.IResolvable

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
  public get(index: number): SecurityGroupEgressOutputReference {
    return new SecurityGroupEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityGroupIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#cidr_blocks SecurityGroup#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#description SecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#from_port SecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}
  */
  readonly prefixListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#protocol SecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#security_groups SecurityGroup#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#self SecurityGroup#self}
  */
  readonly selfAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#to_port SecurityGroup#to_port}
  */
  readonly toPort?: number;
}

export function securityGroupIngressToTerraform(struct?: SecurityGroupIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6CidrBlocks),
    prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListIds),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}


export function securityGroupIngressToHclTerraform(struct?: SecurityGroupIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: struct!.cidrBlocks === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: struct!.description === undefined ? null : cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_port: {
      value: struct!.fromPort === undefined ? null : cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_cidr_blocks: {
      value: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_list_ids: {
      value: struct!.prefixListIds === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: struct!.protocol === undefined ? null : cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: struct!.securityGroups === undefined ? null : cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    self: {
      value: struct!.selfAttribute === undefined ? null : cdktf.booleanToHclTerraform(struct!.selfAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_port: {
      value: struct!.toPort === undefined ? null : cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityGroupIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._ipv6CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlocks = this._ipv6CidrBlocks;
    }
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._self !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
      this._description = undefined;
      this._fromPort = undefined;
      this._ipv6CidrBlocks = undefined;
      this._prefixListIds = undefined;
      this._protocol = undefined;
      this._securityGroups = undefined;
      this._self = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
      this._description = value.description;
      this._fromPort = value.fromPort;
      this._ipv6CidrBlocks = value.ipv6CidrBlocks;
      this._prefixListIds = value.prefixListIds;
      this._protocol = value.protocol;
      this._securityGroups = value.securityGroups;
      this._self = value.selfAttribute;
      this._toPort = value.toPort;
    }
  }

  // cidr_blocks - computed: true, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // description - computed: true, optional: true, required: false
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

  // ipv6_cidr_blocks - computed: true, optional: true, required: false
  private _ipv6CidrBlocks?: string[]; 
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6_cidr_blocks');
  }
  public set ipv6CidrBlocks(value: string[]) {
    this._ipv6CidrBlocks = value;
  }
  public resetIpv6CidrBlocks() {
    this._ipv6CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlocksInput() {
    return this._ipv6CidrBlocks;
  }

  // prefix_list_ids - computed: true, optional: true, required: false
  private _prefixListIds?: string[]; 
  public get prefixListIds() {
    return this.getListAttribute('prefix_list_ids');
  }
  public set prefixListIds(value: string[]) {
    this._prefixListIds = value;
  }
  public resetPrefixListIds() {
    this._prefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
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

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // self - computed: true, optional: true, required: false
  private _self?: boolean | cdktf.IResolvable; 
  public get selfAttribute() {
    return this.getBooleanAttribute('self');
  }
  public set selfAttribute(value: boolean | cdktf.IResolvable) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self;
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

export class SecurityGroupIngressList extends cdktf.ComplexList {
  public internalValue? : SecurityGroupIngress[] | cdktf.IResolvable

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
  public get(index: number): SecurityGroupIngressOutputReference {
    return new SecurityGroupIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#create SecurityGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#delete SecurityGroup#delete}
  */
  readonly delete?: string;
}

export function securityGroupTimeoutsToTerraform(struct?: SecurityGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function securityGroupTimeoutsToHclTerraform(struct?: SecurityGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group aws_security_group}
*/
export class SecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityGroup to import
  * @param importFromId The id of the existing SecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/security_group aws_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_security_group',
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
    this._description = config.description;
    this._egress.internalValue = config.egress;
    this._id = config.id;
    this._ingress.internalValue = config.ingress;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._revokeRulesOnDelete = config.revokeRulesOnDelete;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
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

  // egress - computed: true, optional: true, required: false
  private _egress = new SecurityGroupEgressList(this, "egress", true);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: SecurityGroupEgress[] | cdktf.IResolvable) {
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
  private _ingress = new SecurityGroupIngressList(this, "ingress", true);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: SecurityGroupIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // revoke_rules_on_delete - computed: false, optional: true, required: false
  private _revokeRulesOnDelete?: boolean | cdktf.IResolvable; 
  public get revokeRulesOnDelete() {
    return this.getBooleanAttribute('revoke_rules_on_delete');
  }
  public set revokeRulesOnDelete(value: boolean | cdktf.IResolvable) {
    this._revokeRulesOnDelete = value;
  }
  public resetRevokeRulesOnDelete() {
    this._revokeRulesOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeRulesOnDeleteInput() {
    return this._revokeRulesOnDelete;
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      egress: cdktf.listMapper(securityGroupEgressToTerraform, false)(this._egress.internalValue),
      id: cdktf.stringToTerraform(this._id),
      ingress: cdktf.listMapper(securityGroupIngressToTerraform, false)(this._ingress.internalValue),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      region: cdktf.stringToTerraform(this._region),
      revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: securityGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress: {
        value: cdktf.listMapperHcl(securityGroupEgressToHclTerraform, false)(this._egress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityGroupEgressList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress: {
        value: cdktf.listMapperHcl(securityGroupIngressToHclTerraform, false)(this._ingress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityGroupIngressList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
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
      revoke_rules_on_delete: {
        value: cdktf.booleanToHclTerraform(this._revokeRulesOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: securityGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
