/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedaccessEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}
  */
  readonly applicationDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}
  */
  readonly attachmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}
  */
  readonly domainCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}
  */
  readonly endpointDomainPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#region VerifiedaccessEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}
  */
  readonly verifiedAccessGroupId: string;
  /**
  * cidr_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#cidr_options VerifiedaccessEndpoint#cidr_options}
  */
  readonly cidrOptions?: VerifiedaccessEndpointCidrOptions;
  /**
  * load_balancer_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#load_balancer_options VerifiedaccessEndpoint#load_balancer_options}
  */
  readonly loadBalancerOptions?: VerifiedaccessEndpointLoadBalancerOptions;
  /**
  * network_interface_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#network_interface_options VerifiedaccessEndpoint#network_interface_options}
  */
  readonly networkInterfaceOptions?: VerifiedaccessEndpointNetworkInterfaceOptions;
  /**
  * rds_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#rds_options VerifiedaccessEndpoint#rds_options}
  */
  readonly rdsOptions?: VerifiedaccessEndpointRdsOptions;
  /**
  * sse_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#sse_specification VerifiedaccessEndpoint#sse_specification}
  */
  readonly sseSpecification?: VerifiedaccessEndpointSseSpecification;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#timeouts VerifiedaccessEndpoint#timeouts}
  */
  readonly timeouts?: VerifiedaccessEndpointTimeouts;
}
export interface VerifiedaccessEndpointCidrOptionsPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}
  */
  readonly toPort: number;
}

export function verifiedaccessEndpointCidrOptionsPortRangeToTerraform(struct?: VerifiedaccessEndpointCidrOptionsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function verifiedaccessEndpointCidrOptionsPortRangeToHclTerraform(struct?: VerifiedaccessEndpointCidrOptionsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointCidrOptionsPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedaccessEndpointCidrOptionsPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointCidrOptionsPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class VerifiedaccessEndpointCidrOptionsPortRangeList extends cdktf.ComplexList {
  public internalValue? : VerifiedaccessEndpointCidrOptionsPortRange[] | cdktf.IResolvable

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
  public get(index: number): VerifiedaccessEndpointCidrOptionsPortRangeOutputReference {
    return new VerifiedaccessEndpointCidrOptionsPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedaccessEndpointCidrOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#cidr VerifiedaccessEndpoint#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}
  */
  readonly portRange: VerifiedaccessEndpointCidrOptionsPortRange[] | cdktf.IResolvable;
}

export function verifiedaccessEndpointCidrOptionsToTerraform(struct?: VerifiedaccessEndpointCidrOptionsOutputReference | VerifiedaccessEndpointCidrOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    port_range: cdktf.listMapper(verifiedaccessEndpointCidrOptionsPortRangeToTerraform, true)(struct!.portRange),
  }
}


export function verifiedaccessEndpointCidrOptionsToHclTerraform(struct?: VerifiedaccessEndpointCidrOptionsOutputReference | VerifiedaccessEndpointCidrOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_range: {
      value: cdktf.listMapperHcl(verifiedaccessEndpointCidrOptionsPortRangeToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "set",
      storageClassType: "VerifiedaccessEndpointCidrOptionsPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointCidrOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessEndpointCidrOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointCidrOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidr = undefined;
      this._protocol = undefined;
      this._subnetIds = undefined;
      this._portRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidr = value.cidr;
      this._protocol = value.protocol;
      this._subnetIds = value.subnetIds;
      this._portRange.internalValue = value.portRange;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // protocol - computed: false, optional: true, required: false
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

  // subnet_ids - computed: false, optional: true, required: false
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

  // port_range - computed: false, optional: false, required: true
  private _portRange = new VerifiedaccessEndpointCidrOptionsPortRangeList(this, "port_range", true);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: VerifiedaccessEndpointCidrOptionsPortRange[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}
export interface VerifiedaccessEndpointLoadBalancerOptionsPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}
  */
  readonly toPort: number;
}

export function verifiedaccessEndpointLoadBalancerOptionsPortRangeToTerraform(struct?: VerifiedaccessEndpointLoadBalancerOptionsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function verifiedaccessEndpointLoadBalancerOptionsPortRangeToHclTerraform(struct?: VerifiedaccessEndpointLoadBalancerOptionsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedaccessEndpointLoadBalancerOptionsPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointLoadBalancerOptionsPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class VerifiedaccessEndpointLoadBalancerOptionsPortRangeList extends cdktf.ComplexList {
  public internalValue? : VerifiedaccessEndpointLoadBalancerOptionsPortRange[] | cdktf.IResolvable

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
  public get(index: number): VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference {
    return new VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedaccessEndpointLoadBalancerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}
  */
  readonly loadBalancerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}
  */
  readonly portRange?: VerifiedaccessEndpointLoadBalancerOptionsPortRange[] | cdktf.IResolvable;
}

export function verifiedaccessEndpointLoadBalancerOptionsToTerraform(struct?: VerifiedaccessEndpointLoadBalancerOptionsOutputReference | VerifiedaccessEndpointLoadBalancerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_arn: cdktf.stringToTerraform(struct!.loadBalancerArn),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    port_range: cdktf.listMapper(verifiedaccessEndpointLoadBalancerOptionsPortRangeToTerraform, true)(struct!.portRange),
  }
}


export function verifiedaccessEndpointLoadBalancerOptionsToHclTerraform(struct?: VerifiedaccessEndpointLoadBalancerOptionsOutputReference | VerifiedaccessEndpointLoadBalancerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer_arn: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_range: {
      value: cdktf.listMapperHcl(verifiedaccessEndpointLoadBalancerOptionsPortRangeToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "set",
      storageClassType: "VerifiedaccessEndpointLoadBalancerOptionsPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointLoadBalancerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessEndpointLoadBalancerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerArn = this._loadBalancerArn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointLoadBalancerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancerArn = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._subnetIds = undefined;
      this._portRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancerArn = value.loadBalancerArn;
      this._port = value.port;
      this._protocol = value.protocol;
      this._subnetIds = value.subnetIds;
      this._portRange.internalValue = value.portRange;
    }
  }

  // load_balancer_arn - computed: false, optional: true, required: false
  private _loadBalancerArn?: string; 
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  public resetLoadBalancerArn() {
    this._loadBalancerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
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

  // subnet_ids - computed: false, optional: true, required: false
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

  // port_range - computed: false, optional: true, required: false
  private _portRange = new VerifiedaccessEndpointLoadBalancerOptionsPortRangeList(this, "port_range", true);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: VerifiedaccessEndpointLoadBalancerOptionsPortRange[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}
export interface VerifiedaccessEndpointNetworkInterfaceOptionsPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}
  */
  readonly toPort: number;
}

export function verifiedaccessEndpointNetworkInterfaceOptionsPortRangeToTerraform(struct?: VerifiedaccessEndpointNetworkInterfaceOptionsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function verifiedaccessEndpointNetworkInterfaceOptionsPortRangeToHclTerraform(struct?: VerifiedaccessEndpointNetworkInterfaceOptionsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedaccessEndpointNetworkInterfaceOptionsPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointNetworkInterfaceOptionsPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList extends cdktf.ComplexList {
  public internalValue? : VerifiedaccessEndpointNetworkInterfaceOptionsPortRange[] | cdktf.IResolvable

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
  public get(index: number): VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference {
    return new VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedaccessEndpointNetworkInterfaceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}
  */
  readonly portRange?: VerifiedaccessEndpointNetworkInterfaceOptionsPortRange[] | cdktf.IResolvable;
}

export function verifiedaccessEndpointNetworkInterfaceOptionsToTerraform(struct?: VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference | VerifiedaccessEndpointNetworkInterfaceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    port_range: cdktf.listMapper(verifiedaccessEndpointNetworkInterfaceOptionsPortRangeToTerraform, true)(struct!.portRange),
  }
}


export function verifiedaccessEndpointNetworkInterfaceOptionsToHclTerraform(struct?: VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference | VerifiedaccessEndpointNetworkInterfaceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range: {
      value: cdktf.listMapperHcl(verifiedaccessEndpointNetworkInterfaceOptionsPortRangeToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "set",
      storageClassType: "VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessEndpointNetworkInterfaceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointNetworkInterfaceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkInterfaceId = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._portRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkInterfaceId = value.networkInterfaceId;
      this._port = value.port;
      this._protocol = value.protocol;
      this._portRange.internalValue = value.portRange;
    }
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
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

  // port_range - computed: false, optional: true, required: false
  private _portRange = new VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList(this, "port_range", true);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: VerifiedaccessEndpointNetworkInterfaceOptionsPortRange[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}
export interface VerifiedaccessEndpointRdsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#rds_db_cluster_arn VerifiedaccessEndpoint#rds_db_cluster_arn}
  */
  readonly rdsDbClusterArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#rds_db_instance_arn VerifiedaccessEndpoint#rds_db_instance_arn}
  */
  readonly rdsDbInstanceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#rds_db_proxy_arn VerifiedaccessEndpoint#rds_db_proxy_arn}
  */
  readonly rdsDbProxyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#rds_endpoint VerifiedaccessEndpoint#rds_endpoint}
  */
  readonly rdsEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function verifiedaccessEndpointRdsOptionsToTerraform(struct?: VerifiedaccessEndpointRdsOptionsOutputReference | VerifiedaccessEndpointRdsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rds_db_cluster_arn: cdktf.stringToTerraform(struct!.rdsDbClusterArn),
    rds_db_instance_arn: cdktf.stringToTerraform(struct!.rdsDbInstanceArn),
    rds_db_proxy_arn: cdktf.stringToTerraform(struct!.rdsDbProxyArn),
    rds_endpoint: cdktf.stringToTerraform(struct!.rdsEndpoint),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function verifiedaccessEndpointRdsOptionsToHclTerraform(struct?: VerifiedaccessEndpointRdsOptionsOutputReference | VerifiedaccessEndpointRdsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_db_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.rdsDbClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_db_instance_arn: {
      value: cdktf.stringToHclTerraform(struct!.rdsDbInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_db_proxy_arn: {
      value: cdktf.stringToHclTerraform(struct!.rdsDbProxyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.rdsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointRdsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessEndpointRdsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rdsDbClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsDbClusterArn = this._rdsDbClusterArn;
    }
    if (this._rdsDbInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsDbInstanceArn = this._rdsDbInstanceArn;
    }
    if (this._rdsDbProxyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsDbProxyArn = this._rdsDbProxyArn;
    }
    if (this._rdsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsEndpoint = this._rdsEndpoint;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointRdsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._protocol = undefined;
      this._rdsDbClusterArn = undefined;
      this._rdsDbInstanceArn = undefined;
      this._rdsDbProxyArn = undefined;
      this._rdsEndpoint = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._protocol = value.protocol;
      this._rdsDbClusterArn = value.rdsDbClusterArn;
      this._rdsDbInstanceArn = value.rdsDbInstanceArn;
      this._rdsDbProxyArn = value.rdsDbProxyArn;
      this._rdsEndpoint = value.rdsEndpoint;
      this._subnetIds = value.subnetIds;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
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

  // rds_db_cluster_arn - computed: false, optional: true, required: false
  private _rdsDbClusterArn?: string; 
  public get rdsDbClusterArn() {
    return this.getStringAttribute('rds_db_cluster_arn');
  }
  public set rdsDbClusterArn(value: string) {
    this._rdsDbClusterArn = value;
  }
  public resetRdsDbClusterArn() {
    this._rdsDbClusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsDbClusterArnInput() {
    return this._rdsDbClusterArn;
  }

  // rds_db_instance_arn - computed: false, optional: true, required: false
  private _rdsDbInstanceArn?: string; 
  public get rdsDbInstanceArn() {
    return this.getStringAttribute('rds_db_instance_arn');
  }
  public set rdsDbInstanceArn(value: string) {
    this._rdsDbInstanceArn = value;
  }
  public resetRdsDbInstanceArn() {
    this._rdsDbInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsDbInstanceArnInput() {
    return this._rdsDbInstanceArn;
  }

  // rds_db_proxy_arn - computed: false, optional: true, required: false
  private _rdsDbProxyArn?: string; 
  public get rdsDbProxyArn() {
    return this.getStringAttribute('rds_db_proxy_arn');
  }
  public set rdsDbProxyArn(value: string) {
    this._rdsDbProxyArn = value;
  }
  public resetRdsDbProxyArn() {
    this._rdsDbProxyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsDbProxyArnInput() {
    return this._rdsDbProxyArn;
  }

  // rds_endpoint - computed: false, optional: true, required: false
  private _rdsEndpoint?: string; 
  public get rdsEndpoint() {
    return this.getStringAttribute('rds_endpoint');
  }
  public set rdsEndpoint(value: string) {
    this._rdsEndpoint = value;
  }
  public resetRdsEndpoint() {
    this._rdsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsEndpointInput() {
    return this._rdsEndpoint;
  }

  // subnet_ids - computed: false, optional: true, required: false
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
}
export interface VerifiedaccessEndpointSseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function verifiedaccessEndpointSseSpecificationToTerraform(struct?: VerifiedaccessEndpointSseSpecificationOutputReference | VerifiedaccessEndpointSseSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_managed_key_enabled: cdktf.booleanToTerraform(struct!.customerManagedKeyEnabled),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function verifiedaccessEndpointSseSpecificationToHclTerraform(struct?: VerifiedaccessEndpointSseSpecificationOutputReference | VerifiedaccessEndpointSseSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_managed_key_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customerManagedKeyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointSseSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessEndpointSseSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedKeyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedKeyEnabled = this._customerManagedKeyEnabled;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointSseSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerManagedKeyEnabled = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerManagedKeyEnabled = value.customerManagedKeyEnabled;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // customer_managed_key_enabled - computed: false, optional: true, required: false
  private _customerManagedKeyEnabled?: boolean | cdktf.IResolvable; 
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }
  public set customerManagedKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._customerManagedKeyEnabled = value;
  }
  public resetCustomerManagedKeyEnabled() {
    this._customerManagedKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyEnabledInput() {
    return this._customerManagedKeyEnabled;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface VerifiedaccessEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}
  */
  readonly update?: string;
}

export function verifiedaccessEndpointTimeoutsToTerraform(struct?: VerifiedaccessEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function verifiedaccessEndpointTimeoutsToHclTerraform(struct?: VerifiedaccessEndpointTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedaccessEndpointTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint aws_verifiedaccess_endpoint}
*/
export class VerifiedaccessEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedaccess_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedaccessEndpoint to import
  * @param importFromId The id of the existing VerifiedaccessEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedaccessEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedaccess_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/verifiedaccess_endpoint aws_verifiedaccess_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedaccessEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedaccessEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedaccess_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
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
    this._applicationDomain = config.applicationDomain;
    this._attachmentType = config.attachmentType;
    this._description = config.description;
    this._domainCertificateArn = config.domainCertificateArn;
    this._endpointDomainPrefix = config.endpointDomainPrefix;
    this._endpointType = config.endpointType;
    this._id = config.id;
    this._policyDocument = config.policyDocument;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._verifiedAccessGroupId = config.verifiedAccessGroupId;
    this._cidrOptions.internalValue = config.cidrOptions;
    this._loadBalancerOptions.internalValue = config.loadBalancerOptions;
    this._networkInterfaceOptions.internalValue = config.networkInterfaceOptions;
    this._rdsOptions.internalValue = config.rdsOptions;
    this._sseSpecification.internalValue = config.sseSpecification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_domain - computed: false, optional: true, required: false
  private _applicationDomain?: string; 
  public get applicationDomain() {
    return this.getStringAttribute('application_domain');
  }
  public set applicationDomain(value: string) {
    this._applicationDomain = value;
  }
  public resetApplicationDomain() {
    this._applicationDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDomainInput() {
    return this._applicationDomain;
  }

  // attachment_type - computed: false, optional: false, required: true
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
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

  // device_validation_domain - computed: true, optional: false, required: false
  public get deviceValidationDomain() {
    return this.getStringAttribute('device_validation_domain');
  }

  // domain_certificate_arn - computed: false, optional: true, required: false
  private _domainCertificateArn?: string; 
  public get domainCertificateArn() {
    return this.getStringAttribute('domain_certificate_arn');
  }
  public set domainCertificateArn(value: string) {
    this._domainCertificateArn = value;
  }
  public resetDomainCertificateArn() {
    this._domainCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCertificateArnInput() {
    return this._domainCertificateArn;
  }

  // endpoint_domain - computed: true, optional: false, required: false
  public get endpointDomain() {
    return this.getStringAttribute('endpoint_domain');
  }

  // endpoint_domain_prefix - computed: false, optional: true, required: false
  private _endpointDomainPrefix?: string; 
  public get endpointDomainPrefix() {
    return this.getStringAttribute('endpoint_domain_prefix');
  }
  public set endpointDomainPrefix(value: string) {
    this._endpointDomainPrefix = value;
  }
  public resetEndpointDomainPrefix() {
    this._endpointDomainPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDomainPrefixInput() {
    return this._endpointDomainPrefix;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
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

  // policy_document - computed: false, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
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

  // verified_access_group_id - computed: false, optional: false, required: true
  private _verifiedAccessGroupId?: string; 
  public get verifiedAccessGroupId() {
    return this.getStringAttribute('verified_access_group_id');
  }
  public set verifiedAccessGroupId(value: string) {
    this._verifiedAccessGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedAccessGroupIdInput() {
    return this._verifiedAccessGroupId;
  }

  // verified_access_instance_id - computed: true, optional: false, required: false
  public get verifiedAccessInstanceId() {
    return this.getStringAttribute('verified_access_instance_id');
  }

  // cidr_options - computed: false, optional: true, required: false
  private _cidrOptions = new VerifiedaccessEndpointCidrOptionsOutputReference(this, "cidr_options");
  public get cidrOptions() {
    return this._cidrOptions;
  }
  public putCidrOptions(value: VerifiedaccessEndpointCidrOptions) {
    this._cidrOptions.internalValue = value;
  }
  public resetCidrOptions() {
    this._cidrOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrOptionsInput() {
    return this._cidrOptions.internalValue;
  }

  // load_balancer_options - computed: false, optional: true, required: false
  private _loadBalancerOptions = new VerifiedaccessEndpointLoadBalancerOptionsOutputReference(this, "load_balancer_options");
  public get loadBalancerOptions() {
    return this._loadBalancerOptions;
  }
  public putLoadBalancerOptions(value: VerifiedaccessEndpointLoadBalancerOptions) {
    this._loadBalancerOptions.internalValue = value;
  }
  public resetLoadBalancerOptions() {
    this._loadBalancerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerOptionsInput() {
    return this._loadBalancerOptions.internalValue;
  }

  // network_interface_options - computed: false, optional: true, required: false
  private _networkInterfaceOptions = new VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference(this, "network_interface_options");
  public get networkInterfaceOptions() {
    return this._networkInterfaceOptions;
  }
  public putNetworkInterfaceOptions(value: VerifiedaccessEndpointNetworkInterfaceOptions) {
    this._networkInterfaceOptions.internalValue = value;
  }
  public resetNetworkInterfaceOptions() {
    this._networkInterfaceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceOptionsInput() {
    return this._networkInterfaceOptions.internalValue;
  }

  // rds_options - computed: false, optional: true, required: false
  private _rdsOptions = new VerifiedaccessEndpointRdsOptionsOutputReference(this, "rds_options");
  public get rdsOptions() {
    return this._rdsOptions;
  }
  public putRdsOptions(value: VerifiedaccessEndpointRdsOptions) {
    this._rdsOptions.internalValue = value;
  }
  public resetRdsOptions() {
    this._rdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsOptionsInput() {
    return this._rdsOptions.internalValue;
  }

  // sse_specification - computed: false, optional: true, required: false
  private _sseSpecification = new VerifiedaccessEndpointSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }
  public putSseSpecification(value: VerifiedaccessEndpointSseSpecification) {
    this._sseSpecification.internalValue = value;
  }
  public resetSseSpecification() {
    this._sseSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseSpecificationInput() {
    return this._sseSpecification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VerifiedaccessEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VerifiedaccessEndpointTimeouts) {
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
      application_domain: cdktf.stringToTerraform(this._applicationDomain),
      attachment_type: cdktf.stringToTerraform(this._attachmentType),
      description: cdktf.stringToTerraform(this._description),
      domain_certificate_arn: cdktf.stringToTerraform(this._domainCertificateArn),
      endpoint_domain_prefix: cdktf.stringToTerraform(this._endpointDomainPrefix),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      id: cdktf.stringToTerraform(this._id),
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      region: cdktf.stringToTerraform(this._region),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      verified_access_group_id: cdktf.stringToTerraform(this._verifiedAccessGroupId),
      cidr_options: verifiedaccessEndpointCidrOptionsToTerraform(this._cidrOptions.internalValue),
      load_balancer_options: verifiedaccessEndpointLoadBalancerOptionsToTerraform(this._loadBalancerOptions.internalValue),
      network_interface_options: verifiedaccessEndpointNetworkInterfaceOptionsToTerraform(this._networkInterfaceOptions.internalValue),
      rds_options: verifiedaccessEndpointRdsOptionsToTerraform(this._rdsOptions.internalValue),
      sse_specification: verifiedaccessEndpointSseSpecificationToTerraform(this._sseSpecification.internalValue),
      timeouts: verifiedaccessEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_domain: {
        value: cdktf.stringToHclTerraform(this._applicationDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment_type: {
        value: cdktf.stringToHclTerraform(this._attachmentType),
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
      domain_certificate_arn: {
        value: cdktf.stringToHclTerraform(this._domainCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_domain_prefix: {
        value: cdktf.stringToHclTerraform(this._endpointDomainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_document: {
        value: cdktf.stringToHclTerraform(this._policyDocument),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      verified_access_group_id: {
        value: cdktf.stringToHclTerraform(this._verifiedAccessGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_options: {
        value: verifiedaccessEndpointCidrOptionsToHclTerraform(this._cidrOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedaccessEndpointCidrOptionsList",
      },
      load_balancer_options: {
        value: verifiedaccessEndpointLoadBalancerOptionsToHclTerraform(this._loadBalancerOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedaccessEndpointLoadBalancerOptionsList",
      },
      network_interface_options: {
        value: verifiedaccessEndpointNetworkInterfaceOptionsToHclTerraform(this._networkInterfaceOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedaccessEndpointNetworkInterfaceOptionsList",
      },
      rds_options: {
        value: verifiedaccessEndpointRdsOptionsToHclTerraform(this._rdsOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedaccessEndpointRdsOptionsList",
      },
      sse_specification: {
        value: verifiedaccessEndpointSseSpecificationToHclTerraform(this._sseSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedaccessEndpointSseSpecificationList",
      },
      timeouts: {
        value: verifiedaccessEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifiedaccessEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
