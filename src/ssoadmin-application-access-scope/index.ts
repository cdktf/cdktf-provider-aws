/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssoadmin_application_access_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminApplicationAccessScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssoadmin_application_access_scope#application_arn SsoadminApplicationAccessScope#application_arn}
  */
  readonly applicationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssoadmin_application_access_scope#authorized_targets SsoadminApplicationAccessScope#authorized_targets}
  */
  readonly authorizedTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssoadmin_application_access_scope#scope SsoadminApplicationAccessScope#scope}
  */
  readonly scope: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssoadmin_application_access_scope aws_ssoadmin_application_access_scope}
*/
export class SsoadminApplicationAccessScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_application_access_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoadminApplicationAccessScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoadminApplicationAccessScope to import
  * @param importFromId The id of the existing SsoadminApplicationAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssoadmin_application_access_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoadminApplicationAccessScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_application_access_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssoadmin_application_access_scope aws_ssoadmin_application_access_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminApplicationAccessScopeConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminApplicationAccessScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_application_access_scope',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.56.0',
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
    this._applicationArn = config.applicationArn;
    this._authorizedTargets = config.authorizedTargets;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // authorized_targets - computed: false, optional: true, required: false
  private _authorizedTargets?: string[]; 
  public get authorizedTargets() {
    return this.getListAttribute('authorized_targets');
  }
  public set authorizedTargets(value: string[]) {
    this._authorizedTargets = value;
  }
  public resetAuthorizedTargets() {
    this._authorizedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedTargetsInput() {
    return this._authorizedTargets;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_arn: cdktf.stringToTerraform(this._applicationArn),
      authorized_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedTargets),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_arn: {
        value: cdktf.stringToHclTerraform(this._applicationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedTargets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
