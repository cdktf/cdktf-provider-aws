// https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayBasePathMappingConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly basePath?: string;
  readonly domainName: string;
  readonly stageName?: string;
}

// Resource

export class ApiGatewayBasePathMapping extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayBasePathMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_base_path_mapping',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._basePath = config.basePath;
    this._domainName = config.domainName;
    this._stageName = config.stageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string;
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string ) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string;
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string ) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      base_path: cdktf.stringToTerraform(this._basePath),
      domain_name: cdktf.stringToTerraform(this._domainName),
      stage_name: cdktf.stringToTerraform(this._stageName),
    };
  }
}
