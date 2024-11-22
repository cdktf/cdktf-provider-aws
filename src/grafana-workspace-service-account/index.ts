// https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/grafana_workspace_service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaWorkspaceServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/grafana_workspace_service_account#grafana_role GrafanaWorkspaceServiceAccount#grafana_role}
  */
  readonly grafanaRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/grafana_workspace_service_account#name GrafanaWorkspaceServiceAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/grafana_workspace_service_account#workspace_id GrafanaWorkspaceServiceAccount#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/grafana_workspace_service_account aws_grafana_workspace_service_account}
*/
export class GrafanaWorkspaceServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_grafana_workspace_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrafanaWorkspaceServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrafanaWorkspaceServiceAccount to import
  * @param importFromId The id of the existing GrafanaWorkspaceServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/grafana_workspace_service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrafanaWorkspaceServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_grafana_workspace_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/grafana_workspace_service_account aws_grafana_workspace_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaWorkspaceServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaWorkspaceServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_grafana_workspace_service_account',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.77.0',
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
    this._grafanaRole = config.grafanaRole;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grafana_role - computed: false, optional: false, required: true
  private _grafanaRole?: string; 
  public get grafanaRole() {
    return this.getStringAttribute('grafana_role');
  }
  public set grafanaRole(value: string) {
    this._grafanaRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaRoleInput() {
    return this._grafanaRole;
  }

  // id - computed: true, optional: false, required: false
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

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
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
      grafana_role: cdktf.stringToTerraform(this._grafanaRole),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grafana_role: {
        value: cdktf.stringToHclTerraform(this._grafanaRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
