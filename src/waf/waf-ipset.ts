// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF
*/
export interface WafIpsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset#name WafIpset#name}
  */
  readonly name: string;
  /**
  * ip_set_descriptors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset#ip_set_descriptors WafIpset#ip_set_descriptors}
  */
  readonly ipSetDescriptors?: WafIpsetIpSetDescriptors[] | cdktf.IResolvable;
}
export interface WafIpsetIpSetDescriptors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset#type WafIpset#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset#value WafIpset#value}
  */
  readonly value: string;
}

export function wafIpsetIpSetDescriptorsToTerraform(struct?: WafIpsetIpSetDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset aws_waf_ipset}
*/
export class WafIpset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_waf_ipset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset aws_waf_ipset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafIpsetConfig
  */
  public constructor(scope: Construct, id: string, config: WafIpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_ipset',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._ipSetDescriptors = config.ipSetDescriptors;
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

  // ip_set_descriptors - computed: false, optional: true, required: false
  private _ipSetDescriptors?: WafIpsetIpSetDescriptors[] | cdktf.IResolvable; 
  public get ipSetDescriptors() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('ip_set_descriptors')));
  }
  public set ipSetDescriptors(value: WafIpsetIpSetDescriptors[] | cdktf.IResolvable) {
    this._ipSetDescriptors = value;
  }
  public resetIpSetDescriptors() {
    this._ipSetDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetDescriptorsInput() {
    return this._ipSetDescriptors;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ip_set_descriptors: cdktf.listMapper(wafIpsetIpSetDescriptorsToTerraform)(this._ipSetDescriptors),
    };
  }
}
