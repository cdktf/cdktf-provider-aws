// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Prometheus
*/
export namespace Prometheus {
  export interface PrometheusAlertManagerDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html#definition PrometheusAlertManagerDefinition#definition}
    */
    readonly definition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html#workspace_id PrometheusAlertManagerDefinition#workspace_id}
    */
    readonly workspaceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html aws_prometheus_alert_manager_definition}
  */
  export class PrometheusAlertManagerDefinition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_prometheus_alert_manager_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html aws_prometheus_alert_manager_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusAlertManagerDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: PrometheusAlertManagerDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_prometheus_alert_manager_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._definition = config.definition;
      this._workspaceId = config.workspaceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // definition - computed: false, optional: false, required: true
    private _definition?: string; 
    public get definition() {
      return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
      this._definition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
      return this._definition
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._workspaceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        definition: cdktf.stringToTerraform(this._definition),
        workspace_id: cdktf.stringToTerraform(this._workspaceId),
      };
    }
  }
  export interface PrometheusRuleGroupNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html#data PrometheusRuleGroupNamespace#data}
    */
    readonly data: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html#name PrometheusRuleGroupNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html#workspace_id PrometheusRuleGroupNamespace#workspace_id}
    */
    readonly workspaceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html aws_prometheus_rule_group_namespace}
  */
  export class PrometheusRuleGroupNamespace extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_prometheus_rule_group_namespace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html aws_prometheus_rule_group_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusRuleGroupNamespaceConfig
    */
    public constructor(scope: Construct, id: string, config: PrometheusRuleGroupNamespaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_prometheus_rule_group_namespace',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._data = config.data;
      this._name = config.name;
      this._workspaceId = config.workspaceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data - computed: false, optional: false, required: true
    private _data?: string; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string) {
      this._data = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
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
      return this._name
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
      return this._workspaceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        data: cdktf.stringToTerraform(this._data),
        name: cdktf.stringToTerraform(this._name),
        workspace_id: cdktf.stringToTerraform(this._workspaceId),
      };
    }
  }
  export interface PrometheusWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html#alias PrometheusWorkspace#alias}
    */
    readonly alias?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html aws_prometheus_workspace}
  */
  export class PrometheusWorkspace extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_prometheus_workspace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html aws_prometheus_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusWorkspaceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: PrometheusWorkspaceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_prometheus_workspace',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._alias = config.alias;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: false, optional: true, required: false
    private _alias?: string | undefined; 
    public get alias() {
      return this.getStringAttribute('alias');
    }
    public set alias(value: string | undefined) {
      this._alias = value;
    }
    public resetAlias() {
      this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
      return this._alias
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // prometheus_endpoint - computed: true, optional: false, required: false
    public get prometheusEndpoint() {
      return this.getStringAttribute('prometheus_endpoint');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        alias: cdktf.stringToTerraform(this._alias),
      };
    }
  }
}
