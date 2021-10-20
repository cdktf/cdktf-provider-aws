// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeBuild
*/
export namespace CodeBuild {
  export interface CodebuildProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#badge_enabled CodebuildProject#badge_enabled}
    */
    readonly badgeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_timeout CodebuildProject#build_timeout}
    */
    readonly buildTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#concurrent_build_limit CodebuildProject#concurrent_build_limit}
    */
    readonly concurrentBuildLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#description CodebuildProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_key CodebuildProject#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#queued_timeout CodebuildProject#queued_timeout}
    */
    readonly queuedTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_version CodebuildProject#source_version}
    */
    readonly sourceVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags CodebuildProject#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags_all CodebuildProject#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * artifacts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifacts CodebuildProject#artifacts}
    */
    readonly artifacts: CodebuildProjectArtifacts;
    /**
    * build_batch_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_batch_config CodebuildProject#build_batch_config}
    */
    readonly buildBatchConfig?: CodebuildProjectBuildBatchConfig;
    /**
    * cache block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cache CodebuildProject#cache}
    */
    readonly cache?: CodebuildProjectCache;
    /**
    * environment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment CodebuildProject#environment}
    */
    readonly environment: CodebuildProjectEnvironment;
    /**
    * file_system_locations block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#file_system_locations CodebuildProject#file_system_locations}
    */
    readonly fileSystemLocations?: CodebuildProjectFileSystemLocations[];
    /**
    * logs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#logs_config CodebuildProject#logs_config}
    */
    readonly logsConfig?: CodebuildProjectLogsConfig;
    /**
    * secondary_artifacts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_artifacts CodebuildProject#secondary_artifacts}
    */
    readonly secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
    /**
    * secondary_sources block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_sources CodebuildProject#secondary_sources}
    */
    readonly secondarySources?: CodebuildProjectSecondarySources[];
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source CodebuildProject#source}
    */
    readonly source: CodebuildProjectSource;
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_config CodebuildProject#vpc_config}
    */
    readonly vpcConfig?: CodebuildProjectVpcConfig;
  }
  export interface CodebuildProjectArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectArtifactsToTerraform(struct?: CodebuildProjectArtifactsOutputReference | CodebuildProjectArtifacts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      artifact_identifier: cdktf.stringToTerraform(struct!.artifactIdentifier),
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      location: cdktf.stringToTerraform(struct!.location),
      name: cdktf.stringToTerraform(struct!.name),
      namespace_type: cdktf.stringToTerraform(struct!.namespaceType),
      override_artifact_name: cdktf.booleanToTerraform(struct!.overrideArtifactName),
      packaging: cdktf.stringToTerraform(struct!.packaging),
      path: cdktf.stringToTerraform(struct!.path),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class CodebuildProjectArtifactsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // artifact_identifier - computed: false, optional: true, required: false
    private _artifactIdentifier?: string | undefined; 
    public get artifactIdentifier() {
      return this.getStringAttribute('artifact_identifier');
    }
    public set artifactIdentifier(value: string | undefined) {
      this._artifactIdentifier = value;
    }
    public resetArtifactIdentifier() {
      this._artifactIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactIdentifierInput() {
      return this._artifactIdentifier
    }

    // encryption_disabled - computed: false, optional: true, required: false
    private _encryptionDisabled?: boolean | cdktf.IResolvable | undefined; 
    public get encryptionDisabled() {
      return this.getBooleanAttribute('encryption_disabled') as any;
    }
    public set encryptionDisabled(value: boolean | cdktf.IResolvable | undefined) {
      this._encryptionDisabled = value;
    }
    public resetEncryptionDisabled() {
      this._encryptionDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionDisabledInput() {
      return this._encryptionDisabled
    }

    // location - computed: false, optional: true, required: false
    private _location?: string | undefined; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string | undefined) {
      this._location = value;
    }
    public resetLocation() {
      this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
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

    // namespace_type - computed: false, optional: true, required: false
    private _namespaceType?: string | undefined; 
    public get namespaceType() {
      return this.getStringAttribute('namespace_type');
    }
    public set namespaceType(value: string | undefined) {
      this._namespaceType = value;
    }
    public resetNamespaceType() {
      this._namespaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceTypeInput() {
      return this._namespaceType
    }

    // override_artifact_name - computed: false, optional: true, required: false
    private _overrideArtifactName?: boolean | cdktf.IResolvable | undefined; 
    public get overrideArtifactName() {
      return this.getBooleanAttribute('override_artifact_name') as any;
    }
    public set overrideArtifactName(value: boolean | cdktf.IResolvable | undefined) {
      this._overrideArtifactName = value;
    }
    public resetOverrideArtifactName() {
      this._overrideArtifactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideArtifactNameInput() {
      return this._overrideArtifactName
    }

    // packaging - computed: false, optional: true, required: false
    private _packaging?: string | undefined; 
    public get packaging() {
      return this.getStringAttribute('packaging');
    }
    public set packaging(value: string | undefined) {
      this._packaging = value;
    }
    public resetPackaging() {
      this._packaging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packagingInput() {
      return this._packaging
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface CodebuildProjectBuildBatchConfigRestrictions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_types_allowed CodebuildProject#compute_types_allowed}
    */
    readonly computeTypesAllowed?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}
    */
    readonly maximumBuildsAllowed?: number;
  }

  function codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct?: CodebuildProjectBuildBatchConfigRestrictionsOutputReference | CodebuildProjectBuildBatchConfigRestrictions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      compute_types_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.computeTypesAllowed),
      maximum_builds_allowed: cdktf.numberToTerraform(struct!.maximumBuildsAllowed),
    }
  }

  export class CodebuildProjectBuildBatchConfigRestrictionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // compute_types_allowed - computed: false, optional: true, required: false
    private _computeTypesAllowed?: string[] | undefined; 
    public get computeTypesAllowed() {
      return this.getListAttribute('compute_types_allowed');
    }
    public set computeTypesAllowed(value: string[] | undefined) {
      this._computeTypesAllowed = value;
    }
    public resetComputeTypesAllowed() {
      this._computeTypesAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeTypesAllowedInput() {
      return this._computeTypesAllowed
    }

    // maximum_builds_allowed - computed: false, optional: true, required: false
    private _maximumBuildsAllowed?: number | undefined; 
    public get maximumBuildsAllowed() {
      return this.getNumberAttribute('maximum_builds_allowed');
    }
    public set maximumBuildsAllowed(value: number | undefined) {
      this._maximumBuildsAllowed = value;
    }
    public resetMaximumBuildsAllowed() {
      this._maximumBuildsAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBuildsAllowedInput() {
      return this._maximumBuildsAllowed
    }
  }
  export interface CodebuildProjectBuildBatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#combine_artifacts CodebuildProject#combine_artifacts}
    */
    readonly combineArtifacts?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#timeout_in_mins CodebuildProject#timeout_in_mins}
    */
    readonly timeoutInMins?: number;
    /**
    * restrictions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#restrictions CodebuildProject#restrictions}
    */
    readonly restrictions?: CodebuildProjectBuildBatchConfigRestrictions;
  }

  function codebuildProjectBuildBatchConfigToTerraform(struct?: CodebuildProjectBuildBatchConfigOutputReference | CodebuildProjectBuildBatchConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      combine_artifacts: cdktf.booleanToTerraform(struct!.combineArtifacts),
      service_role: cdktf.stringToTerraform(struct!.serviceRole),
      timeout_in_mins: cdktf.numberToTerraform(struct!.timeoutInMins),
      restrictions: codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct!.restrictions),
    }
  }

  export class CodebuildProjectBuildBatchConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // combine_artifacts - computed: false, optional: true, required: false
    private _combineArtifacts?: boolean | cdktf.IResolvable | undefined; 
    public get combineArtifacts() {
      return this.getBooleanAttribute('combine_artifacts') as any;
    }
    public set combineArtifacts(value: boolean | cdktf.IResolvable | undefined) {
      this._combineArtifacts = value;
    }
    public resetCombineArtifacts() {
      this._combineArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get combineArtifactsInput() {
      return this._combineArtifacts
    }

    // service_role - computed: false, optional: false, required: true
    private _serviceRole?: string; 
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
      this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
      return this._serviceRole
    }

    // timeout_in_mins - computed: false, optional: true, required: false
    private _timeoutInMins?: number | undefined; 
    public get timeoutInMins() {
      return this.getNumberAttribute('timeout_in_mins');
    }
    public set timeoutInMins(value: number | undefined) {
      this._timeoutInMins = value;
    }
    public resetTimeoutInMins() {
      this._timeoutInMins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinsInput() {
      return this._timeoutInMins
    }

    // restrictions - computed: false, optional: true, required: false
    private _restrictions?: CodebuildProjectBuildBatchConfigRestrictions | undefined; 
    private __restrictionsOutput = new CodebuildProjectBuildBatchConfigRestrictionsOutputReference(this as any, "restrictions", true);
    public get restrictions() {
      return this.__restrictionsOutput;
    }
    public putRestrictions(value: CodebuildProjectBuildBatchConfigRestrictions | undefined) {
      this._restrictions = value;
    }
    public resetRestrictions() {
      this._restrictions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionsInput() {
      return this._restrictions
    }
  }
  export interface CodebuildProjectCache {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#modes CodebuildProject#modes}
    */
    readonly modes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
  }

  function codebuildProjectCacheToTerraform(struct?: CodebuildProjectCacheOutputReference | CodebuildProjectCache): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      location: cdktf.stringToTerraform(struct!.location),
      modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modes),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class CodebuildProjectCacheOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // location - computed: false, optional: true, required: false
    private _location?: string | undefined; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string | undefined) {
      this._location = value;
    }
    public resetLocation() {
      this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // modes - computed: false, optional: true, required: false
    private _modes?: string[] | undefined; 
    public get modes() {
      return this.getListAttribute('modes');
    }
    public set modes(value: string[] | undefined) {
      this._modes = value;
    }
    public resetModes() {
      this._modes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modesInput() {
      return this._modes
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface CodebuildProjectEnvironmentEnvironmentVariable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#value CodebuildProject#value}
    */
    readonly value: string;
  }

  function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CodebuildProjectEnvironmentRegistryCredential {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential CodebuildProject#credential}
    */
    readonly credential: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential_provider CodebuildProject#credential_provider}
    */
    readonly credentialProvider: string;
  }

  function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct?: CodebuildProjectEnvironmentRegistryCredentialOutputReference | CodebuildProjectEnvironmentRegistryCredential): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      credential: cdktf.stringToTerraform(struct!.credential),
      credential_provider: cdktf.stringToTerraform(struct!.credentialProvider),
    }
  }

  export class CodebuildProjectEnvironmentRegistryCredentialOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // credential - computed: false, optional: false, required: true
    private _credential?: string; 
    public get credential() {
      return this.getStringAttribute('credential');
    }
    public set credential(value: string) {
      this._credential = value;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialInput() {
      return this._credential
    }

    // credential_provider - computed: false, optional: false, required: true
    private _credentialProvider?: string; 
    public get credentialProvider() {
      return this.getStringAttribute('credential_provider');
    }
    public set credentialProvider(value: string) {
      this._credentialProvider = value;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderInput() {
      return this._credentialProvider
    }
  }
  export interface CodebuildProjectEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#certificate CodebuildProject#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_type CodebuildProject#compute_type}
    */
    readonly computeType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image CodebuildProject#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}
    */
    readonly imagePullCredentialsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#privileged_mode CodebuildProject#privileged_mode}
    */
    readonly privilegedMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * environment_variable block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment_variable CodebuildProject#environment_variable}
    */
    readonly environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[];
    /**
    * registry_credential block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#registry_credential CodebuildProject#registry_credential}
    */
    readonly registryCredential?: CodebuildProjectEnvironmentRegistryCredential;
  }

  function codebuildProjectEnvironmentToTerraform(struct?: CodebuildProjectEnvironmentOutputReference | CodebuildProjectEnvironment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate: cdktf.stringToTerraform(struct!.certificate),
      compute_type: cdktf.stringToTerraform(struct!.computeType),
      image: cdktf.stringToTerraform(struct!.image),
      image_pull_credentials_type: cdktf.stringToTerraform(struct!.imagePullCredentialsType),
      privileged_mode: cdktf.booleanToTerraform(struct!.privilegedMode),
      type: cdktf.stringToTerraform(struct!.type),
      environment_variable: cdktf.listMapper(codebuildProjectEnvironmentEnvironmentVariableToTerraform)(struct!.environmentVariable),
      registry_credential: codebuildProjectEnvironmentRegistryCredentialToTerraform(struct!.registryCredential),
    }
  }

  export class CodebuildProjectEnvironmentOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate - computed: false, optional: true, required: false
    private _certificate?: string | undefined; 
    public get certificate() {
      return this.getStringAttribute('certificate');
    }
    public set certificate(value: string | undefined) {
      this._certificate = value;
    }
    public resetCertificate() {
      this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // compute_type - computed: false, optional: false, required: true
    private _computeType?: string; 
    public get computeType() {
      return this.getStringAttribute('compute_type');
    }
    public set computeType(value: string) {
      this._computeType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeTypeInput() {
      return this._computeType
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

    // image_pull_credentials_type - computed: false, optional: true, required: false
    private _imagePullCredentialsType?: string | undefined; 
    public get imagePullCredentialsType() {
      return this.getStringAttribute('image_pull_credentials_type');
    }
    public set imagePullCredentialsType(value: string | undefined) {
      this._imagePullCredentialsType = value;
    }
    public resetImagePullCredentialsType() {
      this._imagePullCredentialsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imagePullCredentialsTypeInput() {
      return this._imagePullCredentialsType
    }

    // privileged_mode - computed: false, optional: true, required: false
    private _privilegedMode?: boolean | cdktf.IResolvable | undefined; 
    public get privilegedMode() {
      return this.getBooleanAttribute('privileged_mode') as any;
    }
    public set privilegedMode(value: boolean | cdktf.IResolvable | undefined) {
      this._privilegedMode = value;
    }
    public resetPrivilegedMode() {
      this._privilegedMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privilegedModeInput() {
      return this._privilegedMode
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // environment_variable - computed: false, optional: true, required: false
    private _environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[] | undefined; 
    public get environmentVariable() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('environment_variable') as any;
    }
    public set environmentVariable(value: CodebuildProjectEnvironmentEnvironmentVariable[] | undefined) {
      this._environmentVariable = value;
    }
    public resetEnvironmentVariable() {
      this._environmentVariable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariableInput() {
      return this._environmentVariable
    }

    // registry_credential - computed: false, optional: true, required: false
    private _registryCredential?: CodebuildProjectEnvironmentRegistryCredential | undefined; 
    private __registryCredentialOutput = new CodebuildProjectEnvironmentRegistryCredentialOutputReference(this as any, "registry_credential", true);
    public get registryCredential() {
      return this.__registryCredentialOutput;
    }
    public putRegistryCredential(value: CodebuildProjectEnvironmentRegistryCredential | undefined) {
      this._registryCredential = value;
    }
    public resetRegistryCredential() {
      this._registryCredential = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryCredentialInput() {
      return this._registryCredential
    }
  }
  export interface CodebuildProjectFileSystemLocations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#identifier CodebuildProject#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_options CodebuildProject#mount_options}
    */
    readonly mountOptions?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_point CodebuildProject#mount_point}
    */
    readonly mountPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
  }

  function codebuildProjectFileSystemLocationsToTerraform(struct?: CodebuildProjectFileSystemLocations): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      identifier: cdktf.stringToTerraform(struct!.identifier),
      location: cdktf.stringToTerraform(struct!.location),
      mount_options: cdktf.stringToTerraform(struct!.mountOptions),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectLogsConfigCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#group_name CodebuildProject#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#stream_name CodebuildProject#stream_name}
    */
    readonly streamName?: string;
  }

  function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogsOutputReference | CodebuildProjectLogsConfigCloudwatchLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      group_name: cdktf.stringToTerraform(struct!.groupName),
      status: cdktf.stringToTerraform(struct!.status),
      stream_name: cdktf.stringToTerraform(struct!.streamName),
    }
  }

  export class CodebuildProjectLogsConfigCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // group_name - computed: false, optional: true, required: false
    private _groupName?: string | undefined; 
    public get groupName() {
      return this.getStringAttribute('group_name');
    }
    public set groupName(value: string | undefined) {
      this._groupName = value;
    }
    public resetGroupName() {
      this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
      return this._groupName
    }

    // status - computed: false, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // stream_name - computed: false, optional: true, required: false
    private _streamName?: string | undefined; 
    public get streamName() {
      return this.getStringAttribute('stream_name');
    }
    public set streamName(value: string | undefined) {
      this._streamName = value;
    }
    public resetStreamName() {
      this._streamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamNameInput() {
      return this._streamName
    }
  }
  export interface CodebuildProjectLogsConfigS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}
    */
    readonly status?: string;
  }

  function codebuildProjectLogsConfigS3LogsToTerraform(struct?: CodebuildProjectLogsConfigS3LogsOutputReference | CodebuildProjectLogsConfigS3Logs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      location: cdktf.stringToTerraform(struct!.location),
      status: cdktf.stringToTerraform(struct!.status),
    }
  }

  export class CodebuildProjectLogsConfigS3LogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // encryption_disabled - computed: false, optional: true, required: false
    private _encryptionDisabled?: boolean | cdktf.IResolvable | undefined; 
    public get encryptionDisabled() {
      return this.getBooleanAttribute('encryption_disabled') as any;
    }
    public set encryptionDisabled(value: boolean | cdktf.IResolvable | undefined) {
      this._encryptionDisabled = value;
    }
    public resetEncryptionDisabled() {
      this._encryptionDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionDisabledInput() {
      return this._encryptionDisabled
    }

    // location - computed: false, optional: true, required: false
    private _location?: string | undefined; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string | undefined) {
      this._location = value;
    }
    public resetLocation() {
      this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // status - computed: false, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }
  }
  export interface CodebuildProjectLogsConfig {
    /**
    * cloudwatch_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cloudwatch_logs CodebuildProject#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs;
    /**
    * s3_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#s3_logs CodebuildProject#s3_logs}
    */
    readonly s3Logs?: CodebuildProjectLogsConfigS3Logs;
  }

  function codebuildProjectLogsConfigToTerraform(struct?: CodebuildProjectLogsConfigOutputReference | CodebuildProjectLogsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudwatch_logs: codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
      s3_logs: codebuildProjectLogsConfigS3LogsToTerraform(struct!.s3Logs),
    }
  }

  export class CodebuildProjectLogsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudwatch_logs - computed: false, optional: true, required: false
    private _cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs | undefined; 
    private __cloudwatchLogsOutput = new CodebuildProjectLogsConfigCloudwatchLogsOutputReference(this as any, "cloudwatch_logs", true);
    public get cloudwatchLogs() {
      return this.__cloudwatchLogsOutput;
    }
    public putCloudwatchLogs(value: CodebuildProjectLogsConfigCloudwatchLogs | undefined) {
      this._cloudwatchLogs = value;
    }
    public resetCloudwatchLogs() {
      this._cloudwatchLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
      return this._cloudwatchLogs
    }

    // s3_logs - computed: false, optional: true, required: false
    private _s3Logs?: CodebuildProjectLogsConfigS3Logs | undefined; 
    private __s3LogsOutput = new CodebuildProjectLogsConfigS3LogsOutputReference(this as any, "s3_logs", true);
    public get s3Logs() {
      return this.__s3LogsOutput;
    }
    public putS3Logs(value: CodebuildProjectLogsConfigS3Logs | undefined) {
      this._s3Logs = value;
    }
    public resetS3Logs() {
      this._s3Logs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LogsInput() {
      return this._s3Logs
    }
  }
  export interface CodebuildProjectSecondaryArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectSecondaryArtifactsToTerraform(struct?: CodebuildProjectSecondaryArtifacts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      artifact_identifier: cdktf.stringToTerraform(struct!.artifactIdentifier),
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      location: cdktf.stringToTerraform(struct!.location),
      name: cdktf.stringToTerraform(struct!.name),
      namespace_type: cdktf.stringToTerraform(struct!.namespaceType),
      override_artifact_name: cdktf.booleanToTerraform(struct!.overrideArtifactName),
      packaging: cdktf.stringToTerraform(struct!.packaging),
      path: cdktf.stringToTerraform(struct!.path),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectSecondarySourcesAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectSecondarySourcesAuthToTerraform(struct?: CodebuildProjectSecondarySourcesAuthOutputReference | CodebuildProjectSecondarySourcesAuth): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource: cdktf.stringToTerraform(struct!.resource),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class CodebuildProjectSecondarySourcesAuthOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource - computed: false, optional: true, required: false
    private _resource?: string | undefined; 
    public get resource() {
      return this.getStringAttribute('resource');
    }
    public set resource(value: string | undefined) {
      this._resource = value;
    }
    public resetResource() {
      this._resource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
      return this._resource
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface CodebuildProjectSecondarySourcesBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
  }

  function codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct?: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference | CodebuildProjectSecondarySourcesBuildStatusConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      context: cdktf.stringToTerraform(struct!.context),
      target_url: cdktf.stringToTerraform(struct!.targetUrl),
    }
  }

  export class CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // context - computed: false, optional: true, required: false
    private _context?: string | undefined; 
    public get context() {
      return this.getStringAttribute('context');
    }
    public set context(value: string | undefined) {
      this._context = value;
    }
    public resetContext() {
      this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextInput() {
      return this._context
    }

    // target_url - computed: false, optional: true, required: false
    private _targetUrl?: string | undefined; 
    public get targetUrl() {
      return this.getStringAttribute('target_url');
    }
    public set targetUrl(value: string | undefined) {
      this._targetUrl = value;
    }
    public resetTargetUrl() {
      this._targetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetUrlInput() {
      return this._targetUrl
    }
  }
  export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
  }

  function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference | CodebuildProjectSecondarySourcesGitSubmodulesConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
    }
  }

  export class CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // fetch_submodules - computed: false, optional: false, required: true
    private _fetchSubmodules?: boolean | cdktf.IResolvable; 
    public get fetchSubmodules() {
      return this.getBooleanAttribute('fetch_submodules') as any;
    }
    public set fetchSubmodules(value: boolean | cdktf.IResolvable) {
      this._fetchSubmodules = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchSubmodulesInput() {
      return this._fetchSubmodules
    }
  }
  export interface CodebuildProjectSecondarySources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_identifier CodebuildProject#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * auth block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
    */
    readonly auth?: CodebuildProjectSecondarySourcesAuth;
    /**
    * build_status_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSecondarySourcesBuildStatusConfig;
    /**
    * git_submodules_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSecondarySourcesGitSubmodulesConfig;
  }

  function codebuildProjectSecondarySourcesToTerraform(struct?: CodebuildProjectSecondarySources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      buildspec: cdktf.stringToTerraform(struct!.buildspec),
      git_clone_depth: cdktf.numberToTerraform(struct!.gitCloneDepth),
      insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
      location: cdktf.stringToTerraform(struct!.location),
      report_build_status: cdktf.booleanToTerraform(struct!.reportBuildStatus),
      source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
      type: cdktf.stringToTerraform(struct!.type),
      auth: codebuildProjectSecondarySourcesAuthToTerraform(struct!.auth),
      build_status_config: codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct!.buildStatusConfig),
      git_submodules_config: codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct!.gitSubmodulesConfig),
    }
  }

  export interface CodebuildProjectSourceAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectSourceAuthToTerraform(struct?: CodebuildProjectSourceAuthOutputReference | CodebuildProjectSourceAuth): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource: cdktf.stringToTerraform(struct!.resource),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class CodebuildProjectSourceAuthOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resource - computed: false, optional: true, required: false
    private _resource?: string | undefined; 
    public get resource() {
      return this.getStringAttribute('resource');
    }
    public set resource(value: string | undefined) {
      this._resource = value;
    }
    public resetResource() {
      this._resource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
      return this._resource
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface CodebuildProjectSourceBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
  }

  function codebuildProjectSourceBuildStatusConfigToTerraform(struct?: CodebuildProjectSourceBuildStatusConfigOutputReference | CodebuildProjectSourceBuildStatusConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      context: cdktf.stringToTerraform(struct!.context),
      target_url: cdktf.stringToTerraform(struct!.targetUrl),
    }
  }

  export class CodebuildProjectSourceBuildStatusConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // context - computed: false, optional: true, required: false
    private _context?: string | undefined; 
    public get context() {
      return this.getStringAttribute('context');
    }
    public set context(value: string | undefined) {
      this._context = value;
    }
    public resetContext() {
      this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextInput() {
      return this._context
    }

    // target_url - computed: false, optional: true, required: false
    private _targetUrl?: string | undefined; 
    public get targetUrl() {
      return this.getStringAttribute('target_url');
    }
    public set targetUrl(value: string | undefined) {
      this._targetUrl = value;
    }
    public resetTargetUrl() {
      this._targetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetUrlInput() {
      return this._targetUrl
    }
  }
  export interface CodebuildProjectSourceGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
  }

  function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfigOutputReference | CodebuildProjectSourceGitSubmodulesConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
    }
  }

  export class CodebuildProjectSourceGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // fetch_submodules - computed: false, optional: false, required: true
    private _fetchSubmodules?: boolean | cdktf.IResolvable; 
    public get fetchSubmodules() {
      return this.getBooleanAttribute('fetch_submodules') as any;
    }
    public set fetchSubmodules(value: boolean | cdktf.IResolvable) {
      this._fetchSubmodules = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchSubmodulesInput() {
      return this._fetchSubmodules
    }
  }
  export interface CodebuildProjectSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * auth block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
    */
    readonly auth?: CodebuildProjectSourceAuth;
    /**
    * build_status_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSourceBuildStatusConfig;
    /**
    * git_submodules_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig;
  }

  function codebuildProjectSourceToTerraform(struct?: CodebuildProjectSourceOutputReference | CodebuildProjectSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      buildspec: cdktf.stringToTerraform(struct!.buildspec),
      git_clone_depth: cdktf.numberToTerraform(struct!.gitCloneDepth),
      insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
      location: cdktf.stringToTerraform(struct!.location),
      report_build_status: cdktf.booleanToTerraform(struct!.reportBuildStatus),
      type: cdktf.stringToTerraform(struct!.type),
      auth: codebuildProjectSourceAuthToTerraform(struct!.auth),
      build_status_config: codebuildProjectSourceBuildStatusConfigToTerraform(struct!.buildStatusConfig),
      git_submodules_config: codebuildProjectSourceGitSubmodulesConfigToTerraform(struct!.gitSubmodulesConfig),
    }
  }

  export class CodebuildProjectSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // buildspec - computed: false, optional: true, required: false
    private _buildspec?: string | undefined; 
    public get buildspec() {
      return this.getStringAttribute('buildspec');
    }
    public set buildspec(value: string | undefined) {
      this._buildspec = value;
    }
    public resetBuildspec() {
      this._buildspec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildspecInput() {
      return this._buildspec
    }

    // git_clone_depth - computed: false, optional: true, required: false
    private _gitCloneDepth?: number | undefined; 
    public get gitCloneDepth() {
      return this.getNumberAttribute('git_clone_depth');
    }
    public set gitCloneDepth(value: number | undefined) {
      this._gitCloneDepth = value;
    }
    public resetGitCloneDepth() {
      this._gitCloneDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitCloneDepthInput() {
      return this._gitCloneDepth
    }

    // insecure_ssl - computed: false, optional: true, required: false
    private _insecureSsl?: boolean | cdktf.IResolvable | undefined; 
    public get insecureSsl() {
      return this.getBooleanAttribute('insecure_ssl') as any;
    }
    public set insecureSsl(value: boolean | cdktf.IResolvable | undefined) {
      this._insecureSsl = value;
    }
    public resetInsecureSsl() {
      this._insecureSsl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insecureSslInput() {
      return this._insecureSsl
    }

    // location - computed: false, optional: true, required: false
    private _location?: string | undefined; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string | undefined) {
      this._location = value;
    }
    public resetLocation() {
      this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // report_build_status - computed: false, optional: true, required: false
    private _reportBuildStatus?: boolean | cdktf.IResolvable | undefined; 
    public get reportBuildStatus() {
      return this.getBooleanAttribute('report_build_status') as any;
    }
    public set reportBuildStatus(value: boolean | cdktf.IResolvable | undefined) {
      this._reportBuildStatus = value;
    }
    public resetReportBuildStatus() {
      this._reportBuildStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportBuildStatusInput() {
      return this._reportBuildStatus
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // auth - computed: false, optional: true, required: false
    private _auth?: CodebuildProjectSourceAuth | undefined; 
    private __authOutput = new CodebuildProjectSourceAuthOutputReference(this as any, "auth", true);
    public get auth() {
      return this.__authOutput;
    }
    public putAuth(value: CodebuildProjectSourceAuth | undefined) {
      this._auth = value;
    }
    public resetAuth() {
      this._auth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authInput() {
      return this._auth
    }

    // build_status_config - computed: false, optional: true, required: false
    private _buildStatusConfig?: CodebuildProjectSourceBuildStatusConfig | undefined; 
    private __buildStatusConfigOutput = new CodebuildProjectSourceBuildStatusConfigOutputReference(this as any, "build_status_config", true);
    public get buildStatusConfig() {
      return this.__buildStatusConfigOutput;
    }
    public putBuildStatusConfig(value: CodebuildProjectSourceBuildStatusConfig | undefined) {
      this._buildStatusConfig = value;
    }
    public resetBuildStatusConfig() {
      this._buildStatusConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildStatusConfigInput() {
      return this._buildStatusConfig
    }

    // git_submodules_config - computed: false, optional: true, required: false
    private _gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig | undefined; 
    private __gitSubmodulesConfigOutput = new CodebuildProjectSourceGitSubmodulesConfigOutputReference(this as any, "git_submodules_config", true);
    public get gitSubmodulesConfig() {
      return this.__gitSubmodulesConfigOutput;
    }
    public putGitSubmodulesConfig(value: CodebuildProjectSourceGitSubmodulesConfig | undefined) {
      this._gitSubmodulesConfig = value;
    }
    public resetGitSubmodulesConfig() {
      this._gitSubmodulesConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitSubmodulesConfigInput() {
      return this._gitSubmodulesConfig
    }
  }
  export interface CodebuildProjectVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#security_group_ids CodebuildProject#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#subnets CodebuildProject#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_id CodebuildProject#vpc_id}
    */
    readonly vpcId: string;
  }

  function codebuildProjectVpcConfigToTerraform(struct?: CodebuildProjectVpcConfigOutputReference | CodebuildProjectVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }

  export class CodebuildProjectVpcConfigOutputReference extends cdktf.ComplexObject {
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project}
  */
  export class CodebuildProject extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_project";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildProjectConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildProjectConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_project',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._badgeEnabled = config.badgeEnabled;
      this._buildTimeout = config.buildTimeout;
      this._concurrentBuildLimit = config.concurrentBuildLimit;
      this._description = config.description;
      this._encryptionKey = config.encryptionKey;
      this._name = config.name;
      this._queuedTimeout = config.queuedTimeout;
      this._serviceRole = config.serviceRole;
      this._sourceVersion = config.sourceVersion;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._artifacts = config.artifacts;
      this._buildBatchConfig = config.buildBatchConfig;
      this._cache = config.cache;
      this._environment = config.environment;
      this._fileSystemLocations = config.fileSystemLocations;
      this._logsConfig = config.logsConfig;
      this._secondaryArtifacts = config.secondaryArtifacts;
      this._secondarySources = config.secondarySources;
      this._source = config.source;
      this._vpcConfig = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // badge_enabled - computed: false, optional: true, required: false
    private _badgeEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get badgeEnabled() {
      return this.getBooleanAttribute('badge_enabled') as any;
    }
    public set badgeEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._badgeEnabled = value;
    }
    public resetBadgeEnabled() {
      this._badgeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get badgeEnabledInput() {
      return this._badgeEnabled
    }

    // badge_url - computed: true, optional: false, required: false
    public get badgeUrl() {
      return this.getStringAttribute('badge_url');
    }

    // build_timeout - computed: false, optional: true, required: false
    private _buildTimeout?: number | undefined; 
    public get buildTimeout() {
      return this.getNumberAttribute('build_timeout');
    }
    public set buildTimeout(value: number | undefined) {
      this._buildTimeout = value;
    }
    public resetBuildTimeout() {
      this._buildTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildTimeoutInput() {
      return this._buildTimeout
    }

    // concurrent_build_limit - computed: false, optional: true, required: false
    private _concurrentBuildLimit?: number | undefined; 
    public get concurrentBuildLimit() {
      return this.getNumberAttribute('concurrent_build_limit');
    }
    public set concurrentBuildLimit(value: number | undefined) {
      this._concurrentBuildLimit = value;
    }
    public resetConcurrentBuildLimit() {
      this._concurrentBuildLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrentBuildLimitInput() {
      return this._concurrentBuildLimit
    }

    // description - computed: true, optional: true, required: false
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

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey?: string | undefined; 
    public get encryptionKey() {
      return this.getStringAttribute('encryption_key');
    }
    public set encryptionKey(value: string | undefined) {
      this._encryptionKey = value;
    }
    public resetEncryptionKey() {
      this._encryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
      return this._encryptionKey
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

    // queued_timeout - computed: false, optional: true, required: false
    private _queuedTimeout?: number | undefined; 
    public get queuedTimeout() {
      return this.getNumberAttribute('queued_timeout');
    }
    public set queuedTimeout(value: number | undefined) {
      this._queuedTimeout = value;
    }
    public resetQueuedTimeout() {
      this._queuedTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queuedTimeoutInput() {
      return this._queuedTimeout
    }

    // service_role - computed: false, optional: false, required: true
    private _serviceRole?: string; 
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
      this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
      return this._serviceRole
    }

    // source_version - computed: false, optional: true, required: false
    private _sourceVersion?: string | undefined; 
    public get sourceVersion() {
      return this.getStringAttribute('source_version');
    }
    public set sourceVersion(value: string | undefined) {
      this._sourceVersion = value;
    }
    public resetSourceVersion() {
      this._sourceVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceVersionInput() {
      return this._sourceVersion
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

    // artifacts - computed: false, optional: false, required: true
    private _artifacts?: CodebuildProjectArtifacts; 
    private __artifactsOutput = new CodebuildProjectArtifactsOutputReference(this as any, "artifacts", true);
    public get artifacts() {
      return this.__artifactsOutput;
    }
    public putArtifacts(value: CodebuildProjectArtifacts) {
      this._artifacts = value;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactsInput() {
      return this._artifacts
    }

    // build_batch_config - computed: false, optional: true, required: false
    private _buildBatchConfig?: CodebuildProjectBuildBatchConfig | undefined; 
    private __buildBatchConfigOutput = new CodebuildProjectBuildBatchConfigOutputReference(this as any, "build_batch_config", true);
    public get buildBatchConfig() {
      return this.__buildBatchConfigOutput;
    }
    public putBuildBatchConfig(value: CodebuildProjectBuildBatchConfig | undefined) {
      this._buildBatchConfig = value;
    }
    public resetBuildBatchConfig() {
      this._buildBatchConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildBatchConfigInput() {
      return this._buildBatchConfig
    }

    // cache - computed: false, optional: true, required: false
    private _cache?: CodebuildProjectCache | undefined; 
    private __cacheOutput = new CodebuildProjectCacheOutputReference(this as any, "cache", true);
    public get cache() {
      return this.__cacheOutput;
    }
    public putCache(value: CodebuildProjectCache | undefined) {
      this._cache = value;
    }
    public resetCache() {
      this._cache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheInput() {
      return this._cache
    }

    // environment - computed: false, optional: false, required: true
    private _environment?: CodebuildProjectEnvironment; 
    private __environmentOutput = new CodebuildProjectEnvironmentOutputReference(this as any, "environment", true);
    public get environment() {
      return this.__environmentOutput;
    }
    public putEnvironment(value: CodebuildProjectEnvironment) {
      this._environment = value;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
      return this._environment
    }

    // file_system_locations - computed: false, optional: true, required: false
    private _fileSystemLocations?: CodebuildProjectFileSystemLocations[] | undefined; 
    public get fileSystemLocations() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('file_system_locations') as any;
    }
    public set fileSystemLocations(value: CodebuildProjectFileSystemLocations[] | undefined) {
      this._fileSystemLocations = value;
    }
    public resetFileSystemLocations() {
      this._fileSystemLocations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemLocationsInput() {
      return this._fileSystemLocations
    }

    // logs_config - computed: false, optional: true, required: false
    private _logsConfig?: CodebuildProjectLogsConfig | undefined; 
    private __logsConfigOutput = new CodebuildProjectLogsConfigOutputReference(this as any, "logs_config", true);
    public get logsConfig() {
      return this.__logsConfigOutput;
    }
    public putLogsConfig(value: CodebuildProjectLogsConfig | undefined) {
      this._logsConfig = value;
    }
    public resetLogsConfig() {
      this._logsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logsConfigInput() {
      return this._logsConfig
    }

    // secondary_artifacts - computed: false, optional: true, required: false
    private _secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[] | undefined; 
    public get secondaryArtifacts() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secondary_artifacts') as any;
    }
    public set secondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[] | undefined) {
      this._secondaryArtifacts = value;
    }
    public resetSecondaryArtifacts() {
      this._secondaryArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryArtifactsInput() {
      return this._secondaryArtifacts
    }

    // secondary_sources - computed: false, optional: true, required: false
    private _secondarySources?: CodebuildProjectSecondarySources[] | undefined; 
    public get secondarySources() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secondary_sources') as any;
    }
    public set secondarySources(value: CodebuildProjectSecondarySources[] | undefined) {
      this._secondarySources = value;
    }
    public resetSecondarySources() {
      this._secondarySources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondarySourcesInput() {
      return this._secondarySources
    }

    // source - computed: false, optional: false, required: true
    private _source?: CodebuildProjectSource; 
    private __sourceOutput = new CodebuildProjectSourceOutputReference(this as any, "source", true);
    public get source() {
      return this.__sourceOutput;
    }
    public putSource(value: CodebuildProjectSource) {
      this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // vpc_config - computed: false, optional: true, required: false
    private _vpcConfig?: CodebuildProjectVpcConfig | undefined; 
    private __vpcConfigOutput = new CodebuildProjectVpcConfigOutputReference(this as any, "vpc_config", true);
    public get vpcConfig() {
      return this.__vpcConfigOutput;
    }
    public putVpcConfig(value: CodebuildProjectVpcConfig | undefined) {
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
        badge_enabled: cdktf.booleanToTerraform(this._badgeEnabled),
        build_timeout: cdktf.numberToTerraform(this._buildTimeout),
        concurrent_build_limit: cdktf.numberToTerraform(this._concurrentBuildLimit),
        description: cdktf.stringToTerraform(this._description),
        encryption_key: cdktf.stringToTerraform(this._encryptionKey),
        name: cdktf.stringToTerraform(this._name),
        queued_timeout: cdktf.numberToTerraform(this._queuedTimeout),
        service_role: cdktf.stringToTerraform(this._serviceRole),
        source_version: cdktf.stringToTerraform(this._sourceVersion),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        artifacts: codebuildProjectArtifactsToTerraform(this._artifacts),
        build_batch_config: codebuildProjectBuildBatchConfigToTerraform(this._buildBatchConfig),
        cache: codebuildProjectCacheToTerraform(this._cache),
        environment: codebuildProjectEnvironmentToTerraform(this._environment),
        file_system_locations: cdktf.listMapper(codebuildProjectFileSystemLocationsToTerraform)(this._fileSystemLocations),
        logs_config: codebuildProjectLogsConfigToTerraform(this._logsConfig),
        secondary_artifacts: cdktf.listMapper(codebuildProjectSecondaryArtifactsToTerraform)(this._secondaryArtifacts),
        secondary_sources: cdktf.listMapper(codebuildProjectSecondarySourcesToTerraform)(this._secondarySources),
        source: codebuildProjectSourceToTerraform(this._source),
        vpc_config: codebuildProjectVpcConfigToTerraform(this._vpcConfig),
      };
    }
  }
  export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#delete_reports CodebuildReportGroup#delete_reports}
    */
    readonly deleteReports?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#name CodebuildReportGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags CodebuildReportGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags_all CodebuildReportGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * export_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#export_config CodebuildReportGroup#export_config}
    */
    readonly exportConfig: CodebuildReportGroupExportConfig;
  }
  export interface CodebuildReportGroupExportConfigS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#bucket CodebuildReportGroup#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_disabled CodebuildReportGroup#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_key CodebuildReportGroup#encryption_key}
    */
    readonly encryptionKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#packaging CodebuildReportGroup#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#path CodebuildReportGroup#path}
    */
    readonly path?: string;
  }

  function codebuildReportGroupExportConfigS3DestinationToTerraform(struct?: CodebuildReportGroupExportConfigS3DestinationOutputReference | CodebuildReportGroupExportConfigS3Destination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
      packaging: cdktf.stringToTerraform(struct!.packaging),
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export class CodebuildReportGroupExportConfigS3DestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
      this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // encryption_disabled - computed: false, optional: true, required: false
    private _encryptionDisabled?: boolean | cdktf.IResolvable | undefined; 
    public get encryptionDisabled() {
      return this.getBooleanAttribute('encryption_disabled') as any;
    }
    public set encryptionDisabled(value: boolean | cdktf.IResolvable | undefined) {
      this._encryptionDisabled = value;
    }
    public resetEncryptionDisabled() {
      this._encryptionDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionDisabledInput() {
      return this._encryptionDisabled
    }

    // encryption_key - computed: false, optional: false, required: true
    private _encryptionKey?: string; 
    public get encryptionKey() {
      return this.getStringAttribute('encryption_key');
    }
    public set encryptionKey(value: string) {
      this._encryptionKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
      return this._encryptionKey
    }

    // packaging - computed: false, optional: true, required: false
    private _packaging?: string | undefined; 
    public get packaging() {
      return this.getStringAttribute('packaging');
    }
    public set packaging(value: string | undefined) {
      this._packaging = value;
    }
    public resetPackaging() {
      this._packaging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packagingInput() {
      return this._packaging
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }
  }
  export interface CodebuildReportGroupExportConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * s3_destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#s3_destination CodebuildReportGroup#s3_destination}
    */
    readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination;
  }

  function codebuildReportGroupExportConfigToTerraform(struct?: CodebuildReportGroupExportConfigOutputReference | CodebuildReportGroupExportConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      s3_destination: codebuildReportGroupExportConfigS3DestinationToTerraform(struct!.s3Destination),
    }
  }

  export class CodebuildReportGroupExportConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // s3_destination - computed: false, optional: true, required: false
    private _s3Destination?: CodebuildReportGroupExportConfigS3Destination | undefined; 
    private __s3DestinationOutput = new CodebuildReportGroupExportConfigS3DestinationOutputReference(this as any, "s3_destination", true);
    public get s3Destination() {
      return this.__s3DestinationOutput;
    }
    public putS3Destination(value: CodebuildReportGroupExportConfigS3Destination | undefined) {
      this._s3Destination = value;
    }
    public resetS3Destination() {
      this._s3Destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DestinationInput() {
      return this._s3Destination
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group}
  */
  export class CodebuildReportGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_report_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildReportGroupConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildReportGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_report_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deleteReports = config.deleteReports;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._exportConfig = config.exportConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created - computed: true, optional: false, required: false
    public get created() {
      return this.getStringAttribute('created');
    }

    // delete_reports - computed: false, optional: true, required: false
    private _deleteReports?: boolean | cdktf.IResolvable | undefined; 
    public get deleteReports() {
      return this.getBooleanAttribute('delete_reports') as any;
    }
    public set deleteReports(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteReports = value;
    }
    public resetDeleteReports() {
      this._deleteReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteReportsInput() {
      return this._deleteReports
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

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // export_config - computed: false, optional: false, required: true
    private _exportConfig?: CodebuildReportGroupExportConfig; 
    private __exportConfigOutput = new CodebuildReportGroupExportConfigOutputReference(this as any, "export_config", true);
    public get exportConfig() {
      return this.__exportConfigOutput;
    }
    public putExportConfig(value: CodebuildReportGroupExportConfig) {
      this._exportConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exportConfigInput() {
      return this._exportConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        delete_reports: cdktf.booleanToTerraform(this._deleteReports),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        export_config: codebuildReportGroupExportConfigToTerraform(this._exportConfig),
      };
    }
  }
  export interface CodebuildSourceCredentialConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#auth_type CodebuildSourceCredential#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#server_type CodebuildSourceCredential#server_type}
    */
    readonly serverType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#token CodebuildSourceCredential#token}
    */
    readonly token: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#user_name CodebuildSourceCredential#user_name}
    */
    readonly userName?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential}
  */
  export class CodebuildSourceCredential extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_source_credential";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildSourceCredentialConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildSourceCredentialConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_source_credential',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._authType = config.authType;
      this._serverType = config.serverType;
      this._token = config.token;
      this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auth_type - computed: false, optional: false, required: true
    private _authType?: string; 
    public get authType() {
      return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
      this._authType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
      return this._authType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // server_type - computed: false, optional: false, required: true
    private _serverType?: string; 
    public get serverType() {
      return this.getStringAttribute('server_type');
    }
    public set serverType(value: string) {
      this._serverType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverTypeInput() {
      return this._serverType
    }

    // token - computed: false, optional: false, required: true
    private _token?: string; 
    public get token() {
      return this.getStringAttribute('token');
    }
    public set token(value: string) {
      this._token = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenInput() {
      return this._token
    }

    // user_name - computed: false, optional: true, required: false
    private _userName?: string | undefined; 
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string | undefined) {
      this._userName = value;
    }
    public resetUserName() {
      this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auth_type: cdktf.stringToTerraform(this._authType),
        server_type: cdktf.stringToTerraform(this._serverType),
        token: cdktf.stringToTerraform(this._token),
        user_name: cdktf.stringToTerraform(this._userName),
      };
    }
  }
  export interface CodebuildWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#branch_filter CodebuildWebhook#branch_filter}
    */
    readonly branchFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#build_type CodebuildWebhook#build_type}
    */
    readonly buildType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#project_name CodebuildWebhook#project_name}
    */
    readonly projectName: string;
    /**
    * filter_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter_group CodebuildWebhook#filter_group}
    */
    readonly filterGroup?: CodebuildWebhookFilterGroup[];
  }
  export interface CodebuildWebhookFilterGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}
    */
    readonly excludeMatchedPattern?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#pattern CodebuildWebhook#pattern}
    */
    readonly pattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#type CodebuildWebhook#type}
    */
    readonly type: string;
  }

  function codebuildWebhookFilterGroupFilterToTerraform(struct?: CodebuildWebhookFilterGroupFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exclude_matched_pattern: cdktf.booleanToTerraform(struct!.excludeMatchedPattern),
      pattern: cdktf.stringToTerraform(struct!.pattern),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildWebhookFilterGroup {
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter CodebuildWebhook#filter}
    */
    readonly filter?: CodebuildWebhookFilterGroupFilter[];
  }

  function codebuildWebhookFilterGroupToTerraform(struct?: CodebuildWebhookFilterGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      filter: cdktf.listMapper(codebuildWebhookFilterGroupFilterToTerraform)(struct!.filter),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}
  */
  export class CodebuildWebhook extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_webhook";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildWebhookConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildWebhookConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_webhook',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._branchFilter = config.branchFilter;
      this._buildType = config.buildType;
      this._projectName = config.projectName;
      this._filterGroup = config.filterGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // branch_filter - computed: false, optional: true, required: false
    private _branchFilter?: string | undefined; 
    public get branchFilter() {
      return this.getStringAttribute('branch_filter');
    }
    public set branchFilter(value: string | undefined) {
      this._branchFilter = value;
    }
    public resetBranchFilter() {
      this._branchFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchFilterInput() {
      return this._branchFilter
    }

    // build_type - computed: false, optional: true, required: false
    private _buildType?: string | undefined; 
    public get buildType() {
      return this.getStringAttribute('build_type');
    }
    public set buildType(value: string | undefined) {
      this._buildType = value;
    }
    public resetBuildType() {
      this._buildType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildTypeInput() {
      return this._buildType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // payload_url - computed: true, optional: false, required: false
    public get payloadUrl() {
      return this.getStringAttribute('payload_url');
    }

    // project_name - computed: false, optional: false, required: true
    private _projectName?: string; 
    public get projectName() {
      return this.getStringAttribute('project_name');
    }
    public set projectName(value: string) {
      this._projectName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectNameInput() {
      return this._projectName
    }

    // secret - computed: true, optional: false, required: false
    public get secret() {
      return this.getStringAttribute('secret');
    }

    // url - computed: true, optional: false, required: false
    public get url() {
      return this.getStringAttribute('url');
    }

    // filter_group - computed: false, optional: true, required: false
    private _filterGroup?: CodebuildWebhookFilterGroup[] | undefined; 
    public get filterGroup() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter_group') as any;
    }
    public set filterGroup(value: CodebuildWebhookFilterGroup[] | undefined) {
      this._filterGroup = value;
    }
    public resetFilterGroup() {
      this._filterGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterGroupInput() {
      return this._filterGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        branch_filter: cdktf.stringToTerraform(this._branchFilter),
        build_type: cdktf.stringToTerraform(this._buildType),
        project_name: cdktf.stringToTerraform(this._projectName),
        filter_group: cdktf.listMapper(codebuildWebhookFilterGroupToTerraform)(this._filterGroup),
      };
    }
  }
}
