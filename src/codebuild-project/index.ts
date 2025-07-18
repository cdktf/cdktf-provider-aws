/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#badge_enabled CodebuildProject#badge_enabled}
  */
  readonly badgeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#build_timeout CodebuildProject#build_timeout}
  */
  readonly buildTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}
  */
  readonly concurrentBuildLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#description CodebuildProject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#encryption_key CodebuildProject#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#id CodebuildProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#name CodebuildProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#project_visibility CodebuildProject#project_visibility}
  */
  readonly projectVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#queued_timeout CodebuildProject#queued_timeout}
  */
  readonly queuedTimeout?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#region CodebuildProject#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#resource_access_role CodebuildProject#resource_access_role}
  */
  readonly resourceAccessRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#service_role CodebuildProject#service_role}
  */
  readonly serviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#source_version CodebuildProject#source_version}
  */
  readonly sourceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#tags CodebuildProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#tags_all CodebuildProject#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#artifacts CodebuildProject#artifacts}
  */
  readonly artifacts: CodebuildProjectArtifacts;
  /**
  * build_batch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#build_batch_config CodebuildProject#build_batch_config}
  */
  readonly buildBatchConfig?: CodebuildProjectBuildBatchConfig;
  /**
  * cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#cache CodebuildProject#cache}
  */
  readonly cache?: CodebuildProjectCache;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#environment CodebuildProject#environment}
  */
  readonly environment: CodebuildProjectEnvironment;
  /**
  * file_system_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#file_system_locations CodebuildProject#file_system_locations}
  */
  readonly fileSystemLocations?: CodebuildProjectFileSystemLocations[] | cdktf.IResolvable;
  /**
  * logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#logs_config CodebuildProject#logs_config}
  */
  readonly logsConfig?: CodebuildProjectLogsConfig;
  /**
  * secondary_artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#secondary_artifacts CodebuildProject#secondary_artifacts}
  */
  readonly secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[] | cdktf.IResolvable;
  /**
  * secondary_source_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#secondary_source_version CodebuildProject#secondary_source_version}
  */
  readonly secondarySourceVersion?: CodebuildProjectSecondarySourceVersion[] | cdktf.IResolvable;
  /**
  * secondary_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#secondary_sources CodebuildProject#secondary_sources}
  */
  readonly secondarySources?: CodebuildProjectSecondarySources[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#source CodebuildProject#source}
  */
  readonly source: CodebuildProjectSource;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#vpc_config CodebuildProject#vpc_config}
  */
  readonly vpcConfig?: CodebuildProjectVpcConfig;
}
export interface CodebuildProjectArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}
  */
  readonly artifactIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}
  */
  readonly bucketOwnerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#location CodebuildProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#name CodebuildProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}
  */
  readonly namespaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}
  */
  readonly overrideArtifactName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#packaging CodebuildProject#packaging}
  */
  readonly packaging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#path CodebuildProject#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type: string;
}

export function codebuildProjectArtifactsToTerraform(struct?: CodebuildProjectArtifactsOutputReference | CodebuildProjectArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_identifier: cdktf.stringToTerraform(struct!.artifactIdentifier),
    bucket_owner_access: cdktf.stringToTerraform(struct!.bucketOwnerAccess),
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


export function codebuildProjectArtifactsToHclTerraform(struct?: CodebuildProjectArtifactsOutputReference | CodebuildProjectArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_identifier: {
      value: cdktf.stringToHclTerraform(struct!.artifactIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner_access: {
      value: cdktf.stringToHclTerraform(struct!.bucketOwnerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_type: {
      value: cdktf.stringToHclTerraform(struct!.namespaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_artifact_name: {
      value: cdktf.booleanToHclTerraform(struct!.overrideArtifactName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    packaging: {
      value: cdktf.stringToHclTerraform(struct!.packaging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactIdentifier = this._artifactIdentifier;
    }
    if (this._bucketOwnerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccess = this._bucketOwnerAccess;
    }
    if (this._encryptionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDisabled = this._encryptionDisabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceType = this._namespaceType;
    }
    if (this._overrideArtifactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideArtifactName = this._overrideArtifactName;
    }
    if (this._packaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.packaging = this._packaging;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactIdentifier = undefined;
      this._bucketOwnerAccess = undefined;
      this._encryptionDisabled = undefined;
      this._location = undefined;
      this._name = undefined;
      this._namespaceType = undefined;
      this._overrideArtifactName = undefined;
      this._packaging = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactIdentifier = value.artifactIdentifier;
      this._bucketOwnerAccess = value.bucketOwnerAccess;
      this._encryptionDisabled = value.encryptionDisabled;
      this._location = value.location;
      this._name = value.name;
      this._namespaceType = value.namespaceType;
      this._overrideArtifactName = value.overrideArtifactName;
      this._packaging = value.packaging;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // artifact_identifier - computed: false, optional: true, required: false
  private _artifactIdentifier?: string; 
  public get artifactIdentifier() {
    return this.getStringAttribute('artifact_identifier');
  }
  public set artifactIdentifier(value: string) {
    this._artifactIdentifier = value;
  }
  public resetArtifactIdentifier() {
    this._artifactIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdentifierInput() {
    return this._artifactIdentifier;
  }

  // bucket_owner_access - computed: false, optional: true, required: false
  private _bucketOwnerAccess?: string; 
  public get bucketOwnerAccess() {
    return this.getStringAttribute('bucket_owner_access');
  }
  public set bucketOwnerAccess(value: string) {
    this._bucketOwnerAccess = value;
  }
  public resetBucketOwnerAccess() {
    this._bucketOwnerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccessInput() {
    return this._bucketOwnerAccess;
  }

  // encryption_disabled - computed: false, optional: true, required: false
  private _encryptionDisabled?: boolean | cdktf.IResolvable; 
  public get encryptionDisabled() {
    return this.getBooleanAttribute('encryption_disabled');
  }
  public set encryptionDisabled(value: boolean | cdktf.IResolvable) {
    this._encryptionDisabled = value;
  }
  public resetEncryptionDisabled() {
    this._encryptionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDisabledInput() {
    return this._encryptionDisabled;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace_type - computed: false, optional: true, required: false
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  public resetNamespaceType() {
    this._namespaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // override_artifact_name - computed: false, optional: true, required: false
  private _overrideArtifactName?: boolean | cdktf.IResolvable; 
  public get overrideArtifactName() {
    return this.getBooleanAttribute('override_artifact_name');
  }
  public set overrideArtifactName(value: boolean | cdktf.IResolvable) {
    this._overrideArtifactName = value;
  }
  public resetOverrideArtifactName() {
    this._overrideArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideArtifactNameInput() {
    return this._overrideArtifactName;
  }

  // packaging - computed: false, optional: true, required: false
  private _packaging?: string; 
  public get packaging() {
    return this.getStringAttribute('packaging');
  }
  public set packaging(value: string) {
    this._packaging = value;
  }
  public resetPackaging() {
    this._packaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingInput() {
    return this._packaging;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
    return this._type;
  }
}
export interface CodebuildProjectBuildBatchConfigRestrictions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}
  */
  readonly computeTypesAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}
  */
  readonly maximumBuildsAllowed?: number;
}

export function codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct?: CodebuildProjectBuildBatchConfigRestrictionsOutputReference | CodebuildProjectBuildBatchConfigRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_types_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.computeTypesAllowed),
    maximum_builds_allowed: cdktf.numberToTerraform(struct!.maximumBuildsAllowed),
  }
}


export function codebuildProjectBuildBatchConfigRestrictionsToHclTerraform(struct?: CodebuildProjectBuildBatchConfigRestrictionsOutputReference | CodebuildProjectBuildBatchConfigRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_types_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.computeTypesAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_builds_allowed: {
      value: cdktf.numberToHclTerraform(struct!.maximumBuildsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectBuildBatchConfigRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectBuildBatchConfigRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeTypesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeTypesAllowed = this._computeTypesAllowed;
    }
    if (this._maximumBuildsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBuildsAllowed = this._maximumBuildsAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectBuildBatchConfigRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeTypesAllowed = undefined;
      this._maximumBuildsAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeTypesAllowed = value.computeTypesAllowed;
      this._maximumBuildsAllowed = value.maximumBuildsAllowed;
    }
  }

  // compute_types_allowed - computed: false, optional: true, required: false
  private _computeTypesAllowed?: string[]; 
  public get computeTypesAllowed() {
    return this.getListAttribute('compute_types_allowed');
  }
  public set computeTypesAllowed(value: string[]) {
    this._computeTypesAllowed = value;
  }
  public resetComputeTypesAllowed() {
    this._computeTypesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypesAllowedInput() {
    return this._computeTypesAllowed;
  }

  // maximum_builds_allowed - computed: false, optional: true, required: false
  private _maximumBuildsAllowed?: number; 
  public get maximumBuildsAllowed() {
    return this.getNumberAttribute('maximum_builds_allowed');
  }
  public set maximumBuildsAllowed(value: number) {
    this._maximumBuildsAllowed = value;
  }
  public resetMaximumBuildsAllowed() {
    this._maximumBuildsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBuildsAllowedInput() {
    return this._maximumBuildsAllowed;
  }
}
export interface CodebuildProjectBuildBatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}
  */
  readonly combineArtifacts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#service_role CodebuildProject#service_role}
  */
  readonly serviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}
  */
  readonly timeoutInMins?: number;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#restrictions CodebuildProject#restrictions}
  */
  readonly restrictions?: CodebuildProjectBuildBatchConfigRestrictions;
}

export function codebuildProjectBuildBatchConfigToTerraform(struct?: CodebuildProjectBuildBatchConfigOutputReference | CodebuildProjectBuildBatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function codebuildProjectBuildBatchConfigToHclTerraform(struct?: CodebuildProjectBuildBatchConfigOutputReference | CodebuildProjectBuildBatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combine_artifacts: {
      value: cdktf.booleanToHclTerraform(struct!.combineArtifacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_role: {
      value: cdktf.stringToHclTerraform(struct!.serviceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restrictions: {
      value: codebuildProjectBuildBatchConfigRestrictionsToHclTerraform(struct!.restrictions),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectBuildBatchConfigRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectBuildBatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectBuildBatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combineArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.combineArtifacts = this._combineArtifacts;
    }
    if (this._serviceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRole = this._serviceRole;
    }
    if (this._timeoutInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMins = this._timeoutInMins;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectBuildBatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._combineArtifacts = undefined;
      this._serviceRole = undefined;
      this._timeoutInMins = undefined;
      this._restrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._combineArtifacts = value.combineArtifacts;
      this._serviceRole = value.serviceRole;
      this._timeoutInMins = value.timeoutInMins;
      this._restrictions.internalValue = value.restrictions;
    }
  }

  // combine_artifacts - computed: false, optional: true, required: false
  private _combineArtifacts?: boolean | cdktf.IResolvable; 
  public get combineArtifacts() {
    return this.getBooleanAttribute('combine_artifacts');
  }
  public set combineArtifacts(value: boolean | cdktf.IResolvable) {
    this._combineArtifacts = value;
  }
  public resetCombineArtifacts() {
    this._combineArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineArtifactsInput() {
    return this._combineArtifacts;
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
    return this._serviceRole;
  }

  // timeout_in_mins - computed: false, optional: true, required: false
  private _timeoutInMins?: number; 
  public get timeoutInMins() {
    return this.getNumberAttribute('timeout_in_mins');
  }
  public set timeoutInMins(value: number) {
    this._timeoutInMins = value;
  }
  public resetTimeoutInMins() {
    this._timeoutInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinsInput() {
    return this._timeoutInMins;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new CodebuildProjectBuildBatchConfigRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: CodebuildProjectBuildBatchConfigRestrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}
export interface CodebuildProjectCache {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#location CodebuildProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#modes CodebuildProject#modes}
  */
  readonly modes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type?: string;
}

export function codebuildProjectCacheToTerraform(struct?: CodebuildProjectCacheOutputReference | CodebuildProjectCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function codebuildProjectCacheToHclTerraform(struct?: CodebuildProjectCacheOutputReference | CodebuildProjectCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._modes !== undefined) {
      hasAnyValues = true;
      internalValueResult.modes = this._modes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._modes = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._modes = value.modes;
      this._type = value.type;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // modes - computed: false, optional: true, required: false
  private _modes?: string[]; 
  public get modes() {
    return this.getListAttribute('modes');
  }
  public set modes(value: string[]) {
    this._modes = value;
  }
  public resetModes() {
    this._modes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modesInput() {
    return this._modes;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CodebuildProjectEnvironmentDockerServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#compute_type CodebuildProject#compute_type}
  */
  readonly computeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#security_group_ids CodebuildProject#security_group_ids}
  */
  readonly securityGroupIds?: string[];
}

export function codebuildProjectEnvironmentDockerServerToTerraform(struct?: CodebuildProjectEnvironmentDockerServerOutputReference | CodebuildProjectEnvironmentDockerServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_type: cdktf.stringToTerraform(struct!.computeType),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
  }
}


export function codebuildProjectEnvironmentDockerServerToHclTerraform(struct?: CodebuildProjectEnvironmentDockerServerOutputReference | CodebuildProjectEnvironmentDockerServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_type: {
      value: cdktf.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectEnvironmentDockerServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectEnvironmentDockerServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectEnvironmentDockerServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeType = undefined;
      this._securityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeType = value.computeType;
      this._securityGroupIds = value.securityGroupIds;
    }
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
    return this._computeType;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }
}
export interface CodebuildProjectEnvironmentEnvironmentVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#name CodebuildProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#value CodebuildProject#value}
  */
  readonly value: string;
}

export function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function codebuildProjectEnvironmentEnvironmentVariableToHclTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectEnvironmentEnvironmentVariableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectEnvironmentEnvironmentVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CodebuildProjectEnvironmentEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : CodebuildProjectEnvironmentEnvironmentVariable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildProjectEnvironmentEnvironmentVariableOutputReference {
    return new CodebuildProjectEnvironmentEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildProjectEnvironmentFleet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#fleet_arn CodebuildProject#fleet_arn}
  */
  readonly fleetArn?: string;
}

export function codebuildProjectEnvironmentFleetToTerraform(struct?: CodebuildProjectEnvironmentFleetOutputReference | CodebuildProjectEnvironmentFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_arn: cdktf.stringToTerraform(struct!.fleetArn),
  }
}


export function codebuildProjectEnvironmentFleetToHclTerraform(struct?: CodebuildProjectEnvironmentFleetOutputReference | CodebuildProjectEnvironmentFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fleet_arn: {
      value: cdktf.stringToHclTerraform(struct!.fleetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectEnvironmentFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectEnvironmentFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetArn = this._fleetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectEnvironmentFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fleetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fleetArn = value.fleetArn;
    }
  }

  // fleet_arn - computed: false, optional: true, required: false
  private _fleetArn?: string; 
  public get fleetArn() {
    return this.getStringAttribute('fleet_arn');
  }
  public set fleetArn(value: string) {
    this._fleetArn = value;
  }
  public resetFleetArn() {
    this._fleetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetArnInput() {
    return this._fleetArn;
  }
}
export interface CodebuildProjectEnvironmentRegistryCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#credential CodebuildProject#credential}
  */
  readonly credential: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#credential_provider CodebuildProject#credential_provider}
  */
  readonly credentialProvider: string;
}

export function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct?: CodebuildProjectEnvironmentRegistryCredentialOutputReference | CodebuildProjectEnvironmentRegistryCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    credential_provider: cdktf.stringToTerraform(struct!.credentialProvider),
  }
}


export function codebuildProjectEnvironmentRegistryCredentialToHclTerraform(struct?: CodebuildProjectEnvironmentRegistryCredentialOutputReference | CodebuildProjectEnvironmentRegistryCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_provider: {
      value: cdktf.stringToHclTerraform(struct!.credentialProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectEnvironmentRegistryCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectEnvironmentRegistryCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._credentialProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProvider = this._credentialProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectEnvironmentRegistryCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credential = undefined;
      this._credentialProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credential = value.credential;
      this._credentialProvider = value.credentialProvider;
    }
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
    return this._credential;
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
    return this._credentialProvider;
  }
}
export interface CodebuildProjectEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#certificate CodebuildProject#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#compute_type CodebuildProject#compute_type}
  */
  readonly computeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#image CodebuildProject#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}
  */
  readonly imagePullCredentialsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#privileged_mode CodebuildProject#privileged_mode}
  */
  readonly privilegedMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type: string;
  /**
  * docker_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#docker_server CodebuildProject#docker_server}
  */
  readonly dockerServer?: CodebuildProjectEnvironmentDockerServer;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#environment_variable CodebuildProject#environment_variable}
  */
  readonly environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[] | cdktf.IResolvable;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#fleet CodebuildProject#fleet}
  */
  readonly fleet?: CodebuildProjectEnvironmentFleet;
  /**
  * registry_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#registry_credential CodebuildProject#registry_credential}
  */
  readonly registryCredential?: CodebuildProjectEnvironmentRegistryCredential;
}

export function codebuildProjectEnvironmentToTerraform(struct?: CodebuildProjectEnvironmentOutputReference | CodebuildProjectEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    docker_server: codebuildProjectEnvironmentDockerServerToTerraform(struct!.dockerServer),
    environment_variable: cdktf.listMapper(codebuildProjectEnvironmentEnvironmentVariableToTerraform, true)(struct!.environmentVariable),
    fleet: codebuildProjectEnvironmentFleetToTerraform(struct!.fleet),
    registry_credential: codebuildProjectEnvironmentRegistryCredentialToTerraform(struct!.registryCredential),
  }
}


export function codebuildProjectEnvironmentToHclTerraform(struct?: CodebuildProjectEnvironmentOutputReference | CodebuildProjectEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_type: {
      value: cdktf.stringToHclTerraform(struct!.computeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_credentials_type: {
      value: cdktf.stringToHclTerraform(struct!.imagePullCredentialsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileged_mode: {
      value: cdktf.booleanToHclTerraform(struct!.privilegedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_server: {
      value: codebuildProjectEnvironmentDockerServerToHclTerraform(struct!.dockerServer),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectEnvironmentDockerServerList",
    },
    environment_variable: {
      value: cdktf.listMapperHcl(codebuildProjectEnvironmentEnvironmentVariableToHclTerraform, true)(struct!.environmentVariable),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectEnvironmentEnvironmentVariableList",
    },
    fleet: {
      value: codebuildProjectEnvironmentFleetToHclTerraform(struct!.fleet),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectEnvironmentFleetList",
    },
    registry_credential: {
      value: codebuildProjectEnvironmentRegistryCredentialToHclTerraform(struct!.registryCredential),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectEnvironmentRegistryCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._computeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeType = this._computeType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullCredentialsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentialsType = this._imagePullCredentialsType;
    }
    if (this._privilegedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedMode = this._privilegedMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dockerServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerServer = this._dockerServer?.internalValue;
    }
    if (this._environmentVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariable = this._environmentVariable?.internalValue;
    }
    if (this._fleet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleet = this._fleet?.internalValue;
    }
    if (this._registryCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryCredential = this._registryCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._computeType = undefined;
      this._image = undefined;
      this._imagePullCredentialsType = undefined;
      this._privilegedMode = undefined;
      this._type = undefined;
      this._dockerServer.internalValue = undefined;
      this._environmentVariable.internalValue = undefined;
      this._fleet.internalValue = undefined;
      this._registryCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._computeType = value.computeType;
      this._image = value.image;
      this._imagePullCredentialsType = value.imagePullCredentialsType;
      this._privilegedMode = value.privilegedMode;
      this._type = value.type;
      this._dockerServer.internalValue = value.dockerServer;
      this._environmentVariable.internalValue = value.environmentVariable;
      this._fleet.internalValue = value.fleet;
      this._registryCredential.internalValue = value.registryCredential;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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
    return this._computeType;
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
    return this._image;
  }

  // image_pull_credentials_type - computed: false, optional: true, required: false
  private _imagePullCredentialsType?: string; 
  public get imagePullCredentialsType() {
    return this.getStringAttribute('image_pull_credentials_type');
  }
  public set imagePullCredentialsType(value: string) {
    this._imagePullCredentialsType = value;
  }
  public resetImagePullCredentialsType() {
    this._imagePullCredentialsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsTypeInput() {
    return this._imagePullCredentialsType;
  }

  // privileged_mode - computed: false, optional: true, required: false
  private _privilegedMode?: boolean | cdktf.IResolvable; 
  public get privilegedMode() {
    return this.getBooleanAttribute('privileged_mode');
  }
  public set privilegedMode(value: boolean | cdktf.IResolvable) {
    this._privilegedMode = value;
  }
  public resetPrivilegedMode() {
    this._privilegedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedModeInput() {
    return this._privilegedMode;
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
    return this._type;
  }

  // docker_server - computed: false, optional: true, required: false
  private _dockerServer = new CodebuildProjectEnvironmentDockerServerOutputReference(this, "docker_server");
  public get dockerServer() {
    return this._dockerServer;
  }
  public putDockerServer(value: CodebuildProjectEnvironmentDockerServer) {
    this._dockerServer.internalValue = value;
  }
  public resetDockerServer() {
    this._dockerServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerServerInput() {
    return this._dockerServer.internalValue;
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new CodebuildProjectEnvironmentEnvironmentVariableList(this, "environment_variable", false);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: CodebuildProjectEnvironmentEnvironmentVariable[] | cdktf.IResolvable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }

  // fleet - computed: false, optional: true, required: false
  private _fleet = new CodebuildProjectEnvironmentFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: CodebuildProjectEnvironmentFleet) {
    this._fleet.internalValue = value;
  }
  public resetFleet() {
    this._fleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // registry_credential - computed: false, optional: true, required: false
  private _registryCredential = new CodebuildProjectEnvironmentRegistryCredentialOutputReference(this, "registry_credential");
  public get registryCredential() {
    return this._registryCredential;
  }
  public putRegistryCredential(value: CodebuildProjectEnvironmentRegistryCredential) {
    this._registryCredential.internalValue = value;
  }
  public resetRegistryCredential() {
    this._registryCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialInput() {
    return this._registryCredential.internalValue;
  }
}
export interface CodebuildProjectFileSystemLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#identifier CodebuildProject#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#location CodebuildProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#mount_options CodebuildProject#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#mount_point CodebuildProject#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type?: string;
}

export function codebuildProjectFileSystemLocationsToTerraform(struct?: CodebuildProjectFileSystemLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function codebuildProjectFileSystemLocationsToHclTerraform(struct?: CodebuildProjectFileSystemLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectFileSystemLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildProjectFileSystemLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectFileSystemLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._location = undefined;
      this._mountOptions = undefined;
      this._mountPoint = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._location = value.location;
      this._mountOptions = value.mountOptions;
      this._mountPoint = value.mountPoint;
      this._type = value.type;
    }
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CodebuildProjectFileSystemLocationsList extends cdktf.ComplexList {
  public internalValue? : CodebuildProjectFileSystemLocations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildProjectFileSystemLocationsOutputReference {
    return new CodebuildProjectFileSystemLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildProjectLogsConfigCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#group_name CodebuildProject#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#status CodebuildProject#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#stream_name CodebuildProject#stream_name}
  */
  readonly streamName?: string;
}

export function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogsOutputReference | CodebuildProjectLogsConfigCloudwatchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    status: cdktf.stringToTerraform(struct!.status),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function codebuildProjectLogsConfigCloudwatchLogsToHclTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogsOutputReference | CodebuildProjectLogsConfigCloudwatchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectLogsConfigCloudwatchLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectLogsConfigCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectLogsConfigCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._status = undefined;
      this._streamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._status = value.status;
      this._streamName = value.streamName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // stream_name - computed: false, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface CodebuildProjectLogsConfigS3Logs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}
  */
  readonly bucketOwnerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#location CodebuildProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#status CodebuildProject#status}
  */
  readonly status?: string;
}

export function codebuildProjectLogsConfigS3LogsToTerraform(struct?: CodebuildProjectLogsConfigS3LogsOutputReference | CodebuildProjectLogsConfigS3Logs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_owner_access: cdktf.stringToTerraform(struct!.bucketOwnerAccess),
    encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
    location: cdktf.stringToTerraform(struct!.location),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function codebuildProjectLogsConfigS3LogsToHclTerraform(struct?: CodebuildProjectLogsConfigS3LogsOutputReference | CodebuildProjectLogsConfigS3Logs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_owner_access: {
      value: cdktf.stringToHclTerraform(struct!.bucketOwnerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectLogsConfigS3LogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectLogsConfigS3Logs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwnerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccess = this._bucketOwnerAccess;
    }
    if (this._encryptionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDisabled = this._encryptionDisabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectLogsConfigS3Logs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketOwnerAccess = undefined;
      this._encryptionDisabled = undefined;
      this._location = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketOwnerAccess = value.bucketOwnerAccess;
      this._encryptionDisabled = value.encryptionDisabled;
      this._location = value.location;
      this._status = value.status;
    }
  }

  // bucket_owner_access - computed: false, optional: true, required: false
  private _bucketOwnerAccess?: string; 
  public get bucketOwnerAccess() {
    return this.getStringAttribute('bucket_owner_access');
  }
  public set bucketOwnerAccess(value: string) {
    this._bucketOwnerAccess = value;
  }
  public resetBucketOwnerAccess() {
    this._bucketOwnerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccessInput() {
    return this._bucketOwnerAccess;
  }

  // encryption_disabled - computed: false, optional: true, required: false
  private _encryptionDisabled?: boolean | cdktf.IResolvable; 
  public get encryptionDisabled() {
    return this.getBooleanAttribute('encryption_disabled');
  }
  public set encryptionDisabled(value: boolean | cdktf.IResolvable) {
    this._encryptionDisabled = value;
  }
  public resetEncryptionDisabled() {
    this._encryptionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDisabledInput() {
    return this._encryptionDisabled;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface CodebuildProjectLogsConfig {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#cloudwatch_logs CodebuildProject#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs;
  /**
  * s3_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#s3_logs CodebuildProject#s3_logs}
  */
  readonly s3Logs?: CodebuildProjectLogsConfigS3Logs;
}

export function codebuildProjectLogsConfigToTerraform(struct?: CodebuildProjectLogsConfigOutputReference | CodebuildProjectLogsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_logs: codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    s3_logs: codebuildProjectLogsConfigS3LogsToTerraform(struct!.s3Logs),
  }
}


export function codebuildProjectLogsConfigToHclTerraform(struct?: CodebuildProjectLogsConfigOutputReference | CodebuildProjectLogsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_logs: {
      value: codebuildProjectLogsConfigCloudwatchLogsToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectLogsConfigCloudwatchLogsList",
    },
    s3_logs: {
      value: codebuildProjectLogsConfigS3LogsToHclTerraform(struct!.s3Logs),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectLogsConfigS3LogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectLogsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectLogsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._s3Logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Logs = this._s3Logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectLogsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogs.internalValue = undefined;
      this._s3Logs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._s3Logs.internalValue = value.s3Logs;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new CodebuildProjectLogsConfigCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: CodebuildProjectLogsConfigCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // s3_logs - computed: false, optional: true, required: false
  private _s3Logs = new CodebuildProjectLogsConfigS3LogsOutputReference(this, "s3_logs");
  public get s3Logs() {
    return this._s3Logs;
  }
  public putS3Logs(value: CodebuildProjectLogsConfigS3Logs) {
    this._s3Logs.internalValue = value;
  }
  public resetS3Logs() {
    this._s3Logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LogsInput() {
    return this._s3Logs.internalValue;
  }
}
export interface CodebuildProjectSecondaryArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}
  */
  readonly artifactIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}
  */
  readonly bucketOwnerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#location CodebuildProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#name CodebuildProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}
  */
  readonly namespaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}
  */
  readonly overrideArtifactName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#packaging CodebuildProject#packaging}
  */
  readonly packaging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#path CodebuildProject#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type: string;
}

export function codebuildProjectSecondaryArtifactsToTerraform(struct?: CodebuildProjectSecondaryArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_identifier: cdktf.stringToTerraform(struct!.artifactIdentifier),
    bucket_owner_access: cdktf.stringToTerraform(struct!.bucketOwnerAccess),
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


export function codebuildProjectSecondaryArtifactsToHclTerraform(struct?: CodebuildProjectSecondaryArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_identifier: {
      value: cdktf.stringToHclTerraform(struct!.artifactIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner_access: {
      value: cdktf.stringToHclTerraform(struct!.bucketOwnerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_type: {
      value: cdktf.stringToHclTerraform(struct!.namespaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_artifact_name: {
      value: cdktf.booleanToHclTerraform(struct!.overrideArtifactName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    packaging: {
      value: cdktf.stringToHclTerraform(struct!.packaging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSecondaryArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildProjectSecondaryArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactIdentifier = this._artifactIdentifier;
    }
    if (this._bucketOwnerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccess = this._bucketOwnerAccess;
    }
    if (this._encryptionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDisabled = this._encryptionDisabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceType = this._namespaceType;
    }
    if (this._overrideArtifactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideArtifactName = this._overrideArtifactName;
    }
    if (this._packaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.packaging = this._packaging;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSecondaryArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactIdentifier = undefined;
      this._bucketOwnerAccess = undefined;
      this._encryptionDisabled = undefined;
      this._location = undefined;
      this._name = undefined;
      this._namespaceType = undefined;
      this._overrideArtifactName = undefined;
      this._packaging = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactIdentifier = value.artifactIdentifier;
      this._bucketOwnerAccess = value.bucketOwnerAccess;
      this._encryptionDisabled = value.encryptionDisabled;
      this._location = value.location;
      this._name = value.name;
      this._namespaceType = value.namespaceType;
      this._overrideArtifactName = value.overrideArtifactName;
      this._packaging = value.packaging;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // artifact_identifier - computed: false, optional: false, required: true
  private _artifactIdentifier?: string; 
  public get artifactIdentifier() {
    return this.getStringAttribute('artifact_identifier');
  }
  public set artifactIdentifier(value: string) {
    this._artifactIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdentifierInput() {
    return this._artifactIdentifier;
  }

  // bucket_owner_access - computed: false, optional: true, required: false
  private _bucketOwnerAccess?: string; 
  public get bucketOwnerAccess() {
    return this.getStringAttribute('bucket_owner_access');
  }
  public set bucketOwnerAccess(value: string) {
    this._bucketOwnerAccess = value;
  }
  public resetBucketOwnerAccess() {
    this._bucketOwnerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccessInput() {
    return this._bucketOwnerAccess;
  }

  // encryption_disabled - computed: false, optional: true, required: false
  private _encryptionDisabled?: boolean | cdktf.IResolvable; 
  public get encryptionDisabled() {
    return this.getBooleanAttribute('encryption_disabled');
  }
  public set encryptionDisabled(value: boolean | cdktf.IResolvable) {
    this._encryptionDisabled = value;
  }
  public resetEncryptionDisabled() {
    this._encryptionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDisabledInput() {
    return this._encryptionDisabled;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace_type - computed: false, optional: true, required: false
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  public resetNamespaceType() {
    this._namespaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // override_artifact_name - computed: false, optional: true, required: false
  private _overrideArtifactName?: boolean | cdktf.IResolvable; 
  public get overrideArtifactName() {
    return this.getBooleanAttribute('override_artifact_name');
  }
  public set overrideArtifactName(value: boolean | cdktf.IResolvable) {
    this._overrideArtifactName = value;
  }
  public resetOverrideArtifactName() {
    this._overrideArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideArtifactNameInput() {
    return this._overrideArtifactName;
  }

  // packaging - computed: false, optional: true, required: false
  private _packaging?: string; 
  public get packaging() {
    return this.getStringAttribute('packaging');
  }
  public set packaging(value: string) {
    this._packaging = value;
  }
  public resetPackaging() {
    this._packaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingInput() {
    return this._packaging;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
    return this._type;
  }
}

export class CodebuildProjectSecondaryArtifactsList extends cdktf.ComplexList {
  public internalValue? : CodebuildProjectSecondaryArtifacts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildProjectSecondaryArtifactsOutputReference {
    return new CodebuildProjectSecondaryArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildProjectSecondarySourceVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}
  */
  readonly sourceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#source_version CodebuildProject#source_version}
  */
  readonly sourceVersion: string;
}

export function codebuildProjectSecondarySourceVersionToTerraform(struct?: CodebuildProjectSecondarySourceVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
    source_version: cdktf.stringToTerraform(struct!.sourceVersion),
  }
}


export function codebuildProjectSecondarySourceVersionToHclTerraform(struct?: CodebuildProjectSecondarySourceVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version: {
      value: cdktf.stringToHclTerraform(struct!.sourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSecondarySourceVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildProjectSecondarySourceVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIdentifier = this._sourceIdentifier;
    }
    if (this._sourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersion = this._sourceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSecondarySourceVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIdentifier = undefined;
      this._sourceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIdentifier = value.sourceIdentifier;
      this._sourceVersion = value.sourceVersion;
    }
  }

  // source_identifier - computed: false, optional: false, required: true
  private _sourceIdentifier?: string; 
  public get sourceIdentifier() {
    return this.getStringAttribute('source_identifier');
  }
  public set sourceIdentifier(value: string) {
    this._sourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentifierInput() {
    return this._sourceIdentifier;
  }

  // source_version - computed: false, optional: false, required: true
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }
}

export class CodebuildProjectSecondarySourceVersionList extends cdktf.ComplexList {
  public internalValue? : CodebuildProjectSecondarySourceVersion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildProjectSecondarySourceVersionOutputReference {
    return new CodebuildProjectSecondarySourceVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildProjectSecondarySourcesAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#resource CodebuildProject#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type: string;
}

export function codebuildProjectSecondarySourcesAuthToTerraform(struct?: CodebuildProjectSecondarySourcesAuthOutputReference | CodebuildProjectSecondarySourcesAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function codebuildProjectSecondarySourcesAuthToHclTerraform(struct?: CodebuildProjectSecondarySourcesAuthOutputReference | CodebuildProjectSecondarySourcesAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSecondarySourcesAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectSecondarySourcesAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSecondarySourcesAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource = value.resource;
      this._type = value.type;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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
    return this._type;
  }
}
export interface CodebuildProjectSecondarySourcesBuildStatusConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#context CodebuildProject#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#target_url CodebuildProject#target_url}
  */
  readonly targetUrl?: string;
}

export function codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct?: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference | CodebuildProjectSecondarySourcesBuildStatusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
  }
}


export function codebuildProjectSecondarySourcesBuildStatusConfigToHclTerraform(struct?: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference | CodebuildProjectSecondarySourcesBuildStatusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectSecondarySourcesBuildStatusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSecondarySourcesBuildStatusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._targetUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._targetUrl = value.targetUrl;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // target_url - computed: false, optional: true, required: false
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  public resetTargetUrl() {
    this._targetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }
}
export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}
  */
  readonly fetchSubmodules: boolean | cdktf.IResolvable;
}

export function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference | CodebuildProjectSecondarySourcesGitSubmodulesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
  }
}


export function codebuildProjectSecondarySourcesGitSubmodulesConfigToHclTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference | CodebuildProjectSecondarySourcesGitSubmodulesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fetch_submodules: {
      value: cdktf.booleanToHclTerraform(struct!.fetchSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectSecondarySourcesGitSubmodulesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchSubmodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchSubmodules = this._fetchSubmodules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSecondarySourcesGitSubmodulesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchSubmodules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchSubmodules = value.fetchSubmodules;
    }
  }

  // fetch_submodules - computed: false, optional: false, required: true
  private _fetchSubmodules?: boolean | cdktf.IResolvable; 
  public get fetchSubmodules() {
    return this.getBooleanAttribute('fetch_submodules');
  }
  public set fetchSubmodules(value: boolean | cdktf.IResolvable) {
    this._fetchSubmodules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSubmodulesInput() {
    return this._fetchSubmodules;
  }
}
export interface CodebuildProjectSecondarySources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}
  */
  readonly buildspec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}
  */
  readonly gitCloneDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}
  */
  readonly insecureSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#location CodebuildProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}
  */
  readonly reportBuildStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}
  */
  readonly sourceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#auth CodebuildProject#auth}
  */
  readonly auth?: CodebuildProjectSecondarySourcesAuth;
  /**
  * build_status_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#build_status_config CodebuildProject#build_status_config}
  */
  readonly buildStatusConfig?: CodebuildProjectSecondarySourcesBuildStatusConfig;
  /**
  * git_submodules_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}
  */
  readonly gitSubmodulesConfig?: CodebuildProjectSecondarySourcesGitSubmodulesConfig;
}

export function codebuildProjectSecondarySourcesToTerraform(struct?: CodebuildProjectSecondarySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function codebuildProjectSecondarySourcesToHclTerraform(struct?: CodebuildProjectSecondarySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buildspec: {
      value: cdktf.stringToHclTerraform(struct!.buildspec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_clone_depth: {
      value: cdktf.numberToHclTerraform(struct!.gitCloneDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insecure_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_build_status: {
      value: cdktf.booleanToHclTerraform(struct!.reportBuildStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: codebuildProjectSecondarySourcesAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectSecondarySourcesAuthList",
    },
    build_status_config: {
      value: codebuildProjectSecondarySourcesBuildStatusConfigToHclTerraform(struct!.buildStatusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectSecondarySourcesBuildStatusConfigList",
    },
    git_submodules_config: {
      value: codebuildProjectSecondarySourcesGitSubmodulesConfigToHclTerraform(struct!.gitSubmodulesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectSecondarySourcesGitSubmodulesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSecondarySourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildProjectSecondarySources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildspec !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildspec = this._buildspec;
    }
    if (this._gitCloneDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCloneDepth = this._gitCloneDepth;
    }
    if (this._insecureSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSsl = this._insecureSsl;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._reportBuildStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportBuildStatus = this._reportBuildStatus;
    }
    if (this._sourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIdentifier = this._sourceIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buildStatusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildStatusConfig = this._buildStatusConfig?.internalValue;
    }
    if (this._gitSubmodulesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSubmodulesConfig = this._gitSubmodulesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSecondarySources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildspec = undefined;
      this._gitCloneDepth = undefined;
      this._insecureSsl = undefined;
      this._location = undefined;
      this._reportBuildStatus = undefined;
      this._sourceIdentifier = undefined;
      this._type = undefined;
      this._auth.internalValue = undefined;
      this._buildStatusConfig.internalValue = undefined;
      this._gitSubmodulesConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildspec = value.buildspec;
      this._gitCloneDepth = value.gitCloneDepth;
      this._insecureSsl = value.insecureSsl;
      this._location = value.location;
      this._reportBuildStatus = value.reportBuildStatus;
      this._sourceIdentifier = value.sourceIdentifier;
      this._type = value.type;
      this._auth.internalValue = value.auth;
      this._buildStatusConfig.internalValue = value.buildStatusConfig;
      this._gitSubmodulesConfig.internalValue = value.gitSubmodulesConfig;
    }
  }

  // buildspec - computed: false, optional: true, required: false
  private _buildspec?: string; 
  public get buildspec() {
    return this.getStringAttribute('buildspec');
  }
  public set buildspec(value: string) {
    this._buildspec = value;
  }
  public resetBuildspec() {
    this._buildspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildspecInput() {
    return this._buildspec;
  }

  // git_clone_depth - computed: false, optional: true, required: false
  private _gitCloneDepth?: number; 
  public get gitCloneDepth() {
    return this.getNumberAttribute('git_clone_depth');
  }
  public set gitCloneDepth(value: number) {
    this._gitCloneDepth = value;
  }
  public resetGitCloneDepth() {
    this._gitCloneDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCloneDepthInput() {
    return this._gitCloneDepth;
  }

  // insecure_ssl - computed: false, optional: true, required: false
  private _insecureSsl?: boolean | cdktf.IResolvable; 
  public get insecureSsl() {
    return this.getBooleanAttribute('insecure_ssl');
  }
  public set insecureSsl(value: boolean | cdktf.IResolvable) {
    this._insecureSsl = value;
  }
  public resetInsecureSsl() {
    this._insecureSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSslInput() {
    return this._insecureSsl;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // report_build_status - computed: false, optional: true, required: false
  private _reportBuildStatus?: boolean | cdktf.IResolvable; 
  public get reportBuildStatus() {
    return this.getBooleanAttribute('report_build_status');
  }
  public set reportBuildStatus(value: boolean | cdktf.IResolvable) {
    this._reportBuildStatus = value;
  }
  public resetReportBuildStatus() {
    this._reportBuildStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportBuildStatusInput() {
    return this._reportBuildStatus;
  }

  // source_identifier - computed: false, optional: false, required: true
  private _sourceIdentifier?: string; 
  public get sourceIdentifier() {
    return this.getStringAttribute('source_identifier');
  }
  public set sourceIdentifier(value: string) {
    this._sourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentifierInput() {
    return this._sourceIdentifier;
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
    return this._type;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new CodebuildProjectSecondarySourcesAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: CodebuildProjectSecondarySourcesAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // build_status_config - computed: false, optional: true, required: false
  private _buildStatusConfig = new CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference(this, "build_status_config");
  public get buildStatusConfig() {
    return this._buildStatusConfig;
  }
  public putBuildStatusConfig(value: CodebuildProjectSecondarySourcesBuildStatusConfig) {
    this._buildStatusConfig.internalValue = value;
  }
  public resetBuildStatusConfig() {
    this._buildStatusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildStatusConfigInput() {
    return this._buildStatusConfig.internalValue;
  }

  // git_submodules_config - computed: false, optional: true, required: false
  private _gitSubmodulesConfig = new CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference(this, "git_submodules_config");
  public get gitSubmodulesConfig() {
    return this._gitSubmodulesConfig;
  }
  public putGitSubmodulesConfig(value: CodebuildProjectSecondarySourcesGitSubmodulesConfig) {
    this._gitSubmodulesConfig.internalValue = value;
  }
  public resetGitSubmodulesConfig() {
    this._gitSubmodulesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSubmodulesConfigInput() {
    return this._gitSubmodulesConfig.internalValue;
  }
}

export class CodebuildProjectSecondarySourcesList extends cdktf.ComplexList {
  public internalValue? : CodebuildProjectSecondarySources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildProjectSecondarySourcesOutputReference {
    return new CodebuildProjectSecondarySourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildProjectSourceAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#resource CodebuildProject#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type: string;
}

export function codebuildProjectSourceAuthToTerraform(struct?: CodebuildProjectSourceAuthOutputReference | CodebuildProjectSourceAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function codebuildProjectSourceAuthToHclTerraform(struct?: CodebuildProjectSourceAuthOutputReference | CodebuildProjectSourceAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSourceAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectSourceAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSourceAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource = value.resource;
      this._type = value.type;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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
    return this._type;
  }
}
export interface CodebuildProjectSourceBuildStatusConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#context CodebuildProject#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#target_url CodebuildProject#target_url}
  */
  readonly targetUrl?: string;
}

export function codebuildProjectSourceBuildStatusConfigToTerraform(struct?: CodebuildProjectSourceBuildStatusConfigOutputReference | CodebuildProjectSourceBuildStatusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
  }
}


export function codebuildProjectSourceBuildStatusConfigToHclTerraform(struct?: CodebuildProjectSourceBuildStatusConfigOutputReference | CodebuildProjectSourceBuildStatusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSourceBuildStatusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectSourceBuildStatusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSourceBuildStatusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._targetUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._targetUrl = value.targetUrl;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // target_url - computed: false, optional: true, required: false
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  public resetTargetUrl() {
    this._targetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }
}
export interface CodebuildProjectSourceGitSubmodulesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}
  */
  readonly fetchSubmodules: boolean | cdktf.IResolvable;
}

export function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfigOutputReference | CodebuildProjectSourceGitSubmodulesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
  }
}


export function codebuildProjectSourceGitSubmodulesConfigToHclTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfigOutputReference | CodebuildProjectSourceGitSubmodulesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fetch_submodules: {
      value: cdktf.booleanToHclTerraform(struct!.fetchSubmodules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSourceGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectSourceGitSubmodulesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetchSubmodules !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchSubmodules = this._fetchSubmodules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSourceGitSubmodulesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fetchSubmodules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fetchSubmodules = value.fetchSubmodules;
    }
  }

  // fetch_submodules - computed: false, optional: false, required: true
  private _fetchSubmodules?: boolean | cdktf.IResolvable; 
  public get fetchSubmodules() {
    return this.getBooleanAttribute('fetch_submodules');
  }
  public set fetchSubmodules(value: boolean | cdktf.IResolvable) {
    this._fetchSubmodules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSubmodulesInput() {
    return this._fetchSubmodules;
  }
}
export interface CodebuildProjectSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}
  */
  readonly buildspec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}
  */
  readonly gitCloneDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}
  */
  readonly insecureSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#location CodebuildProject#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}
  */
  readonly reportBuildStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#type CodebuildProject#type}
  */
  readonly type: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#auth CodebuildProject#auth}
  */
  readonly auth?: CodebuildProjectSourceAuth;
  /**
  * build_status_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#build_status_config CodebuildProject#build_status_config}
  */
  readonly buildStatusConfig?: CodebuildProjectSourceBuildStatusConfig;
  /**
  * git_submodules_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}
  */
  readonly gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig;
}

export function codebuildProjectSourceToTerraform(struct?: CodebuildProjectSourceOutputReference | CodebuildProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function codebuildProjectSourceToHclTerraform(struct?: CodebuildProjectSourceOutputReference | CodebuildProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buildspec: {
      value: cdktf.stringToHclTerraform(struct!.buildspec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_clone_depth: {
      value: cdktf.numberToHclTerraform(struct!.gitCloneDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insecure_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_build_status: {
      value: cdktf.booleanToHclTerraform(struct!.reportBuildStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: codebuildProjectSourceAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectSourceAuthList",
    },
    build_status_config: {
      value: codebuildProjectSourceBuildStatusConfigToHclTerraform(struct!.buildStatusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectSourceBuildStatusConfigList",
    },
    git_submodules_config: {
      value: codebuildProjectSourceGitSubmodulesConfigToHclTerraform(struct!.gitSubmodulesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildProjectSourceGitSubmodulesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildspec !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildspec = this._buildspec;
    }
    if (this._gitCloneDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCloneDepth = this._gitCloneDepth;
    }
    if (this._insecureSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSsl = this._insecureSsl;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._reportBuildStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportBuildStatus = this._reportBuildStatus;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buildStatusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildStatusConfig = this._buildStatusConfig?.internalValue;
    }
    if (this._gitSubmodulesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSubmodulesConfig = this._gitSubmodulesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildspec = undefined;
      this._gitCloneDepth = undefined;
      this._insecureSsl = undefined;
      this._location = undefined;
      this._reportBuildStatus = undefined;
      this._type = undefined;
      this._auth.internalValue = undefined;
      this._buildStatusConfig.internalValue = undefined;
      this._gitSubmodulesConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildspec = value.buildspec;
      this._gitCloneDepth = value.gitCloneDepth;
      this._insecureSsl = value.insecureSsl;
      this._location = value.location;
      this._reportBuildStatus = value.reportBuildStatus;
      this._type = value.type;
      this._auth.internalValue = value.auth;
      this._buildStatusConfig.internalValue = value.buildStatusConfig;
      this._gitSubmodulesConfig.internalValue = value.gitSubmodulesConfig;
    }
  }

  // buildspec - computed: false, optional: true, required: false
  private _buildspec?: string; 
  public get buildspec() {
    return this.getStringAttribute('buildspec');
  }
  public set buildspec(value: string) {
    this._buildspec = value;
  }
  public resetBuildspec() {
    this._buildspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildspecInput() {
    return this._buildspec;
  }

  // git_clone_depth - computed: false, optional: true, required: false
  private _gitCloneDepth?: number; 
  public get gitCloneDepth() {
    return this.getNumberAttribute('git_clone_depth');
  }
  public set gitCloneDepth(value: number) {
    this._gitCloneDepth = value;
  }
  public resetGitCloneDepth() {
    this._gitCloneDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCloneDepthInput() {
    return this._gitCloneDepth;
  }

  // insecure_ssl - computed: false, optional: true, required: false
  private _insecureSsl?: boolean | cdktf.IResolvable; 
  public get insecureSsl() {
    return this.getBooleanAttribute('insecure_ssl');
  }
  public set insecureSsl(value: boolean | cdktf.IResolvable) {
    this._insecureSsl = value;
  }
  public resetInsecureSsl() {
    this._insecureSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSslInput() {
    return this._insecureSsl;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // report_build_status - computed: false, optional: true, required: false
  private _reportBuildStatus?: boolean | cdktf.IResolvable; 
  public get reportBuildStatus() {
    return this.getBooleanAttribute('report_build_status');
  }
  public set reportBuildStatus(value: boolean | cdktf.IResolvable) {
    this._reportBuildStatus = value;
  }
  public resetReportBuildStatus() {
    this._reportBuildStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportBuildStatusInput() {
    return this._reportBuildStatus;
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
    return this._type;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new CodebuildProjectSourceAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: CodebuildProjectSourceAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // build_status_config - computed: false, optional: true, required: false
  private _buildStatusConfig = new CodebuildProjectSourceBuildStatusConfigOutputReference(this, "build_status_config");
  public get buildStatusConfig() {
    return this._buildStatusConfig;
  }
  public putBuildStatusConfig(value: CodebuildProjectSourceBuildStatusConfig) {
    this._buildStatusConfig.internalValue = value;
  }
  public resetBuildStatusConfig() {
    this._buildStatusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildStatusConfigInput() {
    return this._buildStatusConfig.internalValue;
  }

  // git_submodules_config - computed: false, optional: true, required: false
  private _gitSubmodulesConfig = new CodebuildProjectSourceGitSubmodulesConfigOutputReference(this, "git_submodules_config");
  public get gitSubmodulesConfig() {
    return this._gitSubmodulesConfig;
  }
  public putGitSubmodulesConfig(value: CodebuildProjectSourceGitSubmodulesConfig) {
    this._gitSubmodulesConfig.internalValue = value;
  }
  public resetGitSubmodulesConfig() {
    this._gitSubmodulesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSubmodulesConfigInput() {
    return this._gitSubmodulesConfig.internalValue;
  }
}
export interface CodebuildProjectVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#security_group_ids CodebuildProject#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#subnets CodebuildProject#subnets}
  */
  readonly subnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#vpc_id CodebuildProject#vpc_id}
  */
  readonly vpcId: string;
}

export function codebuildProjectVpcConfigToTerraform(struct?: CodebuildProjectVpcConfigOutputReference | CodebuildProjectVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function codebuildProjectVpcConfigToHclTerraform(struct?: CodebuildProjectVpcConfigOutputReference | CodebuildProjectVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildProjectVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildProjectVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildProjectVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
      this._vpcId = value.vpcId;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
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
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project aws_codebuild_project}
*/
export class CodebuildProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codebuild_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CodebuildProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodebuildProject to import
  * @param importFromId The id of the existing CodebuildProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodebuildProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codebuild_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_project aws_codebuild_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodebuildProjectConfig
  */
  public constructor(scope: Construct, id: string, config: CodebuildProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_project',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._badgeEnabled = config.badgeEnabled;
    this._buildTimeout = config.buildTimeout;
    this._concurrentBuildLimit = config.concurrentBuildLimit;
    this._description = config.description;
    this._encryptionKey = config.encryptionKey;
    this._id = config.id;
    this._name = config.name;
    this._projectVisibility = config.projectVisibility;
    this._queuedTimeout = config.queuedTimeout;
    this._region = config.region;
    this._resourceAccessRole = config.resourceAccessRole;
    this._serviceRole = config.serviceRole;
    this._sourceVersion = config.sourceVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._artifacts.internalValue = config.artifacts;
    this._buildBatchConfig.internalValue = config.buildBatchConfig;
    this._cache.internalValue = config.cache;
    this._environment.internalValue = config.environment;
    this._fileSystemLocations.internalValue = config.fileSystemLocations;
    this._logsConfig.internalValue = config.logsConfig;
    this._secondaryArtifacts.internalValue = config.secondaryArtifacts;
    this._secondarySourceVersion.internalValue = config.secondarySourceVersion;
    this._secondarySources.internalValue = config.secondarySources;
    this._source.internalValue = config.source;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // badge_enabled - computed: false, optional: true, required: false
  private _badgeEnabled?: boolean | cdktf.IResolvable; 
  public get badgeEnabled() {
    return this.getBooleanAttribute('badge_enabled');
  }
  public set badgeEnabled(value: boolean | cdktf.IResolvable) {
    this._badgeEnabled = value;
  }
  public resetBadgeEnabled() {
    this._badgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badgeEnabledInput() {
    return this._badgeEnabled;
  }

  // badge_url - computed: true, optional: false, required: false
  public get badgeUrl() {
    return this.getStringAttribute('badge_url');
  }

  // build_timeout - computed: false, optional: true, required: false
  private _buildTimeout?: number; 
  public get buildTimeout() {
    return this.getNumberAttribute('build_timeout');
  }
  public set buildTimeout(value: number) {
    this._buildTimeout = value;
  }
  public resetBuildTimeout() {
    this._buildTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTimeoutInput() {
    return this._buildTimeout;
  }

  // concurrent_build_limit - computed: false, optional: true, required: false
  private _concurrentBuildLimit?: number; 
  public get concurrentBuildLimit() {
    return this.getNumberAttribute('concurrent_build_limit');
  }
  public set concurrentBuildLimit(value: number) {
    this._concurrentBuildLimit = value;
  }
  public resetConcurrentBuildLimit() {
    this._concurrentBuildLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentBuildLimitInput() {
    return this._concurrentBuildLimit;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
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
    return this._name;
  }

  // project_visibility - computed: false, optional: true, required: false
  private _projectVisibility?: string; 
  public get projectVisibility() {
    return this.getStringAttribute('project_visibility');
  }
  public set projectVisibility(value: string) {
    this._projectVisibility = value;
  }
  public resetProjectVisibility() {
    this._projectVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVisibilityInput() {
    return this._projectVisibility;
  }

  // public_project_alias - computed: true, optional: false, required: false
  public get publicProjectAlias() {
    return this.getStringAttribute('public_project_alias');
  }

  // queued_timeout - computed: false, optional: true, required: false
  private _queuedTimeout?: number; 
  public get queuedTimeout() {
    return this.getNumberAttribute('queued_timeout');
  }
  public set queuedTimeout(value: number) {
    this._queuedTimeout = value;
  }
  public resetQueuedTimeout() {
    this._queuedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedTimeoutInput() {
    return this._queuedTimeout;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_access_role - computed: false, optional: true, required: false
  private _resourceAccessRole?: string; 
  public get resourceAccessRole() {
    return this.getStringAttribute('resource_access_role');
  }
  public set resourceAccessRole(value: string) {
    this._resourceAccessRole = value;
  }
  public resetResourceAccessRole() {
    this._resourceAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccessRoleInput() {
    return this._resourceAccessRole;
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
    return this._serviceRole;
  }

  // source_version - computed: false, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // artifacts - computed: false, optional: false, required: true
  private _artifacts = new CodebuildProjectArtifactsOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: CodebuildProjectArtifacts) {
    this._artifacts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // build_batch_config - computed: false, optional: true, required: false
  private _buildBatchConfig = new CodebuildProjectBuildBatchConfigOutputReference(this, "build_batch_config");
  public get buildBatchConfig() {
    return this._buildBatchConfig;
  }
  public putBuildBatchConfig(value: CodebuildProjectBuildBatchConfig) {
    this._buildBatchConfig.internalValue = value;
  }
  public resetBuildBatchConfig() {
    this._buildBatchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildBatchConfigInput() {
    return this._buildBatchConfig.internalValue;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new CodebuildProjectCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: CodebuildProjectCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new CodebuildProjectEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: CodebuildProjectEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // file_system_locations - computed: false, optional: true, required: false
  private _fileSystemLocations = new CodebuildProjectFileSystemLocationsList(this, "file_system_locations", true);
  public get fileSystemLocations() {
    return this._fileSystemLocations;
  }
  public putFileSystemLocations(value: CodebuildProjectFileSystemLocations[] | cdktf.IResolvable) {
    this._fileSystemLocations.internalValue = value;
  }
  public resetFileSystemLocations() {
    this._fileSystemLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemLocationsInput() {
    return this._fileSystemLocations.internalValue;
  }

  // logs_config - computed: false, optional: true, required: false
  private _logsConfig = new CodebuildProjectLogsConfigOutputReference(this, "logs_config");
  public get logsConfig() {
    return this._logsConfig;
  }
  public putLogsConfig(value: CodebuildProjectLogsConfig) {
    this._logsConfig.internalValue = value;
  }
  public resetLogsConfig() {
    this._logsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsConfigInput() {
    return this._logsConfig.internalValue;
  }

  // secondary_artifacts - computed: false, optional: true, required: false
  private _secondaryArtifacts = new CodebuildProjectSecondaryArtifactsList(this, "secondary_artifacts", true);
  public get secondaryArtifacts() {
    return this._secondaryArtifacts;
  }
  public putSecondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[] | cdktf.IResolvable) {
    this._secondaryArtifacts.internalValue = value;
  }
  public resetSecondaryArtifacts() {
    this._secondaryArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryArtifactsInput() {
    return this._secondaryArtifacts.internalValue;
  }

  // secondary_source_version - computed: false, optional: true, required: false
  private _secondarySourceVersion = new CodebuildProjectSecondarySourceVersionList(this, "secondary_source_version", true);
  public get secondarySourceVersion() {
    return this._secondarySourceVersion;
  }
  public putSecondarySourceVersion(value: CodebuildProjectSecondarySourceVersion[] | cdktf.IResolvable) {
    this._secondarySourceVersion.internalValue = value;
  }
  public resetSecondarySourceVersion() {
    this._secondarySourceVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySourceVersionInput() {
    return this._secondarySourceVersion.internalValue;
  }

  // secondary_sources - computed: false, optional: true, required: false
  private _secondarySources = new CodebuildProjectSecondarySourcesList(this, "secondary_sources", true);
  public get secondarySources() {
    return this._secondarySources;
  }
  public putSecondarySources(value: CodebuildProjectSecondarySources[] | cdktf.IResolvable) {
    this._secondarySources.internalValue = value;
  }
  public resetSecondarySources() {
    this._secondarySources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySourcesInput() {
    return this._secondarySources.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new CodebuildProjectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: CodebuildProjectSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new CodebuildProjectVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: CodebuildProjectVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_visibility: cdktf.stringToTerraform(this._projectVisibility),
      queued_timeout: cdktf.numberToTerraform(this._queuedTimeout),
      region: cdktf.stringToTerraform(this._region),
      resource_access_role: cdktf.stringToTerraform(this._resourceAccessRole),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      source_version: cdktf.stringToTerraform(this._sourceVersion),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      artifacts: codebuildProjectArtifactsToTerraform(this._artifacts.internalValue),
      build_batch_config: codebuildProjectBuildBatchConfigToTerraform(this._buildBatchConfig.internalValue),
      cache: codebuildProjectCacheToTerraform(this._cache.internalValue),
      environment: codebuildProjectEnvironmentToTerraform(this._environment.internalValue),
      file_system_locations: cdktf.listMapper(codebuildProjectFileSystemLocationsToTerraform, true)(this._fileSystemLocations.internalValue),
      logs_config: codebuildProjectLogsConfigToTerraform(this._logsConfig.internalValue),
      secondary_artifacts: cdktf.listMapper(codebuildProjectSecondaryArtifactsToTerraform, true)(this._secondaryArtifacts.internalValue),
      secondary_source_version: cdktf.listMapper(codebuildProjectSecondarySourceVersionToTerraform, true)(this._secondarySourceVersion.internalValue),
      secondary_sources: cdktf.listMapper(codebuildProjectSecondarySourcesToTerraform, true)(this._secondarySources.internalValue),
      source: codebuildProjectSourceToTerraform(this._source.internalValue),
      vpc_config: codebuildProjectVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      badge_enabled: {
        value: cdktf.booleanToHclTerraform(this._badgeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      build_timeout: {
        value: cdktf.numberToHclTerraform(this._buildTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_build_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentBuildLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_visibility: {
        value: cdktf.stringToHclTerraform(this._projectVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queued_timeout: {
        value: cdktf.numberToHclTerraform(this._queuedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_access_role: {
        value: cdktf.stringToHclTerraform(this._resourceAccessRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_role: {
        value: cdktf.stringToHclTerraform(this._serviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_version: {
        value: cdktf.stringToHclTerraform(this._sourceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      artifacts: {
        value: codebuildProjectArtifactsToHclTerraform(this._artifacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildProjectArtifactsList",
      },
      build_batch_config: {
        value: codebuildProjectBuildBatchConfigToHclTerraform(this._buildBatchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildProjectBuildBatchConfigList",
      },
      cache: {
        value: codebuildProjectCacheToHclTerraform(this._cache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildProjectCacheList",
      },
      environment: {
        value: codebuildProjectEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildProjectEnvironmentList",
      },
      file_system_locations: {
        value: cdktf.listMapperHcl(codebuildProjectFileSystemLocationsToHclTerraform, true)(this._fileSystemLocations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CodebuildProjectFileSystemLocationsList",
      },
      logs_config: {
        value: codebuildProjectLogsConfigToHclTerraform(this._logsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildProjectLogsConfigList",
      },
      secondary_artifacts: {
        value: cdktf.listMapperHcl(codebuildProjectSecondaryArtifactsToHclTerraform, true)(this._secondaryArtifacts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CodebuildProjectSecondaryArtifactsList",
      },
      secondary_source_version: {
        value: cdktf.listMapperHcl(codebuildProjectSecondarySourceVersionToHclTerraform, true)(this._secondarySourceVersion.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CodebuildProjectSecondarySourceVersionList",
      },
      secondary_sources: {
        value: cdktf.listMapperHcl(codebuildProjectSecondarySourcesToHclTerraform, true)(this._secondarySources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CodebuildProjectSecondarySourcesList",
      },
      source: {
        value: codebuildProjectSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildProjectSourceList",
      },
      vpc_config: {
        value: codebuildProjectVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildProjectVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
