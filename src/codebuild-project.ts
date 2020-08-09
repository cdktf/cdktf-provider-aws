// https://www.terraform.io/docs/providers/aws/r/codebuild_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodebuildProjectConfig extends TerraformMetaArguments {
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
export interface CodebuildProjectCache {
  readonly location?: string;
  readonly modes?: string[];
  readonly type?: string;
}
export interface CodebuildProjectEnvironmentEnvironmentVariable {
  readonly name: string;
  readonly type?: string;
  readonly value: string;
}
export interface CodebuildProjectEnvironmentRegistryCredential {
  readonly credential: string;
  readonly credentialProvider: string;
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
export interface CodebuildProjectLogsConfigCloudwatchLogs {
  readonly groupName?: string;
  readonly status?: string;
  readonly streamName?: string;
}
export interface CodebuildProjectLogsConfigS3Logs {
  readonly encryptionDisabled?: boolean;
  readonly location?: string;
  readonly status?: string;
}
export interface CodebuildProjectLogsConfig {
  /** cloudwatch_logs block */
  readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs[];
  /** s3_logs block */
  readonly s3Logs?: CodebuildProjectLogsConfigS3Logs[];
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
export interface CodebuildProjectSecondarySourcesAuth {
  readonly resource?: string;
  readonly type: string;
}
export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
  readonly fetchSubmodules: boolean;
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
export interface CodebuildProjectSourceAuth {
  readonly resource?: string;
  readonly type: string;
}
export interface CodebuildProjectSourceGitSubmodulesConfig {
  readonly fetchSubmodules: boolean;
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
export interface CodebuildProjectVpcConfig {
  readonly securityGroupIds: string[];
  readonly subnets: string[];
  readonly vpcId: string;
}

// Resource

export class CodebuildProject extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // badge_enabled - computed: false, optional: true, required: false
  private _badgeEnabled?: boolean;
  public get badgeEnabled() {
    return this._badgeEnabled;
  }
  public set badgeEnabled(value: boolean | undefined) {
    this._badgeEnabled = value;
  }

  // badge_url - computed: true, optional: false, required: true
  public get badgeUrl() {
    return this.getStringAttribute('badge_url');
  }

  // build_timeout - computed: false, optional: true, required: false
  private _buildTimeout?: number;
  public get buildTimeout() {
    return this._buildTimeout;
  }
  public set buildTimeout(value: number | undefined) {
    this._buildTimeout = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string;
  public get encryptionKey() {
    return this._encryptionKey ?? this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string | undefined) {
    this._encryptionKey = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // queued_timeout - computed: false, optional: true, required: false
  private _queuedTimeout?: number;
  public get queuedTimeout() {
    return this._queuedTimeout;
  }
  public set queuedTimeout(value: number | undefined) {
    this._queuedTimeout = value;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole: string;
  public get serviceRole() {
    return this._serviceRole;
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }

  // source_version - computed: false, optional: true, required: false
  private _sourceVersion?: string;
  public get sourceVersion() {
    return this._sourceVersion;
  }
  public set sourceVersion(value: string | undefined) {
    this._sourceVersion = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // artifacts - computed: false, optional: false, required: true
  private _artifacts: CodebuildProjectArtifacts[];
  public get artifacts() {
    return this._artifacts;
  }
  public set artifacts(value: CodebuildProjectArtifacts[]) {
    this._artifacts = value;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: CodebuildProjectCache[];
  public get cache() {
    return this._cache;
  }
  public set cache(value: CodebuildProjectCache[] | undefined) {
    this._cache = value;
  }

  // environment - computed: false, optional: false, required: true
  private _environment: CodebuildProjectEnvironment[];
  public get environment() {
    return this._environment;
  }
  public set environment(value: CodebuildProjectEnvironment[]) {
    this._environment = value;
  }

  // logs_config - computed: false, optional: true, required: false
  private _logsConfig?: CodebuildProjectLogsConfig[];
  public get logsConfig() {
    return this._logsConfig;
  }
  public set logsConfig(value: CodebuildProjectLogsConfig[] | undefined) {
    this._logsConfig = value;
  }

  // secondary_artifacts - computed: false, optional: true, required: false
  private _secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
  public get secondaryArtifacts() {
    return this._secondaryArtifacts;
  }
  public set secondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[] | undefined) {
    this._secondaryArtifacts = value;
  }

  // secondary_sources - computed: false, optional: true, required: false
  private _secondarySources?: CodebuildProjectSecondarySources[];
  public get secondarySources() {
    return this._secondarySources;
  }
  public set secondarySources(value: CodebuildProjectSecondarySources[] | undefined) {
    this._secondarySources = value;
  }

  // source - computed: false, optional: false, required: true
  private _source: CodebuildProjectSource[];
  public get source() {
    return this._source;
  }
  public set source(value: CodebuildProjectSource[]) {
    this._source = value;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: CodebuildProjectVpcConfig[];
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public set vpcConfig(value: CodebuildProjectVpcConfig[] | undefined) {
    this._vpcConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      badge_enabled: this._badgeEnabled,
      build_timeout: this._buildTimeout,
      description: this._description,
      encryption_key: this._encryptionKey,
      name: this._name,
      queued_timeout: this._queuedTimeout,
      service_role: this._serviceRole,
      source_version: this._sourceVersion,
      tags: this._tags,
      artifacts: this._artifacts,
      cache: this._cache,
      environment: this._environment,
      logs_config: this._logsConfig,
      secondary_artifacts: this._secondaryArtifacts,
      secondary_sources: this._secondarySources,
      source: this._source,
      vpc_config: this._vpcConfig,
    };
  }
}
