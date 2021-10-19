// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export namespace SageMaker {
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
    readonly resourceSpec?: SagemakerAppResourceSpec;
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

  function sagemakerAppResourceSpecToTerraform(struct?: SagemakerAppResourceSpecOutputReference | SagemakerAppResourceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    }
  }

  export class SagemakerAppResourceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // sagemaker_image_arn - computed: true, optional: true, required: false
    private _sagemakerImageArn?: string | undefined; 
    public get sagemakerImageArn() {
      return this.getStringAttribute('sagemaker_image_arn');
    }
    public set sagemakerImageArn(value: string | undefined) {
      this._sagemakerImageArn = value;
    }
    public resetSagemakerImageArn() {
      this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sagemakerImageArnInput() {
      return this._sagemakerImageArn
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
    private _appName?: string; 
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
    private _appType?: string; 
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
    private _domainId?: string; 
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

    // user_profile_name - computed: false, optional: false, required: true
    private _userProfileName?: string; 
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
    private _resourceSpec?: SagemakerAppResourceSpec | undefined; 
    private __resourceSpecOutput = new SagemakerAppResourceSpecOutputReference(this as any, "resource_spec", true);
    public get resourceSpec() {
      return this.__resourceSpecOutput;
    }
    public putResourceSpec(value: SagemakerAppResourceSpec | undefined) {
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
        resource_spec: sagemakerAppResourceSpecToTerraform(this._resourceSpec),
      };
    }
  }
  export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#tags SagemakerAppImageConfig#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#tags_all SagemakerAppImageConfig#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * kernel_gateway_image_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
    */
    readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
  }
  export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_gid SagemakerAppImageConfig#default_gid}
    */
    readonly defaultGid?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_uid SagemakerAppImageConfig#default_uid}
    */
    readonly defaultUid?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#mount_path SagemakerAppImageConfig#mount_path}
    */
    readonly mountPath?: string;
  }

  function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_gid: cdktf.numberToTerraform(struct!.defaultGid),
      default_uid: cdktf.numberToTerraform(struct!.defaultUid),
      mount_path: cdktf.stringToTerraform(struct!.mountPath),
    }
  }

  export class SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // default_gid - computed: false, optional: true, required: false
    private _defaultGid?: number | undefined; 
    public get defaultGid() {
      return this.getNumberAttribute('default_gid');
    }
    public set defaultGid(value: number | undefined) {
      this._defaultGid = value;
    }
    public resetDefaultGid() {
      this._defaultGid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultGidInput() {
      return this._defaultGid
    }

    // default_uid - computed: false, optional: true, required: false
    private _defaultUid?: number | undefined; 
    public get defaultUid() {
      return this.getNumberAttribute('default_uid');
    }
    public set defaultUid(value: number | undefined) {
      this._defaultUid = value;
    }
    public resetDefaultUid() {
      this._defaultUid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultUidInput() {
      return this._defaultUid
    }

    // mount_path - computed: false, optional: true, required: false
    private _mountPath?: string | undefined; 
    public get mountPath() {
      return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string | undefined) {
      this._mountPath = value;
    }
    public resetMountPath() {
      this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
      return this._mountPath
    }
  }
  export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#display_name SagemakerAppImageConfig#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#name SagemakerAppImageConfig#name}
    */
    readonly name: string;
  }

  function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      display_name: cdktf.stringToTerraform(struct!.displayName),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // display_name - computed: false, optional: true, required: false
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
      this._displayName = value;
    }
    public resetDisplayName() {
      this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
      return this._displayName
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
  }
  export interface SagemakerAppImageConfigKernelGatewayImageConfig {
    /**
    * file_system_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#file_system_config SagemakerAppImageConfig#file_system_config}
    */
    readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
    /**
    * kernel_spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_spec SagemakerAppImageConfig#kernel_spec}
    */
    readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec;
  }

  function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file_system_config: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
      kernel_spec: sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct!.kernelSpec),
    }
  }

  export class SagemakerAppImageConfigKernelGatewayImageConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file_system_config - computed: false, optional: true, required: false
    private _fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined; 
    private __fileSystemConfigOutput = new SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(this as any, "file_system_config", true);
    public get fileSystemConfig() {
      return this.__fileSystemConfigOutput;
    }
    public putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined) {
      this._fileSystemConfig = value;
    }
    public resetFileSystemConfig() {
      this._fileSystemConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemConfigInput() {
      return this._fileSystemConfig
    }

    // kernel_spec - computed: false, optional: false, required: true
    private _kernelSpec?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec; 
    private __kernelSpecOutput = new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference(this as any, "kernel_spec", true);
    public get kernelSpec() {
      return this.__kernelSpecOutput;
    }
    public putKernelSpec(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec) {
      this._kernelSpec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelSpecInput() {
      return this._kernelSpec
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config}
  */
  export class SagemakerAppImageConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_app_image_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppImageConfigConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_app_image_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appImageConfigName = config.appImageConfigName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._kernelGatewayImageConfig = config.kernelGatewayImageConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_image_config_name - computed: false, optional: false, required: true
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
      return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
      this._appImageConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
      return this._appImageConfigName
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // kernel_gateway_image_config - computed: false, optional: true, required: false
    private _kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig | undefined; 
    private __kernelGatewayImageConfigOutput = new SagemakerAppImageConfigKernelGatewayImageConfigOutputReference(this as any, "kernel_gateway_image_config", true);
    public get kernelGatewayImageConfig() {
      return this.__kernelGatewayImageConfigOutput;
    }
    public putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig | undefined) {
      this._kernelGatewayImageConfig = value;
    }
    public resetKernelGatewayImageConfig() {
      this._kernelGatewayImageConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelGatewayImageConfigInput() {
      return this._kernelGatewayImageConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_image_config_name: cdktf.stringToTerraform(this._appImageConfigName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        kernel_gateway_image_config: sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(this._kernelGatewayImageConfig),
      };
    }
  }
  export interface SagemakerCodeRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#code_repository_name SagemakerCodeRepository#code_repository_name}
    */
    readonly codeRepositoryName: string;
    /**
    * git_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#git_config SagemakerCodeRepository#git_config}
    */
    readonly gitConfig: SagemakerCodeRepositoryGitConfig;
  }
  export interface SagemakerCodeRepositoryGitConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#branch SagemakerCodeRepository#branch}
    */
    readonly branch?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#repository_url SagemakerCodeRepository#repository_url}
    */
    readonly repositoryUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#secret_arn SagemakerCodeRepository#secret_arn}
    */
    readonly secretArn?: string;
  }

  function sagemakerCodeRepositoryGitConfigToTerraform(struct?: SagemakerCodeRepositoryGitConfigOutputReference | SagemakerCodeRepositoryGitConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      branch: cdktf.stringToTerraform(struct!.branch),
      repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
      secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    }
  }

  export class SagemakerCodeRepositoryGitConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // branch - computed: false, optional: true, required: false
    private _branch?: string | undefined; 
    public get branch() {
      return this.getStringAttribute('branch');
    }
    public set branch(value: string | undefined) {
      this._branch = value;
    }
    public resetBranch() {
      this._branch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchInput() {
      return this._branch
    }

    // repository_url - computed: false, optional: false, required: true
    private _repositoryUrl?: string; 
    public get repositoryUrl() {
      return this.getStringAttribute('repository_url');
    }
    public set repositoryUrl(value: string) {
      this._repositoryUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryUrlInput() {
      return this._repositoryUrl
    }

    // secret_arn - computed: false, optional: true, required: false
    private _secretArn?: string | undefined; 
    public get secretArn() {
      return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string | undefined) {
      this._secretArn = value;
    }
    public resetSecretArn() {
      this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
      return this._secretArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository}
  */
  export class SagemakerCodeRepository extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_code_repository";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerCodeRepositoryConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_code_repository',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._codeRepositoryName = config.codeRepositoryName;
      this._gitConfig = config.gitConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // code_repository_name - computed: false, optional: false, required: true
    private _codeRepositoryName?: string; 
    public get codeRepositoryName() {
      return this.getStringAttribute('code_repository_name');
    }
    public set codeRepositoryName(value: string) {
      this._codeRepositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get codeRepositoryNameInput() {
      return this._codeRepositoryName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // git_config - computed: false, optional: false, required: true
    private _gitConfig?: SagemakerCodeRepositoryGitConfig; 
    private __gitConfigOutput = new SagemakerCodeRepositoryGitConfigOutputReference(this as any, "git_config", true);
    public get gitConfig() {
      return this.__gitConfigOutput;
    }
    public putGitConfig(value: SagemakerCodeRepositoryGitConfig) {
      this._gitConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gitConfigInput() {
      return this._gitConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        code_repository_name: cdktf.stringToTerraform(this._codeRepositoryName),
        git_config: sagemakerCodeRepositoryGitConfigToTerraform(this._gitConfig),
      };
    }
  }
  export interface SagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#description SagemakerDeviceFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#device_fleet_name SagemakerDeviceFleet#device_fleet_name}
    */
    readonly deviceFleetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}
    */
    readonly enableIotRoleAlias?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#role_arn SagemakerDeviceFleet#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#tags SagemakerDeviceFleet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#tags_all SagemakerDeviceFleet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * output_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#output_config SagemakerDeviceFleet#output_config}
    */
    readonly outputConfig: SagemakerDeviceFleetOutputConfig;
  }
  export interface SagemakerDeviceFleetOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#kms_key_id SagemakerDeviceFleet#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#s3_output_location SagemakerDeviceFleet#s3_output_location}
    */
    readonly s3OutputLocation: string;
  }

  function sagemakerDeviceFleetOutputConfigToTerraform(struct?: SagemakerDeviceFleetOutputConfigOutputReference | SagemakerDeviceFleetOutputConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      s3_output_location: cdktf.stringToTerraform(struct!.s3OutputLocation),
    }
  }

  export class SagemakerDeviceFleetOutputConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // s3_output_location - computed: false, optional: false, required: true
    private _s3OutputLocation?: string; 
    public get s3OutputLocation() {
      return this.getStringAttribute('s3_output_location');
    }
    public set s3OutputLocation(value: string) {
      this._s3OutputLocation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputLocationInput() {
      return this._s3OutputLocation
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet}
  */
  export class SagemakerDeviceFleet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_device_fleet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDeviceFleetConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerDeviceFleetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_device_fleet',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._deviceFleetName = config.deviceFleetName;
      this._enableIotRoleAlias = config.enableIotRoleAlias;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._outputConfig = config.outputConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // device_fleet_name - computed: false, optional: false, required: true
    private _deviceFleetName?: string; 
    public get deviceFleetName() {
      return this.getStringAttribute('device_fleet_name');
    }
    public set deviceFleetName(value: string) {
      this._deviceFleetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceFleetNameInput() {
      return this._deviceFleetName
    }

    // enable_iot_role_alias - computed: false, optional: true, required: false
    private _enableIotRoleAlias?: boolean | cdktf.IResolvable | undefined; 
    public get enableIotRoleAlias() {
      return this.getBooleanAttribute('enable_iot_role_alias') as any;
    }
    public set enableIotRoleAlias(value: boolean | cdktf.IResolvable | undefined) {
      this._enableIotRoleAlias = value;
    }
    public resetEnableIotRoleAlias() {
      this._enableIotRoleAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIotRoleAliasInput() {
      return this._enableIotRoleAlias
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // iot_role_alias - computed: true, optional: false, required: false
    public get iotRoleAlias() {
      return this.getStringAttribute('iot_role_alias');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

    // output_config - computed: false, optional: false, required: true
    private _outputConfig?: SagemakerDeviceFleetOutputConfig; 
    private __outputConfigOutput = new SagemakerDeviceFleetOutputConfigOutputReference(this as any, "output_config", true);
    public get outputConfig() {
      return this.__outputConfigOutput;
    }
    public putOutputConfig(value: SagemakerDeviceFleetOutputConfig) {
      this._outputConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConfigInput() {
      return this._outputConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        device_fleet_name: cdktf.stringToTerraform(this._deviceFleetName),
        enable_iot_role_alias: cdktf.booleanToTerraform(this._enableIotRoleAlias),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        output_config: sagemakerDeviceFleetOutputConfigToTerraform(this._outputConfig),
      };
    }
  }
  export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_network_access_type SagemakerDomain#app_network_access_type}
    */
    readonly appNetworkAccessType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#auth_mode SagemakerDomain#auth_mode}
    */
    readonly authMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#domain_name SagemakerDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kms_key_id SagemakerDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#subnet_ids SagemakerDomain#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags SagemakerDomain#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags_all SagemakerDomain#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#vpc_id SagemakerDomain#vpc_id}
    */
    readonly vpcId: string;
    /**
    * default_user_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_user_settings SagemakerDomain#default_user_settings}
    */
    readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
    /**
    * retention_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#retention_policy SagemakerDomain#retention_policy}
    */
    readonly retentionPolicy?: SagemakerDomainRetentionPolicy;
  }
  export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
  }

  function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    }
  }

  export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // sagemaker_image_arn - computed: false, optional: true, required: false
    private _sagemakerImageArn?: string | undefined; 
    public get sagemakerImageArn() {
      return this.getStringAttribute('sagemaker_image_arn');
    }
    public set sagemakerImageArn(value: string | undefined) {
      this._sagemakerImageArn = value;
    }
    public resetSagemakerImageArn() {
      this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sagemakerImageArnInput() {
      return this._sagemakerImageArn
    }
  }
  export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * default_resource_spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
  }

  function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lifecycleConfigArns),
      default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    }
  }

  export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lifecycle_config_arns - computed: false, optional: true, required: false
    private _lifecycleConfigArns?: string[] | undefined; 
    public get lifecycleConfigArns() {
      return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[] | undefined) {
      this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
      this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
      return this._lifecycleConfigArns
    }

    // default_resource_spec - computed: false, optional: true, required: false
    private _defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined; 
    private __defaultResourceSpecOutput = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
    public get defaultResourceSpec() {
      return this.__defaultResourceSpecOutput;
    }
    public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
      this._defaultResourceSpec = value;
    }
    public resetDefaultResourceSpec() {
      this._defaultResourceSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
      return this._defaultResourceSpec
    }
  }
  export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
  }

  function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
      image_name: cdktf.stringToTerraform(struct!.imageName),
      image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
    }
  }

  export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
  }

  function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    }
  }

  export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // sagemaker_image_arn - computed: false, optional: true, required: false
    private _sagemakerImageArn?: string | undefined; 
    public get sagemakerImageArn() {
      return this.getStringAttribute('sagemaker_image_arn');
    }
    public set sagemakerImageArn(value: string | undefined) {
      this._sagemakerImageArn = value;
    }
    public resetSagemakerImageArn() {
      this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sagemakerImageArnInput() {
      return this._sagemakerImageArn
    }
  }
  export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[];
    /**
    * default_resource_spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
  }

  function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lifecycleConfigArns),
      custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct!.customImage),
      default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    }
  }

  export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lifecycle_config_arns - computed: false, optional: true, required: false
    private _lifecycleConfigArns?: string[] | undefined; 
    public get lifecycleConfigArns() {
      return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[] | undefined) {
      this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
      this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
      return this._lifecycleConfigArns
    }

    // custom_image - computed: false, optional: true, required: false
    private _customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | undefined; 
    public get customImage() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('custom_image') as any;
    }
    public set customImage(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | undefined) {
      this._customImage = value;
    }
    public resetCustomImage() {
      this._customImage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImageInput() {
      return this._customImage
    }

    // default_resource_spec - computed: false, optional: true, required: false
    private _defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined; 
    private __defaultResourceSpecOutput = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
    public get defaultResourceSpec() {
      return this.__defaultResourceSpecOutput;
    }
    public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
      this._defaultResourceSpec = value;
    }
    public resetDefaultResourceSpec() {
      this._defaultResourceSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
      return this._defaultResourceSpec
    }
  }
  export interface SagemakerDomainDefaultUserSettingsSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#notebook_output_option SagemakerDomain#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_output_path SagemakerDomain#s3_output_path}
    */
    readonly s3OutputPath?: string;
  }

  function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
      s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
      s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    }
  }

  export class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // notebook_output_option - computed: false, optional: true, required: false
    private _notebookOutputOption?: string | undefined; 
    public get notebookOutputOption() {
      return this.getStringAttribute('notebook_output_option');
    }
    public set notebookOutputOption(value: string | undefined) {
      this._notebookOutputOption = value;
    }
    public resetNotebookOutputOption() {
      this._notebookOutputOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notebookOutputOptionInput() {
      return this._notebookOutputOption
    }

    // s3_kms_key_id - computed: false, optional: true, required: false
    private _s3KmsKeyId?: string | undefined; 
    public get s3KmsKeyId() {
      return this.getStringAttribute('s3_kms_key_id');
    }
    public set s3KmsKeyId(value: string | undefined) {
      this._s3KmsKeyId = value;
    }
    public resetS3KmsKeyId() {
      this._s3KmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KmsKeyIdInput() {
      return this._s3KmsKeyId
    }

    // s3_output_path - computed: false, optional: true, required: false
    private _s3OutputPath?: string | undefined; 
    public get s3OutputPath() {
      return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string | undefined) {
      this._s3OutputPath = value;
    }
    public resetS3OutputPath() {
      this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
      return this._s3OutputPath
    }
  }
  export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
  }

  function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    }
  }

  export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // sagemaker_image_arn - computed: false, optional: true, required: false
    private _sagemakerImageArn?: string | undefined; 
    public get sagemakerImageArn() {
      return this.getStringAttribute('sagemaker_image_arn');
    }
    public set sagemakerImageArn(value: string | undefined) {
      this._sagemakerImageArn = value;
    }
    public resetSagemakerImageArn() {
      this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sagemakerImageArnInput() {
      return this._sagemakerImageArn
    }
  }
  export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
    /**
    * default_resource_spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
  }

  function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_resource_spec: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    }
  }

  export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // default_resource_spec - computed: false, optional: true, required: false
    private _defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined; 
    private __defaultResourceSpecOutput = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
    public get defaultResourceSpec() {
      return this.__defaultResourceSpecOutput;
    }
    public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined) {
      this._defaultResourceSpec = value;
    }
    public resetDefaultResourceSpec() {
      this._defaultResourceSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
      return this._defaultResourceSpec
    }
  }
  export interface SagemakerDomainDefaultUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#execution_role SagemakerDomain#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#security_groups SagemakerDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * jupyter_server_app_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
    /**
    * sharing_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sharing_settings SagemakerDomain#sharing_settings}
    */
    readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
    /**
    * tensor_board_app_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
    */
    readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings;
  }

  function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      execution_role: cdktf.stringToTerraform(struct!.executionRole),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
      kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
      sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
      tensor_board_app_settings: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
    }
  }

  export class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // execution_role - computed: false, optional: false, required: true
    private _executionRole?: string; 
    public get executionRole() {
      return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
      this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
      return this._executionRole
    }

    // security_groups - computed: false, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // jupyter_server_app_settings - computed: false, optional: true, required: false
    private _jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined; 
    private __jupyterServerAppSettingsOutput = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this as any, "jupyter_server_app_settings", true);
    public get jupyterServerAppSettings() {
      return this.__jupyterServerAppSettingsOutput;
    }
    public putJupyterServerAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined) {
      this._jupyterServerAppSettings = value;
    }
    public resetJupyterServerAppSettings() {
      this._jupyterServerAppSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterServerAppSettingsInput() {
      return this._jupyterServerAppSettings
    }

    // kernel_gateway_app_settings - computed: false, optional: true, required: false
    private _kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined; 
    private __kernelGatewayAppSettingsOutput = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this as any, "kernel_gateway_app_settings", true);
    public get kernelGatewayAppSettings() {
      return this.__kernelGatewayAppSettingsOutput;
    }
    public putKernelGatewayAppSettings(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined) {
      this._kernelGatewayAppSettings = value;
    }
    public resetKernelGatewayAppSettings() {
      this._kernelGatewayAppSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelGatewayAppSettingsInput() {
      return this._kernelGatewayAppSettings
    }

    // sharing_settings - computed: false, optional: true, required: false
    private _sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings | undefined; 
    private __sharingSettingsOutput = new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this as any, "sharing_settings", true);
    public get sharingSettings() {
      return this.__sharingSettingsOutput;
    }
    public putSharingSettings(value: SagemakerDomainDefaultUserSettingsSharingSettings | undefined) {
      this._sharingSettings = value;
    }
    public resetSharingSettings() {
      this._sharingSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharingSettingsInput() {
      return this._sharingSettings
    }

    // tensor_board_app_settings - computed: false, optional: true, required: false
    private _tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined; 
    private __tensorBoardAppSettingsOutput = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(this as any, "tensor_board_app_settings", true);
    public get tensorBoardAppSettings() {
      return this.__tensorBoardAppSettingsOutput;
    }
    public putTensorBoardAppSettings(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined) {
      this._tensorBoardAppSettings = value;
    }
    public resetTensorBoardAppSettings() {
      this._tensorBoardAppSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tensorBoardAppSettingsInput() {
      return this._tensorBoardAppSettings
    }
  }
  export interface SagemakerDomainRetentionPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#home_efs_file_system SagemakerDomain#home_efs_file_system}
    */
    readonly homeEfsFileSystem?: string;
  }

  function sagemakerDomainRetentionPolicyToTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      home_efs_file_system: cdktf.stringToTerraform(struct!.homeEfsFileSystem),
    }
  }

  export class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // home_efs_file_system - computed: false, optional: true, required: false
    private _homeEfsFileSystem?: string | undefined; 
    public get homeEfsFileSystem() {
      return this.getStringAttribute('home_efs_file_system');
    }
    public set homeEfsFileSystem(value: string | undefined) {
      this._homeEfsFileSystem = value;
    }
    public resetHomeEfsFileSystem() {
      this._homeEfsFileSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeEfsFileSystemInput() {
      return this._homeEfsFileSystem
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain}
  */
  export class SagemakerDomain extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_domain";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerDomainConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_domain',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appNetworkAccessType = config.appNetworkAccessType;
      this._authMode = config.authMode;
      this._domainName = config.domainName;
      this._kmsKeyId = config.kmsKeyId;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
      this._defaultUserSettings = config.defaultUserSettings;
      this._retentionPolicy = config.retentionPolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_network_access_type - computed: false, optional: true, required: false
    private _appNetworkAccessType?: string | undefined; 
    public get appNetworkAccessType() {
      return this.getStringAttribute('app_network_access_type');
    }
    public set appNetworkAccessType(value: string | undefined) {
      this._appNetworkAccessType = value;
    }
    public resetAppNetworkAccessType() {
      this._appNetworkAccessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appNetworkAccessTypeInput() {
      return this._appNetworkAccessType
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auth_mode - computed: false, optional: false, required: true
    private _authMode?: string; 
    public get authMode() {
      return this.getStringAttribute('auth_mode');
    }
    public set authMode(value: string) {
      this._authMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authModeInput() {
      return this._authMode
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
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

    // home_efs_file_system_id - computed: true, optional: false, required: false
    public get homeEfsFileSystemId() {
      return this.getStringAttribute('home_efs_file_system_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
    public get singleSignOnManagedApplicationInstanceId() {
      return this.getStringAttribute('single_sign_on_managed_application_instance_id');
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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

    // url - computed: true, optional: false, required: false
    public get url() {
      return this.getStringAttribute('url');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // default_user_settings - computed: false, optional: false, required: true
    private _defaultUserSettings?: SagemakerDomainDefaultUserSettings; 
    private __defaultUserSettingsOutput = new SagemakerDomainDefaultUserSettingsOutputReference(this as any, "default_user_settings", true);
    public get defaultUserSettings() {
      return this.__defaultUserSettingsOutput;
    }
    public putDefaultUserSettings(value: SagemakerDomainDefaultUserSettings) {
      this._defaultUserSettings = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultUserSettingsInput() {
      return this._defaultUserSettings
    }

    // retention_policy - computed: false, optional: true, required: false
    private _retentionPolicy?: SagemakerDomainRetentionPolicy | undefined; 
    private __retentionPolicyOutput = new SagemakerDomainRetentionPolicyOutputReference(this as any, "retention_policy", true);
    public get retentionPolicy() {
      return this.__retentionPolicyOutput;
    }
    public putRetentionPolicy(value: SagemakerDomainRetentionPolicy | undefined) {
      this._retentionPolicy = value;
    }
    public resetRetentionPolicy() {
      this._retentionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPolicyInput() {
      return this._retentionPolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
        auth_mode: cdktf.stringToTerraform(this._authMode),
        domain_name: cdktf.stringToTerraform(this._domainName),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings),
        retention_policy: sagemakerDomainRetentionPolicyToTerraform(this._retentionPolicy),
      };
    }
  }
  export interface SagemakerEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#endpoint_config_name SagemakerEndpoint#endpoint_config_name}
    */
    readonly endpointConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#name SagemakerEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#tags SagemakerEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#tags_all SagemakerEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint}
  */
  export class SagemakerEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._endpointConfigName = config.endpointConfigName;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // endpoint_config_name - computed: false, optional: false, required: true
    private _endpointConfigName?: string; 
    public get endpointConfigName() {
      return this.getStringAttribute('endpoint_config_name');
    }
    public set endpointConfigName(value: string) {
      this._endpointConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigNameInput() {
      return this._endpointConfigName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        endpoint_config_name: cdktf.stringToTerraform(this._endpointConfigName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#name SagemakerEndpointConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags SagemakerEndpointConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags_all SagemakerEndpointConfiguration#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * async_inference_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#async_inference_config SagemakerEndpointConfiguration#async_inference_config}
    */
    readonly asyncInferenceConfig?: SagemakerEndpointConfigurationAsyncInferenceConfig;
    /**
    * data_capture_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#data_capture_config SagemakerEndpointConfiguration#data_capture_config}
    */
    readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig;
    /**
    * production_variants block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#production_variants SagemakerEndpointConfiguration#production_variants}
    */
    readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[];
  }
  export interface SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}
    */
    readonly maxConcurrentInvocationsPerInstance?: number;
  }

  function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_concurrent_invocations_per_instance: cdktf.numberToTerraform(struct!.maxConcurrentInvocationsPerInstance),
    }
  }

  export class SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_concurrent_invocations_per_instance - computed: false, optional: true, required: false
    private _maxConcurrentInvocationsPerInstance?: number | undefined; 
    public get maxConcurrentInvocationsPerInstance() {
      return this.getNumberAttribute('max_concurrent_invocations_per_instance');
    }
    public set maxConcurrentInvocationsPerInstance(value: number | undefined) {
      this._maxConcurrentInvocationsPerInstance = value;
    }
    public resetMaxConcurrentInvocationsPerInstance() {
      this._maxConcurrentInvocationsPerInstance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentInvocationsPerInstanceInput() {
      return this._maxConcurrentInvocationsPerInstance
    }
  }
  export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#error_topic SagemakerEndpointConfiguration#error_topic}
    */
    readonly errorTopic?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#success_topic SagemakerEndpointConfiguration#success_topic}
    */
    readonly successTopic?: string;
  }

  function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      error_topic: cdktf.stringToTerraform(struct!.errorTopic),
      success_topic: cdktf.stringToTerraform(struct!.successTopic),
    }
  }

  export class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // error_topic - computed: false, optional: true, required: false
    private _errorTopic?: string | undefined; 
    public get errorTopic() {
      return this.getStringAttribute('error_topic');
    }
    public set errorTopic(value: string | undefined) {
      this._errorTopic = value;
    }
    public resetErrorTopic() {
      this._errorTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorTopicInput() {
      return this._errorTopic
    }

    // success_topic - computed: false, optional: true, required: false
    private _successTopic?: string | undefined; 
    public get successTopic() {
      return this.getStringAttribute('success_topic');
    }
    public set successTopic(value: string | undefined) {
      this._successTopic = value;
    }
    public resetSuccessTopic() {
      this._successTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successTopicInput() {
      return this._successTopic
    }
  }
  export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#s3_output_path SagemakerEndpointConfiguration#s3_output_path}
    */
    readonly s3OutputPath: string;
    /**
    * notification_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#notification_config SagemakerEndpointConfiguration#notification_config}
    */
    readonly notificationConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
  }

  function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
      notification_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct!.notificationConfig),
    }
  }

  export class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // s3_output_path - computed: false, optional: false, required: true
    private _s3OutputPath?: string; 
    public get s3OutputPath() {
      return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string) {
      this._s3OutputPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
      return this._s3OutputPath
    }

    // notification_config - computed: false, optional: true, required: false
    private _notificationConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined; 
    private __notificationConfigOutput = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(this as any, "notification_config", true);
    public get notificationConfig() {
      return this.__notificationConfigOutput;
    }
    public putNotificationConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined) {
      this._notificationConfig = value;
    }
    public resetNotificationConfig() {
      this._notificationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigInput() {
      return this._notificationConfig
    }
  }
  export interface SagemakerEndpointConfigurationAsyncInferenceConfig {
    /**
    * client_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#client_config SagemakerEndpointConfiguration#client_config}
    */
    readonly clientConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
    /**
    * output_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#output_config SagemakerEndpointConfiguration#output_config}
    */
    readonly outputConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
  }

  function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_config: sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct!.clientConfig),
      output_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct!.outputConfig),
    }
  }

  export class SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_config - computed: false, optional: true, required: false
    private _clientConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined; 
    private __clientConfigOutput = new SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference(this as any, "client_config", true);
    public get clientConfig() {
      return this.__clientConfigOutput;
    }
    public putClientConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined) {
      this._clientConfig = value;
    }
    public resetClientConfig() {
      this._clientConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientConfigInput() {
      return this._clientConfig
    }

    // output_config - computed: false, optional: false, required: true
    private _outputConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig; 
    private __outputConfigOutput = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference(this as any, "output_config", true);
    public get outputConfig() {
      return this.__outputConfigOutput;
    }
    public putOutputConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig) {
      this._outputConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConfigInput() {
      return this._outputConfig
    }
  }
  export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#csv_content_types SagemakerEndpointConfiguration#csv_content_types}
    */
    readonly csvContentTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#json_content_types SagemakerEndpointConfiguration#json_content_types}
    */
    readonly jsonContentTypes?: string[];
  }

  function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      csv_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.csvContentTypes),
      json_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jsonContentTypes),
    }
  }

  export class SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // csv_content_types - computed: false, optional: true, required: false
    private _csvContentTypes?: string[] | undefined; 
    public get csvContentTypes() {
      return this.getListAttribute('csv_content_types');
    }
    public set csvContentTypes(value: string[] | undefined) {
      this._csvContentTypes = value;
    }
    public resetCsvContentTypes() {
      this._csvContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvContentTypesInput() {
      return this._csvContentTypes
    }

    // json_content_types - computed: false, optional: true, required: false
    private _jsonContentTypes?: string[] | undefined; 
    public get jsonContentTypes() {
      return this.getListAttribute('json_content_types');
    }
    public set jsonContentTypes(value: string[] | undefined) {
      this._jsonContentTypes = value;
    }
    public resetJsonContentTypes() {
      this._jsonContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonContentTypesInput() {
      return this._jsonContentTypes
    }
  }
  export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_mode SagemakerEndpointConfiguration#capture_mode}
    */
    readonly captureMode: string;
  }

  function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capture_mode: cdktf.stringToTerraform(struct!.captureMode),
    }
  }

  export interface SagemakerEndpointConfigurationDataCaptureConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
    */
    readonly destinationS3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#enable_capture SagemakerEndpointConfiguration#enable_capture}
    */
    readonly enableCapture?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}
    */
    readonly initialSamplingPercentage: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * capture_content_type_header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}
    */
    readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
    /**
    * capture_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_options SagemakerEndpointConfiguration#capture_options}
    */
    readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
  }

  function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
      enable_capture: cdktf.booleanToTerraform(struct!.enableCapture),
      initial_sampling_percentage: cdktf.numberToTerraform(struct!.initialSamplingPercentage),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      capture_content_type_header: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct!.captureContentTypeHeader),
      capture_options: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform)(struct!.captureOptions),
    }
  }

  export class SagemakerEndpointConfigurationDataCaptureConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // destination_s3_uri - computed: false, optional: false, required: true
    private _destinationS3Uri?: string; 
    public get destinationS3Uri() {
      return this.getStringAttribute('destination_s3_uri');
    }
    public set destinationS3Uri(value: string) {
      this._destinationS3Uri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationS3UriInput() {
      return this._destinationS3Uri
    }

    // enable_capture - computed: false, optional: true, required: false
    private _enableCapture?: boolean | cdktf.IResolvable | undefined; 
    public get enableCapture() {
      return this.getBooleanAttribute('enable_capture') as any;
    }
    public set enableCapture(value: boolean | cdktf.IResolvable | undefined) {
      this._enableCapture = value;
    }
    public resetEnableCapture() {
      this._enableCapture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCaptureInput() {
      return this._enableCapture
    }

    // initial_sampling_percentage - computed: false, optional: false, required: true
    private _initialSamplingPercentage?: number; 
    public get initialSamplingPercentage() {
      return this.getNumberAttribute('initial_sampling_percentage');
    }
    public set initialSamplingPercentage(value: number) {
      this._initialSamplingPercentage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get initialSamplingPercentageInput() {
      return this._initialSamplingPercentage
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // capture_content_type_header - computed: false, optional: true, required: false
    private _captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined; 
    private __captureContentTypeHeaderOutput = new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(this as any, "capture_content_type_header", true);
    public get captureContentTypeHeader() {
      return this.__captureContentTypeHeaderOutput;
    }
    public putCaptureContentTypeHeader(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined) {
      this._captureContentTypeHeader = value;
    }
    public resetCaptureContentTypeHeader() {
      this._captureContentTypeHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get captureContentTypeHeaderInput() {
      return this._captureContentTypeHeader
    }

    // capture_options - computed: false, optional: false, required: true
    private _captureOptions?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[]; 
    public get captureOptions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('capture_options') as any;
    }
    public set captureOptions(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[]) {
      this._captureOptions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get captureOptionsInput() {
      return this._captureOptions
    }
  }
  export interface SagemakerEndpointConfigurationProductionVariants {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
    */
    readonly acceleratorType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
    */
    readonly initialInstanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
    */
    readonly initialVariantWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#instance_type SagemakerEndpointConfiguration#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#model_name SagemakerEndpointConfiguration#model_name}
    */
    readonly modelName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#variant_name SagemakerEndpointConfiguration#variant_name}
    */
    readonly variantName?: string;
  }

  function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationProductionVariants): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
      initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
      initial_variant_weight: cdktf.numberToTerraform(struct!.initialVariantWeight),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      model_name: cdktf.stringToTerraform(struct!.modelName),
      variant_name: cdktf.stringToTerraform(struct!.variantName),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration}
  */
  export class SagemakerEndpointConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_endpoint_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_endpoint_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._kmsKeyArn = config.kmsKeyArn;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._asyncInferenceConfig = config.asyncInferenceConfig;
      this._dataCaptureConfig = config.dataCaptureConfig;
      this._productionVariants = config.productionVariants;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
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

    // async_inference_config - computed: false, optional: true, required: false
    private _asyncInferenceConfig?: SagemakerEndpointConfigurationAsyncInferenceConfig | undefined; 
    private __asyncInferenceConfigOutput = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference(this as any, "async_inference_config", true);
    public get asyncInferenceConfig() {
      return this.__asyncInferenceConfigOutput;
    }
    public putAsyncInferenceConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfig | undefined) {
      this._asyncInferenceConfig = value;
    }
    public resetAsyncInferenceConfig() {
      this._asyncInferenceConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asyncInferenceConfigInput() {
      return this._asyncInferenceConfig
    }

    // data_capture_config - computed: false, optional: true, required: false
    private _dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig | undefined; 
    private __dataCaptureConfigOutput = new SagemakerEndpointConfigurationDataCaptureConfigOutputReference(this as any, "data_capture_config", true);
    public get dataCaptureConfig() {
      return this.__dataCaptureConfigOutput;
    }
    public putDataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig | undefined) {
      this._dataCaptureConfig = value;
    }
    public resetDataCaptureConfig() {
      this._dataCaptureConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCaptureConfigInput() {
      return this._dataCaptureConfig
    }

    // production_variants - computed: false, optional: false, required: true
    private _productionVariants?: SagemakerEndpointConfigurationProductionVariants[]; 
    public get productionVariants() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('production_variants') as any;
    }
    public set productionVariants(value: SagemakerEndpointConfigurationProductionVariants[]) {
      this._productionVariants = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productionVariantsInput() {
      return this._productionVariants
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        async_inference_config: sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(this._asyncInferenceConfig),
        data_capture_config: sagemakerEndpointConfigurationDataCaptureConfigToTerraform(this._dataCaptureConfig),
        production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform)(this._productionVariants),
      };
    }
  }
  export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#description SagemakerFeatureGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
    */
    readonly eventTimeFeatureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_group_name SagemakerFeatureGroup#feature_group_name}
    */
    readonly featureGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
    */
    readonly recordIdentifierFeatureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#role_arn SagemakerFeatureGroup#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags SagemakerFeatureGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags_all SagemakerFeatureGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * feature_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_definition SagemakerFeatureGroup#feature_definition}
    */
    readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[];
    /**
    * offline_store_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#offline_store_config SagemakerFeatureGroup#offline_store_config}
    */
    readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
    /**
    * online_store_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#online_store_config SagemakerFeatureGroup#online_store_config}
    */
    readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
  }
  export interface SagemakerFeatureGroupFeatureDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_name SagemakerFeatureGroup#feature_name}
    */
    readonly featureName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_type SagemakerFeatureGroup#feature_type}
    */
    readonly featureType?: string;
  }

  function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct?: SagemakerFeatureGroupFeatureDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      feature_name: cdktf.stringToTerraform(struct!.featureName),
      feature_type: cdktf.stringToTerraform(struct!.featureType),
    }
  }

  export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#catalog SagemakerFeatureGroup#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#database SagemakerFeatureGroup#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#table_name SagemakerFeatureGroup#table_name}
    */
    readonly tableName?: string;
  }

  function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      catalog: cdktf.stringToTerraform(struct!.catalog),
      database: cdktf.stringToTerraform(struct!.database),
      table_name: cdktf.stringToTerraform(struct!.tableName),
    }
  }

  export class SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string | undefined; 
    public get catalog() {
      return this.getStringAttribute('catalog');
    }
    public set catalog(value: string | undefined) {
      this._catalog = value;
    }
    public resetCatalog() {
      this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
      return this._catalog
    }

    // database - computed: true, optional: true, required: false
    private _database?: string | undefined; 
    public get database() {
      return this.getStringAttribute('database');
    }
    public set database(value: string | undefined) {
      this._database = value;
    }
    public resetDatabase() {
      this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
      return this._database
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string | undefined; 
    public get tableName() {
      return this.getStringAttribute('table_name');
    }
    public set tableName(value: string | undefined) {
      this._tableName = value;
    }
    public resetTableName() {
      this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
      return this._tableName
    }
  }
  export interface SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_uri SagemakerFeatureGroup#s3_uri}
    */
    readonly s3Uri: string;
  }

  function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    }
  }

  export class SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // s3_uri - computed: false, optional: false, required: true
    private _s3Uri?: string; 
    public get s3Uri() {
      return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
      this._s3Uri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
      return this._s3Uri
    }
  }
  export interface SagemakerFeatureGroupOfflineStoreConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
    */
    readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
    /**
    * data_catalog_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
    */
    readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
    /**
    * s3_storage_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
    */
    readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;
  }

  function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      disable_glue_table_creation: cdktf.booleanToTerraform(struct!.disableGlueTableCreation),
      data_catalog_config: sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
      s3_storage_config: sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct!.s3StorageConfig),
    }
  }

  export class SagemakerFeatureGroupOfflineStoreConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // disable_glue_table_creation - computed: false, optional: true, required: false
    private _disableGlueTableCreation?: boolean | cdktf.IResolvable | undefined; 
    public get disableGlueTableCreation() {
      return this.getBooleanAttribute('disable_glue_table_creation') as any;
    }
    public set disableGlueTableCreation(value: boolean | cdktf.IResolvable | undefined) {
      this._disableGlueTableCreation = value;
    }
    public resetDisableGlueTableCreation() {
      this._disableGlueTableCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableGlueTableCreationInput() {
      return this._disableGlueTableCreation
    }

    // data_catalog_config - computed: false, optional: true, required: false
    private _dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined; 
    private __dataCatalogConfigOutput = new SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(this as any, "data_catalog_config", true);
    public get dataCatalogConfig() {
      return this.__dataCatalogConfigOutput;
    }
    public putDataCatalogConfig(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined) {
      this._dataCatalogConfig = value;
    }
    public resetDataCatalogConfig() {
      this._dataCatalogConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCatalogConfigInput() {
      return this._dataCatalogConfig
    }

    // s3_storage_config - computed: false, optional: false, required: true
    private _s3StorageConfig?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig; 
    private __s3StorageConfigOutput = new SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(this as any, "s3_storage_config", true);
    public get s3StorageConfig() {
      return this.__s3StorageConfigOutput;
    }
    public putS3StorageConfig(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig) {
      this._s3StorageConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3StorageConfigInput() {
      return this._s3StorageConfig
    }
  }
  export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
  }

  function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    }
  }

  export class SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }
  }
  export interface SagemakerFeatureGroupOnlineStoreConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#enable_online_store SagemakerFeatureGroup#enable_online_store}
    */
    readonly enableOnlineStore?: boolean | cdktf.IResolvable;
    /**
    * security_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#security_config SagemakerFeatureGroup#security_config}
    */
    readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
  }

  function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
      security_config: sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct!.securityConfig),
    }
  }

  export class SagemakerFeatureGroupOnlineStoreConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enable_online_store - computed: false, optional: true, required: false
    private _enableOnlineStore?: boolean | cdktf.IResolvable | undefined; 
    public get enableOnlineStore() {
      return this.getBooleanAttribute('enable_online_store') as any;
    }
    public set enableOnlineStore(value: boolean | cdktf.IResolvable | undefined) {
      this._enableOnlineStore = value;
    }
    public resetEnableOnlineStore() {
      this._enableOnlineStore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableOnlineStoreInput() {
      return this._enableOnlineStore
    }

    // security_config - computed: false, optional: true, required: false
    private _securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined; 
    private __securityConfigOutput = new SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(this as any, "security_config", true);
    public get securityConfig() {
      return this.__securityConfigOutput;
    }
    public putSecurityConfig(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined) {
      this._securityConfig = value;
    }
    public resetSecurityConfig() {
      this._securityConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigInput() {
      return this._securityConfig
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group}
  */
  export class SagemakerFeatureGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_feature_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFeatureGroupConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_feature_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._eventTimeFeatureName = config.eventTimeFeatureName;
      this._featureGroupName = config.featureGroupName;
      this._recordIdentifierFeatureName = config.recordIdentifierFeatureName;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._featureDefinition = config.featureDefinition;
      this._offlineStoreConfig = config.offlineStoreConfig;
      this._onlineStoreConfig = config.onlineStoreConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // event_time_feature_name - computed: false, optional: false, required: true
    private _eventTimeFeatureName?: string; 
    public get eventTimeFeatureName() {
      return this.getStringAttribute('event_time_feature_name');
    }
    public set eventTimeFeatureName(value: string) {
      this._eventTimeFeatureName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTimeFeatureNameInput() {
      return this._eventTimeFeatureName
    }

    // feature_group_name - computed: false, optional: false, required: true
    private _featureGroupName?: string; 
    public get featureGroupName() {
      return this.getStringAttribute('feature_group_name');
    }
    public set featureGroupName(value: string) {
      this._featureGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureGroupNameInput() {
      return this._featureGroupName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // record_identifier_feature_name - computed: false, optional: false, required: true
    private _recordIdentifierFeatureName?: string; 
    public get recordIdentifierFeatureName() {
      return this.getStringAttribute('record_identifier_feature_name');
    }
    public set recordIdentifierFeatureName(value: string) {
      this._recordIdentifierFeatureName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordIdentifierFeatureNameInput() {
      return this._recordIdentifierFeatureName
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

    // feature_definition - computed: false, optional: false, required: true
    private _featureDefinition?: SagemakerFeatureGroupFeatureDefinition[]; 
    public get featureDefinition() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('feature_definition') as any;
    }
    public set featureDefinition(value: SagemakerFeatureGroupFeatureDefinition[]) {
      this._featureDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureDefinitionInput() {
      return this._featureDefinition
    }

    // offline_store_config - computed: false, optional: true, required: false
    private _offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig | undefined; 
    private __offlineStoreConfigOutput = new SagemakerFeatureGroupOfflineStoreConfigOutputReference(this as any, "offline_store_config", true);
    public get offlineStoreConfig() {
      return this.__offlineStoreConfigOutput;
    }
    public putOfflineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig | undefined) {
      this._offlineStoreConfig = value;
    }
    public resetOfflineStoreConfig() {
      this._offlineStoreConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offlineStoreConfigInput() {
      return this._offlineStoreConfig
    }

    // online_store_config - computed: false, optional: true, required: false
    private _onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig | undefined; 
    private __onlineStoreConfigOutput = new SagemakerFeatureGroupOnlineStoreConfigOutputReference(this as any, "online_store_config", true);
    public get onlineStoreConfig() {
      return this.__onlineStoreConfigOutput;
    }
    public putOnlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig | undefined) {
      this._onlineStoreConfig = value;
    }
    public resetOnlineStoreConfig() {
      this._onlineStoreConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onlineStoreConfigInput() {
      return this._onlineStoreConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        event_time_feature_name: cdktf.stringToTerraform(this._eventTimeFeatureName),
        feature_group_name: cdktf.stringToTerraform(this._featureGroupName),
        record_identifier_feature_name: cdktf.stringToTerraform(this._recordIdentifierFeatureName),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        feature_definition: cdktf.listMapper(sagemakerFeatureGroupFeatureDefinitionToTerraform)(this._featureDefinition),
        offline_store_config: sagemakerFeatureGroupOfflineStoreConfigToTerraform(this._offlineStoreConfig),
        online_store_config: sagemakerFeatureGroupOnlineStoreConfigToTerraform(this._onlineStoreConfig),
      };
    }
  }
  export interface SagemakerFlowDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#flow_definition_name SagemakerFlowDefinition#flow_definition_name}
    */
    readonly flowDefinitionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#role_arn SagemakerFlowDefinition#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags SagemakerFlowDefinition#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags_all SagemakerFlowDefinition#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * human_loop_activation_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}
    */
    readonly humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig;
    /**
    * human_loop_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_config SagemakerFlowDefinition#human_loop_config}
    */
    readonly humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfig;
    /**
    * human_loop_request_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}
    */
    readonly humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource;
    /**
    * output_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#output_config SagemakerFlowDefinition#output_config}
    */
    readonly outputConfig: SagemakerFlowDefinitionOutputConfig;
  }
  export interface SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}
    */
    readonly humanLoopActivationConditions: string;
  }

  function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      human_loop_activation_conditions: cdktf.stringToTerraform(struct!.humanLoopActivationConditions),
    }
  }

  export class SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // human_loop_activation_conditions - computed: false, optional: false, required: true
    private _humanLoopActivationConditions?: string; 
    public get humanLoopActivationConditions() {
      return this.getStringAttribute('human_loop_activation_conditions');
    }
    public set humanLoopActivationConditions(value: string) {
      this._humanLoopActivationConditions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get humanLoopActivationConditionsInput() {
      return this._humanLoopActivationConditions
    }
  }
  export interface SagemakerFlowDefinitionHumanLoopActivationConfig {
    /**
    * human_loop_activation_conditions_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}
    */
    readonly humanLoopActivationConditionsConfig?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
  }

  function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      human_loop_activation_conditions_config: sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct!.humanLoopActivationConditionsConfig),
    }
  }

  export class SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // human_loop_activation_conditions_config - computed: false, optional: true, required: false
    private _humanLoopActivationConditionsConfig?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined; 
    private __humanLoopActivationConditionsConfigOutput = new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(this as any, "human_loop_activation_conditions_config", true);
    public get humanLoopActivationConditionsConfig() {
      return this.__humanLoopActivationConditionsConfigOutput;
    }
    public putHumanLoopActivationConditionsConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined) {
      this._humanLoopActivationConditionsConfig = value;
    }
    public resetHumanLoopActivationConditionsConfig() {
      this._humanLoopActivationConditionsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get humanLoopActivationConditionsConfigInput() {
      return this._humanLoopActivationConditionsConfig
    }
  }
  export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#cents SagemakerFlowDefinition#cents}
    */
    readonly cents?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#dollars SagemakerFlowDefinition#dollars}
    */
    readonly dollars?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}
    */
    readonly tenthFractionsOfACent?: number;
  }

  function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cents: cdktf.numberToTerraform(struct!.cents),
      dollars: cdktf.numberToTerraform(struct!.dollars),
      tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct!.tenthFractionsOfACent),
    }
  }

  export class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cents - computed: false, optional: true, required: false
    private _cents?: number | undefined; 
    public get cents() {
      return this.getNumberAttribute('cents');
    }
    public set cents(value: number | undefined) {
      this._cents = value;
    }
    public resetCents() {
      this._cents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get centsInput() {
      return this._cents
    }

    // dollars - computed: false, optional: true, required: false
    private _dollars?: number | undefined; 
    public get dollars() {
      return this.getNumberAttribute('dollars');
    }
    public set dollars(value: number | undefined) {
      this._dollars = value;
    }
    public resetDollars() {
      this._dollars = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dollarsInput() {
      return this._dollars
    }

    // tenth_fractions_of_a_cent - computed: false, optional: true, required: false
    private _tenthFractionsOfACent?: number | undefined; 
    public get tenthFractionsOfACent() {
      return this.getNumberAttribute('tenth_fractions_of_a_cent');
    }
    public set tenthFractionsOfACent(value: number | undefined) {
      this._tenthFractionsOfACent = value;
    }
    public resetTenthFractionsOfACent() {
      this._tenthFractionsOfACent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenthFractionsOfACentInput() {
      return this._tenthFractionsOfACent
    }
  }
  export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
    /**
    * amount_in_usd block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#amount_in_usd SagemakerFlowDefinition#amount_in_usd}
    */
    readonly amountInUsd?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
  }

  function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      amount_in_usd: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct!.amountInUsd),
    }
  }

  export class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // amount_in_usd - computed: false, optional: true, required: false
    private _amountInUsd?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined; 
    private __amountInUsdOutput = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(this as any, "amount_in_usd", true);
    public get amountInUsd() {
      return this.__amountInUsdOutput;
    }
    public putAmountInUsd(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined) {
      this._amountInUsd = value;
    }
    public resetAmountInUsd() {
      this._amountInUsd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amountInUsdInput() {
      return this._amountInUsd
    }
  }
  export interface SagemakerFlowDefinitionHumanLoopConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}
    */
    readonly humanTaskUiArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}
    */
    readonly taskAvailabilityLifetimeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_count SagemakerFlowDefinition#task_count}
    */
    readonly taskCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_description SagemakerFlowDefinition#task_description}
    */
    readonly taskDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_keywords SagemakerFlowDefinition#task_keywords}
    */
    readonly taskKeywords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}
    */
    readonly taskTimeLimitInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_title SagemakerFlowDefinition#task_title}
    */
    readonly taskTitle: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#workteam_arn SagemakerFlowDefinition#workteam_arn}
    */
    readonly workteamArn: string;
    /**
    * public_workforce_task_price block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}
    */
    readonly publicWorkforceTaskPrice?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
  }

  function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigOutputReference | SagemakerFlowDefinitionHumanLoopConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      human_task_ui_arn: cdktf.stringToTerraform(struct!.humanTaskUiArn),
      task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct!.taskAvailabilityLifetimeInSeconds),
      task_count: cdktf.numberToTerraform(struct!.taskCount),
      task_description: cdktf.stringToTerraform(struct!.taskDescription),
      task_keywords: cdktf.listMapper(cdktf.stringToTerraform)(struct!.taskKeywords),
      task_time_limit_in_seconds: cdktf.numberToTerraform(struct!.taskTimeLimitInSeconds),
      task_title: cdktf.stringToTerraform(struct!.taskTitle),
      workteam_arn: cdktf.stringToTerraform(struct!.workteamArn),
      public_workforce_task_price: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct!.publicWorkforceTaskPrice),
    }
  }

  export class SagemakerFlowDefinitionHumanLoopConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // human_task_ui_arn - computed: false, optional: false, required: true
    private _humanTaskUiArn?: string; 
    public get humanTaskUiArn() {
      return this.getStringAttribute('human_task_ui_arn');
    }
    public set humanTaskUiArn(value: string) {
      this._humanTaskUiArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get humanTaskUiArnInput() {
      return this._humanTaskUiArn
    }

    // task_availability_lifetime_in_seconds - computed: false, optional: true, required: false
    private _taskAvailabilityLifetimeInSeconds?: number | undefined; 
    public get taskAvailabilityLifetimeInSeconds() {
      return this.getNumberAttribute('task_availability_lifetime_in_seconds');
    }
    public set taskAvailabilityLifetimeInSeconds(value: number | undefined) {
      this._taskAvailabilityLifetimeInSeconds = value;
    }
    public resetTaskAvailabilityLifetimeInSeconds() {
      this._taskAvailabilityLifetimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskAvailabilityLifetimeInSecondsInput() {
      return this._taskAvailabilityLifetimeInSeconds
    }

    // task_count - computed: false, optional: false, required: true
    private _taskCount?: number; 
    public get taskCount() {
      return this.getNumberAttribute('task_count');
    }
    public set taskCount(value: number) {
      this._taskCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskCountInput() {
      return this._taskCount
    }

    // task_description - computed: false, optional: false, required: true
    private _taskDescription?: string; 
    public get taskDescription() {
      return this.getStringAttribute('task_description');
    }
    public set taskDescription(value: string) {
      this._taskDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDescriptionInput() {
      return this._taskDescription
    }

    // task_keywords - computed: false, optional: true, required: false
    private _taskKeywords?: string[] | undefined; 
    public get taskKeywords() {
      return this.getListAttribute('task_keywords');
    }
    public set taskKeywords(value: string[] | undefined) {
      this._taskKeywords = value;
    }
    public resetTaskKeywords() {
      this._taskKeywords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskKeywordsInput() {
      return this._taskKeywords
    }

    // task_time_limit_in_seconds - computed: false, optional: true, required: false
    private _taskTimeLimitInSeconds?: number | undefined; 
    public get taskTimeLimitInSeconds() {
      return this.getNumberAttribute('task_time_limit_in_seconds');
    }
    public set taskTimeLimitInSeconds(value: number | undefined) {
      this._taskTimeLimitInSeconds = value;
    }
    public resetTaskTimeLimitInSeconds() {
      this._taskTimeLimitInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskTimeLimitInSecondsInput() {
      return this._taskTimeLimitInSeconds
    }

    // task_title - computed: false, optional: false, required: true
    private _taskTitle?: string; 
    public get taskTitle() {
      return this.getStringAttribute('task_title');
    }
    public set taskTitle(value: string) {
      this._taskTitle = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskTitleInput() {
      return this._taskTitle
    }

    // workteam_arn - computed: false, optional: false, required: true
    private _workteamArn?: string; 
    public get workteamArn() {
      return this.getStringAttribute('workteam_arn');
    }
    public set workteamArn(value: string) {
      this._workteamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workteamArnInput() {
      return this._workteamArn
    }

    // public_workforce_task_price - computed: false, optional: true, required: false
    private _publicWorkforceTaskPrice?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined; 
    private __publicWorkforceTaskPriceOutput = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(this as any, "public_workforce_task_price", true);
    public get publicWorkforceTaskPrice() {
      return this.__publicWorkforceTaskPriceOutput;
    }
    public putPublicWorkforceTaskPrice(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined) {
      this._publicWorkforceTaskPrice = value;
    }
    public resetPublicWorkforceTaskPrice() {
      this._publicWorkforceTaskPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicWorkforceTaskPriceInput() {
      return this._publicWorkforceTaskPrice
    }
  }
  export interface SagemakerFlowDefinitionHumanLoopRequestSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}
    */
    readonly awsManagedHumanLoopRequestSource: string;
  }

  function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference | SagemakerFlowDefinitionHumanLoopRequestSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      aws_managed_human_loop_request_source: cdktf.stringToTerraform(struct!.awsManagedHumanLoopRequestSource),
    }
  }

  export class SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // aws_managed_human_loop_request_source - computed: false, optional: false, required: true
    private _awsManagedHumanLoopRequestSource?: string; 
    public get awsManagedHumanLoopRequestSource() {
      return this.getStringAttribute('aws_managed_human_loop_request_source');
    }
    public set awsManagedHumanLoopRequestSource(value: string) {
      this._awsManagedHumanLoopRequestSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsManagedHumanLoopRequestSourceInput() {
      return this._awsManagedHumanLoopRequestSource
    }
  }
  export interface SagemakerFlowDefinitionOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#kms_key_id SagemakerFlowDefinition#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#s3_output_path SagemakerFlowDefinition#s3_output_path}
    */
    readonly s3OutputPath: string;
  }

  function sagemakerFlowDefinitionOutputConfigToTerraform(struct?: SagemakerFlowDefinitionOutputConfigOutputReference | SagemakerFlowDefinitionOutputConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    }
  }

  export class SagemakerFlowDefinitionOutputConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // s3_output_path - computed: false, optional: false, required: true
    private _s3OutputPath?: string; 
    public get s3OutputPath() {
      return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string) {
      this._s3OutputPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
      return this._s3OutputPath
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition}
  */
  export class SagemakerFlowDefinition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_flow_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFlowDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerFlowDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_flow_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._flowDefinitionName = config.flowDefinitionName;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._humanLoopActivationConfig = config.humanLoopActivationConfig;
      this._humanLoopConfig = config.humanLoopConfig;
      this._humanLoopRequestSource = config.humanLoopRequestSource;
      this._outputConfig = config.outputConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // flow_definition_name - computed: false, optional: false, required: true
    private _flowDefinitionName?: string; 
    public get flowDefinitionName() {
      return this.getStringAttribute('flow_definition_name');
    }
    public set flowDefinitionName(value: string) {
      this._flowDefinitionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get flowDefinitionNameInput() {
      return this._flowDefinitionName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

    // human_loop_activation_config - computed: false, optional: true, required: false
    private _humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig | undefined; 
    private __humanLoopActivationConfigOutput = new SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(this as any, "human_loop_activation_config", true);
    public get humanLoopActivationConfig() {
      return this.__humanLoopActivationConfigOutput;
    }
    public putHumanLoopActivationConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfig | undefined) {
      this._humanLoopActivationConfig = value;
    }
    public resetHumanLoopActivationConfig() {
      this._humanLoopActivationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get humanLoopActivationConfigInput() {
      return this._humanLoopActivationConfig
    }

    // human_loop_config - computed: false, optional: false, required: true
    private _humanLoopConfig?: SagemakerFlowDefinitionHumanLoopConfig; 
    private __humanLoopConfigOutput = new SagemakerFlowDefinitionHumanLoopConfigOutputReference(this as any, "human_loop_config", true);
    public get humanLoopConfig() {
      return this.__humanLoopConfigOutput;
    }
    public putHumanLoopConfig(value: SagemakerFlowDefinitionHumanLoopConfig) {
      this._humanLoopConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get humanLoopConfigInput() {
      return this._humanLoopConfig
    }

    // human_loop_request_source - computed: false, optional: true, required: false
    private _humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource | undefined; 
    private __humanLoopRequestSourceOutput = new SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(this as any, "human_loop_request_source", true);
    public get humanLoopRequestSource() {
      return this.__humanLoopRequestSourceOutput;
    }
    public putHumanLoopRequestSource(value: SagemakerFlowDefinitionHumanLoopRequestSource | undefined) {
      this._humanLoopRequestSource = value;
    }
    public resetHumanLoopRequestSource() {
      this._humanLoopRequestSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get humanLoopRequestSourceInput() {
      return this._humanLoopRequestSource
    }

    // output_config - computed: false, optional: false, required: true
    private _outputConfig?: SagemakerFlowDefinitionOutputConfig; 
    private __outputConfigOutput = new SagemakerFlowDefinitionOutputConfigOutputReference(this as any, "output_config", true);
    public get outputConfig() {
      return this.__outputConfigOutput;
    }
    public putOutputConfig(value: SagemakerFlowDefinitionOutputConfig) {
      this._outputConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConfigInput() {
      return this._outputConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        flow_definition_name: cdktf.stringToTerraform(this._flowDefinitionName),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        human_loop_activation_config: sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(this._humanLoopActivationConfig),
        human_loop_config: sagemakerFlowDefinitionHumanLoopConfigToTerraform(this._humanLoopConfig),
        human_loop_request_source: sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(this._humanLoopRequestSource),
        output_config: sagemakerFlowDefinitionOutputConfigToTerraform(this._outputConfig),
      };
    }
  }
  export interface SagemakerHumanTaskUiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}
    */
    readonly humanTaskUiName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#tags SagemakerHumanTaskUi#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#tags_all SagemakerHumanTaskUi#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * ui_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#ui_template SagemakerHumanTaskUi#ui_template}
    */
    readonly uiTemplate: SagemakerHumanTaskUiUiTemplate;
  }
  export interface SagemakerHumanTaskUiUiTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#content SagemakerHumanTaskUi#content}
    */
    readonly content?: string;
  }

  function sagemakerHumanTaskUiUiTemplateToTerraform(struct?: SagemakerHumanTaskUiUiTemplateOutputReference | SagemakerHumanTaskUiUiTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      content: cdktf.stringToTerraform(struct!.content),
    }
  }

  export class SagemakerHumanTaskUiUiTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // content - computed: false, optional: true, required: false
    private _content?: string | undefined; 
    public get content() {
      return this.getStringAttribute('content');
    }
    public set content(value: string | undefined) {
      this._content = value;
    }
    public resetContent() {
      this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
      return this._content
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui}
  */
  export class SagemakerHumanTaskUi extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_human_task_ui";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerHumanTaskUiConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerHumanTaskUiConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_human_task_ui',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._humanTaskUiName = config.humanTaskUiName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._uiTemplate = config.uiTemplate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // human_task_ui_name - computed: false, optional: false, required: true
    private _humanTaskUiName?: string; 
    public get humanTaskUiName() {
      return this.getStringAttribute('human_task_ui_name');
    }
    public set humanTaskUiName(value: string) {
      this._humanTaskUiName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get humanTaskUiNameInput() {
      return this._humanTaskUiName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // ui_template - computed: false, optional: false, required: true
    private _uiTemplate?: SagemakerHumanTaskUiUiTemplate; 
    private __uiTemplateOutput = new SagemakerHumanTaskUiUiTemplateOutputReference(this as any, "ui_template", true);
    public get uiTemplate() {
      return this.__uiTemplateOutput;
    }
    public putUiTemplate(value: SagemakerHumanTaskUiUiTemplate) {
      this._uiTemplate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uiTemplateInput() {
      return this._uiTemplate
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        human_task_ui_name: cdktf.stringToTerraform(this._humanTaskUiName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ui_template: sagemakerHumanTaskUiUiTemplateToTerraform(this._uiTemplate),
      };
    }
  }
  export interface SagemakerImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html#description SagemakerImage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html#display_name SagemakerImage#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html#image_name SagemakerImage#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html#role_arn SagemakerImage#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html#tags SagemakerImage#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html#tags_all SagemakerImage#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html aws_sagemaker_image}
  */
  export class SagemakerImage extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_image";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image.html aws_sagemaker_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerImageConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerImageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_image',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._displayName = config.displayName;
      this._imageName = config.imageName;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // display_name - computed: false, optional: true, required: false
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
      this._displayName = value;
    }
    public resetDisplayName() {
      this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
      return this._displayName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_name - computed: false, optional: false, required: true
    private _imageName?: string; 
    public get imageName() {
      return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
      this._imageName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
      return this._imageName
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        display_name: cdktf.stringToTerraform(this._displayName),
        image_name: cdktf.stringToTerraform(this._imageName),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SagemakerImageVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html#base_image SagemakerImageVersion#base_image}
    */
    readonly baseImage: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html#image_name SagemakerImageVersion#image_name}
    */
    readonly imageName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html aws_sagemaker_image_version}
  */
  export class SagemakerImageVersion extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_image_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html aws_sagemaker_image_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerImageVersionConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerImageVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_image_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._baseImage = config.baseImage;
      this._imageName = config.imageName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // base_image - computed: false, optional: false, required: true
    private _baseImage?: string; 
    public get baseImage() {
      return this.getStringAttribute('base_image');
    }
    public set baseImage(value: string) {
      this._baseImage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get baseImageInput() {
      return this._baseImage
    }

    // container_image - computed: true, optional: false, required: false
    public get containerImage() {
      return this.getStringAttribute('container_image');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_arn - computed: true, optional: false, required: false
    public get imageArn() {
      return this.getStringAttribute('image_arn');
    }

    // image_name - computed: false, optional: false, required: true
    private _imageName?: string; 
    public get imageName() {
      return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
      this._imageName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
      return this._imageName
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getNumberAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        base_image: cdktf.stringToTerraform(this._baseImage),
        image_name: cdktf.stringToTerraform(this._imageName),
      };
    }
  }
  export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#enable_network_isolation SagemakerModel#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#execution_role_arn SagemakerModel#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#name SagemakerModel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags SagemakerModel#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags_all SagemakerModel#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * container block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container SagemakerModel#container}
    */
    readonly container?: SagemakerModelContainer[];
    /**
    * inference_execution_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#inference_execution_config SagemakerModel#inference_execution_config}
    */
    readonly inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig;
    /**
    * primary_container block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#primary_container SagemakerModel#primary_container}
    */
    readonly primaryContainer?: SagemakerModelPrimaryContainer;
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#vpc_config SagemakerModel#vpc_config}
    */
    readonly vpcConfig?: SagemakerModelVpcConfig;
  }
  export interface SagemakerModelContainerImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
    */
    readonly repositoryAccessMode: string;
  }

  function sagemakerModelContainerImageConfigToTerraform(struct?: SagemakerModelContainerImageConfigOutputReference | SagemakerModelContainerImageConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
    }
  }

  export class SagemakerModelContainerImageConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // repository_access_mode - computed: false, optional: false, required: true
    private _repositoryAccessMode?: string; 
    public get repositoryAccessMode() {
      return this.getStringAttribute('repository_access_mode');
    }
    public set repositoryAccessMode(value: string) {
      this._repositoryAccessMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryAccessModeInput() {
      return this._repositoryAccessMode
    }
  }
  export interface SagemakerModelContainer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
    */
    readonly environment?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * image_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
    */
    readonly imageConfig?: SagemakerModelContainerImageConfig;
  }

  function sagemakerModelContainerToTerraform(struct?: SagemakerModelContainer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
      environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
      image: cdktf.stringToTerraform(struct!.image),
      mode: cdktf.stringToTerraform(struct!.mode),
      model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
      image_config: sagemakerModelContainerImageConfigToTerraform(struct!.imageConfig),
    }
  }

  export interface SagemakerModelInferenceExecutionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
    */
    readonly mode: string;
  }

  function sagemakerModelInferenceExecutionConfigToTerraform(struct?: SagemakerModelInferenceExecutionConfigOutputReference | SagemakerModelInferenceExecutionConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      mode: cdktf.stringToTerraform(struct!.mode),
    }
  }

  export class SagemakerModelInferenceExecutionConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // mode - computed: false, optional: false, required: true
    private _mode?: string; 
    public get mode() {
      return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
      this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
      return this._mode
    }
  }
  export interface SagemakerModelPrimaryContainerImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
    */
    readonly repositoryAccessMode: string;
  }

  function sagemakerModelPrimaryContainerImageConfigToTerraform(struct?: SagemakerModelPrimaryContainerImageConfigOutputReference | SagemakerModelPrimaryContainerImageConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
    }
  }

  export class SagemakerModelPrimaryContainerImageConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // repository_access_mode - computed: false, optional: false, required: true
    private _repositoryAccessMode?: string; 
    public get repositoryAccessMode() {
      return this.getStringAttribute('repository_access_mode');
    }
    public set repositoryAccessMode(value: string) {
      this._repositoryAccessMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryAccessModeInput() {
      return this._repositoryAccessMode
    }
  }
  export interface SagemakerModelPrimaryContainer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
    */
    readonly environment?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * image_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
    */
    readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig;
  }

  function sagemakerModelPrimaryContainerToTerraform(struct?: SagemakerModelPrimaryContainerOutputReference | SagemakerModelPrimaryContainer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
      environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
      image: cdktf.stringToTerraform(struct!.image),
      mode: cdktf.stringToTerraform(struct!.mode),
      model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
      image_config: sagemakerModelPrimaryContainerImageConfigToTerraform(struct!.imageConfig),
    }
  }

  export class SagemakerModelPrimaryContainerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // container_hostname - computed: false, optional: true, required: false
    private _containerHostname?: string | undefined; 
    public get containerHostname() {
      return this.getStringAttribute('container_hostname');
    }
    public set containerHostname(value: string | undefined) {
      this._containerHostname = value;
    }
    public resetContainerHostname() {
      this._containerHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerHostnameInput() {
      return this._containerHostname
    }

    // environment - computed: false, optional: true, required: false
    private _environment?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get environment() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('environment') as any;
    }
    public set environment(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._environment = value;
    }
    public resetEnvironment() {
      this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
      return this._environment
    }

    // image - computed: false, optional: false, required: true
    private _image?: string; 
    public get image() {
      return this.getStringAttribute('image');
    }
    public set image(value: string) {
      this._image = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
      return this._image
    }

    // mode - computed: false, optional: true, required: false
    private _mode?: string | undefined; 
    public get mode() {
      return this.getStringAttribute('mode');
    }
    public set mode(value: string | undefined) {
      this._mode = value;
    }
    public resetMode() {
      this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
      return this._mode
    }

    // model_data_url - computed: false, optional: true, required: false
    private _modelDataUrl?: string | undefined; 
    public get modelDataUrl() {
      return this.getStringAttribute('model_data_url');
    }
    public set modelDataUrl(value: string | undefined) {
      this._modelDataUrl = value;
    }
    public resetModelDataUrl() {
      this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataUrlInput() {
      return this._modelDataUrl
    }

    // image_config - computed: false, optional: true, required: false
    private _imageConfig?: SagemakerModelPrimaryContainerImageConfig | undefined; 
    private __imageConfigOutput = new SagemakerModelPrimaryContainerImageConfigOutputReference(this as any, "image_config", true);
    public get imageConfig() {
      return this.__imageConfigOutput;
    }
    public putImageConfig(value: SagemakerModelPrimaryContainerImageConfig | undefined) {
      this._imageConfig = value;
    }
    public resetImageConfig() {
      this._imageConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigInput() {
      return this._imageConfig
    }
  }
  export interface SagemakerModelVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#security_group_ids SagemakerModel#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#subnets SagemakerModel#subnets}
    */
    readonly subnets: string[];
  }

  function sagemakerModelVpcConfigToTerraform(struct?: SagemakerModelVpcConfigOutputReference | SagemakerModelVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
    }
  }

  export class SagemakerModelVpcConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnets - computed: false, optional: false, required: true
    private _subnets?: string[]; 
    public get subnets() {
      return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
      this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
      return this._subnets
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model}
  */
  export class SagemakerModel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_model";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerModelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_model',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enableNetworkIsolation = config.enableNetworkIsolation;
      this._executionRoleArn = config.executionRoleArn;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._container = config.container;
      this._inferenceExecutionConfig = config.inferenceExecutionConfig;
      this._primaryContainer = config.primaryContainer;
      this._vpcConfig = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // enable_network_isolation - computed: false, optional: true, required: false
    private _enableNetworkIsolation?: boolean | cdktf.IResolvable | undefined; 
    public get enableNetworkIsolation() {
      return this.getBooleanAttribute('enable_network_isolation') as any;
    }
    public set enableNetworkIsolation(value: boolean | cdktf.IResolvable | undefined) {
      this._enableNetworkIsolation = value;
    }
    public resetEnableNetworkIsolation() {
      this._enableNetworkIsolation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableNetworkIsolationInput() {
      return this._enableNetworkIsolation
    }

    // execution_role_arn - computed: false, optional: false, required: true
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
      this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
      return this._executionRoleArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
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

    // container - computed: false, optional: true, required: false
    private _container?: SagemakerModelContainer[] | undefined; 
    public get container() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('container') as any;
    }
    public set container(value: SagemakerModelContainer[] | undefined) {
      this._container = value;
    }
    public resetContainer() {
      this._container = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerInput() {
      return this._container
    }

    // inference_execution_config - computed: false, optional: true, required: false
    private _inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig | undefined; 
    private __inferenceExecutionConfigOutput = new SagemakerModelInferenceExecutionConfigOutputReference(this as any, "inference_execution_config", true);
    public get inferenceExecutionConfig() {
      return this.__inferenceExecutionConfigOutput;
    }
    public putInferenceExecutionConfig(value: SagemakerModelInferenceExecutionConfig | undefined) {
      this._inferenceExecutionConfig = value;
    }
    public resetInferenceExecutionConfig() {
      this._inferenceExecutionConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceExecutionConfigInput() {
      return this._inferenceExecutionConfig
    }

    // primary_container - computed: false, optional: true, required: false
    private _primaryContainer?: SagemakerModelPrimaryContainer | undefined; 
    private __primaryContainerOutput = new SagemakerModelPrimaryContainerOutputReference(this as any, "primary_container", true);
    public get primaryContainer() {
      return this.__primaryContainerOutput;
    }
    public putPrimaryContainer(value: SagemakerModelPrimaryContainer | undefined) {
      this._primaryContainer = value;
    }
    public resetPrimaryContainer() {
      this._primaryContainer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryContainerInput() {
      return this._primaryContainer
    }

    // vpc_config - computed: false, optional: true, required: false
    private _vpcConfig?: SagemakerModelVpcConfig | undefined; 
    private __vpcConfigOutput = new SagemakerModelVpcConfigOutputReference(this as any, "vpc_config", true);
    public get vpcConfig() {
      return this.__vpcConfigOutput;
    }
    public putVpcConfig(value: SagemakerModelVpcConfig | undefined) {
      this._vpcConfig = value;
    }
    public resetVpcConfig() {
      this._vpcConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
      return this._vpcConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enable_network_isolation: cdktf.booleanToTerraform(this._enableNetworkIsolation),
        execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        container: cdktf.listMapper(sagemakerModelContainerToTerraform)(this._container),
        inference_execution_config: sagemakerModelInferenceExecutionConfigToTerraform(this._inferenceExecutionConfig),
        primary_container: sagemakerModelPrimaryContainerToTerraform(this._primaryContainer),
        vpc_config: sagemakerModelVpcConfigToTerraform(this._vpcConfig),
      };
    }
  }
  export interface SagemakerModelPackageGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#model_package_group_description SagemakerModelPackageGroup#model_package_group_description}
    */
    readonly modelPackageGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#model_package_group_name SagemakerModelPackageGroup#model_package_group_name}
    */
    readonly modelPackageGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#tags SagemakerModelPackageGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#tags_all SagemakerModelPackageGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group}
  */
  export class SagemakerModelPackageGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_model_package_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_model_package_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._modelPackageGroupDescription = config.modelPackageGroupDescription;
      this._modelPackageGroupName = config.modelPackageGroupName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // model_package_group_description - computed: false, optional: true, required: false
    private _modelPackageGroupDescription?: string | undefined; 
    public get modelPackageGroupDescription() {
      return this.getStringAttribute('model_package_group_description');
    }
    public set modelPackageGroupDescription(value: string | undefined) {
      this._modelPackageGroupDescription = value;
    }
    public resetModelPackageGroupDescription() {
      this._modelPackageGroupDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageGroupDescriptionInput() {
      return this._modelPackageGroupDescription
    }

    // model_package_group_name - computed: false, optional: false, required: true
    private _modelPackageGroupName?: string; 
    public get modelPackageGroupName() {
      return this.getStringAttribute('model_package_group_name');
    }
    public set modelPackageGroupName(value: string) {
      this._modelPackageGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageGroupNameInput() {
      return this._modelPackageGroupName
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        model_package_group_description: cdktf.stringToTerraform(this._modelPackageGroupDescription),
        model_package_group_name: cdktf.stringToTerraform(this._modelPackageGroupName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SagemakerModelPackageGroupPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html#model_package_group_name SagemakerModelPackageGroupPolicy#model_package_group_name}
    */
    readonly modelPackageGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html#resource_policy SagemakerModelPackageGroupPolicy#resource_policy}
    */
    readonly resourcePolicy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html aws_sagemaker_model_package_group_policy}
  */
  export class SagemakerModelPackageGroupPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_model_package_group_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html aws_sagemaker_model_package_group_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_model_package_group_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._modelPackageGroupName = config.modelPackageGroupName;
      this._resourcePolicy = config.resourcePolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // model_package_group_name - computed: false, optional: false, required: true
    private _modelPackageGroupName?: string; 
    public get modelPackageGroupName() {
      return this.getStringAttribute('model_package_group_name');
    }
    public set modelPackageGroupName(value: string) {
      this._modelPackageGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageGroupNameInput() {
      return this._modelPackageGroupName
    }

    // resource_policy - computed: false, optional: false, required: true
    private _resourcePolicy?: string; 
    public get resourcePolicy() {
      return this.getStringAttribute('resource_policy');
    }
    public set resourcePolicy(value: string) {
      this._resourcePolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
      return this._resourcePolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        model_package_group_name: cdktf.stringToTerraform(this._modelPackageGroupName),
        resource_policy: cdktf.stringToTerraform(this._resourcePolicy),
      };
    }
  }
  export interface SagemakerNotebookInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}
    */
    readonly additionalCodeRepositories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#default_code_repository SagemakerNotebookInstance#default_code_repository}
    */
    readonly defaultCodeRepository?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#direct_internet_access SagemakerNotebookInstance#direct_internet_access}
    */
    readonly directInternetAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#instance_type SagemakerNotebookInstance#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#kms_key_id SagemakerNotebookInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}
    */
    readonly lifecycleConfigName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#name SagemakerNotebookInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#platform_identifier SagemakerNotebookInstance#platform_identifier}
    */
    readonly platformIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#role_arn SagemakerNotebookInstance#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#root_access SagemakerNotebookInstance#root_access}
    */
    readonly rootAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#security_groups SagemakerNotebookInstance#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#subnet_id SagemakerNotebookInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#tags SagemakerNotebookInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#tags_all SagemakerNotebookInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#volume_size SagemakerNotebookInstance#volume_size}
    */
    readonly volumeSize?: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html aws_sagemaker_notebook_instance}
  */
  export class SagemakerNotebookInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_notebook_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html aws_sagemaker_notebook_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_notebook_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._additionalCodeRepositories = config.additionalCodeRepositories;
      this._defaultCodeRepository = config.defaultCodeRepository;
      this._directInternetAccess = config.directInternetAccess;
      this._instanceType = config.instanceType;
      this._kmsKeyId = config.kmsKeyId;
      this._lifecycleConfigName = config.lifecycleConfigName;
      this._name = config.name;
      this._platformIdentifier = config.platformIdentifier;
      this._roleArn = config.roleArn;
      this._rootAccess = config.rootAccess;
      this._securityGroups = config.securityGroups;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._volumeSize = config.volumeSize;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_code_repositories - computed: false, optional: true, required: false
    private _additionalCodeRepositories?: string[] | undefined; 
    public get additionalCodeRepositories() {
      return this.getListAttribute('additional_code_repositories');
    }
    public set additionalCodeRepositories(value: string[] | undefined) {
      this._additionalCodeRepositories = value;
    }
    public resetAdditionalCodeRepositories() {
      this._additionalCodeRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalCodeRepositoriesInput() {
      return this._additionalCodeRepositories
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_code_repository - computed: false, optional: true, required: false
    private _defaultCodeRepository?: string | undefined; 
    public get defaultCodeRepository() {
      return this.getStringAttribute('default_code_repository');
    }
    public set defaultCodeRepository(value: string | undefined) {
      this._defaultCodeRepository = value;
    }
    public resetDefaultCodeRepository() {
      this._defaultCodeRepository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCodeRepositoryInput() {
      return this._defaultCodeRepository
    }

    // direct_internet_access - computed: false, optional: true, required: false
    private _directInternetAccess?: string | undefined; 
    public get directInternetAccess() {
      return this.getStringAttribute('direct_internet_access');
    }
    public set directInternetAccess(value: string | undefined) {
      this._directInternetAccess = value;
    }
    public resetDirectInternetAccess() {
      this._directInternetAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directInternetAccessInput() {
      return this._directInternetAccess
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
      this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // lifecycle_config_name - computed: false, optional: true, required: false
    private _lifecycleConfigName?: string | undefined; 
    public get lifecycleConfigName() {
      return this.getStringAttribute('lifecycle_config_name');
    }
    public set lifecycleConfigName(value: string | undefined) {
      this._lifecycleConfigName = value;
    }
    public resetLifecycleConfigName() {
      this._lifecycleConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigNameInput() {
      return this._lifecycleConfigName
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

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // platform_identifier - computed: true, optional: true, required: false
    private _platformIdentifier?: string | undefined; 
    public get platformIdentifier() {
      return this.getStringAttribute('platform_identifier');
    }
    public set platformIdentifier(value: string | undefined) {
      this._platformIdentifier = value;
    }
    public resetPlatformIdentifier() {
      this._platformIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformIdentifierInput() {
      return this._platformIdentifier
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // root_access - computed: false, optional: true, required: false
    private _rootAccess?: string | undefined; 
    public get rootAccess() {
      return this.getStringAttribute('root_access');
    }
    public set rootAccess(value: string | undefined) {
      this._rootAccess = value;
    }
    public resetRootAccess() {
      this._rootAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootAccessInput() {
      return this._rootAccess
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // subnet_id - computed: false, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
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

    // url - computed: true, optional: false, required: false
    public get url() {
      return this.getStringAttribute('url');
    }

    // volume_size - computed: false, optional: true, required: false
    private _volumeSize?: number | undefined; 
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number | undefined) {
      this._volumeSize = value;
    }
    public resetVolumeSize() {
      this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
      return this._volumeSize
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        additional_code_repositories: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalCodeRepositories),
        default_code_repository: cdktf.stringToTerraform(this._defaultCodeRepository),
        direct_internet_access: cdktf.stringToTerraform(this._directInternetAccess),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        lifecycle_config_name: cdktf.stringToTerraform(this._lifecycleConfigName),
        name: cdktf.stringToTerraform(this._name),
        platform_identifier: cdktf.stringToTerraform(this._platformIdentifier),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        root_access: cdktf.stringToTerraform(this._rootAccess),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        volume_size: cdktf.numberToTerraform(this._volumeSize),
      };
    }
  }
  export interface SagemakerNotebookInstanceLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html#name SagemakerNotebookInstanceLifecycleConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}
    */
    readonly onCreate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}
    */
    readonly onStart?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html aws_sagemaker_notebook_instance_lifecycle_configuration}
  */
  export class SagemakerNotebookInstanceLifecycleConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_notebook_instance_lifecycle_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html aws_sagemaker_notebook_instance_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceLifecycleConfigurationConfig = {}
    */
    public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceLifecycleConfigurationConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_notebook_instance_lifecycle_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._onCreate = config.onCreate;
      this._onStart = config.onStart;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // on_create - computed: false, optional: true, required: false
    private _onCreate?: string | undefined; 
    public get onCreate() {
      return this.getStringAttribute('on_create');
    }
    public set onCreate(value: string | undefined) {
      this._onCreate = value;
    }
    public resetOnCreate() {
      this._onCreate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onCreateInput() {
      return this._onCreate
    }

    // on_start - computed: false, optional: true, required: false
    private _onStart?: string | undefined; 
    public get onStart() {
      return this.getStringAttribute('on_start');
    }
    public set onStart(value: string | undefined) {
      this._onStart = value;
    }
    public resetOnStart() {
      this._onStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onStartInput() {
      return this._onStart
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        on_create: cdktf.stringToTerraform(this._onCreate),
        on_start: cdktf.stringToTerraform(this._onStart),
      };
    }
  }
  export interface SagemakerStudioLifecycleConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}
    */
    readonly studioLifecycleConfigAppType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}
    */
    readonly studioLifecycleConfigContent: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}
    */
    readonly studioLifecycleConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#tags SagemakerStudioLifecycleConfig#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#tags_all SagemakerStudioLifecycleConfig#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config}
  */
  export class SagemakerStudioLifecycleConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_studio_lifecycle_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerStudioLifecycleConfigConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerStudioLifecycleConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_studio_lifecycle_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._studioLifecycleConfigAppType = config.studioLifecycleConfigAppType;
      this._studioLifecycleConfigContent = config.studioLifecycleConfigContent;
      this._studioLifecycleConfigName = config.studioLifecycleConfigName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // studio_lifecycle_config_app_type - computed: false, optional: false, required: true
    private _studioLifecycleConfigAppType?: string; 
    public get studioLifecycleConfigAppType() {
      return this.getStringAttribute('studio_lifecycle_config_app_type');
    }
    public set studioLifecycleConfigAppType(value: string) {
      this._studioLifecycleConfigAppType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioLifecycleConfigAppTypeInput() {
      return this._studioLifecycleConfigAppType
    }

    // studio_lifecycle_config_content - computed: false, optional: false, required: true
    private _studioLifecycleConfigContent?: string; 
    public get studioLifecycleConfigContent() {
      return this.getStringAttribute('studio_lifecycle_config_content');
    }
    public set studioLifecycleConfigContent(value: string) {
      this._studioLifecycleConfigContent = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioLifecycleConfigContentInput() {
      return this._studioLifecycleConfigContent
    }

    // studio_lifecycle_config_name - computed: false, optional: false, required: true
    private _studioLifecycleConfigName?: string; 
    public get studioLifecycleConfigName() {
      return this.getStringAttribute('studio_lifecycle_config_name');
    }
    public set studioLifecycleConfigName(value: string) {
      this._studioLifecycleConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioLifecycleConfigNameInput() {
      return this._studioLifecycleConfigName
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        studio_lifecycle_config_app_type: cdktf.stringToTerraform(this._studioLifecycleConfigAppType),
        studio_lifecycle_config_content: cdktf.stringToTerraform(this._studioLifecycleConfigContent),
        studio_lifecycle_config_name: cdktf.stringToTerraform(this._studioLifecycleConfigName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#domain_id SagemakerUserProfile#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
    */
    readonly singleSignOnUserIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
    */
    readonly singleSignOnUserValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags SagemakerUserProfile#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags_all SagemakerUserProfile#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_profile_name SagemakerUserProfile#user_profile_name}
    */
    readonly userProfileName: string;
    /**
    * user_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_settings SagemakerUserProfile#user_settings}
    */
    readonly userSettings?: SagemakerUserProfileUserSettings;
  }
  export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
  }

  function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    }
  }

  export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // sagemaker_image_arn - computed: false, optional: true, required: false
    private _sagemakerImageArn?: string | undefined; 
    public get sagemakerImageArn() {
      return this.getStringAttribute('sagemaker_image_arn');
    }
    public set sagemakerImageArn(value: string | undefined) {
      this._sagemakerImageArn = value;
    }
    public resetSagemakerImageArn() {
      this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sagemakerImageArnInput() {
      return this._sagemakerImageArn
    }
  }
  export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * default_resource_spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
  }

  function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lifecycleConfigArns),
      default_resource_spec: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    }
  }

  export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lifecycle_config_arns - computed: false, optional: true, required: false
    private _lifecycleConfigArns?: string[] | undefined; 
    public get lifecycleConfigArns() {
      return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[] | undefined) {
      this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
      this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
      return this._lifecycleConfigArns
    }

    // default_resource_spec - computed: false, optional: false, required: true
    private _defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec; 
    private __defaultResourceSpecOutput = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
    public get defaultResourceSpec() {
      return this.__defaultResourceSpecOutput;
    }
    public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
      this._defaultResourceSpec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
      return this._defaultResourceSpec
    }
  }
  export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#app_image_config_name SagemakerUserProfile#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_name SagemakerUserProfile#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_version_number SagemakerUserProfile#image_version_number}
    */
    readonly imageVersionNumber?: number;
  }

  function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
      image_name: cdktf.stringToTerraform(struct!.imageName),
      image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
    }
  }

  export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
  }

  function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    }
  }

  export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // sagemaker_image_arn - computed: false, optional: true, required: false
    private _sagemakerImageArn?: string | undefined; 
    public get sagemakerImageArn() {
      return this.getStringAttribute('sagemaker_image_arn');
    }
    public set sagemakerImageArn(value: string | undefined) {
      this._sagemakerImageArn = value;
    }
    public resetSagemakerImageArn() {
      this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sagemakerImageArnInput() {
      return this._sagemakerImageArn
    }
  }
  export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#custom_image SagemakerUserProfile#custom_image}
    */
    readonly customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[];
    /**
    * default_resource_spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
  }

  function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lifecycleConfigArns),
      custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct!.customImage),
      default_resource_spec: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    }
  }

  export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // lifecycle_config_arns - computed: false, optional: true, required: false
    private _lifecycleConfigArns?: string[] | undefined; 
    public get lifecycleConfigArns() {
      return this.getListAttribute('lifecycle_config_arns');
    }
    public set lifecycleConfigArns(value: string[] | undefined) {
      this._lifecycleConfigArns = value;
    }
    public resetLifecycleConfigArns() {
      this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnsInput() {
      return this._lifecycleConfigArns
    }

    // custom_image - computed: false, optional: true, required: false
    private _customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | undefined; 
    public get customImage() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('custom_image') as any;
    }
    public set customImage(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | undefined) {
      this._customImage = value;
    }
    public resetCustomImage() {
      this._customImage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customImageInput() {
      return this._customImage
    }

    // default_resource_spec - computed: false, optional: false, required: true
    private _defaultResourceSpec?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec; 
    private __defaultResourceSpecOutput = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
    public get defaultResourceSpec() {
      return this.__defaultResourceSpecOutput;
    }
    public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
      this._defaultResourceSpec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
      return this._defaultResourceSpec
    }
  }
  export interface SagemakerUserProfileUserSettingsSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#notebook_output_option SagemakerUserProfile#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_output_path SagemakerUserProfile#s3_output_path}
    */
    readonly s3OutputPath?: string;
  }

  function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettingsOutputReference | SagemakerUserProfileUserSettingsSharingSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
      s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
      s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    }
  }

  export class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // notebook_output_option - computed: false, optional: true, required: false
    private _notebookOutputOption?: string | undefined; 
    public get notebookOutputOption() {
      return this.getStringAttribute('notebook_output_option');
    }
    public set notebookOutputOption(value: string | undefined) {
      this._notebookOutputOption = value;
    }
    public resetNotebookOutputOption() {
      this._notebookOutputOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notebookOutputOptionInput() {
      return this._notebookOutputOption
    }

    // s3_kms_key_id - computed: false, optional: true, required: false
    private _s3KmsKeyId?: string | undefined; 
    public get s3KmsKeyId() {
      return this.getStringAttribute('s3_kms_key_id');
    }
    public set s3KmsKeyId(value: string | undefined) {
      this._s3KmsKeyId = value;
    }
    public resetS3KmsKeyId() {
      this._s3KmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KmsKeyIdInput() {
      return this._s3KmsKeyId
    }

    // s3_output_path - computed: false, optional: true, required: false
    private _s3OutputPath?: string | undefined; 
    public get s3OutputPath() {
      return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string | undefined) {
      this._s3OutputPath = value;
    }
    public resetS3OutputPath() {
      this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
      return this._s3OutputPath
    }
  }
  export interface SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
  }

  function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    }
  }

  export class SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // sagemaker_image_arn - computed: false, optional: true, required: false
    private _sagemakerImageArn?: string | undefined; 
    public get sagemakerImageArn() {
      return this.getStringAttribute('sagemaker_image_arn');
    }
    public set sagemakerImageArn(value: string | undefined) {
      this._sagemakerImageArn = value;
    }
    public resetSagemakerImageArn() {
      this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sagemakerImageArnInput() {
      return this._sagemakerImageArn
    }
  }
  export interface SagemakerUserProfileUserSettingsTensorBoardAppSettings {
    /**
    * default_resource_spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
  }

  function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_resource_spec: sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    }
  }

  export class SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // default_resource_spec - computed: false, optional: false, required: true
    private _defaultResourceSpec?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec; 
    private __defaultResourceSpecOutput = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
    public get defaultResourceSpec() {
      return this.__defaultResourceSpecOutput;
    }
    public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec) {
      this._defaultResourceSpec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResourceSpecInput() {
      return this._defaultResourceSpec
    }
  }
  export interface SagemakerUserProfileUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#execution_role SagemakerUserProfile#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#security_groups SagemakerUserProfile#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * jupyter_server_app_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
    /**
    * sharing_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sharing_settings SagemakerUserProfile#sharing_settings}
    */
    readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
    /**
    * tensor_board_app_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}
    */
    readonly tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings;
  }

  function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsOutputReference | SagemakerUserProfileUserSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      execution_role: cdktf.stringToTerraform(struct!.executionRole),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      jupyter_server_app_settings: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
      kernel_gateway_app_settings: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
      sharing_settings: sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
      tensor_board_app_settings: sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
    }
  }

  export class SagemakerUserProfileUserSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // execution_role - computed: false, optional: false, required: true
    private _executionRole?: string; 
    public get executionRole() {
      return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
      this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
      return this._executionRole
    }

    // security_groups - computed: false, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // jupyter_server_app_settings - computed: false, optional: true, required: false
    private _jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined; 
    private __jupyterServerAppSettingsOutput = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(this as any, "jupyter_server_app_settings", true);
    public get jupyterServerAppSettings() {
      return this.__jupyterServerAppSettingsOutput;
    }
    public putJupyterServerAppSettings(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined) {
      this._jupyterServerAppSettings = value;
    }
    public resetJupyterServerAppSettings() {
      this._jupyterServerAppSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterServerAppSettingsInput() {
      return this._jupyterServerAppSettings
    }

    // kernel_gateway_app_settings - computed: false, optional: true, required: false
    private _kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined; 
    private __kernelGatewayAppSettingsOutput = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(this as any, "kernel_gateway_app_settings", true);
    public get kernelGatewayAppSettings() {
      return this.__kernelGatewayAppSettingsOutput;
    }
    public putKernelGatewayAppSettings(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined) {
      this._kernelGatewayAppSettings = value;
    }
    public resetKernelGatewayAppSettings() {
      this._kernelGatewayAppSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelGatewayAppSettingsInput() {
      return this._kernelGatewayAppSettings
    }

    // sharing_settings - computed: false, optional: true, required: false
    private _sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings | undefined; 
    private __sharingSettingsOutput = new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(this as any, "sharing_settings", true);
    public get sharingSettings() {
      return this.__sharingSettingsOutput;
    }
    public putSharingSettings(value: SagemakerUserProfileUserSettingsSharingSettings | undefined) {
      this._sharingSettings = value;
    }
    public resetSharingSettings() {
      this._sharingSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharingSettingsInput() {
      return this._sharingSettings
    }

    // tensor_board_app_settings - computed: false, optional: true, required: false
    private _tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined; 
    private __tensorBoardAppSettingsOutput = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference(this as any, "tensor_board_app_settings", true);
    public get tensorBoardAppSettings() {
      return this.__tensorBoardAppSettingsOutput;
    }
    public putTensorBoardAppSettings(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined) {
      this._tensorBoardAppSettings = value;
    }
    public resetTensorBoardAppSettings() {
      this._tensorBoardAppSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tensorBoardAppSettingsInput() {
      return this._tensorBoardAppSettings
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile}
  */
  export class SagemakerUserProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_user_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerUserProfileConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_user_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainId = config.domainId;
      this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
      this._singleSignOnUserValue = config.singleSignOnUserValue;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._userProfileName = config.userProfileName;
      this._userSettings = config.userSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_id - computed: false, optional: false, required: true
    private _domainId?: string; 
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

    // home_efs_file_system_uid - computed: true, optional: false, required: false
    public get homeEfsFileSystemUid() {
      return this.getStringAttribute('home_efs_file_system_uid');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // single_sign_on_user_identifier - computed: false, optional: true, required: false
    private _singleSignOnUserIdentifier?: string | undefined; 
    public get singleSignOnUserIdentifier() {
      return this.getStringAttribute('single_sign_on_user_identifier');
    }
    public set singleSignOnUserIdentifier(value: string | undefined) {
      this._singleSignOnUserIdentifier = value;
    }
    public resetSingleSignOnUserIdentifier() {
      this._singleSignOnUserIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleSignOnUserIdentifierInput() {
      return this._singleSignOnUserIdentifier
    }

    // single_sign_on_user_value - computed: false, optional: true, required: false
    private _singleSignOnUserValue?: string | undefined; 
    public get singleSignOnUserValue() {
      return this.getStringAttribute('single_sign_on_user_value');
    }
    public set singleSignOnUserValue(value: string | undefined) {
      this._singleSignOnUserValue = value;
    }
    public resetSingleSignOnUserValue() {
      this._singleSignOnUserValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleSignOnUserValueInput() {
      return this._singleSignOnUserValue
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

    // user_profile_name - computed: false, optional: false, required: true
    private _userProfileName?: string; 
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

    // user_settings - computed: false, optional: true, required: false
    private _userSettings?: SagemakerUserProfileUserSettings | undefined; 
    private __userSettingsOutput = new SagemakerUserProfileUserSettingsOutputReference(this as any, "user_settings", true);
    public get userSettings() {
      return this.__userSettingsOutput;
    }
    public putUserSettings(value: SagemakerUserProfileUserSettings | undefined) {
      this._userSettings = value;
    }
    public resetUserSettings() {
      this._userSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userSettingsInput() {
      return this._userSettings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_id: cdktf.stringToTerraform(this._domainId),
        single_sign_on_user_identifier: cdktf.stringToTerraform(this._singleSignOnUserIdentifier),
        single_sign_on_user_value: cdktf.stringToTerraform(this._singleSignOnUserValue),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user_profile_name: cdktf.stringToTerraform(this._userProfileName),
        user_settings: sagemakerUserProfileUserSettingsToTerraform(this._userSettings),
      };
    }
  }
  export interface SagemakerWorkforceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#workforce_name SagemakerWorkforce#workforce_name}
    */
    readonly workforceName: string;
    /**
    * cognito_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cognito_config SagemakerWorkforce#cognito_config}
    */
    readonly cognitoConfig?: SagemakerWorkforceCognitoConfig;
    /**
    * oidc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#oidc_config SagemakerWorkforce#oidc_config}
    */
    readonly oidcConfig?: SagemakerWorkforceOidcConfig;
    /**
    * source_ip_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#source_ip_config SagemakerWorkforce#source_ip_config}
    */
    readonly sourceIpConfig?: SagemakerWorkforceSourceIpConfig;
  }
  export interface SagemakerWorkforceCognitoConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_pool SagemakerWorkforce#user_pool}
    */
    readonly userPool: string;
  }

  function sagemakerWorkforceCognitoConfigToTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_id: cdktf.stringToTerraform(struct!.clientId),
      user_pool: cdktf.stringToTerraform(struct!.userPool),
    }
  }

  export class SagemakerWorkforceCognitoConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
      this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // user_pool - computed: false, optional: false, required: true
    private _userPool?: string; 
    public get userPool() {
      return this.getStringAttribute('user_pool');
    }
    public set userPool(value: string) {
      this._userPool = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolInput() {
      return this._userPool
    }
  }
  export interface SagemakerWorkforceOidcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#authorization_endpoint SagemakerWorkforce#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_secret SagemakerWorkforce#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#issuer SagemakerWorkforce#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#jwks_uri SagemakerWorkforce#jwks_uri}
    */
    readonly jwksUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#logout_endpoint SagemakerWorkforce#logout_endpoint}
    */
    readonly logoutEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#token_endpoint SagemakerWorkforce#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_info_endpoint SagemakerWorkforce#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
  }

  function sagemakerWorkforceOidcConfigToTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
      client_id: cdktf.stringToTerraform(struct!.clientId),
      client_secret: cdktf.stringToTerraform(struct!.clientSecret),
      issuer: cdktf.stringToTerraform(struct!.issuer),
      jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
      logout_endpoint: cdktf.stringToTerraform(struct!.logoutEndpoint),
      token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
      user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
    }
  }

  export class SagemakerWorkforceOidcConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // authorization_endpoint - computed: false, optional: false, required: true
    private _authorizationEndpoint?: string; 
    public get authorizationEndpoint() {
      return this.getStringAttribute('authorization_endpoint');
    }
    public set authorizationEndpoint(value: string) {
      this._authorizationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationEndpointInput() {
      return this._authorizationEndpoint
    }

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
      this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // client_secret - computed: false, optional: false, required: true
    private _clientSecret?: string; 
    public get clientSecret() {
      return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
      this._clientSecret = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
      return this._clientSecret
    }

    // issuer - computed: false, optional: false, required: true
    private _issuer?: string; 
    public get issuer() {
      return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
      this._issuer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
      return this._issuer
    }

    // jwks_uri - computed: false, optional: false, required: true
    private _jwksUri?: string; 
    public get jwksUri() {
      return this.getStringAttribute('jwks_uri');
    }
    public set jwksUri(value: string) {
      this._jwksUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jwksUriInput() {
      return this._jwksUri
    }

    // logout_endpoint - computed: false, optional: false, required: true
    private _logoutEndpoint?: string; 
    public get logoutEndpoint() {
      return this.getStringAttribute('logout_endpoint');
    }
    public set logoutEndpoint(value: string) {
      this._logoutEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logoutEndpointInput() {
      return this._logoutEndpoint
    }

    // token_endpoint - computed: false, optional: false, required: true
    private _tokenEndpoint?: string; 
    public get tokenEndpoint() {
      return this.getStringAttribute('token_endpoint');
    }
    public set tokenEndpoint(value: string) {
      this._tokenEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenEndpointInput() {
      return this._tokenEndpoint
    }

    // user_info_endpoint - computed: false, optional: false, required: true
    private _userInfoEndpoint?: string; 
    public get userInfoEndpoint() {
      return this.getStringAttribute('user_info_endpoint');
    }
    public set userInfoEndpoint(value: string) {
      this._userInfoEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInfoEndpointInput() {
      return this._userInfoEndpoint
    }
  }
  export interface SagemakerWorkforceSourceIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cidrs SagemakerWorkforce#cidrs}
    */
    readonly cidrs: string[];
  }

  function sagemakerWorkforceSourceIpConfigToTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
    }
  }

  export class SagemakerWorkforceSourceIpConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cidrs - computed: false, optional: false, required: true
    private _cidrs?: string[]; 
    public get cidrs() {
      return this.getListAttribute('cidrs');
    }
    public set cidrs(value: string[]) {
      this._cidrs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrsInput() {
      return this._cidrs
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce}
  */
  export class SagemakerWorkforce extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_workforce";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkforceConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerWorkforceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_workforce',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._workforceName = config.workforceName;
      this._cognitoConfig = config.cognitoConfig;
      this._oidcConfig = config.oidcConfig;
      this._sourceIpConfig = config.sourceIpConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // subdomain - computed: true, optional: false, required: false
    public get subdomain() {
      return this.getStringAttribute('subdomain');
    }

    // workforce_name - computed: false, optional: false, required: true
    private _workforceName?: string; 
    public get workforceName() {
      return this.getStringAttribute('workforce_name');
    }
    public set workforceName(value: string) {
      this._workforceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workforceNameInput() {
      return this._workforceName
    }

    // cognito_config - computed: false, optional: true, required: false
    private _cognitoConfig?: SagemakerWorkforceCognitoConfig | undefined; 
    private __cognitoConfigOutput = new SagemakerWorkforceCognitoConfigOutputReference(this as any, "cognito_config", true);
    public get cognitoConfig() {
      return this.__cognitoConfigOutput;
    }
    public putCognitoConfig(value: SagemakerWorkforceCognitoConfig | undefined) {
      this._cognitoConfig = value;
    }
    public resetCognitoConfig() {
      this._cognitoConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoConfigInput() {
      return this._cognitoConfig
    }

    // oidc_config - computed: false, optional: true, required: false
    private _oidcConfig?: SagemakerWorkforceOidcConfig | undefined; 
    private __oidcConfigOutput = new SagemakerWorkforceOidcConfigOutputReference(this as any, "oidc_config", true);
    public get oidcConfig() {
      return this.__oidcConfigOutput;
    }
    public putOidcConfig(value: SagemakerWorkforceOidcConfig | undefined) {
      this._oidcConfig = value;
    }
    public resetOidcConfig() {
      this._oidcConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcConfigInput() {
      return this._oidcConfig
    }

    // source_ip_config - computed: false, optional: true, required: false
    private _sourceIpConfig?: SagemakerWorkforceSourceIpConfig | undefined; 
    private __sourceIpConfigOutput = new SagemakerWorkforceSourceIpConfigOutputReference(this as any, "source_ip_config", true);
    public get sourceIpConfig() {
      return this.__sourceIpConfigOutput;
    }
    public putSourceIpConfig(value: SagemakerWorkforceSourceIpConfig | undefined) {
      this._sourceIpConfig = value;
    }
    public resetSourceIpConfig() {
      this._sourceIpConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIpConfigInput() {
      return this._sourceIpConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        workforce_name: cdktf.stringToTerraform(this._workforceName),
        cognito_config: sagemakerWorkforceCognitoConfigToTerraform(this._cognitoConfig),
        oidc_config: sagemakerWorkforceOidcConfigToTerraform(this._oidcConfig),
        source_ip_config: sagemakerWorkforceSourceIpConfigToTerraform(this._sourceIpConfig),
      };
    }
  }
  export interface SagemakerWorkteamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#description SagemakerWorkteam#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#tags SagemakerWorkteam#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#tags_all SagemakerWorkteam#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#workforce_name SagemakerWorkteam#workforce_name}
    */
    readonly workforceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#workteam_name SagemakerWorkteam#workteam_name}
    */
    readonly workteamName: string;
    /**
    * member_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#member_definition SagemakerWorkteam#member_definition}
    */
    readonly memberDefinition: SagemakerWorkteamMemberDefinition[];
    /**
    * notification_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#notification_configuration SagemakerWorkteam#notification_configuration}
    */
    readonly notificationConfiguration?: SagemakerWorkteamNotificationConfiguration;
  }
  export interface SagemakerWorkteamMemberDefinitionCognitoMemberDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#client_id SagemakerWorkteam#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#user_group SagemakerWorkteam#user_group}
    */
    readonly userGroup: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#user_pool SagemakerWorkteam#user_pool}
    */
    readonly userPool: string;
  }

  function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_id: cdktf.stringToTerraform(struct!.clientId),
      user_group: cdktf.stringToTerraform(struct!.userGroup),
      user_pool: cdktf.stringToTerraform(struct!.userPool),
    }
  }

  export class SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
      this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // user_group - computed: false, optional: false, required: true
    private _userGroup?: string; 
    public get userGroup() {
      return this.getStringAttribute('user_group');
    }
    public set userGroup(value: string) {
      this._userGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userGroupInput() {
      return this._userGroup
    }

    // user_pool - computed: false, optional: false, required: true
    private _userPool?: string; 
    public get userPool() {
      return this.getStringAttribute('user_pool');
    }
    public set userPool(value: string) {
      this._userPool = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolInput() {
      return this._userPool
    }
  }
  export interface SagemakerWorkteamMemberDefinitionOidcMemberDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#groups SagemakerWorkteam#groups}
    */
    readonly groups: string[];
  }

  function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionOidcMemberDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    }
  }

  export class SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // groups - computed: false, optional: false, required: true
    private _groups?: string[]; 
    public get groups() {
      return this.getListAttribute('groups');
    }
    public set groups(value: string[]) {
      this._groups = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
      return this._groups
    }
  }
  export interface SagemakerWorkteamMemberDefinition {
    /**
    * cognito_member_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#cognito_member_definition SagemakerWorkteam#cognito_member_definition}
    */
    readonly cognitoMemberDefinition?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
    /**
    * oidc_member_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#oidc_member_definition SagemakerWorkteam#oidc_member_definition}
    */
    readonly oidcMemberDefinition?: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
  }

  function sagemakerWorkteamMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cognito_member_definition: sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct!.cognitoMemberDefinition),
      oidc_member_definition: sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct!.oidcMemberDefinition),
    }
  }

  export interface SagemakerWorkteamNotificationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#notification_topic_arn SagemakerWorkteam#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
  }

  function sagemakerWorkteamNotificationConfigurationToTerraform(struct?: SagemakerWorkteamNotificationConfigurationOutputReference | SagemakerWorkteamNotificationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      notification_topic_arn: cdktf.stringToTerraform(struct!.notificationTopicArn),
    }
  }

  export class SagemakerWorkteamNotificationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // notification_topic_arn - computed: false, optional: true, required: false
    private _notificationTopicArn?: string | undefined; 
    public get notificationTopicArn() {
      return this.getStringAttribute('notification_topic_arn');
    }
    public set notificationTopicArn(value: string | undefined) {
      this._notificationTopicArn = value;
    }
    public resetNotificationTopicArn() {
      this._notificationTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTopicArnInput() {
      return this._notificationTopicArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam}
  */
  export class SagemakerWorkteam extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_workteam";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkteamConfig
    */
    public constructor(scope: Construct, id: string, config: SagemakerWorkteamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_workteam',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._workforceName = config.workforceName;
      this._workteamName = config.workteamName;
      this._memberDefinition = config.memberDefinition;
      this._notificationConfiguration = config.notificationConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string) {
      this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // subdomain - computed: true, optional: false, required: false
    public get subdomain() {
      return this.getStringAttribute('subdomain');
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

    // workforce_name - computed: false, optional: false, required: true
    private _workforceName?: string; 
    public get workforceName() {
      return this.getStringAttribute('workforce_name');
    }
    public set workforceName(value: string) {
      this._workforceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workforceNameInput() {
      return this._workforceName
    }

    // workteam_name - computed: false, optional: false, required: true
    private _workteamName?: string; 
    public get workteamName() {
      return this.getStringAttribute('workteam_name');
    }
    public set workteamName(value: string) {
      this._workteamName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workteamNameInput() {
      return this._workteamName
    }

    // member_definition - computed: false, optional: false, required: true
    private _memberDefinition?: SagemakerWorkteamMemberDefinition[]; 
    public get memberDefinition() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('member_definition') as any;
    }
    public set memberDefinition(value: SagemakerWorkteamMemberDefinition[]) {
      this._memberDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberDefinitionInput() {
      return this._memberDefinition
    }

    // notification_configuration - computed: false, optional: true, required: false
    private _notificationConfiguration?: SagemakerWorkteamNotificationConfiguration | undefined; 
    private __notificationConfigurationOutput = new SagemakerWorkteamNotificationConfigurationOutputReference(this as any, "notification_configuration", true);
    public get notificationConfiguration() {
      return this.__notificationConfigurationOutput;
    }
    public putNotificationConfiguration(value: SagemakerWorkteamNotificationConfiguration | undefined) {
      this._notificationConfiguration = value;
    }
    public resetNotificationConfiguration() {
      this._notificationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationInput() {
      return this._notificationConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        workforce_name: cdktf.stringToTerraform(this._workforceName),
        workteam_name: cdktf.stringToTerraform(this._workteamName),
        member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionToTerraform)(this._memberDefinition),
        notification_configuration: sagemakerWorkteamNotificationConfigurationToTerraform(this._notificationConfiguration),
      };
    }
  }
  export interface DataAwsSagemakerPrebuiltEcrImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}
    */
    readonly dnsSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}
    */
    readonly imageTag?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#region DataAwsSagemakerPrebuiltEcrImage#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}
    */
    readonly repositoryName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image}
  */
  export class DataAwsSagemakerPrebuiltEcrImage extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sagemaker_prebuilt_ecr_image";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSagemakerPrebuiltEcrImageConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSagemakerPrebuiltEcrImageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sagemaker_prebuilt_ecr_image',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dnsSuffix = config.dnsSuffix;
      this._imageTag = config.imageTag;
      this._region = config.region;
      this._repositoryName = config.repositoryName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dns_suffix - computed: false, optional: true, required: false
    private _dnsSuffix?: string | undefined; 
    public get dnsSuffix() {
      return this.getStringAttribute('dns_suffix');
    }
    public set dnsSuffix(value: string | undefined) {
      this._dnsSuffix = value;
    }
    public resetDnsSuffix() {
      this._dnsSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsSuffixInput() {
      return this._dnsSuffix
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_tag - computed: false, optional: true, required: false
    private _imageTag?: string | undefined; 
    public get imageTag() {
      return this.getStringAttribute('image_tag');
    }
    public set imageTag(value: string | undefined) {
      this._imageTag = value;
    }
    public resetImageTag() {
      this._imageTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagInput() {
      return this._imageTag
    }

    // region - computed: false, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
      return this.getStringAttribute('registry_id');
    }

    // registry_path - computed: true, optional: false, required: false
    public get registryPath() {
      return this.getStringAttribute('registry_path');
    }

    // repository_name - computed: false, optional: false, required: true
    private _repositoryName?: string; 
    public get repositoryName() {
      return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
      this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
      return this._repositoryName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
        image_tag: cdktf.stringToTerraform(this._imageTag),
        region: cdktf.stringToTerraform(this._region),
        repository_name: cdktf.stringToTerraform(this._repositoryName),
      };
    }
  }
}
