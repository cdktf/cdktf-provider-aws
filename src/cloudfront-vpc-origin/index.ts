/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontVpcOriginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#timeouts CloudfrontVpcOrigin#timeouts}
  */
  readonly timeouts?: CloudfrontVpcOriginTimeouts;
  /**
  * vpc_origin_endpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CloudfrontVpcOrigin#vpc_origin_endpoint_config}
  */
  readonly vpcOriginEndpointConfig?: CloudfrontVpcOriginVpcOriginEndpointConfig[] | cdktf.IResolvable;
}
export interface CloudfrontVpcOriginTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#create CloudfrontVpcOrigin#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#delete CloudfrontVpcOrigin#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#update CloudfrontVpcOrigin#update}
  */
  readonly update?: string;
}

export function cloudfrontVpcOriginTimeoutsToTerraform(struct?: CloudfrontVpcOriginTimeouts | cdktf.IResolvable): any {
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


export function cloudfrontVpcOriginTimeoutsToHclTerraform(struct?: CloudfrontVpcOriginTimeouts | cdktf.IResolvable): any {
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

export class CloudfrontVpcOriginTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontVpcOriginTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontVpcOriginTimeouts | cdktf.IResolvable | undefined) {
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
export interface CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}
  */
  readonly items: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}
  */
  readonly quantity: number;
}

export function cloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsToTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}


export function cloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsToHclTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
      this._quantity = value.quantity;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference {
    return new CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontVpcOriginVpcOriginEndpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * origin_ssl_protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CloudfrontVpcOrigin#origin_ssl_protocols}
  */
  readonly originSslProtocols?: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[] | cdktf.IResolvable;
}

export function cloudfrontVpcOriginVpcOriginEndpointConfigToTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    name: cdktf.stringToTerraform(struct!.name),
    origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
    origin_ssl_protocols: cdktf.listMapper(cloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsToTerraform, true)(struct!.originSslProtocols),
  }
}


export function cloudfrontVpcOriginVpcOriginEndpointConfigToHclTerraform(struct?: CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_protocol_policy: {
      value: cdktf.stringToHclTerraform(struct!.originProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_ssl_protocols: {
      value: cdktf.listMapperHcl(cloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsToHclTerraform, true)(struct!.originSslProtocols),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._originProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.originProtocolPolicy = this._originProtocolPolicy;
    }
    if (this._originSslProtocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originSslProtocols = this._originSslProtocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontVpcOriginVpcOriginEndpointConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._name = undefined;
      this._originProtocolPolicy = undefined;
      this._originSslProtocols.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._name = value.name;
      this._originProtocolPolicy = value.originProtocolPolicy;
      this._originSslProtocols.internalValue = value.originSslProtocols;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // http_port - computed: false, optional: false, required: true
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: false, required: true
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // origin_protocol_policy - computed: false, optional: false, required: true
  private _originProtocolPolicy?: string; 
  public get originProtocolPolicy() {
    return this.getStringAttribute('origin_protocol_policy');
  }
  public set originProtocolPolicy(value: string) {
    this._originProtocolPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolPolicyInput() {
    return this._originProtocolPolicy;
  }

  // origin_ssl_protocols - computed: false, optional: true, required: false
  private _originSslProtocols = new CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList(this, "origin_ssl_protocols", false);
  public get originSslProtocols() {
    return this._originSslProtocols;
  }
  public putOriginSslProtocols(value: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[] | cdktf.IResolvable) {
    this._originSslProtocols.internalValue = value;
  }
  public resetOriginSslProtocols() {
    this._originSslProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSslProtocolsInput() {
    return this._originSslProtocols.internalValue;
  }
}

export class CloudfrontVpcOriginVpcOriginEndpointConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontVpcOriginVpcOriginEndpointConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference {
    return new CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin aws_cloudfront_vpc_origin}
*/
export class CloudfrontVpcOrigin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_vpc_origin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontVpcOrigin to import
  * @param importFromId The id of the existing CloudfrontVpcOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontVpcOrigin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_vpc_origin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin aws_cloudfront_vpc_origin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontVpcOriginConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudfrontVpcOriginConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_vpc_origin',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
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
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._vpcOriginEndpointConfig.internalValue = config.vpcOriginEndpointConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudfrontVpcOriginTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudfrontVpcOriginTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_origin_endpoint_config - computed: false, optional: true, required: false
  private _vpcOriginEndpointConfig = new CloudfrontVpcOriginVpcOriginEndpointConfigList(this, "vpc_origin_endpoint_config", false);
  public get vpcOriginEndpointConfig() {
    return this._vpcOriginEndpointConfig;
  }
  public putVpcOriginEndpointConfig(value: CloudfrontVpcOriginVpcOriginEndpointConfig[] | cdktf.IResolvable) {
    this._vpcOriginEndpointConfig.internalValue = value;
  }
  public resetVpcOriginEndpointConfig() {
    this._vpcOriginEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOriginEndpointConfigInput() {
    return this._vpcOriginEndpointConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: cloudfrontVpcOriginTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_origin_endpoint_config: cdktf.listMapper(cloudfrontVpcOriginVpcOriginEndpointConfigToTerraform, true)(this._vpcOriginEndpointConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: cloudfrontVpcOriginTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontVpcOriginTimeouts",
      },
      vpc_origin_endpoint_config: {
        value: cdktf.listMapperHcl(cloudfrontVpcOriginVpcOriginEndpointConfigToHclTerraform, true)(this._vpcOriginEndpointConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontVpcOriginVpcOriginEndpointConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
