// https://www.terraform.io/docs/providers/aws/r/data_aws_serverlessapplicationrepository_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServerlessapplicationrepositoryApplicationConfig extends cdktf.TerraformMetaArguments {
  readonly applicationId: string;
  readonly semanticVersion?: string;
}

// Resource

export class DataAwsServerlessapplicationrepositoryApplication extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsServerlessapplicationrepositoryApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_serverlessapplicationrepository_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._semanticVersion = config.semanticVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required_capabilities - computed: true, optional: false, required: false
  public get requiredCapabilities() {
    return this.getListAttribute('required_capabilities');
  }

  // semantic_version - computed: true, optional: true, required: false
  private _semanticVersion?: string;
  public get semanticVersion() {
    return this.getStringAttribute('semantic_version');
  }
  public set semanticVersion(value: string) {
    this._semanticVersion = value;
  }
  public resetSemanticVersion() {
    this._semanticVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticVersionInput() {
    return this._semanticVersion
  }

  // source_code_url - computed: true, optional: false, required: false
  public get sourceCodeUrl() {
    return this.getStringAttribute('source_code_url');
  }

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      semantic_version: cdktf.stringToTerraform(this._semanticVersion),
    };
  }
}
