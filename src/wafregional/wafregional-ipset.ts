// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF Regional
*/
export interface WafregionalIpsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#name WafregionalIpset#name}
  */
  readonly name: string;
  /**
  * ip_set_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#ip_set_descriptor WafregionalIpset#ip_set_descriptor}
  */
  readonly ipSetDescriptor?: WafregionalIpsetIpSetDescriptor[];
}
export interface WafregionalIpsetIpSetDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#type WafregionalIpset#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#value WafregionalIpset#value}
  */
  readonly value: string;
}

export function wafregionalIpsetIpSetDescriptorToTerraform(struct?: WafregionalIpsetIpSetDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset}
*/
export class WafregionalIpset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafregional_ipset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalIpsetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalIpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_ipset',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._ipSetDescriptor = config.ipSetDescriptor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ip_set_descriptor - computed: false, optional: true, required: false
  private _ipSetDescriptor?: WafregionalIpsetIpSetDescriptor[]; 
  public get ipSetDescriptor() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_set_descriptor') as any;
  }
  public set ipSetDescriptor(value: WafregionalIpsetIpSetDescriptor[]) {
    this._ipSetDescriptor = value;
  }
  public resetIpSetDescriptor() {
    this._ipSetDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetDescriptorInput() {
    return this._ipSetDescriptor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ip_set_descriptor: cdktf.listMapper(wafregionalIpsetIpSetDescriptorToTerraform)(this._ipSetDescriptor),
    };
  }
}
