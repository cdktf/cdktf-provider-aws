// https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailInstancePublicPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}
  */
  readonly instanceName: string;
  /**
  * port_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}
  */
  readonly portInfo: LightsailInstancePublicPortsPortInfo[] | cdktf.IResolvable;
}
export interface LightsailInstancePublicPortsPortInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}
  */
  readonly cidrListAliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}
  */
  readonly ipv6Cidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports aws_lightsail_instance_public_ports}
*/
export class LightsailInstancePublicPorts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_instance_public_ports";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports aws_lightsail_instance_public_ports} Resource
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
    this._id = config.id;
    this._instanceName = config.instanceName;
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
      port_info: cdktf.listMapper(lightsailInstancePublicPortsPortInfoToTerraform, true)(this._portInfo.internalValue),
    };
  }
}
