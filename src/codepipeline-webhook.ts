// https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodepipelineWebhookConfig extends cdktf.TerraformMetaArguments {
  readonly authentication: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly targetAction: string;
  readonly targetPipeline: string;
  /** authentication_configuration block */
  readonly authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration[];
  /** filter block */
  readonly filter: CodepipelineWebhookFilter[];
}
export interface CodepipelineWebhookAuthenticationConfiguration {
  readonly allowedIpRange?: string;
  readonly secretToken?: string;
}

function codepipelineWebhookAuthenticationConfigurationToTerraform(struct?: CodepipelineWebhookAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_ip_range: cdktf.stringToTerraform(struct!.allowedIpRange),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}

export interface CodepipelineWebhookFilter {
  readonly jsonPath: string;
  readonly matchEquals: string;
}

function codepipelineWebhookFilterToTerraform(struct?: CodepipelineWebhookFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    match_equals: cdktf.stringToTerraform(struct!.matchEquals),
  }
}


// Resource

export class CodepipelineWebhook extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodepipelineWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codepipeline_webhook',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authentication = config.authentication;
    this._name = config.name;
    this._tags = config.tags;
    this._targetAction = config.targetAction;
    this._targetPipeline = config.targetPipeline;
    this._authenticationConfiguration = config.authenticationConfiguration;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: false, required: true
  private _authentication: string;
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_action - computed: false, optional: false, required: true
  private _targetAction: string;
  public get targetAction() {
    return this.getStringAttribute('target_action');
  }
  public set targetAction(value: string) {
    this._targetAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetActionInput() {
    return this._targetAction
  }

  // target_pipeline - computed: false, optional: false, required: true
  private _targetPipeline: string;
  public get targetPipeline() {
    return this.getStringAttribute('target_pipeline');
  }
  public set targetPipeline(value: string) {
    this._targetPipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPipelineInput() {
    return this._targetPipeline
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration[];
  public get authenticationConfiguration() {
    return this.interpolationForAttribute('authentication_configuration') as any;
  }
  public set authenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration[] ) {
    this._authenticationConfiguration = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration
  }

  // filter - computed: false, optional: false, required: true
  private _filter: CodepipelineWebhookFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: CodepipelineWebhookFilter[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_action: cdktf.stringToTerraform(this._targetAction),
      target_pipeline: cdktf.stringToTerraform(this._targetPipeline),
      authentication_configuration: cdktf.listMapper(codepipelineWebhookAuthenticationConfigurationToTerraform)(this._authenticationConfiguration),
      filter: cdktf.listMapper(codepipelineWebhookFilterToTerraform)(this._filter),
    };
  }
}
