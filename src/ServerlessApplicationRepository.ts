// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Serverless Application Repository
*/
export namespace ServerlessApplicationRepository {
  export interface ServerlessapplicationrepositoryCloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}
    */
    readonly capabilities: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#name ServerlessapplicationrepositoryCloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}
    */
    readonly semanticVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#tags ServerlessapplicationrepositoryCloudformationStack#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}
    */
    readonly timeouts?: ServerlessapplicationrepositoryCloudformationStackTimeouts;
  }
  export interface ServerlessapplicationrepositoryCloudformationStackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#create ServerlessapplicationrepositoryCloudformationStack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#delete ServerlessapplicationrepositoryCloudformationStack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#update ServerlessapplicationrepositoryCloudformationStack#update}
    */
    readonly update?: string;
  }

  function serverlessapplicationrepositoryCloudformationStackTimeoutsToTerraform(struct?: ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference | ServerlessapplicationrepositoryCloudformationStackTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack}
  */
  export class ServerlessapplicationrepositoryCloudformationStack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_serverlessapplicationrepository_cloudformation_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServerlessapplicationrepositoryCloudformationStackConfig
    */
    public constructor(scope: Construct, id: string, config: ServerlessapplicationrepositoryCloudformationStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_serverlessapplicationrepository_cloudformation_stack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._capabilities = config.capabilities;
      this._name = config.name;
      this._parameters = config.parameters;
      this._semanticVersion = config.semanticVersion;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
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
      return this._applicationId
    }

    // capabilities - computed: false, optional: false, required: true
    private _capabilities?: string[]; 
    public get capabilities() {
      return this.getListAttribute('capabilities');
    }
    public set capabilities(value: string[]) {
      this._capabilities = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
      return this._capabilities
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

    // outputs - computed: true, optional: false, required: false
    public outputs(key: string): string {
      return new cdktf.StringMap(this, 'outputs').lookup(key);
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // semantic_version - computed: true, optional: true, required: false
    private _semanticVersion?: string | undefined; 
    public get semanticVersion() {
      return this.getStringAttribute('semantic_version');
    }
    public set semanticVersion(value: string | undefined) {
      this._semanticVersion = value;
    }
    public resetSemanticVersion() {
      this._semanticVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get semanticVersionInput() {
      return this._semanticVersion
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ServerlessapplicationrepositoryCloudformationStackTimeouts | undefined; 
    private __timeoutsOutput = new ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ServerlessapplicationrepositoryCloudformationStackTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
        name: cdktf.stringToTerraform(this._name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        semantic_version: cdktf.stringToTerraform(this._semanticVersion),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: serverlessapplicationrepositoryCloudformationStackTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsServerlessapplicationrepositoryApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}
    */
    readonly semanticVersion?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html aws_serverlessapplicationrepository_application}
  */
  export class DataAwsServerlessapplicationrepositoryApplication extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_serverlessapplicationrepository_application";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html aws_serverlessapplicationrepository_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServerlessapplicationrepositoryApplicationConfig
    */
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
    private _applicationId?: string; 
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
    private _semanticVersion?: string | undefined; 
    public get semanticVersion() {
      return this.getStringAttribute('semantic_version');
    }
    public set semanticVersion(value: string | undefined) {
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
}
