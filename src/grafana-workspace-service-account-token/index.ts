/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaWorkspaceServiceAccountTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}
  */
  readonly secondsToLive: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token}
*/
export class GrafanaWorkspaceServiceAccountToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_grafana_workspace_service_account_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrafanaWorkspaceServiceAccountToken to import
  * @param importFromId The id of the existing GrafanaWorkspaceServiceAccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrafanaWorkspaceServiceAccountToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_grafana_workspace_service_account_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaWorkspaceServiceAccountTokenConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaWorkspaceServiceAccountTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_grafana_workspace_service_account_token',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.1',
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
    this._name = config.name;
    this._secondsToLive = config.secondsToLive;
    this._serviceAccountId = config.serviceAccountId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // seconds_to_live - computed: false, optional: false, required: true
  private _secondsToLive?: number; 
  public get secondsToLive() {
    return this.getNumberAttribute('seconds_to_live');
  }
  public set secondsToLive(value: number) {
    this._secondsToLive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsToLiveInput() {
    return this._secondsToLive;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // service_account_token_id - computed: true, optional: false, required: false
  public get serviceAccountTokenId() {
    return this.getStringAttribute('service_account_token_id');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      seconds_to_live: cdktf.numberToTerraform(this._secondsToLive),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seconds_to_live: {
        value: cdktf.numberToHclTerraform(this._secondsToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
