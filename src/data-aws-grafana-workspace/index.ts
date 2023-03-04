// https://www.terraform.io/docs/providers/aws/d/grafana_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsGrafanaWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#id DataAwsGrafanaWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace aws_grafana_workspace}
*/
export class DataAwsGrafanaWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_grafana_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace aws_grafana_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGrafanaWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsGrafanaWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_grafana_workspace',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._tags = config.tags;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_access_type - computed: true, optional: false, required: false
  public get accountAccessType() {
    return this.getStringAttribute('account_access_type');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_providers - computed: true, optional: false, required: false
  public get authenticationProviders() {
    return this.getListAttribute('authentication_providers');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // data_sources - computed: true, optional: false, required: false
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // grafana_version - computed: true, optional: false, required: false
  public get grafanaVersion() {
    return this.getStringAttribute('grafana_version');
  }

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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_destinations - computed: true, optional: false, required: false
  public get notificationDestinations() {
    return this.getListAttribute('notification_destinations');
  }

  // organization_role_name - computed: true, optional: false, required: false
  public get organizationRoleName() {
    return this.getStringAttribute('organization_role_name');
  }

  // organizational_units - computed: true, optional: false, required: false
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }

  // permission_type - computed: true, optional: false, required: false
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // saml_configuration_status - computed: true, optional: false, required: false
  public get samlConfigurationStatus() {
    return this.getStringAttribute('saml_configuration_status');
  }

  // stack_set_name - computed: true, optional: false, required: false
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
