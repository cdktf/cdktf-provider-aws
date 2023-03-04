// https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServerlessapplicationrepositoryApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}
  */
  readonly semanticVersion?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application}
*/
export class DataAwsServerlessapplicationrepositoryApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_serverlessapplicationrepository_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServerlessapplicationrepositoryApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsServerlessapplicationrepositoryApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_serverlessapplicationrepository_application',
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
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._semanticVersion = config.semanticVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required_capabilities - computed: true, optional: false, required: false
  public get requiredCapabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('required_capabilities'));
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
    return this._semanticVersion;
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
      id: cdktf.stringToTerraform(this._id),
      semantic_version: cdktf.stringToTerraform(this._semanticVersion),
    };
  }
}
