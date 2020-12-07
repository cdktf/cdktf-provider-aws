// https://www.terraform.io/docs/providers/aws/r/codebuild_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildProjectConfig extends cdktf.TerraformMetaArguments {
  readonly badgeEnabled?: boolean;
  readonly buildTimeout?: number;
  readonly description?: string;
  readonly encryptionKey?: string;
  readonly name: string;
  readonly queuedTimeout?: number;
  readonly serviceRole: string;
  readonly sourceVersion?: string;
  readonly tags?: { [key: string]: string };
  /** artifacts block */
  readonly artifacts: CodebuildProjectArtifacts[];
  /** cache block */
  readonly cache?: CodebuildProjectCache[];
  /** environment block */
  readonly environment: CodebuildProjectEnvironment[];
  /** logs_config block */
  readonly logsConfig?: CodebuildProjectLogsConfig[];
  /** secondary_artifacts block */
  readonly secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
  /** secondary_sources block */
  readonly secondarySources?: CodebuildProjectSecondarySources[];
  /** source block */
  readonly source: CodebuildProjectSource[];
  /** vpc_config block */
  readonly vpcConfig?: CodebuildProjectVpcConfig[];
}
export interface CodebuildProjectArtifacts {
  readonly artifactIdentifier?: string;
  readonly encryptionDisabled?: boolean;
  readonly location?: string;
  readonly name?: string;
  readonly namespaceType?: string;
  readonly overrideArtifactName?: boolean;
  readonly packaging?: string;
  readonly path?: string;
  readonly type: string;
}

function codebuildProjectArtifactsToTerraform(struct?: CodebuildProjectArtifacts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface CodebuildProjectCache {
  readonly location?: string;
  readonly modes?: string[];
  readonly type?: string;
}

function codebuildProjectCacheToTerraform(struct?: CodebuildProjectCache): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CodebuildProjectEnvironmentEnvironmentVariable {
  readonly name: string;
  readonly type?: string;
  readonly value: string;
}

function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CodebuildProjectEnvironmentRegistryCredential {
  readonly credential: string;
  readonly credentialProvider: string;
}

function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct?: CodebuildProjectEnvironmentRegistryCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    credential_provider: cdktf.stringToTerraform(struct!.credentialProvider),
  }
}

export interface CodebuildProjectEnvironment {
  readonly certificate?: string;
  readonly computeType: string;
  readonly image: string;
  readonly imagePullCredentialsType?: string;
  readonly privilegedMode?: boolean;
  readonly type: string;
  /** environment_variable block */
  readonly environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[];
  /** registry_credential block */
  readonly registryCredential?: CodebuildProjectEnvironmentRegistryCredential[];
}

function codebuildProjectEnvironmentToTerraform(struct?: CodebuildProjectEnvironment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    compute_type: cdktf.stringToTerraform(struct!.computeType),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_credentials_type: cdktf.stringToTerraform(struct!.imagePullCredentialsType),
    privileged_mode: cdktf.booleanToTerraform(struct!.privilegedMode),
    type: cdktf.stringToTerraform(struct!.type),
    environment_variable: cdktf.listMapper(codebuildProjectEnvironmentEnvironmentVariableToTerraform)(struct!.environmentVariable),
    registry_credential: cdktf.listMapper(codebuildProjectEnvironmentRegistryCredentialToTerraform)(struct!.registryCredential),
  }
}

export interface CodebuildProjectLogsConfigCloudwatchLogs {
  readonly groupName?: string;
  readonly status?: string;
  readonly streamName?: string;
}

function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    status: cdktf.stringToTerraform(struct!.status),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export interface CodebuildProjectLogsConfigS3Logs {
  readonly encryptionDisabled?: boolean;
  readonly location?: string;
  readonly status?: string;
}

function codebuildProjectLogsConfigS3LogsToTerraform(struct?: CodebuildProjectLogsConfigS3Logs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
    location: cdktf.stringToTerraform(struct!.location),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface CodebuildProjectLogsConfig {
  /** cloudwatch_logs block */
  readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs[];
  /** s3_logs block */
  readonly s3Logs?: CodebuildProjectLogsConfigS3Logs[];
}

function codebuildProjectLogsConfigToTerraform(struct?: CodebuildProjectLogsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logs: cdktf.listMapper(codebuildProjectLogsConfigCloudwatchLogsToTerraform)(struct!.cloudwatchLogs),
    s3_logs: cdktf.listMapper(codebuildProjectLogsConfigS3LogsToTerraform)(struct!.s3Logs),
  }
}

export interface CodebuildProjectSecondaryArtifacts {
  readonly artifactIdentifier: string;
  readonly encryptionDisabled?: boolean;
  readonly location?: string;
  readonly name?: string;
  readonly namespaceType?: string;
  readonly overrideArtifactName?: boolean;
  readonly packaging?: string;
  readonly path?: string;
  readonly type: string;
}

function codebuildProjectSecondaryArtifactsToTerraform(struct?: CodebuildProjectSecondaryArtifacts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  readonly resource?: string;
  readonly type: string;
}

function codebuildProjectSecondarySourcesAuthToTerraform(struct?: CodebuildProjectSecondarySourcesAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
  readonly fetchSubmodules: boolean;
}

function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
  }
}

export interface CodebuildProjectSecondarySources {
  readonly buildspec?: string;
  readonly gitCloneDepth?: number;
  readonly insecureSsl?: boolean;
  readonly location?: string;
  readonly reportBuildStatus?: boolean;
  readonly sourceIdentifier: string;
  readonly type: string;
  /** auth block */
  readonly auth?: CodebuildProjectSecondarySourcesAuth[];
  /** git_submodules_config block */
  readonly gitSubmodulesConfig?: CodebuildProjectSecondarySourcesGitSubmodulesConfig[];
}

function codebuildProjectSecondarySourcesToTerraform(struct?: CodebuildProjectSecondarySources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buildspec: cdktf.stringToTerraform(struct!.buildspec),
    git_clone_depth: cdktf.numberToTerraform(struct!.gitCloneDepth),
    insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
    location: cdktf.stringToTerraform(struct!.location),
    report_build_status: cdktf.booleanToTerraform(struct!.reportBuildStatus),
    source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
    type: cdktf.stringToTerraform(struct!.type),
    auth: cdktf.listMapper(codebuildProjectSecondarySourcesAuthToTerraform)(struct!.auth),
    git_submodules_config: cdktf.listMapper(codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform)(struct!.gitSubmodulesConfig),
  }
}

export interface CodebuildProjectSourceAuth {
  readonly resource?: string;
  readonly type: string;
}

function codebuildProjectSourceAuthToTerraform(struct?: CodebuildProjectSourceAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CodebuildProjectSourceGitSubmodulesConfig {
  readonly fetchSubmodules: boolean;
}

function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
  }
}

export interface CodebuildProjectSource {
  readonly buildspec?: string;
  readonly gitCloneDepth?: number;
  readonly insecureSsl?: boolean;
  readonly location?: string;
  readonly reportBuildStatus?: boolean;
  readonly type: string;
  /** auth block */
  readonly auth?: CodebuildProjectSourceAuth[];
  /** git_submodules_config block */
  readonly gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig[];
}

function codebuildProjectSourceToTerraform(struct?: CodebuildProjectSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buildspec: cdktf.stringToTerraform(struct!.buildspec),
    git_clone_depth: cdktf.numberToTerraform(struct!.gitCloneDepth),
    insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
    location: cdktf.stringToTerraform(struct!.location),
    report_build_status: cdktf.booleanToTerraform(struct!.reportBuildStatus),
    type: cdktf.stringToTerraform(struct!.type),
    auth: cdktf.listMapper(codebuildProjectSourceAuthToTerraform)(struct!.auth),
    git_submodules_config: cdktf.listMapper(codebuildProjectSourceGitSubmodulesConfigToTerraform)(struct!.gitSubmodulesConfig),
  }
}

export interface CodebuildProjectVpcConfig {
  readonly securityGroupIds: string[];
  readonly subnets: string[];
  readonly vpcId: string;
}

function codebuildProjectVpcConfigToTerraform(struct?: CodebuildProjectVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


// Resource

export class CodebuildProject extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._description = config.description;
    this._encryptionKey = config.encryptionKey;
    this._name = config.name;
    this._queuedTimeout = config.queuedTimeout;
    this._serviceRole = config.serviceRole;
    this._sourceVersion = config.sourceVersion;
    this._tags = config.tags;
    this._artifacts = config.artifacts;
    this._cache = config.cache;
    this._environment = config.environment;
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
  private _badgeEnabled?: boolean;
  public get badgeEnabled() {
    return this.getBooleanAttribute('badge_enabled');
  }
  public set badgeEnabled(value: boolean ) {
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
  private _buildTimeout?: number;
  public get buildTimeout() {
    return this.getNumberAttribute('build_timeout');
  }
  public set buildTimeout(value: number ) {
    this._buildTimeout = value;
  }
  public resetBuildTimeout() {
    this._buildTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTimeoutInput() {
    return this._buildTimeout
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
    return this._description
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
    return this._encryptionKey
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

  // queued_timeout - computed: false, optional: true, required: false
  private _queuedTimeout?: number;
  public get queuedTimeout() {
    return this.getNumberAttribute('queued_timeout');
  }
  public set queuedTimeout(value: number ) {
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
  private _serviceRole: string;
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
  private _sourceVersion?: string;
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string ) {
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

  // artifacts - computed: false, optional: false, required: true
  private _artifacts: CodebuildProjectArtifacts[];
  public get artifacts() {
    return this.interpolationForAttribute('artifacts') as any;
  }
  public set artifacts(value: CodebuildProjectArtifacts[]) {
    this._artifacts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: CodebuildProjectCache[];
  public get cache() {
    return this.interpolationForAttribute('cache') as any;
  }
  public set cache(value: CodebuildProjectCache[] ) {
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
  private _environment: CodebuildProjectEnvironment[];
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: CodebuildProjectEnvironment[]) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // logs_config - computed: false, optional: true, required: false
  private _logsConfig?: CodebuildProjectLogsConfig[];
  public get logsConfig() {
    return this.interpolationForAttribute('logs_config') as any;
  }
  public set logsConfig(value: CodebuildProjectLogsConfig[] ) {
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
  private _secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
  public get secondaryArtifacts() {
    return this.interpolationForAttribute('secondary_artifacts') as any;
  }
  public set secondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[] ) {
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
  private _secondarySources?: CodebuildProjectSecondarySources[];
  public get secondarySources() {
    return this.interpolationForAttribute('secondary_sources') as any;
  }
  public set secondarySources(value: CodebuildProjectSecondarySources[] ) {
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
  private _source: CodebuildProjectSource[];
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: CodebuildProjectSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: CodebuildProjectVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: CodebuildProjectVpcConfig[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      name: cdktf.stringToTerraform(this._name),
      queued_timeout: cdktf.numberToTerraform(this._queuedTimeout),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      source_version: cdktf.stringToTerraform(this._sourceVersion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      artifacts: cdktf.listMapper(codebuildProjectArtifactsToTerraform)(this._artifacts),
      cache: cdktf.listMapper(codebuildProjectCacheToTerraform)(this._cache),
      environment: cdktf.listMapper(codebuildProjectEnvironmentToTerraform)(this._environment),
      logs_config: cdktf.listMapper(codebuildProjectLogsConfigToTerraform)(this._logsConfig),
      secondary_artifacts: cdktf.listMapper(codebuildProjectSecondaryArtifactsToTerraform)(this._secondaryArtifacts),
      secondary_sources: cdktf.listMapper(codebuildProjectSecondarySourcesToTerraform)(this._secondarySources),
      source: cdktf.listMapper(codebuildProjectSourceToTerraform)(this._source),
      vpc_config: cdktf.listMapper(codebuildProjectVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
