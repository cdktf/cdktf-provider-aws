# `codebuildProject` Submodule <a name="`codebuildProject` Submodule" id="@cdktf/provider-aws.codebuildProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildProject <a name="CodebuildProject" id="@cdktf/provider-aws.codebuildProject.CodebuildProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project aws_codebuild_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProject(Construct Scope, string Id, CodebuildProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig">CodebuildProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts"></a>

```csharp
private void PutArtifacts(CodebuildProjectArtifacts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---

##### `PutBuildBatchConfig` <a name="PutBuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig"></a>

```csharp
private void PutBuildBatchConfig(CodebuildProjectBuildBatchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putBuildBatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---

##### `PutCache` <a name="PutCache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache"></a>

```csharp
private void PutCache(CodebuildProjectCache Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment"></a>

```csharp
private void PutEnvironment(CodebuildProjectEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---

##### `PutFileSystemLocations` <a name="PutFileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations"></a>

```csharp
private void PutFileSystemLocations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putFileSystemLocations.parameter.value"></a>

- *Type:* object

---

##### `PutLogsConfig` <a name="PutLogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig"></a>

```csharp
private void PutLogsConfig(CodebuildProjectLogsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---

##### `PutSecondaryArtifacts` <a name="PutSecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts"></a>

```csharp
private void PutSecondaryArtifacts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondaryArtifacts.parameter.value"></a>

- *Type:* object

---

##### `PutSecondarySources` <a name="PutSecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources"></a>

```csharp
private void PutSecondarySources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySources.parameter.value"></a>

- *Type:* object

---

##### `PutSecondarySourceVersion` <a name="PutSecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion"></a>

```csharp
private void PutSecondarySourceVersion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSecondarySourceVersion.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource"></a>

```csharp
private void PutSource(CodebuildProjectSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig"></a>

```csharp
private void PutVpcConfig(CodebuildProjectVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---

##### `ResetBadgeEnabled` <a name="ResetBadgeEnabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBadgeEnabled"></a>

```csharp
private void ResetBadgeEnabled()
```

##### `ResetBuildBatchConfig` <a name="ResetBuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildBatchConfig"></a>

```csharp
private void ResetBuildBatchConfig()
```

##### `ResetBuildTimeout` <a name="ResetBuildTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetBuildTimeout"></a>

```csharp
private void ResetBuildTimeout()
```

##### `ResetCache` <a name="ResetCache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetCache"></a>

```csharp
private void ResetCache()
```

##### `ResetConcurrentBuildLimit` <a name="ResetConcurrentBuildLimit" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetConcurrentBuildLimit"></a>

```csharp
private void ResetConcurrentBuildLimit()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetFileSystemLocations` <a name="ResetFileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetFileSystemLocations"></a>

```csharp
private void ResetFileSystemLocations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogsConfig` <a name="ResetLogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetLogsConfig"></a>

```csharp
private void ResetLogsConfig()
```

##### `ResetProjectVisibility` <a name="ResetProjectVisibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetProjectVisibility"></a>

```csharp
private void ResetProjectVisibility()
```

##### `ResetQueuedTimeout` <a name="ResetQueuedTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetQueuedTimeout"></a>

```csharp
private void ResetQueuedTimeout()
```

##### `ResetResourceAccessRole` <a name="ResetResourceAccessRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetResourceAccessRole"></a>

```csharp
private void ResetResourceAccessRole()
```

##### `ResetSecondaryArtifacts` <a name="ResetSecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondaryArtifacts"></a>

```csharp
private void ResetSecondaryArtifacts()
```

##### `ResetSecondarySources` <a name="ResetSecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySources"></a>

```csharp
private void ResetSecondarySources()
```

##### `ResetSecondarySourceVersion` <a name="ResetSecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSecondarySourceVersion"></a>

```csharp
private void ResetSecondarySourceVersion()
```

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetSourceVersion"></a>

```csharp
private void ResetSourceVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodebuildProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodebuildProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodebuildProject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeUrl">BadgeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfig">BuildBatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cache">Cache</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocations">FileSystemLocations</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfig">LogsConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.publicProjectAlias">PublicProjectAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifacts">SecondaryArtifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySources">SecondarySources</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersion">SecondarySourceVersion</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifactsInput">ArtifactsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabledInput">BadgeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfigInput">BuildBatchConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeoutInput">BuildTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cacheInput">CacheInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput">ConcurrentBuildLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocationsInput">FileSystemLocationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfigInput">LogsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibilityInput">ProjectVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeoutInput">QueuedTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRoleInput">ResourceAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifactsInput">SecondaryArtifactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourcesInput">SecondarySourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersionInput">SecondarySourceVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersionInput">SourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabled">BadgeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeout">BuildTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimit">ConcurrentBuildLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibility">ProjectVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeout">QueuedTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRole">ResourceAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifacts"></a>

```csharp
public CodebuildProjectArtifactsOutputReference Artifacts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a>

---

##### `BadgeUrl`<sup>Required</sup> <a name="BadgeUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeUrl"></a>

```csharp
public string BadgeUrl { get; }
```

- *Type:* string

---

##### `BuildBatchConfig`<sup>Required</sup> <a name="BuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfig"></a>

```csharp
public CodebuildProjectBuildBatchConfigOutputReference BuildBatchConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a>

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cache"></a>

```csharp
public CodebuildProjectCacheOutputReference Cache { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environment"></a>

```csharp
public CodebuildProjectEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a>

---

##### `FileSystemLocations`<sup>Required</sup> <a name="FileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocations"></a>

```csharp
public CodebuildProjectFileSystemLocationsList FileSystemLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a>

---

##### `LogsConfig`<sup>Required</sup> <a name="LogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfig"></a>

```csharp
public CodebuildProjectLogsConfigOutputReference LogsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a>

---

##### `PublicProjectAlias`<sup>Required</sup> <a name="PublicProjectAlias" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.publicProjectAlias"></a>

```csharp
public string PublicProjectAlias { get; }
```

- *Type:* string

---

##### `SecondaryArtifacts`<sup>Required</sup> <a name="SecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifacts"></a>

```csharp
public CodebuildProjectSecondaryArtifactsList SecondaryArtifacts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a>

---

##### `SecondarySources`<sup>Required</sup> <a name="SecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySources"></a>

```csharp
public CodebuildProjectSecondarySourcesList SecondarySources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a>

---

##### `SecondarySourceVersion`<sup>Required</sup> <a name="SecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersion"></a>

```csharp
public CodebuildProjectSecondarySourceVersionList SecondarySourceVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.source"></a>

```csharp
public CodebuildProjectSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfig"></a>

```csharp
public CodebuildProjectVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.artifactsInput"></a>

```csharp
public CodebuildProjectArtifacts ArtifactsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---

##### `BadgeEnabledInput`<sup>Optional</sup> <a name="BadgeEnabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabledInput"></a>

```csharp
public object BadgeEnabledInput { get; }
```

- *Type:* object

---

##### `BuildBatchConfigInput`<sup>Optional</sup> <a name="BuildBatchConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildBatchConfigInput"></a>

```csharp
public CodebuildProjectBuildBatchConfig BuildBatchConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---

##### `BuildTimeoutInput`<sup>Optional</sup> <a name="BuildTimeoutInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeoutInput"></a>

```csharp
public double BuildTimeoutInput { get; }
```

- *Type:* double

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.cacheInput"></a>

```csharp
public CodebuildProjectCache CacheInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---

##### `ConcurrentBuildLimitInput`<sup>Optional</sup> <a name="ConcurrentBuildLimitInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput"></a>

```csharp
public double ConcurrentBuildLimitInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKeyInput"></a>

```csharp
public string EncryptionKeyInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.environmentInput"></a>

```csharp
public CodebuildProjectEnvironment EnvironmentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---

##### `FileSystemLocationsInput`<sup>Optional</sup> <a name="FileSystemLocationsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.fileSystemLocationsInput"></a>

```csharp
public object FileSystemLocationsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogsConfigInput`<sup>Optional</sup> <a name="LogsConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.logsConfigInput"></a>

```csharp
public CodebuildProjectLogsConfig LogsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectVisibilityInput`<sup>Optional</sup> <a name="ProjectVisibilityInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibilityInput"></a>

```csharp
public string ProjectVisibilityInput { get; }
```

- *Type:* string

---

##### `QueuedTimeoutInput`<sup>Optional</sup> <a name="QueuedTimeoutInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeoutInput"></a>

```csharp
public double QueuedTimeoutInput { get; }
```

- *Type:* double

---

##### `ResourceAccessRoleInput`<sup>Optional</sup> <a name="ResourceAccessRoleInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRoleInput"></a>

```csharp
public string ResourceAccessRoleInput { get; }
```

- *Type:* string

---

##### `SecondaryArtifactsInput`<sup>Optional</sup> <a name="SecondaryArtifactsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondaryArtifactsInput"></a>

```csharp
public object SecondaryArtifactsInput { get; }
```

- *Type:* object

---

##### `SecondarySourcesInput`<sup>Optional</sup> <a name="SecondarySourcesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourcesInput"></a>

```csharp
public object SecondarySourcesInput { get; }
```

- *Type:* object

---

##### `SecondarySourceVersionInput`<sup>Optional</sup> <a name="SecondarySourceVersionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.secondarySourceVersionInput"></a>

```csharp
public object SecondarySourceVersionInput { get; }
```

- *Type:* object

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRoleInput"></a>

```csharp
public string ServiceRoleInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceInput"></a>

```csharp
public CodebuildProjectSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersionInput"></a>

```csharp
public string SourceVersionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.vpcConfigInput"></a>

```csharp
public CodebuildProjectVpcConfig VpcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---

##### `BadgeEnabled`<sup>Required</sup> <a name="BadgeEnabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.badgeEnabled"></a>

```csharp
public object BadgeEnabled { get; }
```

- *Type:* object

---

##### `BuildTimeout`<sup>Required</sup> <a name="BuildTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.buildTimeout"></a>

```csharp
public double BuildTimeout { get; }
```

- *Type:* double

---

##### `ConcurrentBuildLimit`<sup>Required</sup> <a name="ConcurrentBuildLimit" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.concurrentBuildLimit"></a>

```csharp
public double ConcurrentBuildLimit { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectVisibility`<sup>Required</sup> <a name="ProjectVisibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.projectVisibility"></a>

```csharp
public string ProjectVisibility { get; }
```

- *Type:* string

---

##### `QueuedTimeout`<sup>Required</sup> <a name="QueuedTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.queuedTimeout"></a>

```csharp
public double QueuedTimeout { get; }
```

- *Type:* double

---

##### `ResourceAccessRole`<sup>Required</sup> <a name="ResourceAccessRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.resourceAccessRole"></a>

```csharp
public string ResourceAccessRole { get; }
```

- *Type:* string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildProjectArtifacts <a name="CodebuildProjectArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectArtifacts {
    string Type,
    string ArtifactIdentifier = null,
    string BucketOwnerAccess = null,
    object EncryptionDisabled = null,
    string Location = null,
    string Name = null,
    string NamespaceType = null,
    object OverrideArtifactName = null,
    string Packaging = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.namespaceType">NamespaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.packaging">Packaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `ArtifactIdentifier`<sup>Optional</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier"></a>

```csharp
public string ArtifactIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `BucketOwnerAccess`<sup>Optional</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess"></a>

```csharp
public string BucketOwnerAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled"></a>

```csharp
public object EncryptionDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `NamespaceType`<sup>Optional</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.namespaceType"></a>

```csharp
public string NamespaceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `OverrideArtifactName`<sup>Optional</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName"></a>

```csharp
public object OverrideArtifactName { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `Packaging`<sup>Optional</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.packaging"></a>

```csharp
public string Packaging { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectBuildBatchConfig <a name="CodebuildProjectBuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectBuildBatchConfig {
    string ServiceRole,
    object CombineArtifacts = null,
    CodebuildProjectBuildBatchConfigRestrictions Restrictions = null,
    double TimeoutInMins = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole">ServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts">CombineArtifacts</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins">TimeoutInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}. |

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole"></a>

```csharp
public string ServiceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `CombineArtifacts`<sup>Optional</sup> <a name="CombineArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts"></a>

```csharp
public object CombineArtifacts { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}.

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions"></a>

```csharp
public CodebuildProjectBuildBatchConfigRestrictions Restrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#restrictions CodebuildProject#restrictions}

---

##### `TimeoutInMins`<sup>Optional</sup> <a name="TimeoutInMins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins"></a>

```csharp
public double TimeoutInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}.

---

### CodebuildProjectBuildBatchConfigRestrictions <a name="CodebuildProjectBuildBatchConfigRestrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectBuildBatchConfigRestrictions {
    string[] ComputeTypesAllowed = null,
    double MaximumBuildsAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed">ComputeTypesAllowed</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed">MaximumBuildsAllowed</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}. |

---

##### `ComputeTypesAllowed`<sup>Optional</sup> <a name="ComputeTypesAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

```csharp
public string[] ComputeTypesAllowed { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}.

---

##### `MaximumBuildsAllowed`<sup>Optional</sup> <a name="MaximumBuildsAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

```csharp
public double MaximumBuildsAllowed { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}.

---

### CodebuildProjectCache <a name="CodebuildProjectCache" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectCache {
    string Location = null,
    string[] Modes = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.modes">Modes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#modes CodebuildProject#modes}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Modes`<sup>Optional</sup> <a name="Modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.modes"></a>

```csharp
public string[] Modes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#modes CodebuildProject#modes}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCache.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectConfig <a name="CodebuildProjectConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CodebuildProjectArtifacts Artifacts,
    CodebuildProjectEnvironment Environment,
    string Name,
    string ServiceRole,
    CodebuildProjectSource Source,
    object BadgeEnabled = null,
    CodebuildProjectBuildBatchConfig BuildBatchConfig = null,
    double BuildTimeout = null,
    CodebuildProjectCache Cache = null,
    double ConcurrentBuildLimit = null,
    string Description = null,
    string EncryptionKey = null,
    object FileSystemLocations = null,
    string Id = null,
    CodebuildProjectLogsConfig LogsConfig = null,
    string ProjectVisibility = null,
    double QueuedTimeout = null,
    string ResourceAccessRole = null,
    object SecondaryArtifacts = null,
    object SecondarySources = null,
    object SecondarySourceVersion = null,
    string SourceVersion = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    CodebuildProjectVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.serviceRole">ServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.badgeEnabled">BadgeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig">BuildBatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | build_batch_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildTimeout">BuildTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.cache">Cache</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | cache block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit">ConcurrentBuildLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations">FileSystemLocations</a></code> | <code>object</code> | file_system_locations block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.logsConfig">LogsConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.projectVisibility">ProjectVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.queuedTimeout">QueuedTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole">ResourceAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts">SecondaryArtifacts</a></code> | <code>object</code> | secondary_artifacts block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySources">SecondarySources</a></code> | <code>object</code> | secondary_sources block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion">SecondarySourceVersion</a></code> | <code>object</code> | secondary_source_version block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.artifacts"></a>

```csharp
public CodebuildProjectArtifacts Artifacts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifacts CodebuildProject#artifacts}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.environment"></a>

```csharp
public CodebuildProjectEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment CodebuildProject#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.serviceRole"></a>

```csharp
public string ServiceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.source"></a>

```csharp
public CodebuildProjectSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source CodebuildProject#source}

---

##### `BadgeEnabled`<sup>Optional</sup> <a name="BadgeEnabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.badgeEnabled"></a>

```csharp
public object BadgeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#badge_enabled CodebuildProject#badge_enabled}.

---

##### `BuildBatchConfig`<sup>Optional</sup> <a name="BuildBatchConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig"></a>

```csharp
public CodebuildProjectBuildBatchConfig BuildBatchConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

build_batch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_batch_config CodebuildProject#build_batch_config}

---

##### `BuildTimeout`<sup>Optional</sup> <a name="BuildTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.buildTimeout"></a>

```csharp
public double BuildTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_timeout CodebuildProject#build_timeout}.

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.cache"></a>

```csharp
public CodebuildProjectCache Cache { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

cache block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cache CodebuildProject#cache}

---

##### `ConcurrentBuildLimit`<sup>Optional</sup> <a name="ConcurrentBuildLimit" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit"></a>

```csharp
public double ConcurrentBuildLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#description CodebuildProject#description}.

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_key CodebuildProject#encryption_key}.

---

##### `FileSystemLocations`<sup>Optional</sup> <a name="FileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations"></a>

```csharp
public object FileSystemLocations { get; set; }
```

- *Type:* object

file_system_locations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#file_system_locations CodebuildProject#file_system_locations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#id CodebuildProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogsConfig`<sup>Optional</sup> <a name="LogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.logsConfig"></a>

```csharp
public CodebuildProjectLogsConfig LogsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#logs_config CodebuildProject#logs_config}

---

##### `ProjectVisibility`<sup>Optional</sup> <a name="ProjectVisibility" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.projectVisibility"></a>

```csharp
public string ProjectVisibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#project_visibility CodebuildProject#project_visibility}.

---

##### `QueuedTimeout`<sup>Optional</sup> <a name="QueuedTimeout" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.queuedTimeout"></a>

```csharp
public double QueuedTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#queued_timeout CodebuildProject#queued_timeout}.

---

##### `ResourceAccessRole`<sup>Optional</sup> <a name="ResourceAccessRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole"></a>

```csharp
public string ResourceAccessRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource_access_role CodebuildProject#resource_access_role}.

---

##### `SecondaryArtifacts`<sup>Optional</sup> <a name="SecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts"></a>

```csharp
public object SecondaryArtifacts { get; set; }
```

- *Type:* object

secondary_artifacts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_artifacts CodebuildProject#secondary_artifacts}

---

##### `SecondarySources`<sup>Optional</sup> <a name="SecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySources"></a>

```csharp
public object SecondarySources { get; set; }
```

- *Type:* object

secondary_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_sources CodebuildProject#secondary_sources}

---

##### `SecondarySourceVersion`<sup>Optional</sup> <a name="SecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion"></a>

```csharp
public object SecondarySourceVersion { get; set; }
```

- *Type:* object

secondary_source_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#secondary_source_version CodebuildProject#secondary_source_version}

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags CodebuildProject#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#tags_all CodebuildProject#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectConfig.property.vpcConfig"></a>

```csharp
public CodebuildProjectVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_config CodebuildProject#vpc_config}

---

### CodebuildProjectEnvironment <a name="CodebuildProjectEnvironment" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectEnvironment {
    string ComputeType,
    string Image,
    string Type,
    string Certificate = null,
    object EnvironmentVariable = null,
    string ImagePullCredentialsType = null,
    object PrivilegedMode = null,
    CodebuildProjectEnvironmentRegistryCredential RegistryCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.computeType">ComputeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_type CodebuildProject#compute_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image CodebuildProject#image}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#certificate CodebuildProject#certificate}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable">EnvironmentVariable</a></code> | <code>object</code> | environment_variable block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType">ImagePullCredentialsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode">PrivilegedMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#privileged_mode CodebuildProject#privileged_mode}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.registryCredential">RegistryCredential</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | registry_credential block. |

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.computeType"></a>

```csharp
public string ComputeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#compute_type CodebuildProject#compute_type}.

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image CodebuildProject#image}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#certificate CodebuildProject#certificate}.

---

##### `EnvironmentVariable`<sup>Optional</sup> <a name="EnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable"></a>

```csharp
public object EnvironmentVariable { get; set; }
```

- *Type:* object

environment_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#environment_variable CodebuildProject#environment_variable}

---

##### `ImagePullCredentialsType`<sup>Optional</sup> <a name="ImagePullCredentialsType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType"></a>

```csharp
public string ImagePullCredentialsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}.

---

##### `PrivilegedMode`<sup>Optional</sup> <a name="PrivilegedMode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode"></a>

```csharp
public object PrivilegedMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#privileged_mode CodebuildProject#privileged_mode}.

---

##### `RegistryCredential`<sup>Optional</sup> <a name="RegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment.property.registryCredential"></a>

```csharp
public CodebuildProjectEnvironmentRegistryCredential RegistryCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#registry_credential CodebuildProject#registry_credential}

---

### CodebuildProjectEnvironmentEnvironmentVariable <a name="CodebuildProjectEnvironmentEnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectEnvironmentEnvironmentVariable {
    string Name,
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#value CodebuildProject#value}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#value CodebuildProject#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectEnvironmentRegistryCredential <a name="CodebuildProjectEnvironmentRegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectEnvironmentRegistryCredential {
    string Credential,
    string CredentialProvider
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential">Credential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential CodebuildProject#credential}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider">CredentialProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential_provider CodebuildProject#credential_provider}. |

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential"></a>

```csharp
public string Credential { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential CodebuildProject#credential}.

---

##### `CredentialProvider`<sup>Required</sup> <a name="CredentialProvider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider"></a>

```csharp
public string CredentialProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#credential_provider CodebuildProject#credential_provider}.

---

### CodebuildProjectFileSystemLocations <a name="CodebuildProjectFileSystemLocations" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectFileSystemLocations {
    string Identifier = null,
    string Location = null,
    string MountOptions = null,
    string MountPoint = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#identifier CodebuildProject#identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions">MountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_options CodebuildProject#mount_options}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint">MountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_point CodebuildProject#mount_point}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#identifier CodebuildProject#identifier}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions"></a>

```csharp
public string MountOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_options CodebuildProject#mount_options}.

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#mount_point CodebuildProject#mount_point}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectLogsConfig <a name="CodebuildProjectLogsConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectLogsConfig {
    CodebuildProjectLogsConfigCloudwatchLogs CloudwatchLogs = null,
    CodebuildProjectLogsConfigS3Logs S3Logs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | s3_logs block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs"></a>

```csharp
public CodebuildProjectLogsConfigCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#cloudwatch_logs CodebuildProject#cloudwatch_logs}

---

##### `S3Logs`<sup>Optional</sup> <a name="S3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs"></a>

```csharp
public CodebuildProjectLogsConfigS3Logs S3Logs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#s3_logs CodebuildProject#s3_logs}

---

### CodebuildProjectLogsConfigCloudwatchLogs <a name="CodebuildProjectLogsConfigCloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectLogsConfigCloudwatchLogs {
    string GroupName = null,
    string Status = null,
    string StreamName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#group_name CodebuildProject#group_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#stream_name CodebuildProject#stream_name}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#group_name CodebuildProject#group_name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#stream_name CodebuildProject#stream_name}.

---

### CodebuildProjectLogsConfigS3Logs <a name="CodebuildProjectLogsConfigS3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectLogsConfigS3Logs {
    string BucketOwnerAccess = null,
    object EncryptionDisabled = null,
    string Location = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}. |

---

##### `BucketOwnerAccess`<sup>Optional</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess"></a>

```csharp
public string BucketOwnerAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled"></a>

```csharp
public object EncryptionDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#status CodebuildProject#status}.

---

### CodebuildProjectSecondaryArtifacts <a name="CodebuildProjectSecondaryArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondaryArtifacts {
    string ArtifactIdentifier,
    string Type,
    string BucketOwnerAccess = null,
    object EncryptionDisabled = null,
    string Location = null,
    string Name = null,
    string NamespaceType = null,
    object OverrideArtifactName = null,
    string Packaging = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType">NamespaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging">Packaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}. |

---

##### `ArtifactIdentifier`<sup>Required</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier"></a>

```csharp
public string ArtifactIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `BucketOwnerAccess`<sup>Optional</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess"></a>

```csharp
public string BucketOwnerAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled"></a>

```csharp
public object EncryptionDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#name CodebuildProject#name}.

---

##### `NamespaceType`<sup>Optional</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType"></a>

```csharp
public string NamespaceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `OverrideArtifactName`<sup>Optional</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName"></a>

```csharp
public object OverrideArtifactName { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `Packaging`<sup>Optional</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging"></a>

```csharp
public string Packaging { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectSecondarySources <a name="CodebuildProjectSecondarySources" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySources {
    string SourceIdentifier,
    string Type,
    CodebuildProjectSecondarySourcesAuth Auth = null,
    string Buildspec = null,
    CodebuildProjectSecondarySourcesBuildStatusConfig BuildStatusConfig = null,
    double GitCloneDepth = null,
    CodebuildProjectSecondarySourcesGitSubmodulesConfig GitSubmodulesConfig = null,
    object InsecureSsl = null,
    string Location = null,
    object ReportBuildStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildspec">Buildspec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth">GitCloneDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl">InsecureSsl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.auth"></a>

```csharp
public CodebuildProjectSecondarySourcesAuth Auth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#auth CodebuildProject#auth}

---

##### `Buildspec`<sup>Optional</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildspec"></a>

```csharp
public string Buildspec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `BuildStatusConfig`<sup>Optional</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig"></a>

```csharp
public CodebuildProjectSecondarySourcesBuildStatusConfig BuildStatusConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `GitCloneDepth`<sup>Optional</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth"></a>

```csharp
public double GitCloneDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `GitSubmodulesConfig`<sup>Optional</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig"></a>

```csharp
public CodebuildProjectSecondarySourcesGitSubmodulesConfig GitSubmodulesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `InsecureSsl`<sup>Optional</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl"></a>

```csharp
public object InsecureSsl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `ReportBuildStatus`<sup>Optional</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus"></a>

```csharp
public object ReportBuildStatus { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSecondarySourcesAuth <a name="CodebuildProjectSecondarySourcesAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesAuth {
    string Type,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSecondarySourcesBuildStatusConfig <a name="CodebuildProjectSecondarySourcesBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesBuildStatusConfig {
    string Context = null,
    string TargetUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context">Context</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl">TargetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl"></a>

```csharp
public string TargetUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSecondarySourcesGitSubmodulesConfig <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesGitSubmodulesConfig {
    object FetchSubmodules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules">FetchSubmodules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules"></a>

```csharp
public object FetchSubmodules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectSecondarySourceVersion <a name="CodebuildProjectSecondarySourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourceVersion {
    string SourceIdentifier,
    string SourceVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}. |

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#source_version CodebuildProject#source_version}.

---

### CodebuildProjectSource <a name="CodebuildProjectSource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSource {
    string Type,
    CodebuildProjectSourceAuth Auth = null,
    string Buildspec = null,
    CodebuildProjectSourceBuildStatusConfig BuildStatusConfig = null,
    double GitCloneDepth = null,
    CodebuildProjectSourceGitSubmodulesConfig GitSubmodulesConfig = null,
    object InsecureSsl = null,
    string Location = null,
    object ReportBuildStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildspec">Buildspec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitCloneDepth">GitCloneDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.insecureSsl">InsecureSsl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.auth"></a>

```csharp
public CodebuildProjectSourceAuth Auth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#auth CodebuildProject#auth}

---

##### `Buildspec`<sup>Optional</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildspec"></a>

```csharp
public string Buildspec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `BuildStatusConfig`<sup>Optional</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.buildStatusConfig"></a>

```csharp
public CodebuildProjectSourceBuildStatusConfig BuildStatusConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `GitCloneDepth`<sup>Optional</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitCloneDepth"></a>

```csharp
public double GitCloneDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `GitSubmodulesConfig`<sup>Optional</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig"></a>

```csharp
public CodebuildProjectSourceGitSubmodulesConfig GitSubmodulesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `InsecureSsl`<sup>Optional</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.insecureSsl"></a>

```csharp
public object InsecureSsl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#location CodebuildProject#location}.

---

##### `ReportBuildStatus`<sup>Optional</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSource.property.reportBuildStatus"></a>

```csharp
public object ReportBuildStatus { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSourceAuth <a name="CodebuildProjectSourceAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSourceAuth {
    string Type,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#type CodebuildProject#type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSourceBuildStatusConfig <a name="CodebuildProjectSourceBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSourceBuildStatusConfig {
    string Context = null,
    string TargetUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context">Context</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl">TargetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#context CodebuildProject#context}.

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl"></a>

```csharp
public string TargetUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSourceGitSubmodulesConfig <a name="CodebuildProjectSourceGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSourceGitSubmodulesConfig {
    object FetchSubmodules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules">FetchSubmodules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

```csharp
public object FetchSubmodules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectVpcConfig <a name="CodebuildProjectVpcConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectVpcConfig {
    string[] SecurityGroupIds,
    string[] Subnets,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#security_group_ids CodebuildProject#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#subnets CodebuildProject#subnets}. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_id CodebuildProject#vpc_id}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#security_group_ids CodebuildProject#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#subnets CodebuildProject#subnets}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project#vpc_id CodebuildProject#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildProjectArtifactsOutputReference <a name="CodebuildProjectArtifactsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactIdentifier` <a name="ResetArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetArtifactIdentifier"></a>

```csharp
private void ResetArtifactIdentifier()
```

##### `ResetBucketOwnerAccess` <a name="ResetBucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetBucketOwnerAccess"></a>

```csharp
private void ResetBucketOwnerAccess()
```

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetEncryptionDisabled"></a>

```csharp
private void ResetEncryptionDisabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespaceType` <a name="ResetNamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetNamespaceType"></a>

```csharp
private void ResetNamespaceType()
```

##### `ResetOverrideArtifactName` <a name="ResetOverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetOverrideArtifactName"></a>

```csharp
private void ResetOverrideArtifactName()
```

##### `ResetPackaging` <a name="ResetPackaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPackaging"></a>

```csharp
private void ResetPackaging()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput">ArtifactIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput">BucketOwnerAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput">NamespaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput">OverrideArtifactNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput">PackagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType">NamespaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging">Packaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactIdentifierInput`<sup>Optional</sup> <a name="ArtifactIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput"></a>

```csharp
public string ArtifactIdentifierInput { get; }
```

- *Type:* string

---

##### `BucketOwnerAccessInput`<sup>Optional</sup> <a name="BucketOwnerAccessInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```csharp
public string BucketOwnerAccessInput { get; }
```

- *Type:* string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput"></a>

```csharp
public object EncryptionDisabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceTypeInput`<sup>Optional</sup> <a name="NamespaceTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput"></a>

```csharp
public string NamespaceTypeInput { get; }
```

- *Type:* string

---

##### `OverrideArtifactNameInput`<sup>Optional</sup> <a name="OverrideArtifactNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```csharp
public object OverrideArtifactNameInput { get; }
```

- *Type:* object

---

##### `PackagingInput`<sup>Optional</sup> <a name="PackagingInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput"></a>

```csharp
public string PackagingInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ArtifactIdentifier`<sup>Required</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier"></a>

```csharp
public string ArtifactIdentifier { get; }
```

- *Type:* string

---

##### `BucketOwnerAccess`<sup>Required</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess"></a>

```csharp
public string BucketOwnerAccess { get; }
```

- *Type:* string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled"></a>

```csharp
public object EncryptionDisabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType"></a>

```csharp
public string NamespaceType { get; }
```

- *Type:* string

---

##### `OverrideArtifactName`<sup>Required</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName"></a>

```csharp
public object OverrideArtifactName { get; }
```

- *Type:* object

---

##### `Packaging`<sup>Required</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging"></a>

```csharp
public string Packaging { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---


### CodebuildProjectBuildBatchConfigOutputReference <a name="CodebuildProjectBuildBatchConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectBuildBatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions"></a>

```csharp
private void PutRestrictions(CodebuildProjectBuildBatchConfigRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---

##### `ResetCombineArtifacts` <a name="ResetCombineArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetCombineArtifacts"></a>

```csharp
private void ResetCombineArtifacts()
```

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetRestrictions"></a>

```csharp
private void ResetRestrictions()
```

##### `ResetTimeoutInMins` <a name="ResetTimeoutInMins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetTimeoutInMins"></a>

```csharp
private void ResetTimeoutInMins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput">CombineArtifactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput">TimeoutInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts">CombineArtifacts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins">TimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions"></a>

```csharp
public CodebuildProjectBuildBatchConfigRestrictionsOutputReference Restrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a>

---

##### `CombineArtifactsInput`<sup>Optional</sup> <a name="CombineArtifactsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput"></a>

```csharp
public object CombineArtifactsInput { get; }
```

- *Type:* object

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput"></a>

```csharp
public CodebuildProjectBuildBatchConfigRestrictions RestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput"></a>

```csharp
public string ServiceRoleInput { get; }
```

- *Type:* string

---

##### `TimeoutInMinsInput`<sup>Optional</sup> <a name="TimeoutInMinsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput"></a>

```csharp
public double TimeoutInMinsInput { get; }
```

- *Type:* double

---

##### `CombineArtifacts`<sup>Required</sup> <a name="CombineArtifacts" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts"></a>

```csharp
public object CombineArtifacts { get; }
```

- *Type:* object

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `TimeoutInMins`<sup>Required</sup> <a name="TimeoutInMins" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins"></a>

```csharp
public double TimeoutInMins { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectBuildBatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---


### CodebuildProjectBuildBatchConfigRestrictionsOutputReference <a name="CodebuildProjectBuildBatchConfigRestrictionsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectBuildBatchConfigRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeTypesAllowed` <a name="ResetComputeTypesAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetComputeTypesAllowed"></a>

```csharp
private void ResetComputeTypesAllowed()
```

##### `ResetMaximumBuildsAllowed` <a name="ResetMaximumBuildsAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetMaximumBuildsAllowed"></a>

```csharp
private void ResetMaximumBuildsAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput">ComputeTypesAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput">MaximumBuildsAllowedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed">ComputeTypesAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed">MaximumBuildsAllowed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeTypesAllowedInput`<sup>Optional</sup> <a name="ComputeTypesAllowedInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput"></a>

```csharp
public string[] ComputeTypesAllowedInput { get; }
```

- *Type:* string[]

---

##### `MaximumBuildsAllowedInput`<sup>Optional</sup> <a name="MaximumBuildsAllowedInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput"></a>

```csharp
public double MaximumBuildsAllowedInput { get; }
```

- *Type:* double

---

##### `ComputeTypesAllowed`<sup>Required</sup> <a name="ComputeTypesAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed"></a>

```csharp
public string[] ComputeTypesAllowed { get; }
```

- *Type:* string[]

---

##### `MaximumBuildsAllowed`<sup>Required</sup> <a name="MaximumBuildsAllowed" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed"></a>

```csharp
public double MaximumBuildsAllowed { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectBuildBatchConfigRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---


### CodebuildProjectCacheOutputReference <a name="CodebuildProjectCacheOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetModes` <a name="ResetModes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetModes"></a>

```csharp
private void ResetModes()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput">ModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modes">Modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ModesInput`<sup>Optional</sup> <a name="ModesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput"></a>

```csharp
public string[] ModesInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.modes"></a>

```csharp
public string[] Modes { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectCache InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---


### CodebuildProjectEnvironmentEnvironmentVariableList <a name="CodebuildProjectEnvironmentEnvironmentVariableList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectEnvironmentEnvironmentVariableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get"></a>

```csharp
private CodebuildProjectEnvironmentEnvironmentVariableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectEnvironmentEnvironmentVariableOutputReference <a name="CodebuildProjectEnvironmentEnvironmentVariableOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectEnvironmentEnvironmentVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectEnvironmentOutputReference <a name="CodebuildProjectEnvironmentOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentVariable` <a name="PutEnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable"></a>

```csharp
private void PutEnvironmentVariable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable.parameter.value"></a>

- *Type:* object

---

##### `PutRegistryCredential` <a name="PutRegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential"></a>

```csharp
private void PutRegistryCredential(CodebuildProjectEnvironmentRegistryCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetEnvironmentVariable` <a name="ResetEnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetEnvironmentVariable"></a>

```csharp
private void ResetEnvironmentVariable()
```

##### `ResetImagePullCredentialsType` <a name="ResetImagePullCredentialsType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetImagePullCredentialsType"></a>

```csharp
private void ResetImagePullCredentialsType()
```

##### `ResetPrivilegedMode` <a name="ResetPrivilegedMode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetPrivilegedMode"></a>

```csharp
private void ResetPrivilegedMode()
```

##### `ResetRegistryCredential` <a name="ResetRegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetRegistryCredential"></a>

```csharp
private void ResetRegistryCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable">EnvironmentVariable</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential">RegistryCredential</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput">ComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput">EnvironmentVariableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput">ImagePullCredentialsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput">PrivilegedModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput">RegistryCredentialInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType">ImagePullCredentialsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode">PrivilegedMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentVariable`<sup>Required</sup> <a name="EnvironmentVariable" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable"></a>

```csharp
public CodebuildProjectEnvironmentEnvironmentVariableList EnvironmentVariable { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a>

---

##### `RegistryCredential`<sup>Required</sup> <a name="RegistryCredential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential"></a>

```csharp
public CodebuildProjectEnvironmentRegistryCredentialOutputReference RegistryCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput"></a>

```csharp
public string ComputeTypeInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariableInput`<sup>Optional</sup> <a name="EnvironmentVariableInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput"></a>

```csharp
public object EnvironmentVariableInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `ImagePullCredentialsTypeInput`<sup>Optional</sup> <a name="ImagePullCredentialsTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput"></a>

```csharp
public string ImagePullCredentialsTypeInput { get; }
```

- *Type:* string

---

##### `PrivilegedModeInput`<sup>Optional</sup> <a name="PrivilegedModeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput"></a>

```csharp
public object PrivilegedModeInput { get; }
```

- *Type:* object

---

##### `RegistryCredentialInput`<sup>Optional</sup> <a name="RegistryCredentialInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput"></a>

```csharp
public CodebuildProjectEnvironmentRegistryCredential RegistryCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `ImagePullCredentialsType`<sup>Required</sup> <a name="ImagePullCredentialsType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType"></a>

```csharp
public string ImagePullCredentialsType { get; }
```

- *Type:* string

---

##### `PrivilegedMode`<sup>Required</sup> <a name="PrivilegedMode" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode"></a>

```csharp
public object PrivilegedMode { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---


### CodebuildProjectEnvironmentRegistryCredentialOutputReference <a name="CodebuildProjectEnvironmentRegistryCredentialOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectEnvironmentRegistryCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput">CredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput">CredentialProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential">Credential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider">CredentialProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput"></a>

```csharp
public string CredentialInput { get; }
```

- *Type:* string

---

##### `CredentialProviderInput`<sup>Optional</sup> <a name="CredentialProviderInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput"></a>

```csharp
public string CredentialProviderInput { get; }
```

- *Type:* string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential"></a>

```csharp
public string Credential { get; }
```

- *Type:* string

---

##### `CredentialProvider`<sup>Required</sup> <a name="CredentialProvider" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider"></a>

```csharp
public string CredentialProvider { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectEnvironmentRegistryCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---


### CodebuildProjectFileSystemLocationsList <a name="CodebuildProjectFileSystemLocationsList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectFileSystemLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get"></a>

```csharp
private CodebuildProjectFileSystemLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectFileSystemLocationsOutputReference <a name="CodebuildProjectFileSystemLocationsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectFileSystemLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountPoint"></a>

```csharp
private void ResetMountPoint()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions">MountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput"></a>

```csharp
public string MountOptionsInput { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions"></a>

```csharp
public string MountOptions { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectLogsConfigCloudwatchLogsOutputReference <a name="CodebuildProjectLogsConfigCloudwatchLogsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectLogsConfigCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStreamName` <a name="ResetStreamName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStreamName"></a>

```csharp
private void ResetStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectLogsConfigCloudwatchLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---


### CodebuildProjectLogsConfigOutputReference <a name="CodebuildProjectLogsConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectLogsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(CodebuildProjectLogsConfigCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---

##### `PutS3Logs` <a name="PutS3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs"></a>

```csharp
private void PutS3Logs(CodebuildProjectLogsConfigS3Logs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetS3Logs` <a name="ResetS3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetS3Logs"></a>

```csharp
private void ResetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput">S3LogsInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs"></a>

```csharp
public CodebuildProjectLogsConfigCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a>

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs"></a>

```csharp
public CodebuildProjectLogsConfigS3LogsOutputReference S3Logs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public CodebuildProjectLogsConfigCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---

##### `S3LogsInput`<sup>Optional</sup> <a name="S3LogsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput"></a>

```csharp
public CodebuildProjectLogsConfigS3Logs S3LogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectLogsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---


### CodebuildProjectLogsConfigS3LogsOutputReference <a name="CodebuildProjectLogsConfigS3LogsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectLogsConfigS3LogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketOwnerAccess` <a name="ResetBucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetBucketOwnerAccess"></a>

```csharp
private void ResetBucketOwnerAccess()
```

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetEncryptionDisabled"></a>

```csharp
private void ResetEncryptionDisabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput">BucketOwnerAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketOwnerAccessInput`<sup>Optional</sup> <a name="BucketOwnerAccessInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput"></a>

```csharp
public string BucketOwnerAccessInput { get; }
```

- *Type:* string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput"></a>

```csharp
public object EncryptionDisabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `BucketOwnerAccess`<sup>Required</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess"></a>

```csharp
public string BucketOwnerAccess { get; }
```

- *Type:* string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled"></a>

```csharp
public object EncryptionDisabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectLogsConfigS3Logs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---


### CodebuildProjectSecondaryArtifactsList <a name="CodebuildProjectSecondaryArtifactsList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondaryArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get"></a>

```csharp
private CodebuildProjectSecondaryArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectSecondaryArtifactsOutputReference <a name="CodebuildProjectSecondaryArtifactsOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondaryArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketOwnerAccess` <a name="ResetBucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetBucketOwnerAccess"></a>

```csharp
private void ResetBucketOwnerAccess()
```

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetEncryptionDisabled"></a>

```csharp
private void ResetEncryptionDisabled()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespaceType` <a name="ResetNamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetNamespaceType"></a>

```csharp
private void ResetNamespaceType()
```

##### `ResetOverrideArtifactName` <a name="ResetOverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetOverrideArtifactName"></a>

```csharp
private void ResetOverrideArtifactName()
```

##### `ResetPackaging` <a name="ResetPackaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPackaging"></a>

```csharp
private void ResetPackaging()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput">ArtifactIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput">BucketOwnerAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput">NamespaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput">OverrideArtifactNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput">PackagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier">ArtifactIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess">BucketOwnerAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType">NamespaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName">OverrideArtifactName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging">Packaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactIdentifierInput`<sup>Optional</sup> <a name="ArtifactIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput"></a>

```csharp
public string ArtifactIdentifierInput { get; }
```

- *Type:* string

---

##### `BucketOwnerAccessInput`<sup>Optional</sup> <a name="BucketOwnerAccessInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```csharp
public string BucketOwnerAccessInput { get; }
```

- *Type:* string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput"></a>

```csharp
public object EncryptionDisabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceTypeInput`<sup>Optional</sup> <a name="NamespaceTypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput"></a>

```csharp
public string NamespaceTypeInput { get; }
```

- *Type:* string

---

##### `OverrideArtifactNameInput`<sup>Optional</sup> <a name="OverrideArtifactNameInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```csharp
public object OverrideArtifactNameInput { get; }
```

- *Type:* object

---

##### `PackagingInput`<sup>Optional</sup> <a name="PackagingInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput"></a>

```csharp
public string PackagingInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ArtifactIdentifier`<sup>Required</sup> <a name="ArtifactIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier"></a>

```csharp
public string ArtifactIdentifier { get; }
```

- *Type:* string

---

##### `BucketOwnerAccess`<sup>Required</sup> <a name="BucketOwnerAccess" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess"></a>

```csharp
public string BucketOwnerAccess { get; }
```

- *Type:* string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled"></a>

```csharp
public object EncryptionDisabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType"></a>

```csharp
public string NamespaceType { get; }
```

- *Type:* string

---

##### `OverrideArtifactName`<sup>Required</sup> <a name="OverrideArtifactName" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName"></a>

```csharp
public object OverrideArtifactName { get; }
```

- *Type:* object

---

##### `Packaging`<sup>Required</sup> <a name="Packaging" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging"></a>

```csharp
public string Packaging { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectSecondarySourcesAuthOutputReference <a name="CodebuildProjectSecondarySourcesAuthOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectSecondarySourcesAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---


### CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference <a name="CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetTargetUrl"></a>

```csharp
private void ResetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```csharp
public string TargetUrlInput { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectSecondarySourcesBuildStatusConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---


### CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">FetchSubmodulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules">FetchSubmodules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FetchSubmodulesInput`<sup>Optional</sup> <a name="FetchSubmodulesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```csharp
public object FetchSubmodulesInput { get; }
```

- *Type:* object

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```csharp
public object FetchSubmodules { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectSecondarySourcesGitSubmodulesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---


### CodebuildProjectSecondarySourcesList <a name="CodebuildProjectSecondarySourcesList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get"></a>

```csharp
private CodebuildProjectSecondarySourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectSecondarySourcesOutputReference <a name="CodebuildProjectSecondarySourcesOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth"></a>

```csharp
private void PutAuth(CodebuildProjectSecondarySourcesAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---

##### `PutBuildStatusConfig` <a name="PutBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig"></a>

```csharp
private void PutBuildStatusConfig(CodebuildProjectSecondarySourcesBuildStatusConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---

##### `PutGitSubmodulesConfig` <a name="PutGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig"></a>

```csharp
private void PutGitSubmodulesConfig(CodebuildProjectSecondarySourcesGitSubmodulesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetAuth"></a>

```csharp
private void ResetAuth()
```

##### `ResetBuildspec` <a name="ResetBuildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildspec"></a>

```csharp
private void ResetBuildspec()
```

##### `ResetBuildStatusConfig` <a name="ResetBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildStatusConfig"></a>

```csharp
private void ResetBuildStatusConfig()
```

##### `ResetGitCloneDepth` <a name="ResetGitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitCloneDepth"></a>

```csharp
private void ResetGitCloneDepth()
```

##### `ResetGitSubmodulesConfig` <a name="ResetGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitSubmodulesConfig"></a>

```csharp
private void ResetGitSubmodulesConfig()
```

##### `ResetInsecureSsl` <a name="ResetInsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetInsecureSsl"></a>

```csharp
private void ResetInsecureSsl()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetReportBuildStatus` <a name="ResetReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetReportBuildStatus"></a>

```csharp
private void ResetReportBuildStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput">BuildspecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput">BuildStatusConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput">GitCloneDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput">GitSubmodulesConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput">InsecureSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput">ReportBuildStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec">Buildspec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth">GitCloneDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl">InsecureSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth"></a>

```csharp
public CodebuildProjectSecondarySourcesAuthOutputReference Auth { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a>

---

##### `BuildStatusConfig`<sup>Required</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig"></a>

```csharp
public CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference BuildStatusConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a>

---

##### `GitSubmodulesConfig`<sup>Required</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig"></a>

```csharp
public CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference GitSubmodulesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput"></a>

```csharp
public CodebuildProjectSecondarySourcesAuth AuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---

##### `BuildspecInput`<sup>Optional</sup> <a name="BuildspecInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput"></a>

```csharp
public string BuildspecInput { get; }
```

- *Type:* string

---

##### `BuildStatusConfigInput`<sup>Optional</sup> <a name="BuildStatusConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput"></a>

```csharp
public CodebuildProjectSecondarySourcesBuildStatusConfig BuildStatusConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---

##### `GitCloneDepthInput`<sup>Optional</sup> <a name="GitCloneDepthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput"></a>

```csharp
public double GitCloneDepthInput { get; }
```

- *Type:* double

---

##### `GitSubmodulesConfigInput`<sup>Optional</sup> <a name="GitSubmodulesConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput"></a>

```csharp
public CodebuildProjectSecondarySourcesGitSubmodulesConfig GitSubmodulesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---

##### `InsecureSslInput`<sup>Optional</sup> <a name="InsecureSslInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput"></a>

```csharp
public object InsecureSslInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ReportBuildStatusInput`<sup>Optional</sup> <a name="ReportBuildStatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput"></a>

```csharp
public object ReportBuildStatusInput { get; }
```

- *Type:* object

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput"></a>

```csharp
public string SourceIdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Buildspec`<sup>Required</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec"></a>

```csharp
public string Buildspec { get; }
```

- *Type:* string

---

##### `GitCloneDepth`<sup>Required</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth"></a>

```csharp
public double GitCloneDepth { get; }
```

- *Type:* double

---

##### `InsecureSsl`<sup>Required</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl"></a>

```csharp
public object InsecureSsl { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ReportBuildStatus`<sup>Required</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus"></a>

```csharp
public object ReportBuildStatus { get; }
```

- *Type:* object

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectSecondarySourceVersionList <a name="CodebuildProjectSecondarySourceVersionList" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourceVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get"></a>

```csharp
private CodebuildProjectSecondarySourceVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectSecondarySourceVersionOutputReference <a name="CodebuildProjectSecondarySourceVersionOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSecondarySourceVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput">SourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput"></a>

```csharp
public string SourceIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput"></a>

```csharp
public string SourceVersionInput { get; }
```

- *Type:* string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; }
```

- *Type:* string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodebuildProjectSourceAuthOutputReference <a name="CodebuildProjectSourceAuthOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSourceAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectSourceAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---


### CodebuildProjectSourceBuildStatusConfigOutputReference <a name="CodebuildProjectSourceBuildStatusConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSourceBuildStatusConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetTargetUrl"></a>

```csharp
private void ResetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```csharp
public string TargetUrlInput { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectSourceBuildStatusConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---


### CodebuildProjectSourceGitSubmodulesConfigOutputReference <a name="CodebuildProjectSourceGitSubmodulesConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSourceGitSubmodulesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">FetchSubmodulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules">FetchSubmodules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FetchSubmodulesInput`<sup>Optional</sup> <a name="FetchSubmodulesInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```csharp
public object FetchSubmodulesInput { get; }
```

- *Type:* object

---

##### `FetchSubmodules`<sup>Required</sup> <a name="FetchSubmodules" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```csharp
public object FetchSubmodules { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectSourceGitSubmodulesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---


### CodebuildProjectSourceOutputReference <a name="CodebuildProjectSourceOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth"></a>

```csharp
private void PutAuth(CodebuildProjectSourceAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---

##### `PutBuildStatusConfig` <a name="PutBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig"></a>

```csharp
private void PutBuildStatusConfig(CodebuildProjectSourceBuildStatusConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---

##### `PutGitSubmodulesConfig` <a name="PutGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig"></a>

```csharp
private void PutGitSubmodulesConfig(CodebuildProjectSourceGitSubmodulesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetAuth"></a>

```csharp
private void ResetAuth()
```

##### `ResetBuildspec` <a name="ResetBuildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildspec"></a>

```csharp
private void ResetBuildspec()
```

##### `ResetBuildStatusConfig` <a name="ResetBuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildStatusConfig"></a>

```csharp
private void ResetBuildStatusConfig()
```

##### `ResetGitCloneDepth` <a name="ResetGitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitCloneDepth"></a>

```csharp
private void ResetGitCloneDepth()
```

##### `ResetGitSubmodulesConfig` <a name="ResetGitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetGitSubmodulesConfig"></a>

```csharp
private void ResetGitSubmodulesConfig()
```

##### `ResetInsecureSsl` <a name="ResetInsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetInsecureSsl"></a>

```csharp
private void ResetInsecureSsl()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetReportBuildStatus` <a name="ResetReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.resetReportBuildStatus"></a>

```csharp
private void ResetReportBuildStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig">BuildStatusConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig">GitSubmodulesConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput">BuildspecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput">BuildStatusConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput">GitCloneDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput">GitSubmodulesConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput">InsecureSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput">ReportBuildStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec">Buildspec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth">GitCloneDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl">InsecureSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus">ReportBuildStatus</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.auth"></a>

```csharp
public CodebuildProjectSourceAuthOutputReference Auth { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a>

---

##### `BuildStatusConfig`<sup>Required</sup> <a name="BuildStatusConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig"></a>

```csharp
public CodebuildProjectSourceBuildStatusConfigOutputReference BuildStatusConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a>

---

##### `GitSubmodulesConfig`<sup>Required</sup> <a name="GitSubmodulesConfig" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig"></a>

```csharp
public CodebuildProjectSourceGitSubmodulesConfigOutputReference GitSubmodulesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput"></a>

```csharp
public CodebuildProjectSourceAuth AuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---

##### `BuildspecInput`<sup>Optional</sup> <a name="BuildspecInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput"></a>

```csharp
public string BuildspecInput { get; }
```

- *Type:* string

---

##### `BuildStatusConfigInput`<sup>Optional</sup> <a name="BuildStatusConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput"></a>

```csharp
public CodebuildProjectSourceBuildStatusConfig BuildStatusConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---

##### `GitCloneDepthInput`<sup>Optional</sup> <a name="GitCloneDepthInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput"></a>

```csharp
public double GitCloneDepthInput { get; }
```

- *Type:* double

---

##### `GitSubmodulesConfigInput`<sup>Optional</sup> <a name="GitSubmodulesConfigInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput"></a>

```csharp
public CodebuildProjectSourceGitSubmodulesConfig GitSubmodulesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---

##### `InsecureSslInput`<sup>Optional</sup> <a name="InsecureSslInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput"></a>

```csharp
public object InsecureSslInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ReportBuildStatusInput`<sup>Optional</sup> <a name="ReportBuildStatusInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput"></a>

```csharp
public object ReportBuildStatusInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Buildspec`<sup>Required</sup> <a name="Buildspec" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec"></a>

```csharp
public string Buildspec { get; }
```

- *Type:* string

---

##### `GitCloneDepth`<sup>Required</sup> <a name="GitCloneDepth" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth"></a>

```csharp
public double GitCloneDepth { get; }
```

- *Type:* double

---

##### `InsecureSsl`<sup>Required</sup> <a name="InsecureSsl" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl"></a>

```csharp
public object InsecureSsl { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ReportBuildStatus`<sup>Required</sup> <a name="ReportBuildStatus" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus"></a>

```csharp
public object ReportBuildStatus { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---


### CodebuildProjectVpcConfigOutputReference <a name="CodebuildProjectVpcConfigOutputReference" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodebuildProjectVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildProjectVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---



