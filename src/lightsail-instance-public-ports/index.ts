/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailInstancePublicPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}
  */
  readonly instanceName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#region LightsailInstancePublicPorts#region}
  */
  readonly region?: string;
  /**
  * port_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}
  */
  readonly portInfo: LightsailInstancePublicPortsPortInfo[] | cdktf.IResolvable;
}
export interface LightsailInstancePublicPortsPortInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}
  */
  readonly cidrListAliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}
  */
  readonly ipv6Cidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}
  */
  readonly toPort: number;
}

export function lightsailInstancePublicPortsPortInfoToTerraform(struct?: LightsailInstancePublicPortsPortInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_list_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrListAliases),
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Cidrs),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function lightsailInstancePublicPortsPortInfoToHclTerraform(struct?: LightsailInstancePublicPortsPortInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_list_aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrListAliases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class LightsailInstancePublicPortsPortInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LightsailInstancePublicPortsPortInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrListAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrListAliases = this._cidrListAliases;
    }
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._ipv6Cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Cidrs = this._ipv6Cidrs;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailInstancePublicPortsPortInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrListAliases = undefined;
      this._cidrs = undefined;
      this._fromPort = undefined;
      this._ipv6Cidrs = undefined;
      this._protocol = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrListAliases = value.cidrListAliases;
      this._cidrs = value.cidrs;
      this._fromPort = value.fromPort;
      this._ipv6Cidrs = value.ipv6Cidrs;
      this._protocol = value.protocol;
      this._toPort = value.toPort;
    }
  }

  // cidr_list_aliases - computed: true, optional: true, required: false
  private _cidrListAliases?: string[]; 
  public get cidrListAliases() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_list_aliases'));
  }
  public set cidrListAliases(value: string[]) {
    this._cidrListAliases = value;
  }
  public resetCidrListAliases() {
    this._cidrListAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrListAliasesInput() {
    return this._cidrListAliases;
  }

  // cidrs - computed: true, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
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

  // ipv6_cidrs - computed: true, optional: true, required: false
  private _ipv6Cidrs?: string[]; 
  public get ipv6Cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_cidrs'));
  }
  public set ipv6Cidrs(value: string[]) {
    this._ipv6Cidrs = value;
  }
  public resetIpv6Cidrs() {
    this._ipv6Cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrsInput() {
    return this._ipv6Cidrs;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

export class LightsailInstancePublicPortsPortInfoList extends cdktf.ComplexList {
  public internalValue? : LightsailInstancePublicPortsPortInfo[] | cdktf.IResolvable

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
  public get(index: number): LightsailInstancePublicPortsPortInfoOutputReference {
    return new LightsailInstancePublicPortsPortInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports aws_lightsail_instance_public_ports}
*/
export class LightsailInstancePublicPorts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_instance_public_ports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LightsailInstancePublicPorts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightsailInstancePublicPorts to import
  * @param importFromId The id of the existing LightsailInstancePublicPorts that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightsailInstancePublicPorts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lightsail_instance_public_ports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/lightsail_instance_public_ports aws_lightsail_instance_public_ports} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailInstancePublicPortsConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailInstancePublicPortsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_instance_public_ports',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.7.0',
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
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._region = config.region;
    this._portInfo.internalValue = config.portInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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

  // port_info - computed: false, optional: false, required: true
  private _portInfo = new LightsailInstancePublicPortsPortInfoList(this, "port_info", true);
  public get portInfo() {
    return this._portInfo;
  }
  public putPortInfo(value: LightsailInstancePublicPortsPortInfo[] | cdktf.IResolvable) {
    this._portInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInfoInput() {
    return this._portInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      region: cdktf.stringToTerraform(this._region),
      port_info: cdktf.listMapper(lightsailInstancePublicPortsPortInfoToTerraform, true)(this._portInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
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
      port_info: {
        value: cdktf.listMapperHcl(lightsailInstancePublicPortsPortInfoToHclTerraform, true)(this._portInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LightsailInstancePublicPortsPortInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
