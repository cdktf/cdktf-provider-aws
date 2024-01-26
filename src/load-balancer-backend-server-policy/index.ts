/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerBackendServerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}
  */
  readonly instancePort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}
  */
  readonly policyNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy aws_load_balancer_backend_server_policy}
*/
export class LoadBalancerBackendServerPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_load_balancer_backend_server_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerBackendServerPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerBackendServerPolicy to import
  * @param importFromId The id of the existing LoadBalancerBackendServerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerBackendServerPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_load_balancer_backend_server_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/load_balancer_backend_server_policy aws_load_balancer_backend_server_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerBackendServerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerBackendServerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_load_balancer_backend_server_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.34.0',
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
    this._instancePort = config.instancePort;
    this._loadBalancerName = config.loadBalancerName;
    this._policyNames = config.policyNames;
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

  // instance_port - computed: false, optional: false, required: true
  private _instancePort?: number; 
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }
  public set instancePort(value: number) {
    this._instancePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePortInput() {
    return this._instancePort;
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[]; 
  public get policyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_names'));
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_port: cdktf.numberToTerraform(this._instancePort),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyNames),
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
      instance_port: {
        value: cdktf.numberToHclTerraform(this._instancePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
