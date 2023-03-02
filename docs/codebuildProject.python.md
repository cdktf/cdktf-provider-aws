# `codebuildProject` Submodule <a name="`codebuildProject` Submodule" id="@cdktf/provider-aws.codebuildProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildProject <a name="CodebuildProject" id="@cdktf/provider-aws.codebuildProject.CodebuildProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project aws_codebuild_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifacts: CodebuildProjectArtifacts,
  environment: CodebuildProjectEnvironment,
  name: str,
  service_role: str,
  source: CodebuildProjectSource,
  badge_enabled: typing.Union[bool, IResolvable] = None,
  build_batch_config: CodebuildProjectBuildBatchConfig = None,
  build_timeout: typing.Union[int, float] = None,
  cache: CodebuildProjectCache = None,
  concurrent_build_limit: typing.Union[int, float] = None,
  description: str = None,
  encryption_key: str = None,
  file_system_locations: typing.Union[IResolvable, typing.List[CodebuildProjectFileSystemLocations]] = None,
  id: str = None,
  logs_config: CodebuildProjectLogsConfig = None,
  project_visibility: str = None,
  queued_timeout: typing.Union[int, float] = None,
  resource_access_role: str = None,
  secondary_artifacts: typing.Union[IResolvable, typing.List[CodebuildProjectSecondaryArtifacts]] = None,
  secondary_sources: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySources]] = None,
  secondary_source_version: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySourceVersion]] = None,
  source_version: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_config: CodebuildProjectVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.badgeEnabled">badge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.buildBatchConfig">build_batch_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | build_batch_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.buildTimeout">build_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.cache">cache</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | cache block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.concurrentBuildLimit">concurrent_build_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.fileSystemLocations">file_system_locations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]</code> | file_system_locations block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.logsConfig">logs_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.projectVisibility">project_visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.queuedTimeout">queued_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.resourceAccessRole">resource_access_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.secondaryArtifacts">secondary_artifacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]</code> | secondary_artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.secondarySources">secondary_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]</code> | secondary_sources block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.secondarySourceVersion">secondary_source_version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]</code> | secondary_source_version block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.artifacts"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifacts CodebuildProject#artifacts}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.environment"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment CodebuildProject#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.serviceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source CodebuildProject#source}

---

##### `badge_enabled`<sup>Optional</sup> <a name="badge_enabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.badgeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}.

---

##### `build_batch_config`<sup>Optional</sup> <a name="build_batch_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.buildBatchConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

build_batch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_batch_config CodebuildProject#build_batch_config}

---

##### `build_timeout`<sup>Optional</sup> <a name="build_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.buildTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.cache"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

cache block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cache CodebuildProject#cache}

---

##### `concurrent_build_limit`<sup>Optional</sup> <a name="concurrent_build_limit" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.concurrentBuildLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.encryptionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}.

---

##### `file_system_locations`<sup>Optional</sup> <a name="file_system_locations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.fileSystemLocations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]

file_system_locations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#file_system_locations CodebuildProject#file_system_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logs_config`<sup>Optional</sup> <a name="logs_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.logsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#logs_config CodebuildProject#logs_config}

---

##### `project_visibility`<sup>Optional</sup> <a name="project_visibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.projectVisibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}.

---

##### `queued_timeout`<sup>Optional</sup> <a name="queued_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.queuedTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}.

---

##### `resource_access_role`<sup>Optional</sup> <a name="resource_access_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.resourceAccessRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}.

---

##### `secondary_artifacts`<sup>Optional</sup> <a name="secondary_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.secondaryArtifacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]

secondary_artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_artifacts CodebuildProject#secondary_artifacts}

---

##### `secondary_sources`<sup>Optional</sup> <a name="secondary_sources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.secondarySources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]

secondary_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_sources CodebuildProject#secondary_sources}

---

##### `secondary_source_version`<sup>Optional</sup> <a name="secondary_source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.secondarySourceVersion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]

secondary_source_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_source_version CodebuildProject#secondary_source_version}

---

##### `source_version`<sup>Optional</sup> <a name="source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.sourceVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_config CodebuildProject#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts">put_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig">put_build_batch_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache">put_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations">put_file_system_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig">put_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts">put_secondary_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources">put_secondary_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion">put_secondary_source_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBadgeEnabled">reset_badge_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildBatchConfig">reset_build_batch_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildTimeout">reset_build_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetCache">reset_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetConcurrentBuildLimit">reset_concurrent_build_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetFileSystemLocations">reset_file_system_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetLogsConfig">reset_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetProjectVisibility">reset_project_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetQueuedTimeout">reset_queued_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetResourceAccessRole">reset_resource_access_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondaryArtifacts">reset_secondary_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySources">reset_secondary_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySourceVersion">reset_secondary_source_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSourceVersion">reset_source_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_artifacts` <a name="put_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts"></a>

```python
def put_artifacts(
  type: str,
  artifact_identifier: str = None,
  bucket_owner_access: str = None,
  encryption_disabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  name: str = None,
  namespace_type: str = None,
  override_artifact_name: typing.Union[bool, IResolvable] = None,
  packaging: str = None,
  path: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

###### `artifact_identifier`<sup>Optional</sup> <a name="artifact_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.artifactIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

###### `bucket_owner_access`<sup>Optional</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.bucketOwnerAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

###### `encryption_disabled`<sup>Optional</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.encryptionDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

###### `namespace_type`<sup>Optional</sup> <a name="namespace_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.namespaceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

###### `override_artifact_name`<sup>Optional</sup> <a name="override_artifact_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.overrideArtifactName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

###### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.packaging"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}.

---

##### `put_build_batch_config` <a name="put_build_batch_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig"></a>

```python
def put_build_batch_config(
  service_role: str,
  combine_artifacts: typing.Union[bool, IResolvable] = None,
  restrictions: CodebuildProjectBuildBatchConfigRestrictions = None,
  timeout_in_mins: typing.Union[int, float] = None
) -> None
```

###### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig.parameter.serviceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

###### `combine_artifacts`<sup>Optional</sup> <a name="combine_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig.parameter.combineArtifacts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}.

---

###### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig.parameter.restrictions"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#restrictions CodebuildProject#restrictions}

---

###### `timeout_in_mins`<sup>Optional</sup> <a name="timeout_in_mins" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig.parameter.timeoutInMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}.

---

##### `put_cache` <a name="put_cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache"></a>

```python
def put_cache(
  location: str = None,
  modes: typing.List[str] = None,
  type: str = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

###### `modes`<sup>Optional</sup> <a name="modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache.parameter.modes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#modes CodebuildProject#modes}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `put_environment` <a name="put_environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment"></a>

```python
def put_environment(
  compute_type: str,
  image: str,
  type: str,
  certificate: str = None,
  environment_variable: typing.Union[IResolvable, typing.List[CodebuildProjectEnvironmentEnvironmentVariable]] = None,
  image_pull_credentials_type: str = None,
  privileged_mode: typing.Union[bool, IResolvable] = None,
  registry_credential: CodebuildProjectEnvironmentRegistryCredential = None
) -> None
```

###### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.computeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_type CodebuildProject#compute_type}.

---

###### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image CodebuildProject#image}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

###### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#certificate CodebuildProject#certificate}.

---

###### `environment_variable`<sup>Optional</sup> <a name="environment_variable" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.environmentVariable"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]

environment_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment_variable CodebuildProject#environment_variable}

---

###### `image_pull_credentials_type`<sup>Optional</sup> <a name="image_pull_credentials_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.imagePullCredentialsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}.

---

###### `privileged_mode`<sup>Optional</sup> <a name="privileged_mode" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.privilegedMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#privileged_mode CodebuildProject#privileged_mode}.

---

###### `registry_credential`<sup>Optional</sup> <a name="registry_credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.registryCredential"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#registry_credential CodebuildProject#registry_credential}

---

##### `put_file_system_locations` <a name="put_file_system_locations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations"></a>

```python
def put_file_system_locations(
  value: typing.Union[IResolvable, typing.List[CodebuildProjectFileSystemLocations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]

---

##### `put_logs_config` <a name="put_logs_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig"></a>

```python
def put_logs_config(
  cloudwatch_logs: CodebuildProjectLogsConfigCloudwatchLogs = None,
  s3_logs: CodebuildProjectLogsConfigS3Logs = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cloudwatch_logs CodebuildProject#cloudwatch_logs}

---

###### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig.parameter.s3Logs"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#s3_logs CodebuildProject#s3_logs}

---

##### `put_secondary_artifacts` <a name="put_secondary_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts"></a>

```python
def put_secondary_artifacts(
  value: typing.Union[IResolvable, typing.List[CodebuildProjectSecondaryArtifacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]

---

##### `put_secondary_sources` <a name="put_secondary_sources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources"></a>

```python
def put_secondary_sources(
  value: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]

---

##### `put_secondary_source_version` <a name="put_secondary_source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion"></a>

```python
def put_secondary_source_version(
  value: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySourceVersion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]

---

##### `put_source` <a name="put_source" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource"></a>

```python
def put_source(
  type: str,
  auth: CodebuildProjectSourceAuth = None,
  buildspec: str = None,
  build_status_config: CodebuildProjectSourceBuildStatusConfig = None,
  git_clone_depth: typing.Union[int, float] = None,
  git_submodules_config: CodebuildProjectSourceGitSubmodulesConfig = None,
  insecure_ssl: typing.Union[bool, IResolvable] = None,
  location: str = None,
  report_build_status: typing.Union[bool, IResolvable] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

###### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.auth"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#auth CodebuildProject#auth}

---

###### `buildspec`<sup>Optional</sup> <a name="buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.buildspec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}.

---

###### `build_status_config`<sup>Optional</sup> <a name="build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.buildStatusConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

###### `git_clone_depth`<sup>Optional</sup> <a name="git_clone_depth" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.gitCloneDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

###### `git_submodules_config`<sup>Optional</sup> <a name="git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.gitSubmodulesConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

###### `insecure_ssl`<sup>Optional</sup> <a name="insecure_ssl" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.insecureSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

###### `report_build_status`<sup>Optional</sup> <a name="report_build_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.reportBuildStatus"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str],
  subnets: typing.List[str],
  vpc_id: str
) -> None
```

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#security_group_ids CodebuildProject#security_group_ids}.

---

###### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#subnets CodebuildProject#subnets}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_id CodebuildProject#vpc_id}.

---

##### `reset_badge_enabled` <a name="reset_badge_enabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBadgeEnabled"></a>

```python
def reset_badge_enabled() -> None
```

##### `reset_build_batch_config` <a name="reset_build_batch_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildBatchConfig"></a>

```python
def reset_build_batch_config() -> None
```

##### `reset_build_timeout` <a name="reset_build_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildTimeout"></a>

```python
def reset_build_timeout() -> None
```

##### `reset_cache` <a name="reset_cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetCache"></a>

```python
def reset_cache() -> None
```

##### `reset_concurrent_build_limit` <a name="reset_concurrent_build_limit" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetConcurrentBuildLimit"></a>

```python
def reset_concurrent_build_limit() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_file_system_locations` <a name="reset_file_system_locations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetFileSystemLocations"></a>

```python
def reset_file_system_locations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logs_config` <a name="reset_logs_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetLogsConfig"></a>

```python
def reset_logs_config() -> None
```

##### `reset_project_visibility` <a name="reset_project_visibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetProjectVisibility"></a>

```python
def reset_project_visibility() -> None
```

##### `reset_queued_timeout` <a name="reset_queued_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetQueuedTimeout"></a>

```python
def reset_queued_timeout() -> None
```

##### `reset_resource_access_role` <a name="reset_resource_access_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetResourceAccessRole"></a>

```python
def reset_resource_access_role() -> None
```

##### `reset_secondary_artifacts` <a name="reset_secondary_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondaryArtifacts"></a>

```python
def reset_secondary_artifacts() -> None
```

##### `reset_secondary_sources` <a name="reset_secondary_sources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySources"></a>

```python
def reset_secondary_sources() -> None
```

##### `reset_secondary_source_version` <a name="reset_secondary_source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySourceVersion"></a>

```python
def reset_secondary_source_version() -> None
```

##### `reset_source_version` <a name="reset_source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSourceVersion"></a>

```python
def reset_source_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProject.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeUrl">badge_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfig">build_batch_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cache">cache</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocations">file_system_locations</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfig">logs_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.publicProjectAlias">public_project_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifacts">secondary_artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySources">secondary_sources</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersion">secondary_source_version</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifactsInput">artifacts_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabledInput">badge_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfigInput">build_batch_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeoutInput">build_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cacheInput">cache_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput">concurrent_build_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environmentInput">environment_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocationsInput">file_system_locations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfigInput">logs_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibilityInput">project_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeoutInput">queued_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRoleInput">resource_access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifactsInput">secondary_artifacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourcesInput">secondary_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersionInput">secondary_source_version_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersionInput">source_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfigInput">vpc_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabled">badge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeout">build_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimit">concurrent_build_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibility">project_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeout">queued_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRole">resource_access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersion">source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifacts"></a>

```python
artifacts: CodebuildProjectArtifactsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a>

---

##### `badge_url`<sup>Required</sup> <a name="badge_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeUrl"></a>

```python
badge_url: str
```

- *Type:* str

---

##### `build_batch_config`<sup>Required</sup> <a name="build_batch_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfig"></a>

```python
build_batch_config: CodebuildProjectBuildBatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a>

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cache"></a>

```python
cache: CodebuildProjectCacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environment"></a>

```python
environment: CodebuildProjectEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a>

---

##### `file_system_locations`<sup>Required</sup> <a name="file_system_locations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocations"></a>

```python
file_system_locations: CodebuildProjectFileSystemLocationsList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a>

---

##### `logs_config`<sup>Required</sup> <a name="logs_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfig"></a>

```python
logs_config: CodebuildProjectLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a>

---

##### `public_project_alias`<sup>Required</sup> <a name="public_project_alias" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.publicProjectAlias"></a>

```python
public_project_alias: str
```

- *Type:* str

---

##### `secondary_artifacts`<sup>Required</sup> <a name="secondary_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifacts"></a>

```python
secondary_artifacts: CodebuildProjectSecondaryArtifactsList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a>

---

##### `secondary_sources`<sup>Required</sup> <a name="secondary_sources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySources"></a>

```python
secondary_sources: CodebuildProjectSecondarySourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a>

---

##### `secondary_source_version`<sup>Required</sup> <a name="secondary_source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersion"></a>

```python
secondary_source_version: CodebuildProjectSecondarySourceVersionList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.source"></a>

```python
source: CodebuildProjectSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfig"></a>

```python
vpc_config: CodebuildProjectVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a>

---

##### `artifacts_input`<sup>Optional</sup> <a name="artifacts_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifactsInput"></a>

```python
artifacts_input: CodebuildProjectArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---

##### `badge_enabled_input`<sup>Optional</sup> <a name="badge_enabled_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabledInput"></a>

```python
badge_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `build_batch_config_input`<sup>Optional</sup> <a name="build_batch_config_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfigInput"></a>

```python
build_batch_config_input: CodebuildProjectBuildBatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---

##### `build_timeout_input`<sup>Optional</sup> <a name="build_timeout_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeoutInput"></a>

```python
build_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_input`<sup>Optional</sup> <a name="cache_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cacheInput"></a>

```python
cache_input: CodebuildProjectCache
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---

##### `concurrent_build_limit_input`<sup>Optional</sup> <a name="concurrent_build_limit_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput"></a>

```python
concurrent_build_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environmentInput"></a>

```python
environment_input: CodebuildProjectEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---

##### `file_system_locations_input`<sup>Optional</sup> <a name="file_system_locations_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocationsInput"></a>

```python
file_system_locations_input: typing.Union[IResolvable, typing.List[CodebuildProjectFileSystemLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logs_config_input`<sup>Optional</sup> <a name="logs_config_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfigInput"></a>

```python
logs_config_input: CodebuildProjectLogsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_visibility_input`<sup>Optional</sup> <a name="project_visibility_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibilityInput"></a>

```python
project_visibility_input: str
```

- *Type:* str

---

##### `queued_timeout_input`<sup>Optional</sup> <a name="queued_timeout_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeoutInput"></a>

```python
queued_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_access_role_input`<sup>Optional</sup> <a name="resource_access_role_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRoleInput"></a>

```python
resource_access_role_input: str
```

- *Type:* str

---

##### `secondary_artifacts_input`<sup>Optional</sup> <a name="secondary_artifacts_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifactsInput"></a>

```python
secondary_artifacts_input: typing.Union[IResolvable, typing.List[CodebuildProjectSecondaryArtifacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]

---

##### `secondary_sources_input`<sup>Optional</sup> <a name="secondary_sources_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourcesInput"></a>

```python
secondary_sources_input: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]

---

##### `secondary_source_version_input`<sup>Optional</sup> <a name="secondary_source_version_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersionInput"></a>

```python
secondary_source_version_input: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySourceVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceInput"></a>

```python
source_input: CodebuildProjectSource
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---

##### `source_version_input`<sup>Optional</sup> <a name="source_version_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersionInput"></a>

```python
source_version_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfigInput"></a>

```python
vpc_config_input: CodebuildProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---

##### `badge_enabled`<sup>Required</sup> <a name="badge_enabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabled"></a>

```python
badge_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `build_timeout`<sup>Required</sup> <a name="build_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeout"></a>

```python
build_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `concurrent_build_limit`<sup>Required</sup> <a name="concurrent_build_limit" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimit"></a>

```python
concurrent_build_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_visibility`<sup>Required</sup> <a name="project_visibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibility"></a>

```python
project_visibility: str
```

- *Type:* str

---

##### `queued_timeout`<sup>Required</sup> <a name="queued_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeout"></a>

```python
queued_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_access_role`<sup>Required</sup> <a name="resource_access_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRole"></a>

```python
resource_access_role: str
```

- *Type:* str

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `source_version`<sup>Required</sup> <a name="source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildProjectArtifacts <a name="CodebuildProjectArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectArtifacts(
  type: str,
  artifact_identifier: str = None,
  bucket_owner_access: str = None,
  encryption_disabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  name: str = None,
  namespace_type: str = None,
  override_artifact_name: typing.Union[bool, IResolvable] = None,
  packaging: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier">artifact_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess">bucket_owner_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.namespaceType">namespace_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName">override_artifact_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.packaging">packaging</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `artifact_identifier`<sup>Optional</sup> <a name="artifact_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier"></a>

```python
artifact_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `bucket_owner_access`<sup>Optional</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess"></a>

```python
bucket_owner_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `encryption_disabled`<sup>Optional</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `namespace_type`<sup>Optional</sup> <a name="namespace_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.namespaceType"></a>

```python
namespace_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `override_artifact_name`<sup>Optional</sup> <a name="override_artifact_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName"></a>

```python
override_artifact_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.packaging"></a>

```python
packaging: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectBuildBatchConfig <a name="CodebuildProjectBuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectBuildBatchConfig(
  service_role: str,
  combine_artifacts: typing.Union[bool, IResolvable] = None,
  restrictions: CodebuildProjectBuildBatchConfigRestrictions = None,
  timeout_in_mins: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts">combine_artifacts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins">timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}. |

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `combine_artifacts`<sup>Optional</sup> <a name="combine_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts"></a>

```python
combine_artifacts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}.

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions"></a>

```python
restrictions: CodebuildProjectBuildBatchConfigRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#restrictions CodebuildProject#restrictions}

---

##### `timeout_in_mins`<sup>Optional</sup> <a name="timeout_in_mins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins"></a>

```python
timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}.

---

### CodebuildProjectBuildBatchConfigRestrictions <a name="CodebuildProjectBuildBatchConfigRestrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectBuildBatchConfigRestrictions(
  compute_types_allowed: typing.List[str] = None,
  maximum_builds_allowed: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed">compute_types_allowed</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed">maximum_builds_allowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}. |

---

##### `compute_types_allowed`<sup>Optional</sup> <a name="compute_types_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

```python
compute_types_allowed: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}.

---

##### `maximum_builds_allowed`<sup>Optional</sup> <a name="maximum_builds_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

```python
maximum_builds_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}.

---

### CodebuildProjectCache <a name="CodebuildProjectCache" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectCache(
  location: str = None,
  modes: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.modes">modes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#modes CodebuildProject#modes}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `modes`<sup>Optional</sup> <a name="modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.modes"></a>

```python
modes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#modes CodebuildProject#modes}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectConfig <a name="CodebuildProjectConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifacts: CodebuildProjectArtifacts,
  environment: CodebuildProjectEnvironment,
  name: str,
  service_role: str,
  source: CodebuildProjectSource,
  badge_enabled: typing.Union[bool, IResolvable] = None,
  build_batch_config: CodebuildProjectBuildBatchConfig = None,
  build_timeout: typing.Union[int, float] = None,
  cache: CodebuildProjectCache = None,
  concurrent_build_limit: typing.Union[int, float] = None,
  description: str = None,
  encryption_key: str = None,
  file_system_locations: typing.Union[IResolvable, typing.List[CodebuildProjectFileSystemLocations]] = None,
  id: str = None,
  logs_config: CodebuildProjectLogsConfig = None,
  project_visibility: str = None,
  queued_timeout: typing.Union[int, float] = None,
  resource_access_role: str = None,
  secondary_artifacts: typing.Union[IResolvable, typing.List[CodebuildProjectSecondaryArtifacts]] = None,
  secondary_sources: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySources]] = None,
  secondary_source_version: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySourceVersion]] = None,
  source_version: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_config: CodebuildProjectVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.badgeEnabled">badge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig">build_batch_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | build_batch_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildTimeout">build_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.cache">cache</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | cache block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit">concurrent_build_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.encryptionKey">encryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations">file_system_locations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]</code> | file_system_locations block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.logsConfig">logs_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.projectVisibility">project_visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.queuedTimeout">queued_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole">resource_access_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts">secondary_artifacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]</code> | secondary_artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySources">secondary_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]</code> | secondary_sources block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion">secondary_source_version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]</code> | secondary_source_version block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.artifacts"></a>

```python
artifacts: CodebuildProjectArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifacts CodebuildProject#artifacts}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.environment"></a>

```python
environment: CodebuildProjectEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment CodebuildProject#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.source"></a>

```python
source: CodebuildProjectSource
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source CodebuildProject#source}

---

##### `badge_enabled`<sup>Optional</sup> <a name="badge_enabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.badgeEnabled"></a>

```python
badge_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}.

---

##### `build_batch_config`<sup>Optional</sup> <a name="build_batch_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig"></a>

```python
build_batch_config: CodebuildProjectBuildBatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

build_batch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_batch_config CodebuildProject#build_batch_config}

---

##### `build_timeout`<sup>Optional</sup> <a name="build_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildTimeout"></a>

```python
build_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.cache"></a>

```python
cache: CodebuildProjectCache
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

cache block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cache CodebuildProject#cache}

---

##### `concurrent_build_limit`<sup>Optional</sup> <a name="concurrent_build_limit" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit"></a>

```python
concurrent_build_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}.

---

##### `file_system_locations`<sup>Optional</sup> <a name="file_system_locations" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations"></a>

```python
file_system_locations: typing.Union[IResolvable, typing.List[CodebuildProjectFileSystemLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]

file_system_locations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#file_system_locations CodebuildProject#file_system_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logs_config`<sup>Optional</sup> <a name="logs_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.logsConfig"></a>

```python
logs_config: CodebuildProjectLogsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#logs_config CodebuildProject#logs_config}

---

##### `project_visibility`<sup>Optional</sup> <a name="project_visibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.projectVisibility"></a>

```python
project_visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}.

---

##### `queued_timeout`<sup>Optional</sup> <a name="queued_timeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.queuedTimeout"></a>

```python
queued_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}.

---

##### `resource_access_role`<sup>Optional</sup> <a name="resource_access_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole"></a>

```python
resource_access_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}.

---

##### `secondary_artifacts`<sup>Optional</sup> <a name="secondary_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts"></a>

```python
secondary_artifacts: typing.Union[IResolvable, typing.List[CodebuildProjectSecondaryArtifacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]

secondary_artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_artifacts CodebuildProject#secondary_artifacts}

---

##### `secondary_sources`<sup>Optional</sup> <a name="secondary_sources" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySources"></a>

```python
secondary_sources: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]

secondary_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_sources CodebuildProject#secondary_sources}

---

##### `secondary_source_version`<sup>Optional</sup> <a name="secondary_source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion"></a>

```python
secondary_source_version: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySourceVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]

secondary_source_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_source_version CodebuildProject#secondary_source_version}

---

##### `source_version`<sup>Optional</sup> <a name="source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.vpcConfig"></a>

```python
vpc_config: CodebuildProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_config CodebuildProject#vpc_config}

---

### CodebuildProjectEnvironment <a name="CodebuildProjectEnvironment" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectEnvironment(
  compute_type: str,
  image: str,
  type: str,
  certificate: str = None,
  environment_variable: typing.Union[IResolvable, typing.List[CodebuildProjectEnvironmentEnvironmentVariable]] = None,
  image_pull_credentials_type: str = None,
  privileged_mode: typing.Union[bool, IResolvable] = None,
  registry_credential: CodebuildProjectEnvironmentRegistryCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.computeType">compute_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_type CodebuildProject#compute_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image CodebuildProject#image}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#certificate CodebuildProject#certificate}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable">environment_variable</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]</code> | environment_variable block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType">image_pull_credentials_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode">privileged_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#privileged_mode CodebuildProject#privileged_mode}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.registryCredential">registry_credential</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | registry_credential block. |

---

##### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_type CodebuildProject#compute_type}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image CodebuildProject#image}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#certificate CodebuildProject#certificate}.

---

##### `environment_variable`<sup>Optional</sup> <a name="environment_variable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable"></a>

```python
environment_variable: typing.Union[IResolvable, typing.List[CodebuildProjectEnvironmentEnvironmentVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]

environment_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment_variable CodebuildProject#environment_variable}

---

##### `image_pull_credentials_type`<sup>Optional</sup> <a name="image_pull_credentials_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType"></a>

```python
image_pull_credentials_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}.

---

##### `privileged_mode`<sup>Optional</sup> <a name="privileged_mode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode"></a>

```python
privileged_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#privileged_mode CodebuildProject#privileged_mode}.

---

##### `registry_credential`<sup>Optional</sup> <a name="registry_credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.registryCredential"></a>

```python
registry_credential: CodebuildProjectEnvironmentRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#registry_credential CodebuildProject#registry_credential}

---

### CodebuildProjectEnvironmentEnvironmentVariable <a name="CodebuildProjectEnvironmentEnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable(
  name: str,
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#value CodebuildProject#value}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#value CodebuildProject#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectEnvironmentRegistryCredential <a name="CodebuildProjectEnvironmentRegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectEnvironmentRegistryCredential(
  credential: str,
  credential_provider: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential">credential</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential CodebuildProject#credential}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider">credential_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential_provider CodebuildProject#credential_provider}. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential"></a>

```python
credential: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential CodebuildProject#credential}.

---

##### `credential_provider`<sup>Required</sup> <a name="credential_provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider"></a>

```python
credential_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential_provider CodebuildProject#credential_provider}.

---

### CodebuildProjectFileSystemLocations <a name="CodebuildProjectFileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectFileSystemLocations(
  identifier: str = None,
  location: str = None,
  mount_options: str = None,
  mount_point: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#identifier CodebuildProject#identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions">mount_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_options CodebuildProject#mount_options}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint">mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_point CodebuildProject#mount_point}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#identifier CodebuildProject#identifier}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_options CodebuildProject#mount_options}.

---

##### `mount_point`<sup>Optional</sup> <a name="mount_point" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_point CodebuildProject#mount_point}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectLogsConfig <a name="CodebuildProjectLogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectLogsConfig(
  cloudwatch_logs: CodebuildProjectLogsConfigCloudwatchLogs = None,
  s3_logs: CodebuildProjectLogsConfigS3Logs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | s3_logs block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: CodebuildProjectLogsConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cloudwatch_logs CodebuildProject#cloudwatch_logs}

---

##### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs"></a>

```python
s3_logs: CodebuildProjectLogsConfigS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#s3_logs CodebuildProject#s3_logs}

---

### CodebuildProjectLogsConfigCloudwatchLogs <a name="CodebuildProjectLogsConfigCloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs(
  group_name: str = None,
  status: str = None,
  stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#group_name CodebuildProject#group_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#stream_name CodebuildProject#stream_name}. |

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#group_name CodebuildProject#group_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#stream_name CodebuildProject#stream_name}.

---

### CodebuildProjectLogsConfigS3Logs <a name="CodebuildProjectLogsConfigS3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectLogsConfigS3Logs(
  bucket_owner_access: str = None,
  encryption_disabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess">bucket_owner_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}. |

---

##### `bucket_owner_access`<sup>Optional</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess"></a>

```python
bucket_owner_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `encryption_disabled`<sup>Optional</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

### CodebuildProjectSecondaryArtifacts <a name="CodebuildProjectSecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondaryArtifacts(
  artifact_identifier: str,
  type: str,
  bucket_owner_access: str = None,
  encryption_disabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  name: str = None,
  namespace_type: str = None,
  override_artifact_name: typing.Union[bool, IResolvable] = None,
  packaging: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier">artifact_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess">bucket_owner_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType">namespace_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName">override_artifact_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging">packaging</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}. |

---

##### `artifact_identifier`<sup>Required</sup> <a name="artifact_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier"></a>

```python
artifact_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `bucket_owner_access`<sup>Optional</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess"></a>

```python
bucket_owner_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `encryption_disabled`<sup>Optional</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `namespace_type`<sup>Optional</sup> <a name="namespace_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType"></a>

```python
namespace_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `override_artifact_name`<sup>Optional</sup> <a name="override_artifact_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName"></a>

```python
override_artifact_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging"></a>

```python
packaging: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectSecondarySources <a name="CodebuildProjectSecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySources(
  source_identifier: str,
  type: str,
  auth: CodebuildProjectSecondarySourcesAuth = None,
  buildspec: str = None,
  build_status_config: CodebuildProjectSecondarySourcesBuildStatusConfig = None,
  git_clone_depth: typing.Union[int, float] = None,
  git_submodules_config: CodebuildProjectSecondarySourcesGitSubmodulesConfig = None,
  insecure_ssl: typing.Union[bool, IResolvable] = None,
  location: str = None,
  report_build_status: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildspec">buildspec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig">build_status_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth">git_clone_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig">git_submodules_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl">insecure_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus">report_build_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `source_identifier`<sup>Required</sup> <a name="source_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.auth"></a>

```python
auth: CodebuildProjectSecondarySourcesAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#auth CodebuildProject#auth}

---

##### `buildspec`<sup>Optional</sup> <a name="buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildspec"></a>

```python
buildspec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `build_status_config`<sup>Optional</sup> <a name="build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig"></a>

```python
build_status_config: CodebuildProjectSecondarySourcesBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `git_clone_depth`<sup>Optional</sup> <a name="git_clone_depth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth"></a>

```python
git_clone_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `git_submodules_config`<sup>Optional</sup> <a name="git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig"></a>

```python
git_submodules_config: CodebuildProjectSecondarySourcesGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `insecure_ssl`<sup>Optional</sup> <a name="insecure_ssl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl"></a>

```python
insecure_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `report_build_status`<sup>Optional</sup> <a name="report_build_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus"></a>

```python
report_build_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSecondarySourcesAuth <a name="CodebuildProjectSecondarySourcesAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesAuth(
  type: str,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSecondarySourcesBuildStatusConfig <a name="CodebuildProjectSecondarySourcesBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig(
  context: str = None,
  target_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context">context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl">target_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context"></a>

```python
context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

##### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSecondarySourcesGitSubmodulesConfig <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig(
  fetch_submodules: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules">fetch_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `fetch_submodules`<sup>Required</sup> <a name="fetch_submodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules"></a>

```python
fetch_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectSecondarySourceVersion <a name="CodebuildProjectSecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourceVersion(
  source_identifier: str,
  source_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}. |

---

##### `source_identifier`<sup>Required</sup> <a name="source_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `source_version`<sup>Required</sup> <a name="source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}.

---

### CodebuildProjectSource <a name="CodebuildProjectSource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSource(
  type: str,
  auth: CodebuildProjectSourceAuth = None,
  buildspec: str = None,
  build_status_config: CodebuildProjectSourceBuildStatusConfig = None,
  git_clone_depth: typing.Union[int, float] = None,
  git_submodules_config: CodebuildProjectSourceGitSubmodulesConfig = None,
  insecure_ssl: typing.Union[bool, IResolvable] = None,
  location: str = None,
  report_build_status: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildspec">buildspec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildStatusConfig">build_status_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitCloneDepth">git_clone_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig">git_submodules_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.insecureSsl">insecure_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.reportBuildStatus">report_build_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.auth"></a>

```python
auth: CodebuildProjectSourceAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#auth CodebuildProject#auth}

---

##### `buildspec`<sup>Optional</sup> <a name="buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildspec"></a>

```python
buildspec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `build_status_config`<sup>Optional</sup> <a name="build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildStatusConfig"></a>

```python
build_status_config: CodebuildProjectSourceBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `git_clone_depth`<sup>Optional</sup> <a name="git_clone_depth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitCloneDepth"></a>

```python
git_clone_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `git_submodules_config`<sup>Optional</sup> <a name="git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig"></a>

```python
git_submodules_config: CodebuildProjectSourceGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `insecure_ssl`<sup>Optional</sup> <a name="insecure_ssl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.insecureSsl"></a>

```python
insecure_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `report_build_status`<sup>Optional</sup> <a name="report_build_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.reportBuildStatus"></a>

```python
report_build_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSourceAuth <a name="CodebuildProjectSourceAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSourceAuth(
  type: str,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSourceBuildStatusConfig <a name="CodebuildProjectSourceBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSourceBuildStatusConfig(
  context: str = None,
  target_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context">context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl">target_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context"></a>

```python
context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

##### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSourceGitSubmodulesConfig <a name="CodebuildProjectSourceGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSourceGitSubmodulesConfig(
  fetch_submodules: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules">fetch_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `fetch_submodules`<sup>Required</sup> <a name="fetch_submodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

```python
fetch_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectVpcConfig <a name="CodebuildProjectVpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectVpcConfig(
  security_group_ids: typing.List[str],
  subnets: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#security_group_ids CodebuildProject#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#subnets CodebuildProject#subnets}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_id CodebuildProject#vpc_id}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#security_group_ids CodebuildProject#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#subnets CodebuildProject#subnets}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_id CodebuildProject#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildProjectArtifactsOutputReference <a name="CodebuildProjectArtifactsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetArtifactIdentifier">reset_artifact_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetBucketOwnerAccess">reset_bucket_owner_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetEncryptionDisabled">reset_encryption_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetNamespaceType">reset_namespace_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetOverrideArtifactName">reset_override_artifact_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPackaging">reset_packaging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_artifact_identifier` <a name="reset_artifact_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetArtifactIdentifier"></a>

```python
def reset_artifact_identifier() -> None
```

##### `reset_bucket_owner_access` <a name="reset_bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetBucketOwnerAccess"></a>

```python
def reset_bucket_owner_access() -> None
```

##### `reset_encryption_disabled` <a name="reset_encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetEncryptionDisabled"></a>

```python
def reset_encryption_disabled() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace_type` <a name="reset_namespace_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetNamespaceType"></a>

```python
def reset_namespace_type() -> None
```

##### `reset_override_artifact_name` <a name="reset_override_artifact_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetOverrideArtifactName"></a>

```python
def reset_override_artifact_name() -> None
```

##### `reset_packaging` <a name="reset_packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPackaging"></a>

```python
def reset_packaging() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput">artifact_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput">bucket_owner_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput">encryption_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput">namespace_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput">override_artifact_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput">packaging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier">artifact_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess">bucket_owner_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType">namespace_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName">override_artifact_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging">packaging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_identifier_input`<sup>Optional</sup> <a name="artifact_identifier_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput"></a>

```python
artifact_identifier_input: str
```

- *Type:* str

---

##### `bucket_owner_access_input`<sup>Optional</sup> <a name="bucket_owner_access_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```python
bucket_owner_access_input: str
```

- *Type:* str

---

##### `encryption_disabled_input`<sup>Optional</sup> <a name="encryption_disabled_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput"></a>

```python
encryption_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_type_input`<sup>Optional</sup> <a name="namespace_type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput"></a>

```python
namespace_type_input: str
```

- *Type:* str

---

##### `override_artifact_name_input`<sup>Optional</sup> <a name="override_artifact_name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```python
override_artifact_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packaging_input`<sup>Optional</sup> <a name="packaging_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput"></a>

```python
packaging_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `artifact_identifier`<sup>Required</sup> <a name="artifact_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier"></a>

```python
artifact_identifier: str
```

- *Type:* str

---

##### `bucket_owner_access`<sup>Required</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess"></a>

```python
bucket_owner_access: str
```

- *Type:* str

---

##### `encryption_disabled`<sup>Required</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_type`<sup>Required</sup> <a name="namespace_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType"></a>

```python
namespace_type: str
```

- *Type:* str

---

##### `override_artifact_name`<sup>Required</sup> <a name="override_artifact_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName"></a>

```python
override_artifact_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging"></a>

```python
packaging: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---


### CodebuildProjectBuildBatchConfigOutputReference <a name="CodebuildProjectBuildBatchConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectBuildBatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions">put_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetCombineArtifacts">reset_combine_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetRestrictions">reset_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetTimeoutInMins">reset_timeout_in_mins</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_restrictions` <a name="put_restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions"></a>

```python
def put_restrictions(
  compute_types_allowed: typing.List[str] = None,
  maximum_builds_allowed: typing.Union[int, float] = None
) -> None
```

###### `compute_types_allowed`<sup>Optional</sup> <a name="compute_types_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions.parameter.computeTypesAllowed"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}.

---

###### `maximum_builds_allowed`<sup>Optional</sup> <a name="maximum_builds_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions.parameter.maximumBuildsAllowed"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}.

---

##### `reset_combine_artifacts` <a name="reset_combine_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetCombineArtifacts"></a>

```python
def reset_combine_artifacts() -> None
```

##### `reset_restrictions` <a name="reset_restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetRestrictions"></a>

```python
def reset_restrictions() -> None
```

##### `reset_timeout_in_mins` <a name="reset_timeout_in_mins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetTimeoutInMins"></a>

```python
def reset_timeout_in_mins() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput">combine_artifacts_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput">restrictions_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput">timeout_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts">combine_artifacts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins">timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions"></a>

```python
restrictions: CodebuildProjectBuildBatchConfigRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a>

---

##### `combine_artifacts_input`<sup>Optional</sup> <a name="combine_artifacts_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput"></a>

```python
combine_artifacts_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrictions_input`<sup>Optional</sup> <a name="restrictions_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput"></a>

```python
restrictions_input: CodebuildProjectBuildBatchConfigRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `timeout_in_mins_input`<sup>Optional</sup> <a name="timeout_in_mins_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput"></a>

```python
timeout_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `combine_artifacts`<sup>Required</sup> <a name="combine_artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts"></a>

```python
combine_artifacts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `timeout_in_mins`<sup>Required</sup> <a name="timeout_in_mins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins"></a>

```python
timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectBuildBatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---


### CodebuildProjectBuildBatchConfigRestrictionsOutputReference <a name="CodebuildProjectBuildBatchConfigRestrictionsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetComputeTypesAllowed">reset_compute_types_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetMaximumBuildsAllowed">reset_maximum_builds_allowed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_types_allowed` <a name="reset_compute_types_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetComputeTypesAllowed"></a>

```python
def reset_compute_types_allowed() -> None
```

##### `reset_maximum_builds_allowed` <a name="reset_maximum_builds_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetMaximumBuildsAllowed"></a>

```python
def reset_maximum_builds_allowed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput">compute_types_allowed_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput">maximum_builds_allowed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed">compute_types_allowed</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed">maximum_builds_allowed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_types_allowed_input`<sup>Optional</sup> <a name="compute_types_allowed_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput"></a>

```python
compute_types_allowed_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_builds_allowed_input`<sup>Optional</sup> <a name="maximum_builds_allowed_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput"></a>

```python
maximum_builds_allowed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_types_allowed`<sup>Required</sup> <a name="compute_types_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed"></a>

```python
compute_types_allowed: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_builds_allowed`<sup>Required</sup> <a name="maximum_builds_allowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed"></a>

```python
maximum_builds_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectBuildBatchConfigRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---


### CodebuildProjectCacheOutputReference <a name="CodebuildProjectCacheOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetModes">reset_modes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_modes` <a name="reset_modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetModes"></a>

```python
def reset_modes() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput">modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modes">modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `modes_input`<sup>Optional</sup> <a name="modes_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput"></a>

```python
modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modes"></a>

```python
modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectCache
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---


### CodebuildProjectEnvironmentEnvironmentVariableList <a name="CodebuildProjectEnvironmentEnvironmentVariableList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodebuildProjectEnvironmentEnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodebuildProjectEnvironmentEnvironmentVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]

---


### CodebuildProjectEnvironmentEnvironmentVariableOutputReference <a name="CodebuildProjectEnvironmentEnvironmentVariableOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodebuildProjectEnvironmentEnvironmentVariable, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>, cdktf.IResolvable]

---


### CodebuildProjectEnvironmentOutputReference <a name="CodebuildProjectEnvironmentOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable">put_environment_variable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential">put_registry_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetEnvironmentVariable">reset_environment_variable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetImagePullCredentialsType">reset_image_pull_credentials_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetPrivilegedMode">reset_privileged_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetRegistryCredential">reset_registry_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment_variable` <a name="put_environment_variable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable"></a>

```python
def put_environment_variable(
  value: typing.Union[IResolvable, typing.List[CodebuildProjectEnvironmentEnvironmentVariable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]

---

##### `put_registry_credential` <a name="put_registry_credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential"></a>

```python
def put_registry_credential(
  credential: str,
  credential_provider: str
) -> None
```

###### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential.parameter.credential"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential CodebuildProject#credential}.

---

###### `credential_provider`<sup>Required</sup> <a name="credential_provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential.parameter.credentialProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential_provider CodebuildProject#credential_provider}.

---

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_environment_variable` <a name="reset_environment_variable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetEnvironmentVariable"></a>

```python
def reset_environment_variable() -> None
```

##### `reset_image_pull_credentials_type` <a name="reset_image_pull_credentials_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetImagePullCredentialsType"></a>

```python
def reset_image_pull_credentials_type() -> None
```

##### `reset_privileged_mode` <a name="reset_privileged_mode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetPrivilegedMode"></a>

```python
def reset_privileged_mode() -> None
```

##### `reset_registry_credential` <a name="reset_registry_credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetRegistryCredential"></a>

```python
def reset_registry_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable">environment_variable</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential">registry_credential</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput">compute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput">environment_variable_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput">image_pull_credentials_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput">privileged_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput">registry_credential_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType">compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType">image_pull_credentials_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode">privileged_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_variable`<sup>Required</sup> <a name="environment_variable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable"></a>

```python
environment_variable: CodebuildProjectEnvironmentEnvironmentVariableList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a>

---

##### `registry_credential`<sup>Required</sup> <a name="registry_credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential"></a>

```python
registry_credential: CodebuildProjectEnvironmentRegistryCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `compute_type_input`<sup>Optional</sup> <a name="compute_type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput"></a>

```python
compute_type_input: str
```

- *Type:* str

---

##### `environment_variable_input`<sup>Optional</sup> <a name="environment_variable_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput"></a>

```python
environment_variable_input: typing.Union[IResolvable, typing.List[CodebuildProjectEnvironmentEnvironmentVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image_pull_credentials_type_input`<sup>Optional</sup> <a name="image_pull_credentials_type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput"></a>

```python
image_pull_credentials_type_input: str
```

- *Type:* str

---

##### `privileged_mode_input`<sup>Optional</sup> <a name="privileged_mode_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput"></a>

```python
privileged_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `registry_credential_input`<sup>Optional</sup> <a name="registry_credential_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput"></a>

```python
registry_credential_input: CodebuildProjectEnvironmentRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_pull_credentials_type`<sup>Required</sup> <a name="image_pull_credentials_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType"></a>

```python
image_pull_credentials_type: str
```

- *Type:* str

---

##### `privileged_mode`<sup>Required</sup> <a name="privileged_mode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode"></a>

```python
privileged_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---


### CodebuildProjectEnvironmentRegistryCredentialOutputReference <a name="CodebuildProjectEnvironmentRegistryCredentialOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput">credential_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput">credential_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential">credential</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider">credential_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_input`<sup>Optional</sup> <a name="credential_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput"></a>

```python
credential_input: str
```

- *Type:* str

---

##### `credential_provider_input`<sup>Optional</sup> <a name="credential_provider_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput"></a>

```python
credential_provider_input: str
```

- *Type:* str

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential"></a>

```python
credential: str
```

- *Type:* str

---

##### `credential_provider`<sup>Required</sup> <a name="credential_provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider"></a>

```python
credential_provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectEnvironmentRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---


### CodebuildProjectFileSystemLocationsList <a name="CodebuildProjectFileSystemLocationsList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectFileSystemLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodebuildProjectFileSystemLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodebuildProjectFileSystemLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>]]

---


### CodebuildProjectFileSystemLocationsOutputReference <a name="CodebuildProjectFileSystemLocationsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectFileSystemLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountPoint">reset_mount_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_mount_point` <a name="reset_mount_point" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountPoint"></a>

```python
def reset_mount_point() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions">mount_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: str
```

- *Type:* str

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions"></a>

```python
mount_options: str
```

- *Type:* str

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodebuildProjectFileSystemLocations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>, cdktf.IResolvable]

---


### CodebuildProjectLogsConfigCloudwatchLogsOutputReference <a name="CodebuildProjectLogsConfigCloudwatchLogsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStreamName">reset_stream_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_name` <a name="reset_group_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStreamName"></a>

```python
def reset_stream_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectLogsConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---


### CodebuildProjectLogsConfigOutputReference <a name="CodebuildProjectLogsConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectLogsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs">put_s3_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetS3Logs">reset_s3_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  group_name: str = None,
  status: str = None,
  stream_name: str = None
) -> None
```

###### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs.parameter.groupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#group_name CodebuildProject#group_name}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

###### `stream_name`<sup>Optional</sup> <a name="stream_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#stream_name CodebuildProject#stream_name}.

---

##### `put_s3_logs` <a name="put_s3_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs"></a>

```python
def put_s3_logs(
  bucket_owner_access: str = None,
  encryption_disabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  status: str = None
) -> None
```

###### `bucket_owner_access`<sup>Optional</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs.parameter.bucketOwnerAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

###### `encryption_disabled`<sup>Optional</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs.parameter.encryptionDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_s3_logs` <a name="reset_s3_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetS3Logs"></a>

```python
def reset_s3_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput">s3_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: CodebuildProjectLogsConfigCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a>

---

##### `s3_logs`<sup>Required</sup> <a name="s3_logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs"></a>

```python
s3_logs: CodebuildProjectLogsConfigS3LogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: CodebuildProjectLogsConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---

##### `s3_logs_input`<sup>Optional</sup> <a name="s3_logs_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput"></a>

```python
s3_logs_input: CodebuildProjectLogsConfigS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectLogsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---


### CodebuildProjectLogsConfigS3LogsOutputReference <a name="CodebuildProjectLogsConfigS3LogsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetBucketOwnerAccess">reset_bucket_owner_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetEncryptionDisabled">reset_encryption_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_owner_access` <a name="reset_bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetBucketOwnerAccess"></a>

```python
def reset_bucket_owner_access() -> None
```

##### `reset_encryption_disabled` <a name="reset_encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetEncryptionDisabled"></a>

```python
def reset_encryption_disabled() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput">bucket_owner_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput">encryption_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess">bucket_owner_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_owner_access_input`<sup>Optional</sup> <a name="bucket_owner_access_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput"></a>

```python
bucket_owner_access_input: str
```

- *Type:* str

---

##### `encryption_disabled_input`<sup>Optional</sup> <a name="encryption_disabled_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput"></a>

```python
encryption_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `bucket_owner_access`<sup>Required</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess"></a>

```python
bucket_owner_access: str
```

- *Type:* str

---

##### `encryption_disabled`<sup>Required</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectLogsConfigS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---


### CodebuildProjectSecondaryArtifactsList <a name="CodebuildProjectSecondaryArtifactsList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondaryArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodebuildProjectSecondaryArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodebuildProjectSecondaryArtifacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>]]

---


### CodebuildProjectSecondaryArtifactsOutputReference <a name="CodebuildProjectSecondaryArtifactsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetBucketOwnerAccess">reset_bucket_owner_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetEncryptionDisabled">reset_encryption_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetNamespaceType">reset_namespace_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetOverrideArtifactName">reset_override_artifact_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPackaging">reset_packaging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_owner_access` <a name="reset_bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetBucketOwnerAccess"></a>

```python
def reset_bucket_owner_access() -> None
```

##### `reset_encryption_disabled` <a name="reset_encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetEncryptionDisabled"></a>

```python
def reset_encryption_disabled() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace_type` <a name="reset_namespace_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetNamespaceType"></a>

```python
def reset_namespace_type() -> None
```

##### `reset_override_artifact_name` <a name="reset_override_artifact_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetOverrideArtifactName"></a>

```python
def reset_override_artifact_name() -> None
```

##### `reset_packaging` <a name="reset_packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPackaging"></a>

```python
def reset_packaging() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput">artifact_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput">bucket_owner_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput">encryption_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput">namespace_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput">override_artifact_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput">packaging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier">artifact_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess">bucket_owner_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType">namespace_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName">override_artifact_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging">packaging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_identifier_input`<sup>Optional</sup> <a name="artifact_identifier_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput"></a>

```python
artifact_identifier_input: str
```

- *Type:* str

---

##### `bucket_owner_access_input`<sup>Optional</sup> <a name="bucket_owner_access_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```python
bucket_owner_access_input: str
```

- *Type:* str

---

##### `encryption_disabled_input`<sup>Optional</sup> <a name="encryption_disabled_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput"></a>

```python
encryption_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_type_input`<sup>Optional</sup> <a name="namespace_type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput"></a>

```python
namespace_type_input: str
```

- *Type:* str

---

##### `override_artifact_name_input`<sup>Optional</sup> <a name="override_artifact_name_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```python
override_artifact_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packaging_input`<sup>Optional</sup> <a name="packaging_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput"></a>

```python
packaging_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `artifact_identifier`<sup>Required</sup> <a name="artifact_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier"></a>

```python
artifact_identifier: str
```

- *Type:* str

---

##### `bucket_owner_access`<sup>Required</sup> <a name="bucket_owner_access" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess"></a>

```python
bucket_owner_access: str
```

- *Type:* str

---

##### `encryption_disabled`<sup>Required</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_type`<sup>Required</sup> <a name="namespace_type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType"></a>

```python
namespace_type: str
```

- *Type:* str

---

##### `override_artifact_name`<sup>Required</sup> <a name="override_artifact_name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName"></a>

```python
override_artifact_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging"></a>

```python
packaging: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodebuildProjectSecondaryArtifacts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>, cdktf.IResolvable]

---


### CodebuildProjectSecondarySourcesAuthOutputReference <a name="CodebuildProjectSecondarySourcesAuthOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectSecondarySourcesAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---


### CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference <a name="CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetTargetUrl">reset_target_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context` <a name="reset_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_target_url` <a name="reset_target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetTargetUrl"></a>

```python
def reset_target_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput">target_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `target_url_input`<sup>Optional</sup> <a name="target_url_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```python
target_url_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectSecondarySourcesBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---


### CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">fetch_submodules_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules">fetch_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fetch_submodules_input`<sup>Optional</sup> <a name="fetch_submodules_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```python
fetch_submodules_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_submodules`<sup>Required</sup> <a name="fetch_submodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```python
fetch_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectSecondarySourcesGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---


### CodebuildProjectSecondarySourcesList <a name="CodebuildProjectSecondarySourcesList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodebuildProjectSecondarySourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>]]

---


### CodebuildProjectSecondarySourcesOutputReference <a name="CodebuildProjectSecondarySourcesOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth">put_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig">put_build_status_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig">put_git_submodules_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetAuth">reset_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildspec">reset_buildspec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildStatusConfig">reset_build_status_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitCloneDepth">reset_git_clone_depth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitSubmodulesConfig">reset_git_submodules_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetInsecureSsl">reset_insecure_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetReportBuildStatus">reset_report_build_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth` <a name="put_auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth"></a>

```python
def put_auth(
  type: str,
  resource: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

##### `put_build_status_config` <a name="put_build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig"></a>

```python
def put_build_status_config(
  context: str = None,
  target_url: str = None
) -> None
```

###### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig.parameter.context"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

###### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig.parameter.targetUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

##### `put_git_submodules_config` <a name="put_git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig"></a>

```python
def put_git_submodules_config(
  fetch_submodules: typing.Union[bool, IResolvable]
) -> None
```

###### `fetch_submodules`<sup>Required</sup> <a name="fetch_submodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig.parameter.fetchSubmodules"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

##### `reset_auth` <a name="reset_auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetAuth"></a>

```python
def reset_auth() -> None
```

##### `reset_buildspec` <a name="reset_buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildspec"></a>

```python
def reset_buildspec() -> None
```

##### `reset_build_status_config` <a name="reset_build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildStatusConfig"></a>

```python
def reset_build_status_config() -> None
```

##### `reset_git_clone_depth` <a name="reset_git_clone_depth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitCloneDepth"></a>

```python
def reset_git_clone_depth() -> None
```

##### `reset_git_submodules_config` <a name="reset_git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitSubmodulesConfig"></a>

```python
def reset_git_submodules_config() -> None
```

##### `reset_insecure_ssl` <a name="reset_insecure_ssl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetInsecureSsl"></a>

```python
def reset_insecure_ssl() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_report_build_status` <a name="reset_report_build_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetReportBuildStatus"></a>

```python
def reset_report_build_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig">build_status_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig">git_submodules_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput">auth_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput">buildspec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput">build_status_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput">git_clone_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput">git_submodules_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput">insecure_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput">report_build_status_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput">source_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec">buildspec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth">git_clone_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl">insecure_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus">report_build_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth"></a>

```python
auth: CodebuildProjectSecondarySourcesAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a>

---

##### `build_status_config`<sup>Required</sup> <a name="build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig"></a>

```python
build_status_config: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a>

---

##### `git_submodules_config`<sup>Required</sup> <a name="git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig"></a>

```python
git_submodules_config: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a>

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput"></a>

```python
auth_input: CodebuildProjectSecondarySourcesAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---

##### `buildspec_input`<sup>Optional</sup> <a name="buildspec_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput"></a>

```python
buildspec_input: str
```

- *Type:* str

---

##### `build_status_config_input`<sup>Optional</sup> <a name="build_status_config_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput"></a>

```python
build_status_config_input: CodebuildProjectSecondarySourcesBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---

##### `git_clone_depth_input`<sup>Optional</sup> <a name="git_clone_depth_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput"></a>

```python
git_clone_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `git_submodules_config_input`<sup>Optional</sup> <a name="git_submodules_config_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput"></a>

```python
git_submodules_config_input: CodebuildProjectSecondarySourcesGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---

##### `insecure_ssl_input`<sup>Optional</sup> <a name="insecure_ssl_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput"></a>

```python
insecure_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `report_build_status_input`<sup>Optional</sup> <a name="report_build_status_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput"></a>

```python
report_build_status_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_identifier_input`<sup>Optional</sup> <a name="source_identifier_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput"></a>

```python
source_identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `buildspec`<sup>Required</sup> <a name="buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec"></a>

```python
buildspec: str
```

- *Type:* str

---

##### `git_clone_depth`<sup>Required</sup> <a name="git_clone_depth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth"></a>

```python
git_clone_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `insecure_ssl`<sup>Required</sup> <a name="insecure_ssl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl"></a>

```python
insecure_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `report_build_status`<sup>Required</sup> <a name="report_build_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus"></a>

```python
report_build_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_identifier`<sup>Required</sup> <a name="source_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodebuildProjectSecondarySources, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>, cdktf.IResolvable]

---


### CodebuildProjectSecondarySourceVersionList <a name="CodebuildProjectSecondarySourceVersionList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourceVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodebuildProjectSecondarySourceVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodebuildProjectSecondarySourceVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>]]

---


### CodebuildProjectSecondarySourceVersionOutputReference <a name="CodebuildProjectSecondarySourceVersionOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput">source_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput">source_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier">source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion">source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_identifier_input`<sup>Optional</sup> <a name="source_identifier_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput"></a>

```python
source_identifier_input: str
```

- *Type:* str

---

##### `source_version_input`<sup>Optional</sup> <a name="source_version_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput"></a>

```python
source_version_input: str
```

- *Type:* str

---

##### `source_identifier`<sup>Required</sup> <a name="source_identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier"></a>

```python
source_identifier: str
```

- *Type:* str

---

##### `source_version`<sup>Required</sup> <a name="source_version" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodebuildProjectSecondarySourceVersion, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>, cdktf.IResolvable]

---


### CodebuildProjectSourceAuthOutputReference <a name="CodebuildProjectSourceAuthOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSourceAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectSourceAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---


### CodebuildProjectSourceBuildStatusConfigOutputReference <a name="CodebuildProjectSourceBuildStatusConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetTargetUrl">reset_target_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context` <a name="reset_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_target_url` <a name="reset_target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetTargetUrl"></a>

```python
def reset_target_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput">target_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `target_url_input`<sup>Optional</sup> <a name="target_url_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```python
target_url_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectSourceBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---


### CodebuildProjectSourceGitSubmodulesConfigOutputReference <a name="CodebuildProjectSourceGitSubmodulesConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">fetch_submodules_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules">fetch_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fetch_submodules_input`<sup>Optional</sup> <a name="fetch_submodules_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```python
fetch_submodules_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fetch_submodules`<sup>Required</sup> <a name="fetch_submodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```python
fetch_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectSourceGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---


### CodebuildProjectSourceOutputReference <a name="CodebuildProjectSourceOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth">put_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig">put_build_status_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig">put_git_submodules_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetAuth">reset_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildspec">reset_buildspec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildStatusConfig">reset_build_status_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitCloneDepth">reset_git_clone_depth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitSubmodulesConfig">reset_git_submodules_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetInsecureSsl">reset_insecure_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetReportBuildStatus">reset_report_build_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth` <a name="put_auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth"></a>

```python
def put_auth(
  type: str,
  resource: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

##### `put_build_status_config` <a name="put_build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig"></a>

```python
def put_build_status_config(
  context: str = None,
  target_url: str = None
) -> None
```

###### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig.parameter.context"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

###### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig.parameter.targetUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

##### `put_git_submodules_config` <a name="put_git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig"></a>

```python
def put_git_submodules_config(
  fetch_submodules: typing.Union[bool, IResolvable]
) -> None
```

###### `fetch_submodules`<sup>Required</sup> <a name="fetch_submodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig.parameter.fetchSubmodules"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

##### `reset_auth` <a name="reset_auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetAuth"></a>

```python
def reset_auth() -> None
```

##### `reset_buildspec` <a name="reset_buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildspec"></a>

```python
def reset_buildspec() -> None
```

##### `reset_build_status_config` <a name="reset_build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildStatusConfig"></a>

```python
def reset_build_status_config() -> None
```

##### `reset_git_clone_depth` <a name="reset_git_clone_depth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitCloneDepth"></a>

```python
def reset_git_clone_depth() -> None
```

##### `reset_git_submodules_config` <a name="reset_git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitSubmodulesConfig"></a>

```python
def reset_git_submodules_config() -> None
```

##### `reset_insecure_ssl` <a name="reset_insecure_ssl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetInsecureSsl"></a>

```python
def reset_insecure_ssl() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_report_build_status` <a name="reset_report_build_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetReportBuildStatus"></a>

```python
def reset_report_build_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig">build_status_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig">git_submodules_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput">auth_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput">buildspec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput">build_status_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput">git_clone_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput">git_submodules_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput">insecure_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput">report_build_status_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec">buildspec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth">git_clone_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl">insecure_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus">report_build_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.auth"></a>

```python
auth: CodebuildProjectSourceAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a>

---

##### `build_status_config`<sup>Required</sup> <a name="build_status_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig"></a>

```python
build_status_config: CodebuildProjectSourceBuildStatusConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a>

---

##### `git_submodules_config`<sup>Required</sup> <a name="git_submodules_config" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig"></a>

```python
git_submodules_config: CodebuildProjectSourceGitSubmodulesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a>

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput"></a>

```python
auth_input: CodebuildProjectSourceAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---

##### `buildspec_input`<sup>Optional</sup> <a name="buildspec_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput"></a>

```python
buildspec_input: str
```

- *Type:* str

---

##### `build_status_config_input`<sup>Optional</sup> <a name="build_status_config_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput"></a>

```python
build_status_config_input: CodebuildProjectSourceBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---

##### `git_clone_depth_input`<sup>Optional</sup> <a name="git_clone_depth_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput"></a>

```python
git_clone_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `git_submodules_config_input`<sup>Optional</sup> <a name="git_submodules_config_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput"></a>

```python
git_submodules_config_input: CodebuildProjectSourceGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---

##### `insecure_ssl_input`<sup>Optional</sup> <a name="insecure_ssl_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput"></a>

```python
insecure_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `report_build_status_input`<sup>Optional</sup> <a name="report_build_status_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput"></a>

```python
report_build_status_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `buildspec`<sup>Required</sup> <a name="buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec"></a>

```python
buildspec: str
```

- *Type:* str

---

##### `git_clone_depth`<sup>Required</sup> <a name="git_clone_depth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth"></a>

```python
git_clone_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `insecure_ssl`<sup>Required</sup> <a name="insecure_ssl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl"></a>

```python
insecure_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `report_build_status`<sup>Required</sup> <a name="report_build_status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus"></a>

```python
report_build_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectSource
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---


### CodebuildProjectVpcConfigOutputReference <a name="CodebuildProjectVpcConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_project

codebuildProject.CodebuildProjectVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---



