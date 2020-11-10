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
