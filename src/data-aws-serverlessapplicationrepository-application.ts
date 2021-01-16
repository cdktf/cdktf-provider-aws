// https://www.terraform.io/docs/providers/aws/r/data_aws_serverlessapplicationrepository_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsServerlessapplicationrepositoryApplicationConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly semanticVersion?: string;
}

// Resource

export class DataAwsServerlessapplicationrepositoryApplication extends TerraformDataSource {

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
    return this._applicationId;
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // required_capabilities - computed: true, optional: false, required: true
  public get requiredCapabilities() {
    return this.getListAttribute('required_capabilities');
  }

  // semantic_version - computed: true, optional: true, required: false
  private _semanticVersion?: string;
  public get semanticVersion() {
    return this._semanticVersion ?? this.getStringAttribute('semantic_version');
  }
  public set semanticVersion(value: string | undefined) {
    this._semanticVersion = value;
  }

  // source_code_url - computed: true, optional: false, required: true
  public get sourceCodeUrl() {
    return this.getStringAttribute('source_code_url');
  }

  // template_url - computed: true, optional: false, required: true
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      semantic_version: this._semanticVersion,
    };
  }
}
