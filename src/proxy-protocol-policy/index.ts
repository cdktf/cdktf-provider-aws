// https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/proxy_protocol_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyProtocolPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/proxy_protocol_policy#id ProxyProtocolPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/proxy_protocol_policy#instance_ports ProxyProtocolPolicy#instance_ports}
  */
  readonly instancePorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/proxy_protocol_policy#load_balancer ProxyProtocolPolicy#load_balancer}
  */
  readonly loadBalancer: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/proxy_protocol_policy aws_proxy_protocol_policy}
*/
export class ProxyProtocolPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_proxy_protocol_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyProtocolPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyProtocolPolicy to import
  * @param importFromId The id of the existing ProxyProtocolPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/proxy_protocol_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyProtocolPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_proxy_protocol_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/proxy_protocol_policy aws_proxy_protocol_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyProtocolPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyProtocolPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_proxy_protocol_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.97.0',
        providerVersionConstraint: '~> 5.0'
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
    this._instancePorts = config.instancePorts;
    this._loadBalancer = config.loadBalancer;
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

  // instance_ports - computed: false, optional: false, required: true
  private _instancePorts?: string[]; 
  public get instancePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ports'));
  }
  public set instancePorts(value: string[]) {
    this._instancePorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePortsInput() {
    return this._instancePorts;
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer?: string; 
  public get loadBalancer() {
    return this.getStringAttribute('load_balancer');
  }
  public set loadBalancer(value: string) {
    this._loadBalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instancePorts),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
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
      instance_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instancePorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      load_balancer: {
        value: cdktf.stringToHclTerraform(this._loadBalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
