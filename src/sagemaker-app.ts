// https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#app_name SagemakerApp#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#app_type SagemakerApp#app_type}
  */
  readonly appType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#domain_id SagemakerApp#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#tags SagemakerApp#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#tags_all SagemakerApp#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#user_profile_name SagemakerApp#user_profile_name}
  */
  readonly userProfileName: string;
  /**
  * resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#resource_spec SagemakerApp#resource_spec}
  */
  readonly resourceSpec?: SagemakerAppResourceSpec[];
}
export interface SagemakerAppResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#instance_type SagemakerApp#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
}

function sagemakerAppResourceSpecToTerraform(struct?: SagemakerAppResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app}
*/
export class SagemakerApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAppConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAppConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_app',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appName = config.appName;
    this._appType = config.appType;
    this._domainId = config.domainId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userProfileName = config.userProfileName;
    this._resourceSpec = config.resourceSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName: string;
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName
  }

  // app_type - computed: false, optional: false, required: true
  private _appType: string;
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId: string;
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName: string;
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName
  }

  // resource_spec - computed: false, optional: true, required: false
  private _resourceSpec?: SagemakerAppResourceSpec[];
  public get resourceSpec() {
    return this.interpolationForAttribute('resource_spec') as any;
  }
  public set resourceSpec(value: SagemakerAppResourceSpec[] ) {
    this._resourceSpec = value;
  }
  public resetResourceSpec() {
    this._resourceSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecInput() {
    return this._resourceSpec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      app_type: cdktf.stringToTerraform(this._appType),
      domain_id: cdktf.stringToTerraform(this._domainId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      user_profile_name: cdktf.stringToTerraform(this._userProfileName),
      resource_spec: cdktf.listMapper(sagemakerAppResourceSpecToTerraform)(this._resourceSpec),
    };
  }
}
