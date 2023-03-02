# `codebuildProject` Submodule <a name="`codebuildProject` Submodule" id="@cdktf/provider-aws.codebuildProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildProject <a name="CodebuildProject" id="@cdktf/provider-aws.codebuildProject.CodebuildProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project aws_codebuild_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProject(scope Construct, id *string, config CodebuildProjectConfig) CodebuildProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig">CodebuildProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig">CodebuildProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts">PutArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig">PutBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache">PutCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations">PutFileSystemLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig">PutLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts">PutSecondaryArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources">PutSecondarySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion">PutSecondarySourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBadgeEnabled">ResetBadgeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildBatchConfig">ResetBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildTimeout">ResetBuildTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetCache">ResetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetConcurrentBuildLimit">ResetConcurrentBuildLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetFileSystemLocations">ResetFileSystemLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetLogsConfig">ResetLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetProjectVisibility">ResetProjectVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetQueuedTimeout">ResetQueuedTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetResourceAccessRole">ResetResourceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondaryArtifacts">ResetSecondaryArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySources">ResetSecondarySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySourceVersion">ResetSecondarySourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts"></a>

```go
func PutArtifacts(value CodebuildProjectArtifacts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---

##### `PutBuildBatchConfig` <a name="PutBuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig"></a>

```go
func PutBuildBatchConfig(value CodebuildProjectBuildBatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---

##### `PutCache` <a name="PutCache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache"></a>

```go
func PutCache(value CodebuildProjectCache)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment"></a>

```go
func PutEnvironment(value CodebuildProjectEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---

##### `PutFileSystemLocations` <a name="PutFileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations"></a>

```go
func PutFileSystemLocations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogsConfig` <a name="PutLogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig"></a>

```go
func PutLogsConfig(value CodebuildProjectLogsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---

##### `PutSecondaryArtifacts` <a name="PutSecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts"></a>

```go
func PutSecondaryArtifacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecondarySources` <a name="PutSecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources"></a>

```go
func PutSecondarySources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecondarySourceVersion` <a name="PutSecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion"></a>

```go
func PutSecondarySourceVersion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource"></a>

```go
func PutSource(value CodebuildProjectSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig"></a>

```go
func PutVpcConfig(value CodebuildProjectVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---

##### `ResetBadgeEnabled` <a name="ResetBadgeEnabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBadgeEnabled"></a>

```go
func ResetBadgeEnabled()
```

##### `ResetBuildBatchConfig` <a name="ResetBuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildBatchConfig"></a>

```go
func ResetBuildBatchConfig()
```

##### `ResetBuildTimeout` <a name="ResetBuildTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildTimeout"></a>

```go
func ResetBuildTimeout()
```

##### `ResetCache` <a name="ResetCache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetCache"></a>

```go
func ResetCache()
```

##### `ResetConcurrentBuildLimit` <a name="ResetConcurrentBuildLimit" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetConcurrentBuildLimit"></a>

```go
func ResetConcurrentBuildLimit()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetFileSystemLocations` <a name="ResetFileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetFileSystemLocations"></a>

```go
func ResetFileSystemLocations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetId"></a>

```go
func ResetId()
```

##### `ResetLogsConfig` <a name="ResetLogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetLogsConfig"></a>

```go
func ResetLogsConfig()
```

##### `ResetProjectVisibility` <a name="ResetProjectVisibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetProjectVisibility"></a>

```go
func ResetProjectVisibility()
```

##### `ResetQueuedTimeout` <a name="ResetQueuedTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetQueuedTimeout"></a>

```go
func ResetQueuedTimeout()
```

##### `ResetResourceAccessRole` <a name="ResetResourceAccessRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetResourceAccessRole"></a>

```go
func ResetResourceAccessRole()
```

##### `ResetSecondaryArtifacts` <a name="ResetSecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondaryArtifacts"></a>

```go
func ResetSecondaryArtifacts()
```

##### `ResetSecondarySources` <a name="ResetSecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySources"></a>

```go
func ResetSecondarySources()
```

##### `ResetSecondarySourceVersion` <a name="ResetSecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySourceVersion"></a>

```go
func ResetSecondarySourceVersion()
```

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSourceVersion"></a>

```go
func ResetSourceVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.CodebuildProject_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.CodebuildProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.CodebuildProject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeUrl">BadgeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfig">BuildBatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cache">Cache</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocations">FileSystemLocations</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfig">LogsConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.publicProjectAlias">PublicProjectAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifacts">SecondaryArtifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySources">SecondarySources</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersion">SecondarySourceVersion</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifactsInput">ArtifactsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabledInput">BadgeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfigInput">BuildBatchConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeoutInput">BuildTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cacheInput">CacheInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput">ConcurrentBuildLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocationsInput">FileSystemLocationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfigInput">LogsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibilityInput">ProjectVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeoutInput">QueuedTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRoleInput">ResourceAccessRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifactsInput">SecondaryArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourcesInput">SecondarySourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersionInput">SecondarySourceVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersionInput">SourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabled">BadgeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeout">BuildTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimit">ConcurrentBuildLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibility">ProjectVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeout">QueuedTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRole">ResourceAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifacts"></a>

```go
func Artifacts() CodebuildProjectArtifactsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a>

---

##### `BadgeUrl`<sup>Required</sup> <a name="BadgeUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeUrl"></a>

```go
func BadgeUrl() *string
```

- *Type:* *string

---

##### `BuildBatchConfig`<sup>Required</sup> <a name="BuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfig"></a>

```go
func BuildBatchConfig() CodebuildProjectBuildBatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a>

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cache"></a>

```go
func Cache() CodebuildProjectCacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environment"></a>

```go
func Environment() CodebuildProjectEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a>

---

##### `FileSystemLocations`<sup>Required</sup> <a name="FileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocations"></a>

```go
func FileSystemLocations() CodebuildProjectFileSystemLocationsList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a>

---

##### `LogsConfig`<sup>Required</sup> <a name="LogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfig"></a>

```go
func LogsConfig() CodebuildProjectLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a>

---

##### `PublicProjectAlias`<sup>Required</sup> <a name="PublicProjectAlias" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.publicProjectAlias"></a>

```go
func PublicProjectAlias() *string
```

- *Type:* *string

---

##### `SecondaryArtifacts`<sup>Required</sup> <a name="SecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifacts"></a>

```go
func SecondaryArtifacts() CodebuildProjectSecondaryArtifactsList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a>

---

##### `SecondarySources`<sup>Required</sup> <a name="SecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySources"></a>

```go
func SecondarySources() CodebuildProjectSecondarySourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a>

---

##### `SecondarySourceVersion`<sup>Required</sup> <a name="SecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersion"></a>

```go
func SecondarySourceVersion() CodebuildProjectSecondarySourceVersionList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.source"></a>

```go
func Source() CodebuildProjectSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfig"></a>

```go
func VpcConfig() CodebuildProjectVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifactsInput"></a>

```go
func ArtifactsInput() CodebuildProjectArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---

##### `BadgeEnabledInput`<sup>Optional</sup> <a name="BadgeEnabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabledInput"></a>

```go
func BadgeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BuildBatchConfigInput`<sup>Optional</sup> <a name="BuildBatchConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfigInput"></a>

```go
func BuildBatchConfigInput() CodebuildProjectBuildBatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---

##### `BuildTimeoutInput`<sup>Optional</sup> <a name="BuildTimeoutInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeoutInput"></a>

```go
func BuildTimeoutInput() *f64
```

- *Type:* *f64

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cacheInput"></a>

```go
func CacheInput() CodebuildProjectCache
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---

##### `ConcurrentBuildLimitInput`<sup>Optional</sup> <a name="ConcurrentBuildLimitInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput"></a>

```go
func ConcurrentBuildLimitInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environmentInput"></a>

```go
func EnvironmentInput() CodebuildProjectEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---

##### `FileSystemLocationsInput`<sup>Optional</sup> <a name="FileSystemLocationsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocationsInput"></a>

```go
func FileSystemLocationsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogsConfigInput`<sup>Optional</sup> <a name="LogsConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfigInput"></a>

```go
func LogsConfigInput() CodebuildProjectLogsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectVisibilityInput`<sup>Optional</sup> <a name="ProjectVisibilityInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibilityInput"></a>

```go
func ProjectVisibilityInput() *string
```

- *Type:* *string

---

##### `QueuedTimeoutInput`<sup>Optional</sup> <a name="QueuedTimeoutInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeoutInput"></a>

```go
func QueuedTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ResourceAccessRoleInput`<sup>Optional</sup> <a name="ResourceAccessRoleInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRoleInput"></a>

```go
func ResourceAccessRoleInput() *string
```

- *Type:* *string

---

##### `SecondaryArtifactsInput`<sup>Optional</sup> <a name="SecondaryArtifactsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifactsInput"></a>

```go
func SecondaryArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `SecondarySourcesInput`<sup>Optional</sup> <a name="SecondarySourcesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourcesInput"></a>

```go
func SecondarySourcesInput() interface{}
```

- *Type:* interface{}

---

##### `SecondarySourceVersionInput`<sup>Optional</sup> <a name="SecondarySourceVersionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersionInput"></a>

```go
func SecondarySourceVersionInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceInput"></a>

```go
func SourceInput() CodebuildProjectSource
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersionInput"></a>

```go
func SourceVersionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfigInput"></a>

```go
func VpcConfigInput() CodebuildProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---

##### `BadgeEnabled`<sup>Required</sup> <a name="BadgeEnabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabled"></a>

```go
func BadgeEnabled() interface{}
```

- *Type:* interface{}

---

##### `BuildTimeout`<sup>Required</sup> <a name="BuildTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeout"></a>

```go
func BuildTimeout() *f64
```

- *Type:* *f64

---

##### `ConcurrentBuildLimit`<sup>Required</sup> <a name="ConcurrentBuildLimit" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimit"></a>

```go
func ConcurrentBuildLimit() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectVisibility`<sup>Required</sup> <a name="ProjectVisibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibility"></a>

```go
func ProjectVisibility() *string
```

- *Type:* *string

---

##### `QueuedTimeout`<sup>Required</sup> <a name="QueuedTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeout"></a>

```go
func QueuedTimeout() *f64
```

- *Type:* *f64

---

##### `ResourceAccessRole`<sup>Required</sup> <a name="ResourceAccessRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRole"></a>

```go
func ResourceAccessRole() *string
```

- *Type:* *string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersion"></a>

```go
func SourceVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildProjectArtifacts <a name="CodebuildProjectArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectArtifacts {
	Type: *string,
	ArtifactIdentifier: *string,
	BucketOwnerAccess: *string,
	EncryptionDisabled: interface{},
	Location: *string,
	Name: *string,
	NamespaceType: *string,
	OverrideArtifactName: interface{},
	Packaging: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.namespaceType">NamespaceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.packaging">Packaging</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `ArtifactIdentifier`<sup>Optional</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier"></a>

```go
ArtifactIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `BucketOwnerAccess`<sup>Optional</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess"></a>

```go
BucketOwnerAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled"></a>

```go
EncryptionDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `NamespaceType`<sup>Optional</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.namespaceType"></a>

```go
NamespaceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `OverrideArtifactName`<sup>Optional</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName"></a>

```go
OverrideArtifactName interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `Packaging`<sup>Optional</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.packaging"></a>

```go
Packaging *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectBuildBatchConfig <a name="CodebuildProjectBuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectBuildBatchConfig {
	ServiceRole: *string,
	CombineArtifacts: interface{},
	Restrictions: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions,
	TimeoutInMins: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts">CombineArtifacts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins">TimeoutInMins</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}. |

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `CombineArtifacts`<sup>Optional</sup> <a name="CombineArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts"></a>

```go
CombineArtifacts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}.

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions"></a>

```go
Restrictions CodebuildProjectBuildBatchConfigRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#restrictions CodebuildProject#restrictions}

---

##### `TimeoutInMins`<sup>Optional</sup> <a name="TimeoutInMins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins"></a>

```go
TimeoutInMins *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}.

---

### CodebuildProjectBuildBatchConfigRestrictions <a name="CodebuildProjectBuildBatchConfigRestrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectBuildBatchConfigRestrictions {
	ComputeTypesAllowed: *[]*string,
	MaximumBuildsAllowed: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed">ComputeTypesAllowed</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed">MaximumBuildsAllowed</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}. |

---

##### `ComputeTypesAllowed`<sup>Optional</sup> <a name="ComputeTypesAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

```go
ComputeTypesAllowed *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}.

---

##### `MaximumBuildsAllowed`<sup>Optional</sup> <a name="MaximumBuildsAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

```go
MaximumBuildsAllowed *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}.

---

### CodebuildProjectCache <a name="CodebuildProjectCache" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectCache {
	Location: *string,
	Modes: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.modes">Modes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#modes CodebuildProject#modes}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Modes`<sup>Optional</sup> <a name="Modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.modes"></a>

```go
Modes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#modes CodebuildProject#modes}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectConfig <a name="CodebuildProjectConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Artifacts: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectArtifacts,
	Environment: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectEnvironment,
	Name: *string,
	ServiceRole: *string,
	Source: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectSource,
	BadgeEnabled: interface{},
	BuildBatchConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectBuildBatchConfig,
	BuildTimeout: *f64,
	Cache: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectCache,
	ConcurrentBuildLimit: *f64,
	Description: *string,
	EncryptionKey: *string,
	FileSystemLocations: interface{},
	Id: *string,
	LogsConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectLogsConfig,
	ProjectVisibility: *string,
	QueuedTimeout: *f64,
	ResourceAccessRole: *string,
	SecondaryArtifacts: interface{},
	SecondarySources: interface{},
	SecondarySourceVersion: interface{},
	SourceVersion: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	VpcConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.badgeEnabled">BadgeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig">BuildBatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | build_batch_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildTimeout">BuildTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.cache">Cache</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | cache block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit">ConcurrentBuildLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations">FileSystemLocations</a></code> | <code>interface{}</code> | file_system_locations block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.logsConfig">LogsConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.projectVisibility">ProjectVisibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.queuedTimeout">QueuedTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole">ResourceAccessRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts">SecondaryArtifacts</a></code> | <code>interface{}</code> | secondary_artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySources">SecondarySources</a></code> | <code>interface{}</code> | secondary_sources block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion">SecondarySourceVersion</a></code> | <code>interface{}</code> | secondary_source_version block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.artifacts"></a>

```go
Artifacts CodebuildProjectArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifacts CodebuildProject#artifacts}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.environment"></a>

```go
Environment CodebuildProjectEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment CodebuildProject#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.source"></a>

```go
Source CodebuildProjectSource
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source CodebuildProject#source}

---

##### `BadgeEnabled`<sup>Optional</sup> <a name="BadgeEnabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.badgeEnabled"></a>

```go
BadgeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}.

---

##### `BuildBatchConfig`<sup>Optional</sup> <a name="BuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig"></a>

```go
BuildBatchConfig CodebuildProjectBuildBatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

build_batch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_batch_config CodebuildProject#build_batch_config}

---

##### `BuildTimeout`<sup>Optional</sup> <a name="BuildTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildTimeout"></a>

```go
BuildTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}.

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.cache"></a>

```go
Cache CodebuildProjectCache
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

cache block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cache CodebuildProject#cache}

---

##### `ConcurrentBuildLimit`<sup>Optional</sup> <a name="ConcurrentBuildLimit" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit"></a>

```go
ConcurrentBuildLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}.

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}.

---

##### `FileSystemLocations`<sup>Optional</sup> <a name="FileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations"></a>

```go
FileSystemLocations interface{}
```

- *Type:* interface{}

file_system_locations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#file_system_locations CodebuildProject#file_system_locations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogsConfig`<sup>Optional</sup> <a name="LogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.logsConfig"></a>

```go
LogsConfig CodebuildProjectLogsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#logs_config CodebuildProject#logs_config}

---

##### `ProjectVisibility`<sup>Optional</sup> <a name="ProjectVisibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.projectVisibility"></a>

```go
ProjectVisibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}.

---

##### `QueuedTimeout`<sup>Optional</sup> <a name="QueuedTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.queuedTimeout"></a>

```go
QueuedTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}.

---

##### `ResourceAccessRole`<sup>Optional</sup> <a name="ResourceAccessRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole"></a>

```go
ResourceAccessRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}.

---

##### `SecondaryArtifacts`<sup>Optional</sup> <a name="SecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts"></a>

```go
SecondaryArtifacts interface{}
```

- *Type:* interface{}

secondary_artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_artifacts CodebuildProject#secondary_artifacts}

---

##### `SecondarySources`<sup>Optional</sup> <a name="SecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySources"></a>

```go
SecondarySources interface{}
```

- *Type:* interface{}

secondary_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_sources CodebuildProject#secondary_sources}

---

##### `SecondarySourceVersion`<sup>Optional</sup> <a name="SecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion"></a>

```go
SecondarySourceVersion interface{}
```

- *Type:* interface{}

secondary_source_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_source_version CodebuildProject#secondary_source_version}

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.sourceVersion"></a>

```go
SourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.vpcConfig"></a>

```go
VpcConfig CodebuildProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_config CodebuildProject#vpc_config}

---

### CodebuildProjectEnvironment <a name="CodebuildProjectEnvironment" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectEnvironment {
	ComputeType: *string,
	Image: *string,
	Type: *string,
	Certificate: *string,
	EnvironmentVariable: interface{},
	ImagePullCredentialsType: *string,
	PrivilegedMode: interface{},
	RegistryCredential: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.computeType">ComputeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_type CodebuildProject#compute_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image CodebuildProject#image}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#certificate CodebuildProject#certificate}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable">EnvironmentVariable</a></code> | <code>interface{}</code> | environment_variable block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType">ImagePullCredentialsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode">PrivilegedMode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#privileged_mode CodebuildProject#privileged_mode}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.registryCredential">RegistryCredential</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | registry_credential block. |

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.computeType"></a>

```go
ComputeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_type CodebuildProject#compute_type}.

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image CodebuildProject#image}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#certificate CodebuildProject#certificate}.

---

##### `EnvironmentVariable`<sup>Optional</sup> <a name="EnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable"></a>

```go
EnvironmentVariable interface{}
```

- *Type:* interface{}

environment_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment_variable CodebuildProject#environment_variable}

---

##### `ImagePullCredentialsType`<sup>Optional</sup> <a name="ImagePullCredentialsType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType"></a>

```go
ImagePullCredentialsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}.

---

##### `PrivilegedMode`<sup>Optional</sup> <a name="PrivilegedMode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode"></a>

```go
PrivilegedMode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#privileged_mode CodebuildProject#privileged_mode}.

---

##### `RegistryCredential`<sup>Optional</sup> <a name="RegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.registryCredential"></a>

```go
RegistryCredential CodebuildProjectEnvironmentRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#registry_credential CodebuildProject#registry_credential}

---

### CodebuildProjectEnvironmentEnvironmentVariable <a name="CodebuildProjectEnvironmentEnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectEnvironmentEnvironmentVariable {
	Name: *string,
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#value CodebuildProject#value}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#value CodebuildProject#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectEnvironmentRegistryCredential <a name="CodebuildProjectEnvironmentRegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectEnvironmentRegistryCredential {
	Credential: *string,
	CredentialProvider: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential">Credential</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential CodebuildProject#credential}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider">CredentialProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential_provider CodebuildProject#credential_provider}. |

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential"></a>

```go
Credential *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential CodebuildProject#credential}.

---

##### `CredentialProvider`<sup>Required</sup> <a name="CredentialProvider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider"></a>

```go
CredentialProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential_provider CodebuildProject#credential_provider}.

---

### CodebuildProjectFileSystemLocations <a name="CodebuildProjectFileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectFileSystemLocations {
	Identifier: *string,
	Location: *string,
	MountOptions: *string,
	MountPoint: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#identifier CodebuildProject#identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions">MountOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_options CodebuildProject#mount_options}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint">MountPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_point CodebuildProject#mount_point}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#identifier CodebuildProject#identifier}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions"></a>

```go
MountOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_options CodebuildProject#mount_options}.

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint"></a>

```go
MountPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_point CodebuildProject#mount_point}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectLogsConfig <a name="CodebuildProjectLogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectLogsConfig {
	CloudwatchLogs: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs,
	S3Logs: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectLogsConfigS3Logs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | s3_logs block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs"></a>

```go
CloudwatchLogs CodebuildProjectLogsConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cloudwatch_logs CodebuildProject#cloudwatch_logs}

---

##### `S3Logs`<sup>Optional</sup> <a name="S3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs"></a>

```go
S3Logs CodebuildProjectLogsConfigS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#s3_logs CodebuildProject#s3_logs}

---

### CodebuildProjectLogsConfigCloudwatchLogs <a name="CodebuildProjectLogsConfigCloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectLogsConfigCloudwatchLogs {
	GroupName: *string,
	Status: *string,
	StreamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#group_name CodebuildProject#group_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#stream_name CodebuildProject#stream_name}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#group_name CodebuildProject#group_name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#stream_name CodebuildProject#stream_name}.

---

### CodebuildProjectLogsConfigS3Logs <a name="CodebuildProjectLogsConfigS3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectLogsConfigS3Logs {
	BucketOwnerAccess: *string,
	EncryptionDisabled: interface{},
	Location: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}. |

---

##### `BucketOwnerAccess`<sup>Optional</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess"></a>

```go
BucketOwnerAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled"></a>

```go
EncryptionDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

### CodebuildProjectSecondaryArtifacts <a name="CodebuildProjectSecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSecondaryArtifacts {
	ArtifactIdentifier: *string,
	Type: *string,
	BucketOwnerAccess: *string,
	EncryptionDisabled: interface{},
	Location: *string,
	Name: *string,
	NamespaceType: *string,
	OverrideArtifactName: interface{},
	Packaging: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType">NamespaceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging">Packaging</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}. |

---

##### `ArtifactIdentifier`<sup>Required</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier"></a>

```go
ArtifactIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `BucketOwnerAccess`<sup>Optional</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess"></a>

```go
BucketOwnerAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled"></a>

```go
EncryptionDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `NamespaceType`<sup>Optional</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType"></a>

```go
NamespaceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `OverrideArtifactName`<sup>Optional</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName"></a>

```go
OverrideArtifactName interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `Packaging`<sup>Optional</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging"></a>

```go
Packaging *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectSecondarySources <a name="CodebuildProjectSecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSecondarySources {
	SourceIdentifier: *string,
	Type: *string,
	Auth: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectSecondarySourcesAuth,
	Buildspec: *string,
	BuildStatusConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig,
	GitCloneDepth: *f64,
	GitSubmodulesConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig,
	InsecureSsl: interface{},
	Location: *string,
	ReportBuildStatus: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier">SourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildspec">Buildspec</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth">GitCloneDepth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl">InsecureSsl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier"></a>

```go
SourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.auth"></a>

```go
Auth CodebuildProjectSecondarySourcesAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#auth CodebuildProject#auth}

---

##### `Buildspec`<sup>Optional</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildspec"></a>

```go
Buildspec *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `BuildStatusConfig`<sup>Optional</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig"></a>

```go
BuildStatusConfig CodebuildProjectSecondarySourcesBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `GitCloneDepth`<sup>Optional</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth"></a>

```go
GitCloneDepth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `GitSubmodulesConfig`<sup>Optional</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig"></a>

```go
GitSubmodulesConfig CodebuildProjectSecondarySourcesGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `InsecureSsl`<sup>Optional</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl"></a>

```go
InsecureSsl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `ReportBuildStatus`<sup>Optional</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus"></a>

```go
ReportBuildStatus interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSecondarySourcesAuth <a name="CodebuildProjectSecondarySourcesAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSecondarySourcesAuth {
	Type: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSecondarySourcesBuildStatusConfig <a name="CodebuildProjectSecondarySourcesBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSecondarySourcesBuildStatusConfig {
	Context: *string,
	TargetUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context">Context</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl"></a>

```go
TargetUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSecondarySourcesGitSubmodulesConfig <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSecondarySourcesGitSubmodulesConfig {
	FetchSubmodules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules">FetchSubmodules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules"></a>

```go
FetchSubmodules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectSecondarySourceVersion <a name="CodebuildProjectSecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSecondarySourceVersion {
	SourceIdentifier: *string,
	SourceVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier">SourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}. |

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier"></a>

```go
SourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion"></a>

```go
SourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}.

---

### CodebuildProjectSource <a name="CodebuildProjectSource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSource {
	Type: *string,
	Auth: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectSourceAuth,
	Buildspec: *string,
	BuildStatusConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig,
	GitCloneDepth: *f64,
	GitSubmodulesConfig: github.com/cdktf/cdktf-provider-aws-go/aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig,
	InsecureSsl: interface{},
	Location: *string,
	ReportBuildStatus: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildspec">Buildspec</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitCloneDepth">GitCloneDepth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.insecureSsl">InsecureSsl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.auth"></a>

```go
Auth CodebuildProjectSourceAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#auth CodebuildProject#auth}

---

##### `Buildspec`<sup>Optional</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildspec"></a>

```go
Buildspec *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `BuildStatusConfig`<sup>Optional</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildStatusConfig"></a>

```go
BuildStatusConfig CodebuildProjectSourceBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `GitCloneDepth`<sup>Optional</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitCloneDepth"></a>

```go
GitCloneDepth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `GitSubmodulesConfig`<sup>Optional</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig"></a>

```go
GitSubmodulesConfig CodebuildProjectSourceGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `InsecureSsl`<sup>Optional</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.insecureSsl"></a>

```go
InsecureSsl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `ReportBuildStatus`<sup>Optional</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.reportBuildStatus"></a>

```go
ReportBuildStatus interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSourceAuth <a name="CodebuildProjectSourceAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSourceAuth {
	Type: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSourceBuildStatusConfig <a name="CodebuildProjectSourceBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSourceBuildStatusConfig {
	Context: *string,
	TargetUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context">Context</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl"></a>

```go
TargetUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSourceGitSubmodulesConfig <a name="CodebuildProjectSourceGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectSourceGitSubmodulesConfig {
	FetchSubmodules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules">FetchSubmodules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

```go
FetchSubmodules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectVpcConfig <a name="CodebuildProjectVpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

&codebuildproject.CodebuildProjectVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#security_group_ids CodebuildProject#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#subnets CodebuildProject#subnets}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_id CodebuildProject#vpc_id}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#security_group_ids CodebuildProject#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#subnets CodebuildProject#subnets}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_id CodebuildProject#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildProjectArtifactsOutputReference <a name="CodebuildProjectArtifactsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetArtifactIdentifier">ResetArtifactIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetBucketOwnerAccess">ResetBucketOwnerAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetEncryptionDisabled">ResetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetNamespaceType">ResetNamespaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetOverrideArtifactName">ResetOverrideArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPackaging">ResetPackaging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactIdentifier` <a name="ResetArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetArtifactIdentifier"></a>

```go
func ResetArtifactIdentifier()
```

##### `ResetBucketOwnerAccess` <a name="ResetBucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetBucketOwnerAccess"></a>

```go
func ResetBucketOwnerAccess()
```

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetEncryptionDisabled"></a>

```go
func ResetEncryptionDisabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespaceType` <a name="ResetNamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetNamespaceType"></a>

```go
func ResetNamespaceType()
```

##### `ResetOverrideArtifactName` <a name="ResetOverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetOverrideArtifactName"></a>

```go
func ResetOverrideArtifactName()
```

##### `ResetPackaging` <a name="ResetPackaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPackaging"></a>

```go
func ResetPackaging()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput">ArtifactIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput">BucketOwnerAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput">NamespaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput">OverrideArtifactNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput">PackagingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType">NamespaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging">Packaging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdentifierInput`<sup>Optional</sup> <a name="ArtifactIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput"></a>

```go
func ArtifactIdentifierInput() *string
```

- *Type:* *string

---

##### `BucketOwnerAccessInput`<sup>Optional</sup> <a name="BucketOwnerAccessInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```go
func BucketOwnerAccessInput() *string
```

- *Type:* *string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput"></a>

```go
func EncryptionDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceTypeInput`<sup>Optional</sup> <a name="NamespaceTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput"></a>

```go
func NamespaceTypeInput() *string
```

- *Type:* *string

---

##### `OverrideArtifactNameInput`<sup>Optional</sup> <a name="OverrideArtifactNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```go
func OverrideArtifactNameInput() interface{}
```

- *Type:* interface{}

---

##### `PackagingInput`<sup>Optional</sup> <a name="PackagingInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput"></a>

```go
func PackagingInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ArtifactIdentifier`<sup>Required</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier"></a>

```go
func ArtifactIdentifier() *string
```

- *Type:* *string

---

##### `BucketOwnerAccess`<sup>Required</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess"></a>

```go
func BucketOwnerAccess() *string
```

- *Type:* *string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled"></a>

```go
func EncryptionDisabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType"></a>

```go
func NamespaceType() *string
```

- *Type:* *string

---

##### `OverrideArtifactName`<sup>Required</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName"></a>

```go
func OverrideArtifactName() interface{}
```

- *Type:* interface{}

---

##### `Packaging`<sup>Required</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging"></a>

```go
func Packaging() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---


### CodebuildProjectBuildBatchConfigOutputReference <a name="CodebuildProjectBuildBatchConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectBuildBatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectBuildBatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetCombineArtifacts">ResetCombineArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetRestrictions">ResetRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetTimeoutInMins">ResetTimeoutInMins</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions"></a>

```go
func PutRestrictions(value CodebuildProjectBuildBatchConfigRestrictions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---

##### `ResetCombineArtifacts` <a name="ResetCombineArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetCombineArtifacts"></a>

```go
func ResetCombineArtifacts()
```

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetRestrictions"></a>

```go
func ResetRestrictions()
```

##### `ResetTimeoutInMins` <a name="ResetTimeoutInMins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetTimeoutInMins"></a>

```go
func ResetTimeoutInMins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput">CombineArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput">TimeoutInMinsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts">CombineArtifacts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins">TimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions"></a>

```go
func Restrictions() CodebuildProjectBuildBatchConfigRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a>

---

##### `CombineArtifactsInput`<sup>Optional</sup> <a name="CombineArtifactsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput"></a>

```go
func CombineArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput"></a>

```go
func RestrictionsInput() CodebuildProjectBuildBatchConfigRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `TimeoutInMinsInput`<sup>Optional</sup> <a name="TimeoutInMinsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput"></a>

```go
func TimeoutInMinsInput() *f64
```

- *Type:* *f64

---

##### `CombineArtifacts`<sup>Required</sup> <a name="CombineArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts"></a>

```go
func CombineArtifacts() interface{}
```

- *Type:* interface{}

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `TimeoutInMins`<sup>Required</sup> <a name="TimeoutInMins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins"></a>

```go
func TimeoutInMins() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectBuildBatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---


### CodebuildProjectBuildBatchConfigRestrictionsOutputReference <a name="CodebuildProjectBuildBatchConfigRestrictionsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectBuildBatchConfigRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectBuildBatchConfigRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetComputeTypesAllowed">ResetComputeTypesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetMaximumBuildsAllowed">ResetMaximumBuildsAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeTypesAllowed` <a name="ResetComputeTypesAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetComputeTypesAllowed"></a>

```go
func ResetComputeTypesAllowed()
```

##### `ResetMaximumBuildsAllowed` <a name="ResetMaximumBuildsAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetMaximumBuildsAllowed"></a>

```go
func ResetMaximumBuildsAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput">ComputeTypesAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput">MaximumBuildsAllowedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed">ComputeTypesAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed">MaximumBuildsAllowed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeTypesAllowedInput`<sup>Optional</sup> <a name="ComputeTypesAllowedInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput"></a>

```go
func ComputeTypesAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumBuildsAllowedInput`<sup>Optional</sup> <a name="MaximumBuildsAllowedInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput"></a>

```go
func MaximumBuildsAllowedInput() *f64
```

- *Type:* *f64

---

##### `ComputeTypesAllowed`<sup>Required</sup> <a name="ComputeTypesAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed"></a>

```go
func ComputeTypesAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumBuildsAllowed`<sup>Required</sup> <a name="MaximumBuildsAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed"></a>

```go
func MaximumBuildsAllowed() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectBuildBatchConfigRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---


### CodebuildProjectCacheOutputReference <a name="CodebuildProjectCacheOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetModes">ResetModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetModes` <a name="ResetModes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetModes"></a>

```go
func ResetModes()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput">ModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modes">Modes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ModesInput`<sup>Optional</sup> <a name="ModesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput"></a>

```go
func ModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modes"></a>

```go
func Modes() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectCache
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---


### CodebuildProjectEnvironmentEnvironmentVariableList <a name="CodebuildProjectEnvironmentEnvironmentVariableList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectEnvironmentEnvironmentVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodebuildProjectEnvironmentEnvironmentVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get"></a>

```go
func Get(index *f64) CodebuildProjectEnvironmentEnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectEnvironmentEnvironmentVariableOutputReference <a name="CodebuildProjectEnvironmentEnvironmentVariableOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectEnvironmentEnvironmentVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodebuildProjectEnvironmentEnvironmentVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectEnvironmentOutputReference <a name="CodebuildProjectEnvironmentOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable">PutEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential">PutRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetEnvironmentVariable">ResetEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetImagePullCredentialsType">ResetImagePullCredentialsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetPrivilegedMode">ResetPrivilegedMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetRegistryCredential">ResetRegistryCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentVariable` <a name="PutEnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable"></a>

```go
func PutEnvironmentVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegistryCredential` <a name="PutRegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential"></a>

```go
func PutRegistryCredential(value CodebuildProjectEnvironmentRegistryCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetEnvironmentVariable` <a name="ResetEnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetEnvironmentVariable"></a>

```go
func ResetEnvironmentVariable()
```

##### `ResetImagePullCredentialsType` <a name="ResetImagePullCredentialsType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetImagePullCredentialsType"></a>

```go
func ResetImagePullCredentialsType()
```

##### `ResetPrivilegedMode` <a name="ResetPrivilegedMode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetPrivilegedMode"></a>

```go
func ResetPrivilegedMode()
```

##### `ResetRegistryCredential` <a name="ResetRegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetRegistryCredential"></a>

```go
func ResetRegistryCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable">EnvironmentVariable</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential">RegistryCredential</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput">ComputeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput">EnvironmentVariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput">ImagePullCredentialsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput">PrivilegedModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput">RegistryCredentialInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType">ComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType">ImagePullCredentialsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode">PrivilegedMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentVariable`<sup>Required</sup> <a name="EnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable"></a>

```go
func EnvironmentVariable() CodebuildProjectEnvironmentEnvironmentVariableList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a>

---

##### `RegistryCredential`<sup>Required</sup> <a name="RegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential"></a>

```go
func RegistryCredential() CodebuildProjectEnvironmentRegistryCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput"></a>

```go
func ComputeTypeInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariableInput`<sup>Optional</sup> <a name="EnvironmentVariableInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput"></a>

```go
func EnvironmentVariableInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ImagePullCredentialsTypeInput`<sup>Optional</sup> <a name="ImagePullCredentialsTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput"></a>

```go
func ImagePullCredentialsTypeInput() *string
```

- *Type:* *string

---

##### `PrivilegedModeInput`<sup>Optional</sup> <a name="PrivilegedModeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput"></a>

```go
func PrivilegedModeInput() interface{}
```

- *Type:* interface{}

---

##### `RegistryCredentialInput`<sup>Optional</sup> <a name="RegistryCredentialInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput"></a>

```go
func RegistryCredentialInput() CodebuildProjectEnvironmentRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType"></a>

```go
func ComputeType() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImagePullCredentialsType`<sup>Required</sup> <a name="ImagePullCredentialsType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType"></a>

```go
func ImagePullCredentialsType() *string
```

- *Type:* *string

---

##### `PrivilegedMode`<sup>Required</sup> <a name="PrivilegedMode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode"></a>

```go
func PrivilegedMode() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectEnvironment
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---


### CodebuildProjectEnvironmentRegistryCredentialOutputReference <a name="CodebuildProjectEnvironmentRegistryCredentialOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectEnvironmentRegistryCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectEnvironmentRegistryCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput">CredentialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput">CredentialProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential">Credential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider">CredentialProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput"></a>

```go
func CredentialInput() *string
```

- *Type:* *string

---

##### `CredentialProviderInput`<sup>Optional</sup> <a name="CredentialProviderInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput"></a>

```go
func CredentialProviderInput() *string
```

- *Type:* *string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential"></a>

```go
func Credential() *string
```

- *Type:* *string

---

##### `CredentialProvider`<sup>Required</sup> <a name="CredentialProvider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider"></a>

```go
func CredentialProvider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectEnvironmentRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---


### CodebuildProjectFileSystemLocationsList <a name="CodebuildProjectFileSystemLocationsList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectFileSystemLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodebuildProjectFileSystemLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get"></a>

```go
func Get(index *f64) CodebuildProjectFileSystemLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectFileSystemLocationsOutputReference <a name="CodebuildProjectFileSystemLocationsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectFileSystemLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodebuildProjectFileSystemLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountPoint"></a>

```go
func ResetMountPoint()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions">MountOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *string
```

- *Type:* *string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput"></a>

```go
func MountPointInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions"></a>

```go
func MountOptions() *string
```

- *Type:* *string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectLogsConfigCloudwatchLogsOutputReference <a name="CodebuildProjectLogsConfigCloudwatchLogsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectLogsConfigCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectLogsConfigCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStreamName">ResetStreamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetStreamName` <a name="ResetStreamName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStreamName"></a>

```go
func ResetStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectLogsConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---


### CodebuildProjectLogsConfigOutputReference <a name="CodebuildProjectLogsConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectLogsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectLogsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs">PutS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetS3Logs">ResetS3Logs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value CodebuildProjectLogsConfigCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---

##### `PutS3Logs` <a name="PutS3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs"></a>

```go
func PutS3Logs(value CodebuildProjectLogsConfigS3Logs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetS3Logs` <a name="ResetS3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetS3Logs"></a>

```go
func ResetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput">S3LogsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() CodebuildProjectLogsConfigCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a>

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs"></a>

```go
func S3Logs() CodebuildProjectLogsConfigS3LogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() CodebuildProjectLogsConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---

##### `S3LogsInput`<sup>Optional</sup> <a name="S3LogsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput"></a>

```go
func S3LogsInput() CodebuildProjectLogsConfigS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectLogsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---


### CodebuildProjectLogsConfigS3LogsOutputReference <a name="CodebuildProjectLogsConfigS3LogsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectLogsConfigS3LogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectLogsConfigS3LogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetBucketOwnerAccess">ResetBucketOwnerAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetEncryptionDisabled">ResetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketOwnerAccess` <a name="ResetBucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetBucketOwnerAccess"></a>

```go
func ResetBucketOwnerAccess()
```

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetEncryptionDisabled"></a>

```go
func ResetEncryptionDisabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput">BucketOwnerAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketOwnerAccessInput`<sup>Optional</sup> <a name="BucketOwnerAccessInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput"></a>

```go
func BucketOwnerAccessInput() *string
```

- *Type:* *string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput"></a>

```go
func EncryptionDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `BucketOwnerAccess`<sup>Required</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess"></a>

```go
func BucketOwnerAccess() *string
```

- *Type:* *string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled"></a>

```go
func EncryptionDisabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectLogsConfigS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---


### CodebuildProjectSecondaryArtifactsList <a name="CodebuildProjectSecondaryArtifactsList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondaryArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodebuildProjectSecondaryArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get"></a>

```go
func Get(index *f64) CodebuildProjectSecondaryArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectSecondaryArtifactsOutputReference <a name="CodebuildProjectSecondaryArtifactsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondaryArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodebuildProjectSecondaryArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetBucketOwnerAccess">ResetBucketOwnerAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetEncryptionDisabled">ResetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetNamespaceType">ResetNamespaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetOverrideArtifactName">ResetOverrideArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPackaging">ResetPackaging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketOwnerAccess` <a name="ResetBucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetBucketOwnerAccess"></a>

```go
func ResetBucketOwnerAccess()
```

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetEncryptionDisabled"></a>

```go
func ResetEncryptionDisabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespaceType` <a name="ResetNamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetNamespaceType"></a>

```go
func ResetNamespaceType()
```

##### `ResetOverrideArtifactName` <a name="ResetOverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetOverrideArtifactName"></a>

```go
func ResetOverrideArtifactName()
```

##### `ResetPackaging` <a name="ResetPackaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPackaging"></a>

```go
func ResetPackaging()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput">ArtifactIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput">BucketOwnerAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput">NamespaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput">OverrideArtifactNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput">PackagingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType">NamespaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging">Packaging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdentifierInput`<sup>Optional</sup> <a name="ArtifactIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput"></a>

```go
func ArtifactIdentifierInput() *string
```

- *Type:* *string

---

##### `BucketOwnerAccessInput`<sup>Optional</sup> <a name="BucketOwnerAccessInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```go
func BucketOwnerAccessInput() *string
```

- *Type:* *string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput"></a>

```go
func EncryptionDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceTypeInput`<sup>Optional</sup> <a name="NamespaceTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput"></a>

```go
func NamespaceTypeInput() *string
```

- *Type:* *string

---

##### `OverrideArtifactNameInput`<sup>Optional</sup> <a name="OverrideArtifactNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```go
func OverrideArtifactNameInput() interface{}
```

- *Type:* interface{}

---

##### `PackagingInput`<sup>Optional</sup> <a name="PackagingInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput"></a>

```go
func PackagingInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ArtifactIdentifier`<sup>Required</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier"></a>

```go
func ArtifactIdentifier() *string
```

- *Type:* *string

---

##### `BucketOwnerAccess`<sup>Required</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess"></a>

```go
func BucketOwnerAccess() *string
```

- *Type:* *string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled"></a>

```go
func EncryptionDisabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType"></a>

```go
func NamespaceType() *string
```

- *Type:* *string

---

##### `OverrideArtifactName`<sup>Required</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName"></a>

```go
func OverrideArtifactName() interface{}
```

- *Type:* interface{}

---

##### `Packaging`<sup>Required</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging"></a>

```go
func Packaging() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectSecondarySourcesAuthOutputReference <a name="CodebuildProjectSecondarySourcesAuthOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondarySourcesAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectSecondarySourcesAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectSecondarySourcesAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---


### CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference <a name="CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondarySourcesBuildStatusConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetContext"></a>

```go
func ResetContext()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetTargetUrl"></a>

```go
func ResetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectSecondarySourcesBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---


### CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">FetchSubmodulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules">FetchSubmodules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FetchSubmodulesInput`<sup>Optional</sup> <a name="FetchSubmodulesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```go
func FetchSubmodulesInput() interface{}
```

- *Type:* interface{}

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```go
func FetchSubmodules() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectSecondarySourcesGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---


### CodebuildProjectSecondarySourcesList <a name="CodebuildProjectSecondarySourcesList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondarySourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodebuildProjectSecondarySourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get"></a>

```go
func Get(index *f64) CodebuildProjectSecondarySourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectSecondarySourcesOutputReference <a name="CodebuildProjectSecondarySourcesOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondarySourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodebuildProjectSecondarySourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig">PutBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig">PutGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildspec">ResetBuildspec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildStatusConfig">ResetBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitCloneDepth">ResetGitCloneDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitSubmodulesConfig">ResetGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetInsecureSsl">ResetInsecureSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetReportBuildStatus">ResetReportBuildStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth"></a>

```go
func PutAuth(value CodebuildProjectSecondarySourcesAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---

##### `PutBuildStatusConfig` <a name="PutBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig"></a>

```go
func PutBuildStatusConfig(value CodebuildProjectSecondarySourcesBuildStatusConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---

##### `PutGitSubmodulesConfig` <a name="PutGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig"></a>

```go
func PutGitSubmodulesConfig(value CodebuildProjectSecondarySourcesGitSubmodulesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetAuth"></a>

```go
func ResetAuth()
```

##### `ResetBuildspec` <a name="ResetBuildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildspec"></a>

```go
func ResetBuildspec()
```

##### `ResetBuildStatusConfig` <a name="ResetBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildStatusConfig"></a>

```go
func ResetBuildStatusConfig()
```

##### `ResetGitCloneDepth` <a name="ResetGitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitCloneDepth"></a>

```go
func ResetGitCloneDepth()
```

##### `ResetGitSubmodulesConfig` <a name="ResetGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitSubmodulesConfig"></a>

```go
func ResetGitSubmodulesConfig()
```

##### `ResetInsecureSsl` <a name="ResetInsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetInsecureSsl"></a>

```go
func ResetInsecureSsl()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetReportBuildStatus` <a name="ResetReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetReportBuildStatus"></a>

```go
func ResetReportBuildStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput">BuildspecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput">BuildStatusConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput">GitCloneDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput">GitSubmodulesConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput">InsecureSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput">ReportBuildStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec">Buildspec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth">GitCloneDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl">InsecureSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth"></a>

```go
func Auth() CodebuildProjectSecondarySourcesAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a>

---

##### `BuildStatusConfig`<sup>Required</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig"></a>

```go
func BuildStatusConfig() CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a>

---

##### `GitSubmodulesConfig`<sup>Required</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig"></a>

```go
func GitSubmodulesConfig() CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput"></a>

```go
func AuthInput() CodebuildProjectSecondarySourcesAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---

##### `BuildspecInput`<sup>Optional</sup> <a name="BuildspecInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput"></a>

```go
func BuildspecInput() *string
```

- *Type:* *string

---

##### `BuildStatusConfigInput`<sup>Optional</sup> <a name="BuildStatusConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput"></a>

```go
func BuildStatusConfigInput() CodebuildProjectSecondarySourcesBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---

##### `GitCloneDepthInput`<sup>Optional</sup> <a name="GitCloneDepthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput"></a>

```go
func GitCloneDepthInput() *f64
```

- *Type:* *f64

---

##### `GitSubmodulesConfigInput`<sup>Optional</sup> <a name="GitSubmodulesConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput"></a>

```go
func GitSubmodulesConfigInput() CodebuildProjectSecondarySourcesGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---

##### `InsecureSslInput`<sup>Optional</sup> <a name="InsecureSslInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput"></a>

```go
func InsecureSslInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ReportBuildStatusInput`<sup>Optional</sup> <a name="ReportBuildStatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput"></a>

```go
func ReportBuildStatusInput() interface{}
```

- *Type:* interface{}

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput"></a>

```go
func SourceIdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Buildspec`<sup>Required</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec"></a>

```go
func Buildspec() *string
```

- *Type:* *string

---

##### `GitCloneDepth`<sup>Required</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth"></a>

```go
func GitCloneDepth() *f64
```

- *Type:* *f64

---

##### `InsecureSsl`<sup>Required</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl"></a>

```go
func InsecureSsl() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ReportBuildStatus`<sup>Required</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus"></a>

```go
func ReportBuildStatus() interface{}
```

- *Type:* interface{}

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier"></a>

```go
func SourceIdentifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectSecondarySourceVersionList <a name="CodebuildProjectSecondarySourceVersionList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondarySourceVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodebuildProjectSecondarySourceVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get"></a>

```go
func Get(index *f64) CodebuildProjectSecondarySourceVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectSecondarySourceVersionOutputReference <a name="CodebuildProjectSecondarySourceVersionOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSecondarySourceVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodebuildProjectSecondarySourceVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput">SourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput"></a>

```go
func SourceIdentifierInput() *string
```

- *Type:* *string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput"></a>

```go
func SourceVersionInput() *string
```

- *Type:* *string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier"></a>

```go
func SourceIdentifier() *string
```

- *Type:* *string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion"></a>

```go
func SourceVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodebuildProjectSourceAuthOutputReference <a name="CodebuildProjectSourceAuthOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSourceAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectSourceAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectSourceAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---


### CodebuildProjectSourceBuildStatusConfigOutputReference <a name="CodebuildProjectSourceBuildStatusConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSourceBuildStatusConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectSourceBuildStatusConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetContext"></a>

```go
func ResetContext()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetTargetUrl"></a>

```go
func ResetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectSourceBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---


### CodebuildProjectSourceGitSubmodulesConfigOutputReference <a name="CodebuildProjectSourceGitSubmodulesConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSourceGitSubmodulesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectSourceGitSubmodulesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">FetchSubmodulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules">FetchSubmodules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FetchSubmodulesInput`<sup>Optional</sup> <a name="FetchSubmodulesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```go
func FetchSubmodulesInput() interface{}
```

- *Type:* interface{}

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```go
func FetchSubmodules() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectSourceGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---


### CodebuildProjectSourceOutputReference <a name="CodebuildProjectSourceOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig">PutBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig">PutGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildspec">ResetBuildspec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildStatusConfig">ResetBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitCloneDepth">ResetGitCloneDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitSubmodulesConfig">ResetGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetInsecureSsl">ResetInsecureSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetReportBuildStatus">ResetReportBuildStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth"></a>

```go
func PutAuth(value CodebuildProjectSourceAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---

##### `PutBuildStatusConfig` <a name="PutBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig"></a>

```go
func PutBuildStatusConfig(value CodebuildProjectSourceBuildStatusConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---

##### `PutGitSubmodulesConfig` <a name="PutGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig"></a>

```go
func PutGitSubmodulesConfig(value CodebuildProjectSourceGitSubmodulesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetAuth"></a>

```go
func ResetAuth()
```

##### `ResetBuildspec` <a name="ResetBuildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildspec"></a>

```go
func ResetBuildspec()
```

##### `ResetBuildStatusConfig` <a name="ResetBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildStatusConfig"></a>

```go
func ResetBuildStatusConfig()
```

##### `ResetGitCloneDepth` <a name="ResetGitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitCloneDepth"></a>

```go
func ResetGitCloneDepth()
```

##### `ResetGitSubmodulesConfig` <a name="ResetGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitSubmodulesConfig"></a>

```go
func ResetGitSubmodulesConfig()
```

##### `ResetInsecureSsl` <a name="ResetInsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetInsecureSsl"></a>

```go
func ResetInsecureSsl()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetReportBuildStatus` <a name="ResetReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetReportBuildStatus"></a>

```go
func ResetReportBuildStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput">BuildspecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput">BuildStatusConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput">GitCloneDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput">GitSubmodulesConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput">InsecureSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput">ReportBuildStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec">Buildspec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth">GitCloneDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl">InsecureSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.auth"></a>

```go
func Auth() CodebuildProjectSourceAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a>

---

##### `BuildStatusConfig`<sup>Required</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig"></a>

```go
func BuildStatusConfig() CodebuildProjectSourceBuildStatusConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a>

---

##### `GitSubmodulesConfig`<sup>Required</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig"></a>

```go
func GitSubmodulesConfig() CodebuildProjectSourceGitSubmodulesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput"></a>

```go
func AuthInput() CodebuildProjectSourceAuth
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---

##### `BuildspecInput`<sup>Optional</sup> <a name="BuildspecInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput"></a>

```go
func BuildspecInput() *string
```

- *Type:* *string

---

##### `BuildStatusConfigInput`<sup>Optional</sup> <a name="BuildStatusConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput"></a>

```go
func BuildStatusConfigInput() CodebuildProjectSourceBuildStatusConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---

##### `GitCloneDepthInput`<sup>Optional</sup> <a name="GitCloneDepthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput"></a>

```go
func GitCloneDepthInput() *f64
```

- *Type:* *f64

---

##### `GitSubmodulesConfigInput`<sup>Optional</sup> <a name="GitSubmodulesConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput"></a>

```go
func GitSubmodulesConfigInput() CodebuildProjectSourceGitSubmodulesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---

##### `InsecureSslInput`<sup>Optional</sup> <a name="InsecureSslInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput"></a>

```go
func InsecureSslInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ReportBuildStatusInput`<sup>Optional</sup> <a name="ReportBuildStatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput"></a>

```go
func ReportBuildStatusInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Buildspec`<sup>Required</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec"></a>

```go
func Buildspec() *string
```

- *Type:* *string

---

##### `GitCloneDepth`<sup>Required</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth"></a>

```go
func GitCloneDepth() *f64
```

- *Type:* *f64

---

##### `InsecureSsl`<sup>Required</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl"></a>

```go
func InsecureSsl() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ReportBuildStatus`<sup>Required</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus"></a>

```go
func ReportBuildStatus() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectSource
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---


### CodebuildProjectVpcConfigOutputReference <a name="CodebuildProjectVpcConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codebuildproject"

codebuildproject.NewCodebuildProjectVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodebuildProjectVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CodebuildProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---



