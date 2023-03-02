# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktf/provider-aws.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch aws_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyBranch(Construct Scope, string Id, AmplifyBranchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn">ResetBackendEnvironmentArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials">ResetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">ResetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification">ResetEnableNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">ResetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">ResetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework">ResetFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">ResetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackendEnvironmentArn` <a name="ResetBackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn"></a>

```csharp
private void ResetBackendEnvironmentArn()
```

##### `ResetBasicAuthCredentials` <a name="ResetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials"></a>

```csharp
private void ResetBasicAuthCredentials()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableAutoBuild` <a name="ResetEnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```csharp
private void ResetEnableAutoBuild()
```

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth"></a>

```csharp
private void ResetEnableBasicAuth()
```

##### `ResetEnableNotification` <a name="ResetEnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification"></a>

```csharp
private void ResetEnableNotification()
```

##### `ResetEnablePerformanceMode` <a name="ResetEnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```csharp
private void ResetEnablePerformanceMode()
```

##### `ResetEnablePullRequestPreview` <a name="ResetEnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```csharp
private void ResetEnablePullRequestPreview()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetFramework` <a name="ResetFramework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework"></a>

```csharp
private void ResetFramework()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPullRequestEnvironmentName` <a name="ResetPullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```csharp
private void ResetPullRequestEnvironmentName()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage"></a>

```csharp
private void ResetStage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmplifyBranch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmplifyBranch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmplifyBranch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources">AssociatedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains">CustomDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch">DestinationBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch">SourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput">BackendEnvironmentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput">BasicAuthCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput">BranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">EnableAutoBuildInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput">EnableNotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">EnablePerformanceModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">EnablePullRequestPreviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput">FrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">PullRequestEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn">BackendEnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification">EnableNotification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociatedResources`<sup>Required</sup> <a name="AssociatedResources" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources"></a>

```csharp
public string[] AssociatedResources { get; }
```

- *Type:* string[]

---

##### `CustomDomains`<sup>Required</sup> <a name="CustomDomains" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains"></a>

```csharp
public string[] CustomDomains { get; }
```

- *Type:* string[]

---

##### `DestinationBranch`<sup>Required</sup> <a name="DestinationBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch"></a>

```csharp
public string DestinationBranch { get; }
```

- *Type:* string

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch"></a>

```csharp
public string SourceBranch { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `BackendEnvironmentArnInput`<sup>Optional</sup> <a name="BackendEnvironmentArnInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput"></a>

```csharp
public string BackendEnvironmentArnInput { get; }
```

- *Type:* string

---

##### `BasicAuthCredentialsInput`<sup>Optional</sup> <a name="BasicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput"></a>

```csharp
public string BasicAuthCredentialsInput { get; }
```

- *Type:* string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```csharp
public string BranchNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableAutoBuildInput`<sup>Optional</sup> <a name="EnableAutoBuildInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```csharp
public object EnableAutoBuildInput { get; }
```

- *Type:* object

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput"></a>

```csharp
public object EnableBasicAuthInput { get; }
```

- *Type:* object

---

##### `EnableNotificationInput`<sup>Optional</sup> <a name="EnableNotificationInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput"></a>

```csharp
public object EnableNotificationInput { get; }
```

- *Type:* object

---

##### `EnablePerformanceModeInput`<sup>Optional</sup> <a name="EnablePerformanceModeInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```csharp
public object EnablePerformanceModeInput { get; }
```

- *Type:* object

---

##### `EnablePullRequestPreviewInput`<sup>Optional</sup> <a name="EnablePullRequestPreviewInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```csharp
public object EnablePullRequestPreviewInput { get; }
```

- *Type:* object

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```csharp
public string FrameworkInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="PullRequestEnvironmentNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```csharp
public string PullRequestEnvironmentNameInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `BackendEnvironmentArn`<sup>Required</sup> <a name="BackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn"></a>

```csharp
public string BackendEnvironmentArn { get; }
```

- *Type:* string

---

##### `BasicAuthCredentials`<sup>Required</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials"></a>

```csharp
public string BasicAuthCredentials { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableAutoBuild`<sup>Required</sup> <a name="EnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```csharp
public object EnableAutoBuild { get; }
```

- *Type:* object

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth"></a>

```csharp
public object EnableBasicAuth { get; }
```

- *Type:* object

---

##### `EnableNotification`<sup>Required</sup> <a name="EnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification"></a>

```csharp
public object EnableNotification { get; }
```

- *Type:* object

---

##### `EnablePerformanceMode`<sup>Required</sup> <a name="EnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```csharp
public object EnablePerformanceMode { get; }
```

- *Type:* object

---

##### `EnablePullRequestPreview`<sup>Required</sup> <a name="EnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```csharp
public object EnablePullRequestPreview { get; }
```

- *Type:* object

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PullRequestEnvironmentName`<sup>Required</sup> <a name="PullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```csharp
public string PullRequestEnvironmentName { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyBranchConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string BranchName,
    string BackendEnvironmentArn = null,
    string BasicAuthCredentials = null,
    string Description = null,
    string DisplayName = null,
    object EnableAutoBuild = null,
    object EnableBasicAuth = null,
    object EnableNotification = null,
    object EnablePerformanceMode = null,
    object EnablePullRequestPreview = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string Framework = null,
    string Id = null,
    string PullRequestEnvironmentName = null,
    string Stage = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName">BranchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn">BackendEnvironmentArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification">EnableNotification</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework">Framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage">Stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl">Ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```csharp
public string BranchName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `BackendEnvironmentArn`<sup>Optional</sup> <a name="BackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn"></a>

```csharp
public string BackendEnvironmentArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}.

---

##### `BasicAuthCredentials`<sup>Optional</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials"></a>

```csharp
public string BasicAuthCredentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}.

---

##### `EnableAutoBuild`<sup>Optional</sup> <a name="EnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```csharp
public object EnableAutoBuild { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth"></a>

```csharp
public object EnableBasicAuth { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `EnableNotification`<sup>Optional</sup> <a name="EnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification"></a>

```csharp
public object EnableNotification { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}.

---

##### `EnablePerformanceMode`<sup>Optional</sup> <a name="EnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```csharp
public object EnablePerformanceMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `EnablePullRequestPreview`<sup>Optional</sup> <a name="EnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```csharp
public object EnablePullRequestPreview { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `Framework`<sup>Optional</sup> <a name="Framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```csharp
public string Framework { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PullRequestEnvironmentName`<sup>Optional</sup> <a name="PullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```csharp
public string PullRequestEnvironmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}.

---



